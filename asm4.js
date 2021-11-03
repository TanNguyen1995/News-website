// Lấy dữ liệuTop Headlines từ API
fetch('https://gnews.io/api/v4/top-headlines?token=d2b9440d92616a8a4dab8a32561efd39&lang=en')
    .then(function (response) {
        return response.json();
    })// hàm thêm tin tức vào trang
    .then(function (data) {
        var html="";
        for(var i=1;i<i<data.articles.length;i++){
         html+= "<div  class= \"news\">" 
                +"<img src="+ data.articles[i].image +">"+
                 "<div>"+"<a href = "+ data.articles[i].url +" target=\"blank\">"+data.articles[i].title+"</a>"+
                    "<p>"+data.articles[i].publishedAt+"</p>"+
                    "<p>"+ data.articles[i].description+"</p>"
                    +"</div>"
                    +"</div>"
        document.getElementById("result").innerHTML = html;
        }
            });     
            // hàm hiện modal và Search lấy thông tin nhấn vào input gửi
function exit(){
    // hiện thị loading khi đang tải
    document.getElementById("loading").style.display="block";
    // lấy dữ liệu từ input nhập thông tìm kiếm và thời gian
    var string = document.getElementById("apost").value;
    var urlString=string.split(' ').join('');
    var fromTime = document.getElementById("fromTime").value;
    var toTime = document.getElementById("toTime").value;
    // lấy dữ liệu search từ API
    fetch("https://gnews.io/api/v4/search?q="+urlString+"&from="+fromTime+"T03:00:55Z&to="+toTime+"T03:23:55Z&token=d2b9440d92616a8a4dab8a32561efd39&lang=en")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {// hàm thêm tin tức vào trang
        var html="";
        for(var i=1;i<data.articles.length;i++){
            html+= "<div  class= \"news\">" 
            +"<img src="+ data.articles[i].image +">"+
             "<div>"+"<a href = "+ data.articles[i].url +"\" target=\"blank\">"+data.articles[i].title+"</a>"+
                "<p>"+data.articles[i].publishedAt+"</p>"+
                "<p>"+ data.articles[i].description+"</p>"
                +"</div>"
                +"</div>"
   document.getElementById("result").innerHTML = html;
        }
        // ẩn thanh loading khi trang loading xong
        document.getElementById("loading").style.display="none";
    });
   // ẩn modal khi click vào input gửi
    document.getElementById("modal").style.display="none";
}
// Hiện modal khi click vào MyNew
function modal(){
    document.getElementById("modal").style.display="block";
}    
// Ẩn modal khi click vào button X
function exitModal(){
    document.getElementById("modal").style.display="none";
}