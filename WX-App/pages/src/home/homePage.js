// pages/src/mine/minePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inComeModel: [{ time: '2018-06-15', sum: 5000 }],
    // expendModel: [
    //   { time: '2018-06-01', sum: 100 },
    //   { time: '2018-06-05', sum: 200 },
    //   { time: '2018-06-07', sum: 300 },
    //   { time: '2018-06-10', sum: 400 },
    //   { time: '2018-06-15', sum: 500 }
    // ],
    expendModel: [],
    isUploadSalary: true,
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    isUploadSalary: (options.isUploadSalary == "true" ? true : false)
  },

  checkLastMounthIncome: function (e) {
    var that = this;
    that.setData({
      isLoading: true,
    })
    //模拟网络加载
    setTimeout(function () {
      that.setData({
        isUploadSalary: true
      })
    }, 2500)
  },

  goAccounting:function(){

    var that = this;
    wx.showModal({
      title: '提示',
      content: '转场至记账本',
      success: function(res){
        if (res.confirm){
          that.setData({
            expendModel: [
              { time: '2018-06-01', sum: 100 },
              { time: '2018-06-05', sum: 200 },
              { time: '2018-06-07', sum: 300 },
              { time: '2018-06-10', sum: 400 },
              { time: '2018-06-15', sum: 500 }
            ],
          })
        }else if (res.cancel){

        }
      }
    })
  }
})