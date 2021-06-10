import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'scf-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.scss'],
})
export class InvoiceTemplateComponent implements OnInit {
  selectedItems: any;
  constructor(
    public dialogRef: MatDialogRef<InvoiceTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.selectedItems = data;
  }

  ngOnInit(): void {}

  onDataChanges(data: any) {
    this.selectedItems = data;
  }
}
