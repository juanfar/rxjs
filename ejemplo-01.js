let countJs = 0;
const rate = 1000;
let lastClick = Date.now() - rate;
const button = document.querySelector('#jsButton');
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    countJs += event.clientX;
    console.log(countJs);
    lastClick = Date.now();
  }
});

const buttonRx = document.querySelector('#RxButton');

Rx.Observable.fromEvent(buttonRx, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count));