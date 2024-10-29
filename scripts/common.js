$(window).on("load", function(){
		
});

// 맨위로
$(document).on("click","#topBtn", function(){
    window.scrollTo({top : 0, behavior: 'smooth'});
});

// 필터 종류별
$(document).on("click","input[name='sort']", function(){
    let val = $(this).attr("value");
    if(val == "total"){
        $(".project .list .sort").css("display", "block")
    }else{
        $(".project .list .sort").css("display", "none")
        $(".project .list .sort[sort="+val+"]").css("display", "block")
    }
});

// 필터 날짜순
$(document).on("change","select[name='date']", function(){
    let edu = $(".sort[sort='edu'] ol li").get().reverse();
    let work = $(".sort[sort='work'] ol li").get().reverse();
    
    $(".sort ol").empty();
    $.each(edu, function(i){
        $(".sort[sort='edu'] ol").append("<li>"+ edu[i].innerHTML + "</li>");
    });
    $.each(work, function(i){
        $(".sort[sort='work'] ol").append("<li>"+ work[i].innerHTML + "</li>");
    });
});