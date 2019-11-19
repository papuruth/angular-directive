import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.color') color: boolean;
  @HostBinding('style.font-style') fontStyle: string;

  @HostListener('click') changeColor() {
    this.color = !this.color;
    this.fontStyle = this.fontStyle === 'italic' ? 'normal' : 'italic';
    console.log(this.fontStyle);
  }
}
