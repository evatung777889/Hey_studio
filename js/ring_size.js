
$(function(){

//尺寸
$(".btn").on("click", function(e){
 let arr = document.querySelectorAll('.btn');
 console.log(arr);
for(let i=0;i<arr.length;i++){
    document.querySelectorAll('.btn')[i].style.backgroundColor= '#ccc';
    document.querySelectorAll('.btn')[i].style.color= 'black';
}
 $(this).css('background-color','black').css("color", "white")
  })

// 數量

parseInt
  $(".fa-minus").on("click", function(e){
    if(+$("input").val() <= 1){
        return;
    }
    var num = +$("input").val() - 1;
    $("input").val(num);
     })

     $(".fa-plus").on("click", function(e){
        var num = +$("input").val() + 1;
        $("input").val(num);
         })
       
   
});

//小圖換大圖


  $(function(){	
    $(".JS-small img").on('click',function(){		
      var num = $(this).attr("id").substr(3);		
      $(".smallImg").attr( "src" , "pic/ring/ring_4/pic_big_" + num + ".png" );
      var num1 = $(this).css.background;	
      console.log(num1)	
      $(this).css("background","url('../pic/ring/ring_" + num1 +".png")
      console.log(this) //尚未完成
    });
  });

  //放大鏡特效

  $(document).ready(function(){

    var nativeWidth = 0;
    var nativeHeight = 0;
  
    $(".magnifierWrap").mousemove(function(e) {
      if(!nativeWidth && !nativeHeight) {
        var imgObject = new Image();
        imgObject.src = $(".smallImg").attr("src");
        nativeWidth = imgObject.width;
        nativeHeight = imgObject.height;
      }

      else {
        var magnifyOffset = $(this).offset();
        var mouseX = e.pageX - magnifyOffset.left;
        var mouseY = e.pageY - magnifyOffset.top;
        
        if(mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
          $(".magnifier").fadeIn(100);
        }
        else{
          $(".magnifier").fadeOut(100);
        }
        if($(".magnifier").is(":visible")){
          var smallImgX = Math.round(mouseX/$(".smallImg").width()*nativeWidth - $(".magnifier").width()/2)*-1;
          var smallImgY = Math.round(mouseY/$(".smallImg").height()*nativeHeight - $(".magnifier").height()/2)*-1;
          var bgp = smallImgX + "px " + smallImgY + "px";
          
          var largeImgX = mouseX - $(".magnifier").width()/2;
          var largeImgY = mouseY - $(".magnifier").height()/2;
          
          $(".magnifier").css({left: largeImgX, top: largeImgY, backgroundPosition: bgp});
        }
      }
    });
  });
  