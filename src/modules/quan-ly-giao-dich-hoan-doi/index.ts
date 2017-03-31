import { childViewer } from './../../helpers/child-viewer';
import { inject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { inlineView } from "aurelia-templating";
@inlineView(childViewer)
export class QuanLyDoiTac {
    router: Router;
    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'danh-sach-giao-dich-hoan-doi'], name: 'danh-sach-giao-dich-hoan-doi', moduleId: './danh-sach-giao-dich-hoan-doi', nav: true, title: 'Danh sách giao dịch hoán đổi' }]);
        this.router = router;
    }
}