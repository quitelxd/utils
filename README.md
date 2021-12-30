# 本工具类纯个人及团队整理,用于团队项目开发
## 默认导出 utils  `import utils from 'linxd-utils'`
### 以下为工具类api 按模块分类
### 1. index
 方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.uuid()`  | 返回 36 位uuid函数 string 类型 | - 
`utils.debounce()`  | 函数节流方法 | func `<Function>`, wait `<Number>`, immediate `<Boolean>`
### 2. date
 方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.date.formatDate()`  | 返回格式化的时间 string 类型| 1.date 类型 2.返回的时间格式，默认`yyyy-MM-DD HH:MM:SS` `<String>`类型
`utils.date.formatTime()`  | 返回距离当前时间(刚刚,几分钟前,几小时前等) string 类型| (cellValue,type) 1.time `<Number>` 2.返回的时间格式 `yyyy-MM-DD HH:MM:SS 或 yyyy-MM-DD` `<String>`
 
### 3. number
  方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.number.numberToString()`  | 返回大写中文数字 string 类型 | num `<Number> `
`utils.number.thousandSplit()`  | 千位逗号分隔 返回类型 `<String>` | str `<String> `
 
### 4. bower
  方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.bower.httpToHttps()`  | 返回 string  | url `<String> `
`utils.bower.getParams()`   | 返回 `<String>` | key `<String>` 要获取的参数 例: ('id')
`utils.bower.getBowerType()`   | 返回 浏览器类型 `<String>` | --
### 5. data
  方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.data.treeDataformatter()`  | 根据id和pid循环出树形结构的数据  | data `<List>`, id `<String>` 默认值为 `id` , pid `<String>` 默认值为 `pid`, children `<String>` 默认值为 `children`
`utils.data.orderBy()`  | 返回排序数组 | 基本类型数组 `<Number> ` 正序 `asc` 或倒序 `desc`
`utils.data.deleteSame()`  | 返回去重后的数组（基本类型数组） | 基本类型数组 `<Array> ` 
`utils.data.union()`  | 返回两个数组的并集 | 基本类型数组 `<Array> ` 
`utils.data.deleteSameByObj()`  | 返回去重后的数组（list 套 map） | -- 
 ### 6. file
   方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.file.getFileNameExt()`  | 返回文件名的后缀  | fileName `string`
`utils.file.getFileName()`  | 返回文件名  | fileName `string`
`utils.file.isImageType()`  | 判断是否为图片类型 返回值`<Boolean>`  | fileName `string`
 `utils.file.isVideoType()`  | 判断是否为视频类型 返回值`<Boolean>`  | fileName `string`
  ### 7. reg
   方法名  | 说明  | 参数 
  ---- | ----- | ------  
`utils.reg.email()`  | 正则验证 返回类型 `<Boolean>`  | `<String>` 
`utils.reg.mobile()`  | 正则验证 返回类型 `<Boolean>`  | `<String>` 
`utils.reg.tel()`  | 正则验证 返回类型 `<Boolean>`  | `<String>` 
`utils.reg.idCard()`  | 正则验证 返回类型 `<Boolean>`  | `<String>` 
`utils.reg.ip()`  | 正则验证 返回类型 `<Boolean>`  | `<String>` 