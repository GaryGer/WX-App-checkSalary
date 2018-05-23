var util = require('../../../utils/dateUtil')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    salaryListBee: [
      {
        company:"半坡博物馆",
        date:'2018-05-10',
        detail:[
          { title: '应发工资', content: 20000 },
          { title: '应扣工资', content: 2000 },
          { title: '实发工资', content: 18000 },
          { title: '岗位工资', content: 2000 },
          { title: '绩效工资', content: 5000 },
          { title: '加班工资', content: 6000 },
          { title: '五险一金', content: 3000 }
        ]
      },
      {
        company: "省博物馆",
        date: '2018-05-15',
        detail: [
          { title: '应发工资', content: 20000 },
          { title: '应扣工资', content: 2000 },
          { title: '实发工资', content: 18000 },
          { title: '岗位工资', content: 2000 },
          { title: '绩效工资', content: 5000 },
          { title: '加班工资', content: 6000 },
          { title: '五险一金', content: 3000 }
        ]
      }
    ]
  },
  bindDateChange: function (e) {
    var taht = this;
    taht.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatDate(new Date());
    this.setData({
      date: time
    })

    if (app.globalData.userInfo) {
      this.setData({
        userNickName: app.globalData.userInfo.nickName,
      })
    } else {
      this.setData({
        userNickName: '未授权',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 模拟加载过程！！！！1
    var that = this;
    setTimeout(function () {
      that.setData({
        loading: false
      })
    }, 2500)
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