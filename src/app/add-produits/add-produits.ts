import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produite } from '../model/produit.model';
import { ProduitSer } from '../service/produit-ser';


@Component({
  imports: [FormsModule],
  selector: 'app-add-produits',
  styleUrl: './add-produits.css',
  templateUrl: './add-produits.html',
})
export class AddProduits implements OnInit {
  newProduit = new Produite();
  constructor(private produitService: ProduitSer) {
}


  ngOnInit(): void {
    
  }
addProduit() {
  this.produitService.ajouterProduit(this.newProduit);
}

}
