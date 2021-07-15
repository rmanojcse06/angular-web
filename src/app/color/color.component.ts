import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-component',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  colorClassName:string = "defaultColor";
  colorCssMap:Map<string,string> = new Map();
  updateColor(className: string): void{
    console.log("Inside ColorComponent :: updateColor => "+className);
    this.colorClassName = className;
  }
  constructor() { 
    this.colorClassName = "defaultColor";
    this.colorCssMap.set("redWhiteColor","Red & White");
    this.colorCssMap.set("greenYellowColor","Green & Yellow");
    this.colorCssMap.set("blueRoseColor","Blue & Rose");
    
  }
  get getColorCssClassNames(){
    return Array.from(this.colorCssMap.keys());
  }
  get getColorValues(){
    return Array.from(this.colorCssMap.values());
  }
  getColorValue(key:string):string{
    return this.colorCssMap.get(key) || 'Default';
  }

  ngOnInit(): void {
  }

}
