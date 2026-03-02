//personal-info.js
Page({
  data: {
    money: '',
    name: '',
    phone: '',
    id: ''
  },
  onLoad: function (options) {
    // 接收从上一个页面传递过来的贷款额度
    if (options.money) {
      this.setData({
        money: options.money
      })
    }
  },
  // 输入事件处理
  bindNameInput: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindPhoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindIdInput: function(e) {
    this.setData({
      id: e.detail.value
    })
  },
  // 检测贷款额度按钮点击事件
  check: function() {
    if (!this.data.name || !this.data.id || !this.data.phone) {
      wx.showToast({
        title: '请输入用户信息',
        icon: 'none'
      })
    } else {
      // 跳转到审批结果页面，并传递用户信息
      wx.navigateTo({
        url: '../approval-result/approval-result?money=' + this.data.money + '&name=' + this.data.name + '&phone=' + this.data.phone + '&id=' + this.data.id
      })
    }
  }
})
