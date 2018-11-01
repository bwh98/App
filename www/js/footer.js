
mui.plusReady(function () {
 console.log('加载完成');
   mui('.mui-bar').on('click','.mui-tab-item',
   function() {
      console.log('1')
   })
})