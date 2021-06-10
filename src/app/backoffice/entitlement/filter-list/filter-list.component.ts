import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FilterListDataSource, FilterListItem } from './filter-list-datasource';

@Component({
  selector: 'scf-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FilterListItem>;
  dataSource: FilterListDataSource;
  productData: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private cd: ChangeDetectorRef) {
    this.dataSource = new FilterListDataSource();
  }
  ngOnInit(): void {
    this.productData = {
      company: 'PT. CDE',
      firstName: 'Namanya',
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.cd.detectChanges();
  }

  onProductDataChanges(value: any) {
    this.productData = value;
  }
}
