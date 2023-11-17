import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoInterface } from '../produto-interface';
import { ProdutoService } from '../produto.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.sass'
})
export class ProdutoComponent {
  @Input() produtoInterfaceList: ProdutoInterface[] = [];
  produtoService: ProdutoService = inject(ProdutoService);

  currentPage: number = 1;
  totalPages: number = 10;

  constructor(){
    this.fetchApiData();
  }

  fetchApiData(): void {
    this.produtoService.getAllProducts(this.currentPage).then((produtoInterfaceList: ProdutoInterface[]) => {
      this.produtoInterfaceList = produtoInterfaceList;
      console.clear();
      console.log(`produto-component - Produto List Constructor: ${JSON.stringify(this.produtoInterfaceList)}`);
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    console.clear();
    console.log(`produto-component currentPage: ${this.currentPage}`);
    this.fetchApiData();
  }

}
