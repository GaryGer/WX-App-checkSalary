// pages/src/mine/minePage.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minePageFuncList: [
      { title: '记账本', imgUrl: '' },
      { title: '开发票', imgUrl: '' },
      { title: '报销进度', imgUrl: '' }]
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

  headerViewTap: function () {
    var that = this;
    that.navigationToVC('userCenter/userCenterPage');
  },

  cellDidSelected: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.index)
    switch (e.currentTarget.dataset.index) {
      case 0:
        that.navigationToVC('pocketBook/pocketBookPage');
        break;
      case 1:
        that.navigationToVC('invoicing/invoicingPage');
        break;
      case 2:
        that.navigationToVC('wipeOutProgress/wipeOutProgressPage');
        break;
    }

  },

  navigationToVC: function (pointUrl) {
    wx.navigateTo({
      url: pointUrl
    })
  }
})