const actions = {
	loadAssets: ({ url }) => {
		let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.response != null) {
					actions.decodeAssets((Zip.inflate(new Uint8Array(this.response))).files);
                }
            }
        };
        xhr.responseType = 'arraybuffer';
        xhr.send();
	},
	decodeAssets: (files) => {
		const movie = JSON.parse(new TextDecoder('utf-8').decode(files['movie.spec'].inflate()));
		const images = {};
		for(let item in movie.images){
			images[item] = files[`${ item }.png`].inflate();
		}
		postMessage({
			files,
			movie,
			images,
		})
	}
}

onmessage = ({ data }) => {
	if(actions[data.action]){
		actions[data.action](data.args);
	}
};

// zip decode
(function(J){function A(){this.list=this.next=null}function C(){this.n=this.b=this.e=0;this.t=null}function n(a,d,i,c,b,q){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var t=new Uint32Array(this.BMAX+1),o,e,l,k,f,h,g,m=new Uint32Array(this.BMAX+1),r,n,y,v=new C,s=Array(this.BMAX);k=new Uint32Array(this.N_MAX);var w,p=new Uint32Array(this.BMAX+1),u,z,x;x=this.root=null;for(f=0;f<t.length;f++)t[f]=0;for(f=0;f<m.length;f++)m[f]=0;for(f=0;f<s.length;f++)s[f]=null;for(f=0;f<k.length;f++)k[f]=
0;for(f=0;f<p.length;f++)p[f]=0;o=256<d?a[256]:this.BMAX;r=a;n=0;f=d;do t[r[n]]++,n++;while(0<--f);if(t[0]==d)this.root=null,this.status=this.m=0;else{for(h=1;h<=this.BMAX&&0==t[h];h++);g=h;q<h&&(q=h);for(f=this.BMAX;0!=f&&0==t[f];f--);l=f;q>f&&(q=f);for(u=1<<h;h<f;h++,u<<=1)if(0>(u-=t[h])){this.status=2;this.m=q;return}if(0>(u-=t[f]))this.status=2,this.m=q;else{t[f]+=u;p[1]=h=0;r=t;n=1;for(y=2;0<--f;)p[y++]=h+=r[n++];r=a;f=n=0;do if(0!=(h=r[n++]))k[p[h]++]=f;while(++f<d);d=p[l];p[0]=f=0;r=k;n=0;
k=-1;w=m[0]=0;y=null;for(z=0;g<=l;g++)for(a=t[g];0<a--;){for(;g>w+m[1+k];){w+=m[1+k];k++;z=(z=l-w)>q?q:z;if((e=1<<(h=g-w))>a+1){e-=a+1;for(y=g;++h<z&&!((e<<=1)<=t[++y]);)e-=t[y]}w+h>o&&w<o&&(h=o-w);z=1<<h;m[1+k]=h;y=Array(z);for(e=0;e<z;e++)y[e]=new C;x=null==x?this.root=new A:x.next=new A;x.next=null;x.list=y;s[k]=y;0<k&&(p[k]=f,v.b=m[k],v.e=16+h,v.t=y,h=(f&(1<<w)-1)>>w-m[k],s[k-1][h].e=v.e,s[k-1][h].b=v.b,s[k-1][h].n=v.n,s[k-1][h].t=v.t)}v.b=g-w;n>=d?v.e=99:r[n]<i?(v.e=256>r[n]?16:15,v.n=r[n++]):
(v.e=b[r[n]-i],v.n=c[r[n++]-i]);e=1<<g-w;for(h=f>>w;h<z;h+=e)y[h].e=v.e,y[h].b=v.b,y[h].n=v.n,y[h].t=v.t;for(h=1<<g-1;0!=(f&h);h>>=1)f^=h;for(f^=h;(f&(1<<w)-1)!=p[k];)w-=m[k],k--}this.m=m[1];this.status=0!=u&&1!=l?1:0}}}function d(a){for(;D<a;){var d=F,i;i=K.length==N?-1:K[N++];F=d|i<<D;D+=8}}function g(a){return F&Z[a]}function l(a){F>>=a;D-=a}function L(a,n,i){var c,b,q;if(0==i)return 0;for(q=0;;){d(u);b=x.list[g(u)];for(c=b.e;16<c;){if(99==c)return-1;l(b.b);c-=16;d(c);b=b.t[g(c)];c=b.e}l(b.b);
if(16==c)m&=G-1,a[n+q++]=E[m++]=b.n;else{if(15==c)break;d(c);r=b.n+g(c);l(c);d(H);b=R.list[g(H)];for(c=b.e;16<c;){if(99==c)return-1;l(b.b);c-=16;d(c);b=b.t[g(c)];c=b.e}l(b.b);d(c);I=m-b.n-g(c);l(c);c=r;b=I;for(var t=G-1,o=m,e=a,p=E;0<c&&q<i;)--c,b&=t,o&=t,e[n+q]=p[o]=p[b],++q,++o,++b;r=c;I=b;m=o}if(q==i)return i}B=-1;return q}function a(a,r,i){var c,b,q,t,o,e,m,k=new Uint32Array(316);for(c=0;c<k.length;c++)k[c]=0;d(5);e=257+g(5);l(5);d(5);m=1+g(5);l(5);d(4);c=4+g(4);l(4);if(286<e||30<m)return-1;for(b=
0;b<c;b++)d(3),k[S[b]]=g(3),l(3);for(;19>b;b++)k[S[b]]=0;u=7;b=new n(k,19,19,null,null,u);if(0!=b.status)return-1;x=b.root;u=b.m;t=e+m;for(c=q=0;c<t;)if(d(u),o=x.list[g(u)],b=o.b,l(b),b=o.n,16>b)k[c++]=q=b;else if(16==b){d(2);b=3+g(2);l(2);if(c+b>t)return-1;for(;0<b--;)k[c++]=q}else{17==b?(d(3),b=3+g(3),l(3)):(d(7),b=11+g(7),l(7));if(c+b>t)return-1;for(;0<b--;)k[c++]=0;q=0}u=$;b=new n(k,e,257,T,U,u);0==u&&(b.status=1);if(0!=b.status)return-1;x=b.root;u=b.m;for(c=0;c<m;c++)k[c]=k[c+e];H=aa;b=new n(k,
m,0,V,W,H);R=b.root;H=b.m;return 0==H&&257<e||0!=b.status?-1:L(a,r,i)}function z(){null==E&&(E=new Uint8Array(2*G));D=F=m=0;B=-1;M=!1;r=I=0;x=null}function p(p,s,i){var c,b;for(c=0;c<i&&!(M&&-1==B);){if(0<r){if(B!=ba)for(;0<r&&c<i;)r--,I&=G-1,m&=G-1,p[s+c++]=E[m++]=E[I++];else{for(;0<r&&c<i;)r--,m&=G-1,d(8),p[s+c++]=E[m++]=g(8),l(8);0==r&&(B=-1)}if(c==i)break}if(-1==B){if(M)break;d(1);0!=g(1)&&(M=!0);l(1);d(2);B=g(2);l(2);x=null;r=0}switch(B){case 0:b=p;var q=s+c,t=i-c,o=void 0,o=D&7;l(o);d(16);o=
g(16);l(16);d(16);if(o!=(~F&65535))b=-1;else{l(16);r=o;for(o=0;0<r&&o<t;)r--,m&=G-1,d(8),b[q+o++]=E[m++]=g(8),l(8);0==r&&(B=-1);b=o}break;case 1:if(null!=x)b=L(p,s+c,i-c);else a:{b=p;q=s+c;t=i-c;if(null==O){for(var e=void 0,o=new Uint32Array(288),e=void 0,e=0;144>e;e++)o[e]=8;for(;256>e;e++)o[e]=9;for(;280>e;e++)o[e]=7;for(;288>e;e++)o[e]=8;P=7;e=new n(o,288,257,T,U,P);if(0!=e.status){alert("HufBuild error: "+e.status);b=-1;break a}O=e.root;P=e.m;for(e=0;30>e;e++)o[e]=5;zip_fixed_bd=5;e=new n(o,30,
0,V,W,zip_fixed_bd);if(1<e.status){O=null;alert("HufBuild error: "+e.status);b=-1;break a}X=e.root;zip_fixed_bd=e.m}x=O;R=X;u=P;H=zip_fixed_bd;b=L(b,q,t)}break;case 2:b=null!=x?L(p,s+c,i-c):a(p,s+c,i-c);break;default:b=-1}if(-1==b)return M?0:-1;c+=b}return c}function s(a,d){var i=p(d,0,d.length);if(0<i){var c="";for(j=0;j<i;j++)c+=String.fromCharCode(d[j]);a.write(c)}return i}var Y=0,G=32768,ba=0,$=9,aa=6,E,m,O=null,X,P,F,D,B,M,r,I,x,R,u,H,K,N,Z=new Uint16Array([0,1,3,7,15,31,63,127,255,511,1023,
2047,4095,8191,16383,32767,65535]),T=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),U=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99]),V=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),W=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),S=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,
3,13,2,14,1,15]),Q={};if("object"==typeof module){module.exports=Q;var ca=require("fs")}else J.JSInflate=Q;Q.inflate=function(a,d){Y=0;var i,c,b,q=0;z();K=a;N=0;c=new Uint8Array(1024);for(i=new Uint8Array(d||1024);0<(b=p(c,0,c.length));){if(q+b>i.length){var g=new Uint8Array(2*i.length);g.set(i,0);i=g}i.set(c.subarray(0,b),q);q+=b}K=null;return i.subarray(0,q)};Q.inflateStream=function(a,d,i){var c,b;z();K=a;b=N=0;var g=ca.createWriteStream(d);c=new Uint8Array(1024);var p=0;g.on("drain",
function(){p=s(g,c);0<p?b+=p:(K=null,i(b))});b+=s(g,c)}})(this);
(function(){var J="\u3000\u3001\u3002\uff0c\uff0e\u30fb\uff1a\uff1b\uff1f\uff01\u309b\u309c\u00b4\uff40\u00a8\uff3e\uffe3\uff3f\u30fd\u30fe\u309d\u309e\u3003\u4edd\u3005\u3006\u3007\u30fc\u2015\u2010\uff0f\u301c\u2016\uff5c\u2026\u2025\u2018\u2019\u201c\u201d\uff08\uff09\u3014\u3015\uff3b\uff3d\uff5b\uff5d\u3008\u3009\u300a\u300b\u300c\u300d\u300e\u300f\u3010\u3011\uff0b\u2212\u00b1\u00d7 \u00f7\uff1d\u2260\uff1c\uff1e\u2266\u2267\u221e\u2234\u2642\u2640\u00b0\u2032\u2033\u2103\uffe5\uff04\u00a2\u00a3\uff05\uff03\uff06\uff0a\uff20\u00a7\u2606\u2605\u25cb\u25cf\u25ce\u25c7\u25c6\u25a1\u25a0\u25b3\u25b2\u25bd\u25bc\u203b\u3012\u2192\u2190\u2191\u2193\u3013~0b\u2208\u220b\u2286\u2287\u2282\u2283\u222a\u2229~08\u2227\u2228\u00ac\u21d2\u21d4\u2200\u2203~0b\u2220\u22a5\u2312\u2202\u2207\u2261\u2252\u226a\u226b\u221a\u223d\u221d\u2235\u222b\u222c~07\u212b\u2030\u266f\u266d\u266a\u2020\u2021\u00b6~04\u25ef~2a\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19~07\uff21\uff22\uff23\uff24\uff25\uff26\uff27\uff28\uff29\uff2a\uff2b\uff2c\uff2d\uff2e\uff2f\uff30\uff31\uff32\uff33\uff34\uff35\uff36\uff37\uff38\uff39\uff3a~07\uff41\uff42\uff43\uff44\uff45\uff46\uff47\uff48\uff49\uff4a\uff4b\uff4c\uff4d\uff4e\uff4f\uff50\uff51\uff52\uff53\uff54\uff55\uff56\uff57\uff58\uff59\uff5a~04\u3041\u3042\u3043\u3044\u3045\u3046\u3047\u3048\u3049\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3063\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3083\u3084\u3085\u3086\u3087\u3088\u3089\u308a\u308b\u308c\u308d\u308e\u308f\u3090\u3091\u3092\u3093~26\u30a1\u30a2\u30a3\u30a4\u30a5\u30a6\u30a7\u30a8\u30a9\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c3\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df \u30e0\u30e1\u30e2\u30e3\u30e4\u30e5\u30e6\u30e7\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ee\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f5\u30f6~08\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a3\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9~08\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9~2x\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f~0f\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d \u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f~0d\u2500\u2502\u250c\u2510\u2518\u2514\u251c\u252c\u2524\u2534\u253c\u2501\u2503\u250f\u2513\u251b\u2517\u2523\u2533\u252b\u253b\u254b\u2520\u252f\u2528\u2537\u253f\u251d\u2530\u2525\u2538\u2542~rk\u4e9c\u5516\u5a03\u963f\u54c0\u611b\u6328\u59f6\u9022\u8475\u831c\u7a50\u60aa\u63e1\u6e25\u65ed\u8466\u82a6\u9bf5\u6893\u5727\u65a1\u6271\u5b9b\u59d0\u867b\u98f4\u7d62\u7dbe\u9b8e\u6216\u7c9f\u88b7\u5b89\u5eb5\u6309\u6697\u6848\u95c7\u978d\u674f\u4ee5\u4f0a\u4f4d\u4f9d\u5049\u56f2\u5937\u59d4\u5a01\u5c09\u60df\u610f\u6170\u6613\u6905\u70ba\u754f\u7570\u79fb\u7dad\u7def\u80c3\u840e\u8863\u8b02\u9055\u907a\u533b\u4e95\u4ea5\u57df\u80b2\u90c1\u78ef\u4e00\u58f1\u6ea2\u9038\u7a32\u8328\u828b\u9c2f\u5141\u5370\u54bd\u54e1\u56e0\u59fb\u5f15\u98f2\u6deb\u80e4\u852d~1v\u9662\u9670\u96a0\u97fb\u540b\u53f3\u5b87\u70cf\u7fbd\u8fc2\u96e8\u536f\u9d5c\u7aba\u4e11\u7893\u81fc\u6e26\u5618\u5504\u6b1d\u851a\u9c3b\u59e5\u53a9\u6d66\u74dc\u958f\u5642\u4e91\u904b\u96f2\u834f\u990c\u53e1\u55b6\u5b30\u5f71\u6620\u66f3\u6804\u6c38\u6cf3\u6d29\u745b\u76c8\u7a4e\u9834\u82f1\u885b\u8a60\u92ed\u6db2\u75ab\u76ca\u99c5\u60a6\u8b01\u8d8a\u95b2\u698e\u53ad\u5186 \u5712\u5830\u5944\u5bb4\u5ef6\u6028\u63a9\u63f4\u6cbf\u6f14\u708e\u7114\u7159\u71d5\u733f\u7e01\u8276\u82d1\u8597\u9060\u925b\u9d1b\u5869\u65bc\u6c5a\u7525\u51f9\u592e\u5965\u5f80\u5fdc\u62bc\u65fa\u6a2a\u6b27\u6bb4\u738b\u7fc1\u8956\u9d2c\u9d0e\u9ec4\u5ca1\u6c96\u837b\u5104\u5c4b\u61b6\u81c6\u6876\u7261\u4e59\u4ffa\u5378\u6069\u6e29\u7a4f\u97f3\u4e0b\u5316\u4eee\u4f55\u4f3d\u4fa1\u4f73\u52a0\u53ef\u5609\u590f\u5ac1\u5bb6\u5be1\u79d1\u6687\u679c\u67b6\u6b4c\u6cb3\u706b\u73c2\u798d\u79be\u7a3c\u7b87\u82b1\u82db\u8304\u8377\u83ef\u83d3\u8766\u8ab2\u5629\u8ca8\u8fe6\u904e\u971e\u868a\u4fc4\u5ce8\u6211\u7259\u753b\u81e5\u82bd\u86fe\u8cc0\u96c5\u9913\u99d5\u4ecb\u4f1a\u89e3\u56de\u584a\u58ca\u5efb\u5feb\u602a\u6094\u6062\u61d0\u6212\u62d0\u6539~1v\u9b41\u6666\u68b0\u6d77\u7070\u754c\u7686\u7d75\u82a5\u87f9\u958b\u968e\u8c9d\u51f1\u52be\u5916\u54b3\u5bb3\u5d16\u6168\u6982\u6daf\u788d\u84cb\u8857\u8a72\u93a7\u9ab8\u6d6c\u99a8\u86d9\u57a3\u67ff\u86ce\u920e\u5283\u5687\u5404\u5ed3\u62e1\u64b9\u683c\u6838\u6bbb\u7372\u78ba\u7a6b\u899a\u89d2\u8d6b\u8f03\u90ed\u95a3\u9694\u9769\u5b66\u5cb3\u697d\u984d\u984e\u639b\u7b20\u6a2b \u6a7f\u68b6\u9c0d\u6f5f\u5272\u559d\u6070\u62ec\u6d3b\u6e07\u6ed1\u845b\u8910\u8f44\u4e14\u9c39\u53f6\u691b\u6a3a\u9784\u682a\u515c\u7ac3\u84b2\u91dc\u938c\u565b\u9d28\u6822\u8305\u8431\u7ca5\u5208\u82c5\u74e6\u4e7e\u4f83\u51a0\u5bd2\u520a\u52d8\u52e7\u5dfb\u559a\u582a\u59e6\u5b8c\u5b98\u5bdb\u5e72\u5e79\u60a3\u611f\u6163\u61be\u63db\u6562\u67d1\u6853\u68fa\u6b3e\u6b53\u6c57\u6f22\u6f97\u6f45\u74b0\u7518\u76e3\u770b\u7aff\u7ba1\u7c21\u7de9\u7f36\u7ff0\u809d\u8266\u839e\u89b3\u8acc\u8cab\u9084\u9451\u9593\u9591\u95a2\u9665\u97d3\u9928\u8218\u4e38\u542b\u5cb8\u5dcc\u73a9\u764c\u773c\u5ca9\u7feb\u8d0b\u96c1\u9811\u9854\u9858\u4f01\u4f0e\u5371\u559c\u5668\u57fa\u5947\u5b09\u5bc4\u5c90\u5e0c\u5e7e\u5fcc\u63ee\u673a\u65d7\u65e2\u671f\u68cb\u68c4~1v\u6a5f\u5e30\u6bc5\u6c17\u6c7d\u757f\u7948\u5b63\u7a00\u7d00\u5fbd\u898f\u8a18\u8cb4\u8d77\u8ecc\u8f1d\u98e2\u9a0e\u9b3c\u4e80\u507d\u5100\u5993\u5b9c\u622f\u6280\u64ec\u6b3a\u72a0\u7591\u7947\u7fa9\u87fb\u8abc\u8b70\u63ac\u83ca\u97a0\u5409\u5403\u55ab\u6854\u6a58\u8a70\u7827\u6775\u9ecd\u5374\u5ba2\u811a\u8650\u9006\u4e18\u4e45\u4ec7\u4f11\u53ca\u5438\u5bae\u5f13\u6025\u6551 \u673d\u6c42\u6c72\u6ce3\u7078\u7403\u7a76\u7aae\u7b08\u7d1a\u7cfe\u7d66\u65e7\u725b\u53bb\u5c45\u5de8\u62d2\u62e0\u6319\u6e20\u865a\u8a31\u8ddd\u92f8\u6f01\u79a6\u9b5a\u4ea8\u4eab\u4eac\u4f9b\u4fa0\u50d1\u5147\u7af6\u5171\u51f6\u5354\u5321\u537f\u53eb\u55ac\u5883\u5ce1\u5f37\u5f4a\u602f\u6050\u606d\u631f\u6559\u6a4b\u6cc1\u72c2\u72ed\u77ef\u80f8\u8105\u8208\u854e\u90f7\u93e1\u97ff\u9957\u9a5a\u4ef0\u51dd\u5c2d\u6681\u696d\u5c40\u66f2\u6975\u7389\u6850\u7c81\u50c5\u52e4\u5747\u5dfe\u9326\u65a4\u6b23\u6b3d\u7434\u7981\u79bd\u7b4b\u7dca\u82b9\u83cc\u887f\u895f\u8b39\u8fd1\u91d1\u541f\u9280\u4e5d\u5036\u53e5\u533a\u72d7\u7396\u77e9\u82e6\u8eaf\u99c6\u99c8\u99d2\u5177\u611a\u865e\u55b0\u7a7a\u5076\u5bd3\u9047\u9685\u4e32\u6adb\u91e7\u5c51\u5c48~1v\u6398\u7a9f\u6c93\u9774\u8f61\u7aaa\u718a\u9688\u7c82\u6817\u7e70\u6851\u936c\u52f2\u541b\u85ab\u8a13\u7fa4\u8ecd\u90e1\u5366\u8888\u7941\u4fc2\u50be\u5211\u5144\u5553\u572d\u73ea\u578b\u5951\u5f62\u5f84\u6075\u6176\u6167\u61a9\u63b2\u643a\u656c\u666f\u6842\u6e13\u7566\u7a3d\u7cfb\u7d4c\u7d99\u7e4b\u7f6b\u830e\u834a\u86cd\u8a08\u8a63\u8b66\u8efd\u981a\u9d8f\u82b8\u8fce\u9be8 \u5287\u621f\u6483\u6fc0\u9699\u6841\u5091\u6b20\u6c7a\u6f54\u7a74\u7d50\u8840\u8a23\u6708\u4ef6\u5039\u5026\u5065\u517c\u5238\u5263\u55a7\u570f\u5805\u5acc\u5efa\u61b2\u61f8\u62f3\u6372\u691c\u6a29\u727d\u72ac\u732e\u7814\u786f\u7d79\u770c\u80a9\u898b\u8b19\u8ce2\u8ed2\u9063\u9375\u967a\u9855\u9a13\u9e78\u5143\u539f\u53b3\u5e7b\u5f26\u6e1b\u6e90\u7384\u73fe\u7d43\u8237\u8a00\u8afa\u9650\u4e4e\u500b\u53e4\u547c\u56fa\u59d1\u5b64\u5df1\u5eab\u5f27\u6238\u6545\u67af\u6e56\u72d0\u7cca\u88b4\u80a1\u80e1\u83f0\u864e\u8a87\u8de8\u9237\u96c7\u9867\u9f13\u4e94\u4e92\u4f0d\u5348\u5449\u543e\u5a2f\u5f8c\u5fa1\u609f\u68a7\u6a8e\u745a\u7881\u8a9e\u8aa4\u8b77\u9190\u4e5e\u9bc9\u4ea4\u4f7c\u4faf\u5019\u5016\u5149\u516c\u529f\u52b9\u52fe\u539a\u53e3\u5411~1v\u540e\u5589\u5751\u57a2\u597d\u5b54\u5b5d\u5b8f\u5de5\u5de7\u5df7\u5e78\u5e83\u5e9a\u5eb7\u5f18\u6052\u614c\u6297\u62d8\u63a7\u653b\u6602\u6643\u66f4\u676d\u6821\u6897\u69cb\u6c5f\u6d2a\u6d69\u6e2f\u6e9d\u7532\u7687\u786c\u7a3f\u7ce0\u7d05\u7d18\u7d5e\u7db1\u8015\u8003\u80af\u80b1\u8154\u818f\u822a\u8352\u884c\u8861\u8b1b\u8ca2\u8cfc\u90ca\u9175\u9271\u783f\u92fc\u95a4\u964d \u9805\u9999\u9ad8\u9d3b\u525b\u52ab\u53f7\u5408\u58d5\u62f7\u6fe0\u8c6a\u8f5f\u9eb9\u514b\u523b\u544a\u56fd\u7a40\u9177\u9d60\u9ed2\u7344\u6f09\u8170\u7511\u5ffd\u60da\u9aa8\u72db\u8fbc\u6b64\u9803\u4eca\u56f0\u5764\u58be\u5a5a\u6068\u61c7\u660f\u6606\u6839\u68b1\u6df7\u75d5\u7d3a\u826e\u9b42\u4e9b\u4f50\u53c9\u5506\u5d6f\u5de6\u5dee\u67fb\u6c99\u7473\u7802\u8a50\u9396\u88df\u5750\u5ea7\u632b\u50b5\u50ac\u518d\u6700\u54c9\u585e\u59bb\u5bb0\u5f69\u624d\u63a1\u683d\u6b73\u6e08\u707d\u91c7\u7280\u7815\u7826\u796d\u658e\u7d30\u83dc\u88c1\u8f09\u969b\u5264\u5728\u6750\u7f6a\u8ca1\u51b4\u5742\u962a\u583a\u698a\u80b4\u54b2\u5d0e\u57fc\u7895\u9dfa\u4f5c\u524a\u548b\u643e\u6628\u6714\u67f5\u7a84\u7b56\u7d22\u932f\u685c\u9bad\u7b39\u5319\u518a\u5237~1v\u5bdf\u62f6\u64ae\u64e6\u672d\u6bba\u85a9\u96d1\u7690\u9bd6\u634c\u9306\u9bab\u76bf\u6652\u4e09\u5098\u53c2\u5c71\u60e8\u6492\u6563\u685f\u71e6\u73ca\u7523\u7b97\u7e82\u8695\u8b83\u8cdb\u9178\u9910\u65ac\u66ab\u6b8b\u4ed5\u4ed4\u4f3a\u4f7f\u523a\u53f8\u53f2\u55e3\u56db\u58eb\u59cb\u59c9\u59ff\u5b50\u5c4d\u5e02\u5e2b\u5fd7\u601d\u6307\u652f\u5b5c\u65af\u65bd\u65e8\u679d\u6b62 \u6b7b\u6c0f\u7345\u7949\u79c1\u7cf8\u7d19\u7d2b\u80a2\u8102\u81f3\u8996\u8a5e\u8a69\u8a66\u8a8c\u8aee\u8cc7\u8cdc\u96cc\u98fc\u6b6f\u4e8b\u4f3c\u4f8d\u5150\u5b57\u5bfa\u6148\u6301\u6642\u6b21\u6ecb\u6cbb\u723e\u74bd\u75d4\u78c1\u793a\u800c\u8033\u81ea\u8494\u8f9e\u6c50\u9e7f\u5f0f\u8b58\u9d2b\u7afa\u8ef8\u5b8d\u96eb\u4e03\u53f1\u57f7\u5931\u5ac9\u5ba4\u6089\u6e7f\u6f06\u75be\u8cea\u5b9f\u8500\u7be0\u5072\u67f4\u829d\u5c61\u854a\u7e1e\u820e\u5199\u5c04\u6368\u8d66\u659c\u716e\u793e\u7d17\u8005\u8b1d\u8eca\u906e\u86c7\u90aa\u501f\u52fa\u5c3a\u6753\u707c\u7235\u914c\u91c8\u932b\u82e5\u5bc2\u5f31\u60f9\u4e3b\u53d6\u5b88\u624b\u6731\u6b8a\u72e9\u73e0\u7a2e\u816b\u8da3\u9152\u9996\u5112\u53d7\u546a\u5bff\u6388\u6a39\u7dac\u9700\u56da\u53ce\u5468~1v\u5b97\u5c31\u5dde\u4fee\u6101\u62fe\u6d32\u79c0\u79cb\u7d42\u7e4d\u7fd2\u81ed\u821f\u8490\u8846\u8972\u8b90\u8e74\u8f2f\u9031\u914b\u916c\u96c6\u919c\u4ec0\u4f4f\u5145\u5341\u5f93\u620e\u67d4\u6c41\u6e0b\u7363\u7e26\u91cd\u9283\u53d4\u5919\u5bbf\u6dd1\u795d\u7e2e\u7c9b\u587e\u719f\u51fa\u8853\u8ff0\u4fca\u5cfb\u6625\u77ac\u7ae3\u821c\u99ff\u51c6\u5faa\u65ec\u696f\u6b89\u6df3 \u6e96\u6f64\u76fe\u7d14\u5de1\u9075\u9187\u9806\u51e6\u521d\u6240\u6691\u66d9\u6e1a\u5eb6\u7dd2\u7f72\u66f8\u85af\u85f7\u8af8\u52a9\u53d9\u5973\u5e8f\u5f90\u6055\u92e4\u9664\u50b7\u511f\u52dd\u5320\u5347\u53ec\u54e8\u5546\u5531\u5617\u5968\u59be\u5a3c\u5bb5\u5c06\u5c0f\u5c11\u5c1a\u5e84\u5e8a\u5ee0\u5f70\u627f\u6284\u62db\u638c\u6377\u6607\u660c\u662d\u6676\u677e\u68a2\u6a1f\u6a35\u6cbc\u6d88\u6e09\u6e58\u713c\u7126\u7167\u75c7\u7701\u785d\u7901\u7965\u79f0\u7ae0\u7b11\u7ca7\u7d39\u8096\u83d6\u848b\u8549\u885d\u88f3\u8a1f\u8a3c\u8a54\u8a73\u8c61\u8cde\u91a4\u9266\u937e\u9418\u969c\u9798\u4e0a\u4e08\u4e1e\u4e57\u5197\u5270\u57ce\u5834\u58cc\u5b22\u5e38\u60c5\u64fe\u6761\u6756\u6d44\u72b6\u7573\u7a63\u84b8\u8b72\u91b8\u9320\u5631\u57f4\u98fe~1v\u62ed\u690d\u6b96\u71ed\u7e54\u8077\u8272\u89e6\u98df\u8755\u8fb1\u5c3b\u4f38\u4fe1\u4fb5\u5507\u5a20\u5bdd\u5be9\u5fc3\u614e\u632f\u65b0\u664b\u68ee\u699b\u6d78\u6df1\u7533\u75b9\u771f\u795e\u79e6\u7d33\u81e3\u82af\u85aa\u89aa\u8a3a\u8eab\u8f9b\u9032\u91dd\u9707\u4eba\u4ec1\u5203\u5875\u58ec\u5c0b\u751a\u5c3d\u814e\u8a0a\u8fc5\u9663\u976d\u7b25\u8acf\u9808\u9162\u56f3\u53a8 \u9017\u5439\u5782\u5e25\u63a8\u6c34\u708a\u7761\u7c8b\u7fe0\u8870\u9042\u9154\u9310\u9318\u968f\u745e\u9ac4\u5d07\u5d69\u6570\u67a2\u8da8\u96db\u636e\u6749\u6919\u83c5\u9817\u96c0\u88fe\u6f84\u647a\u5bf8\u4e16\u702c\u755d\u662f\u51c4\u5236\u52e2\u59d3\u5f81\u6027\u6210\u653f\u6574\u661f\u6674\u68f2\u6816\u6b63\u6e05\u7272\u751f\u76db\u7cbe\u8056\u58f0\u88fd\u897f\u8aa0\u8a93\u8acb\u901d\u9192\u9752\u9759\u6589\u7a0e\u8106\u96bb\u5e2d\u60dc\u621a\u65a5\u6614\u6790\u77f3\u7a4d\u7c4d\u7e3e\u810a\u8cac\u8d64\u8de1\u8e5f\u78a9\u5207\u62d9\u63a5\u6442\u6298\u8a2d\u7a83\u7bc0\u8aac\u96ea\u7d76\u820c\u8749\u4ed9\u5148\u5343\u5360\u5ba3\u5c02\u5c16\u5ddd\u6226\u6247\u64b0\u6813\u6834\u6cc9\u6d45\u6d17\u67d3\u6f5c\u714e\u717d\u65cb\u7a7f\u7bad\u7dda~1v\u7e4a\u7fa8\u817a\u821b\u8239\u85a6\u8a6e\u8cce\u8df5\u9078\u9077\u92ad\u9291\u9583\u9bae\u524d\u5584\u6f38\u7136\u5168\u7985\u7e55\u81b3\u7cce\u564c\u5851\u5ca8\u63aa\u66fe\u66fd\u695a\u72d9\u758f\u758e\u790e\u7956\u79df\u7c97\u7d20\u7d44\u8607\u8a34\u963b\u9061\u9f20\u50e7\u5275\u53cc\u53e2\u5009\u55aa\u58ee\u594f\u723d\u5b8b\u5c64\u531d\u60e3\u60f3\u635c\u6383\u633f\u63bb \u64cd\u65e9\u66f9\u5de3\u69cd\u69fd\u6f15\u71e5\u4e89\u75e9\u76f8\u7a93\u7cdf\u7dcf\u7d9c\u8061\u8349\u8358\u846c\u84bc\u85fb\u88c5\u8d70\u9001\u906d\u9397\u971c\u9a12\u50cf\u5897\u618e\u81d3\u8535\u8d08\u9020\u4fc3\u5074\u5247\u5373\u606f\u6349\u675f\u6e2c\u8db3\u901f\u4fd7\u5c5e\u8cca\u65cf\u7d9a\u5352\u8896\u5176\u63c3\u5b58\u5b6b\u5c0a\u640d\u6751\u905c\u4ed6\u591a\u592a\u6c70\u8a51\u553e\u5815\u59a5\u60f0\u6253\u67c1\u8235\u6955\u9640\u99c4\u9a28\u4f53\u5806\u5bfe\u8010\u5cb1\u5e2f\u5f85\u6020\u614b\u6234\u66ff\u6cf0\u6ede\u80ce\u817f\u82d4\u888b\u8cb8\u9000\u902e\u968a\u9edb\u9bdb\u4ee3\u53f0\u5927\u7b2c\u918d\u984c\u9df9\u6edd\u7027\u5353\u5544\u5b85\u6258\u629e\u62d3\u6ca2\u6fef\u7422\u8a17\u9438\u6fc1\u8afe\u8338\u51e7\u86f8\u53ea~1v\u53e9\u4f46\u9054\u8fb0\u596a\u8131\u5dfd\u7aea\u8fbf\u68da\u8c37\u72f8\u9c48\u6a3d\u8ab0\u4e39\u5358\u5606\u5766\u62c5\u63a2\u65e6\u6b4e\u6de1\u6e5b\u70ad\u77ed\u7aef\u7baa\u7dbb\u803d\u80c6\u86cb\u8a95\u935b\u56e3\u58c7\u5f3e\u65ad\u6696\u6a80\u6bb5\u7537\u8ac7\u5024\u77e5\u5730\u5f1b\u6065\u667a\u6c60\u75f4\u7a1a\u7f6e\u81f4\u8718\u9045\u99b3\u7bc9\u755c\u7af9\u7b51\u84c4 \u9010\u79e9\u7a92\u8336\u5ae1\u7740\u4e2d\u4ef2\u5b99\u5fe0\u62bd\u663c\u67f1\u6ce8\u866b\u8877\u8a3b\u914e\u92f3\u99d0\u6a17\u7026\u732a\u82e7\u8457\u8caf\u4e01\u5146\u51cb\u558b\u5bf5\u5e16\u5e33\u5e81\u5f14\u5f35\u5f6b\u5fb4\u61f2\u6311\u66a2\u671d\u6f6e\u7252\u753a\u773a\u8074\u8139\u8178\u8776\u8abf\u8adc\u8d85\u8df3\u929a\u9577\u9802\u9ce5\u52c5\u6357\u76f4\u6715\u6c88\u73cd\u8cc3\u93ae\u9673\u6d25\u589c\u690e\u69cc\u8ffd\u939a\u75db\u901a\u585a\u6802\u63b4\u69fb\u4f43\u6f2c\u67d8\u8fbb\u8526\u7db4\u9354\u693f\u6f70\u576a\u58f7\u5b2c\u7d2c\u722a\u540a\u91e3\u9db4\u4ead\u4f4e\u505c\u5075\u5243\u8c9e\u5448\u5824\u5b9a\u5e1d\u5e95\u5ead\u5ef7\u5f1f\u608c\u62b5\u633a\u63d0\u68af\u6c40\u7887\u798e\u7a0b\u7de0\u8247\u8a02\u8ae6\u8e44\u9013~1v\u90b8\u912d\u91d8\u9f0e\u6ce5\u6458\u64e2\u6575\u6ef4\u7684\u7b1b\u9069\u93d1\u6eba\u54f2\u5fb9\u64a4\u8f4d\u8fed\u9244\u5178\u586b\u5929\u5c55\u5e97\u6dfb\u7e8f\u751c\u8cbc\u8ee2\u985b\u70b9\u4f1d\u6bbf\u6fb1\u7530\u96fb\u514e\u5410\u5835\u5857\u59ac\u5c60\u5f92\u6597\u675c\u6e21\u767b\u83df\u8ced\u9014\u90fd\u934d\u7825\u783a\u52aa\u5ea6\u571f\u5974\u6012\u5012\u515a\u51ac \u51cd\u5200\u5510\u5854\u5858\u5957\u5b95\u5cf6\u5d8b\u60bc\u6295\u642d\u6771\u6843\u68bc\u68df\u76d7\u6dd8\u6e6f\u6d9b\u706f\u71c8\u5f53\u75d8\u7977\u7b49\u7b54\u7b52\u7cd6\u7d71\u5230\u8463\u8569\u85e4\u8a0e\u8b04\u8c46\u8e0f\u9003\u900f\u9419\u9676\u982d\u9a30\u95d8\u50cd\u52d5\u540c\u5802\u5c0e\u61a7\u649e\u6d1e\u77b3\u7ae5\u80f4\u8404\u9053\u9285\u5ce0\u9d07\u533f\u5f97\u5fb3\u6d9c\u7279\u7763\u79bf\u7be4\u6bd2\u72ec\u8aad\u6803\u6a61\u51f8\u7a81\u6934\u5c4a\u9cf6\u82eb\u5bc5\u9149\u701e\u5678\u5c6f\u60c7\u6566\u6c8c\u8c5a\u9041\u9813\u5451\u66c7\u920d\u5948\u90a3\u5185\u4e4d\u51ea\u8599\u8b0e\u7058\u637a\u934b\u6962\u99b4\u7e04\u7577\u5357\u6960\u8edf\u96e3\u6c5d\u4e8c\u5c3c\u5f10\u8fe9\u5302\u8cd1\u8089\u8679\u5eff\u65e5\u4e73\u5165~1v\u5982\u5c3f\u97ee\u4efb\u598a\u5fcd\u8a8d\u6fe1\u79b0\u7962\u5be7\u8471\u732b\u71b1\u5e74\u5ff5\u637b\u649a\u71c3\u7c98\u4e43\u5efc\u4e4b\u57dc\u56a2\u60a9\u6fc3\u7d0d\u80fd\u8133\u81bf\u8fb2\u8997\u86a4\u5df4\u628a\u64ad\u8987\u6777\u6ce2\u6d3e\u7436\u7834\u5a46\u7f75\u82ad\u99ac\u4ff3\u5ec3\u62dd\u6392\u6557\u676f\u76c3\u724c\u80cc\u80ba\u8f29\u914d\u500d\u57f9\u5a92\u6885 \u6973\u7164\u72fd\u8cb7\u58f2\u8ce0\u966a\u9019\u877f\u79e4\u77e7\u8429\u4f2f\u5265\u535a\u62cd\u67cf\u6cca\u767d\u7b94\u7c95\u8236\u8584\u8feb\u66dd\u6f20\u7206\u7e1b\u83ab\u99c1\u9ea6\u51fd\u7bb1\u7872\u7bb8\u8087\u7b48\u6ae8\u5e61\u808c\u7551\u7560\u516b\u9262\u6e8c\u767a\u9197\u9aea\u4f10\u7f70\u629c\u7b4f\u95a5\u9ce9\u567a\u5859\u86e4\u96bc\u4f34\u5224\u534a\u53cd\u53db\u5e06\u642c\u6591\u677f\u6c3e\u6c4e\u7248\u72af\u73ed\u7554\u7e41\u822c\u85e9\u8ca9\u7bc4\u91c6\u7169\u9812\u98ef\u633d\u6669\u756a\u76e4\u78d0\u8543\u86ee\u532a\u5351\u5426\u5983\u5e87\u5f7c\u60b2\u6249\u6279\u62ab\u6590\u6bd4\u6ccc\u75b2\u76ae\u7891\u79d8\u7dcb\u7f77\u80a5\u88ab\u8ab9\u8cbb\u907f\u975e\u98db\u6a0b\u7c38\u5099\u5c3e\u5fae\u6787\u6bd8\u7435\u7709\u7f8e~1v\u9f3b\u67ca\u7a17\u5339\u758b\u9aed\u5f66\u819d\u83f1\u8098\u5f3c\u5fc5\u7562\u7b46\u903c\u6867\u59eb\u5a9b\u7d10\u767e\u8b2c\u4ff5\u5f6a\u6a19\u6c37\u6f02\u74e2\u7968\u8868\u8a55\u8c79\u5edf\u63cf\u75c5\u79d2\u82d7\u9328\u92f2\u849c\u86ed\u9c2d\u54c1\u5f6c\u658c\u6d5c\u7015\u8ca7\u8cd3\u983b\u654f\u74f6\u4e0d\u4ed8\u57e0\u592b\u5a66\u5bcc\u51a8\u5e03\u5e9c\u6016\u6276\u6577 \u65a7\u666e\u6d6e\u7236\u7b26\u8150\u819a\u8299\u8b5c\u8ca0\u8ce6\u8d74\u961c\u9644\u4fae\u64ab\u6b66\u821e\u8461\u856a\u90e8\u5c01\u6953\u98a8\u847a\u8557\u4f0f\u526f\u5fa9\u5e45\u670d\u798f\u8179\u8907\u8986\u6df5\u5f17\u6255\u6cb8\u4ecf\u7269\u9b92\u5206\u543b\u5674\u58b3\u61a4\u626e\u711a\u596e\u7c89\u7cde\u7d1b\u96f0\u6587\u805e\u4e19\u4f75\u5175\u5840\u5e63\u5e73\u5f0a\u67c4\u4e26\u853d\u9589\u965b\u7c73\u9801\u50fb\u58c1\u7656\u78a7\u5225\u77a5\u8511\u7b86\u504f\u5909\u7247\u7bc7\u7de8\u8fba\u8fd4\u904d\u4fbf\u52c9\u5a29\u5f01\u97ad\u4fdd\u8217\u92ea\u5703\u6355\u6b69\u752b\u88dc\u8f14\u7a42\u52df\u5893\u6155\u620a\u66ae\u6bcd\u7c3f\u83e9\u5023\u4ff8\u5305\u5446\u5831\u5949\u5b9d\u5cf0\u5cef\u5d29\u5e96\u62b1\u6367\u653e\u65b9\u670b~1v\u6cd5\u6ce1\u70f9\u7832\u7e2b\u80de\u82b3\u840c\u84ec\u8702\u8912\u8a2a\u8c4a\u90a6\u92d2\u98fd\u9cf3\u9d6c\u4e4f\u4ea1\u508d\u5256\u574a\u59a8\u5e3d\u5fd8\u5fd9\u623f\u66b4\u671b\u67d0\u68d2\u5192\u7d21\u80aa\u81a8\u8b00\u8c8c\u8cbf\u927e\u9632\u5420\u982c\u5317\u50d5\u535c\u58a8\u64b2\u6734\u7267\u7766\u7a46\u91e6\u52c3\u6ca1\u6b86\u5800\u5e4c\u5954\u672c\u7ffb\u51e1\u76c6 \u6469\u78e8\u9b54\u9ebb\u57cb\u59b9\u6627\u679a\u6bce\u54e9\u69d9\u5e55\u819c\u6795\u9baa\u67fe\u9c52\u685d\u4ea6\u4fe3\u53c8\u62b9\u672b\u6cab\u8fc4\u4fad\u7e6d\u9ebf\u4e07\u6162\u6e80\u6f2b\u8513\u5473\u672a\u9b45\u5df3\u7b95\u5cac\u5bc6\u871c\u6e4a\u84d1\u7a14\u8108\u5999\u7c8d\u6c11\u7720\u52d9\u5922\u7121\u725f\u77db\u9727\u9d61\u690b\u5a7f\u5a18\u51a5\u540d\u547d\u660e\u76df\u8ff7\u9298\u9cf4\u59ea\u725d\u6ec5\u514d\u68c9\u7dbf\u7dec\u9762\u9eba\u6478\u6a21\u8302\u5984\u5b5f\u6bdb\u731b\u76f2\u7db2\u8017\u8499\u5132\u6728\u9ed9\u76ee\u6762\u52ff\u9905\u5c24\u623b\u7c7e\u8cb0\u554f\u60b6\u7d0b\u9580\u5301\u4e5f\u51b6\u591c\u723a\u8036\u91ce\u5f25\u77e2\u5384\u5f79\u7d04\u85ac\u8a33\u8e8d\u9756\u67f3\u85ae\u9453\u6109\u6108\u6cb9\u7652~1v\u8aed\u8f38\u552f\u4f51\u512a\u52c7\u53cb\u5ba5\u5e7d\u60a0\u6182\u63d6\u6709\u67da\u6e67\u6d8c\u7336\u7337\u7531\u7950\u88d5\u8a98\u904a\u9091\u90f5\u96c4\u878d\u5915\u4e88\u4f59\u4e0e\u8a89\u8f3f\u9810\u50ad\u5e7c\u5996\u5bb9\u5eb8\u63da\u63fa\u64c1\u66dc\u694a\u69d8\u6d0b\u6eb6\u7194\u7528\u7aaf\u7f8a\u8000\u8449\u84c9\u8981\u8b21\u8e0a\u9065\u967d\u990a\u617e\u6291\u6b32 \u6c83\u6d74\u7fcc\u7ffc\u6dc0\u7f85\u87ba\u88f8\u6765\u83b1\u983c\u96f7\u6d1b\u7d61\u843d\u916a\u4e71\u5375\u5d50\u6b04\u6feb\u85cd\u862d\u89a7\u5229\u540f\u5c65\u674e\u68a8\u7406\u7483\u75e2\u88cf\u88e1\u91cc\u96e2\u9678\u5f8b\u7387\u7acb\u844e\u63a0\u7565\u5289\u6d41\u6e9c\u7409\u7559\u786b\u7c92\u9686\u7adc\u9f8d\u4fb6\u616e\u65c5\u865c\u4e86\u4eae\u50da\u4e21\u51cc\u5bee\u6599\u6881\u6dbc\u731f\u7642\u77ad\u7a1c\u7ce7\u826f\u8ad2\u907c\u91cf\u9675\u9818\u529b\u7dd1\u502b\u5398\u6797\u6dcb\u71d0\u7433\u81e8\u8f2a\u96a3\u9c57\u9e9f\u7460\u5841\u6d99\u7d2f\u985e\u4ee4\u4f36\u4f8b\u51b7\u52b1\u5dba\u601c\u73b2\u793c\u82d3\u9234\u96b7\u96f6\u970a\u9e97\u9f62\u66a6\u6b74\u5217\u52a3\u70c8\u88c2\u5ec9\u604b\u6190\u6f23\u7149\u7c3e\u7df4\u806f~1v\u84ee\u9023\u932c\u5442\u9b6f\u6ad3\u7089\u8cc2\u8def\u9732\u52b4\u5a41\u5eca\u5f04\u6717\u697c\u6994\u6d6a\u6f0f\u7262\u72fc\u7bed\u8001\u807e\u874b\u90ce\u516d\u9e93\u7984\u808b\u9332\u8ad6\u502d\u548c\u8a71\u6b6a\u8cc4\u8107\u60d1\u67a0\u9df2\u4e99\u4e98\u9c10\u8a6b\u85c1\u8568\u6900\u6e7e\u7897\u8155".replace(/~(..)/g,function(A,
C){return Array(parseInt(C,36)+1).join(" ")});String.prototype.sjis2utf16=function(){return this.replace(/[\u0081-\u0098]./g,function(A){A=A.charCodeAt(0)<<8|A.charCodeAt(1);return J.charAt(A-33089)})}})(this);
(function(J){function A(){this.files={};this.directories={};this.record=null}function C(){}function n(a){this.version=a.read_int16();this.bitFlag=a.read_int16();this.method=a.read_int16();this.fileTime=a.read_int16();this.fileDate=a.read_int16();this.crc32=a.read_int();this.size=a.read_int();this.fileSize=a.read_int();this.nameLength=a.read_int16();this.extraLength=a.read_int16();this.name=a.read_text(this.nameLength);this.extra=a.read_ascii(this.extraLength);this.data=a.read(this.size)}function d(a){this.version=
a.read_int16();this.extVersion=a.read_int16();this.bitFlag=a.read_int16();this.method=a.read_int16();this.fileTime=a.read_int16();this.fileDate=a.read_int16();this.crc32=a.read_int();this.size=a.read_int();this.fileSize=a.read_int();this.nameLength=a.read_int16();this.extraLength=a.read_int16();this.commentLength=a.read_int16();this.diskNumberStart=a.read_int16();this.attributes=a.read_int16();this.extAttributes=a.read_int();this.headerOffset=a.read_int();this.name=a.read_text(this.nameLength);this.extra=
a.read_text(this.extraLength);this.comment=a.read_text(this.commentLength)}function g(a){this.bytes=a;this.length=a.length}function l(a){for(var a=new g(a),l=new A,p;!a.eos();){var s=a.read_int(4);if(67324752==s)p=new n(a),l.files[p.name]=p;else if(134695760==s)p.header=new n.Header(a);else if(33639248==s)s=new d(a),l.directories[s.name]=s;else if(101010256==s)s=new d.Record(a),l.record=s;else throw"Invalid ZIP header.";}delete a;delete byes;return l}function L(a,d){var g=new XMLHttpRequest;g.open("GET",
a);g.onload=function(){var a=new Uint8Array(g.response);d(l(a))};g.responseType="arraybuffer";g.send(null)}J.Zip||(J.Zip={inflate:l,inflate_file:L});C.prototype={version:0,bitFlag:0,method:0,fileTime:0,fileDate:0,crc32:0,size:0,fileSize:0,nameLength:0,extraLength:0,name:null,extra:null,modified:function(){return new Date(1980+(this.fileDate>>9),(this.fileDate>>5&15)-1,this.fileDate&31,this.fileTime>>11,this.fileTime>>5&60)}};n.prototype=new C;n.prototype.data=null;n.prototype.header=null;n.prototype.inflate=
function(){var a=this.data;return 0==this.method?a:JSInflate.inflate(a,this.fileSize)};n.Header=function(a){this.crc32=a.read_int();this.size=a.read_int();this.fileSize=this.read_int()};n.Header.prototype={crc32:0,size:0,fileSize:0};d.prototype=new C;d.prototype.extVersion=0;d.prototype.commentLength=null;d.prototype.comment=null;d.prototype.diskNumberStart=0;d.prototype.attributes=0;d.prototype.extAttributes=0;d.prototype.headerOffset=0;d.prototype.record=null;d.Record=function(a){this.diskNumber=
a.read_int16();this.startNumber=a.read_int16();this.diskLength=a.read_int16();this.length=a.read_int16();this.directorySize=a.read_int();this.offset=a.read_int();this.commentLength=a.read_int16();this.comment=a.read_text(this.commentLength)};d.Record.prototype={diskNumber:0,startNumber:0,diskLength:0,length:0,directorySize:0,offset:0,commentLength:0,comment:null};g.prototype={position:0,eos:function(){return this.position>=this.length},read:function(a){var d=this.bytes.subarray(this.position,this.position+
a);this.position+=a;return d},read_ascii:function(a){return String.fromCharCode.apply(null,this.read(a))},read_text:function(a){a=this.read_ascii(a);return a.sjis2utf16?a.sjis2utf16():a},read_int:function(){var a=this.read(4);return a[0]|a[1]<<8|a[2]<<16|a[3]<<24},read_int16:function(){var a=this.read(2);return a[0]|a[1]<<8}}})(this);
