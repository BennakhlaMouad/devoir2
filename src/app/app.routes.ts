import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduits } from './add-produits/add-produits';

export const routes: Routes = [
    {path: "produits", component : Produits},
    {path: "add-produit", component : AddProduits}

];
