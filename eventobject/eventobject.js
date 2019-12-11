// eventobject/eventobject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [
      "衣服",
      "鞋子",
      "帽子"
    ]
  },

  handleTap(event) {
    console.log(event)
  },
  // 事件传递参数;会在target的dataset中出现
  handleView1(event) {
    console.log(event)
  },

  // 事件捕获和事件冒泡
  handleCapture1(){
    console.log('1.事件捕获')
  },
  handleBind1(){
    console.log('1.事件冒泡')
  },
  handleCapture2(){
    console.log('2.事件捕获')
  },
  handleBind2(){
    console.log('2.事件冒泡')
  },
  handleCapture3(){
    console.log('3.事件捕获')
  },
  handleBind3(){
    console.log('3.事件冒泡')
  }

})