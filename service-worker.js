if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const n=e=>d(e,r),l={module:{uri:r},exports:f,require:n};i[r]=Promise.all(a.map((e=>l[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2019/01/14/MySQL安装及配置最详细教程/index.html",revision:"bdee78f194e5315895bd0cf10ae92793"},{url:"2019/01/15/Java环境变量配置超详细教程/index.html",revision:"823c2a73c5e1dea7852e929cb0e7abcf"},{url:"2019/07/14/JAVA可视化闹钟源码/index.html",revision:"6476bf0d64f185cdcd22fe0ad92a9262"},{url:"2019/07/16/计算机二级Python/index.html",revision:"11eed71e0384da5bd3f646abf4c0eb2d"},{url:"2019/08/06/vivado三人表决仿真/index.html",revision:"03d0ca03e9d812959dfe3ec6157d81d2"},{url:"2019/08/07/verilog设设计加法器/index.html",revision:"d1b3930f95ae6ad2d1ed40cb514bdd61"},{url:"2019/08/08/超前进位加法器/index.html",revision:"109b89e24657d8b8853141dad7f26224"},{url:"2019/08/09/verilog设计乘法器/index.html",revision:"8b80622ea8e9b5e3771b0dee04875689"},{url:"2019/10/24/OPPO-R11刷机初体验/index.html",revision:"49d4687b74e0e3cae1a9b53cc41dbf93"},{url:"2019/10/31/OPERATING-SYSTEMS-THREE-EASY-PIECES/index.html",revision:"7343c476cb89dabd86eca1512229daba"},{url:"2020/09/12/二进制/index.html",revision:"e11cc7c7d2549a4d54886e62509fde2a"},{url:"2020/09/13/操作系统开发/index.html",revision:"d06fdb00317b2c3de02da2d388b75878"},{url:"2020/09/29/Verilog入门/index.html",revision:"2ffd229f4a63b3a9f23f1c9531b540f5"},{url:"2020/10/28/web结课论文/index.html",revision:"aa7f4c75a02a42861d5f478aec8f380e"},{url:"2020/11/07/八位右移位乘法器（无符号）/index.html",revision:"11e06162b9e0d81ad581595314766cfa"},{url:"2020/11/07/八位超前进位加法器/index.html",revision:"076d290f13a37a2469d09128d25d2235"},{url:"2020/12/09/BIOS、UEFI、Boot-Loader都是些什么/index.html",revision:"52a2114caa56fe64414c58dff609d26a"},{url:"2020/12/09/使用树莓派搭建wordpress博客网站/index.html",revision:"f4eb3c8bde3c9c24c7b452dc79448d0b"},{url:"2020/12/26/硬件入门的一点点心得/index.html",revision:"6e401c015ff03065ccf62b383c1dcd83"},{url:"2021/12/05/Ubuntu19.10使用Qemu安装树莓派/index.html",revision:"609fff1d596a894198f1d1155702b943"},{url:"2021/12/05/What-is-BIOS/index.html",revision:"b70ac126b5387685a548b33ebae3b200"},{url:"2021/12/05/内网穿透工具大全/index.html",revision:"07d47b41130b68fe71f9a38a815eea80"},{url:"2021/12/05/内网穿透软件推荐/index.html",revision:"f516e6476052335926950e7742f7ff36"},{url:"2021/12/05/最后，点个关注不迷路/index.html",revision:"5a6ee8537fbbac51dd8db3dda74776ce"},{url:"2021/12/05/手机备份到底备份什么/index.html",revision:"5dc02a165225fef02378383edc1b361a"},{url:"2021/12/05/摊牌了，我抄袭的/index.html",revision:"e989219fdfafaf1f49b961e12521e55d"},{url:"2021/12/05/无开发板如何开发linux系统内核/index.html",revision:"f5b9511caa18c954eb436411ed51dd53"},{url:"2021/12/05/树莓派-01/index.html",revision:"6242aaaaacb2b47aa0c3fc8647ed3808"},{url:"2021/12/05/树莓派-02内网穿透服务器/index.html",revision:"6594198f856d75191e6a93b291ee9825"},{url:"2021/12/05/炫猿导航——所谓精致，就是如此/index.html",revision:"66d49a4b2296c7937e8d1f1cc42af027"},{url:"2021/12/05/自动获取参考链接的标题/index.html",revision:"9e4abfdb8331e71bfbc8c833ec0ea3dd"},{url:"2021/12/05/自己动手写操作系统一/index.html",revision:"a9adf4691bed5b50d87d88b8828a4af3"},{url:"2021/12/05/自己动手写操作系统二/index.html",revision:"e833b61c823c74d2f57362b19047b861"},{url:"2021/12/05/自己封装一个专属的Windows10系统/index.html",revision:"45433a6f8632ee3808c4898889cacb13"},{url:"2021/12/05/远程控制/index.html",revision:"974afaa28d37180f4b9acd1177afea4e"},{url:"archives/2019/01/index.html",revision:"c9a4d463f5c22df515bd94c365ccaac0"},{url:"archives/2019/07/index.html",revision:"26df243a6b2fd4932a53cc2c74b83fbd"},{url:"archives/2019/08/index.html",revision:"70971efb1eb76ec1790358e510e492d7"},{url:"archives/2019/10/index.html",revision:"453e74f0184faa8065cf64fc63149168"},{url:"archives/2019/index.html",revision:"2b1a8a89a9defa7006474c84f9d2707a"},{url:"archives/2020/09/index.html",revision:"da26937ceeec6e75998199612cf3b074"},{url:"archives/2020/10/index.html",revision:"a8c508cf2ccacce9bca448b5713ee841"},{url:"archives/2020/11/index.html",revision:"6251f1127ee21dfbd53174fdaa68035b"},{url:"archives/2020/12/index.html",revision:"e49e4c0b54b60417259d15424dfc80bf"},{url:"archives/2020/index.html",revision:"9b8ae00d64861a8f57618049358eae94"},{url:"archives/2021/12/index.html",revision:"6f6da8dd661f3224006595bae4770361"},{url:"archives/2021/12/page/2/index.html",revision:"757ee3acbd4c2cfbba3c699dd5b2fd9b"},{url:"archives/2021/index.html",revision:"ee4dd16ecece29fd9c3fa10f3e4f50fe"},{url:"archives/2021/page/2/index.html",revision:"a0b6b3767dc39511e50368c66afcb184"},{url:"archives/index.html",revision:"8cc61d7b152cfe069c8a470795c8d119"},{url:"archives/page/2/index.html",revision:"5cc714bce3f5dde5b157b1c7beaeb9e9"},{url:"archives/page/3/index.html",revision:"86e770a1db945d74ceaaba4406cbe3cc"},{url:"archives/page/4/index.html",revision:"cf2f95b5a955bd0b12f9c6f60df6756f"},{url:"categories/index.html",revision:"f0a39b4c4ec5a553c6cef9ff6bb2b8ca"},{url:"categories/硬件/index.html",revision:"f76f92bf6f40b04af4d06fc8be7377b4"},{url:"css/index.css",revision:"1c515fc716c6d31a638b2ff3af679850"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"d864ce75029cdc492986705d7f917c7d"},{url:"img/background.jpg",revision:"59fcda4277480620534446406793c441"},{url:"img/background1.jpg",revision:"486d78e205f38d3957085b3e8e49021d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mxdon.png",revision:"07088d988cd29828f465680c47832b6c"},{url:"img/wechatpay.jpg",revision:"6c2307e058385f9f2c1dbd33e89db038"},{url:"index.html",revision:"7110d63e964684e6cd8083eaeff3f5aa"},{url:"js/fish.js",revision:"526a92b6a5ada3f3024cf2f169fee09b"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"page/2/index.html",revision:"8bc4c901f448f46ccbbf9829a7ee4c02"},{url:"page/3/index.html",revision:"b1a402c0d16e4c97ea85661678f88692"},{url:"page/4/index.html",revision:"5d17fdff06addb9b94868ee49f247cdc"},{url:"tags/index.html",revision:"bf08fcc32208c91cc5607fac8ff43185"},{url:"tags/java/index.html",revision:"c4647dfb933da44bdd97cb1a82740667"},{url:"tags/Operating-Systems/index.html",revision:"040e8f01762c261d5ecb79cac95bbb84"},{url:"tags/Python/index.html",revision:"33926d9812d6691289b3b9090fece138"},{url:"tags/verilog/index.html",revision:"dcd56a53c12a9056222ecd17fa6b199c"},{url:"tags/vivado/index.html",revision:"9b143232b1c7382ac6e9b19dfc444904"},{url:"tags/刷机/index.html",revision:"29fc9b58dde1d14fd19bc2842d2d76cd"},{url:"tags/学习笔记/index.html",revision:"f2efc307dc7260f9908ba80d57ebe4cb"},{url:"tags/尾巴/index.html",revision:"6f3e7ccc28d8cfd65cf6cad371d4f5d7"},{url:"tags/应用/index.html",revision:"d4a62a306ea8316ff21aad124dcefb39"},{url:"tags/应用软件/index.html",revision:"791269eefda1f4875bcbe776b0d25cb6"},{url:"tags/心得/index.html",revision:"f015cab57f698afb86d0a7937012fe3b"},{url:"tags/折腾/index.html",revision:"231faf4fbc4eaaacc47e29d6a231cb7b"},{url:"tags/推荐/index.html",revision:"d0c14b353d7cd45a2a51554e63a9c258"},{url:"tags/搞机/index.html",revision:"b72c7a3023001221a645afab9b206e72"},{url:"tags/操作系统/index.html",revision:"6e31fec504f47167bf8537a8195877f6"},{url:"tags/教程/index.html",revision:"1be3bf2cff9446f05bc772c52cda9802"},{url:"tags/电脑/index.html",revision:"09595f903d9530fdc5c6790aafb74e18"},{url:"tags/硬件/index.html",revision:"a53580632a6f361e1554aec239fd63f8"},{url:"tags/经验/index.html",revision:"577910940f8dd3a2ef128d49c01beb91"},{url:"tags/脚本/index.html",revision:"7624d2654186f1784b6f69a1bd9ee85a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
