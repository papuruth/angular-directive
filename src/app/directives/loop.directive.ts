import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

export interface LoopContext {
  $implicit: string;
}

@Directive({
  selector: '[appLoop][appLoopFrom]'
})

export class LoopDirective implements OnInit {
  private heros: string[];
  context: LoopContext | null = null;
  index = 0;
  constructor(private templateRef: TemplateRef<LoopContext>, private vcr: ViewContainerRef) { }

  @Input() set appLoopFrom(value: string[]) {
    this.heros = value;
  }

  ngOnInit(): void {
    console.log(this.heros);
    this.heros.map((item) => {
      this.context = {
        $implicit: item,
      };
      this.vcr.createEmbeddedView(this.templateRef, this.context);
    });
  }
}
