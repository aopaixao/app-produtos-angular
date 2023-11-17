import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.sass'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 10;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  changePage(page: number): void {
    if (page >= 1) {
      this.currentPage = page;
      console.clear();
      console.log(`paginagion-component currentPage: ${this.currentPage}`);
      this.pageChanged.emit(page);
    }
  }
}
