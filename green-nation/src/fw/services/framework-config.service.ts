import { Injectable } from '@angular/core';

export interface IconFiles
{
imageFile:string;
alt : string ;
link:string;
}

export interface FrameworkConfigSetting
{
showLanguageSelecotr? :boolean;
 showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakPoint?: number;
  socialIcons? : Array<IconFiles>;

}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelecotr=true;
  showUserControls=true;
  showStatusBar=true;
  showStatusBarBreakPoint=0;
  socialIcons=new Array<IconFiles>();
  
  Configure(settings:FrameworkConfigSetting) :void{
  Object.assign(this,settings);

  }

}
