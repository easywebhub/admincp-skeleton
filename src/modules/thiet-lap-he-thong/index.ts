import { childViewer } from './../../helpers/child-viewer';
import { inject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inlineView } from "aurelia-templating";
@inlineView(childViewer)
export class QuanLyDoiTac {
    router: Router;
    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'thiet-lap-he-thong'], name: 'thiet-lap-he-thong', moduleId: './thiet-lap-he-thong', nav: true, title: 'Thiết lập hệ thống' }]);
        this.router = router;
    }
}