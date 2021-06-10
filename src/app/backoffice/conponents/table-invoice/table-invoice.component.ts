import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  TableInvoiceDataSource,
  TableInvoiceItem,
} from './table-invoice-datasource';

@Component({
  selector: 'scf-table-invoice',
  templateUrl: './table-invoice.component.html',
  styleUrls: ['./table-invoice.component.scss'],
})
export class TableInvoiceComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableInvoiceItem>;
  dataSource: TableInvoiceDataSource;
  selection = new SelectionModel<TableInvoiceItem>(true, []);
  @Input() multiple: boolean = true;

  @Output() onDataChanges = new EventEmitter<any>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new TableInvoiceDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  selectItem(row: any): void {
    if (!this.multiple) {
      this.selection.clear();
    }
    this.selection.toggle(row);
    this.onDataChanges.emit(this.selection.selected);
  }
}
