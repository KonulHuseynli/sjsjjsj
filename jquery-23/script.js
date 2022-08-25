// // console.log(document.getElementsByTagName(h1)[0]);
// console.log($("#text:first")[0]);
// document.getElementById("text3").style.color="magenta";
// $("#text2").css("color","green");


       //*basqa element inject elemek olar*
// //document.getElementById("#text2").insertAdjacentHTML("afterbegin","<span>myuuu<span>");//(keecmisversiya)
//  $("#text2").append("<p>Hello world<p>");//after
//  $("#text2").prepend("<p>Hello world<p>");//before
 

        //**SHOW HIDE vanilla js**
//  document.getElementById("show").addEventListener("click",()=>
//  {
//     document.getElementById("content").style.display="block"
//  });

//  document.getElementById("hide").addEventListener("click",()=>
//  {
//     document.getElementById("content").style.display="none"
//  });


        //***SHOW HIDE VANILLA JQUERY***
//  $("#show").on("click",()=>
//  {
//     $("#content").show();
//  });

//  $("#hide").on("click",()=>
//  {
//     $("#content").hide();
//  });

             //Hover JS
    //  document.getElementById("heading").addEventListener("mouseover",()=>{
    //     document.getElementById("heading").style.color="red"
    //  });
    //  document.getElementById("heading").addEventListener("mouseleave",()=>{
    //     document.getElementById("heading").style.color="black"
    //  })

            //HOVER JQUERY
    // $("#heading").hover(()=>{
    //     $("#heading").css("color","green");
    // });
    // $("#heading").on("mouseleave",()=>{
    
    //     $("#heading").css("color","black");
    // });

          //FADEIN - FADEOUT=OPASITY 1-0(0-1);JS
    // document.getElementById("show").addEventListener("click",()=>
    // {
    //     document.getElementById("FADEDTEXT").classList.remove("fadeout");
    // });

    // document.getElementById("hide").addEventListener("click",()=>
    // {
    //     document.getElementById("FADEDTEXT").classList.add("fadeout");
    // });

           //FADEIN - FADEOUT=OPASITY 1-0(0-1);JS
    // $("#show").on("click",()=>
// {
// $("#FADEDTEXT").fadeIn(900)
// $("#FADEDTEXT").css("color","blue")
// });

// $("#hide").on("click",()=>
// {
// $("#FADEDTEXT").fadeOut(900)
// });

                   //SLIDER
        // $("#show").on("click",()=>{
        //     $("#FADEDTEXT").slideDown(500,"linear")
        // });

        // $("#hide").on("click",()=>{
        //     $("#FADEDTEXT").slideUp(500,"linear")
        // });

                    //eynianda hemclose hem open
        //         $("#hide").on("click",()=>{
        //     $("#FADEDTEXT").slideToggle(500,"linear")
        // });


                $("#hide").on("click",()=>{
            $("#FADEDTEXT").slideToggle(3000,"linear",()=> alert("Sliding completed"))
        });