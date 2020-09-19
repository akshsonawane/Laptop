import { Injectable } from '@angular/core';

import{Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
   new Product(1, 'Hp-Du2012', 'Intel core-I5 ssd-256Gb Ram-8Gb Hdd-1Tb graphics card  2-year warranty bag included', 60300,"../../assets/Lap4.jpg"),
    new Product(2, 'Hp-DR1009 ', 'Intel core-I7 ssd-256Gb Ram-8Gb Hdd-1Tb graphics card  2-year warranty bag included', 57750,"../../assets/Lap8.jpg"),
    new Product(3, 'HP-DU2036', 'Intel core-I7 ssd-256Gb Ram-4Gb Hdd-1Tb graphics card  2-year warranty bag included', 33200,"../../assets/Lap3.jpg"),
    new Product(4, 'HP-14sNote', 'Intel core-I7 ssd-512Gb Ram-8Gb Hdd-1Tb graphics card  2-year warranty bag included', 72200,"../../assets/Lap4.jpg"),
    new Product(5, 'HP-15sPav', 'Intel core-I5 ssd-256Gb Ram-8Gb Hdd-2Tb graphics card  2-year warranty bag included', 84000,"../../assets/Lap5.jpg"),
    new Product(6, 'HP-Du2009', 'Intel core-I7 ssd-512Gb Ram-16Gb Hdd-1Tb graphics card  2-year warranty bag included', 51333,"../../assets/Lap6.jpg"),
    new Product(7, 'HP-DR1000', 'Intel core-I7 ssd-256Gb Ram-4Gb Hdd-1Tb graphics card  2-year warranty bag included', 67555,"../../assets/Lap7.jpg"),
    new Product(8, 'HP-14q23t', 'Intel core-I5 ssd-512Gb Ram-8Gb Hdd-2Tb graphics card  2-year warranty bag included', 78659,"../../assets/Lap8.jpg"),
    new Product(9, 'HP-15da32', 'Intel core-I7 ssd-256Gb Ram-16Gb Hdd-1Tb graphics card  2-year warranty bag included', 65948,"../../assets/Lap9.jpg"),
   ]

  constructor() { }
  getProducts(): Product[] {
    
    return this.products
  }
}
