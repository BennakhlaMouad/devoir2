import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // this for *ngFor
import { Produite } from '../model/produit.model';
import { ProduitSer } from '../service/produit-ser';




@Component({
  imports: [CommonModule], // *ngFor
  selector: 'app-produits',
  styleUrl: './produits.css',
  templateUrl: './produits.html',
})
export class Produits {

  produits : Produite[];
  newProduit = new Produite();

constructor(private produitService: ProduitSer ) {
this.produits = produitService.listeProduits();


}

addProduit(){
// console.log(this.newProduit);
this.produitService.ajouterProduit(this.newProduit);
}

}
