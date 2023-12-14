// // JavaScript Document
// function preloadImagesFromDirectory(dir) {
//   if (!dir) return;
//   function getJSON(URL, success) {
//     // Create new function (within global namespace) (With unique name):
//     var uniqueID = 'json' + +new Date();
//     window[uniqueID] = function (data) {
//       success && success(data);
//     };

//     // Append new SCRIPT element to DOM:
//     document.getElementsByTagName('body')[0].appendChild(
//       (function () {
//         var script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = URL.replace('callback=?', 'callback=' + uniqueID);
//         return script;
//       })()
//     );
//   }

//   function preload(srcArray) {
//     for (var i = 0; i < srcArray.length; i++) {
//       new Image().src = srcArray[i];
//     }
//   }

//   // Get that JSON data:
//   getJSON(
//     'scanImageDirectory.json.php?directory=' +
//       encodeURIComponent(dir) +
//       '&callback=?',
//     function (data) {
//       return data.images ? preload(data.images) : false;
//     }
//   );
// }

// window.onload = function () {
//   preloadImagesFromDirectory('img/');
// };

//buttons
// const callToActionBtns = document.querySelectorAll('.btn-rights');

// callToActionBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     callToActionBtns.forEach((f) =>
//       f != e.target ? f.classList.remove('active') : ''
//     );
//     e.target.classList.toggle('active');
//   });
// });

// const callToActionBtns2 = document.querySelectorAll('.btn-games');

// callToActionBtns2.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     callToActionBtns2.forEach((f) =>
//       f != e.target ? f.classList.remove('active') : ''
//     );
//     e.target.classList.toggle('active');
//   });
// });

if (screen.width <= 767) {
  document.querySelector('.btn-rules').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function (event) {
  const element = document.querySelectorAll('.btn-games');

  if (element) {
    element.forEach(function (el, key) {
      el.addEventListener('click', function () {
        el.classList.toggle('active');
        element.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove('active');
          }
        });
      });
    });
  }

  const element2 = document.querySelectorAll('.btn-rights');

  if (element2) {
    element2.forEach(function (el, key) {
      el.addEventListener('click', function () {
        el.classList.toggle('active');
        element2.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove('active');
          }
        });
      });
    });
  }
});

//timer
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0').toString();
  const minutes = currentTime
    .getMinutes()
    .toString()
    .padStart(2, '0')
    .toString();
  const seconds = currentTime
    .getSeconds()
    .toString()
    .padStart(2, '0')
    .toString();

  document.getElementById('hours-first').textContent = hours[0];
  document.getElementById('hours-second').textContent = hours[1];
  document.getElementById('minutes-first').textContent = minutes[0];
  document.getElementById('minutes-second').textContent = minutes[1];
  document.getElementById('seconds-first').textContent = seconds[0];
  document.getElementById('seconds-second').textContent = seconds[1];
}

setInterval(updateClock, 1000);
