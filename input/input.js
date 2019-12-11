// input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event){
    console.log('输入',event)
  },
  handleBlur(event){
    console.log('失去焦点',event)
  },
  handleFocus(event){
    console.log('获的焦点',event)
  }
})