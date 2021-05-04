(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["00d7e6d0"],{1973:function(e,n,r){e.exports=r("5bba")},"494d":function(e,n,r){e.exports=r("e1b7")},"522e":function(e,n,r){var t=r("f772"),a=r("ebfd").onFreeze;r("ce7e")("freeze",function(e){return function(n){return e&&t(n)?e(a(n)):n}})},5640:function(e,n,r){var t=r("1973"),a=r("494d");function i(e,n){return n||(n=e.slice(0)),a(t(e,{raw:{value:a(n)}}))}e.exports=i},"5bba":function(e,n,r){r("9d98");var t=r("584a").Object;e.exports=function(e,n){return t.defineProperties(e,n)}},"9d98":function(e,n,r){var t=r("63b6");t(t.S+t.F*!r("8e60"),"Object",{defineProperties:r("7e90")})},d04f:function(e,n,r){"use strict";r.d(n,"a",function(){return p}),r.d(n,"c",function(){return b}),r.d(n,"d",function(){return y}),r.d(n,"b",function(){return T});var t=r("5640"),a=r.n(t),i=r("9530"),o=r.n(i);function d(){var e=a()(["\n  mutation CreateGenderTypeMutation(\n    $label: String!\n    $disabled: Boolean\n  ) {\n    createGenderType(\n      data: {\n        label: $label,\n        disabled: $disabled\n      }\n    )\n    {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return d=function(){return e},e}function u(){var e=a()(["\n  mutation UpdateGenderTypeMutation(\n    $id: ID!\n    $label: String!,\n    $disabled: Boolean\n  ) {\n    updateGenderType(\n      where: {id: $id}\n      data: {\n        label: $label,\n        disabled: $disabled\n      }\n    )\n    {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return u=function(){return e},e}function s(){var e=a()(["\n  query GenderTypeQuery($id: ID!) {\n    genderType(where: {\n      id: $id\n    }) {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return s=function(){return e},e}function l(){var e=a()(["\n  query AllGenderTypesQuery {\n    genderTypes {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return l=function(){return e},e}function c(){var e=a()(["\n  fragment GenderTypeFragment on GenderType {\n    id\n    label\n    disabled\n  }\n"]);return c=function(){return e},e}var f=o()(c()),p=o()(l(),f),b=o()(s(),f),y=o()(u(),f),T=o()(d(),f)},d5a7:function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("q-page",[r("loading",{attrs:{query:e.$apollo.queries.genderTypes}},[r("scroll",[r("q-pull-to-refresh",{attrs:{handler:e.refresher}},[r("q-list",{attrs:{separator:""}},e._l(e.genderTypes,function(e){return r("q-item",{key:e.id,attrs:{to:e.id,append:""}},[e.disabled?r("q-item-main",{attrs:{label:e.label+" (Disabled)"}}):r("q-item-main",{attrs:{label:e.label}})],1)}))],1)],1)],1),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[r("q-fab",{staticClass:"white",attrs:{color:"red",icon:"add"},on:{show:function(n){e.$router.push("/gender_types/new")}}})],1)],1)},a=[];t._withStripped=!0;var i=r("d04f"),o={name:"GenderTypeList",data:function(){return{genderTypes:[]}},methods:{refresher:function(e){this.$apollo.queries.genderTypes.refetch(),setTimeout(function(){e()},500)}},apollo:{genderTypes:{query:i["a"],fetchPolicy:"cache-and-network"}}},d=o,u=r("2877"),s=Object(u["a"])(d,t,a,!1,null,null,null);s.options.__file="GenderTypeList.vue";n["default"]=s.exports},e1b7:function(e,n,r){r("522e"),e.exports=r("584a").Object.freeze}}]);