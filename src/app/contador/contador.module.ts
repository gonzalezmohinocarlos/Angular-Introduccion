import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],/* No necesitamos el CommonModule porque no hay directivas *Ng
    imports: [
        CommonModule
        //Modulos
    ]*/
})

export class ContadorModule {}