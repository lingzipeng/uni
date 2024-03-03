# 复习uni



## 3.3问题



import { onLoad } from '@dcloudio/uni-app'
const title = ref('nihao')
onLoad(()=>{
	console.log('nihao')
})讲解这段代码



forEach和map







HBuilder格式化代码

Ctrl+K





const total = computed(() => {
		return list.reduce((total,cur) => total + cur.num,0)
	})





​    "@dcloudio/uni-app": "3.0.0-3081220230817001",

​    "@dcloudio/uni-app-plus": "3.0.0-3081220230817001",

​    "@dcloudio/uni-components": "3.0.0-3081220230817001",

​    "@dcloudio/uni-h5": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-alipay": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-baidu": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-jd": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-kuaishou": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-lark": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-qq": "3.0.0-3081220230817001",

​    "@dcloudio/uni-mp-toutiao": "3.0.0-3081220230817001",





  "@dcloudio/uni-app": "3.0.0-3081220230817001",

  "@dcloudio/uni-app-plus": "3.0.0-3081220230817001",

  "@dcloudio/uni-components": "3.0.0-3081220230817001",

  "@dcloudio/uni-h5": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-alipay": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-baidu": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-jd": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-kuaishou": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-lark": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-qq": "3.0.0-3081220230817001",

  "@dcloudio/uni-mp-toutiao": "3.0.0-3081220230817001",





  "dev:app": "uni -p app",

  "dev:app-android": "uni -p app-android",

  "dev:app-ios": "uni -p app-ios",

  "dev:custom": "uni -p",

  "dev:h5": "uni",

  "dev:h5:ssr": "uni --ssr",

  "dev:mp-alipay": "uni -p mp-alipay",

  "dev:mp-baidu": "uni -p mp-baidu",

  "dev:mp-jd": "uni -p mp-jd",

  "dev:mp-kuaishou": "uni -p mp-kuaishou",

  "dev:mp-lark": "uni -p mp-lark",

  "dev:mp-qq": "uni -p mp-qq",

  "dev:mp-toutiao": "uni -p mp-toutiao",

  "dev:mp-weixin": "uni -p mp-weixin",

  "dev:quickapp-webview": "uni -p quickapp-webview",

  "dev:quickapp-webview-huawei": "uni -p quickapp-webview-huawei",

  "dev:quickapp-webview-union": "uni -p quickapp-webview-union",

  "build:app": "uni build -p app",

  "build:app-android": "uni build -p app-android",

  "build:app-ios": "uni build -p app-ios",

  "build:custom": "uni build -p",

  "build:h5": "uni build",

  "build:h5:ssr": "uni build --ssr",

  "build:mp-alipay": "uni build -p mp-alipay",

  "build:mp-baidu": "uni build -p mp-baidu",

  "build:mp-jd": "uni build -p mp-jd",

  "build:mp-kuaishou": "uni build -p mp-kuaishou",

  "build:mp-lark": "uni build -p mp-lark",

  "build:mp-qq": "uni build -p mp-qq",

  "build:mp-toutiao": "uni build -p mp-toutiao",







## uniapp + ts









# 项目开始

**安装类型声明文件**

pnpm i -D @uni-helper/uni-ui-types





## tabar





安装uni-ui

```text
npm i @dcloudio/uni-ui
```



自动导入



## Pinia 持久化

# 项目开始1