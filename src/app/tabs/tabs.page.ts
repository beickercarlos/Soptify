import { Component, EnvironmentInjector, inject, ViewChild } from '@angular/core';
import { IonicModule, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  @ViewChild(IonTabs) tabs!: IonTabs;
  selected = '';
  progress = 42;

  constructor() {}
  setSelectedTab() {
    this.selected = this.tabs.ionTabsDidChange.arguments.getSelected();
    }
}
