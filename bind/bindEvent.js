//消耗内存
// $(document).ready(function () {
//    $("#clickMe").click(function () {
//       alert("hello!")
//    });
// });

$(document).ready(function () {
    $("#clickMe").bind("click",clickHandler1);//on=bind
    $("#clickMe").bind("click",clickHandler2);
    //$("#clickMe").unbind("click");//解除绑定 同时解除两个//off=unbind
    $("#clickMe").unbind("click",clickHandler2);
});
function clickHandler1(e) {
    console.log("clickHandler1");
}
function clickHandler2(e) {
    console.log("clickHandler2");
}