import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToDoBodyComponent } from './components/to-do-body/to-do-body.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoBodyComponent, NavbarHeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ToDoBodyComponent, NavbarHeaderComponent],
})
export class SharedModule {}
