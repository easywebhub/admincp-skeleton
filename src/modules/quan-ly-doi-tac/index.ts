import { childViewer } from './../../helpers/child-viewer';
import { inject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inlineView } from "aurelia-templating";
@inlineView(childViewer)
export class QuanLyDoiTac {
    router: Router;
    heading = 'Quản lý chi trả';
    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([

            // { route: ['', 'danh-sach-doi-tac'], name: 'danh-sach-doi-tac', moduleId: './danh-sach-doi-tac', nav: false, title: 'Danh sách đổi tác' },
            { route: ['','quan-ly-so-du-doi-tac'], name: 'quan-ly-so-du-doi-tac', moduleId: './quan-ly-so-du-doi-tac', nav: true, title: 'Quản lý số dư đối tác' },
            { route: ['','quan-ly-so-du-doi-tac'], name: 'quan-ly-so-du-doi-tac', moduleId: './quan-ly-so-du-doi-tac', nav: true, title: 'Quản lý số dư đối tác' }

        ]);
        this.router = router;
    }
}