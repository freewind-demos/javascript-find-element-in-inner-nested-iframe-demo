JavaScript Find Element in Inner Nested IFrame Demo
===================================================

如果一个页面中有嵌套的iframe，如何在最上层的window中找到最内层的iframe中的某个元素呢？

关键点：

1. 监听最上层的window的`load`事件即可。
  `load`事件只有当一个window所需要的全部资源（包括image/iframe）加载完成之后才会fire。
  如果iframe中还有iframe，也会等到最内层的iframe加载完成。
  所以我们只需要在最外层的window监听`load`事件，就可以放心的对内层进行操作
2. 与之相应的`ready`，是仅当DOM完成（不包括资源的加载）

几个坑：

1. 在之前的版本中，`load`既有可能是一个方法，也有可能是一个event handler，但是现在的代码中，不再是handler，所以需要`on('load', fn)`。这是一个改进。
2. `ready`的写法也统一成了`$(handler)`，而不再像之前`$(element).ready(handle)`。后者会给人误导，以为是在关注某个元素，实际上就是整个document，只有一种可能。
3. `$(document).html()`是不行的，`$(document.head).html()`也是不行的。必须是body中的元素，比如`$(document.body).html()`或者`$('#xxx').html()`

运行：

```
npm install
npm run demo
```

![demo](./images/demo.jpg)
