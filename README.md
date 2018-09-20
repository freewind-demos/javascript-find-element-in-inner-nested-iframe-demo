JavaScript Call Top JQuery From Inner IFrame Demo
=================================================

如果我们在内部iframe的JavaScript中，直接引用top的jquery去寻找元素，比如：

```
window.top.$('#aa')
```

它会从top的document中寻找`#aa`，而不是内部iframe。需要指定具体的document：

```
window.top.$('#aa', window.document)
```

运行：

```
npm install
npm run demo
```

![demo](./images/demo.jpg)
