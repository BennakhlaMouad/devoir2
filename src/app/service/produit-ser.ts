import { Service } from '@angular/core';
import { Produite } from '../model/produit.model';

@Service()
export class ProduitSer {

    produit : Produite[];

    constructor(){
        this.produit = [
{idProduit : 1, nomProduit : "PC ASUS", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
{idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
{idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
 ];




    }
    listeProduits():Produite[] {
           return this.produit;
}
ajouterProduit( prod: Produite){
this.produit.push(prod);
}


}
