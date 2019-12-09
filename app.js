//app.js
App({
  onLaunch: function(options) {
  // 打印默认参数,会有小程序进入场景
    console.log(options)

    // 获取用户信息
    wx.getUserInfo({
      success(res) {
        console.log(res)
      }
    })
  },
  // 小程序显示出来时
  onShow(options){
    // 参数中含有小程序进入的场景,可根据进入场景的参数做进一步处理
    switch(options.scene){
      case 1001:
      break;
      case 1005:
      break;
    }
    console.log(options)
  },
  // 小程序隐藏时
  onHide(){
  },
  // 小程序产生错误时
  onError(err){
  },

  // 定义全局变量
  globalData:{
    name:'xioyao',
    age:18
  }
})