// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 10
  },
  fn(e){
    // console.log(e);
    this.setData({
      count: e.detail.value
    })
  },
  getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 22
      },
      success:(res) => {
        // console.log(res.data);
      }
    })
  },
  postInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: 'POST',
      data: {
        name: 'ls',
        age: 44
      },
      success:(res) => {
        // console.log(res.data);
      }
    })
  },
  // 通过编程式导航跳转到tabBar 页面
  gotoMessage() {
    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  gotoInfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  gotoInfo2(){
    wx.navigateTo({
      url: '/pages/info/info?name=ls&gender=男',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo()
    this.postInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触发了上拉触底事件');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})