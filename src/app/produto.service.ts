import { Injectable } from '@angular/core';
import { ProdutoInterface } from './produto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  private offset = 0;
  private limit = 10;
  private url = `https://api.escuelajs.co/api/v1/products`;

  async getAllProducts(offset: number): Promise<ProdutoInterface[]> {
    const data = await fetch(`${this.url}/?offset=${offset | this.offset}&limit=${this.limit}`);
    return await data.json() ?? [];
  }

  async getProductById(id: number): Promise<ProdutoInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
