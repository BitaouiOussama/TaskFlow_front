import { ThemeService } from '../../core/services/theme.service';
import { Component, Input } from '@angular/core';
import { LayoutService } from '../services/app.layout.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';

import { ThemeEnum } from '../../core/enums/theme.enum';
import { MenuService } from '../services/app.menu.service';

@Component({
    selector: 'cv-config',
    templateUrl: './app.config.component.html',
    standalone: true,
    imports: [
        NgIf,
        NgForOf,
        NgClass,
        NgTemplateOutlet,
        FormsModule,
        ReactiveFormsModule,
        SidebarModule,
        RadioButtonModule,
        ButtonModule,
        InputSwitchModule
    ]
})
export class AppConfigComponent {
    @Input() minimal: boolean = false;

    scales: number[] = [12, 13, 14, 15, 16];

    themeEnum: typeof ThemeEnum = ThemeEnum;

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService,
        private themeService:ThemeService
    ) {}

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }
    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config().scale;
    }
    set scale(_val: number) {
        this.layoutService.config.update((config) => ({
            ...config,
            scale: _val,
        }));
    }

    get menuMode(): string {
        return this.layoutService.config().menuMode;
    }
    set menuMode(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            menuMode: _val,
        }));
    }

    get inputStyle(): string {
        return this.layoutService.config().inputStyle;
    }
    set inputStyle(_val: string) {
        this.layoutService.config().inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config().ripple;
    }
    set ripple(_val: boolean) {
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: _val,
        }));
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    changeTheme(themeEnum:ThemeEnum) {
      console.log(themeEnum);

        this.themeService.setCurrentThemeObservable(themeEnum);
    }

    decrementScale() {
        this.scale--;
    }

    incrementScale() {
        this.scale++;
    }
}
