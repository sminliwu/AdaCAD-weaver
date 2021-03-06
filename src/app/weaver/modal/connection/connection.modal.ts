import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export class Point {
  x: number;
  y: number;
}

class Connection {
  start: Point;
  end: Point;
  shuttleId: number;
}

@Component({
  selector: 'app-connection',
  templateUrl: './connection.modal.html',
  styleUrls: ['./connection.modal.scss']
})
export class ConnectionModal implements OnInit {
  connection: Connection = new Connection();
  shuttles: any;

  constructor(private dialogRef: MatDialogRef<ConnectionModal>,
             @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.connection.start = new Point();
    this.connection.end = new Point();
    this.shuttles = this.data.shuttles;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.connection);
  }

}
