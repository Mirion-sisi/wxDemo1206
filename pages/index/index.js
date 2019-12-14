Page({
  // 1.Toast弹窗wx.showToast
  handleToast(){
    wx.showToast({
      title: '你好啊',
      duration:2000,
      icon:'loading',
      // image:'',可更换图标
      mask:true,//遮罩层
      success:()=>{
        console.log('展示弹窗成功')
      },
      fail:()=>{
        console.log('展示弹窗失败')
      },
      complete:()=>{
        console.log('完成函数调用')
      }
    })
  },
  // 2.Modal弹窗 wx.showModal
  handleModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      // showCancel:false,//将取消按钮取消
      cancelColor:'red',
      cancelText:'退出',
      success:res=>{
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消')
        }
        if(res.confirm){
          console.log('用户点击了确定')
        }
      }
    })
  },
  //3.Loading弹窗 wx.showLoading
  handleLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    })
    // 这个方法需手动停止，最好放在一个setTimeout中，等待一段时间停止
    setTimeout(res=>{
      wx.hideLoading()
    },1000)
  },
  // 4.Action弹窗，底部菜单
  handleAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:res=>{
        console.log(res)
      }
    })
  },
  // ==========================
  // 分享，转发的实现
  onShareAppMessage:function(options){
    return {
      title:'你好啊，李银河',
      path:'/pages/index/index',
      imageUrl: "http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg"
    }
  }
})