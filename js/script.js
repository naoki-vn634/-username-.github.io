'use strict';

function gettime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const output = `${year}/${month+1}/${date} ${hour}:${min}`;

    console.log(output)
    document.getElementById('time').textContent = output;
    
}

// $(function (){
//     $(window).scroll(function (){
//         $('.about').each(function (){
//             var targetElement = $(this).offset().top; //ターゲット要素の高さ
//             var scroll = $(window).scrollTop();
//             var windowHeight = $(window).height();

//             if (scroll > targetElement - windowHeight + 600){
//                 $(this).css('opacity','1');
//                 $(this).css('transform','translateY(0)');
//             }
//         });     
//     });
// });
gettime()
    