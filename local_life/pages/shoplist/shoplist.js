// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {}, // 存放点击后获取商铺的数据
    shopList: [],  // 存放所有商铺的信息
    page: 1,  // 默认一进入请求第一页
    pageSize: 10, // 每页获取10条数据
    total: 0,  // 总数据条数
    isloading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query: options
    })
    this.getShopList()
  },
  // 以分页的形式获取商铺列表数据的方法
  getShopList(){
    this.setData({
      isloading: true
    })
    // 展示loading 效果
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit:this.data.pageSize
      },
      success: (res) =>{
        // console.log(res);
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        // 隐藏 loading 效果
        wx.hideLoading()
        this.setData({isloading: false})
        wx.stopPullDownRefresh()
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
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
    // 需要重置的数据
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    // 重新发数据请求
    this.getShopList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.page * this.data.pageSize >= this.data.total) {
      return wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'
      })
    }
    if(this.data.isloading) return
    this.setData({
      page: this.data.page + 1
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})