// let valueA = parseInt(prompt("Nhap vao gia tri a>0"));

// let valueB = parseInt(prompt("Nhap vao gia tri b>a"));

// while (valueA > valueB || valueA < 0) {
//   if (valueA > valueB) {
//     valueB = parseInt("Nhap lai gia tri b (b>a):");
//   }

//   if (valueA < 0) {
//     valueA = parseInt("Nhap lai tri a>0: ");
//   }
// }

// function checkSNT(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n - 1; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function tongSNT(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     if (checkSNT(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(tongSNT(valueA, valueB));

gsap.registerPlugin(Flip);

const { innerHeight } = window;

function setupDesing() {
  //vars
  var container = document.querySelectorAll("section"),
    figure = document.querySelector(".figures"),
    figures = document.querySelectorAll(".figure");

  //timeline
  var animationStart = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      anticipatePin: true,
      end: `+=${innerHeight * 1.8}`,
      onEnter: flip,
      onLeaveBack: flip,
      markers: true,
    },
  });

  function flip() {
    let state = Flip.getState([figures]);
    figure.classList.toggle("newColumn");
    Flip.from(state, {
      // absolute: true, // your triangle needs a width and height
      stagger: 0.01,
    });
  }
  /*.to(figure, {
    className: "figures newColumn"
  })*/
}

setupDesing();
