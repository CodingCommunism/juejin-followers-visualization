---
theme: hydrogen
---
> 作者：寒草  
> 微信：hancao97  
> 介绍：一个不一样的北漂程序员(工作11个月的年轻程序员)，欢迎加微信批评指正交流技术或者一起玩耍约饭
# 我的文章总有前言，本文也不例外
> 此篇文章献给：掘金的伙伴们，工作一年来的战友们，前辈们，还有间歇性热血中二的我自己。

大家好呀～我是寒草，我是一个毕业将近一年的前端工程师，大家如果看到我的主页就可以看到我是`2021-01-05`加入掘金，并在上面发布文章，我发布的第一篇文章是[《深入浅出Vue.js》读书笔记1-Object的变化侦测](https://juejin.cn/post/6914140287812141070),虽然这篇文章质量一般，但是也是我开始写文章的契机。如今我开了很多很多坑，比如以下这些专栏：
- [前端聊计算机基础](https://juejin.cn/column/6969844790070345759)
- [寒草瞎叨叨](https://juejin.cn/column/6968438387292241933)
- [前端专题](https://juejin.cn/column/6966042251562582023)
- [浏览器渲染机制](https://juejin.cn/column/6966041450156916750)
- [Leetcode](https://juejin.cn/column/6966039710980374541)
- [记录随笔](https://juejin.cn/column/6966038538315890701)

虽然质量参差不齐，但是也有很多小伙伴阅读，感谢～  
毕竟人干一件事情的时候总要先立一个目标，之后葱葱葱，我最开始写文章的时候当然也是一样的，比如我就立了这样的flag：
- **倔力值先到个500**
- **关注先到个100**

> hhhh，看我这目标，一副没出息的亚子～


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8135fff434814fe0940e67b33951bd0e~tplv-k3u1fbpfcp-watermark.image)

无论目标咋样，反正第一步达到了嘛，所以本文既可以当做一篇关注破百纪念，也可以当做我的掘金年中总结，掘金前一阵也发布了这个活动嘛[2021 晒出年中总结，罗技机械键盘等精美奖品等你赢🚩](https://juejin.cn/post/6973994256679567373)

> 但是我这个文章和这个活动匹配不匹配也不太一定(在话题的边缘蹭一蹭～)，因为我还是有别的内容要聊，比如我把更多的总结留在我过生日的时候？哈哈哈哈，毕竟生活需要仪式感～

# 我想与大家和个影，纪念这半年旅程
## 寒草（没错就是我自己～）曾说过：纪念总要纪念品
本文用于纪念，但是就有这样一个问题：
> 纪念一件事情是不是总是需要一个纪念品？

比如说：
- 去博物馆必买纪念币
- 去旅游必带土特产
- 去景点必拍各种照片

有理有据，不愧是我～

所以，我要去纪念，单单凭这篇文章可不行，还要搞一个纪念品！！！ 
## 半年旅程，纪念合影
我就想呀想呀想呀想，我该怎么去纪念呢，我突然想起一个视频，就是`何同学和他六百万粉丝合影的视频`。  
他有几百万粉丝，我这有100多个志同道合的关注者，看看这数量级，这几乎没有难度啊！！！于是我就想到，我这个纪念品需要（此处点题了有木有~）：
- **这100位小伙伴的名字**
- **掘金的logo**
所以，其实我的思路就很清晰了：
> 用这大家的名字拼成一个掘金logo形状的词云图～

诶呀，虽然大家可能觉得这个想法比较土鳖，又没有啥难度，但是我觉得纪念品嘛，意义优先～  
于是，就有了这张词云图：  

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/268234ca51344c4288fce170a7610f3a~tplv-k3u1fbpfcp-watermark.image)

如果读到这里的同学关注过我，可以上里面找一找自己的名字～  

这里显示了所有关注我的同学，并用我们的名字组成一个掘金的logo，因为我觉得是掘金让大家，让我们有了一丝丝联系～

这个词云图上面其实出现了几个名字，不是关注者，而是我特地加上去的：
- BBFE大家庭
- CodingCommunism
- 工作这一年相识的伙伴

最后一个很笼统且不说，我先说一下`CodingCommunism`，这个是我和几个小伙伴一起建立的github小组，没事的时候做一点小玩意儿，虽然东西还没有很多（或者说几乎毛都没有），但是大家可以关注关注，说不定啥时候就搞个大事情，[CodingCommunism的github](https://github.com/CodingCommunism)，手动狗头。

以及[BBFE](https://mp.weixin.qq.com/s/8UNsXUHb56hcGdW2RZp08w)，此处可以看一看`BBFE`的简介，哈哈哈，所谓BBFE就是我现在所在的大前端团队，`BBFE`也是`Be Better Front End`的首字母缩写，在这里认识了很多很厉害，很有趣的同学～

# 如果你好奇，我就简单聊一下代码实现

本纪念demo项目仓库地址：[和掘金的小伙伴们合影～](https://github.com/CodingCommunism/juejin-followers-visualization)

> 无论主题为何，毕竟要做实人设，虽然这个东西并不难做，我也简单的分享一下如何实现～

首先，新建项目，我们这是一个`vue3`/`vite`/`ts`的项目，vite提供了很多模板，这里我们用vue-ts的模板新建一个vue3/ts项目
```js
yarn create @vitejs/app my-vue-app --template vue-ts
```
之后，我们下一步就是要调用掘金的接口，去获取关注者信息
```js
const initFollowers = async () => {
      let isEnd: boolean = false;
      let followers = [];
      let cursor = 0;
      while (!isEnd) {
        const res = await axios.get(
          `/user_api/v1/follow/followers?user_id=703340610597064&cursor=${cursor}&limit=${JUEJIN_LIMIT}`
        );
        isEnd = !res.data.data.hasMore;
        cursor += JUEJIN_LIMIT;
        followers.push(...res.data.data.data);
      }
      return followers;
    };
```
这里我在调接口的时候发现limit大于20是没有效果的，也就是说最多一次拉取20个关注者信息，于是我写了一个循环，判断数据是否完全拉取完整，如果没有拉取完整，那么我继续调用接口拿下20条数据（对不起，之前写代码的时候不小心写了一个死循环，诶呀我有罪～）  
这里我们会遇到这样一个问题，就是`跨域`,所以需要去`vite.config.ts`文件做一个配置。
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias:{
    '/@': path.resolve(__dirname, 'src')
  },
  server: {
    proxy: {
      '/user_api/v1': {
        target: 'https://api.juejin.cn/',
        changeOrigin: true // 这个属性设置为true！
      }
    }
  }
})
```
ok，于是我们有了数据无非就是搞词云图了，这里这里用了`echarts-wordcloud`,顺便我去掘金的官网搞了一个掘金logo的svg
![掘金logo](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b283a480c3c418cbe7904e81a1cd85d~tplv-k3u1fbpfcp-zoom-1.image)

之后把这个图片转换成base64格式（我也不知道为什么，echarts词云图图片采用svg格式给我报错）  
之后！在图片加载完成之后去配置词云图～
```js
const initChart = (chartList:Array<any>) => {
      const _chartContainer = echarts.init(containerDom.value as HTMLElement);
      const maskResource = new Image();
      maskResource.src = juejinImageUrl;
      maskResource.onload = function(){
        setChartOption(_chartContainer, maskResource, chartList);
      }
    }

onMounted(async () => {
  const followers = await initFollowers();
  const _chartList = getChartsList(followers);
  initChart(_chartList);
});
```
echarts词云图配置中和图片相关的是`maskImage`属性
```js
maskImage:maskResource
```
ok，于是这个纪念品就做完了～是不是很简单捏～
# 纪念是为了更好的前行，希望路上有你们

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d30aa43f747646b2b86d39b7b4058801~tplv-k3u1fbpfcp-watermark.image)

虽然现在认识我的人还不多，但是我会：    
继续分享我所学与我所经历  
继续抱着热血少年的心态踏浪前行  
...  
最后  
感谢阅读，愿我们都可以：  
`爱你所爱，行你所行，听从你心，无问西东`  
2021的后半程已经开始，请大家与我一起：  
`结伴而行，一同成长`
