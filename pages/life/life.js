Page({
  data:{
    mytext:'欢迎来到大喜杂货店',
    mytext1:{
      mystr:'Daxi杂货店'
    }
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("执行onLoad");
    this.myfunction();
  },
    myfunction:function(){
    console.log("myfunction");
    }
})