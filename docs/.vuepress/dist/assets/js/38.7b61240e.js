(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{401:function(e,n,s){"use strict";s.r(n);var a=s(42),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[e._v("#")]),e._v(" 模块化")]),e._v(" "),s("blockquote",[s("p",[e._v("模块化是目前前端最流行的分治手段。")])]),e._v(" "),s("p",[e._v("模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。将一个复杂的系统分解为多个模块以方便编码和多人协作。")]),e._v(" "),s("p",[e._v("会讲述以下内容")]),e._v(" "),s("ol",[s("li",[e._v("CommonJS")]),e._v(" "),s("li",[e._v("AMD 及 核心原理实现")]),e._v(" "),s("li",[e._v("CMD 及 核心原理实现")]),e._v(" "),s("li",[e._v("UMD 及 源码解析")]),e._v(" "),s("li",[e._v("ES6 Module")]),e._v(" "),s("li",[e._v("webpack打包策略")]),e._v(" "),s("li",[e._v("css模块化")])]),e._v(" "),s("h3",{attrs:{id:"commonjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[e._v("#")]),e._v(" CommonJS")]),e._v(" "),s("blockquote",[s("p",[e._v("同步加载")])]),e._v(" "),s("p",[e._v("CommonJS API是以在浏览器环境之外构建 JS 生态系统为目标而产生的项目")]),e._v(" "),s("p",[e._v("如果没有写后缀名Node会尝试为文件名添加.js、.json、.node后再搜索。")]),e._v(" "),s("p",[e._v(".js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析。")]),e._v(" "),s("h3",{attrs:{id:"amd-asynchronous-module-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd-asynchronous-module-definition"}},[e._v("#")]),e._v(" AMD -> Asynchronous Module Definition")]),e._v(" "),s("blockquote",[s("p",[e._v("异步加载（对象）")])]),e._v(" "),s("p",[e._v('"Asynchronous Module Definition"（异步模块定义），是由RequireJS提出的')]),e._v(" "),s("p",[e._v("AMD核心实现")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  function require (url, callback) {\n    // url可以换成List，然后遍历；\n    var $script = document.createElement('script');\n    $script.src = url;\n\n    // 利用onload回调，实现依赖加载\n    $script.onload = function (e) {\n      // 省略callback 检测\n      callback();\n    }\n    document.body.appendChild($script);\n  }\n\n")])])]),s("h3",{attrs:{id:"cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[e._v("#")]),e._v(" CMD")]),e._v(" "),s("blockquote",[s("p",[e._v("按需加载")])]),e._v(" "),s("p",[e._v("由玉伯提出的（seajs），按需解析加载模块（代价挺大的），需要使用把模块变为字符串解析一遍才知道依赖了那些模块")]),e._v(" "),s("p",[e._v("CMD核心实现")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  // ajax，怕忘了原生ajax怎么写。顺手写一个\n\n  function myAjax (url, callback) {\n    var xhr = new XMLHttpRequest();\n    xhr.open('get', url);\n    xhr.send();\n\n    xhr.onreadystatechange = function () {\n      if (request.readyState === 4) {\n          if (request.status === 200) {\n              return callback(request.responseText);\n          } else {\n              // 省略...\n          }\n      } else {\n        // 省略...\n      }\n    }\n  }\n\n  // 实现\n  function require(url) {\n    myAjax(url, function(res) {\n      // 此时 res 的对应JS的 String形式\n      // 解析 省略\n      // 执行\n      eval(res);\n    });\n  }\n")])])]),s("h3",{attrs:{id:"umd-universal-module-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umd-universal-module-definition"}},[e._v("#")]),e._v(" UMD -> Universal Module Definition")]),e._v(" "),s("blockquote",[s("p",[e._v("通用模块定义规范，兼容AMD，CommonJS 模块化语法。")])]),e._v(" "),s("p",[e._v("UMD源码解析")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  (function (root, factory) {\n\n    // 判断是否支持AMD（define是否存在）\n    if (typeof define === 'function' && define.amd) {\n        define(['b'], factory);\n\n    // 判断是否支持NodeJS模块格式（exports是否存在）\n    } else if (typeof module === 'object' && module.exports) {\n        module.exports = factory(require('b'));\n\n    // 前两个都不存在，则将模块公开到全局（window或global）\n    } else {\n        root.returnExports = factory(root.b);\n    }\n  } (this, function (b) {\n      // ...\n  }));\n")])])]),s("h3",{attrs:{id:"import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" import")]),e._v(" "),s("blockquote",[s("p",[e._v("加载引用")])]),e._v(" "),s("ul",[s("li",[e._v("编译时加载（静态执行）。")]),e._v(" "),s("li",[e._v("加载的是引用")]),e._v(" "),s("li",[e._v("不能处于代码块中\n"),s("ul",[s("li",[e._v("为了实现编译时加载\n"),s("ul",[s("li",[e._v("提案表示可以用 "),s("code",[e._v("import()")]),e._v("使用时加载")])])])])]),e._v(" "),s("li",[e._v("不能使用表达式和变量 等运行时加载的语法\n"),s("ul",[s("li",[e._v("同上")])])])]),e._v(" "),s("p",[e._v("虽然，import加载的是引用，但是该引用是只读的（类似const）")]),e._v(" "),s("h3",{attrs:{id:"webpack打包策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包策略"}},[e._v("#")]),e._v(" webpack打包策略")]),e._v(" "),s("blockquote",[s("p",[e._v("import会被编译成 require/exports （CommonJS规范）")])]),e._v(" "),s("p",[s("strong",[e._v("1. 直接引入")])]),e._v(" "),s("p",[s("code",[e._v("import xxx.js")]),e._v("或者"),s("code",[e._v("import xxx.css")]),e._v("会像添加"),s("code",[e._v("<script>")]),e._v("和"),s("code",[e._v("<link>")]),e._v("标签一样注入到全局中去")]),e._v(" "),s("p",[s("strong",[e._v("2. commonjs同步语法")])]),e._v(" "),s("p",[e._v("webpack会将"),s("code",[e._v("require('abc.js')")]),e._v("打包进引用它的文件中。以对象的形式获取。")]),e._v(" "),s("p",[s("strong",[e._v("3. commonjs异步加载")])]),e._v(" "),s("p",[e._v("webpack(require.ensure)：webpack 2.x 版本中的代码分割。")]),e._v(" "),s("p",[e._v("在commonjs中有一个Modules/Async/A规范，里面定义了"),s("code",[e._v("require.ensure")]),e._v("语法。webpack实现了它，作用是可以在打包的时候进行代码分片，并异步加载分片后的代码。")]),e._v(" "),s("p",[e._v("此时list.js会被打包成一个单独的chunk文件。像这样：1.d6f343b727f5923508bf.js")]),e._v(" "),s("p",[e._v("webpack 4.0之后采用了更加简洁的方式："),s("code",[e._v("@babel/plugin-syntax-dynamic-import")])]),e._v(" "),s("p",[e._v("例如：vue路由懒加载"),s("code",[e._v("const Foo = () => import('./Foo.vue')")])]),e._v(" "),s("p",[s("strong",[e._v("manifest.js")])]),e._v(" "),s("p",[e._v("manifest.js 文件是最先加载的，是在vendor的基础上，再抽取出要经常变动的部分，"),s("strong",[e._v("通过manifest.js文件来管理bundle文件")]),e._v("的运行和加载。(比如关于异步加载js模块部分的内容)，所以manifest像是webpack 用以"),s("code",[e._v("查找chunk真实路径")]),e._v("所使用的一份关系表")]),e._v(" "),s("p",[s("strong",[e._v("webpack v2.4+ 命名chunk文件")])]),e._v(" "),s("p",[e._v("可以将多个ChunkName相同的chunk打包到同一个文件中")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  const Foo = () => import(/* webpackChunkName: \"group-foo\" */ './Foo.vue')\n  const Bar = () => import(/* webpackChunkName: \"group-foo\" */ './Bar.vue')\n  const Baz = () => import(/* webpackChunkName: \"group-foo\" */ './Baz.vue')\n")])])]),s("p",[e._v("会被webpack降级成"),s("code",[e._v("require.ensure([], () => r(require('./Foo.vue')), 'group-foo')")])]),e._v(" "),s("p",[s("strong",[e._v("webpack v4.6.0+ 添加了预取和预加载的支持")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  import(/* webpackPrefetch: true */ \'LoginModal\');\n  \n  会生成 <link rel="prefetch" href="login-modal-chunk.js"> 并追加到页面头部\n')])])]),s("p",[e._v("还有一个很小巧的模块化规工具："),s("code",[e._v("rollup")]),e._v("， 相对 "),s("code",[e._v("webpack")]),e._v(" 处理后文件更小，几乎没什么多余代码，但不具备 webpack 的一些强大的功能，如热更新，代码分割，公共依赖提取等。")]),e._v(" "),s("p",[e._v("所以，一个不错的选择是，应用使用 webpack，类库使用 rollup。")]),e._v(" "),s("h3",{attrs:{id:"css模块化-css-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css模块化-css-modules"}},[e._v("#")]),e._v(" css模块化 -> css modules")]),e._v(" "),s("blockquote",[s("p",[e._v("虽然SASS、LESS等预处理器实现了CSS的文件拆分，但没有解决选择器的全局污染问题;")])]),e._v(" "),s("p",[s("code",[e._v("CSS Modules")]),e._v("原理：使用JS 来管理样式模块，它能够"),s("strong",[e._v("最大化地结合CSS生态和JS模块化能力")]),e._v("，通过在每个"),s("code",[e._v("class")]),e._v("名后带一个"),s("code",[e._v("hash")]),e._v("值的方式解决全局命名冲突的问题。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  <button class=${styles.normal}>Submit</button>\n\n  // 编译成\n  <button class="button--base-daf62 button--normal-abc53">Submit</button>\n')])])]),s("p",[e._v("默认为局部样式，可通过"),s("code",[e._v(":global")]),e._v("定义全局样式")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  .normal {\n    color: green;\n  }\n\n  /* 以上与下面等价 */\n  :local(.normal) {\n    color: green; \n  }\n\n  /* 定义全局样式 */\n  :global(.btn) {\n    color: red;\n  }\n\n  /* 定义多个全局样式 */\n  :global {\n    .link {\n      color: green;\n    }\n    .box {\n      color: yellow;\n    }\n  }\n")])])]),s("p",[e._v("同时支持通过"),s("code",[e._v("composes")]),e._v("组合样式")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  /* components/Button.css */\n  .base { /* 所有通用的样式 */ }\n\n  .normal {\n    composes: base;\n    /* normal 其它样式 */\n  }\n\n  .disabled {\n    composes: base;\n    /* disabled 其它样式 */\n  }\n")])])]),s("h5",{attrs:{id:"css-modules-结合-react-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-modules-结合-react-实践"}},[e._v("#")]),e._v(" CSS Modules 结合 React 实践")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  import classNames from 'classnames';\n  import styles from './dialog.css';\n\n  export default class Dialog extends React.Component {\n    render() {\n\n      // 用 classnames 库来操作 class 名\n      const cx = classNames({\n        [styles.confirm]: !this.state.disabled,\n        [styles.disabledConfirm]: this.state.disabled\n      });\n\n      return <div className={styles.root}>\n        <a className={cx}>Confirm</a>\n        ...\n      </div>\n    }\n  }\n")])])]),s("p",[s("code",[e._v("- -!")]),e._v(" 还能使用 "),s("code",[e._v("react-css-modules")]),e._v(" 通过高阶函数的形式来避免重复输入 "),s("code",[e._v("styles.**")]),e._v("。")])])}),[],!1,null,null,null);n.default=t.exports}}]);