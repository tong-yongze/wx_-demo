Page({
  data:{
    info:'hello world',
    Num1:Math.random() * 10 ,
    Num2:Math.random().toFixed(2),
    count: 0,
    msg: '你好啊!',
    flag: true,
    arr1:['苹果','华为','小米']
  },
  // 定义按钮事件的处理函数
  btnHandle(e) {
    // console.log(e);
  },
  //  +1 按钮的处理函数
  CountChange() {
    // console.log(this);
   this.setData({
    count:this.data.count + 1
   })
  },
  btnTap2(e) {
    // console.log(e)
    this.setData({
      count: this.data.count +e.target.dataset.info  
    })
  },
  inputHandler(e) {
    // console.log(e.detail.value);
   this.setData({
    msg: e.detail.value
   })
  }
})