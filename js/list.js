var btn = document.querySelector(".fa-solid");
btn.addEventListener('click',function(){
    var menu = document.querySelector(".list");

    if(menu.style.display === "none" || menu.style.display === ''){
        menu.style.display = "block";
        
    }else{
        menu.style.display = "none";
    }
},false)



  $(function(){
      $('.list ol').hide();
      $('.header_nav_li>a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
      })
  })

  let mql = window.matchMedia("(max-width: 428px)")
  console.log(mql)
  // 監聽狀態改變
   
  function testView (e) {
      return e.matches ? console.log('Smaller than 428px width!!') : console.log('Bigger than 428px width!!')
  }
  mql.addEventListener(testView);
  // 執行時呼叫的監聽函式
  testView(mql)

  