(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{379:function(t,e,r){"use strict";r.r(e);var s=r(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"前端安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端安全"}},[t._v("#")]),t._v(" 前端安全")]),t._v(" "),r("h3",{attrs:{id:"xss-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[t._v("#")]),t._v(" XSS 攻击")]),t._v(" "),r("p",[t._v("跨站脚本攻击（Cross-site scripting），攻击者往 Web 页面里插入可执行的网页脚本代码，当用户浏览该页之时，嵌入其中 Web 里面的脚本代码会被执行，从而可以达到攻击者盗取用户信息或其他侵犯用户安全隐私的目的。")]),t._v(" "),r("p",[t._v("主要分2种：")]),t._v(" "),r("ul",[r("li",[t._v("通过URL参数注入，如：链接输入"),r("code",[t._v("https://abc/?wd=<script>alert(document.cookie)<\/script>")])]),t._v(" "),r("li",[t._v("通过表单注入脚本。如：表单中输入"),r("code",[t._v("<script>alert('入库数据')<\/script>")])])]),t._v(" "),r("p",[t._v("如何预防：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("转义")]),t._v("：最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义")]),t._v(" "),r("li",[t._v("Header设置"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy__by_cnvoid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Security-Policy"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);