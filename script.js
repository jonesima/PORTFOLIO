// // var prevScrollpos = window.pageYOffset;
// // window.onscroll = function() {
// //   var currentScrollPos = window.pageYOffset;
// //   if (prevScrollpos > currentScrollPos) {
// //     document.getElementById("navbar").style.top = "-100";
// //   } else {
// //     document.getElementById("navbar").style.top = "0px";
// //   }
// //   prevScrollpos = currentScrollPos;
// // }

// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll(".menu a")

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navlinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.menu a[href*=' + id +']').classList.add('active');
//             })

//         }
//     })
// };

// var position = [27.1959739, 78.02423269999997];

//     function initialize() {
//       var myOptions = {
//         zoom: 17,
//         streetViewControl: true,
//         scaleControl: true,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       };
//       map = new google.maps.Map(document.getElementById('googlemaps'),
//         myOptions);
//       latLng = new google.maps.LatLng(position[0], position[1]);
//       map.setCenter(latLng);
//       marker = new google.maps.Marker({
//         position: latLng,
//         map: map,
//         draggable: false,
//         animation: google.maps.Animation.DROP
//       });
//     }
//     google.maps.event.addDomListener(window, 'load', initialize);