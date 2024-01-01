import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs?.filter(tab => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(activeTab: TabComponent, event?: Event) {
    event?.preventDefault();

    this.tabs?.forEach(tab => {
      tab.active = false;
    });

    activeTab.active = true;
  }
}
