let boton = document.querySelector('button');

boton.addEventListener('click', () => console.log('Clicked'));

Rx.Observable.fromEvent(boton, 'click')
    .subscribe(() => console.log('Clicked from RxJs'));