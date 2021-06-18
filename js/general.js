function getCookie(key){
    // 传入key
        var str = '';
        var temp  =  document.cookie.split("; ");  //用; 进行分割
        for(var i=0;i<temp.length;i++){
        var a =  temp[i].split("=");
        if(a[0]===key){
                str += a[1];
                return str;
        }
        }
        
    }
    var oname = location.href;
if(!oname){

}else{
    oname = oname.split("?")[1].toString().split("=")[1];
}

$(".ulleft>li>.me").text(`Hi,${oname}`)
$("#cat>a").click(function(){
    location.href = `./cat.html?index=${oname}`
})
$("#header>div>#box1>.divCenter>#text").on("input",function(){
    $("#header>div>#box1>.divCenter>.divCenter-list").empty();
    $.ajax({
        url:"https://apis.gome.com.cn/p/suggest?from=headSearch&module=searchSuggest&jp=true&user=85353375928",
        jsonp:"callback",
        data:{
            query:$("#header>div>#box1>.divCenter>#text").val(),
        },
        dataType:"jsonp",
        success:function(res){
            console.log(res)
            $.each(res,function(index,item){
                $("#header>div>#box1>.divCenter>.divCenter-list").css({
                    display:"block"
                });
                $(`<li><a>${item[0]}</a><span>约${item[1]}条</span></li>`).appendTo($("#header>div>#box1>.divCenter>.divCenter-list"))
            })
        }
    })
})
$("#header>div>#box1>.divCenter>#text").on("blur",function(){
    $("#header>div>#box1>.divCenter>.divCenter-list").css({
                    display:"none"
                });
})
function sPan(a,b){
    var str = "";
    for(var i=b;i<a.length;i++){
        str += `<span>${a[i]}</span>`
    }
    return str
}
function liSpan(a){
    var str = "";
    for(var key in a){
        str += `<li>${sPan(a[key],0)}</li>`
    }
    return str
}
function iMg(a){
    var str = "";
    for(var i=0;i<a.length;i++){
        str += `<img src="${a[i]}" alt="">`
    }
    return str
}
$("#advertising>div>span").click(function(){
$("#advertising").css("display","none");
})
$("#header>div>#box1>.divCenter>span").mouseenter(function(){
var obj =  $("<div></div>")
.addClass("div")
.css("display","block");
obj.appendTo($("#header>div>#box1>.divCenter>span"));
$("<p></p>")
.addClass("p")
.appendTo("#header>div>#box1>.divCenter>span>div")
.text("店铺");
$("<p></p>")
.addClass("p")
.appendTo("#header>div>#box1>.divCenter>span>div")
.text("商品")
})
$("#header>div>#box1>.divCenter>span").mouseleave(function(){
$("#header>div>#box1>.divCenter>span>div")
.css({
"display":"none",
})
.remove("#header>div>#box1>.divCenter>span>div");
})


    $(".left>li").mouseenter(function(){
    var that = $(this).index();
        $.ajax({
        url:"../lib/newLi.json",
        type:"get",
        dataType:"json",
        success:function(res){
        $(".left>.newLI").css("display","block")
        .html(` <ol>
            ${liSpan(res["li" + that])}
        </ol>
        <div class="rig">
            <div class="t">${iMg(res["li" + that + "Imgt"])}</div>
            <div class="b"><img src="${res["li" + that + "Imgb"]}" alt=""></div>
        </div>`)
        }
        })

    })

$(".left>.newLI").mouseenter(function(){
    $(".left>li").css({
        display:"block",
    })
    $(".left>.newLI").css({
        display:"block",
    })
})
$("#tab>div>span>.left").mouseleave(function(){
    $(".left>.newLI").css({
        display:"none",
    })
})