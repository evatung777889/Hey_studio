var btn = document.querySelector(".fa-solid");
btn.addEventListener('click',function(){
    var menu = document.querySelector(".list");

    if(menu.style.display === "none" || menu.style.display === ''){
        menu.style.display = "block";
        
    }else{
        menu.style.display = "none";
    }
},false)


//子選單收合
  $(function(){
    console.log('zzzz',$(window).width())
      if($(window).width() < 428){
        $('.list ol').hide();
        $('.header_nav_li>a').click(function(e){
          e.preventDefault();
          $(this).next().slideToggle();
        })
      };

  })

  