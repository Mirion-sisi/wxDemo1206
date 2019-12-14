// 获取全局数据
// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)


Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'rion',
    age: 18,
    students: [{
        name: 'lisi',
        age: 12
      },
      {
        name: 'zhangsan',
        age: 13
      },
      {
        name: 'wangwu',
        age: 14
      }
    ],
    counter: 0,
  },
  // button方式获取用户信息
  handleGetUserInfo(event) {
    console.log(event)
  },
  addBtnClick() {
    // 1.错误做法，界面是不会刷新的
    // this.data.counter+=1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  subBtnClick() {
    this.setData({
      counter: this.data.counter - 1

    })
  },
  

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})