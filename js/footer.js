mui.init({
  // 预加载 详情页
//   preloadPages: [
//     {
//       url: 'detail.html',
//       id: 'detail.html'
//     }
//   ]
})
mui.plusReady(function () {
 console.log('4545');
   mui('.mui-bar').on('tap','#o',function() {
      console.log('1')
      mui.openWindow({
      	url: 'detail.html',
      	id: 'detail.html',
      })
   })
})