// image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    // 系统api,让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success: res=>{
        const path=res.tempFilePaths[0]
        this.setData({
          imagePath:path
        })
        console.log(res)
      },
    })
  },
  // 监听图片加载完成
  handleImageLoad(){
    console.log('图片加载完成')
  }
})