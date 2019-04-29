function tryans(event) {
    var ans = event.data.ans;
    var collect = $("#number").data("prime");
    var result = (ans && collect) || (!ans && !collect);

    if(result == true){
        $("#result_toast").text("collect!");
        $("#result_toast").css("background-color", "#AAFFAA");
    }else{
        $("#result_toast").text("wrong!");
        $("#result_toast").css("background-color", "#FFAAAA");
    }
    $("#result_toast").toast("show");

    var num = $("#number").text();
    $("#history").text(num + " : " + collect + "  " + words[Math.floor(num/10)]);

    updateNumber();

}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function getNumber(){
    var mn = $("#min").val(); 
    var mx = $("#max").val(); 

    ht = Math.floor(mn/10)  + Math.floor(Math.random() * Math.floor(Math.floor((mx-mn)/10)));

    var onePlaceList = [1, 3, 7, 9];
    var index = Math.floor(Math.random() * Math.floor(4));
    return ht * 10 + onePlaceList[index];
}

function updateNumber(){
    var num = getNumber();
    $("#number").text(num);
    $("#number").data("prime", isPrime(num));
}

$(function(){
    $("#number").text = getNumber();
    $("#prime").on("click", {ans: true}, tryans);
    $("#not_prime").on("click", {ans: false}, tryans);
});
