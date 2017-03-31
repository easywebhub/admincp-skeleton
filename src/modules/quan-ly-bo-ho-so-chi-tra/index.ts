import { childViewer } from './../../helpers/child-viewer';
import { inject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inlineView } from "aurelia-templating";
@inlineView(childViewer)
export class QuanLyDoiTac {
    router: Router;
    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'danh-sach-bo-ho-so-chi-tra'], name: 'danh-sach-bo-ho-so-chi-tra', moduleId: './danh-sach-bo-ho-so-chi-tra', nav: true, title: 'Danh sách bộ hồ sơ chi trả' }]);
        this.router = router;
    }
}