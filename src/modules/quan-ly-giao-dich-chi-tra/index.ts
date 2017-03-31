import { childViewer } from './../../helpers/child-viewer';
import { inject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inlineView } from "aurelia-templating";
@inlineView(childViewer)
export class QuanLyDoiTac {
    router: Router;
    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'danh-sach-giao-dich-chi-tra'], name: 'danh-sach-giao-dich-chi-tra', moduleId: './danh-sach-giao-dich-chi-tra', nav: true, title: 'Danh sách giao dịch chi trả' }]);
        this.router = router;
    }
}