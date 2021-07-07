import * as _ from 'lodash';


// pipe
let range: any = document.querySelector('.slider__fader');
let sliderPipe: any = document.querySelector('.slider__pipe');

range.onchange = function () {
  
  sliderPipe.style.left = this.value * 0.185 + '%';
  sliderPipe.innerHTML = this.value;
}
