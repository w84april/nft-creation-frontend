(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{3:function(e,t,n){e.exports={news:"Lenta_news___QSjq",news__wrapper:"Lenta_news__wrapper__VMXrT",grid__container:"Lenta_grid__container__1Dui1",image:"Lenta_image__3oPD8",image__container:"Lenta_image__container__1YkJW",lenta__header:"Lenta_lenta__header__5od9A",lenta__discription:"Lenta_lenta__discription__2CDg1",lenta_title__discription:"Lenta_lenta_title__discription__1Sa0p",lenta_like__container:"Lenta_lenta_like__container__N9a5y",description__title:"Lenta_description__title__3_RY4",description__text:"Lenta_description__text__Ybrvj",nft__container:"Lenta_nft__container__1TPe2",nft__title:"Lenta_nft__title__2GguN",nft__value:"Lenta_nft__value__3ATuR"}},39:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(27),_=n.n(c),s=(n(39),n(40),n(6)),r=n(7),d=n.n(r),o=n.p+"static/media/Group.22499bf8.svg",l=n.p+"static/media/01.85d077fe.svg",j=n.p+"static/media/Phone.65033738.svg",b=n.p+"static/media/Discovery.f90fe015.svg",h=n(0),u=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=function(e){i(e.target.id),console.log(e.target.id)},_={backgroundColor:"#6667AB"};return Object(h.jsx)("header",{className:d.a.header,children:Object(h.jsxs)("div",{className:d.a.header__wrapper,children:[Object(h.jsx)("div",{width:60,height:40,children:Object(h.jsx)("img",{src:o,width:60,height:40})}),Object(h.jsxs)("div",{className:d.a.buttons__container,children:[Object(h.jsx)("button",{id:"first_button",className:d.a.header__button,onClick:c,style:"first_button"===n?_:{},children:Object(h.jsx)("img",{src:j,width:20,height:20})}),Object(h.jsx)("button",{id:"second_button",className:d.a.header__button,onClick:c,style:"second_button"===n?_:{},children:Object(h.jsx)("img",{src:b,width:20,height:20})})]}),Object(h.jsx)("div",{width:60,height:40,children:Object(h.jsx)("img",{src:l,width:60,height:40})})]})})},m=n(2),p=n(72),g=n.p+"static/media/PNhCI5vz9pI 1.3a143dd7.svg",O=n(3),x=n.n(O),f=n(31),v=n.n(f),N=function(){var e=Object(a.useState)([{img:g,description:"\u0410\u043d\u0430\u043d\u0430\u0441"},{img:g,description:"\u0410\u043d\u0430\u043d\u0430\u0441"},{img:g,description:"\u0410\u043d\u0430\u043d\u0430\u0441"}]),t=Object(s.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){c();var e=setTimeout((function(){return c()}),6e4);return function(){clearTimeout(e)}}),[]);var c=function(){v.a.get("https://backend-hahathone.herokuapp.com/getImages",{headers:{"Access-Control-Allow-Origin":"*",responseType:"arraybuffer"}}).then((function(e){var t=e.data;i((function(e){return[{img:"data:image/png;base64, "+t.img,description:t.description}].concat(Object(m.a)(e))}))})).catch((function(e){return console.log(e)}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:x.a.lenta__header,children:Object(h.jsx)("h1",{children:"\u041b\u0435\u043d\u0442\u0430"})}),Object(h.jsx)(p.a,{className:x.a.grid__container,container:!0,columns:1,children:Object(h.jsx)(p.a,{item:!0,xl:2,children:n.map((function(e,t){return Object(h.jsx)("div",{className:x.a.news,children:Object(h.jsxs)("div",{className:x.a.news__wrapper,children:[Object(h.jsx)("div",{className:x.a.image__container,children:Object(h.jsx)("img",{src:e.img,className:x.a.image})}),Object(h.jsx)("div",{className:x.a.lenta__discription,children:Object(h.jsxs)("div",{className:x.a.lenta_title__discription,children:[Object(h.jsx)("span",{className:x.a.description__title,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(h.jsx)("span",{className:x.a.description__text,children:e.description}),Object(h.jsxs)("div",{className:x.a.nft__container,children:[Object(h.jsx)("div",{className:x.a.nft__title,children:Object(h.jsx)("span",{children:"NFT"})}),Object(h.jsx)("div",{className:x.a.nft__value,children:Object(h.jsx)("span",{children:"0xb9f7d07e14ab2db9b52fd1e1433292c2455fc474"})})]})]})})]},t)},t)}))})})]})},w=(n.p,n(8)),L=n.n(w);var k=function(){return Object(h.jsxs)("div",{className:L.a.main__container,children:[Object(h.jsx)(u,{}),Object(h.jsx)("div",{className:L.a.left__background}),Object(h.jsx)("div",{className:L.a.left_bottom__background}),Object(h.jsx)("div",{className:L.a.right__background}),Object(h.jsx)("div",{className:L.a.right_bottom__background}),Object(h.jsx)(N,{})]})};var y=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(k,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,_=t.getTTFB;n(e),a(e),i(e),c(e),_(e)}))};_.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),C()},7:function(e,t,n){e.exports={header:"Header_header__1ezkd",header__wrapper:"Header_header__wrapper__2POqs",buttons__container:"Header_buttons__container__3huOa",header__button:"Header_header__button__bXRuD"}},8:function(e,t,n){e.exports={main__container:"MainScreen_main__container__2nBH9"}}},[[65,1,2]]]);
//# sourceMappingURL=main.e04fa0b3.chunk.js.map