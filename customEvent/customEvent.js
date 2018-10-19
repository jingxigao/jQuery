$(document).ready(function () {
   $("#clickme").click(function () {
       var e=jQuery.Event("myEvent");//创建自己的事件myEvent
       $("#clickme").trigger(e);//声明clickme为事件触发
   });
   $("#clickme").bind("myEvent",function (event) {//绑定事件
       console.log(event);
   })
});