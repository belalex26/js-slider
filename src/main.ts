import * as _ from 'lodash';


// pipe
let range: any = document.querySelector('.slider__fader');
let sliderPipe: any = document.querySelector('.slider__pipe');

range.onchange = function () {
  
  sliderPipe.style.left = this.value - 10 + 2 + 'px';
  sliderPipe.innerHTML = this.value;
}
