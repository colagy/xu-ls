# xu-api

## 使用工具

```

// 引入npm
const ls = require('xu-ls');
// 保存字符串
ls.set('string','str');
// 保存数字
ls.set('number',3.14);
// 保存对象
ls.set('object',{'name' : 'colagy' });
// 保存布尔值
ls.set('boolean',true);

// 获取保存的object
console.log(ls.get('object').name);

```
