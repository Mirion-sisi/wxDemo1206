// 注册Page时做什么
Page({
  // 2.初始化数据
  data: {
    list: []
  },
  // 1.监听页面的生命周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'http://106.54.54.237:8000/api/v1/recommend',
      success: res => {
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('onShow')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnLoad')

  },
  // 3.监听wxml中相关的一些事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  // 4.监听其它事件
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('滚动到底部')
  },
  // 监听下拉加载更多
  onPullDownRefresh() {
    console.log('下拉加载更多')
  }
})