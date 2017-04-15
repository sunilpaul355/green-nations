import { Component } from '@angular/core';
import {FrameworkConfigService,FrameworkConfigSetting  } from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from 'app/app.menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService:FrameworkConfigService, private menuService:MenuService )
  {
    let config:FrameworkConfigSetting={
socialIcons:[
{imageFile:'asssts/social-fb-bw.png',alt:'Facebook',link:'http://www.facebook.com'},
{imageFile:'asssts/social-fb-bw.png',alt:'Facebook',link:'http://www.facebook.com'},
{imageFile:'asssts/social-fb-bw.png',alt:'Facebook',link:'http://www.facebook.com'}
],
showLanguageSelecotr:true,
 showUserControls :true,
  showStatusBar: true,
  showStatusBarBreakPoint:800,
    };
    frameworkConfigService.Configure(config);

    menuService.items=initialMenuItems;
  }

   
  title = 'app works!';
}
