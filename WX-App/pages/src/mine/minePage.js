// pages/src/mine/minePage.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    if (app.globalData.userInfo) {
      this.setData({
        userNickName: app.globalData.userInfo.nickName,
        userAvatarUrl: app.globalData.userInfo.avatarUrl
      })
    } else {
      this.setData({
        userNickName: '未授权',
        userAvatarUrl: '../../sources/images/minePage/default.png'
      })
    }
  },

  headerViewTap:function(){
    wx.showModal({
      title: '提示',
      content: '进入个人中心',
    })
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})