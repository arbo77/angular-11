import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceTemplateComponent } from '../../conponents/invoice-template/invoice-template.component';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'scf-dashboard-maker',
  templateUrl: './dashboard-maker.component.html',
  styleUrls: ['./dashboard-maker.component.scss'],
})
export class DashboardMakerComponent {
  displayedColumns = ['checkbox', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(public dialog: MatDialog) {}

  loadData() {
    const data = this.dataSource.data;
    data.push({
      position: data.length + 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
    });
    this.dataSource.data = data;
  }

  fillTableData(items: any) {
    this.dataSource.data = items;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  openInvoiceDialog(): void {
    const dialogRef = this.dialog.open(InvoiceTemplateComponent, {
      width: '520px',
      data: this.selection.selected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) return;
      this.fillTableData(result);
    });
  }
}
