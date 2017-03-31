import { AuthenService } from './authen/authenService';
import { inject } from 'aurelia-dependency-injection';
import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import "./helpers/loggingSetting";
import "./helpers/axiosInterceptor";

@inject(AuthenService)
export class App {
  router: Router;
  userInfo: any;
  constructor(private authenSrv: AuthenService) {
    this.userInfo = this.authenSrv.userInfo;
  }
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'dashboard'], name: 'dashboard', moduleId: 'modules/dashboard/index', nav: true, title: 'Dashboard',
        settings: { icon: 'pg-home' }
      },
      {
        route: 'quan-ly-doi-tac', name: 'quan-ly-doi-tac', moduleId: 'modules/quan-ly-doi-tac/index', nav: true, title: 'Quản lý đối tác',
        settings: { icon: 'pg-tables' }
      },
      {
        route: 'quan-ly-giao-dich-hoan-doi', name: 'quan-ly-giao-dich-hoan-doi', moduleId: 'modules/quan-ly-giao-dich-hoan-doi/index', nav: true, title: 'QL giao dịch hoán đổi',
        settings: { icon: 'pg-tables' }
      },
      {
        route: 'quan-ly-giao-dich-chi-tra', name: 'quan-ly-giao-dich-chi-tra', moduleId: 'modules/quan-ly-giao-dich-chi-tra/index', nav: true, title: 'QL giao dịch chi trả',
        settings: { icon: 'pg-tables' }
      },
       {
        route: 'quan-ly-bo-ho-so-chi-tra', name: 'quan-ly-bo-ho-so-chi-tra', moduleId: 'modules/quan-ly-bo-ho-so-chi-tra/index', nav: true, title: 'QL giao bộ hồ sơ trả',
        settings: { icon: 'pg-tables' }
      },
      {
        route: 'thiet-lap-he-thong', name: 'thiet-lap-he-thong', moduleId: 'modules/thiet-lap-he-thong/index', nav: true, title: 'Thiết lập hệ thống',
        settings: { icon: 'pg-tables' }
      },
      {
        route: 'logout', name: 'logout', moduleId: 'modules/logout/index', nav: false
      },
      {
        route: 'demo', name: 'demo', moduleId: 'modules/demo/index', nav: true, title: 'Demo',
        settings: { icon: 'pg-tables' }
      },
    ]);

    this.router = router;

  }
  attached() {
    var script = document.createElement("script");
    script.src = "pages/js/scripts.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}


