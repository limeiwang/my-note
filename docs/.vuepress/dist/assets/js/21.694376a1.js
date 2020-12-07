(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{381:function(i,n,t){"use strict";t.r(n);var e=t(42),d=Object(e.a)({},(function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h1",{attrs:{id:"自适应布局方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自适应布局方式"}},[i._v("#")]),i._v(" 自适应布局方式")]),i._v(" "),t("blockquote",[t("p",[i._v("圣杯布局 + 双飞翼布局的最大好处：兼容低版本浏览器")])]),i._v(" "),t("h3",{attrs:{id:"圣杯布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[i._v("#")]),i._v(" 圣杯布局：")]),i._v(" "),t("ul",[t("li",[i._v("设置容器的"),t("code",[i._v("padding")]),i._v("值给左右两部分留出空间。（最好再设置个"),t("code",[i._v("overflow: hidden;")]),i._v("）\n"),t("ul",[t("li",[i._v("如果容器用"),t("code",[i._v("margin")]),i._v("留空间会导致"),t("code",[i._v("overflow: hidden;")]),i._v("把两边清理掉")])])]),i._v(" "),t("li",[i._v("内部三部分都设置左浮动。")]),i._v(" "),t("li",[i._v("中间宽度100%。"),t("code",[i._v("width: 100%")]),i._v("。")]),i._v(" "),t("li",[i._v("两边负边距挪动位置："),t("code",[i._v("margin-left")]),i._v("，左边"),t("code",[i._v("-100%")]),i._v("，右边"),t("code",[i._v("-width px")]),i._v("。\n"),t("ul",[t("li",[i._v("这边会有BUG，当中间小于两边的时候，两边会掉下去。")])])]),i._v(" "),t("li",[i._v("两边再挪动位置到容器padding处：设置相对定位。左边left为"),t("code",[i._v("-width")]),i._v("，右边right为"),t("code",[i._v("-width")]),i._v("。")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('    <!DOCTYPE html>\n    <html lang="zh">\n        <head>  \n            <style>\n                body {min-width: 555px;} \n                .col {position: relative;float: left;}\n                #container {padding: 0 190px 0 190px; overflow: hidden;}\n                #main {width: 100%;height: 400px;background-color: #ccc;}\n                #left {width: 190px;height: 400px;margin-left: -100%;left: -190px; background-color: red;}\n                #right {width: 190px;height: 400px;margin-left: -190px;right: -190px; background-color: pink;}\n            </style>\n        </head>\n        <body>\n            <div id="container">\n                \x3c!--先写中间部分--\x3e\n                <div id="main" class="col"></div>\n                <div id="left" class="col"></div>\n                <div id="right" class="col"></div>\n            </div>\n        </body>\n    </html>\n')])])]),t("h3",{attrs:{id:"双飞翼布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局"}},[i._v("#")]),i._v(" 双飞翼布局")]),i._v(" "),t("p",[i._v("双飞翼布局在圣杯布局的基础上改进")]),i._v(" "),t("ul",[t("li",[i._v("容器可以什么都不做（最好加上"),t("code",[i._v("overflow: hidden;")]),i._v("）")]),i._v(" "),t("li",[i._v("内部三部分都设置左浮动")]),i._v(" "),t("li",[i._v("中间部分"),t("code",[i._v("width: 100%")])]),i._v(" "),t("li",[i._v("中间部分内部设置子元素：以"),t("code",[i._v("margin")]),i._v("的方式为两边留位置")]),i._v(" "),t("li",[i._v("左边设置"),t("code",[i._v("margin-left: -100%")]),i._v(" + 设置自己宽度")]),i._v(" "),t("li",[i._v("右边设置"),t("code",[i._v("margin-left: -190px")]),i._v(" + 设置自己宽度")])]),i._v(" "),t("p",[i._v("优点：")]),i._v(" "),t("ul",[t("li",[i._v("实现比圣杯布局简单（两边不需要设置"),t("code",[i._v("position: relative")]),i._v("移动了，因为中间是通过"),t("code",[i._v("margin")]),i._v("实现的）")]),i._v(" "),t("li",[i._v("解决圣杯布局的BUG")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('    <!DOCTYPE html>\n    <html>\n        <head>\n            <style type="text/css">\n                body {min-width: 550px;}\n                .col {float: left;}\n                #container {overflow: hidden;}\n                #main {width: 100%;height: 400px; background-color: #ccc;}\n                #main-wrap {margin: 0 190px 0 300px; height: 100%;}\n                #left {width: 300px;height: 400px;margin-left: -100%;background-color: red;}\n                #right {width: 190px;height: 400px;margin-left: -190px;background-color: pink;}\n            </style>\n        </head>\n        <body>\n            <div id="container">\n                <div id="main" class="col">\n                    <div id="main-wrap"></div>\n                </div>\n                <div id="left" class="col"></div>\n                <div id="right" class="col"></div>\n            </div>\n        </body>\n    </html>\n')])])]),t("h3",{attrs:{id:"左右固定-中间自适应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#左右固定-中间自适应"}},[i._v("#")]),i._v(" 左右固定，中间自适应")]),i._v(" "),t("p",[i._v("优点：简单粗暴\n缺点：div的顺序优点怪")]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('    <!DOCTYPE html>\n    <html>\n        <head>\n            <style>\n                body {min-width: 550px;}\n                #container {overflow: hidden;}\n                #main {background: #ccc; height: 100px; margin: 0 190px;}\n                #left {background: red; height: 100px; width: 190px; float: left;}\n                #right {background: pink; height: 100px; width: 190px; float: right;}\n            </style>\n        </head>\n        <body>\n            <div id="container">\n                <div id="left">1</div>\n                <div id="right">3</div>\n                <div id="main">2</div>\n            </div>\n        </body>\n    </html>\n')])])]),t("h3",{attrs:{id:"多栏自适应布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多栏自适应布局"}},[i._v("#")]),i._v(" 多栏自适应布局")]),i._v(" "),t("p",[i._v("利用 BFC 特性实现")]),i._v(" "),t("p",[i._v("PS：一般情况浮动放图片，否则最好还是设置宽度")]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('    <!DOCTYPE html>\n    <html>\n        <head>\n            <style type="text/css">\n                body { min-width: 550px; }\n                .container { overflow: hidden; }\n                .left { float: left; width: 190px; background: red; height: 200px; }\n                .main { overflow: hidden; background: #CCC; height: 200px; }\n                .right { float: right; width: 190px; background: pink; height: 200px; }\n            </style>\n        </head>\n        <body>\n            <div class="container">\n                <div class="left">阿诗丹顿，案发生的快捷方式肯定你，阿斯蒂芬喀什巴靠你了1</div>\n                <div class="right">阿诗丹顿，案发生的快捷方式肯定你，阿斯蒂芬喀什巴靠你了1</div>\n                <div class="main">阿诗丹顿，案发生的快捷方式肯定你，阿斯蒂芬喀什巴靠你了1</div>\n            </div>\n        </body>\n    </html>\n')])])]),t("h3",{attrs:{id:"flex布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[i._v("#")]),i._v(" flex布局")]),i._v(" "),t("p",[i._v("优点：实现简单粗暴。\n缺点：有点兼容性问题")]),i._v(" "),t("ul",[t("li",[i._v("PC端兼容 IE10+")]),i._v(" "),t("li",[i._v("移动端还是OK的")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('    <!DOCTYPE html>\n    <html>\n        <head>\n            <style>\n                #container {display: flex; flex-flow: row;}\n                #left {background: red; height: 100px; width: 190px;}\n                #main {background: #ccc; height: 100px; flex: 1;}\n                #right {background: pink; height: 100px; width: 190px;}\n            </style>\n        </head>\n        <body>\n            <div id="container">\n                <div id="left"></div>\n                <div id="main"></div>\n                <div id="right"></div>\n            </div>\n        </body>\n    </html>\n')])])]),t("h3",{attrs:{id:"end"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[i._v("#")]),i._v(" end")]),i._v(" "),t("p",[i._v("尝试了"),t("code",[i._v("display: inline-block;")]),i._v(" + "),t("code",[i._v("calc()")]),i._v("的布局，但是由于"),t("code",[i._v("inline-block;")]),i._v("对中文编码会导致中间部分换行（英文是OK的），通过设置"),t("code",[i._v("overflow: hidden;")]),i._v("后有缓解，但是如果三部分的高度不一样会导致模块都靠在下边。而且inline-block还要处理dom间距的问题。")])])}),[],!1,null,null,null);n.default=d.exports}}]);