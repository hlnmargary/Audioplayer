function playAudio() {
  songs.play();
}

function pauseAudio() {
  songs.pause();
}


var list = document.querySelectorAll('.list__number');
var vinyle = document.querySelectorAll('.backgrounds');
var songs = document.querySelectorAll('.songs');
var play = document.querySelector('.buttons');
var cd = document.querySelector('.vinyle');
var cdImg = document.querySelector('.vinyle__img');


for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    console.log('listclickok');
    for (let j = 0; j < songs.length; j++) {
      songs[j].pause();
      if (list[i].dataset.number === songs[j].dataset.audio) {
        cd.classList.add('vinyleRight');
        cdImg.classList.add('vinyleRotation');
        songs[j].currentTime = 0;
        songs[j].play();
      }
    }
  })
}

for (let i = 0; i < list.length; i++) {
  play.addEventListener('click', function () {
    console.log('listclickok');
    for (let j = 0; j < songs.length; j++) {
      if (list[i].dataset.number === songs[j].dataset.audio) {
        songs[j].pause();
      }
    }
  })
}




// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', function () {
//     console.log('listclickok');
//     for (let j = 0; j < songs.length; j++) {
//       if (list[i].dataset.number === songs[j].dataset.audio) {
//         songs[j].currentTime = 0;
//         songs[j].play();
//         play.addEventListener('click', function () {
//           songs[j].play();
//           document.getElementById('.play').classList.remove('visible');
//         })
//         stop.addEventListener('click', function () {
//           songs[j].pause();
//           document.getElementById('.stop').classList.remove('visible');
//         })
//       }
//     }
//   })
// }









// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', function () {
//     console.log('listclickok');
//     for (let j = 0; j < vinyle.length; j++) {
//       if (list[i].dataset.number === vinyle[j].dataset.vinyle) {
//         vinyle[j].classList.add('visible');
//       }
//     }
//   })
// }








// for (let i = 0; i < projectArray.length; i++) {
//   projectArray[i].addEventListener('click', function () {
//     console.log('test');
//     for (let j = 0; j < imgArray.length; j++) {
//       imgArray[j].classList.add('unvisible');
//       imgArray[j].classList.add('onclick');
//     }
//   });

//   projectArray[i].addEventListener('click', function () {
//     for (let j = 0; j < imgArray.length; j++) {
//       if (projectArray[i].dataset.name === imgArray[j].dataset.project) {
//         imgArray[j].classList.remove('unvisible');
//         imgArray[j].classList.remove('onclick');

//       }
//     }










// var index = 0;
// var lis = document.querySelectorAll('.background');
// var elNext = document.querySelector('.arrow-container__right');
// var elPrev = document.querySelector('.arrow-container__left');

// elPrev.addEventListener('click', function () {
//   lis[index].classList.remove('visible');

//   index--;
//   if (index < 0)
//     index = 0;
//   lis[index].classList.add('visible');
// });

// elNext.addEventListener('click', function () {
//   lis[index].classList.remove('visible');
//   song[index].classList.remove('listening');
//   index++;
//   if (index > 8)
//     index = 8;
//   lis[index].classList.add('visible');
//   song[index].classList.add('listening');
// });

// var song = document.querySelector('.songs');
// var button = document.querySelector('.button');
// var songs = document.querySelector('.listening');

// button.addEventListener('click', function () {
//   if (button.innerHTML === "play") {
//     song.play();
//     button.innerHTML = "STOP";
//   } else {
//     song.pause();
//     button.innerHTML = "PLAY";
//   }
// });