(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{376:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js垃圾回收机制"}},[t._v("#")]),t._v(" JS垃圾回收机制")]),t._v(" "),s("p",[t._v("Javascript中，如果一个对象不再被引用，那么这个对象就会被GC(garbage collec-tion)回收。如果两个对象互相引用，而不再被第3者所引用，那么这两个互相引用的对象也会被回收。垃圾回收不是时时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。")]),t._v(" "),s("p",[t._v("函数a被b引用，b又被a外的c引用，这就是为什么函数a执行后不会被回收的原因。")]),t._v(" "),s("h3",{attrs:{id:"标记清除法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除法"}},[t._v("#")]),t._v(" 标记清除法:")]),t._v(" "),s("ol",[s("li",[t._v("垃圾回收机制给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包）。")]),t._v(" "),s("li",[t._v("操作1之后内存中仍存在标记的变量就是要删除的变量，垃圾回收机制将这些带有标记的变量回收。")])]),t._v(" "),s("h3",{attrs:{id:"引用计数法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[t._v("#")]),t._v(" 引用计数法:")]),t._v(" "),s("ol",[s("li",[t._v("垃圾回收机制给一个变量一个引用次数，当声明了一个变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1。")]),t._v(" "),s("li",[t._v("当该变量的值变成了另外一个值，则这个值得引用次数减1。")]),t._v(" "),s("li",[t._v("当这个值的引用次数变为0的时候，说明没有变量在使用，垃圾回收机制会在运行的时候清理掉引用次数为0的值占用的空间。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);