import { Component, OnInit } from '@angular/core';
import { product } from '../model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public title:string;
  public list:product[];
  constructor() { 
   
  }

  ngOnInit(): void {
    this.title='MyAppStore'
    //------------------------------------
    this.list=[
      {
        id:12,
        title:'tshrit',
        nbrLike:40,
        description:"nice Tshrit",
        categorie:"Women",
        quantity:3,
        picture:"https://contents.mediadecathlon.com/p1901255/k$8870d3bdfed8faa1f8b3422de5d92354/t-shirt-sportee-100-coton-homme-noir.jpg?&f=452x452",
        price:55
      },
      {
        id:1,
        title:'tt',
        nbrLike:10,
        description:"neaz",
        categorie:"Women",
        quantity:0,
        picture:"https://ae01.alicdn.com/kf/H4047ad084d504aae808454d0f67512f6M/My-Hero-Academia-Cute-Anime-T-Shirt-Women-Casual-Harajuku-Tee-Oversize-Female-T-Shirt-Summer.jpg_640x640.jpg",
        price:55
      }
    ]


  }
  incrementLike(product:product):void{

    let i =this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++;
    }


  }
  DecQuantity(product:product):void{

    let i =this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--;
    }


  }

}
