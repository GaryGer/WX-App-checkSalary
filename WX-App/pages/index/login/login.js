// pages/index/login/login.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  formSubmit: function (e) {
    var warn = "";      //弹出框内容
    var flag = true;    //判断信息输入是否完整
    if (e.detail.value.phoneNumber == "") {
      warn = '请输入手机号码！';
    } else if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.detail.value.phoneNumber))) {
      warn = '请输入正确的手机号码！';
    } else if (e.detail.value.passWord == "") {
      warn = '请输入密码！';
    }else{
      flag = false;
      wx.switchTab({
        url: '../../src/home/homePage',
      })
      console.log('form发生了submit事件，数据为', e.detail.value)
    }

    if (flag == true){
      wx.showModal({
        title: '提示',
        content: warn,
      })
    }
    
    
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