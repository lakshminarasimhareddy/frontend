import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SenderFormsComponent } from './sender-forms/sender-forms.component';
import { AmountTransferComponent } from './amount-transfer/amount-transfer.component';

const routes: Routes = [
  {path:"sender", component:SenderFormsComponent},
  {path:"transfer", component:AmountTransferComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
