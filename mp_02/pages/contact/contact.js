// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isloading: false  // 可以发请求
  },
  getColors(){
   this.setData({
    isloading: true // 开启节流 当前我们正在发请求
   })
    // 需要 展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'GET',
      success:({data:res}) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      complete:() => {
        wx.hideLoading() // 无论成功或失败 都隐藏效果
       this.setData({
        isloading: false
       })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getColors()
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
    // 如果为 ture 说明还在加载中 就会return 如果是false 就再次调用下面加载 
    if(this.data.isloading) return 
    this.getColors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})