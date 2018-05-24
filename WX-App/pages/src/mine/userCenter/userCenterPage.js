// pages/src/mine/userCenter/userCenterPage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexTypeList: ['男', '女', '保密'],
    sexPickerIndex: 0,         //默认选中

    addressTypeList: ['西安市', '渭南市'],
    addressPickerIndex: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userNickName: app.globalData.userInfo.nickName,
        tempFilePaths: app.globalData.userInfo.avatarUrl
      })
    } else {
      this.setData({
        userNickName: '未授权',
        tempFilePaths: '../../../sources/images/minePage/default.png'
      })
    }
  },
  changeUserImage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相机中选取', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },

  // 选择头像
  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        that.setData({
          tempFilePaths: res.tempFilePaths[0]
        })
      },
    })
  },

  // 昵称输入完成回调
  bindConfirm: function (e) {
    console.log(e.detail.value)
  },

  // 性别选择
  sexPickerChange: function (e) {
    var that = this;
    that.setData({
      sexPickerIndex: e.detail.value
    })
    console.log(e.detail.value)
  },

  // 地区选择
  addressPickerChange: function (e) {
    var that = this;
    that.setData({
      addressPickerIndex: e.detail.value
    })
    console.log(e.detail.value)
  }
})