import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../services/app.layout.service';
import { AppMenuComponent } from './menu/app.menu.component';

@Component({
    selector: 'cv-sidebar',
    templateUrl: './app.sidebar.component.html',
    standalone:true,
    imports:[AppMenuComponent]
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

