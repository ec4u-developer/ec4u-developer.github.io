(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"client-app","version":"1.22.0","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"7.2.15","@angular/common":"7.2.15","@angular/compiler":"7.2.15","@angular/core":"7.2.15","@angular/forms":"7.2.15","@angular/http":"7.2.15","@angular/platform-browser":"7.2.15","@angular/platform-browser-dynamic":"7.2.15","@angular/router":"7.2.15","@types/jquery":"3.3.1","bootstrap":"4.3.1","core-js":"3.1.4","font-awesome":"4.7.0","jquery":"^3.4.1","msal":"0.2.3","node-sass":"^4.14.1","rxjs":"6.5.2","tslib":"1.9.0","zone.js":"0.8.29"},"devDependencies":{"@angular-devkit/build-angular":"0.13.9","@angular/cli":"7.3.9","@angular/compiler-cli":"7.2.15","@angular/language-service":"7.2.15","@types/chai":"4.0.1","@types/jasmine":"2.8.6","@types/jasminewd2":"2.0.3","@types/node":"8.9.4","chai":"4.0.2","codelyzer":"4.2.1","jasmine-core":"2.99.1","jasmine-spec-reporter":"4.2.1","karma":"4.2.0","karma-chrome-launcher":"2.2.0","karma-jasmine":"1.1.1","karma-jasmine-html-reporter":"0.2.2","lodash":"4.17.12","protractor":"5.4.2","set-value":"2.0.1","ts-node":"5.0.1","tslint":"5.16.0","typescript":"3.2.4"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var _helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/AadB2CHelper */ "./src/app/helpers/AadB2CHelper.ts");
/* harmony import */ var _services_captcha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/captcha.service */ "./src/app/services/captcha.service.ts");
/* harmony import */ var _providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/is.authenticated.guard */ "./src/app/guards/is.authenticated.guard.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/eventregistration/eventregistration.component */ "./src/app/components/eventregistration/eventregistration.component.ts");
/* harmony import */ var _components_eventregistration_attendee_attendee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/eventregistration/attendee/attendee.component */ "./src/app/components/eventregistration/attendee/attendee.component.ts");
/* harmony import */ var _components_event_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/event/speakers/speakers.component */ "./src/app/components/event/speakers/speakers.component.ts");
/* harmony import */ var _components_event_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/event/sessions/sessions.component */ "./src/app/components/event/sessions/sessions.component.ts");
/* harmony import */ var _components_event_sessiontracks_sessiontracks_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/event/sessiontracks/sessiontracks.component */ "./src/app/components/event/sessiontracks/sessiontracks.component.ts");
/* harmony import */ var _components_eventregistration_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/eventregistration/confirmation/confirmation.component */ "./src/app/components/eventregistration/confirmation/confirmation.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _components_errormessage_errormessage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/errormessage/errormessage.component */ "./src/app/components/errormessage/errormessage.component.ts");
/* harmony import */ var _components_event_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/event/sponsors/sponsors.component */ "./src/app/components/event/sponsors/sponsors.component.ts");
/* harmony import */ var _components_event_passes_passes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/event/passes/passes.component */ "./src/app/components/event/passes/passes.component.ts");
/* harmony import */ var _components_event_sessionslistview_sessionslistview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/event/sessionslistview/sessionslistview.component */ "./src/app/components/event/sessionslistview/sessionslistview.component.ts");
/* harmony import */ var _components_eventregistration_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/eventregistration/captcha/captcha.component */ "./src/app/components/eventregistration/captcha/captcha.component.ts");
/* harmony import */ var _directives_translate_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/translate.directive */ "./src/app/directives/translate.directive.ts");
/* harmony import */ var _directives_defaultImage_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directives/defaultImage.directive */ "./src/app/directives/defaultImage.directive.ts");
/* harmony import */ var _resolvers_external_login_url_resolver__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./resolvers/external.login.url.resolver */ "./src/app/resolvers/external.login.url.resolver.ts");
/* harmony import */ var src_app_resolvers_external_profile_url_resolver__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/resolvers/external.profile.url.resolver */ "./src/app/resolvers/external.profile.url.resolver.ts");
/* harmony import */ var _resolvers_external_logout_url_resolver__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./resolvers/external.logout.url.resolver */ "./src/app/resolvers/external.logout.url.resolver.ts");
/* harmony import */ var _components_myregistrations_myregistrations_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/myregistrations/myregistrations.component */ "./src/app/components/myregistrations/myregistrations.component.ts");
/* harmony import */ var _helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./helpers/ImageHelper */ "./src/app/helpers/ImageHelper.ts");
/* harmony import */ var src_app_components_eventregistration_paymentdemo_payment_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/components/eventregistration/paymentdemo/payment.demo */ "./src/app/components/eventregistration/paymentdemo/payment.demo.ts");
/* harmony import */ var _services_browser_session_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/browser-session.service */ "./src/app/services/browser-session.service.ts");
/* harmony import */ var _components_eventregistration_attendee_custom_registration_fields_custom_registration_fields_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component */ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.ts");
/* harmony import */ var _components_event_session_cart_session_cart_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/event/session-cart/session-cart.component */ "./src/app/components/event/session-cart/session-cart.component.ts");
/* harmony import */ var _components_event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/event/session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var _components_eventregistration_session_selection_session_selection_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/eventregistration/session-selection/session-selection.component */ "./src/app/components/eventregistration/session-selection/session-selection.component.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _components_myregistrations_waitlist_item_card_waitlist_item_card_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/myregistrations/waitlist-item-card/waitlist-item-card.component */ "./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.ts");
/* harmony import */ var _components_eventregistration_eventregistrationform_eventregistrationform_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/eventregistration/eventregistrationform/eventregistrationform.component */ "./src/app/components/eventregistration/eventregistrationform/eventregistrationform.component.ts");
/* harmony import */ var _components_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/pipes/safe.pipe */ "./src/app/components/pipes/safe.pipe.ts");


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_15__["NavMenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_18__["EventComponent"],
                _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_19__["EventRegistrationComponent"],
                _components_eventregistration_attendee_attendee_component__WEBPACK_IMPORTED_MODULE_20__["AttendeeComponent"],
                _components_event_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_21__["SpeakersComponent"],
                _components_event_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_22__["SessionsComponent"],
                _components_event_sessiontracks_sessiontracks_component__WEBPACK_IMPORTED_MODULE_23__["SessiontracksComponent"],
                _components_eventregistration_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_25__["SpinnerComponent"],
                _components_errormessage_errormessage_component__WEBPACK_IMPORTED_MODULE_26__["ErrorMessageComponent"],
                _components_event_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_27__["SponsorsComponent"],
                _components_event_passes_passes_component__WEBPACK_IMPORTED_MODULE_28__["PassesComponent"],
                _components_event_sessionslistview_sessionslistview_component__WEBPACK_IMPORTED_MODULE_29__["SessionsListViewComponent"],
                _components_eventregistration_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_30__["CaptchaComponent"],
                _directives_translate_directive__WEBPACK_IMPORTED_MODULE_31__["TranslateDirective"],
                _directives_defaultImage_directive__WEBPACK_IMPORTED_MODULE_32__["DefaultImage"],
                _components_myregistrations_myregistrations_component__WEBPACK_IMPORTED_MODULE_36__["MyRegistrationsComponent"],
                src_app_components_eventregistration_paymentdemo_payment_demo__WEBPACK_IMPORTED_MODULE_38__["PaymentDemoComponent"],
                _components_eventregistration_attendee_custom_registration_fields_custom_registration_fields_component__WEBPACK_IMPORTED_MODULE_40__["CustomRegistrationFieldsComponent"],
                _components_event_session_cart_session_cart_component__WEBPACK_IMPORTED_MODULE_41__["SessionCartComponent"],
                _components_eventregistration_session_selection_session_selection_component__WEBPACK_IMPORTED_MODULE_43__["SessionSelectionComponent"],
                _components_myregistrations_waitlist_item_card_waitlist_item_card_component__WEBPACK_IMPORTED_MODULE_45__["WaitlistItemCardComponent"],
                _components_eventregistration_eventregistrationform_eventregistrationform_component__WEBPACK_IMPORTED_MODULE_46__["EventRegistrationFormComponent"],
                _components_eventregistration_eventregistrationform_eventregistrationform_component__WEBPACK_IMPORTED_MODULE_46__["RegistrationFormInitializerDirective"],
                _components_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_47__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutes"], { scrollPositionRestoration: 'disabled' })
            ],
            providers: [
                _guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_6__["IsAuthenticatedGuard"],
                _resolvers_external_login_url_resolver__WEBPACK_IMPORTED_MODULE_33__["ExternalLoginUrlResolver"],
                _resolvers_external_logout_url_resolver__WEBPACK_IMPORTED_MODULE_35__["ExternalLogoutUrlResolver"],
                src_app_resolvers_external_profile_url_resolver__WEBPACK_IMPORTED_MODULE_34__["ExternalProfileUrlResolver"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
                _providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_4__["HttpHelperProvider"],
                _helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_37__["ImageHelper"],
                _services_captcha_service__WEBPACK_IMPORTED_MODULE_3__["CaptchaService"],
                _providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["EventServiceProvider"],
                _providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["SessionServiceProvider"],
                _providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["TracksServiceProvider"],
                _providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["UserServiceProvider"],
                _providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["SponsorshipsServiceProvider"],
                _services_browser_session_service__WEBPACK_IMPORTED_MODULE_39__["BrowserSessionService"],
                _helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_2__["AadB2CHelper"],
                _components_event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_42__["SessionCartService"],
                _services_labels_service__WEBPACK_IMPORTED_MODULE_1__["LabelsService"],
                _helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_2__["AadB2CHelper"],
                _services_cookie_service__WEBPACK_IMPORTED_MODULE_44__["CookieService"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-menu *ngIf=\"labelsService.labelsLoaded()\"></nav-menu>\r\n\r\n<main role=\"main\" class=\"body-content\" *ngIf=\"labelsService.labelsLoaded()\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer *ngIf=\"labelsService.labelsLoaded()\"></app-footer>\r\n"

/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n\nmain {\n  flex-grow: 2; }\n\n.body-content {\n  padding-bottom: 160px; }\n\n@media (max-width: 767px) {\n    .body-content {\n      padding-top: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvQzpcXFVzZXJzXFxBTF9LTVxcRGVza3RvcFxcQXJiZWl0XFxJRkJcXHJlbGVhc2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXJCO0lBSEo7TUFJWSxpQkFBaUIsRUFBQSxFQUU1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGZsZXgtZ3JvdzogMjtcclxufVxyXG5cclxuLmJvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTYwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(labelsService, metaService) {
        this.labelsService = labelsService;
        this.metaService = metaService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.labelsService.getLabelsModel().subscribe(function (labelsModel) {
            // force get the labels
        });
        this.addBuildVersionToMetaTags();
    };
    AppComponent.prototype.addBuildVersionToMetaTags = function () {
        var metaBuildVersion = '0.0.0';
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"] && src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].buildVersion) {
            metaBuildVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].buildVersion;
        }
        var metaDefinition = {
            name: 'build-version',
            content: metaBuildVersion
        };
        this.metaService.addTag(metaDefinition);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_labels_service__WEBPACK_IMPORTED_MODULE_2__["LabelsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/errormessage/errormessage.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/errormessage/errormessage.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger m-5\" role=\"alert\">\r\n    <strong [appTranslate]=\"errorMessageTranslationKey\">{{ serverErrorMessage }}</strong> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/errormessage/errormessage.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/errormessage/errormessage.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3JtZXNzYWdlL2Vycm9ybWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/errormessage/errormessage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/errormessage/errormessage.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageComponent.prototype, "serverErrorMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorMessageComponent.prototype, "errorMessageTranslationKey", void 0);
    ErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errormessage',
            template: __webpack_require__(/*! ./errormessage.component.html */ "./src/app/components/errormessage/errormessage.component.html"),
            styles: [__webpack_require__(/*! ./errormessage.component.scss */ "./src/app/components/errormessage/errormessage.component.scss")]
        })
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-5\" *ngIf=\"!event && !error\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"error\">\r\n    <app-errormessage\r\n        [serverErrorMessage]=\"error.message\"\r\n        [errorMessageTranslationKey]=\"error.localizationKey\">\r\n    </app-errormessage>\r\n</div>\r\n\r\n<ng-container *ngIf=\"event && !error\">\r\n    <div class=\"container event-banner\" [style.background-image]=\"'url(' + getBannerImage() + ')'\">\r\n        <ng-container *ngIf=\"event\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h1 class=\"section-landing-heading\">{{ event.eventName }}</h1>\r\n                    <h3 class=\"event-date\">{{ event.startDate | date:'medium' }}</h3>\r\n                    <h3 class=\"event-location\">{{ event.building ? event.building.name : '' }}</h3>\r\n                </div>\r\n            </div>\r\n            <div class=\"row register-container\" id=\"register-now\">\r\n                <button\r\n                    *ngIf=\"!isSessionCartAllowed && canUserRegister()\"\r\n                    [routerLink]=\"['registration']\"\r\n                    [queryParams]=\"{id: event.readableEventId}\"\r\n                    class=\"btn btn-primary\">\r\n                    <span class='fa fa-calendar'></span> <span class=\"icon-padding\" [appTranslate]=\"'RegisterNow'\">Register Now</span>\r\n                </button>\r\n                <button\r\n                    *ngIf=\"isSessionCartAllowed && canUserRegister()\"\r\n                    (click)=\"registerForSessions()\"\r\n                    class=\"btn btn-primary\">\r\n                    <span class='fa fa-calendar'></span> <span class=\"icon-padding\" [appTranslate]=\"'RegisterNow'\">Register Now</span>\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n\r\n    <div *ngIf=\"!canUserRegister()\" class=\"alert alert-warning container event-data-container-warning\" role=\"alert\">\r\n        {{event.websiteMessage}}\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"event\">\r\n        <div class=\"container event-description-container mt-4\">\r\n            {{ event.description }}\r\n        </div>\r\n    </ng-container>\r\n\r\n    <div [hidden]=\"!event\" class=\"container event-data-container mt-4\">\r\n        <ul class=\"nav nav-tabs nav-justified\">\r\n            <li *ngIf=\"sessions && sessions.length > 0\" class=\"nav-item\">\r\n                <a [routerLink]=\"['/event', EventDetailSections.Sessions]\" [queryParams]=\"{ id: readableEventId}\"\r\n                    [appTranslate]=\"'Sessions'\" routerLinkActive=\"active\" class=\"nav-link\" id=\"btn-show-sessions-list\">Sessions</a>\r\n            </li>\r\n            <li *ngIf=\"showSessionTracks\" class=\"nav-item\">\r\n                <a [routerLink]=\"['/event', EventDetailSections.SessionTracks]\" [queryParams]=\"{ id: readableEventId}\"\r\n                    [appTranslate]=\"'SessionTracks'\" routerLinkActive=\"active\" class=\"nav-link\" id=\"btn-show-sessions-tracks-list\">Session\r\n                    Tracks</a>\r\n            </li>\r\n            <li *ngIf=\"showSpeakers\" class=\"nav-item\">\r\n                <a [routerLink]=\"['/event', EventDetailSections.Speakers]\" [queryParams]=\"{id: readableEventId}\"\r\n                    [appTranslate]=\"'Speakers'\" routerLinkActive=\"active\" class=\"nav-link\" id=\"btn-show-speakers-list\">Speakers</a>\r\n            </li>\r\n            <li *ngIf=\"showPasses\" class=\"nav-item\">\r\n                <a [routerLink]=\"['/event', EventDetailSections.PassInformation]\" [queryParams]=\"{id: readableEventId }\"\r\n                    [appTranslate]=\"'PassInformation'\" routerLinkActive=\"active\" class=\"nav-link\" id=\"btn-show-pass-list\">Pass\r\n                    Information</a>\r\n            </li>\r\n        </ul>\r\n        <div class='mt-4'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n\r\n    <app-sponsors [readableEventId]=\"readableEventId\" [renderOnZeroSponsorships]=false></app-sponsors>\r\n</ng-container>\r\n\r\n<aside>\r\n    <app-session-cart [readableEventId]=\"readableEventId\"></app-session-cart>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/components/event/event.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 100%;\n  background-size: cover;\n  text-align: center;\n  color: #eee;\n  background-color: #778899;\n  height: 420px;\n  background-position: center center;\n  background-size: cover; }\n\n.register-container {\n  display: block;\n  align-self: center;\n  margin-bottom: 40px; }\n\n.event-banner .row {\n  padding-top: 10px; }\n\n.register-container button {\n  border-radius: 5px;\n  font-size: 1.3rem; }\n\n.section-landing-heading {\n  font-size: 180%;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-top: 1em; }\n\n.event-date {\n  font-size: 150%;\n  margin-top: 1.5em;\n  text-transform: uppercase; }\n\n.event-location {\n  font-size: 150%;\n  margin-top: 0; }\n\n.event-data-container {\n  padding-top: 10px;\n  padding-bottom: 60px; }\n\n.event-data-container-warning {\n  padding-top: 10px;\n  margin-top: 10px; }\n\n.event-description-container {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  text-align: justify;\n  font-size: 1.1rem; }\n\n.icon-padding {\n  padding-left: 10px; }\n\n.nav-link {\n  font-weight: 1000;\n  color: #495057; }\n\n.nav-tabs .nav-link:focus,\n.nav-tabs .nav-link:hover {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0; }\n\n.nav-tabs {\n  flex-direction: column; }\n\n.nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-item .nav-link.active,\n.event-details-accordion .card .card-header {\n  color: #495057;\n  background-color: #fff;\n  border-color: #fff #fff #2196f3;\n  border-bottom-width: thick; }\n\n.event-details-accordion .card {\n  border: 0; }\n\n.event-details-accordion .card .card-body {\n  padding: 0; }\n\n.btn-primary {\n  font-family: Fira Sans,sans-serif;\n  color: #fff;\n  background-color: #bf1d2e;\n  border-radius: 8px; }\n\n.btn-primary:hover {\n  color: #bf1d2e;\n  background-color: #fff;\n  border-color: #bf1d2e; }\n\n/* [SM] Small devices (landscape phones, 576px and up) (bootstrap breakpoint SM) */\n\n@media (min-width: 576px) {\n  .nav-tabs {\n    flex-direction: row; }\n  .nav-link {\n    padding: .5rem 0.1rem;\n    font-size: 13px; } }\n\n/* [MD] Medium devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  .nav-link {\n    padding: .5rem .2rem;\n    font-size: 17px; } }\n\n/* [LG] Large devices (desktops, 992px and up) */\n\n@media (min-width: 992px) {\n  .nav-link {\n    padding: .5rem 1rem;\n    font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRcXGV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7O0VBRUksYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCOzs7RUFHSSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxTQUNKLEVBQUE7O0FBRUE7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUl6QixrRkFBQTs7QUFDQTtFQUNJO0lBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7SUFDSSxxQkFBcUI7SUFDckIsZUFBZSxFQUFBLEVBQ2xCOztBQUdMLGdEQUFBOztBQUNBO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZSxFQUFBLEVBQ2xCOztBQUdMLGdEQUFBOztBQUNBO0VBQ0k7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZSxFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1iYW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4ODk5O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmV2ZW50LWJhbm5lciAucm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tbGFuZGluZy1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTgwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4uZXZlbnQtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5ldmVudC1sb2NhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZXZlbnQtZGF0YS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmV2ZW50LWRhdGEtY29udGFpbmVyLXdhcm5pbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZXZlbnQtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcblxyXG59XHJcblxyXG4uaWNvbi1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbms6Zm9jdXMsXHJcbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmF2LXRhYnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcclxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLFxyXG4uZXZlbnQtZGV0YWlscy1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAjZmZmICMyMTk2ZjM7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiB0aGljaztcclxufVxyXG5cclxuLmV2ZW50LWRldGFpbHMtYWNjb3JkaW9uIC5jYXJkIHtcclxuICAgIGJvcmRlcjogMFxyXG59XHJcblxyXG4uZXZlbnQtZGV0YWlscy1hY2NvcmRpb24gLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgZm9udC1mYW1pbHk6IEZpcmEgU2FucyxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYxZDJlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNiZjFkMmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmYxZDJlO1xyXG59XHJcblxyXG5cclxuLyogW1NNXSBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApIChib290c3RyYXAgYnJlYWtwb2ludCBTTSkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAubmF2LXRhYnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwLjFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBbTURdIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAuMnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFtMR10gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent, EventQueryParameterNames, EventDetailSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventQueryParameterNames", function() { return EventQueryParameterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailSections", function() { return EventDetailSections; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/ImageHelper */ "./src/app/helpers/ImageHelper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var _session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");
/* harmony import */ var _eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../eventregistration/eventregistration.component */ "./src/app/components/eventregistration/eventregistration.component.ts");










var EventComponent = /** @class */ (function () {
    function EventComponent(route, router, eventService, imageHelper, labelsService, sessionCartService, activeEventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.imageHelper = imageHelper;
        this.labelsService = labelsService;
        this.sessionCartService = sessionCartService;
        this.activeEventService = activeEventService;
        this.EventDetailSections = EventDetailSections;
        this.selectedSection = EventDetailSections.Sessions;
        this.isSessionCartCollapsed = false;
        this.isSessionCartAllowed = false;
        this.isLoadingData = false;
        this.defaultImageUrlSelfHosted = 'default-event-image.jpg';
        this.defaultImageUrlCrmHosted = 'homehero.jpg';
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (paramMap) {
            _this.readableEventId = paramMap.get(EventQueryParameterNames.ReadableEventId);
            _this.getEventAndSessionData().then(function () {
                return _this.setIsSessionCartAllowed();
            });
        });
        this.eventService.getSessionTracks(this.readableEventId).subscribe(function (tracks) {
            _this.showSessionTracks = tracks && tracks.length > 0;
            _this.chooseRoute();
        });
        this.eventService.getSpeakers(this.readableEventId).subscribe(function (speakers) {
            _this.showSpeakers = speakers && speakers.length > 0;
            _this.chooseRoute();
        });
        this.eventService.getPasses(this.readableEventId).subscribe(function (passes) {
            _this.showPasses = passes && passes.length > 0;
            _this.chooseRoute();
        });
        this.sessionCartService.isOpen = false;
    };
    EventComponent.prototype.chooseRoute = function () {
        if (!this.showSessions) {
            if (this.showSessionTracks) {
                this.router.navigate(["event/session-tracks"], { queryParams: { id: this.readableEventId } });
            }
            else if (this.showSpeakers) {
                this.router.navigate(["event/speakers"], { queryParams: { id: this.readableEventId } });
            }
            else if (this.showPasses) {
                this.router.navigate(["event/pass-information"], { queryParams: { id: this.readableEventId } });
            }
        }
        else {
            this.router.navigate(["event/sessions"], { queryParams: { id: this.readableEventId } });
        }
    };
    EventComponent.prototype.getBannerImage = function () {
        if (this.event == null) {
            // This early exit avoids showing placeholder image while event isn't loaded.
            return '';
        }
        if (this.event.image != null) {
            return this.event.image;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].useRestStack === true) {
                return this.imageHelper.getImageUrl(this.defaultImageUrlSelfHosted);
            }
            else {
                return this.imageHelper.getImageUrl(this.defaultImageUrlCrmHosted);
            }
        }
    };
    EventComponent.prototype.registerForSessions = function () {
        if (this.sessionCartService.getSessionCartForEvent(this.readableEventId).length !== 0) {
            this.router.navigate([_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_9__["EventCheckoutRoutePaths"].REGISTRATION], { queryParams: { id: this.readableEventId } });
        }
        else {
            this.registerForAllSessions();
        }
    };
    EventComponent.prototype.canUserRegister = function () {
        if (this.event.setRegistrationEndDate) {
            return new Date(Date.now()) < new Date(this.event.stopRegistrationDate);
        }
        return true;
    };
    EventComponent.prototype.registerForAllSessions = function () {
        var _this = this;
        this.sessions.forEach(function (session) {
            _this.sessionCartService.addSession(_this.readableEventId, session.id);
        });
        this.sessionCartService.isOpen = true;
    };
    EventComponent.prototype.getEventAndSessionData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.activeEventService.getEvent(this.readableEventId).toPromise()];
                    case 1:
                        _a.event = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.activeEventService.getSessions(this.readableEventId).toPromise()];
                    case 2:
                        _b.sessions = _c.sent();
                        this.showSessions = this.sessions && this.sessions.length > 0;
                        this.chooseRoute();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        this.error = error_1;
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventComponent.prototype.setIsSessionCartAllowed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isFreeEvent, hasSessions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activeEventService.isFreeEvent(this.readableEventId)];
                    case 1:
                        isFreeEvent = _a.sent();
                        return [4 /*yield*/, this.activeEventService.hasEventSessions(this.readableEventId)];
                    case 2:
                        hasSessions = _a.sent();
                        this.isSessionCartAllowed = this.sessionCartService.isSessionCartEnabledForEvent(this.event, isFreeEvent, hasSessions);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-event",
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/components/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/components/event/event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_4__["ImageHelper"],
            src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_6__["LabelsService"],
            _session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_7__["SessionCartService"],
            src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_8__["ActiveEventService"]])
    ], EventComponent);
    return EventComponent;
}());

var EventQueryParameterNames;
(function (EventQueryParameterNames) {
    EventQueryParameterNames["ReadableEventId"] = "id";
    EventQueryParameterNames["SpeakerId"] = "speakerId";
})(EventQueryParameterNames || (EventQueryParameterNames = {}));
var EventDetailSections;
(function (EventDetailSections) {
    EventDetailSections["Sessions"] = "sessions";
    EventDetailSections["SessionTracks"] = "session-tracks";
    EventDetailSections["Speakers"] = "speakers";
    EventDetailSections["PassInformation"] = "pass-information";
})(EventDetailSections || (EventDetailSections = {}));


/***/ }),

/***/ "./src/app/components/event/passes/passes.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/event/passes/passes.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"isLoading\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"!isLoading\">\r\n    <div *ngIf=\"error\">\r\n        <app-errormessage\r\n            [serverErrorMessage]=\"error.message\"\r\n            [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n\r\n    <div *ngIf=\"passes\">\r\n        <p *ngIf=\"passes.length === 0\" class=\"text-center\" [appTranslate]=\"'NoPassesEvent'\">No passes are associated to this event.</p>\r\n        <div *ngIf=\"passes.length > 0\" class=\"container mb-4\">\r\n            <div class=\"filters mr-3 ml-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"input-group m-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <label class=\"input-group-text\" for=\"passSelect\" [appTranslate]=\"'SelectAPass'\">Select a\r\n                                pass</label>\r\n                        </div>\r\n                        <select [(ngModel)]=\"selectedPass\" id=\"passSelect\" class=\"custom-select\">\r\n                            <option *ngFor=\"let pass of passes\" [ngValue]=\"pass\" role=\"tab\">\r\n                                <span>{{ pass.passName }} (</span>\r\n                                <span *ngIf=\"pass.numberOfPassesLeft > 0\">{{ pass.currencySymbol }}{{ pass.price }}</span>\r\n                                <span *ngIf=\"pass.numberOfPassesLeft <= 0\" [appTranslate]=\"'SoldOut'\">Sold Out</span>\r\n                                <span>)</span>\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"selectedPass\" class=\"container\">\r\n            <div *ngIf=\"selectedPass.sessions && selectedPass.sessions.length > 0\">\r\n                <h4 class=\"m-3\">\r\n                    <span [appTranslate]=\"'SessionsIncludedInPass'\">Sessions included in Pass</span>\r\n                    <span> ({{ selectedPass.sessions.length }})</span>\r\n                </h4>\r\n                <app-sessions-list-view [sessions]=\"selectedPass.sessions\" [readableEventId]=\"readableEventId\"></app-sessions-list-view>\r\n            </div>\r\n            <p *ngIf=\"!selectedPass.sessions || selectedPass.sessions.length === 0\" class=\"m-5\">\r\n                <span [appTranslate]=\"'NoSessionsAssociated'\">There are no sessions associated with this pass.</span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/passes/passes.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/event/passes/passes.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9wYXNzZXMvQzpcXFVzZXJzXFxBTF9LTVxcRGVza3RvcFxcQXJiZWl0XFxJRkJcXHJlbGVhc2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV2ZW50XFxwYXNzZXNcXHBhc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvcGFzc2VzL3Bhc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIG1hcmdpbjogNDJweCAwIDIxcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/event/passes/passes.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/event/passes/passes.component.ts ***!
  \*************************************************************/
/*! exports provided: PassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassesComponent", function() { return PassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.component */ "./src/app/components/event/event.component.ts");





var PassesComponent = /** @class */ (function () {
    function PassesComponent(route, eventService) {
        this.route = route;
        this.eventService = eventService;
    }
    PassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (paramMap) {
            _this.readableEventId = paramMap.get(_event_component__WEBPACK_IMPORTED_MODULE_4__["EventQueryParameterNames"].ReadableEventId);
            _this.loadPasses();
        });
    };
    PassesComponent.prototype.loadPasses = function () {
        var _this = this;
        this.isLoading = true;
        this.eventService.getPasses(this.readableEventId).subscribe(function (passes) {
            _this.passes = passes;
            if (_this.passes.length > 0) {
                _this.selectedPass = _this.passes[0];
            }
            _this.isLoading = false;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    PassesComponent.prototype.handleErrorResponse = function (error) {
        this.error = error;
        this.isLoading = false;
    };
    PassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-passes',
            template: __webpack_require__(/*! ./passes.component.html */ "./src/app/components/event/passes/passes.component.html"),
            styles: [__webpack_require__(/*! ./passes.component.scss */ "./src/app/components/event/passes/passes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], Object])
    ], PassesComponent);
    return PassesComponent;
}());



/***/ }),

/***/ "./src/app/components/event/session-cart/session-cart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/event/session-cart/session-cart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-3\" *ngIf=\"isSessionCartVisible\">\r\n    <div (click)=\"collapse()\" class=\"session-cart-backdrop\"></div>\r\n    <div class=\"session-cart\">\r\n        <div class=\"header m-3\">\r\n            <span class=\"h4\" [appTranslate]=\"'SessionCartHeader'\">Session Cart</span>\r\n            <span (click)=\"collapse()\" class=\"close\">×</span>\r\n        </div>\r\n        <div class=\"sessions-wrapper\">\r\n            <app-sessions-list-view\r\n                [readableEventId]=\"readableEventId\"\r\n                [sessions]=\"sessionsCart\"\r\n                [sessionIdsInCart]=\"sessionIdsInCart\"\r\n                [isEventWaitlisted]=\"event.showWaitlist\"\r\n                (removeFromCartClicked)=\"removeSessionFromCart($event)\"\r\n                class=\"container\">\r\n            </app-sessions-list-view>\r\n        </div>\r\n        <div class=\"footer p-3\">\r\n            <button [routerLink]=\"['registration']\" [queryParams]=\"{id: readableEventId}\" class=\"btn btn-primary btn-lg btn-block\"\r\n                [disabled]=\"sessionCartCount() == 0\" [appTranslate]=\"'FinishRegistration'\">Finish Registration</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/session-cart/session-cart.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/event/session-cart/session-cart.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".session-cart-backdrop {\n  z-index: 499;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7); }\n\n.session-cart {\n  display: flex;\n  background-color: white;\n  position: fixed;\n  z-index: 500;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: auto;\n  padding: 0;\n  max-width: 500px;\n  min-width: 0;\n  width: 100%;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  overflow: hidden; }\n\n.session-cart .sessions-wrapper {\n    flex: 1;\n    display: flex;\n    overflow-y: auto; }\n\n.session-cart .footer {\n    margin-top: auto; }\n\n.session-cart-opener {\n  position: fixed;\n  top: 50%;\n  bottom: 0;\n  right: 0;\n  transform: rotate(-90deg) translate(-100%); }\n\n.session-cart-opener .btn {\n    height: 60px; }\n\n.btn-primary:focus {\n  outline: 1px dashed #fff;\n  outline-offset: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zZXNzaW9uLWNhcnQvQzpcXFVzZXJzXFxBTF9LTVxcRGVza3RvcFxcQXJiZWl0XFxJRkJcXHJlbGVhc2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV2ZW50XFxzZXNzaW9uLWNhcnRcXHNlc3Npb24tY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBZnBCO0lBa0JRLE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7O0FBcEJ4QjtJQXdCUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxRQUFRO0VBQ1IsMENBQTBDLEVBQUE7O0FBTDlDO0lBUVEsWUFBWSxFQUFBOztBQUlwQjtFQUNJLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvc2Vzc2lvbi1jYXJ0L3Nlc3Npb24tY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLWNhcnQtYmFja2Ryb3Age1xyXG4gICAgei1pbmRleDogNDk5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi1jYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDUwMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5zZXNzaW9ucy13cmFwcGVyIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Vzc2lvbi1jYXJ0LW9wZW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTEwMCUpO1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHsgXHJcbiAgICBvdXRsaW5lOiAxcHggZGFzaGVkICNmZmY7IFxyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDsgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/event/session-cart/session-cart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/event/session-cart/session-cart.component.ts ***!
  \*************************************************************************/
/*! exports provided: SessionCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionCartComponent", function() { return SessionCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");




var SessionCartComponent = /** @class */ (function () {
    function SessionCartComponent(sessionCartService, activeEventService) {
        this.sessionCartService = sessionCartService;
        this.activeEventService = activeEventService;
    }
    SessionCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSessionCart();
        this.subscribeToIsSessionCartOpen();
        this.activeEventService.getEvent(this.readableEventId).subscribe(function (event) {
            _this.event = event;
        });
    };
    SessionCartComponent.prototype.collapse = function () {
        this.sessionCartService.isOpen = false;
    };
    SessionCartComponent.prototype.removeSessionFromCart = function (session) {
        this.sessionCartService.removeSession(this.readableEventId, session.id);
    };
    SessionCartComponent.prototype.sessionCartCount = function () {
        return this.sessionIdsInCart.length;
    };
    SessionCartComponent.prototype.getSessionCart = function () {
        var _this = this;
        this.sessionIdsInCart = this.sessionCartService.getSessionCartForEvent(this.readableEventId);
        this.getSessionsWithId(this.sessionIdsInCart);
        this.sessionCartService.sessionCartChange.subscribe(function (sessionCart) {
            _this.sessionIdsInCart = sessionCart;
            _this.getSessionsWithId(_this.sessionIdsInCart);
        });
    };
    SessionCartComponent.prototype.getSessionsWithId = function (sessionIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.activeEventService.getAndFilterSessions(this.readableEventId, true, sessionIds).toPromise()];
                    case 1:
                        _a.sessionsCart = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionCartComponent.prototype.subscribeToIsSessionCartOpen = function () {
        var _this = this;
        this.isSessionCartVisible = this.sessionCartService.isOpen;
        this.sessionCartService.isOpenChange.subscribe(function (isOpen) {
            _this.isSessionCartVisible = isOpen;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SessionCartComponent.prototype, "readableEventId", void 0);
    SessionCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-session-cart",
            template: __webpack_require__(/*! ./session-cart.component.html */ "./src/app/components/event/session-cart/session-cart.component.html"),
            styles: [__webpack_require__(/*! ./session-cart.component.scss */ "./src/app/components/event/session-cart/session-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_cart_service__WEBPACK_IMPORTED_MODULE_2__["SessionCartService"],
            src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_3__["ActiveEventService"]])
    ], SessionCartComponent);
    return SessionCartComponent;
}());



/***/ }),

/***/ "./src/app/components/event/session-cart/session-cart.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/event/session-cart/session-cart.service.ts ***!
  \***********************************************************************/
/*! exports provided: SessionCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionCartService", function() { return SessionCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionCartService = /** @class */ (function () {
    function SessionCartService() {
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sessionCartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cntActiveAttendeeRegistrationsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._isOpen = false;
        this.sessionCarts = new Map();
        this.SESSION_CART_KEY_PREFIX = "session-cart-";
    }
    Object.defineProperty(SessionCartService.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (isOpen) {
            this._isOpen = isOpen;
            this.isOpenChange.emit(isOpen);
        },
        enumerable: true,
        configurable: true
    });
    SessionCartService.prototype.isSessionCartEnabledForEvent = function (event, isFreeEvent, hasSessions) {
        if (event == null) {
            return false;
        }
        return event.allowCustomAgenda && isFreeEvent && hasSessions;
    };
    SessionCartService.prototype.getSessionCartForEvent = function (readableEventId) {
        this.loadCartFromLocalStorage(readableEventId);
        if (!this.sessionCarts.has(readableEventId)) {
            this.sessionCarts.set(readableEventId, new Array());
        }
        return this.sessionCarts.get(readableEventId);
    };
    SessionCartService.prototype.addSession = function (readableEventId, sessionId) {
        if (!this.sessionCarts.has(readableEventId)) {
            this.sessionCarts.set(readableEventId, new Array());
        }
        if (!this.isSessionInCart(readableEventId, sessionId)) {
            this.sessionCarts.get(readableEventId).push(sessionId);
            this.sessionCartChange.emit(Array.from(this.sessionCarts.get(readableEventId).values()));
        }
        this.saveCartToLocalStorage(readableEventId);
    };
    SessionCartService.prototype.removeSession = function (readableEventId, sessionId) {
        if (!this.sessionCarts.has(readableEventId)) {
            this.sessionCarts.set(readableEventId, new Array());
        }
        if (this.isSessionInCart(readableEventId, sessionId)) {
            var index = this.sessionCarts.get(readableEventId).findIndex(function (id) { return id === sessionId; });
            this.sessionCarts.get(readableEventId).splice(index, 1);
            this.sessionCartChange.emit(Array.from(this.sessionCarts.get(readableEventId).values()));
        }
        this.saveCartToLocalStorage(readableEventId);
    };
    SessionCartService.prototype.isSessionInCart = function (readableEventId, sessionId) {
        if (this.sessionCarts.has(readableEventId)) {
            return this.sessionCarts.get(readableEventId).findIndex(function (id) { return id === sessionId; }) >= 0;
        }
        return false;
    };
    SessionCartService.prototype.flushCart = function (readableEventId) {
        this.sessionCarts.get(readableEventId).splice(0);
        this.sessionCartChange.emit(Array.from(this.sessionCarts.get(readableEventId).values()));
        localStorage.removeItem(this.getLocalStorageKeyForEvent(readableEventId));
    };
    SessionCartService.prototype.saveCartToLocalStorage = function (readableEventId) {
        if (this.sessionCarts.has(readableEventId)) {
            localStorage.setItem(this.getLocalStorageKeyForEvent(readableEventId), JSON.stringify(this.sessionCarts.get(readableEventId)));
        }
    };
    SessionCartService.prototype.loadCartFromLocalStorage = function (readableEventId) {
        var isCartForEventInStorage = localStorage.hasOwnProperty(this.getLocalStorageKeyForEvent(readableEventId));
        if (isCartForEventInStorage) {
            var storageCart = localStorage.getItem(this.getLocalStorageKeyForEvent(readableEventId));
            this.sessionCarts.set(readableEventId, JSON.parse(storageCart));
            this.sessionCartChange.emit(this.sessionCarts.get(readableEventId));
        }
    };
    SessionCartService.prototype.getLocalStorageKeyForEvent = function (readableEventId) {
        return this.SESSION_CART_KEY_PREFIX + readableEventId;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SessionCartService.prototype, "isOpenChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SessionCartService.prototype, "sessionCartChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SessionCartService.prototype, "cntActiveAttendeeRegistrationsChange", void 0);
    SessionCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SessionCartService);
    return SessionCartService;
}());



/***/ }),

/***/ "./src/app/components/event/sessions/sessions.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/sessions/sessions.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!sessions\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"error\">\r\n    <app-errormessage\r\n        [serverErrorMessage]=\"error.message\"\r\n        [errorMessageTranslationKey]=\"error.localizationKey\">\r\n    </app-errormessage>\r\n</div>\r\n\r\n<div *ngIf=\"sessions\">\r\n    <p *ngIf=\"sessions.length === 0\" class=\"text-center\" [appTranslate]=\"'NoSessionsEvent'\">No sessions are associated to this event.</p>\r\n\r\n    <div *ngIf=\"sessions.length > 0\">\r\n        <div class=\"container mb-4\">\r\n            <div class=\"filters mr-3 ml-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"select-date col-sm-6 col-md-4 offset-sm-6 offset-md-8\">\r\n                        <select class=\"custom-select\" [(ngModel)]=\"selectedDateKey\" aria-label=\"Choose date\">\r\n                            <option *ngFor=\"let dateKey of dateKeys\" value=\"{{dateKey}}\" role=\"tab\">\r\n                                {{ dateText(dateKey) | async }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <app-sessions-list-view\r\n            *ngIf=\"allowSessionRegistrations\"\r\n            [readableEventId]=\"readableEventId\"\r\n            [isEventWaitlisted]=\"event.showWaitlist\"\r\n            [canUserRegister]=\"canUserRegister()\"\r\n            [sessions]=\"sessionsByDay[this.selectedDateKey]\"\r\n            [sessionIdsInCart]=\"sessionIdsInCart\"\r\n            (addToCartClicked)=\"addToCart($event)\"\r\n            (removeFromCartClicked)=\"removeFromCart($event)\">\r\n        </app-sessions-list-view>\r\n\r\n        <app-sessions-list-view\r\n            *ngIf=\"!allowSessionRegistrations\"\r\n            [sessions]=\"sessionsByDay[this.selectedDateKey]\"\r\n            [readableEventId]=\"readableEventId\"\r\n            (registerClicked)=\"registerToSession($event)\">\r\n        </app-sessions-list-view>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/sessions/sessions.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/sessions/sessions.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".session-schedule-grid {\n  clear: both;\n  margin-bottom: 5em; }\n\n.page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n.timeline-header {\n  height: 3em;\n  background: black;\n  color: white; }\n\n.timeline {\n  position: relative; }\n\n.flex {\n  display: flex;\n  flex-direction: row; }\n\n.session {\n  position: absolute;\n  height: 12em;\n  border: 1px solid black;\n  background: #0b80d0;\n  color: white !important;\n  cursor: pointer;\n  text-align: center; }\n\n.timeline-header .hour {\n  vertical-align: middle;\n  text-align: center;\n  border: 1px solid #888;\n  background: #545454;\n  height: 3em; }\n\n.flex > div {\n  flex: 1 1 auto;\n  width: 30px;\n  transition: width 0.7s ease-out; }\n\n#sessionScheduleContainer {\n  padding-top: 30px; }\n\n.interval {\n  height: 12em; }\n\n.hour {\n  height: 12em;\n  border: 1px dashed #d1d1d1; }\n\n.session-title {\n  margin-top: 1em; }\n\n.nav-link {\n  background-color: inherit !important;\n  cursor: pointer;\n  color: black; }\n\n.nav-link:focus {\n  outline: none; }\n\n.nav-link.active {\n  border-bottom-color: #f8f9fa; }\n\n.filter-dropdowns {\n  float: right;\n  margin-right: 15px; }\n\n.active-row {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.details-row {\n  padding-left: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zZXNzaW9ucy9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRcXHNlc3Npb25zXFxzZXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLCtCQUErQixFQUFBOztBQUduQztFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUNBQWlDLEVBQUE7O0FBR3JDO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50L3Nlc3Npb25zL3Nlc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tc2NoZWR1bGUtZ3JpZCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA0MnB4IDAgMjFweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnNlc3Npb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGI4MGQwO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aW1lbGluZS1oZWFkZXIgLmhvdXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTQ1NDU0O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbn1cclxuXHJcbi5mbGV4ID4gZGl2IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjdzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jc2Vzc2lvblNjaGVkdWxlQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uaW50ZXJ2YWwge1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG59XHJcblxyXG4uaG91ciB7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2QxZDFkMTtcclxufVxyXG5cclxuLnNlc3Npb24tdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2LWxpbms6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uZmlsdGVyLWRyb3Bkb3ducyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxuLmRldGFpbHMtcm93IHtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/event/sessions/sessions.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/event/sessions/sessions.component.ts ***!
  \*****************************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");









var SessionsComponent = /** @class */ (function () {
    function SessionsComponent(route, eventService, activeEventService, sessionCartService, labelsService) {
        this.route = route;
        this.eventService = eventService;
        this.activeEventService = activeEventService;
        this.sessionCartService = sessionCartService;
        this.labelsService = labelsService;
        this.daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        this.subscriptions = new Array();
    }
    SessionsComponent.prototype.ngOnInit = function () {
        this.subscribeToEventChange();
    };
    SessionsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    SessionsComponent.prototype.addToCart = function (session) {
        this.sessionCartService.addSession(this.readableEventId, session.id);
    };
    SessionsComponent.prototype.removeFromCart = function (session) {
        this.sessionCartService.removeSession(this.readableEventId, session.id);
    };
    /**
     * Registers the user to a session with the old session registration flow.
     * The old session registration flow is only available for paid events for logged-in users.
     */
    SessionsComponent.prototype.registerToSession = function (session) {
        var _this = this;
        this.eventService
            .registerToSession(this.readableEventId, session.id)
            .subscribe(function (registrationCompleted) {
            if (registrationCompleted) {
                _this.getSessions(false);
            }
        }, function (error) { return (_this.error.message = error.message); });
    };
    SessionsComponent.prototype.subscribeToEventChange = function () {
        var _this = this;
        var queryParamSubscription = this.route.queryParamMap.subscribe(function (paramMap) {
            _this.readableEventId = paramMap.get(_event_component__WEBPACK_IMPORTED_MODULE_6__["EventQueryParameterNames"].ReadableEventId);
            _this.getEventData();
        });
        this.subscriptions.push(queryParamSubscription);
    };
    SessionsComponent.prototype.getEventData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.activeEventService.getEvent(this.readableEventId).toPromise()];
                    case 1:
                        _a.event = _b.sent();
                        return [4 /*yield*/, this.getSessions(true)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.setIsSessionCartAllowed().then(function () { return _this.subscribeToSessionCartChange(); })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionsComponent.prototype.canUserRegister = function () {
        if (this.event.setRegistrationEndDate) {
            return new Date(Date.now()) < new Date(this.event.stopRegistrationDate);
        }
        return true;
    };
    SessionsComponent.prototype.getSessions = function (isCachingAllowed) {
        if (isCachingAllowed === void 0) { isCachingAllowed = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.activeEventService.getSessions(this.readableEventId, isCachingAllowed).toPromise()];
                    case 1:
                        _a.sessions = _b.sent();
                        this.sessionsByDay = {};
                        this.dateKeys = [];
                        this.generateSessionByDay();
                        if (this.dateKeys.length > 0) {
                            this.selectedDateKey = this.dateKeys[0];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, console.error(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SessionsComponent.prototype.setIsSessionCartAllowed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isFreeEvent, hasSessions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activeEventService.isFreeEvent(this.readableEventId)];
                    case 1:
                        isFreeEvent = _a.sent();
                        return [4 /*yield*/, this.activeEventService.hasEventSessions(this.readableEventId)];
                    case 2:
                        hasSessions = _a.sent();
                        this.allowSessionRegistrations = this.sessionCartService.isSessionCartEnabledForEvent(this.event, isFreeEvent, hasSessions);
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionsComponent.prototype.subscribeToSessionCartChange = function () {
        var _this = this;
        this.sessionIdsInCart = this.sessionCartService.getSessionCartForEvent(this.readableEventId);
        this.sessionCartService.sessionCartChange.subscribe(function (sessionCart) { return _this.sessionIdsInCart = sessionCart; });
    };
    SessionsComponent.prototype.handleErrorResponse = function (error) {
        this.error = error;
    };
    SessionsComponent.prototype.generateSessionByDay = function () {
        for (var _i = 0, _a = this.sessions; _i < _a.length; _i++) {
            var session = _a[_i];
            var startTime = new Date(session.startTime);
            var key = startTime.getMonth() +
                1 + "/" + startTime.getDate() + "/" + startTime.getFullYear();
            if (!this.sessionsByDay[key]) {
                this.sessionsByDay[key] = [];
                this.dateKeys.push(key);
            }
            this.sessionsByDay[key].push(session);
        }
    };
    SessionsComponent.prototype.dateText = function (dateKey) {
        var date = new Date(dateKey);
        var day = this.daysOfWeek[date.getDay()];
        return this.labelsService.translateLabel(day).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return date.getMonth() + 1 + "/" + date.getDate() + "-" + value;
        }));
    };
    SessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sessions',
            template: __webpack_require__(/*! ./sessions.component.html */ "./src/app/components/event/sessions/sessions.component.html"),
            styles: [__webpack_require__(/*! ./sessions.component.scss */ "./src/app/components/event/sessions/sessions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], Object, src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_8__["ActiveEventService"],
            _session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_7__["SessionCartService"],
            _services_labels_service__WEBPACK_IMPORTED_MODULE_3__["LabelsService"]])
    ], SessionsComponent);
    return SessionsComponent;
}());



/***/ }),

/***/ "./src/app/components/event/sessionslistview/sessionslistview.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/event/sessionslistview/sessionslistview.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"sessions && sessions.length == 0\" [appTranslate]=\"'NoSessionsAssigned'\">\r\n    There are no sessions assigned.\r\n</p>\r\n\r\n<div class=\"container\" *ngIf=\"sessions && sessions.length > 0\">\r\n    <div class=\"sessions-list list-group\">\r\n        <div *ngFor=\"let session of sessions\" (click)=\"expandSession(session)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"\">\r\n                    <div class=\"d-flex w-100 justify-content-between\">\r\n                        <h5 class=\"session-name mb-1\">{{ session.name }}</h5>\r\n                    </div>\r\n                    <div *ngIf=\"showWaitlistBadge(session)\" class=\"h5\">\r\n                        <span class=\"badge badge-primary\" [appTranslate]=\"'Waitlist'\">Waitlist</span>\r\n                    </div>\r\n                    <small class=\"text-muted\">\r\n                        {{ session.startTime | date:'shortTime' }} - {{ session.endTime | date:'shortTime' }}\r\n                    </small>\r\n                    <small class=\"text-muted\">\r\n                        <div>\r\n                            <span *ngIf=\"session.room != null && session.room.name != ''\">\r\n                                {{ session.room.name }} @\r\n                            </span>\r\n                            <span *ngIf=\"session.building != null && session.building.name != ''\">\r\n                                {{ session.building.name }}\r\n                            </span>\r\n                        </div>\r\n                    </small>\r\n                    <small *ngIf=\"showWaitlistBadge(session)\" class=\"text-muted font-weight-light\" [appTranslate]=\"'OnlyWaitlistRegistrationPossibleText'\">New registrants will be added to the waitlist for this session.</small>\r\n                    <div class=\"mb-1\" *ngIf=\"isSessionExpanded(session)\">\r\n                        <p class=\"mb-1\" *ngIf=\"session.sessionSummary != null && session.sessionSummary != ''\">\r\n                            {{ session.sessionSummary }}\r\n                        </p>\r\n                        <p class=\"mb-1\" *ngIf=\"session.detailedDescription != null && session.detailedDescription != ''\">\r\n                            {{ session.detailedDescription }}\r\n                        </p>\r\n                        <div class=\"mb-1\" *ngIf=\"session.speakers != null && session.speakers.length > 0\">\r\n                            <div *ngFor=\"let speaker of session.speakers\" class=\"d-flex flex-row bd-highlight\">\r\n                                <div class=\"speaker-image p-2 bd-highlight\">\r\n                                    <img src=\"{{ imageHelper.getImage(speaker.image, speaker.imageUrl) }}\" defaultSrc=\"{{ imageHelper.getImageUrl(defaultImageUrl) }}\" />\r\n                                </div>\r\n                                <div class=\"p-2 bd-highlight\">\r\n                                    <a [routerLink]=\"['/event', EventDetailSections.Speakers]\" [queryParams]=\"{id: readableEventId, speakerId: speaker.id}\">\r\n                                        {{ speaker.name }}\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"canUserRegister\" class=\"ml-auto align-self-center\">\r\n                    <button *ngIf=\"showFullBadge(session)\" class=\"btn btn-danger d-none d-sm-block\" [disabled]= \"true\">\r\n                            <span class=\"\" [appTranslate]=\"'SessionFullyBooked'\">Fully booked</span>\r\n                    </button>\r\n                    <!-- Add to cart -->\r\n                    <div *ngIf=\"isAddToCartAllowed() && !isSessionRegistered(session) && !showFullBadge(session)\"  (click)=\"$event.stopPropagation(); addToCart(session)\">\r\n                        <button type=\"button\" class=\"btn btn-primary d-none d-sm-block\" id=\"{{ 'btn-add-session-to-cart-' + session.id }}\">\r\n                            <span class=\"\" [appTranslate]=\"'AddSessionToCart'\">Add Session</span>\r\n                        </button>\r\n                        <button class=\"btn btn-link d-block d-sm-none\" type=\"button\" aria-label=\"Add session to cart\">\r\n                            <span class=\"close\" aria-hidden=\"true\">+</span>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Remove from cart -->\r\n                    <button\r\n                        *ngIf=\"isRemoveFromCartAllowed() && isSessionRegistered(session)\"\r\n                        (click)=\"$event.stopPropagation(); removeFromCart(session)\"\r\n                        type=\"button\"\r\n                        class=\"btn btn-link\"\r\n                        aria-label=\"Close\">\r\n                        <span class=\"close\" aria-hidden=\"true\">×</span>\r\n                    </button>\r\n\r\n                    <!-- Register -->\r\n                    <div *ngIf=\"isRegisterAllowed(session)\">\r\n                            <button *ngIf=\"!session.alreadyRegistered\" (click)=\"register(session)\"\r\n                                [appTranslate]=\"'Register'\" type=\"button\" class=\"btn btn-info\">Register</button>\r\n                            <button *ngIf=\"session.alreadyRegistered\"[appTranslate]=\"'AlreadyRegistered'\" disabled=\"disabled\" type=\"button\"\r\n                            type=\"button\" class=\"btn btn-info\">Already registered</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/sessionslistview/sessionslistview.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/event/sessionslistview/sessionslistview.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-height: inherit; }\n\n.sessions-list {\n  max-height: inherit;\n  overflow-y: auto; }\n\n.sessions-list .session-name {\n    word-break: break-word; }\n\n.speaker-image img {\n  border-radius: 50%; }\n\n.speaker-image img {\n  height: 30px; }\n\n.btn-primary:focus {\n  outline: 1px dashed #fff;\n  outline-offset: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zZXNzaW9uc2xpc3R2aWV3L0M6XFxVc2Vyc1xcQUxfS01cXERlc2t0b3BcXEFyYmVpdFxcSUZCXFxyZWxlYXNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxldmVudFxcc2Vzc2lvbnNsaXN0dmlld1xcc2Vzc2lvbnNsaXN0dmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFLUSxzQkFBc0IsRUFBQTs7QUFJOUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zZXNzaW9uc2xpc3R2aWV3L3Nlc3Npb25zbGlzdHZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zZXNzaW9ucy1saXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC5zZXNzaW9uLW5hbWUge1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGVha2VyLWltYWdlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zcGVha2VyLWltYWdlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpmb2N1cyB7IFxyXG4gICAgb3V0bGluZTogMXB4IGRhc2hlZCAjZmZmOyBcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/event/sessionslistview/sessionslistview.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/event/sessionslistview/sessionslistview.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SessionsListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsListViewComponent", function() { return SessionsListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/ImageHelper */ "./src/app/helpers/ImageHelper.ts");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.component */ "./src/app/components/event/event.component.ts");




var SessionsListViewComponent = /** @class */ (function () {
    function SessionsListViewComponent(imageHelper) {
        this.imageHelper = imageHelper;
        this.isEventWaitlisted = false;
        this.canUserRegister = true;
        this.cntActiveAttendeeRegistrations = 0;
        /**
         * This event is fired when the user clicks register.
         * If no observers are available, the register button won't be displayed.
         */
        this.registerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user clicks add to cart.
         * If no observers are available, the add to cart button won't be displayed.
         */
        this.addToCartClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user clicks remove from cart.
         * If no observers are available, the remove from cart button won't be displayed.
         */
        this.removeFromCartClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.EventDetailSections = _event_component__WEBPACK_IMPORTED_MODULE_3__["EventDetailSections"];
        this.defaultImageUrl = "default_contact_image.png";
        this.expandedSessions = [];
    }
    SessionsListViewComponent.prototype.ngOnInit = function () {
    };
    SessionsListViewComponent.prototype.expandSession = function (session) {
        var index = this.expandedSessions.findIndex(function (sessionId) { return sessionId === session.id; });
        if (index !== -1) {
            this.expandedSessions.splice(index, 1);
        }
        else {
            this.expandedSessions.push(session.id);
        }
    };
    SessionsListViewComponent.prototype.isSessionExpanded = function (session) {
        return (this.expandedSessions.find(function (sessionId) { return sessionId === session.id; }) !=
            null);
    };
    SessionsListViewComponent.prototype.isRegisterAllowed = function (session) {
        return session.userEligibleToRegister && this.registerClicked.observers.length > 0;
    };
    SessionsListViewComponent.prototype.register = function (session) {
        this.registerClicked.emit(session);
    };
    SessionsListViewComponent.prototype.isAddToCartAllowed = function () {
        return this.addToCartClicked.observers.length > 0;
    };
    SessionsListViewComponent.prototype.addToCart = function (session) {
        this.addToCartClicked.emit(session);
    };
    SessionsListViewComponent.prototype.isRemoveFromCartAllowed = function (session) {
        return this.removeFromCartClicked.observers.length > 0;
    };
    SessionsListViewComponent.prototype.removeFromCart = function (session) {
        this.removeFromCartClicked.emit(session);
    };
    SessionsListViewComponent.prototype.isSessionRegistered = function (session) {
        return this.sessionIdsInCart.find(function (id) { return id === session.id; });
    };
    SessionsListViewComponent.prototype.showWaitlistBadge = function (session) {
        if (!this.isEventWaitlisted) {
            return false;
        }
        if (!session.isCapacityRestricted) {
            return false;
        }
        return session.registrationCount + this.cntActiveAttendeeRegistrations >= session.maxCapacity;
    };
    SessionsListViewComponent.prototype.showFullBadge = function (session) {
        if (this.isEventWaitlisted) {
            return false;
        }
        if (!session.isCapacityRestricted) {
            return false;
        }
        return session.registrationCount >= session.maxCapacity;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SessionsListViewComponent.prototype, "readableEventId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SessionsListViewComponent.prototype, "sessions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SessionsListViewComponent.prototype, "sessionIdsInCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionsListViewComponent.prototype, "isEventWaitlisted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionsListViewComponent.prototype, "canUserRegister", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionsListViewComponent.prototype, "cntActiveAttendeeRegistrations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionsListViewComponent.prototype, "registerClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionsListViewComponent.prototype, "addToCartClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionsListViewComponent.prototype, "removeFromCartClicked", void 0);
    SessionsListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sessions-list-view",
            template: __webpack_require__(/*! ./sessionslistview.component.html */ "./src/app/components/event/sessionslistview/sessionslistview.component.html"),
            styles: [__webpack_require__(/*! ./sessionslistview.component.scss */ "./src/app/components/event/sessionslistview/sessionslistview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_2__["ImageHelper"]])
    ], SessionsListViewComponent);
    return SessionsListViewComponent;
}());



/***/ }),

/***/ "./src/app/components/event/sessiontracks/sessiontracks.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/event/sessiontracks/sessiontracks.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"cntActiveDataRetrievals > 0\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"cntActiveDataRetrievals === 0\">\r\n    <div *ngIf=\"error\">\r\n        <app-errormessage\r\n            [serverErrorMessage]=\"error.message\"\r\n            [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n\r\n    <div *ngIf=\"sessionTracks && cntActiveDataRetrievals === 0\" class=\"container\">\r\n        <p *ngIf=\"sessionTracks.length === 0\" class=\"text-center\" [appTranslate]=\"'NoSessionTracksEvent'\">No session tracks are associated to this event.</p>\r\n\r\n        <div *ngIf=\"sessionTracks.length > 0\" class=\"filters mr-3 ml-3 mb-4\">\r\n            <div class=\"row\">\r\n                <div class=\"select-date col-sm-6 col-md-4 offset-sm-6 offset-md-8\">\r\n                    <select class=\"custom-select\" (ngModelChange)=\"loadSessionsInTrack($event)\" [(ngModel)]=\"selectedSessionTrackId\">\r\n                        <option *ngFor=\"let track of sessionTracks\" value=\"{{track.id}}\" role=\"tab\">\r\n                            {{ track.name }}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"container\" *ngIf=\"sessionsInSelectedTrack\">\r\n            <app-sessions-list-view [sessions]=\"sessionsInSelectedTrack\" [readableEventId]=\"readableEventId\"></app-sessions-list-view>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/sessiontracks/sessiontracks.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/event/sessiontracks/sessiontracks.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n.btn-link {\n  font-weight: 400;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zZXNzaW9udHJhY2tzL0M6XFxVc2Vyc1xcQUxfS01cXERlc2t0b3BcXEFyYmVpdFxcSUZCXFxyZWxlYXNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxldmVudFxcc2Vzc2lvbnRyYWNrc1xcc2Vzc2lvbnRyYWNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0I7RUFDaEIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50L3Nlc3Npb250cmFja3Mvc2Vzc2lvbnRyYWNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIG1hcmdpbjogNDJweCAwIDIxcHg7XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/event/sessiontracks/sessiontracks.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/event/sessiontracks/sessiontracks.component.ts ***!
  \***************************************************************************/
/*! exports provided: SessiontracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessiontracksComponent", function() { return SessiontracksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event.component */ "./src/app/components/event/event.component.ts");





var SessiontracksComponent = /** @class */ (function () {
    function SessiontracksComponent(route, eventService, tracksService) {
        this.route = route;
        this.eventService = eventService;
        this.tracksService = tracksService;
        this.cntActiveDataRetrievals = 0;
    }
    SessiontracksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (paramMap) {
            _this.readableEventId = paramMap.get(_event_component__WEBPACK_IMPORTED_MODULE_4__["EventQueryParameterNames"].ReadableEventId);
            _this.loadSessionTracks();
        });
    };
    SessiontracksComponent.prototype.loadSessionTracks = function () {
        var _this = this;
        this.cntActiveDataRetrievals += 1;
        this.eventService.getSessionTracks(this.readableEventId).subscribe(function (tracks) {
            _this.sessionTracks = tracks;
            if (tracks.length > 0) {
                _this.selectedSessionTrackId = tracks[0].id;
                _this.loadSessionsInTrack(_this.selectedSessionTrackId);
            }
            _this.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    SessiontracksComponent.prototype.loadSessionsInTrack = function (trackId) {
        var _this = this;
        this.cntActiveDataRetrievals += 1;
        this.tracksService.getSessions(trackId).subscribe(function (sessions) {
            _this.sessionsInSelectedTrack = sessions;
            _this.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    SessiontracksComponent.prototype.handleErrorResponse = function (error) {
        this.cntActiveDataRetrievals -= 1;
        this.error = error;
    };
    SessiontracksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-sessiontracks",
            template: __webpack_require__(/*! ./sessiontracks.component.html */ "./src/app/components/event/sessiontracks/sessiontracks.component.html"),
            styles: [__webpack_require__(/*! ./sessiontracks.component.scss */ "./src/app/components/event/sessiontracks/sessiontracks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["TRACKS_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], Object, Object])
    ], SessiontracksComponent);
    return SessiontracksComponent;
}());



/***/ }),

/***/ "./src/app/components/event/speakers/speakers.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/speakers/speakers.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"isLoading\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"!isLoading\">\r\n    <div *ngIf=\"error\">\r\n        <app-errormessage\r\n            [serverErrorMessage]=\"error.message\"\r\n            [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n    <div *ngIf=\"speakers\">\r\n        <div #speakerDetails class=\"container\">\r\n            <div class=\"speaker-details\" *ngIf=\"speaker\">\r\n                <div class=\"row mt-5\">\r\n                    <div class=\"col-lg-8\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"speaker-static-image mb-3\">\r\n                                    <img src=\"{{ imageHelper.getImage(speaker.image, speaker.imageUrl) }}\" alt=\"{{speaker.name}}\" title=\"{{speaker.name}}\" defaultSrc=\"{{ imageHelper.getImageUrl(defaultImageUrl) }}\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col speaker-contact-information\">\r\n                                <h3 class=\"text-center\">{{ speaker.name }} <span *ngIf=\"speaker.title\">, {{ speaker.title }} </span></h3>\r\n                            </div>\r\n                            <div *ngIf=\"speaker.about != null && speaker.about != ''\" class=\"speaker-about mt-5 mb-5\" id=\"aboutDiv\">\r\n                                {{ speaker.about }}\r\n                            </div>\r\n                            <div name=\"speaker-links\" class=\"col-md-12 text-center mb-3 speaker-links-container\">\r\n                                <span *ngIf=\"speaker.website\" class=\"col-md-1\">\r\n                                    <a href=\"{{ speaker.website }}\" target=\"blank\" class=\"x-hidden-focus\" label=\"Website\">\r\n                                        <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                </span>\r\n                                <span *ngIf=\"speaker.blog\" class=\"col-md-1\">\r\n                                    <a href=\"{{ speaker.blog }}\" target=\"blank\" class=\"x-hidden-focus\">\r\n                                        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                </span>\r\n                                <span *ngIf=\"speaker.linkedin\" class=\"col-md-1\">\r\n                                    <a href=\"{{ speaker.linkedin }}\" target=\"blank\" class=\"x-hidden-focus\">\r\n                                        <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                </span>\r\n                                <span *ngIf=\"speaker.twitter\" class=\"col-md-1\">\r\n                                    <a href=\"{{ speaker.twitter }}\" target=\"blank\" class=\"x-hidden-focus\">\r\n                                        <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\r\n                                    </a>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                        <app-sessions-list-view [sessions]=\"speaker.sessions\" [readableEventId]=\"readableEventId\"></app-sessions-list-view>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n            </div>\r\n        </div>\r\n        <div class=\"container event-speakers-container\">\r\n            <p *ngIf=\"speakers.length == 0\" [appTranslate]=\"'NoSpeakersEvent'\">No speakers are associated to this event.</p>\r\n            <div *ngIf=\"speakers.length > 0\" class=\"row speaker\">\r\n                <div id=\"{{ speaker.id }}\" class=\"col-sm-6 col-md-4 col-lg-3 col-xl-2\" *ngFor=\"let speaker of speakers\">\r\n                    <div class=\"speaker-container\">\r\n                        <div class=\"speaker-image\" (click)=\"selectSpeaker(speaker)\">\r\n                            <img src=\"{{ imageHelper.getImage(speaker.image, speaker.imageUrl) }}\" alt=\"{{speaker.name}}\" title=\"{{speaker.name}}\" defaultSrc=\"{{ imageHelper.getImageUrl(defaultImageUrl) }}\"/>\r\n                        </div>\r\n                        <div class=\"speaker-name\">\r\n                            {{ speaker.name }}\r\n                        </div>\r\n                        <div class=\"speaker-title\">\r\n                            {{ speaker.title }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/speakers/speakers.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/speakers/speakers.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speaker-image {\n  height: 150px;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n.speaker-container {\n  padding-top: 3em;\n  position: relative; }\n\n.speaker-links-container {\n  font-size: 20px; }\n\n.speaker-static-image {\n  text-align: center; }\n\n.speaker-static-image img {\n  border-radius: 50%; }\n\n.speaker-image img {\n  border-radius: 50%; }\n\n.speaker-image:hover {\n  border: 6px solid #2196f3;\n  border-radius: 50%; }\n\n.speaker-image img {\n  height: 100%; }\n\n.speaker-name {\n  margin-top: .6em;\n  cursor: pointer; }\n\n.event-speakers-container {\n  text-align: center; }\n\n.event-speakers-container h3 {\n  padding-bottom: 30px; }\n\n.fa {\n  margin-right: 15px; }\n\n.speaker-contact-information a {\n  color: #303030; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zcGVha2Vycy9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRcXHNwZWFrZXJzXFxzcGVha2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50L3NwZWFrZXJzL3NwZWFrZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWFrZXItaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW46IDQycHggMCAyMXB4O1xyXG59XHJcblxyXG4uc3BlYWtlci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNwZWFrZXItbGlua3MtY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuXHJcbi5zcGVha2VyLXN0YXRpYy1pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGVha2VyLXN0YXRpYy1pbWFnZSBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3BlYWtlci1pbWFnZSBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3BlYWtlci1pbWFnZTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMjE5NmYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3BlYWtlci1pbWFnZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3BlYWtlci1uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IC42ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ldmVudC1zcGVha2Vycy1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXZlbnQtc3BlYWtlcnMtY29udGFpbmVyIGgzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc3BlYWtlci1jb250YWN0LWluZm9ybWF0aW9uIGEge1xyXG4gICAgY29sb3I6ICMzMDMwMzA7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/event/speakers/speakers.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/event/speakers/speakers.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/ImageHelper */ "./src/app/helpers/ImageHelper.ts");
/* harmony import */ var src_app_helpers_ScrollHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/ScrollHelper */ "./src/app/helpers/ScrollHelper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event.component */ "./src/app/components/event/event.component.ts");







var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent(route, imageHelper, eventService) {
        this.route = route;
        this.imageHelper = imageHelper;
        this.eventService = eventService;
        this.isLoading = false;
        this.defaultImageUrl = "default_contact_image.png";
    }
    SpeakersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (paramMap) {
            _this.readableEventId = paramMap.get(_event_component__WEBPACK_IMPORTED_MODULE_6__["EventQueryParameterNames"].ReadableEventId);
            _this.loadSpeakers();
        });
    };
    SpeakersComponent.prototype.selectSpeaker = function (speaker) {
        this.speaker = speaker;
        src_app_helpers_ScrollHelper__WEBPACK_IMPORTED_MODULE_4__["ScrollHelper"].scrollToElement(this.speakerDetailsContainer.nativeElement);
    };
    SpeakersComponent.prototype.selectSpeakerById = function (speakerId) {
        if (speakerId && this.speakers) {
            var speakerToSelect = this.speakers.find(function (speaker) { return speaker.id === speakerId; });
            if (speakerToSelect != null) {
                this.selectSpeaker(speakerToSelect);
            }
        }
    };
    SpeakersComponent.prototype.loadSpeakers = function () {
        var _this = this;
        this.isLoading = true;
        this.eventService.getSpeakers(this.readableEventId).subscribe(function (speakers) {
            _this.speakers = speakers;
            _this.route.queryParamMap.subscribe(function (paramMap) {
                var selectedSpeakerId = paramMap.get(_event_component__WEBPACK_IMPORTED_MODULE_6__["EventQueryParameterNames"].SpeakerId);
                _this.selectSpeakerById(selectedSpeakerId);
            });
            _this.isLoading = false;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    SpeakersComponent.prototype.handleErrorResponse = function (error) {
        this.isLoading = false;
        this.error = error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpeakersComponent.prototype, "readableEventId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("speakerDetails"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], SpeakersComponent.prototype, "speakerDetailsContainer", void 0);
    SpeakersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-speakers",
            template: __webpack_require__(/*! ./speakers.component.html */ "./src/app/components/event/speakers/speakers.component.html"),
            styles: [__webpack_require__(/*! ./speakers.component.scss */ "./src/app/components/event/speakers/speakers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"], Object])
    ], SpeakersComponent);
    return SpeakersComponent;
}());



/***/ }),

/***/ "./src/app/components/event/sponsors/sponsors.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/sponsors/sponsors.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"renderOnZeroSponsorships || (sponsorships != null && sponsorships.length > 0)\" class=\"event-sponsors-container\">\r\n    <div class=\"page-header\">\r\n        <h3 [appTranslate]=\"'BroughtToYouBy'\">Brought to you by</h3>\r\n    </div>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"isLoading\">\r\n        <app-spinner></app-spinner>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isLoading\">\r\n        <div *ngIf=\"error\">\r\n            <app-errormessage\r\n                [serverErrorMessage]=\"error.message\"\r\n                [errorMessageTranslationKey]=\"error.localizationKey\">\r\n            </app-errormessage>\r\n        </div>\r\n\r\n        <div *ngIf=\"sponsorships\">\r\n            <p *ngIf=\"sponsorships.length === 0\" [appTranslate]=\"'NoSponsorshipsEvent'\">No sponsorships are associated to this event.</p>\r\n\r\n            <div *ngIf=\"sponsorships.length > 0\" class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-4 col-lg-2\" *ngFor=\"let sponsor of sponsorships\">\r\n                        <div class=\"sponsor-image-container\">\r\n                            <div class=\"sponsor-image\">\r\n                                <img src=\"{{ sponsor.logoSrc }}\" alt=\"{{sponsor.sponsorName}}\" title=\"{{sponsor.sponsorName}}\" defaultSrc=\"{{ imageHelper.getImageUrl(defaultImageUrl) }}\" />\r\n                            </div>\r\n                            <div *ngIf=\"sponsor.sponsorName !== null\" class=\"sponsor-name\">{{ sponsor.sponsorName }}</div>\r\n                            <div *ngIf=\"sponsor.sponsorName === null\" class=\"sponsor-name\" [appTranslate]=\"'SponsorName'\">Sponsor\r\n                                Name</div>\r\n                            <div class=\"sponsor-title\">\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event/sponsors/sponsors.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/event/sponsors/sponsors.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-sponsors-container {\n  background: #ccc;\n  padding-bottom: 60px;\n  color: black;\n  width: 100%;\n  text-align: center; }\n\n.event-sponsors-container h3 {\n  padding-bottom: 30px; }\n\n.page-header {\n  padding-top: 30px;\n  font-size: 180%;\n  text-align: center; }\n\n.sponsor-image {\n  height: 100px;\n  width: 100px;\n  margin: auto; }\n\n.sponsor-image-container {\n  position: relative; }\n\n.sponsor-image-container .sponsor-image img {\n  border-radius: 50%; }\n\n.sponsor-image img {\n  height: 100%; }\n\n.sponsor-name {\n  margin-top: .6em; }\n\n.sponsor-title {\n  margin-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9zcG9uc29ycy9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRcXHNwb25zb3JzXFxzcG9uc29ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtc3BvbnNvcnMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXZlbnQtc3BvbnNvcnMtY29udGFpbmVyIGgzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcG9uc29yLWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zcG9uc29yLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zcG9uc29yLWltYWdlLWNvbnRhaW5lciAuc3BvbnNvci1pbWFnZSBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3BvbnNvci1pbWFnZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3BvbnNvci1uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IC42ZW07XHJcbn1cclxuXHJcbi5zcG9uc29yLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/event/sponsors/sponsors.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/event/sponsors/sponsors.component.ts ***!
  \*****************************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/ImageHelper */ "./src/app/helpers/ImageHelper.ts");




var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(imageHelper, eventService, sponsorsService) {
        this.imageHelper = imageHelper;
        this.eventService = eventService;
        this.sponsorsService = sponsorsService;
        this.renderOnZeroSponsorships = true;
        this.isLoading = false;
        this.defaultImageUrl = 'default-sponsor-logo.png';
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        this.loadSponsors();
    };
    SponsorsComponent.prototype.loadSponsors = function () {
        var _this = this;
        this.isLoading = true;
        this.eventService.getSponsors(this.readableEventId).subscribe(function (sponsorships) {
            _this.sponsorships = sponsorships;
            _this.setSponsorLogosSrc();
            _this.isLoading = false;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    SponsorsComponent.prototype.setSponsorLogosSrc = function () {
        var _this = this;
        this.sponsorships.forEach(function (sponsor) {
            sponsor.logoSrc = _this.sponsorsService.getLogoSrc(sponsor);
        });
    };
    SponsorsComponent.prototype.handleErrorResponse = function (error) {
        this.isLoading = false;
        this.error = error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SponsorsComponent.prototype, "readableEventId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SponsorsComponent.prototype, "renderOnZeroSponsorships", void 0);
    SponsorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__(/*! ./sponsors.component.html */ "./src/app/components/event/sponsors/sponsors.component.html"),
            styles: [__webpack_require__(/*! ./sponsors.component.scss */ "./src/app/components/event/sponsors/sponsors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["SPONSORSHIPS_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_helpers_ImageHelper__WEBPACK_IMPORTED_MODULE_3__["ImageHelper"], Object, Object])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/attendee/attendee.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/eventregistration/attendee/attendee.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Read only mode -->\r\n<div *ngIf=\"!editing\" class=\"list-group-item list-group-item-action p-3\">\r\n    <div class=\"row justify-content-around\">\r\n        <div class=\"col-9\">\r\n            <h5>\r\n                <span class=\"mr-2\">\r\n                    <span *ngIf=\"isJapanese\">{{ attendee.lastName }} </span>\r\n                    <span>{{ attendee.firstName }} </span>\r\n                    <span *ngIf=\"!isJapanese\">{{ attendee.lastName }}</span>\r\n                </span>\r\n            </h5>\r\n            <div class=\"h6\" *ngIf=\"getCntOfWaitlistedSessionsForAttendee() > 0\">\r\n                <span class=\"badge badge-primary text\">\r\n                    <span>{{ getCntOfWaitlistedSessionsForAttendee() }} </span>\r\n                    <span [appTranslate]=\"'WaitlistedSessions'\">waitlisted session(s)</span>\r\n                </span>\r\n            </div>\r\n\r\n            <p *ngIf=\"attendee.passId\">{{ passDisplayString(attendee.passId) }}</p>\r\n            <small class=\"mb-0\">{{ attendee.email }}</small>\r\n            <p *ngIf=\"attendee.responses != null && attendee.responses.length > 0\">\r\n                <small class=\"mb-0\" [appTranslate]=\"'AdditionalInformationAvailable'\">Additional information available</small>\r\n            </p>\r\n            <p *ngIf=\"getCntOfWaitlistedSessionsForAttendee() > 0\" class=\"mb-1\">\r\n                <small class=\"text-muted font-weight-light\" [appTranslate]=\"'AttendeeHasWaitlistRegistrationsInfo'\">This registrant is on the waitlist for one or more sessions.</small>\r\n            </p>\r\n            <p *ngIf=\"enableAutoRegistrationSelection && attendee.autoRegister\" class=\"mb-1\">\r\n                <small class=\"text-muted font-weight-light\" [appTranslate]=\"'AttendeeAutoRegistrationInfo'\">This attendee will be automatically registered as soon as there is capacity available.</small>\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"col-2 p-0 align-self-center\">\r\n            <button class=\"control-btn\" (click)=\"switchToEdit(attendee)\" title=\"{{ translateLabel('EditAttendee', 'Edit attendee') | async }} {{attendee.firstName}} {{attendee.lastName}}\">\r\n                <span class=\"fa fa-edit\"></span>\r\n            </button>\r\n            <button class=\"control-btn\" (click)=\"removeAttendee()\" *ngIf=\"!placeholder\" title=\"{{ translateLabel('RemoveAttendee', 'Remove attendee') | async }} {{attendee.firstName}} {{attendee.lastName}}\">\r\n                <span class=\"fa fa-trash icon-padding\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Editing mode -->\r\n<form *ngIf=\"editing\" #attendeeForm=\"ngForm\" (ngSubmit)=\"confirmEdit(attendeeForm)\" novalidate>\r\n    <div class=\"form-row\">\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isJapanese\">\r\n            <label class=\"input-label\" for=\"attendeesLastName\" [appTranslate]=\"'LastName'\"> {{ translateLabel('LastName', 'Last Name') | async }} </label>\r\n            <label class=\"input-label\">*</label>\r\n            <input id=\"attendeesLastName\" type=\"text\" required class=\"form-control\" aria-label=\"Attendee's last name\" name=\"lastName\" placeholder=\"{{ translateLabel('EnterLastName', 'Enter your last name') | async }}\" [ngModel]=\"attendee.lastName\" #lastName=\"ngModel\"/>\r\n            <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"lastName.errors.required\">\r\n                    <span [appTranslate]=\"'LastNameRequired'\" role=\"alert\">Last Name is required.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n            <label class=\"input-label\" for=\"attendeesFirstName\" [appTranslate]=\"'FirstName'\"> {{ translateLabel('FirstName', 'First Name') | async }} </label>\r\n            <label class=\"input-label\">*</label>\r\n            <input id=\"attendeesFirstName\" #firstName type=\"text\" required class=\"form-control\" aria-label=\"Attendee's first name\" name=\"firstName\" placeholder=\"{{ translateLabel('EnterFirstName', 'Enter your first name') | async }}\" [ngModel]=\"attendee.firstName\" #name=\"ngModel\"/>\r\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"name.errors.required\">\r\n                    <span [appTranslate]=\"'FirstNameRequired'\" role=\"alert\">First Name is required.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"!isJapanese\">\r\n            <label class=\"input-label\" for=\"attendeesLastName\" [appTranslate]=\"'LastName'\"> {{ translateLabel('LastName', 'Last Name') | async }} </label>\r\n            <label class=\"input-label\">*</label>\r\n            <input id=\"attendeesLastName\" type=\"text\" required class=\"form-control\" aria-label=\"Attendee's last name\" name=\"lastName\" placeholder=\"{{ translateLabel('EnterLastName', 'Enter your last name') | async }}\" [ngModel]=\"attendee.lastName\" #lastName=\"ngModel\"/>\r\n            <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"lastName.errors.required\">\r\n                    <span [appTranslate]=\"'LastNameRequired'\" role=\"alert\">Last Name is required.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label class=\"input-label\" for=\"attendeesEmail\" [appTranslate]=\"'EmailAddress'\"> {{ translateLabel('EmailAddress', 'Email address') | async }} </label>\r\n        <label class=\"input-label\">*</label>\r\n        <input id=\"attendeesEmail\" type=\"email\" required email class=\"form-control\" aria-label=\"Attendee's email address\" name=\"email\" placeholder=\"{{ translateLabel('EnterEmailAddress', 'Enter your email address') | async }}\" [ngModel]=\"attendee.email\" #email=\"ngModel\"/>\r\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"email.errors.email\">\r\n                <span [appTranslate]=\"'EmailInvalid'\" role=\"alert\">Please enter a valid email address.</span>\r\n            </div>\r\n            <div *ngIf=\"email.errors.required\">\r\n                <span [appTranslate]=\"'EmailRequired'\" role=\"alert\">Email is required.</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"passes && passes.length > 0 && !waitlisted\">\r\n        <select name=\"passId\" required class=\"form-control\" [ngModel]=\"attendee.passId\">\r\n            <option disabled value=\"\" [appTranslate]=\"'SelectAPass'\">Select a pass</option>\r\n            <option *ngFor=\"let pass of passes\" [value]=\"pass.passId\" [attr.disabled]=\"pass.numberOfPassesLeft > pass.passesUsed || waitlisted ? null : ''\">\r\n                {{ pass.passName + ' (' + pass.currencySymbol + pass.price + ')' }}\r\n                <div *ngIf=\"pass.numberOfPassesLeft == 0\"> - <span [appTranslate]=\"'SoldOut'\">Sold out</span></div>\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <div *ngIf=\"enableAutoRegistrationSelection\">\r\n        <div class=\"custom-control custom-radio\">\r\n            <input\r\n                type=\"radio\"\r\n                id=\"autoRegisterEnabledRadioInline\"\r\n                name=\"isAutoRegisterEnabled\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"attendee.autoRegister\"\r\n                [value]=\"true\"\r\n                (change)=\"attendee.autoRegister = true\">\r\n            <label class=\"custom-control-label\" for=\"autoRegisterEnabledRadioInline\" [appTranslate]=\"'EnableAutoRegisterRadioButtonText'\">Auto-register and notify when space becomes available</label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio\">\r\n            <input\r\n                type=\"radio\"\r\n                id=\"autoRegisterDisabledRadioInline\"\r\n                name=\"isAutoRegisterEnabled\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"attendee.autoRegister\"\r\n                [value]=\"false\"\r\n                (change)=\"attendee.autoRegister = false\">\r\n            <label class=\"custom-control-label\" for=\"autoRegisterDisabledRadioInline\" [appTranslate]=\"'DisableAutoRegisterRadioButtonText'\">Notify, but don't auto-register, when space becomes available</label>\r\n        </div>\r\n    </div>\r\n\r\n    <app-custom-registration-fields #customRegistrationFieldsComponent [customRegistrationFields]=\"customRegistrationFieldsCopy\"\r\n        [existingResponses]=\"attendee.responses\">\r\n    </app-custom-registration-fields>\r\n\r\n    <div class=\"controls-cell text-center\">\r\n        <button *ngIf=\"showAddAnotherAttendee\" id=\"btn-add-another-attendee\" type=\"submit\"\r\n                [disabled]=\"!(attendeeForm.valid && customRegistrationFieldsComponent.areRegistrationFieldsValid())\"\r\n                class=\"btn btn-outline-secondary m-2\"\r\n                (click)=\"changeFocus()\"\r\n                title=\"{{ placeholder ? (translateLabel('AddAnotherAttendee', 'Add another attendee') | async) : (translateLabel('SaveChanges', 'Save changes') | async) }}\">\r\n            <span *ngIf=\"placeholder\" [appTranslate]=\"'AddAnotherAttendee'\">Add another attendee</span>\r\n            <span *ngIf=\"!placeholder\" [appTranslate]=\"'SaveChanges'\">Save changes</span>\r\n        </button>\r\n        <button *ngIf=\"!placeholder\"\r\n                class=\"control-btn m-2\"\r\n                (click)=\"cancelEdit()\"\r\n                title=\"{{ translateLabel('DiscardChanges', 'Discard changes') | async }}\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" [appTranslate]=\"'DiscardChanges'\">Discard changes</button>\r\n        </button>\r\n    </div>\r\n\r\n    <app-session-selection [readableEventId]=\"readableEventId\"></app-session-selection>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/attendee/attendee.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/eventregistration/attendee/attendee.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #4396D3;\n  background-color: #4396D3; }\n\n.control-btn {\n  background: none;\n  border: none;\n  padding: 0;\n  color: #008CBA;\n  cursor: pointer; }\n\n.control-btn:disabled {\n  color: #555555;\n  cursor: not-allowed; }\n\ninput.ng-invalid.ng-touched {\n  border-color: red; }\n\nselect.ng-invalid.ng-touched {\n  border-color: red; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\n.disabled-switch input:checked + .slider {\n  background-color: #9dc9ec; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(26px); }\n\n.icon-padding {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.selected-sessions {\n  max-height: 320px; }\n\n.custom-control-label-input {\n  padding: 4px; }\n\n.input-label {\n  font-weight: 500; }\n\n.btn-primary:focus {\n  outline: 1px dashed #fff;\n  outline-offset: 2px; }\n\n.btn-outline-secondary:focus {\n  outline: 1px dashed #fff;\n  outline-offset: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9hdHRlbmRlZS9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRyZWdpc3RyYXRpb25cXGF0dGVuZGVlXFxhdHRlbmRlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBR0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx3QkFBd0I7RUFDeEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9hdHRlbmRlZS9hdHRlbmRlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICM0Mzk2RDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5NkQzO1xyXG59XHJcblxyXG4uY29udHJvbC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzAwOENCQTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2wtYnRuOmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG4uZGlzYWJsZWQtc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGM5ZWM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbi5pY29uLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLXNlc3Npb25zIHtcclxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwtaW5wdXQge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHsgXHJcbiAgICBvdXRsaW5lOiAxcHggZGFzaGVkICNmZmY7IFxyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDsgXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IGRhc2hlZCAjZmZmOyBcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/eventregistration/attendee/attendee.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/eventregistration/attendee/attendee.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AttendeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeeComponent", function() { return AttendeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var _custom_registration_fields_custom_registration_fields_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-registration-fields/custom-registration-fields.component */ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.ts");





var AttendeeComponent = /** @class */ (function () {
    function AttendeeComponent(labelsService) {
        this.labelsService = labelsService;
        this.editingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); /* event emitted when the attendee data is updated */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); /* event emitted when the attendee data is updated */
        // tslint:disable-next-line:no-output-on-prefix
        this.onDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); /* event fired when the attendee is deleted */
        // tslint:disable-next-line:no-output-on-prefix
        this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); /* event fired when the attendee is added */
        /**
         * This event is triggered whenever the new attendee form is validated.
         */
        this.onValidationStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dummyAttendee = {
            firstName: '',
            lastName: '',
            email: '',
            passId: '',
            waitlisted: this.waitlisted,
            autoRegister: false,
            responses: [],
            attendeeSessions: []
        };
    }
    Object.defineProperty(AttendeeComponent.prototype, "editing", {
        get: function () {
            return this._isEditing;
        },
        /**
         * whether the component is in editing mode or read only mode
         */
        set: function (isEditing) {
            this._isEditing = isEditing;
            this.editingChange.emit(this._isEditing);
        },
        enumerable: true,
        configurable: true
    });
    AttendeeComponent.prototype.ngOnInit = function () {
        if (!this.attendee) {
            this.setDummyAttendee();
        }
        this.customRegistrationFieldsCopy = this.createDeepCopyOfCustomRegistrationFields();
    };
    AttendeeComponent.prototype.ngAfterViewInit = function () {
        this.subscribeToAttendeeFormChanges();
    };
    AttendeeComponent.prototype.confirmEdit = function () {
        var attendeeBefore = this.deepCloneAttendee(this.attendee);
        this.attendee = {
            firstName: this.attendeeForm.value.firstName,
            lastName: this.attendeeForm.value.lastName,
            email: this.attendeeForm.value.email,
            passId: this.attendeeForm.value.passId || '',
            waitlisted: this.waitlisted,
            autoRegister: this.attendeeForm.value.isAutoRegisterEnabled || false,
            responses: this.customRegistrationFieldsComponent.getCustomRegistrationFieldsResponses(),
            attendeeSessions: []
        };
        if (!this.placeholder && this.editing) {
            // existing attendee was updated
            this.editing = false;
            if (attendeeBefore.passId !== this.attendee.passId) {
                this.incrementPassesUsed(this.attendee.passId);
                this.decrementPassesUsed(attendeeBefore.passId);
            }
            this.onSaved.emit([attendeeBefore, this.attendee]);
        }
        else if (!this.placeholder && this.deleting) {
            // existing attendee was deleted
            this.deleting = false;
        }
        else {
            // attendee added
            if (this.attendee.passId) {
                this.incrementPassesUsed(this.attendee.passId);
            }
            this.onAdded.emit(this.attendee);
            this.resetNewAttendeeForms();
        }
    };
    /**
     * Checks if all forms (attendee form + custom registrations form) are valid.
     */
    AttendeeComponent.prototype.areFormsValid = function () {
        var attendeeFormValid = this.attendeeForm && this.attendeeForm.valid;
        var customRegistrationFieldsFormValid = this.customRegistrationFieldsComponent &&
            this.customRegistrationFieldsComponent.areRegistrationFieldsValid();
        if (this.customRegistrationFields == null || this.customRegistrationFields.length === 0) {
            return attendeeFormValid;
        }
        else {
            return attendeeFormValid && customRegistrationFieldsFormValid;
        }
    };
    AttendeeComponent.prototype.translateLabel = function (translationKey, defaultValue) {
        return this.labelsService.translateLabel(translationKey, defaultValue);
    };
    AttendeeComponent.prototype.getCntOfWaitlistedSessionsForAttendee = function () {
        if (this.attendee == null || this.attendee.attendeeSessions == null || this.attendee.attendeeSessions.length === 0) {
            return 0;
        }
        return this.attendee.attendeeSessions.filter(function (as) { return as.waitlisted === true; }).length;
    };
    AttendeeComponent.prototype.resetNewAttendeeForms = function () {
        this.setDummyAttendee();
        this.attendeeForm.reset();
        this.customRegistrationFieldsComponent.resetForm();
        // angular sets the values to null on reset. we  we need to manually select the placeholder value for the pass dropdown
        if (this.attendeeForm.controls.passId) {
            this.attendeeForm.controls.passId.setValue('');
        }
    };
    AttendeeComponent.prototype.subscribeToAttendeeFormChanges = function () {
        var _this = this;
        if (this.attendeeForm) {
            this.attendeeForm.statusChanges.subscribe(function (result) {
                _this.onValidationStatusChanged.emit(result);
            });
        }
    };
    AttendeeComponent.prototype.cancelEdit = function () {
        this.editing = false;
        this.canceledEditing();
    };
    AttendeeComponent.prototype.switchToEdit = function (attendee) {
        this.editing = true;
    };
    AttendeeComponent.prototype.removeAttendee = function () {
        this.deleting = true;
        if (this.attendee.passId) {
            this.decrementPassesUsed(this.attendee.passId);
        }
        this.onDeleted.emit(this.attendee);
    };
    AttendeeComponent.prototype.setDummyAttendee = function () {
        this.attendee = this.deepCloneAttendee(this.dummyAttendee);
    };
    AttendeeComponent.prototype.passDisplayString = function (passId) {
        var pass = this.pass(passId);
        return pass.passName + " (" + pass.currencySymbol + pass.price + ")";
    };
    AttendeeComponent.prototype.pass = function (passId) {
        var idx = this.passes.findIndex(function (p) { return p.passId === passId; });
        return this.passes[idx];
    };
    AttendeeComponent.prototype.incrementPassesUsed = function (passId) {
        this.pass(passId).passesUsed++;
    };
    AttendeeComponent.prototype.decrementPassesUsed = function (passId) {
        this.pass(passId).passesUsed--;
    };
    AttendeeComponent.prototype.deepCloneAttendee = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    AttendeeComponent.prototype.createDeepCopyOfCustomRegistrationFields = function () {
        var customFieldsCopy = [];
        if (this.customRegistrationFields == null) {
            return [];
        }
        for (var _i = 0, _a = this.customRegistrationFields; _i < _a.length; _i++) {
            var customRegistrationField = _a[_i];
            customFieldsCopy.push(customRegistrationField.createDeepCopy());
        }
        return customFieldsCopy;
    };
    AttendeeComponent.prototype.changeFocus = function () {
        this.firstName.nativeElement.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AttendeeComponent.prototype, "readableEventId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendeeComponent.prototype, "attendee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AttendeeComponent.prototype, "passes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], AttendeeComponent.prototype, "editing", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "deleting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "waitlisted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "isJapanese", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "autoregisterWaitlistItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "enableAutoRegistrationSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AttendeeComponent.prototype, "customRegistrationFields", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], AttendeeComponent.prototype, "canceledEditing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "showAddAnotherAttendee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AttendeeComponent.prototype, "hasWaitlistedSessions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendeeComponent.prototype, "editingChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendeeComponent.prototype, "onSaved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendeeComponent.prototype, "onDeleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendeeComponent.prototype, "onAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AttendeeComponent.prototype, "onValidationStatusChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firstName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AttendeeComponent.prototype, "firstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attendeeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AttendeeComponent.prototype, "attendeeForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customRegistrationFieldsComponent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _custom_registration_fields_custom_registration_fields_component__WEBPACK_IMPORTED_MODULE_4__["CustomRegistrationFieldsComponent"])
    ], AttendeeComponent.prototype, "customRegistrationFieldsComponent", void 0);
    AttendeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: '[event-attendee]',
            template: __webpack_require__(/*! ./attendee.component.html */ "./src/app/components/eventregistration/attendee/attendee.component.html"),
            styles: [__webpack_require__(/*! ./attendee.component.scss */ "./src/app/components/eventregistration/attendee/attendee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_labels_service__WEBPACK_IMPORTED_MODULE_3__["LabelsService"]])
    ], AttendeeComponent);
    return AttendeeComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required::after {\r\n    content: ' *';\r\n    color: red;\r\n}\r\n\r\n.form-check label {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9hdHRlbmRlZS9jdXN0b20tcmVnaXN0cmF0aW9uLWZpZWxkcy9jdXN0b20tcmVnaXN0cmF0aW9uLWZpZWxkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnRyZWdpc3RyYXRpb24vYXR0ZW5kZWUvY3VzdG9tLXJlZ2lzdHJhdGlvbi1maWVsZHMvY3VzdG9tLXJlZ2lzdHJhdGlvbi1maWVsZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyAqJztcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrIGxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Custom registration fields -->\r\n<form #customRegistrationFieldsForm=\"ngForm\" novalidate>\r\n    <div class=\"custom-registration-fields\">\r\n        <div class=\"row\">\r\n            <div class=\"col mb-2\">\r\n                <div class=\"\" *ngIf=\"customRegistrationFields && customRegistrationFields.length > 0\">\r\n                    <div *ngFor=\"let customRegistrationField of customRegistrationFields\">\r\n                        <!-- Simple Text -->\r\n                        <div *ngIf=\"customRegistrationField.type == CustomRegistrationFieldTypes.SimpleText\" class=\"field-container\">\r\n                            <div class=\"form-group\">\r\n                                <label [class]=\"customRegistrationField.isRequired ? 'required' : ''\" [for]=\"customRegistrationField.customRegistrationFieldId\">{{ customRegistrationField.text }}</label>\r\n                                <input type=\"text\"\r\n                                       [(ngModel)]=\"customRegistrationField.value\"\r\n                                       [name]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                       [id]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                       [required]=\"customRegistrationField.isRequired\"\r\n                                       class=\"form-control\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Boolean -->\r\n                        <div class=\"field-container\" *ngIf=\"customRegistrationField.type ==  CustomRegistrationFieldTypes.Boolean\">\r\n                            <label [class]=\"customRegistrationField.isRequired ? 'required' : ''\">{{ customRegistrationField.text }}</label>\r\n                               <div class=\"form-check\">\r\n                                  <div *ngIf=\"!customRegistrationField.isRequired\">\r\n                                    <input type=\"radio\"\r\n                                            [(ngModel)]=\"customRegistrationField.value\"\r\n                                            [id]=\"customRegistrationField.customRegistrationFieldId + '-nochoice'\"\r\n                                            [name]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                            ng-value=\"NoChoice\" >\r\n                                    <label [appTranslate]=\"'NoChoice'\" [for]=\"customRegistrationField.customRegistrationFieldId + '-nochoice'\">No Choice</label>\r\n                                  </div>\r\n                                   <div>\r\n                                    <input type=\"radio\"\r\n                                           [(ngModel)]=\"customRegistrationField.value\"\r\n                                           [id]=\"customRegistrationField.customRegistrationFieldId + '-yes' \"\r\n                                           [name]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                           value=\"Yes\">\r\n                                    <label [appTranslate]=\"'Yes'\" [for]=\"customRegistrationField.customRegistrationFieldId + '-yes'\">Yes</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input type=\"radio\"\r\n                                           [(ngModel)]=\"customRegistrationField.value\"\r\n                                           [id]=\"customRegistrationField.customRegistrationFieldId + '-no' \"\r\n                                           [name]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                           value=\"No\">\r\n                                    <label [appTranslate]=\"'No'\" [for]=\"customRegistrationField.customRegistrationFieldId + '-no'\">No</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Multiple Choice -->\r\n                        <div class=\"field-container\" *ngIf=\"customRegistrationField.type == CustomRegistrationFieldTypes.MultipleChoice\">\r\n                            <div class=\"form-group\">\r\n                                <label [class]=\"customRegistrationField.isRequired ? 'required' : ''\">{{ customRegistrationField.text }}</label>\r\n                                <select multiple\r\n                                        [(ngModel)]=\"customRegistrationField.value\"\r\n                                        [id]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                        [name]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                        [required]=\"customRegistrationField.isRequired\"\r\n                                        class=\"form-control\">\r\n                                    <option *ngFor=\"let choice of customRegistrationField.choicesArray\" [ngValue]=\"choice\">\r\n                                        {{ choice }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Single Choice -->\r\n                        <div class=\"field-container\" *ngIf=\"customRegistrationField.type == CustomRegistrationFieldTypes.SingleChoice\">\r\n                            <div class=\"form-group\">\r\n                                <label [class]=\"customRegistrationField.isRequired ? 'required' : ''\" [for]=\"customRegistrationField.customRegistrationFieldId\">{{ customRegistrationField.text }}</label>\r\n                                <select [(ngModel)]=\"customRegistrationField.value\"\r\n                                        [id]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                        [name]=\"customRegistrationField.customRegistrationFieldId\"\r\n                                        [required]=\"customRegistrationField.isRequired\"\r\n                                        class=\"form-control\">\r\n                                    <option *ngFor=\"let choice of customRegistrationField.choicesArray\" [ngValue]=\"choice\">\r\n                                        {{ choice }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomRegistrationFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRegistrationFieldsComponent", function() { return CustomRegistrationFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_CustomRegistrationField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/CustomRegistrationField */ "./src/app/models/CustomRegistrationField.ts");




var CustomRegistrationFieldsComponent = /** @class */ (function () {
    function CustomRegistrationFieldsComponent() {
        this.CustomRegistrationFieldTypes = _models_CustomRegistrationField__WEBPACK_IMPORTED_MODULE_3__["Types"];
    }
    CustomRegistrationFieldsComponent.prototype.ngOnInit = function () {
        this.processExistingResponses();
    };
    /**
     * Checks if the custom registration fields are valid (and all required fields are filled).
     */
    CustomRegistrationFieldsComponent.prototype.areRegistrationFieldsValid = function () {
        return this.customRegistrationFieldsForm.valid;
    };
    /**
     * Resets the custom registration fields.
     */
    CustomRegistrationFieldsComponent.prototype.resetForm = function () {
        this.customRegistrationFieldsForm.reset();
    };
    /**
     * Returns the valid, non-empty responses of the custom registration fields.
     * The value of the responses is represented as string.
     */
    CustomRegistrationFieldsComponent.prototype.getCustomRegistrationFieldsResponses = function () {
        var responses = [];
        for (var _i = 0, _a = this.customRegistrationFields; _i < _a.length; _i++) {
            var customField = _a[_i];
            var response = customField.createResponse();
            if (response) {
                responses.push(response);
            }
        }
        return responses;
    };
    CustomRegistrationFieldsComponent.prototype.processExistingResponses = function () {
        var _loop_1 = function (response) {
            var relatedCustomField = this_1.customRegistrationFields.find(function (customRegistrationField) { return customRegistrationField.customRegistrationFieldId === response.id; });
            relatedCustomField.valueAsString = response.value;
        };
        var this_1 = this;
        for (var _i = 0, _a = this.existingResponses; _i < _a.length; _i++) {
            var response = _a[_i];
            _loop_1(response);
        }
    };
    CustomRegistrationFieldsComponent.prototype.splitResponses = function (str) {
        return str.split(', ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomRegistrationFieldsComponent.prototype, "customRegistrationFields", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomRegistrationFieldsComponent.prototype, "existingResponses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customRegistrationFieldsForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CustomRegistrationFieldsComponent.prototype, "customRegistrationFieldsForm", void 0);
    CustomRegistrationFieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-registration-fields',
            template: __webpack_require__(/*! ./custom-registration-fields.component.html */ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.html"),
            styles: [__webpack_require__(/*! ./custom-registration-fields.component.css */ "./src/app/components/eventregistration/attendee/custom-registration-fields/custom-registration-fields.component.css")]
        })
    ], CustomRegistrationFieldsComponent);
    return CustomRegistrationFieldsComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/captcha/captcha.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/eventregistration/captcha/captcha.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='ms_captcha_holder' align='center'></div>\r\n<div id='ms_captcha_scriptholder' style='display: inline'>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/captcha/captcha.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/eventregistration/captcha/captcha.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.captcha {\n  text-align: center; }\n\n.captcha input {\n  margin-left: 2rem; }\n\n#ms_captcha_holder {\n  padding-top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9jYXB0Y2hhL0M6XFxVc2Vyc1xcQUxfS01cXERlc2t0b3BcXEFyYmVpdFxcSUZCXFxyZWxlYXNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxldmVudHJlZ2lzdHJhdGlvblxcY2FwdGNoYVxcY2FwdGNoYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9jYXB0Y2hhL2NhcHRjaGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2FwdGNoYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXB0Y2hhIGlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4jbXNfY2FwdGNoYV9ob2xkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/eventregistration/captcha/captcha.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/eventregistration/captcha/captcha.component.ts ***!
  \***************************************************************************/
/*! exports provided: CaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaComponent", function() { return CaptchaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CaptchaComponent = /** @class */ (function () {
    function CaptchaComponent(eventService) {
        this.eventService = eventService;
    }
    CaptchaComponent.prototype.ngOnInit = function () {
        window.top.WLSPHIP0 = {
            error: 0,
            left: '0',
            showInstruction: false,
            getInstruction: function () { },
            showMenu: true,
            getMenu: function () { },
            showError: true,
            errorMessage: '',
            instructionsInside: true,
            getError: function () { },
            inputWidth: 245,
            done: false,
            holder: 'ms_captcha_holder',
            scriptHolder: 'ms_captcha_scriptholder',
            count: 0,
            type: 'visual',
            market: 'en-us',
            getSolution: function () { },
            reloadHIP: function () { },
            switchHIP: function () { },
            clientValidation: function () { },
            setError: function () { },
            setFocus: function () { },
            postLoad: function () { },
            verify: function (theCallback, param) { },
            verifyCallback: function (solution, token, param) {
                window.top.WLSPHIP0.clientValidation();
                if (window.top.WLSPHIP0.error !== 0) {
                    return;
                }
                else {
                    window.top.HipObject['Solution'] = solution;
                    window.top.HipObject['Token'] = token;
                    window.top.HipObject['Type'] = window.top.WLSPHIP0.type;
                    window.top.HipObject['FlowId'] = window.top.flowid;
                    return;
                }
            }
        };
        window.top.HipObject = {};
        this.loadCaptcha();
    };
    CaptchaComponent.prototype.loadCaptcha = function () {
        var _this = this;
        this.eventService.getCaptcha(this.readableEventId).subscribe(function (captcha) {
            _this.captcha = captcha;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = _this.captcha.HipUrl;
            var element = document.getElementById('ms_captcha_scriptholder');
            if (element) {
                element.appendChild(script);
            }
            window.top.flowid = _this.captcha.FlowId;
        }, function (error) { return console.error(error); });
    };
    CaptchaComponent.prototype.reloadCaptcha = function () {
        this.loadCaptcha();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CaptchaComponent.prototype, "readableEventId", void 0);
    CaptchaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-captcha',
            template: __webpack_require__(/*! ./captcha.component.html */ "./src/app/components/eventregistration/captcha/captcha.component.html"),
            styles: [__webpack_require__(/*! ./captcha.component.scss */ "./src/app/components/eventregistration/captcha/captcha.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CaptchaComponent);
    return CaptchaComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/confirmation/confirmation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/eventregistration/confirmation/confirmation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout mt-5\">\r\n    <div class=\"card col-md-10 offset-md-1 col-xl-8 offset-xl-2\">\r\n        <div class=\"row\">\r\n            <div class=\"card-header\">\r\n                <h2><span [appTranslate]=\"'ThankYouForRegistering'\">Thank you for registering for the event!</span></h2>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/confirmation/confirmation.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/eventregistration/confirmation/confirmation.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n.checkout .card .card-header,\n.checkout .card .card-footer {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9jb25maXJtYXRpb24vQzpcXFVzZXJzXFxBTF9LTVxcRGVza3RvcFxcQXJiZWl0XFxJRkJcXHJlbGVhc2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV2ZW50cmVnaXN0cmF0aW9uXFxjb25maXJtYXRpb25cXGNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7O0VBRUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA0MnB4IDAgMjFweDtcclxufVxyXG5cclxuLmNoZWNrb3V0IC5jYXJkIC5jYXJkLWhlYWRlcixcclxuLmNoZWNrb3V0IC5jYXJkIC5jYXJkLWZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/eventregistration/confirmation/confirmation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/eventregistration/confirmation/confirmation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../event/session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_service_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration-service.factory */ "./src/app/components/eventregistration/registration-service.factory.ts");





var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(route, cartService, registrationServiceFactory) {
        this.route = route;
        this.cartService = cartService;
        this.registrationServiceFactory = registrationServiceFactory;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.readableEventId = this.route.snapshot.queryParams['id'];
        this.cartService.flushCart(this.readableEventId);
        this.registrationServiceFactory.dispose(this.readableEventId);
    };
    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/components/eventregistration/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/components/eventregistration/confirmation/confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_2__["SessionCartService"],
            _registration_service_factory__WEBPACK_IMPORTED_MODULE_4__["RegistrationServiceFactory"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/eventregistration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/eventregistration/eventregistration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"cntActiveDataRetrievals > 0\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div class=\"checkout mt-5\">\r\n    <div *ngIf=\"error && cntActiveDataRetrievals < 1\" class=\"container\" id=\"error-message\" role=\"alert\">\r\n        <app-errormessage\r\n        [serverErrorMessage]=\"error.message\"\r\n        [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n\r\n    <div *ngIf=\"event\">\r\n        <div *ngIf=\"event.registrationForm && showRegistrationForm()\" class=\"form-registration-wrapper card col-xl-8 offset-xl-2\" [style.display]=\"cntActiveDataRetrievals < 1 ? 'inherit' : 'none'\">\r\n            <!-- Forms fields for waitlist and auto-register -->\r\n            <div *ngIf=\"showWaitlist() && !isAllowedToCreateNewAttendee() && isFormRegistrationLoaded()\" class=\"waitlist text-center\">\r\n                <div class=\"alert alert-warning form-waitlist-alert\" [appTranslate]=\"'MaximumCapacityReached'\">The event's maximum capacity has been reached. You can only add attendants to the waitlist.</div>\r\n                <div class=\"waitlist-checkbox-wrapper\">\r\n                    <div *ngIf=\"canUserChooseAutoRegisterFunctionality$ | async\" class=\"centered\">\r\n                        <div class=\"custom-control custom-radio waitlist-radio\">\r\n                            <input\r\n                                type=\"radio\"\r\n                                id=\"autoRegisterEnabledRadioInline\"\r\n                                name=\"isAutoRegisterEnabled\"\r\n                                class=\"custom-control-input\"\r\n                                [(ngModel)]=\"autoRegister\"\r\n                                [value]=\"true\"\r\n                                (change)=\"autoRegister = true\">\r\n                            <label class=\"custom-control-label\" for=\"autoRegisterEnabledRadioInline\" [appTranslate]=\"'EnableAutoRegisterRadioButtonText'\">Auto-register and notify when space becomes available</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio waitlist-radio\">\r\n                            <input\r\n                                type=\"radio\"\r\n                                id=\"autoRegisterDisabledRadioInline\"\r\n                                name=\"isAutoRegisterEnabled\"\r\n                                class=\"custom-control-input\"\r\n                                [(ngModel)]=\"autoRegister\"\r\n                                [value]=\"false\"\r\n                                (change)=\"autoRegister = false\">\r\n                            <label class=\"custom-control-label\" for=\"autoRegisterDisabledRadioInline\" [appTranslate]=\"'DisableAutoRegisterRadioButtonText'\">Notify, but don't auto-register, when space becomes available</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"marketing-form-container\">\r\n                <div *ngIf=\"isFormRegistrationLoaded() && sessions && sessions.length > 0\" class=\"sessions-spacer\">\r\n                    <div *ngIf=\"isFormRegistrationLoaded() && sessions && sessions.length > 0\" class=\"col col-lg-6 col-sm-6 registration-form-sessions-wrapper align-left\">\r\n                        <div class=\"card-body\">\r\n                            <app-session-selection [readableEventId]=\"readableEventId\"></app-session-selection>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"registration-form\" event-registration-form\r\n                    [eventmarketingformhtml]=\"event.registrationForm\"\r\n                    [formHandler]=\"this\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!event.registrationForm && cntActiveDataRetrievals < 1\">\r\n            <div *ngIf=\"mustUserSignIn()\" class=\"card col-md-8 offset-md-2 col-xl-6 offset-xl-3\">\r\n                <div class=\"row\">\r\n                    <div class=\"card-header\">\r\n                        <h2 class=\"card-title\" [appTranslate]=\"'SignInForEventRegistration'\">Sign-in for event registration</h2>\r\n                    </div>\r\n                    <div class=\"card-body text-center\">\r\n                        <p [appTranslate]=\"'EventRegistrationSignInInfo'\" id=\"sign-in-is-required-info\">You need to sign-in to continue with the event registration.</p>\r\n                        <button *ngIf=\"!isLoginProcessActive()\" [routerLink]=\"['/externalLogin']\" [queryParams]=\"{id: event.readableEventId}\" class=\"btn btn-primary btn-lg\">\r\n                            <span class=\"icon-padding\" [appTranslate]=\"'SignIn'\">Sign In</span>\r\n                        </button>\r\n                        <app-spinner *ngIf=\"isLoginProcessActive()\"></app-spinner>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!mustUserSignIn()\" class=\"card col-md-10 offset-md-1 col-xl-8 offset-xl-2\">\r\n                <div class=\"row\">\r\n                    <div class=\"card-header\">\r\n                        <h1 class=\"card-title\" [appTranslate]=\"'EventRegistrationTitle'\">Event Registration</h1>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <!-- Waitlist Registration-->\r\n                        <div class=\"waitlist\" *ngIf=\"showWaitlist() && !isAllowedToCreateNewAttendee()\">\r\n                            <div class=\"alert alert-warning\" [appTranslate]=\"'MaximumCapacityReached'\">The event's maximum capacity has been reached. You can only add attendants to the waitlist.</div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col mb-2\">\r\n                                    <h2 class=\"h4\" [appTranslate]=\"'AddAttendeeToWaitlist'\">Add attendee to waitlist</h2>\r\n                                    <!-- create new attendee in waitlist -->\r\n                                    <div event-attendee\r\n                                        [readableEventId]=\"readableEventId\"\r\n                                        (onAdded)=\"addAttendee($event, true)\"\r\n                                        (onValidationStatusChanged)=\"changeFormValidationStatus($event)\"\r\n                                        [customRegistrationFields]=\"customRegistrationFields\"\r\n                                        [passes]=\"passes\"\r\n                                        [editing]=\"true\"\r\n                                        [placeholder]=\"true\"\r\n                                        [waitlisted]=\"true\"\r\n                                        [isJapanese]=\"isJapanese\"\r\n                                        [autoregisterWaitlistItems]=\"autoregisterWaitlistItems()\"\r\n                                        [enableAutoRegistrationSelection]=\"canUserChooseAutoRegisterFunctionality$ | async\"\r\n                                        [canceledEditing]=\"clearForms\"\r\n                                        [showAddAnotherAttendee]=\"event.enableMultiAttendeeRegistration\"\r\n                                        class=\"alternate-row\"></div>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"waitlistedAttendees != null && waitlistedAttendees.length > 0\" class=\"col registered-attendee-list\">\r\n                                    <h3 *ngIf=\"attendeeEditingCount === 0\" class=\"h4\" [appTranslate]=\"'WaitlistedAttendees'\">Waitlisted attendees</h3>\r\n                                    <h3 *ngIf=\"attendeeEditingCount > 0\" class=\"h4\" [appTranslate]=\"'EditingWaitlistedAttendee'\">Editing waitlisted attendee</h3>\r\n\r\n                                    <div class=\"list-group\">\r\n                                        <!-- show existing attendees in waitlist -->\r\n                                        <div event-attendee\r\n                                            *ngFor=\"let attendee of waitlistedAttendees.slice().reverse()\"\r\n                                            (onSaved)=\"updateAttendee($event, true)\"\r\n                                            (onDeleted)=\"removeAttendee($event, true)\"\r\n                                            [customRegistrationFields]=\"customRegistrationFields\"\r\n                                            [attendee]=\"attendee\"\r\n                                            [passes]=\"passes\"\r\n                                            [editing]=\"false\"\r\n                                            [waitlisted]=\"true\"\r\n                                            [isJapanese]=\"isJapanese\"\r\n                                            [showAddAnotherAttendee]=\"event.enableMultiAttendeeRegistration\"\r\n                                            [autoregisterWaitlistItems]=\"autoregisterWaitlistItems()\"\r\n                                            [enableAutoRegistrationSelection]=\"canUserChooseAutoRegisterFunctionality$ | async\"\r\n                                            [canceledEditing]=\"clearForms\"\r\n                                            class=\"alternate-row m-2\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Event Registration-->\r\n                        <div *ngIf=\"!showWaitlist() || attendees.length > 0\">\r\n                            <div class=\"row\">\r\n\r\n                                <div *ngIf=\"!showWaitlist() && attendeeEditingCount === 0 && !isAllowedToCreateNewAttendee()\" class=\"col\">\r\n                                    <h2 class=\"h4\" [appTranslate]=\"'AttendeeDetails'\">Attendee details</h2>\r\n                                    <!-- Create new attendee form -->\r\n                                    <div event-attendee\r\n                                        [readableEventId]=\"readableEventId\"\r\n                                        [passes]=\"passes\"\r\n                                        [customRegistrationFields]=\"customRegistrationFields\"\r\n                                        [editing]=\"true\"\r\n                                        [placeholder]=\"true\"\r\n                                        [waitlisted]=\"false\"\r\n                                        [isJapanese]=\"isJapanese\"\r\n                                        [showAddAnotherAttendee]=\"event.enableMultiAttendeeRegistration\"\r\n                                        [autoregisterWaitlistItems]=\"autoregisterWaitlistItems()\"\r\n                                        [enableAutoRegistrationSelection]=\"canUserChooseAutoRegisterFunctionality$ | async\"\r\n                                        [canceledEditing]=\"clearForms\"\r\n                                        (onAdded)=\"addAttendee($event, false)\"\r\n                                        (onValidationStatusChanged)=\"changeFormValidationStatus($event)\"\r\n                                        class=\"alternate-row\"></div>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"attendees != null && attendees.length > 0\"\r\n                                    [ngClass]=\"{'col-lg-6': !showWaitlist() && attendeeEditingCount == 0 && !isAllowedToCreateNewAttendee()}\"\r\n                                    class=\"col registered-attendee-list\">\r\n                                    <h2 class=\"h4\" [appTranslate]=\"'AssignedAttendees'\">Registrations</h2>\r\n                                    <div class=\"list-group\">\r\n                                        <!-- Read only attendees list -->\r\n                                        <div event-attendee\r\n                                            *ngFor=\"let attendee of attendees.slice().reverse()\"\r\n                                            [readableEventId]=\"readableEventId\"\r\n                                            [attendee]=\"attendee\"\r\n                                            [customRegistrationFields]=\"customRegistrationFields\"\r\n                                            [passes]=\"passes\"\r\n                                            [editing]=\"false\"\r\n                                            [waitlisted]=\"false\"\r\n                                            [isJapanese]=\"isJapanese\"\r\n                                            [showAddAnotherAttendee]=\"event.enableMultiAttendeeRegistration\"\r\n                                            [enableAutoRegistrationSelection]=\"canUserChooseAutoRegisterFunctionality$ | async\"\r\n                                            [canceledEditing]=\"clearForms\"\r\n                                            (onSaved)=\"updateAttendee($event, false)\"\r\n                                            (onDeleted)=\"removeAttendee($event, false)\"\r\n                                            (editingChange)=\"attendeeEditingStateChanged($event)\"\r\n                                            class=\"alternate-row m-2\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <app-captcha [readableEventId]=\"readableEventId\" *ngIf=\"event.enableCaptcha\"></app-captcha>\r\n                        <div *ngIf=\"registrationInProgress\" class=\"full-size-spinner-container p-5\">\r\n                            <app-spinner></app-spinner>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <button class=\"btn btn-primary btn-lg pull-right\" (click)=\"checkout()\" [attr.disabled]=\"isCheckoutButtonDisabled() ? '' : null\">\r\n                            <span *ngIf=\"!registrationInProgress\" [appTranslate]=\"'Checkout'\"><span class=\"fa fa-shopping-cart\"></span> Checkout</span>\r\n                            <span *ngIf=\"registrationInProgress\" [appTranslate]=\"'Processing'\"><span class=\"fa fa-spinner fa-spin\"></span> Processing</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/eventregistration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/eventregistration/eventregistration.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sessions-spacer {\n  height: 100%;\n  width: 100%; }\n\n.registration-form-sessions-wrapper {\n  position: relative;\n  min-height: 90%;\n  max-height: 90%;\n  overflow: auto;\n  padding-right: 0px; }\n\n.form-registration-wrapper {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.registration-form {\n  margin: auto;\n  width: 100%; }\n\n.form-waitlist-alert {\n  flex: auto; }\n\n.marketing-form-container {\n  flex-direction: column; }\n\n.centered {\n  margin: auto; }\n\n.waitlist-checkbox-wrapper {\n  margin: auto;\n  display: flex;\n  flex-direction: column; }\n\n.checkout-container {\n  padding-top: 2em;\n  float: right; }\n\n.page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n.waitlist-radio {\n  display: flex; }\n\nh4 {\n  margin-top: 50px; }\n\n.alternate-row {\n  margin-right: 0;\n  margin-left: 0; }\n\n.spinner-container {\n  min-height: 1000px;\n  padding-top: 450px; }\n\n.full-size-spinner-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: white; }\n\n.field-container {\n  padding: 1em 0; }\n\n.field-container p {\n  margin-bottom: 0; }\n\n.checkboxes-container {\n  padding-left: 1em; }\n\n.required::after {\n  content: ' *';\n  color: red; }\n\n.notVisible {\n  display: none; }\n\n.checkout .card .card-title {\n  text-align: center; }\n\n.checkout .card .card-body {\n  position: relative; }\n\n.checkout .card .card-header,\n.checkout .card .card-footer {\n  width: 100%; }\n\n.waitlist .row,\n.custom-registration-fields .row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.waitlist .auto-register-header {\n  text-align: center; }\n\n@media (min-width: 401px) {\n  .checkout .registered-attendee-list {\n    min-width: 400px; } }\n\n@media (min-width: 576px) {\n  .registration-form-sessions-wrapper {\n    position: absolute;\n    left: 0px;\n    min-height: 90%;\n    max-height: 90%;\n    overflow: auto;\n    border-right: 1px solid rgba(0, 0, 0, 0.125);\n    padding-right: 0px; }\n  .marketing-form-container {\n    display: flex;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    flex-direction: row; }\n  .registration-form {\n    padding-left: 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRyZWdpc3RyYXRpb25cXGV2ZW50cmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBVztFQUNYLFdBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0Qjs7RUFFSSxXQUFXLEVBQUE7O0FBR2Y7O0VBRUksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQ25COztBQUlMO0VBQ0k7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLDRDQUF3QztJQUN4QyxrQkFBa0IsRUFBQTtFQUd0QjtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQixFQUFBO0VBR3ZCO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50cmVnaXN0cmF0aW9uL2V2ZW50cmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb25zLXNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uLWZvcm0tc2Vzc2lvbnMtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLXJlZ2lzdHJhdGlvbi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uLWZvcm0ge1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uZm9ybS13YWl0bGlzdC1hbGVydCB7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4ubWFya2V0aW5nLWZvcm0tY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi53YWl0bGlzdC1jaGVja2JveC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIG1hcmdpbjogNDJweCAwIDIxcHg7XHJcbn1cclxuXHJcbi53YWl0bGlzdC1yYWRpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uYWx0ZXJuYXRlLXJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NTBweDtcclxufVxyXG5cclxuLmZ1bGwtc2l6ZS1zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpZWxkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxufVxyXG5cclxuLmZpZWxkLWNvbnRhaW5lciBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveGVzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLnJlcXVpcmVkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnIConO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5vdFZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrb3V0IC5jYXJkIC5jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrb3V0IC5jYXJkIC5jYXJkLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2hlY2tvdXQgLmNhcmQgLmNhcmQtaGVhZGVyLFxyXG4uY2hlY2tvdXQgLmNhcmQgLmNhcmQtZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2FpdGxpc3QgLnJvdyxcclxuLmN1c3RvbS1yZWdpc3RyYXRpb24tZmllbGRzIC5yb3cge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi53YWl0bGlzdCAuYXV0by1yZWdpc3Rlci1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAxcHgpIHtcclxuICAgIC5jaGVja291dCAucmVnaXN0ZXJlZC1hdHRlbmRlZS1saXN0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAucmVnaXN0cmF0aW9uLWZvcm0tc2Vzc2lvbnMtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXJrZXRpbmctZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0cmF0aW9uLWZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIH1cclxuICAgICAgICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/eventregistration/eventregistration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/eventregistration/eventregistration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EventRegistrationComponent, EventCheckoutRoutePaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegistrationComponent", function() { return EventRegistrationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCheckoutRoutePaths", function() { return EventCheckoutRoutePaths; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _services_captcha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/captcha.service */ "./src/app/services/captcha.service.ts");
/* harmony import */ var _models_CustomRegistrationField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/CustomRegistrationField */ "./src/app/models/CustomRegistrationField.ts");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var _services_browser_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/browser-session.service */ "./src/app/services/browser-session.service.ts");
/* harmony import */ var _attendee_attendee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attendee/attendee.component */ "./src/app/components/eventregistration/attendee/attendee.component.ts");
/* harmony import */ var src_app_resolvers_external_login_url_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/resolvers/external.login.url.resolver */ "./src/app/resolvers/external.login.url.resolver.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");
/* harmony import */ var src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/constants/TranslationKeys */ "./src/app/constants/TranslationKeys.ts");
/* harmony import */ var src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/LocalizableError */ "./src/app/models/LocalizableError.ts");
/* harmony import */ var src_app_components_eventregistration_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/eventregistration/captcha/captcha.component */ "./src/app/components/eventregistration/captcha/captcha.component.ts");
/* harmony import */ var _registration_service_factory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration-service.factory */ "./src/app/components/eventregistration/registration-service.factory.ts");















var EventRegistrationComponent = /** @class */ (function () {
    function EventRegistrationComponent(activeEventService, eventService, captchaService, route, router, labelsService, browserSessionService, userService, registrationServiceFactory, changeDetectionRef, ngZone) {
        var _this_1 = this;
        this.activeEventService = activeEventService;
        this.eventService = eventService;
        this.captchaService = captchaService;
        this.route = route;
        this.router = router;
        this.labelsService = labelsService;
        this.browserSessionService = browserSessionService;
        this.userService = userService;
        this.registrationServiceFactory = registrationServiceFactory;
        this.changeDetectionRef = changeDetectionRef;
        this.ngZone = ngZone;
        this.cntActiveDataRetrievals = 0;
        this.formValidStateString = 'VALID';
        this.total = 0.0;
        this.currencySymbol = '$';
        this.showRegistrationForm = function () {
            return !((_this_1.hasAttendeeCountReachedEventCapacity() && !_this_1.event.showWaitlist) || _this_1.isAttendeeCountExceedingEventCapacity());
        };
        /**
         * Catch form notifications and localized errors
         */
        this.catchNotificationFormError = function (notification) {
            if (notification !== null && notification.IsError === true) {
                _this_1.error = new src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_12__["LocalizableError"](notification.Message, null);
                _this_1.hideLoader();
            }
        };
        this.attendees = [];
        this.waitlistedAttendees = [];
        this.attendeeEditingCount = 0;
        this.formRegistrationLoaded = false;
    }
    Object.defineProperty(EventRegistrationComponent.prototype, "canUserChooseAutoRegisterFunctionality$", {
        get: function () {
            return this.registrationService.canUserChooseAutoRegisterFunctionality$;
        },
        enumerable: true,
        configurable: true
    });
    EventRegistrationComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this_1 = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.readableEventId = this.route.snapshot.queryParams['id'];
                        _a = this;
                        return [4 /*yield*/, this.registrationServiceFactory.create(this.readableEventId)];
                    case 1:
                        _a.registrationService = _b.sent();
                        this.loadData();
                        this.labelsService.getLabelsModel().subscribe(function (labelsModel) {
                            _this_1.isJapanese = labelsModel.isJapanese;
                        });
                        this.userService.isLoggedIn().subscribe(function (isUserLoggedIn) {
                            _this_1.isUserLoggedIn = isUserLoggedIn;
                        });
                        this.subscribeToAttendees();
                        this.waitlisted = this.showWaitlist();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRegistrationComponent.prototype.isLoginProcessActive = function () {
        return src_app_resolvers_external_login_url_resolver__WEBPACK_IMPORTED_MODULE_9__["ExternalLoginUrlResolver"].isResolverActive();
    };
    EventRegistrationComponent.prototype.mustUserSignIn = function () {
        return !(this.event.allowAnonymousRegistrations || this.isUserLoggedIn);
    };
    EventRegistrationComponent.prototype.clearForms = function () {
        var selectorResults = document.querySelectorAll('.event-customregistrationsfields-container input');
        var selectorResult;
        var i;
        for (i = 0; i < selectorResults.length; i++) {
            selectorResult = selectorResults[i];
            selectorResult.value = '';
            selectorResult.dispatchEvent(new Event('input'));
        }
        selectorResults = document.querySelectorAll('.event-customregistrationsfields-container input:checked');
        for (i = 0; i < selectorResults.length; i++) {
            selectorResult = selectorResults[i];
            selectorResult.checked = false;
        }
        selectorResults = document.querySelectorAll('.event-customregistrationsfields-container select');
        for (i = 0; i < selectorResults.length; i++) {
            selectorResult = selectorResults[i];
            selectorResult.selectedIndex = 0;
        }
    };
    /**
     * Checks if the validation status of the attendee form (child view) is valid.
     */
    EventRegistrationComponent.prototype.isAttendeeFormValid = function () {
        return this.formValidationStatus === this.formValidStateString && this.attendeeComponent.areFormsValid();
    };
    EventRegistrationComponent.prototype.isFormRegistrationLoaded = function () {
        return true;
    };
    /**
     * Checks if the checkout button should be disabled.
     */
    EventRegistrationComponent.prototype.isCheckoutButtonDisabled = function () {
        // NOTE: order of if statements is very important for logic.
        if (this.registrationInProgress) {
            return true;
        }
        if (this.isAttendeeCountExceedingEventCapacity()) {
            return true;
        }
        if (this.isAttendeeFormValid() && this.event.showWaitlist && this.hasAttendeeCountReachedEventCapacity()) {
            // Case: Event Full, 0 Event Attendees, 1 Waitlist attendee (did not press 'add another attendee')
            return false;
        }
        if (this.isAttendeeFormValid() && !this.hasAttendeeCountReachedEventCapacity()) {
            return false;
        }
        if (this.attendees.length === 0 && this.waitlistedAttendees.length === 0) {
            return true;
        }
        return false;
    };
    EventRegistrationComponent.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadEvent()];
                    case 1:
                        _a.sent();
                        if (this.event) {
                            if (this.event.allowCustomAgenda) {
                                this.loadSessions();
                            }
                            this.loadEventRegistrationCount();
                            if (this.event.registrationForm) {
                                if (this.showRegistrationForm()) {
                                    this.cntActiveDataRetrievals += 1;
                                }
                                return [2 /*return*/];
                            }
                            this.loadEventPasses();
                        }
                        this.loadCustomRegistrationFields();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRegistrationComponent.prototype.loadEvent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this_1 = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.cntActiveDataRetrievals += 1;
                this.activeEventService.getEvent(this.readableEventId).subscribe(function (event) {
                    _this_1.event = event;
                    _this_1.cntActiveDataRetrievals -= 1;
                }, function (error) { return _this_1.handleDataRetrievalError(error); });
                return [2 /*return*/];
            });
        });
    };
    EventRegistrationComponent.prototype.loadSessions = function () {
        var _this_1 = this;
        this.cntActiveDataRetrievals += 1;
        this.activeEventService.getSessions(this.readableEventId, false).subscribe(function (sessions) {
            _this_1.sessions = sessions;
            _this_1.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this_1.handleDataRetrievalError(error); });
    };
    EventRegistrationComponent.prototype.loadCustomRegistrationFields = function () {
        var _this_1 = this;
        this.cntActiveDataRetrievals += 1;
        this.eventService.getCustomRegistrationFields(this.readableEventId).subscribe(function (customRegistrationFields) {
            _this_1.customRegistrationFields = [];
            for (var _i = 0, customRegistrationFields_1 = customRegistrationFields; _i < customRegistrationFields_1.length; _i++) {
                var customRegistrationField = customRegistrationFields_1[_i];
                _this_1.customRegistrationFields.push(Object.assign(new _models_CustomRegistrationField__WEBPACK_IMPORTED_MODULE_5__["CustomRegistrationField"](), customRegistrationField));
            }
            _this_1.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this_1.handleDataRetrievalError(error); });
    };
    EventRegistrationComponent.prototype.loadEventPasses = function () {
        var _this_1 = this;
        this.activeEventService.getPasses(this.readableEventId).subscribe(function (passes) {
            _this_1.passes = passes;
            for (var _i = 0, _a = _this_1.passes; _i < _a.length; _i++) {
                var pass = _a[_i];
                pass.passesUsed = 0;
            }
        }, function (error) { return _this_1.handleDataRetrievalError(error); });
    };
    EventRegistrationComponent.prototype.loadEventRegistrationCount = function () {
        var _this_1 = this;
        this.cntActiveDataRetrievals += 1;
        this.eventService.getEventRegistrationCount(this.readableEventId).subscribe(function (registrationCount) {
            _this_1.registrationCount = registrationCount;
            if (_this_1.hasAttendeeCountReachedEventCapacity() && !_this_1.event.showWaitlist) {
                _this_1.showEventCapacityReachedErrorMessage();
            }
            if (_this_1.isAttendeeCountExceedingEventCapacity()) {
                _this_1.showEventCapacityExceedingErrorMessage();
            }
            _this_1.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this_1.handleDataRetrievalError(error); });
    };
    EventRegistrationComponent.prototype.handleDataRetrievalError = function (error) {
        if (this.cntActiveDataRetrievals > 0) {
            this.cntActiveDataRetrievals -= 1;
        }
        this.handleErrorResponse(error);
    };
    EventRegistrationComponent.prototype.handleErrorResponse = function (error) {
        this.error = error;
    };
    EventRegistrationComponent.prototype.showWaitlist = function () {
        if (!this.registrationService.isPaidEvent()) {
            return (this.event.showWaitlist &&
                this.event.isCapacityRestricted &&
                (this.hasAttendeeCountReachedEventCapacity() ||
                    this.waitlistedAttendees.length > 0));
        }
        return this.event.showWaitlist && (this.allPassesSoldOut() || this.hasAttendeeCountReachedEventCapacity());
    };
    EventRegistrationComponent.prototype.isAllowedToCreateNewAttendee = function () {
        return !this.event.enableMultiAttendeeRegistration && this.attendees.length === 1;
    };
    EventRegistrationComponent.prototype.isAttendeeCountExceedingEventCapacity = function () {
        return this.registrationService.getAvailableEventCapacity() < 0;
    };
    EventRegistrationComponent.prototype.hasAttendeeCountReachedEventCapacity = function () {
        return this.registrationService.getAvailableEventCapacity() === 0;
    };
    EventRegistrationComponent.prototype.allPassesSoldOut = function () {
        for (var _i = 0, _a = this.passes; _i < _a.length; _i++) {
            var pass = _a[_i];
            if (pass.numberOfPassesLeft > pass.passesUsed) {
                return false;
            }
        }
        return true;
    };
    /**
     * Hides page loader and manually triggers angular change detection
     */
    EventRegistrationComponent.prototype.hideLoader = function () {
        this.cntActiveDataRetrievals = 0;
        this.changeDetectionRef.detectChanges();
    };
    /**
     * Method triggered on "formSubmit" event of marketing forms
     * Sets extra values for marketing forms such as candidate waitlisting, autoregister
     * and attendee session
     */
    EventRegistrationComponent.prototype.onSubmitEvent = function (event) {
        event.setExtraValue("d365mktEvent_waitlisted", this.waitlisted);
        event.setExtraValue("d365mktEvent_autoRegister", this.autoRegister);
        var sessions = this.getSessionsInCart();
        event.setExtraValue("d365mktEvent_attendeeSessions", JSON.stringify(sessions));
        // if we have any active errors, clear them on submit and trigger change detection
        if (this.error) {
            this.error = null;
        }
        // NOTE : Uncommenting this line will result in creating a better user experience by starting
        // the loader whenever the submit button is executed. Keep commented until browser isssue is resolved
        this.cntActiveDataRetrievals += 1;
        this.changeDetectionRef.detectChanges();
    };
    /**
     * Method triggered on "onFormLoad" event of marketing forms
     * Registers form notification on error and prevents form loader to execute
     */
    EventRegistrationComponent.prototype.onFormRegistrationLoad = function (event) {
        event.setFormNotification(this.catchNotificationFormError);
        event.preventFormLoadingProgressBar();
    };
    /**
     * Method triggered on "afterFormLoad" event of marketing forms
     * After form has loaded, the loader becomes hidden
     */
    EventRegistrationComponent.prototype.afterFormRegistrationLoaded = function (event) {
        this.hideLoader();
    };
    /**
     * Method triggered on "afterFormSubmit" event of marketing forms
     * This is triggered only on a successfull submission
     */
    EventRegistrationComponent.prototype.onSubmitSuccessfull = function (event) {
        var _this_1 = this;
        this.hideLoader();
        var _this = this;
        this.ngZone.run(function () {
            _this_1.router.navigate(['../confirmation'], {
                relativeTo: _this.route,
                queryParams: {
                    id: _this.event.readableEventId
                }
            });
        });
    };
    EventRegistrationComponent.prototype.addAttendee = function (attendee, waitlisted) {
        if (this.isAttendeeCountExceedingEventCapacity()) {
            this.showEventCapacityExceedingErrorMessage();
            return;
        }
        if (waitlisted) {
            this.waitlistedAttendees.push(attendee);
        }
        else {
            this.registrationService.addAttendee(attendee);
            this.clearForms();
        }
        if (this.isAttendeeCountExceedingEventCapacity()) {
            this.showEventCapacityExceedingErrorMessage();
        }
        if (this.hasAttendeeCountReachedEventCapacity()) {
            this.showEventCapacityReachedErrorMessage();
        }
        this.updateTotal(null, attendee.passId);
    };
    EventRegistrationComponent.prototype.getSessionsInCart = function () {
        var _this_1 = this;
        var attendeeSessions = undefined;
        if (this.registrationService.isSessionCartEnabled()) {
            this.registrationService.sessionsInCart$.subscribe(function (sessions) {
                attendeeSessions = sessions.map(function (session) {
                    var isSessionFull = false;
                    if (session.registrationCount >= session.maxCapacity &&
                        session.isCapacityRestricted &&
                        _this_1.event.showWaitlist) {
                        isSessionFull = true;
                    }
                    var attendeeSession = {
                        sessionId: session.id,
                        waitlisted: isSessionFull
                    };
                    return attendeeSession;
                });
            });
        }
        return attendeeSessions;
    };
    EventRegistrationComponent.prototype.removeAttendee = function (attendee, waitlisted) {
        var index = this.findAttendeeIndex(attendee, waitlisted);
        if (index !== -1) {
            if (waitlisted) {
                this.waitlistedAttendees.splice(index, 1);
            }
            else {
                var removedPassId = this.attendees[index].passId;
                this.registrationService.removeAttendee(index);
                // Move the first waitlisted attendee to the registrants
                if (this.waitlistedAttendees.length > 0) {
                    if (this.registrationService.isPaidEvent()) {
                        /* for paid events we cannot just move the first waitlisted attendee to attendees
                      as there may be a conflict with passes try to find a waitlisted attendee that wants
                      to buy the same pass that the removed attendee had and move that one */
                        var idx = this.indexOfFirstWaitlistedAttendeeWithPassId(removedPassId);
                        if (idx !== -1) {
                            this.attendees.push(this.waitlistedAttendees[idx]);
                            this.waitlistedAttendees.splice(idx, 1);
                        }
                    }
                    else {
                        // for unpaid events we can just move any of the waitlisted attendees
                        this.attendees.push(this.waitlistedAttendees[0]);
                        this.waitlistedAttendees.splice(0, 1);
                    }
                }
            }
            this.updateTotal(attendee.passId, null);
        }
        this.clearForms();
    };
    /**
     * Finds the index of the first waitlisted attendee with a specified pass
     * @param passId The pass id
     */
    EventRegistrationComponent.prototype.indexOfFirstWaitlistedAttendeeWithPassId = function (passId) {
        return this.waitlistedAttendees.findIndex(function (a) { return a.passId === passId; });
    };
    /**
     * Event handler for the update attendee event of the attendee component
     * @param attendees An array of length 2, the first item being the attendee before the update operation,
     * the second is the attendee after the update
     * @param waitlisted Whether the attendee updated is in the waitlist or not
     */
    EventRegistrationComponent.prototype.updateAttendee = function (attendees, waitlisted) {
        var index = this.findAttendeeIndex(attendees[0], waitlisted);
        if (index !== -1) {
            if (waitlisted) {
                this.waitlistedAttendees[index] = attendees[1];
            }
            else {
                var attendee = attendees[1];
                this.attendees[index] = attendee;
                this.clearForms();
            }
            this.updateTotal(attendees[0].passId, attendees[1].passId);
        }
    };
    EventRegistrationComponent.prototype.attendeeEditingStateChanged = function (newEditingState) {
        if (newEditingState) {
            this.attendeeEditingCount++;
        }
        else {
            if (this.attendeeEditingCount > 0) {
                this.attendeeEditingCount--;
            }
        }
    };
    /**
     * Finds the index of the attendee
     * @param attendee The attendee
     * @param waitlisted If true the waitlisted attendee list will be searched, otherwise the attendee list
     */
    EventRegistrationComponent.prototype.findAttendeeIndex = function (attendee, waitlisted) {
        return waitlisted
            ? this.waitlistedAttendees.findIndex(function (a) {
                return a.firstName === attendee.firstName &&
                    a.lastName === attendee.lastName &&
                    a.email === attendee.email;
            })
            : this.attendees.findIndex(function (a) {
                return a.firstName === attendee.firstName &&
                    a.lastName === attendee.lastName &&
                    a.email === attendee.email;
            });
    };
    EventRegistrationComponent.prototype.updateTotal = function (passIdToRemove, passIdToAdd) {
        if (passIdToRemove != null) {
            this.total -= this.findPassValue(passIdToRemove);
        }
        if (passIdToAdd != null) {
            this.total += this.findPassValue(passIdToAdd);
        }
    };
    EventRegistrationComponent.prototype.findPassValue = function (passId) {
        if (this.passes == null) {
            return 0.0;
        }
        var pass = this.passes.find(function (p) { return p.passId === passId; });
        if (pass) {
            this.currencySymbol = pass.currencySymbol;
            return pass.price;
        }
        else {
            return 0.0;
        }
    };
    EventRegistrationComponent.prototype.checkout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registrationResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.registrationInProgress = true;
                        if (this.isAttendeeFormValid()) {
                            this.attendeeComponent.confirmEdit();
                        }
                        if (this.isAttendeeCountExceedingEventCapacity()) {
                            this.showEventCapacityExceedingErrorMessage();
                            this.registrationInProgress = false;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.createRegistrationData()];
                    case 1:
                        registrationResult = _a.sent();
                        this.registerToEvent(registrationResult);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventRegistrationComponent.prototype.createRegistrationData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hipObjectResult, attendeesToSend, registrationData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                hipObjectResult = _services_captcha_service__WEBPACK_IMPORTED_MODULE_4__["CaptchaService"].EmptyHipObject;
                if (this.event.enableCaptcha) {
                    hipObjectResult = this.captchaService.getHipObject();
                }
                if (this.registrationService.isPaidEvent()) {
                    this.browserSessionService.setCaptcha(hipObjectResult);
                }
                if (this.isAttendeeFormValid()) {
                    this.attendeeComponent.confirmEdit();
                }
                attendeesToSend = [];
                attendeesToSend = attendeesToSend.concat(this.attendees);
                attendeesToSend = attendeesToSend.concat(this.waitlistedAttendees);
                registrationData = {
                    attendees: attendeesToSend,
                    hipObject: hipObjectResult
                };
                if (!this.event.enableCaptcha) {
                    registrationData.hipObject = undefined;
                }
                return [2 /*return*/, registrationData];
            });
        });
    };
    EventRegistrationComponent.prototype.registerToEvent = function (registrationData) {
        var _this_1 = this;
        this.eventService
            .registerToEvent(this.readableEventId, registrationData)
            .subscribe(function (registrationResult) {
            if (registrationResult.status === 'Success') {
                _this_1.router.navigate(['../confirmation'], {
                    relativeTo: _this_1.route,
                    queryParams: {
                        id: _this_1.event.readableEventId
                    }
                });
            }
            else if (registrationResult.status === 'Initiated') {
                _this_1.browserSessionService.setPurchaseId(registrationResult.purchaseId);
                _this_1.browserSessionService.setRegistrationTotal(_this_1.total);
                _this_1.browserSessionService.setCurrency(_this_1.currencySymbol);
                _this_1.router.navigate(['../payment'], {
                    relativeTo: _this_1.route,
                    queryParams: {
                        id: _this_1.event.readableEventId,
                        currencySymbol: _this_1.currencySymbol,
                        purchaseId: registrationResult.purchaseId
                    }
                });
            }
            else if (registrationResult.status === 'Redirect') {
                _this_1.browserSessionService.setPurchaseId(registrationResult.purchaseId);
                _this_1.browserSessionService.setRegistrationTotal(_this_1.total);
                _this_1.browserSessionService.setCurrency(_this_1.currencySymbol);
                window.location.href = registrationResult.redirectUrl;
            }
            else {
                var errorMessage = 'Event registration failed.';
                var errorCode = src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_11__["TranslationKeys"].RegistrationFailed;
                if (registrationResult.errorMessage != null && registrationResult.errorMessage !== '') {
                    errorMessage = registrationResult.errorMessage;
                }
                if (registrationResult.errorCode != null && registrationResult.errorCode !== '') {
                    errorCode = registrationResult.errorCode;
                }
                _this_1.error = new src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_12__["LocalizableError"](errorMessage, errorCode);
                _this_1.registrationInProgress = false;
                _this_1.captchaComponent.reloadCaptcha();
            }
        }, function (error) { return _this_1.handleErrorResponse(error); })
            .add(function () {
            _this_1.registrationInProgress = false;
        });
    };
    EventRegistrationComponent.prototype.showEventCapacityExceedingErrorMessage = function () {
        this.error = new src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_12__["LocalizableError"]('You cannot register that many attendees because the maximum event capacity is already reached.', src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_11__["TranslationKeys"].EventCapacityExceeding);
    };
    EventRegistrationComponent.prototype.showEventCapacityReachedErrorMessage = function () {
        this.error = new src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_12__["LocalizableError"]('The events maximum capacity has been reached.', src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_11__["TranslationKeys"].EventCapacityReached);
    };
    EventRegistrationComponent.prototype.autoregisterWaitlistItems = function () {
        return this.event.autoregisterWaitlistItems;
    };
    EventRegistrationComponent.prototype.changeFormValidationStatus = function (validationStatus) {
        this.formValidationStatus = validationStatus;
    };
    EventRegistrationComponent.prototype.subscribeToAttendees = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this_1 = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.registrationService.attendees$.subscribe(function (attendees) {
                    _this_1.attendees = attendees;
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_attendee_attendee_component__WEBPACK_IMPORTED_MODULE_8__["AttendeeComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _attendee_attendee_component__WEBPACK_IMPORTED_MODULE_8__["AttendeeComponent"])
    ], EventRegistrationComponent.prototype, "attendeeComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_eventregistration_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_13__["CaptchaComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_eventregistration_captcha_captcha_component__WEBPACK_IMPORTED_MODULE_13__["CaptchaComponent"])
    ], EventRegistrationComponent.prototype, "captchaComponent", void 0);
    EventRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventregistration',
            template: __webpack_require__(/*! ./eventregistration.component.html */ "./src/app/components/eventregistration/eventregistration.component.html"),
            styles: [__webpack_require__(/*! ./eventregistration.component.scss */ "./src/app/components/eventregistration/eventregistration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_3__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_3__["USER_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_10__["ActiveEventService"], Object, _services_captcha_service__WEBPACK_IMPORTED_MODULE_4__["CaptchaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_labels_service__WEBPACK_IMPORTED_MODULE_6__["LabelsService"],
            _services_browser_session_service__WEBPACK_IMPORTED_MODULE_7__["BrowserSessionService"], Object, _registration_service_factory__WEBPACK_IMPORTED_MODULE_14__["RegistrationServiceFactory"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], EventRegistrationComponent);
    return EventRegistrationComponent;
}());

var EventCheckoutRoutePaths;
(function (EventCheckoutRoutePaths) {
    EventCheckoutRoutePaths["REGISTRATION"] = "event/registration";
    EventCheckoutRoutePaths["CONFIRMATION"] = "event/confirmation";
    EventCheckoutRoutePaths["PAYMENT"] = "event/payment";
    EventCheckoutRoutePaths["SUCCESS_PAYMENT"] = "event/successpayment";
})(EventCheckoutRoutePaths || (EventCheckoutRoutePaths = {}));


/***/ }),

/***/ "./src/app/components/eventregistration/eventregistrationform/eventregistrationform.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/eventregistrationform/eventregistrationform.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHtml]=\"eventmarketingformhtml | safe:'html'\" registration-form-initializer [formHandler]=\"formHandler\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/eventregistration/eventregistrationform/eventregistrationform.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/eventregistrationform/eventregistrationform.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RegistrationFormInitializerDirective, EventRegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormInitializerDirective", function() { return RegistrationFormInitializerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegistrationFormComponent", function() { return EventRegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/labels.service */ "./src/app/services/labels.service.ts");



/**
 * This directive responsible for :
 *  - Moving the marketing forms script outside of the Angular Framework scope
 *  - Capturing and initializing the Marketing forms loader
 */
var RegistrationFormInitializerDirective = /** @class */ (function () {
    function RegistrationFormInitializerDirective(elementRef, labelsService) {
        this.elementRef = elementRef;
        this.labelsService = labelsService;
        this.d365mktConfigure = function () {
            if (MsCrmMkt) {
                var currentLanguageCode = this.labelsService.getCurrentLanguageCode();
                var _this_1 = this;
                MsCrmMkt.MsCrmFormLoader.uiLanguage = currentLanguageCode;
                MsCrmMkt.MsCrmFormLoader.off("afterFormSubmit");
                MsCrmMkt.MsCrmFormLoader.on("afterFormSubmit", function (event) {
                    _this_1.formHandler.onSubmitSuccessfull(event);
                });
                MsCrmMkt.MsCrmFormLoader.off("formLoad");
                MsCrmMkt.MsCrmFormLoader.on("formLoad", function (event) {
                    _this_1.formHandler.onFormRegistrationLoad(event);
                });
                MsCrmMkt.MsCrmFormLoader.off("afterFormLoad");
                MsCrmMkt.MsCrmFormLoader.on("afterFormLoad", function (event) {
                    _this_1.formHandler.afterFormRegistrationLoaded(event);
                });
                MsCrmMkt.MsCrmFormLoader.off("formSubmit");
                MsCrmMkt.MsCrmFormLoader.on("formSubmit", function (event) {
                    _this_1.formHandler.onSubmitEvent(event);
                });
            }
            return false;
        };
    }
    RegistrationFormInitializerDirective.prototype.ngOnInit = function () {
        var _this_1 = this;
        setTimeout(function () {
            _this_1.reinsertScripts();
        });
    };
    RegistrationFormInitializerDirective.prototype.reinsertScripts = function () {
        var externalScriptId = "external-scripts";
        var scripts = this.elementRef.nativeElement.getElementsByTagName('script');
        var scriptsInitialLength = scripts.length;
        var externalScripts = document.getElementById(externalScriptId);
        if (!externalScripts) {
            externalScripts = document.createElement("div");
            externalScripts.id = externalScriptId;
            document.body.appendChild(externalScripts);
        }
        externalScripts.innerHTML = "";
        this.resetMsCrmMkt();
        window["d365mktConfigure"] = this.d365mktConfigure.bind(this);
        for (var i = 0; i < scriptsInitialLength; i++) {
            var script = scripts[i];
            var scriptCopy = document.createElement('script');
            scriptCopy.type = script.type ? script.type : 'text/javascript';
            scriptCopy.async = false;
            if (script.innerHTML) {
                scriptCopy.innerHTML = script.innerHTML;
            }
            else if (script.src) {
                scriptCopy.src = script.src;
            }
            document.getElementById(externalScriptId).appendChild(scriptCopy);
            scripts[i].remove();
        }
    };
    RegistrationFormInitializerDirective.prototype.resetMsCrmMkt = function () {
        try {
            MsCrmMkt = null;
        }
        catch (_a) {
            /* Disolve exception */
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegistrationFormInitializerDirective.prototype, "formHandler", void 0);
    RegistrationFormInitializerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[registration-form-initializer]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_labels_service__WEBPACK_IMPORTED_MODULE_2__["LabelsService"]])
    ], RegistrationFormInitializerDirective);
    return RegistrationFormInitializerDirective;
}());

var EventRegistrationFormComponent = /** @class */ (function () {
    function EventRegistrationFormComponent() {
    }
    EventRegistrationFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventRegistrationFormComponent.prototype, "eventmarketingformhtml", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventRegistrationFormComponent.prototype, "formHandler", void 0);
    EventRegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[event-registration-form]',
            template: __webpack_require__(/*! ./eventregistrationform.component.html */ "./src/app/components/eventregistration/eventregistrationform/eventregistrationform.component.html")
        })
    ], EventRegistrationFormComponent);
    return EventRegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/paymentdemo/payment.demo.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/eventregistration/paymentdemo/payment.demo.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='checkout mt-5'>\r\n    <div *ngIf=\"error\" class=\"container\">\r\n        <app-errormessage\r\n            [serverErrorMessage]=\"error.message\"\r\n            [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n\r\n\r\n    <div class='card col-md-10 offset-md-1 col-xl-8 offset-xl-2'>\r\n        <div class=\"row\">\r\n            <div class=\"card-header\">\r\n                <h2 class=\"card-title\"><span [appTranslate]=\"'DemoPaymentGatewayPageTitle'\">Demo Payment Gateway</span></h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-md-6 p-2\">\r\n                            <h3 class=\"h4\" [appTranslate]=\"'OrderSummary'\">Order Summary</h3>\r\n                            <b [appTranslate]=\"'Description'\">Description:</b> Event pass<br>\r\n                            <b [appTranslate]=\"'Amount'\">Amount:</b> {{ currencySymbol }}{{ total }}\r\n                        </div>\r\n\r\n                        <div class=\"col-12 col-md-6 p-2\">\r\n                            <h3 class=\"h4\" [appTranslate]=\"'PaymentDetails'\">Payment details</h3>\r\n                            <div>\r\n                                <div>\r\n                                    <b [appTranslate]=\"'CardNumber'\">Card number:</b> xxxx-xxxx-xxxx-xxxx\r\n                                </div>\r\n                                <div>\r\n                                    <b [appTranslate]=\"'CardHolder'\">Card holder:</b> Name &amp; Last Name\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer\">\r\n                <div class='payment-actions'>\r\n                    <div>\r\n                        <button (click)=\"cancel()\" class='btn btn-secondary btn-lg'>\r\n                            <span [appTranslate]=\"'CancelPayment'\">Cancel Payment</span>\r\n                        </button>\r\n                    </div>\r\n                    <div>\r\n                        <button (click)=\"finalizePurchase()\" class='btn btn-primary btn-lg makePayment'>\r\n                            <span *ngIf=\"!registrationInProgress\" [appTranslate]=\"'EmulatePayment'\"><span class=\"fa fa-shopping-cart\"></span>Emulate Payment</span>\r\n                            <span *ngIf=\"registrationInProgress\" [appTranslate]=\"'Processing'\"><span class=\"fa fa-spinner fa-spin\"></span>Processing</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/paymentdemo/payment.demo.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/eventregistration/paymentdemo/payment.demo.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-container {\n  padding-top: 2em;\n  float: right; }\n\n.checkout .card .card-header,\n.checkout .card .card-footer {\n  width: 100%; }\n\n.page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\nbutton:focus.electricblue, button:hover.electricblue {\n  background: #2447b3; }\n\n.makePayment {\n  background: #459fff; }\n\n.payment-actions div {\n  display: block;\n  width: 100%; }\n\n.payment-actions div:nth-child(2) {\n  text-align: right; }\n\n.payment-actions {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9wYXltZW50ZGVtby9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRyZWdpc3RyYXRpb25cXHBheW1lbnRkZW1vXFxwYXltZW50LmRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCOztFQUVJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9wYXltZW50ZGVtby9wYXltZW50LmRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNoZWNrb3V0IC5jYXJkIC5jYXJkLWhlYWRlcixcclxuLmNoZWNrb3V0IC5jYXJkIC5jYXJkLWZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA0MnB4IDAgMjFweDtcclxufSAgICBcclxuYnV0dG9uOmZvY3VzLmVsZWN0cmljYmx1ZSwgYnV0dG9uOmhvdmVyLmVsZWN0cmljYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjQ0N2IzO1xyXG59XHJcblxyXG4ubWFrZVBheW1lbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzQ1OWZmZjtcclxufVxyXG5cclxuLnBheW1lbnQtYWN0aW9ucyBkaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuXHJcbi5wYXltZW50LWFjdGlvbnMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnBheW1lbnQtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/eventregistration/paymentdemo/payment.demo.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/eventregistration/paymentdemo/payment.demo.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDemoComponent", function() { return PaymentDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_browser_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/browser-session.service */ "./src/app/services/browser-session.service.ts");
/* harmony import */ var src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/TranslationKeys */ "./src/app/constants/TranslationKeys.ts");
/* harmony import */ var src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/LocalizableError */ "./src/app/models/LocalizableError.ts");







var PaymentDemoComponent = /** @class */ (function () {
    function PaymentDemoComponent(route, router, eventService, browserSessionService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.browserSessionService = browserSessionService;
    }
    PaymentDemoComponent.prototype.ngOnInit = function () {
        this.total = this.browserSessionService.getRegistrationTotal();
        this.currencySymbol = this.route.snapshot.queryParams['currencySymbol'];
        this.purchaseId = this.route.snapshot.queryParams['purchaseId'];
        this.readableEventId = this.route.snapshot.queryParams['id'];
    };
    PaymentDemoComponent.prototype.cancel = function () {
        this.router.navigate(['/event', this.readableEventId]);
    };
    PaymentDemoComponent.prototype.finalizePurchase = function () {
        var _this = this;
        this.registrationInProgress = true;
        var requestData = {
            purchaseId: this.purchaseId,
            hipObject: this.browserSessionService.getCaptcha()
        };
        this.eventService.finalizeRegistration(this.readableEventId, requestData).subscribe(function (registrationResult) {
            if (registrationResult.status === 'Success') {
                _this.router.navigate(['../confirmation'], {
                    relativeTo: _this.route,
                    queryParams: {
                        id: _this.readableEventId
                    }
                });
            }
            else {
                _this.error = new src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_6__["LocalizableError"](registrationResult.errorMessage, src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_5__["TranslationKeys"].RegistrationFailed);
            }
        }, function (error) { return _this.handleErrorResponse(error); })
            .add(function () {
            _this.registrationInProgress = false;
        });
    };
    PaymentDemoComponent.prototype.handleErrorResponse = function (error) {
        this.error = error;
    };
    PaymentDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-payment-demo',
            template: __webpack_require__(/*! ./payment.demo.html */ "./src/app/components/eventregistration/paymentdemo/payment.demo.html"),
            styles: [__webpack_require__(/*! ./payment.demo.scss */ "./src/app/components/eventregistration/paymentdemo/payment.demo.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _services_browser_session_service__WEBPACK_IMPORTED_MODULE_4__["BrowserSessionService"]])
    ], PaymentDemoComponent);
    return PaymentDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/registration-service.factory.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/eventregistration/registration-service.factory.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrationServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationServiceFactory", function() { return RegistrationServiceFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.service */ "./src/app/components/eventregistration/registration.service.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");
/* harmony import */ var _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/service.providers */ "./src/app/providers/service.providers.ts");






var RegistrationServiceFactory = /** @class */ (function () {
    function RegistrationServiceFactory(eventService, activeEventService, sessionCartService) {
        this.eventService = eventService;
        this.activeEventService = activeEventService;
        this.sessionCartService = sessionCartService;
        this.registrationServices = new Map();
    }
    RegistrationServiceFactory.prototype.create = function (readableEventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registrationService;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.registrationServices.has(readableEventId)) {
                            return [2 /*return*/, this.registrationServices.get(readableEventId)];
                        }
                        registrationService = new _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"](this.eventService, this.activeEventService, this.sessionCartService, readableEventId);
                        return [4 /*yield*/, registrationService.initializeRegistration()];
                    case 1:
                        _a.sent();
                        this.registrationServices.set(readableEventId, registrationService);
                        return [2 /*return*/, registrationService];
                }
            });
        });
    };
    /**
     * This method should be called as soon as the registration service for the specified
     * readable event id is not needed anymore.
     */
    RegistrationServiceFactory.prototype.dispose = function (readableEventId) {
        if (this.registrationServices.has(readableEventId)) {
            var registrationServiceToDispose = this.registrationServices.get(readableEventId);
            registrationServiceToDispose.dispose();
            this.registrationServices.delete(readableEventId);
        }
    };
    RegistrationServiceFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_3__["ActiveEventService"],
            _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_4__["SessionCartService"]])
    ], RegistrationServiceFactory);
    return RegistrationServiceFactory;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/registration.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/eventregistration/registration.service.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


/**
 * This service is supposed contain all business logic required for making a registration (event and session).
 * For now, it only contains the logic for session registration.
 * For the future we will extract all the business logic that is within the view components into
 * this service (or, if required multiple services).
 */
var RegistrationService = /** @class */ (function () {
    function RegistrationService(eventService, activeEventService, sessionCartService, readableEventId) {
        this.eventService = eventService;
        this.activeEventService = activeEventService;
        this.sessionCartService = sessionCartService;
        this._attendees = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._sessionsInCart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._canUserChooseAutoRegisterFunctionality = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.subscriptions = [];
        this.readableEventId = readableEventId;
        this.attendees$ = this._attendees.asObservable();
        this.sessionsInCart$ = this._sessionsInCart.asObservable();
        this.canUserChooseAutoRegisterFunctionality$ = this._canUserChooseAutoRegisterFunctionality.asObservable();
    }
    /**
     * Retrieves and subscribes to all data that is required for a registration.
     */
    RegistrationService.prototype.initializeRegistration = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.retrieveAndSubscribeToEvent()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.retrieveAndSubscribeToEventRegistrationCount()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.retrieveAndSubscribeToPasses()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.retrieveAndSubscribeToSessionCart()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        _a = this;
                        return [4 /*yield*/, this.activeEventService.getSessions(this.readableEventId).toPromise()];
                    case 6:
                        _a.sessions = _c.sent();
                        this.showSessions = this.sessions && this.sessions.length > 0;
                        return [3 /*break*/, 8];
                    case 7:
                        _b = _c.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    RegistrationService.prototype.addAttendee = function (attendeeToAdd) {
        this._attendees.getValue().push(attendeeToAdd);
        this.updateAllAttendeesSessionRegistrationData();
    };
    RegistrationService.prototype.removeAttendee = function (indexOfAttendeeToRemove) {
        this._attendees.getValue().splice(indexOfAttendeeToRemove, 1);
        this.updateAllAttendeesSessionRegistrationData();
    };
    // NOTE: This logic does not really belong here. It should be within the event model.
    // However, as we currently have no separation between models and DTOs, all models are implemented as
    // interfaces. Therefore, it's currently not possible to move this logic to the model.
    RegistrationService.prototype.isPaidEvent = function () {
        if (this.event == null || this.passes == null) {
            return false;
        }
        return this.passes.length > 0;
    };
    /**
     * Specified whether the registration contains event or session waitlist items.
     */
    RegistrationService.prototype.isEventOrAnySessionFull = function () {
        if (this.isEventFull()) {
            return true;
        }
        if (this.isAnySessionFull()) {
            return true;
        }
        return false;
    };
    RegistrationService.prototype.isEventFull = function () {
        if (this.getAvailableEventCapacity() <= 0) {
            return true;
        }
        return false;
    };
    RegistrationService.prototype.isAnySessionFull = function () {
        var _this = this;
        var isAnySessionFull = this._sessionsInCart.getValue().filter(function (session) { return _this.isSessionFull(session); });
        return isAnySessionFull.length > 0;
    };
    /**
     * Returns the available capacity of the event. Attendees in checkout process are included.
     * If max capacity is not restricted, MAX_INT is returned.
     */
    RegistrationService.prototype.getAvailableEventCapacity = function () {
        if (!this.event.isCapacityRestricted) {
            return Number.MAX_SAFE_INTEGER;
        }
        return (this.event.maxCapacity -
            this.eventRegistrationCount -
            this._attendees.getValue().length);
    };
    RegistrationService.prototype.dispose = function () {
        this._sessionsInCart.complete();
        this._attendees.complete();
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    /**
     * Updates the session information (e.g. is session waitlisted for certain attendee or not) for all attendees.
     * This function should always be triggered when there is a change in the number of attendees or sessions.
     */
    RegistrationService.prototype.updateAllAttendeesSessionRegistrationData = function () {
        var _this = this;
        if (!this.isSessionCartEnabled()) {
            // no need to update attendee registration data if session registration is not allowed.
            return;
        }
        var attendees = this._attendees.getValue();
        var _loop_1 = function (i) {
            var attendee = attendees[i];
            attendee.attendeeSessions = this_1._sessionsInCart
                .getValue()
                .map(function (session) {
                var isSessionFull = false;
                if (session.registrationCount + i >= session.maxCapacity &&
                    session.isCapacityRestricted &&
                    _this.event.showWaitlist) {
                    isSessionFull = true;
                }
                var attendeeSession = {
                    sessionId: session.id,
                    waitlisted: isSessionFull
                };
                return attendeeSession;
            });
        };
        var this_1 = this;
        for (var i = 0; i < attendees.length; i++) {
            _loop_1(i);
        }
        this._attendees.next(attendees);
    };
    /**
     * Specifies whether the user is allowed to enable auto event registration functionality for waitlist or not.
     */
    RegistrationService.prototype.updateCanUserChooseAutoRegisterFunctionality = function () {
        if (!this.event.showAutomaticRegistrationCheckbox) {
            this._canUserChooseAutoRegisterFunctionality.next(false);
            return;
        }
        if (this.event.autoregisterWaitlistItems) {
            this._canUserChooseAutoRegisterFunctionality.next(false);
            return;
        }
        if (this.passes != null && this.passes.length > 0) {
            this._canUserChooseAutoRegisterFunctionality.next(false);
            return;
        }
        if (!this.isEventOrAnySessionFull()) {
            this._canUserChooseAutoRegisterFunctionality.next(false);
            return;
        }
        this._canUserChooseAutoRegisterFunctionality.next(true);
    };
    // Note: This function should be refactored to session model (as soon as there are models and not only DTOs).
    RegistrationService.prototype.isSessionFull = function (session) {
        if (!session.isCapacityRestricted) {
            return false;
        }
        if (session.registrationCount + this._attendees.getValue().length < session.maxCapacity) {
            return false;
        }
        return true;
    };
    RegistrationService.prototype.isSessionCartEnabled = function () {
        return this.sessionCartService.isSessionCartEnabledForEvent(this.event, !this.isPaidEvent(), this._sessionsInCart.getValue().length > 0);
    };
    RegistrationService.prototype.refreshSessionsInCart = function (sessionIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sessionsInCart;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activeEventService.getAndFilterSessions(this.readableEventId, true, sessionIds).toPromise()];
                    case 1:
                        sessionsInCart = _a.sent();
                        this._sessionsInCart.next(sessionsInCart);
                        this.updateAllAttendeesSessionRegistrationData();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationService.prototype.retrieveAndSubscribeToEventRegistrationCount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateEventRegistrationCount, subscription;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateEventRegistrationCount = function (eventRegistrationCount) {
                            _this.eventRegistrationCount = eventRegistrationCount;
                            _this.updateCanUserChooseAutoRegisterFunctionality();
                        };
                        return [4 /*yield*/, this.eventService
                                .getEventRegistrationCount(this.readableEventId)
                                .toPromise()
                                .then(updateEventRegistrationCount)];
                    case 1:
                        _a.sent();
                        subscription = this.eventService
                            .getEventRegistrationCount(this.readableEventId)
                            .subscribe(updateEventRegistrationCount);
                        this.subscriptions.push(subscription);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationService.prototype.retrieveAndSubscribeToEvent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateEvent, subscription;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateEvent = function (event) {
                            _this.event = event;
                            _this.updateCanUserChooseAutoRegisterFunctionality();
                        };
                        return [4 /*yield*/, this.activeEventService
                                .getEvent(this.readableEventId)
                                .toPromise()
                                .then(updateEvent)];
                    case 1:
                        _a.sent();
                        subscription = this.activeEventService
                            .getEvent(this.readableEventId)
                            .subscribe(updateEvent);
                        this.subscriptions.push(subscription);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationService.prototype.retrieveAndSubscribeToPasses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updatePasses, subscription;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updatePasses = function (passes) {
                            _this.passes = passes;
                            _this.updateCanUserChooseAutoRegisterFunctionality();
                        };
                        return [4 /*yield*/, this.eventService
                                .getPasses(this.readableEventId)
                                .toPromise()
                                .then(updatePasses)];
                    case 1:
                        _a.sent();
                        subscription = this.activeEventService
                            .getPasses(this.readableEventId)
                            .subscribe(updatePasses);
                        this.subscriptions.push(subscription);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationService.prototype.retrieveAndSubscribeToSessionCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateSessionCart, sessionIdsInCart, subscription;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateSessionCart = function (sessionCart) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.refreshSessionsInCart(sessionCart)];
                                    case 1:
                                        _a.sent();
                                        this.updateCanUserChooseAutoRegisterFunctionality();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        sessionIdsInCart = this.sessionCartService.getSessionCartForEvent(this.readableEventId);
                        return [4 /*yield*/, updateSessionCart(sessionIdsInCart)];
                    case 1:
                        _a.sent();
                        subscription = this.sessionCartService
                            .sessionCartChange
                            .subscribe(updateSessionCart);
                        this.subscriptions.push(subscription);
                        return [2 /*return*/];
                }
            });
        });
    };
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/components/eventregistration/session-selection/session-selection.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/session-selection/session-selection.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"isSessionCartEnabled\" class=\"m-2 mb-3\">\r\n    <h3 class=\"h4\" [appTranslate]=\"'SelectedSessions'\">Selected Sessions</h3>\r\n    <app-sessions-list-view\r\n        [readableEventId]=\"readableEventId\"\r\n        [sessions]=\"sessionsInCart$ | async\"\r\n        [isEventWaitlisted]=\"event.showWaitlist\"\r\n        [cntActiveAttendeeRegistrations]=\"attendees$.length | async\"\r\n        class=\"selected-sessions\">\r\n    </app-sessions-list-view>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/eventregistration/session-selection/session-selection.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/eventregistration/session-selection/session-selection.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.align-left) h3.h4 {\n  text-align: left;\n  padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHJlZ2lzdHJhdGlvbi9zZXNzaW9uLXNlbGVjdGlvbi9DOlxcVXNlcnNcXEFMX0tNXFxEZXNrdG9wXFxBcmJlaXRcXElGQlxccmVsZWFzZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnRyZWdpc3RyYXRpb25cXHNlc3Npb24tc2VsZWN0aW9uXFxzZXNzaW9uLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnRyZWdpc3RyYXRpb24vc2Vzc2lvbi1zZWxlY3Rpb24vc2Vzc2lvbi1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5hbGlnbi1sZWZ0KSBoMy5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/eventregistration/session-selection/session-selection.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/eventregistration/session-selection/session-selection.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SessionSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionSelectionComponent", function() { return SessionSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../event/session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");
/* harmony import */ var _registration_service_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration-service.factory */ "./src/app/components/eventregistration/registration-service.factory.ts");





var SessionSelectionComponent = /** @class */ (function () {
    function SessionSelectionComponent(activeEventService, sessionCartService, registrationServiceFactory) {
        this.activeEventService = activeEventService;
        this.sessionCartService = sessionCartService;
        this.registrationServiceFactory = registrationServiceFactory;
    }
    SessionSelectionComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.registrationServiceFactory.create(this.readableEventId)];
                    case 1:
                        _a.registrationService = _b.sent();
                        this.sessionsInCart$ = this.registrationService.sessionsInCart$;
                        this.attendees$ = this.registrationService.attendees$;
                        this.activeEventService.getEvent(this.readableEventId).subscribe(function (event) {
                            _this.event = event;
                            _this.setIsSessionCartAllowed();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionSelectionComponent.prototype.setIsSessionCartAllowed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hasEventSessions, isFreeEvent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activeEventService.hasEventSessions(this.readableEventId)];
                    case 1:
                        hasEventSessions = _a.sent();
                        return [4 /*yield*/, this.activeEventService.isFreeEvent(this.readableEventId)];
                    case 2:
                        isFreeEvent = _a.sent();
                        this.isSessionCartEnabled = this.sessionCartService.isSessionCartEnabledForEvent(this.event, isFreeEvent, hasEventSessions);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SessionSelectionComponent.prototype, "readableEventId", void 0);
    SessionSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-session-selection",
            template: __webpack_require__(/*! ./session-selection.component.html */ "./src/app/components/eventregistration/session-selection/session-selection.component.html"),
            styles: [__webpack_require__(/*! ./session-selection.component.scss */ "./src/app/components/eventregistration/session-selection/session-selection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_3__["ActiveEventService"],
            _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_2__["SessionCartService"],
            _registration_service_factory__WEBPACK_IMPORTED_MODULE_4__["RegistrationServiceFactory"]])
    ], SessionSelectionComponent);
    return SessionSelectionComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small bg-primary p-2\">\r\n    <div class=\"footer-copyright text-center py-2\">\r\n        <img src=\"../../../assets/images/ifb-logo.svg\" />\r\n    </div>\r\n    <div class=\"footer-copyright text-center text-dark py-2\">\r\n        <p>© 2020 | ifb - Institut zur Fortbildung von Betriebsräten KG\r\n            <br />\r\n            Prof.-Becker-Weg 16, 82418 Seehausen am Staffelsee\r\n            <br />\r\n            Alle Rechte vorbehalten. Alle Angaben & Inhalte ohne Gewähr</p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  z-index: 99999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxBTF9LTVxcRGVza3RvcFxcQXJiZWl0XFxJRkJcXHJlbGVhc2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container m-5\" *ngIf=\"isLoading\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!isLoading\">\r\n    <div class=\"container event-banner\" [style.background-image]=\"'url(../../../assets/images/default-event-image.jpg)'\">\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md-6 offset-md-3\">\r\n                    <h1 class=\"m-b-5\">Seminarthemen Übersicht - Von Grundlagen bis zu Spezialseminaren</h1>\r\n                    <h2 class=\"m-b-10\">Entdecken Sie die Vielfalt an Weiterbildungen für Betriebsräte und Interessenvertreter</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"error\">\r\n        <app-errormessage\r\n            [serverErrorMessage]=\"error.message\"\r\n            [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n\r\n    <div *ngIf=\"allEvents\" class=\"container mt-5\" id=\"all-events\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-md-12 col-lg-12\" attr.data-href=\"/event?id={{ event.readableEventId }}\" *ngFor=\"let event of allEvents\">\r\n                <div class=\"card mx-auto mb-2\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"float-right\">\r\n                            <a [routerLink]=\"['/event']\" [queryParams]=\"{id: event.readableEventId}\" title=\"{{ event.eventName }}\" [attr.aria-label]=\"getAreaLabel(event)\">\r\n                                <i class=\"ifb-icon-arrow fs-24 c-red\"></i>\r\n                            </a>\r\n                        </div>\r\n                        <h5 class=\"card-title\">\r\n                            {{ event.eventName }}\r\n                        </h5>\r\n                        <h6 *ngIf=\"event.building\" class=\"card-subtitle mb-2 text-dark\">at {{ event.building.name }} </h6>\r\n                    </div>\r\n                    <div class=\"card-footer text-white bg-secondary\" >\r\n                       {{ getDateString(event) }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  margin: 42px 0 21px; }\n\na {\n  color: #bf1d2e; }\n\nh1 {\n  font-size: 38px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  line-height: 50px; }\n\n.h2, h2 {\n  font-size: 24px;\n  line-height: 36px;\n  font-weight: 400;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\nh1, h2 {\n  font-family: Fira Sans,sans-serif; }\n\n.event-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 100%;\n  background-size: cover;\n  text-align: center;\n  color: #eee;\n  background-color: #778899;\n  height: 420px;\n  background-position: center center;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcQUxfS01cXERlc2t0b3BcXEFyYmVpdFxcSUZCXFxyZWxlYXNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBRUksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogNDJweCAwIDIxcHg7XHJcbn1cclxuXHJcbmFcclxue1xyXG4gICAgY29sb3I6ICNiZjFkMmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaDIsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oMSwgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEZpcmEgU2FucyxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZXZlbnQtYmFubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3ODg5OTtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventService) {
        this.eventService = eventService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPublishedEvents();
    };
    HomeComponent.prototype.loadPublishedEvents = function () {
        var _this = this;
        this.isLoading = true;
        this.eventService.getPublishedEvents().subscribe(function (events) {
            _this.allEvents = events;
            _this.isLoading = false;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    HomeComponent.prototype.handleErrorResponse = function (error) {
        this.error = error;
        this.isLoading = false;
    };
    HomeComponent.prototype.getAreaLabel = function (event) {
        var date = this.getDateString(event);
        var building = event.building ? "at " + event.building.name : "";
        return event.eventName + " on " + date + " " + building;
    };
    HomeComponent.prototype.getDateString = function (event) {
        var startDate = new Date(event.startDate.toString());
        var endDate = new Date(event.endDate.toString());
        var locale = undefined;
        var dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        var timeOptions = { hour: 'numeric', minute: 'numeric' };
        var includeTime = startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth() && startDate.getDate() === endDate.getDate();
        if (includeTime) {
            return startDate.toLocaleDateString(locale, dateOptions) + " " + startDate.toLocaleTimeString(locale, timeOptions) + " - " + endDate.toLocaleTimeString(locale, timeOptions);
        }
        return startDate.toLocaleDateString(locale, dateOptions) + " - " + endDate.toLocaleDateString(locale, dateOptions);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/myregistrations/myregistrations.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/myregistrations/myregistrations.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"cntActiveDataRetrievals > 0\">\r\n    <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"cntActiveDataRetrievals === 0\">\r\n    <div class=\"container\">\r\n        <div class=\"page-header\">\r\n            <h1 [appTranslate]=\"'MyRegistrations'\">My registrations</h1>\r\n        </div>\r\n        <div class=\"alert alert-secondary\" [appTranslate]=\"'WaitForRegistrationsToAppear'\">Please note there can be a delay in processing your registrations.</div>\r\n    </div>\r\n    <div class=\"separator\"></div>\r\n\r\n    <div *ngIf=\"errorMessage\" class=\"container\">\r\n        <app-errormessage\r\n            [serverErrorMessage]=\"error.message\"\r\n            [errorMessageTranslationKey]=\"error.localizationKey\">\r\n        </app-errormessage>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"!registrations || registrations.length == 0\">\r\n        <div class=\"myRegistrations\"><span [appTranslate]=\"'NoRegistrationsFound'\">No registrations found</span></div>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"registrations && registrations.length > 0\">\r\n        <div class=\"accordion\" id=\"accordionId\">\r\n            <ng-template ngFor let-i=\"index\" let-registration [ngForOf]=\"registrations\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\" data-toggle=\"collapse\" [attr.id]=\"'heading' + i\" [attr.data-target]=\"'#collapse' + i\" aria-expanded=\"false\" [attr.aria-controls]=\"'collapse' + i\">\r\n                        <div class=\"d-flex display-button\">\r\n                            <div class=\"set-min-width\">\r\n                                <div class=\"w-100 justify-content-between\">\r\n                                    <div class=\"mb-1\">\r\n                                        <h2 class=\"text-truncate h5\">\r\n                                            <span class=\"mr-2\">{{ registration.event }}</span>\r\n                                            <span class=\"h6\">\r\n                                                <span *ngIf=\"registration.sessionRegistrations != null && registration.sessionRegistrations.length > 0\" class=\"badge badge-primary badge-pill showMore\" [appTranslate]=\"'ShowSessions'\">show sessions</span>\r\n                                            </span>\r\n                                        </h2>\r\n                                    </div>\r\n                                    <div>\r\n                                        <label class=\"mb-0 text-truncate set-max-width\"><b [appTranslate]=\"'Name'\">Name</b><b>:</b> {{ registration.contact }}</label>\r\n                                    </div>\r\n                                    <div>\r\n                                            <label class=\"mb-0 text-truncate set-max-width\"><b [appTranslate]=\"'Email'\">Email</b><b class=\"mr-1\">:</b>{{ registration.email }}</label>\r\n                                    </div>\r\n                                    <div *ngIf=\"registration.pass != ''\">\r\n                                        <label class=\"mb-0\"><b [appTranslate]=\"'Pass'\">Pass</b><b>:</b> {{ registration.pass }}</label>\r\n                                    </div>\r\n                                    <div>\r\n                                        <label class=\"mb-0\"><b [appTranslate]=\"'RegisteredSince'\">Registered since</b><b>:</b> {{ registration.createdon | date:'medium' }}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"ml-auto align-self-center button-large\">\r\n                                    <button type=\"button\" (click)=\"cancelRegistration(registration.id)\" class=\"btn btn-danger button-large\" [appTranslate]=\"'Cancel'\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div [attr.id]=\"'collapse' + i\" class=\"collapse\" [attr.aria-labelledby]=\"'heading' + i\" data-parent=\"#accordionId\" *ngIf=\"registration.sessionRegistrations != null && registration.sessionRegistrations.length > 0\">\r\n                        <div class=\"card-body\">\r\n                            <ul class=\"list-group\">\r\n                                <li class=\"list-group-item list-group-item-action flex-column align-items-start\" *ngFor=\"let sessionRegistration of registration.sessionRegistrations\">\r\n                                    <div class=\"d-flex\">\r\n                                        <div class=\"d-flex w-100 justify-content-between\">\r\n                                            <h3 class=\"session-name h6 mb-1\">{{sessionRegistration.sessionName}}</h3>\r\n                                        </div>\r\n                                        <div class=\"ml-auto align-self-center\">\r\n                                            <button type=\"button\" (click)=\"cancelRegistration(sessionRegistration.id)\" class=\"btn btn-danger btn-sm\" [appTranslate]=\"'Cancel'\">Cancel</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"page-header\">\r\n            <h1 [appTranslate]=\"'MyWaitlistItems'\">My waitlist items</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"separator\"></div>\r\n\r\n    <div class=\"container\" *ngIf=\"!waitlistItems || waitlistItems.length == 0\">\r\n        <div class=\"myRegistrations\"><span [appTranslate]=\"'NoWaitlistItemsFound'\">No waitlist items found</span></div>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"waitlistItems && waitlistItems.length > 0\">\r\n        <div *ngFor=\"let waitlistItem of waitlistItems\">\r\n            <app-waitlist-item-card [waitlistItem]=\"waitlistItem\"></app-waitlist-item-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/myregistrations/myregistrations.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/myregistrations/myregistrations.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-container {\n  min-height: 1000px;\n  padding-top: 450px; }\n\n.page-header {\n  padding-top: 30px;\n  margin: 42px 0 21px; }\n\n.myRegistrations {\n  margin-top: 50px; }\n\n.active-row {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.details-row {\n  padding-left: 2rem; }\n\n.showMore {\n  cursor: pointer; }\n\n.set-min-width {\n  min-width: 0; }\n\n.set-max-width {\n  max-width: 100%; }\n\n@media (max-width: 768px) {\n  .display-button {\n    flex-direction: column; }\n  .button-large {\n    width: 100%;\n    padding-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teXJlZ2lzdHJhdGlvbnMvQzpcXFVzZXJzXFxBTF9LTVxcRGVza3RvcFxcQXJiZWl0XFxJRkJcXHJlbGVhc2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG15cmVnaXN0cmF0aW9uc1xcbXlyZWdpc3RyYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQ0FBaUMsRUFBQTs7QUFHckM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFFSTtJQUNJLHNCQUFzQixFQUFBO0VBSTFCO0lBQ0ksV0FBVztJQUNYLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teXJlZ2lzdHJhdGlvbnMvbXlyZWdpc3RyYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NTBweDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA0MnB4IDAgMjFweDtcclxufVxyXG5cclxuLm15UmVnaXN0cmF0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uYWN0aXZlLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXJvdyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaG93TW9yZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZXQtbWluLXdpZHRoIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLnNldC1tYXgtd2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5kaXNwbGF5LWJ1dHRvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi1sYXJnZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/myregistrations/myregistrations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/myregistrations/myregistrations.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyRegistrationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRegistrationsComponent", function() { return MyRegistrationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/TranslationKeys */ "./src/app/constants/TranslationKeys.ts");
/* harmony import */ var src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/LocalizableError */ "./src/app/models/LocalizableError.ts");





var MyRegistrationsComponent = /** @class */ (function () {
    function MyRegistrationsComponent(userService) {
        this.userService = userService;
        this.cntActiveDataRetrievals = 0;
    }
    MyRegistrationsComponent.prototype.ngOnInit = function () {
        this.loadRegistrationsForUser();
        this.loadWaitlistItemsForUser();
    };
    MyRegistrationsComponent.prototype.loadRegistrationsForUser = function () {
        var _this = this;
        this.cntActiveDataRetrievals += 1;
        this.userService.getRegistrationsForUser().subscribe(function (registrations) {
            _this.registrations = registrations;
            _this.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    MyRegistrationsComponent.prototype.loadWaitlistItemsForUser = function () {
        var _this = this;
        this.cntActiveDataRetrievals += 1;
        this.userService.getWaitlistItemsForUser().subscribe(function (waitlistItems) {
            _this.waitlistItems = waitlistItems;
            _this.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    MyRegistrationsComponent.prototype.cancelRegistration = function (registrationId) {
        var _this = this;
        this.cntActiveDataRetrievals += 1;
        this.userService.cancelRegistration(registrationId).subscribe(function (isRegistrationCanceled) {
            if (isRegistrationCanceled) {
                _this.loadRegistrationsForUser();
                _this.loadWaitlistItemsForUser();
                _this.error = null;
            }
            else {
                _this.error = new src_app_models_LocalizableError__WEBPACK_IMPORTED_MODULE_4__["LocalizableError"]('An error occurred while cancelling the registration.', src_app_constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_3__["TranslationKeys"].CancelRegistrationError);
            }
            _this.cntActiveDataRetrievals -= 1;
        }, function (error) { return _this.handleErrorResponse(error); });
    };
    MyRegistrationsComponent.prototype.handleErrorResponse = function (error) {
        this.cntActiveDataRetrievals -= 1;
        this.error = error;
    };
    MyRegistrationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-myregistrations',
            template: __webpack_require__(/*! ./myregistrations.component.html */ "./src/app/components/myregistrations/myregistrations.component.html"),
            styles: [__webpack_require__(/*! ./myregistrations.component.scss */ "./src/app/components/myregistrations/myregistrations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["USER_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MyRegistrationsComponent);
    return MyRegistrationsComponent;
}());



/***/ }),

/***/ "./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"waitlistItem\" class=\"card m-3\">\r\n    <div class=\"card-body m-2\">\r\n        <h5 class=\"card-title mb-1\">\r\n            <h2 *ngIf=\"waitlistItem.session == null || waitlistItem.session ==''\" class=\"h5\">\r\n                <span class=\"mr-2\">{{ waitlistItem.event }}</span>\r\n                <span class=\"h6\">\r\n                    <span class=\"badge badge-pill badge-info\" [appTranslate]=\"'Event'\">Event</span>\r\n                </span>\r\n            </h2>\r\n            <h2 *ngIf=\"waitlistItem.session != null && waitlistItem.session !=''\" class=\"h5\">\r\n                <span class=\"mr-2\">{{ waitlistItem.session }}</span>\r\n                <span class=\"h6\">\r\n                    <span class=\"badge badge-pill badge-info\" [appTranslate]=\"'Session'\">Session</span>\r\n                </span>\r\n            </h2>\r\n        </h5>\r\n        <div class=\"card-text\">\r\n            <p *ngIf=\"waitlistItem.event != null && waitlistItem.session != null && waitlistItem.session !=''\"\r\n                class=\"mb-0 text-truncate set-max-width\">\r\n                <b [appTranslate]=\"'Event'\">Event</b>\r\n                <b class=\"mr-1\">:</b>\r\n                <span>{{ waitlistItem.event }}</span>\r\n            </p>\r\n            <p class=\"mb-0 text-truncate set-max-width\">\r\n                <b [appTranslate]=\"'Name'\">Name</b>\r\n                <b class=\"mr-1\">:</b>\r\n                <span>{{ waitlistItem.contact }}</span>\r\n            </p>\r\n            <p class=\"mb-0 text-truncate set-max-width\">\r\n                <b [appTranslate]=\"'Email'\">Email</b>\r\n                <b class=\"mr-1\">:</b>\r\n                <span>{{ waitlistItem.email }}</span>\r\n            </p>\r\n            <p class=\"mb-0\">\r\n                <b [appTranslate]=\"'AddedSince'\">Registered since</b>\r\n                <b class=\"mr-1\">:</b>\r\n                <span>{{ waitlistItem.createdon | date:'medium' }}</span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXlyZWdpc3RyYXRpb25zL3dhaXRsaXN0LWl0ZW0tY2FyZC93YWl0bGlzdC1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WaitlistItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitlistItemCardComponent", function() { return WaitlistItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WaitlistItemCardComponent = /** @class */ (function () {
    function WaitlistItemCardComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WaitlistItemCardComponent.prototype, "waitlistItem", void 0);
    WaitlistItemCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waitlist-item-card',
            template: __webpack_require__(/*! ./waitlist-item-card.component.html */ "./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.html"),
            styles: [__webpack_require__(/*! ./waitlist-item-card.component.scss */ "./src/app/components/myregistrations/waitlist-item-card/waitlist-item-card.component.scss")]
        })
    ], WaitlistItemCardComponent);
    return WaitlistItemCardComponent;
}());



/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-expand-sm navbar-light bg-white text-dark'>\r\n    <a class=\"navbar-brand pr-3 pl-3 mr-auto\" [routerLink]=\"['/']\" id=\"home-button\">\r\n        <img src=\"../../../assets/images/1200px-Ifb_logo.svg.png\" width=\"80\" />\r\n    </a>\r\n\r\n    <a *ngIf=\"showCartItem\" class='ml-3 mr-3 d-block d-sm-none'>\r\n        <button (click)=\"toggleSessionCart()\" class=\"btn btn-outline-primary session-cart-opener\">\r\n            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\">\r\n            </i>\r\n            <span class=\"badge session-cart-count-badge\">{{ sessionCartCount }}</span>\r\n        </button>\r\n    </a>\r\n\r\n    <button (click)=\"toggleNavbar()\" type=\"button\" class=\"navbar-toggler\" data-target=\"navbarCollapse\" data-toggle=\"collapse\"\r\n        data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div [ngClass]=\"{'show': navbarOpen}\" class='navbar-collapse collapse' id='navbarCollapse'>\r\n        <ul class='navbar-nav mr-auto event-title' *ngIf=\"activeEvent\">\r\n            <li class='nav-item event-title-label' [routerLinkActive]=\"['link-active']\">\r\n                <a class=\"navbar-brand d-sm-block text-truncate\" [routerLink]=\"['/event']\" [queryParams]=\"{id: activeEvent.readableEventId}\">\r\n                    {{ activeEvent.eventName }}\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class='navbar-nav ml-auto'>\r\n            <li class=\"nav-item dropdown text-nowrap\">\r\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"languages-dropdown\">\r\n                    <span [appTranslate]=\"'ChangeLanguage'\">Change Language</span>\r\n                </a>\r\n\r\n                <ul class=\"dropdown-menu dropdown-menu-right pre-scrollable\">\r\n                    <li class='nav-item' (click)=\"supportedLanguageChanged(supportedLanguage.lcid);\" *ngFor=\"let supportedLanguage of supportedLanguages$ | async\" >\r\n                                <a class=\"dropdown-item\" href=\"#\">\r\n                                    <span>{{supportedLanguage.label}}</span>\r\n                                </a>\r\n                            </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li class='nav-item text-nowrap' [routerLinkActive]=\"['link-active']\" *ngIf=\"user.isAnonymous && showUserMenu\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/externalLogin']\" *ngIf=\"!activeEvent\" id=\"signin-link\">\r\n                    <span [appTranslate]=\"'SignIn'\">Sign In</span>\r\n                </a>\r\n                <a class=\"nav-link\" [routerLink]=\"['/externalLogin']\" *ngIf=\"activeEvent\" [queryParams]=\"{id: activeEvent.readableEventId}\" id=\"signin-link\">\r\n                    <span [appTranslate]=\"'SignIn'\">Sign In</span>\r\n                </a>\r\n            </li>\r\n\r\n            <li class=\"nav-item text-nowrap dropdown\" *ngIf=\"!user.isAnonymous && showUserMenu\">\r\n                <a class=\"nav-link dropdown-toggle text-nowrap\" data-toggle=\"dropdown\" href=\"#\">\r\n                    <span *ngIf=\"user.firstName\">{{ user.firstName }}</span>\r\n                    <span *ngIf=\"!user.firstName\" [appTranslate]=\"'MyAccount'\">My Account</span>\r\n                    <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                    <li class='nav-item' [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/myregistrations']\">\r\n                            <span [appTranslate]=\"'MyRegistrations'\">My registrations</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class='nav-item' [routerLinkActive]=\"['link-active']\" *ngIf=\"showProfile\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/externalProfile']\" *ngIf=\"!activeEvent\">\r\n                            <span [appTranslate]=\"'Profile'\">Profile</span>\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/externalProfile']\" *ngIf=\"activeEvent\" [queryParams]=\"{id: activeEvent.readableEventId}\">\r\n                            <span [appTranslate]=\"'Profile'\">Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <li class='nav-item' id=\"sign-out-button\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/externalLogout']\" *ngIf=\"!activeEvent\">\r\n                            <span [appTranslate]=\"'SignOut'\">Sign Out</span>\r\n                        </a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/externalLogout']\" *ngIf=\"activeEvent\" [queryParams]=\"{id: activeEvent.readableEventId}\">\r\n                            <span [appTranslate]=\"'SignOut'\">Sign Out</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n\r\n            <li *ngIf=\"showCartItem\" class='ml-3 mr-3 d-none d-sm-block'>\r\n                <button (click)=\"toggleSessionCart()\" class=\"btn btn-outline-primary session-cart-opener\">\r\n                    <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\">\r\n                    </i>\r\n                    <span class=\"badge session-cart-count-badge\">{{ sessionCartCount }}</span>\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  z-index: 1;\n  /*&::after {\r\n        content: \"\";\r\n        top: 100%;\r\n        width:100%;\r\n        margin: 10px 0;\r\n        height: 12px;\r\n        background: linear-gradient(180deg,rgba(0,0,0,.08),transparent);\r\n    }*/ }\n  nav.navbar {\n    border-radius: 0px;\n    border-width: 0px; }\n  nav .navbar-toggler {\n    margin-right: 10px; }\n  nav #navbarCollapse {\n    min-width: 0;\n    padding-left: 10px; }\n  .session-cart-opener .session-cart-count-badge {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: red;\n  color: #fff;\n  position: absolute;\n  border-radius: 50%;\n  top: 50%;\n  width: 18px;\n  height: 18px;\n  transform: translate(20px, 5px); }\n  .event-title {\n  min-width: 0; }\n  .event-title-label {\n  max-width: 100%; }\n  #languages-dropdown {\n  color: #fff; }\n  #signin-link {\n  color: #fff; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZtZW51L0M6XFxVc2Vyc1xcQUxfS01cXERlc2t0b3BcXEFyYmVpdFxcSUZCXFxyZWxlYXNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZtZW51XFxuYXZtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFPVjs7Ozs7OztNQ0NFLEVETUM7RUFmUDtJQUlRLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQUx6QjtJQW1CUSxrQkFBa0IsRUFBQTtFQW5CMUI7SUF1QlEsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBSTFCO0VBRVEsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQixFQUFBO0VBSXZDO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ1EsZUFBZSxFQUFBO0VBR3ZCO0VBQ0ksV0FBVyxFQUFBO0VBR2Y7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICYubmF2YmFyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyomOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDAsMCwwLC4wOCksdHJhbnNwYXJlbnQpO1xyXG4gICAgfSovXHJcblxyXG4gICAgXHJcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2YmFyQ29sbGFwc2Uge1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXNzaW9uLWNhcnQtb3BlbmVyIHtcclxuICAgIC5zZXNzaW9uLWNhcnQtY291bnQtYmFkZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgNXB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLmV2ZW50LXRpdGxlIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmV2ZW50LXRpdGxlLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNsYW5ndWFnZXMtZHJvcGRvd24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWduaW4tbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iLCJuYXYge1xuICB6LWluZGV4OiAxO1xuICAvKiY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMCwwLDAsLjA4KSx0cmFuc3BhcmVudCk7XHJcbiAgICB9Ki8gfVxuICBuYXYubmF2YmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7IH1cbiAgbmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIG5hdiAjbmF2YmFyQ29sbGFwc2Uge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLnNlc3Npb24tY2FydC1vcGVuZXIgLnNlc3Npb24tY2FydC1jb3VudC1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDVweCk7IH1cblxuLmV2ZW50LXRpdGxlIHtcbiAgbWluLXdpZHRoOiAwOyB9XG5cbi5ldmVudC10aXRsZS1sYWJlbCB7XG4gIG1heC13aWR0aDogMTAwJTsgfVxuXG4jbGFuZ3VhZ2VzLWRyb3Bkb3duIHtcbiAgY29sb3I6ICNmZmY7IH1cblxuI3NpZ25pbi1saW5rIHtcbiAgY29sb3I6ICNmZmY7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/labels.service */ "./src/app/services/labels.service.ts");
/* harmony import */ var _app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../app/services/base/user.base.service */ "./src/app/services/base/user.base.service.ts");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/AadB2CHelper */ "./src/app/helpers/AadB2CHelper.ts");
/* harmony import */ var _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event/session-cart/session-cart.service */ "./src/app/components/event/session-cart/session-cart.service.ts");
/* harmony import */ var src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/active-event.service */ "./src/app/services/active-event.service.ts");
/* harmony import */ var _eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../eventregistration/eventregistration.component */ "./src/app/components/eventregistration/eventregistration.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");












var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(activeEventService, sessionCartService, router, route, userService, authHelper, labelsService) {
        this.activeEventService = activeEventService;
        this.sessionCartService = sessionCartService;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.authHelper = authHelper;
        this.labelsService = labelsService;
        this.showCartItem = false;
        this.sessionCartCount = 0;
        this.showUserMenu = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].isAuthenticationEnabled;
        this.showProfile = !src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].useAadB2C;
        this.subscriptions = new Array();
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        this.subscribeToSessionCartCount();
        this.subscribeToEventChange();
        this.subscribeToRouteChange();
        this.getUser();
        this.loadChangeLanguageDropdown();
        this.navbarOpen = false;
    };
    NavMenuComponent.prototype.getUser = function () {
        var _this = this;
        this.user = _app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_2__["UserBaseService"].AnonymousUser;
        var userSubscription = this.userService.getLoggedInUser().subscribe(function (user) {
            _this.user = user;
        }, function (error) { return console.error(error); });
        this.subscriptions.push(userSubscription);
    };
    NavMenuComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    NavMenuComponent.prototype.supportedLanguageChanged = function (languageLcid) {
        this.labelsService.selectLanguage(languageLcid);
    };
    /**
     * Toggles the state (open or collapsed) of the navbar.
     */
    NavMenuComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavMenuComponent.prototype.toggleSessionCart = function () {
        this.sessionCartService.isOpen = !this.sessionCartService.isOpen;
    };
    NavMenuComponent.prototype.subscribeToEventChange = function () {
        var _this = this;
        var routeSubscription = this.route.queryParams.subscribe(function (route) {
            _this.readableEventId = route["id"];
            if (_this.readableEventId) {
                _this.sessionCartCount = _this.sessionCartService.getSessionCartForEvent(_this.readableEventId).length;
                _this.activeEventService.getEvent(_this.readableEventId).toPromise()
                    .then(function (event) {
                    _this.activeEvent = event;
                    _this.setShowCartItem();
                });
            }
            else {
                _this.activeEvent = null;
            }
        });
        this.subscriptions.push(routeSubscription);
    };
    NavMenuComponent.prototype.subscribeToSessionCartCount = function () {
        var _this = this;
        this.sessionCartService.sessionCartChange.subscribe(function (sessionCart) { return (_this.sessionCartCount = sessionCart.length); });
    };
    NavMenuComponent.prototype.subscribeToRouteChange = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; })).subscribe(function (event) {
            _this.setShowCartItem();
        });
    };
    NavMenuComponent.prototype.loadChangeLanguageDropdown = function () {
        this.supportedLanguages$ = this.labelsService.getSupportedLanguages();
    };
    NavMenuComponent.prototype.setShowCartItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isFreeEvent, hasSessions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isCheckoutInProgress() || this.readableEventId == null || this.readableEventId === "") {
                            this.showCartItem = false;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.activeEventService.isFreeEvent(this.readableEventId)];
                    case 1:
                        isFreeEvent = _a.sent();
                        return [4 /*yield*/, this.activeEventService.hasEventSessions(this.readableEventId)];
                    case 2:
                        hasSessions = _a.sent();
                        this.showCartItem = this.sessionCartService.isSessionCartEnabledForEvent(this.activeEvent, isFreeEvent, hasSessions);
                        return [2 /*return*/];
                }
            });
        });
    };
    NavMenuComponent.prototype.isCheckoutInProgress = function () {
        var url = this.router.url;
        return (url.includes(_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_10__["EventCheckoutRoutePaths"].REGISTRATION) ||
            url.includes(_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_10__["EventCheckoutRoutePaths"].PAYMENT) ||
            url.includes(_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_10__["EventCheckoutRoutePaths"].SUCCESS_PAYMENT) ||
            url.includes(_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_10__["EventCheckoutRoutePaths"].CONFIRMATION));
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.scss */ "./src/app/components/navmenu/navmenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_3__["USER_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_active_event_service__WEBPACK_IMPORTED_MODULE_9__["ActiveEventService"],
            _event_session_cart_session_cart_service__WEBPACK_IMPORTED_MODULE_8__["SessionCartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], Object, src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_7__["AadB2CHelper"],
            src_app_services_labels_service__WEBPACK_IMPORTED_MODULE_1__["LabelsService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/pipes/safe.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/components/pipes/safe.pipe.ts ***!
  \***********************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  position: relative;\n  top: 50%;\n  height: 60px;\n  width: 60px;\n  margin: 0px auto;\n  -webkit-animation: rotation .6s infinite linear;\n  animation: rotation .6s infinite linear;\n  border-left: 6px solid rgba(191, 29, 46, 0.15);\n  border-right: 6px solid rgba(191, 29, 46, 0.15);\n  border-bottom: 6px solid rgba(191, 29, 46, 0.15);\n  border-top: 6px solid rgba(191, 29, 46, 0.8);\n  border-radius: 100%; }\n\n@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL0M6XFxVc2Vyc1xcQUxfS01cXERlc2t0b3BcXEFyYmVpdFxcSUZCXFxyZWxlYXNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFHL0MsdUNBQXVDO0VBQ3ZDLDhDQUEwQztFQUMxQywrQ0FBMkM7RUFDM0MsZ0RBQTRDO0VBQzVDLDRDQUF3QztFQUN4QyxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSTtJQUNJLCtCQUErQixFQUFBO0VBR25DO0lBQ0ksaUNBQWlDLEVBQUEsRUFBQTs7QUF3QnpDO0VBQ0k7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHlCQUF5QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW9uIC42cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1vLWFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiYSgxOTEsMjksNDYsLjE1KTtcclxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHJnYmEoMTkxLDI5LDQ2LC4xNSk7XHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiYSgxOTEsMjksNDYsLjE1KTtcclxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCByZ2JhKDE5MSwyOSw0NiwuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/components/spinner/spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/constants/TranslationKeys.ts":
/*!**********************************************!*\
  !*** ./src/app/constants/TranslationKeys.ts ***!
  \**********************************************/
/*! exports provided: TranslationKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationKeys", function() { return TranslationKeys; });
var TranslationKeys = /** @class */ (function () {
    function TranslationKeys() {
    }
    TranslationKeys.RegistrationFailed = 'RegistrationFailed';
    TranslationKeys.CancelRegistrationError = 'CancelRegistrationError';
    TranslationKeys.CommunicationError = 'CommunicationError';
    TranslationKeys.RefreshPage = 'RefreshPage';
    TranslationKeys.AnonymousAccessNotAllowedError = 'AnonymousAccessNotAllowedError';
    TranslationKeys.EventCapacityExceeding = 'EventCapacityExceeding';
    TranslationKeys.EventCapacityReached = 'EventCapacityReached';
    return TranslationKeys;
}());



/***/ }),

/***/ "./src/app/directives/defaultImage.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/defaultImage.directive.ts ***!
  \******************************************************/
/*! exports provided: DefaultImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImage", function() { return DefaultImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultImage = /** @class */ (function () {
    function DefaultImage() {
    }
    DefaultImage.prototype.updateUrl = function () {
        if (this.src != this.defaultSrc) {
            this.src = this.defaultSrc;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DefaultImage.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DefaultImage.prototype, "defaultSrc", void 0);
    DefaultImage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'img[defaultSrc]',
            host: {
                '(error)': 'updateUrl()',
                '[src]': 'src'
            }
        })
    ], DefaultImage);
    return DefaultImage;
}());



/***/ }),

/***/ "./src/app/directives/translate.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/translate.directive.ts ***!
  \***************************************************/
/*! exports provided: TranslateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_labels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/labels.service */ "./src/app/services/labels.service.ts");



var TranslateDirective = /** @class */ (function () {
    function TranslateDirective(el, renderer, labelService) {
        this.el = el;
        this.renderer = renderer;
        this.labelService = labelService;
    }
    TranslateDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.labelService.getLabelsModel().subscribe(function (labelsModel) {
            if (labelsModel.labels[_this.appTranslate] !== undefined) {
                _this.renderer.setProperty(_this.el.nativeElement, 'innerText', labelsModel.labels[_this.appTranslate]);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TranslateDirective.prototype, "appTranslate", void 0);
    TranslateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTranslate]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_labels_service__WEBPACK_IMPORTED_MODULE_2__["LabelsService"]])
    ], TranslateDirective);
    return TranslateDirective;
}());



/***/ }),

/***/ "./src/app/guards/is.authenticated.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/is.authenticated.guard.ts ***!
  \**************************************************/
/*! exports provided: IsAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return IsAuthenticatedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_service_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(userService) {
        this.userService = userService;
    }
    IsAuthenticatedGuard.prototype.canActivate = function () {
        return this.userService.isLoggedIn();
    };
    IsAuthenticatedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_service_providers__WEBPACK_IMPORTED_MODULE_1__["USER_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/helpers/AadB2CHelper.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/AadB2CHelper.ts ***!
  \*****************************************/
/*! exports provided: AadB2CHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AadB2CHelper", function() { return AadB2CHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! msal */ "./node_modules/msal/lib-commonjs/index.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(msal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var msal_lib_commonjs_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! msal/lib-commonjs/Constants */ "./node_modules/msal/lib-commonjs/Constants.js");
/* harmony import */ var msal_lib_commonjs_Constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(msal_lib_commonjs_Constants__WEBPACK_IMPORTED_MODULE_4__);





var AadB2CHelper = /** @class */ (function () {
    function AadB2CHelper() {
        this.tenantConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].aadB2CConfig;
        // Configure the authority for Azure AD B2C
        // tslint:disable-next-line:max-line-length
        this.authority = "https://" + this.tenantConfig.authorityHost + "/tfp/" + this.tenantConfig.tenant + "/" + this.tenantConfig.signUpSignInPolicy;
        /*
        * B2C SignIn SignUp Policy Configuration
        */
        this.clientApplication = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].useAadB2C
            ? new msal__WEBPACK_IMPORTED_MODULE_3__["UserAgentApplication"](this.tenantConfig.clientID, this.authority, function (errorDesc, token, error, tokenType) {
                // Called after loginRedirect or acquireTokenPopup
            }, {
                validateAuthority: false,
                redirectUri: this.tenantConfig.redirectUri
            })
            : null;
    }
    AadB2CHelper.prototype.login = function () {
        var _this = this;
        return this.clientApplication
            .loginPopup(this.tenantConfig.b2cScopes)
            .then(function () { return _this.clientApplication.acquireTokenSilent(_this.tenantConfig.b2cScopes); })
            .catch(function (error) {
            var errorMessage = error;
            if (!_this.didUserCancel(errorMessage)) {
                console.error('Error occurred during acquiring token silently: ' + errorMessage);
                // try to send interactive request since AcquireTokenSilent failed
                return _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes);
            }
        });
    };
    AadB2CHelper.prototype.didUserCancel = function (errorMessage) {
        var errorMessageSplitCharacter = '|';
        if (errorMessage && errorMessage.includes(errorMessageSplitCharacter)) {
            var errorCode = errorMessage.split(errorMessageSplitCharacter);
            return errorCode[0] === msal_lib_commonjs_Constants__WEBPACK_IMPORTED_MODULE_4__["ErrorCodes"].userCancelledError;
        }
        return false;
    };
    AadB2CHelper.prototype.logout = function () {
        this.clientApplication.logout();
    };
    AadB2CHelper.prototype.aquireToken = function () {
        var _this = this;
        return this.clientApplication
            .acquireTokenSilent(this.tenantConfig.b2cScopes)
            .catch(function () { return _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes); });
    };
    AadB2CHelper.prototype.aquireTokenSilent = function () {
        return this.clientApplication.acquireTokenSilent(this.tenantConfig.b2cScopes);
    };
    AadB2CHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AadB2CHelper);
    return AadB2CHelper;
}());



/***/ }),

/***/ "./src/app/helpers/ErrorHelper.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/ErrorHelper.ts ***!
  \****************************************/
/*! exports provided: ErrorHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHelper", function() { return ErrorHelper; });
/* harmony import */ var src_app_models_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/ErrorResponse */ "./src/app/models/ErrorResponse.ts");
/* harmony import */ var _constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/TranslationKeys */ "./src/app/constants/TranslationKeys.ts");
/* harmony import */ var _models_LocalizableError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LocalizableError */ "./src/app/models/LocalizableError.ts");



var ErrorHelper = /** @class */ (function () {
    function ErrorHelper() {
    }
    ErrorHelper.getLocalizableErrorForErrorResponse = function (error) {
        if (error == null) {
            return this.getGenericCommunicationFailureError();
        }
        if (error.correlationId === '0') {
            return this.getRefreshPageError();
        }
        if (error.type == null || error.type === '') {
            return this.getGenericCommunicationFailureError();
        }
        else {
            return this.getErrorForErrorResponseType(error.type);
        }
    };
    ErrorHelper.getGenericCommunicationFailureError = function () {
        return new _models_LocalizableError__WEBPACK_IMPORTED_MODULE_2__["LocalizableError"]('There was an issue when communicating with the server.', _constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_1__["TranslationKeys"].CommunicationError);
    };
    ErrorHelper.getRefreshPageError = function () {
        return new _models_LocalizableError__WEBPACK_IMPORTED_MODULE_2__["LocalizableError"]('The session has expired. Please refresh the page to continue.', _constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_1__["TranslationKeys"].RefreshPage);
    };
    ErrorHelper.getAnonymousAccessNotAllowedError = function () {
        return new _models_LocalizableError__WEBPACK_IMPORTED_MODULE_2__["LocalizableError"]('You must sign-in in order to continue.', _constants_TranslationKeys__WEBPACK_IMPORTED_MODULE_1__["TranslationKeys"].AnonymousAccessNotAllowedError);
    };
    ErrorHelper.getErrorForErrorResponseType = function (errorType) {
        switch (errorType) {
            case src_app_models_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__["ErrorResponseType"].EndpointNotFound:
            case src_app_models_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__["ErrorResponseType"].InternalServerError:
            case src_app_models_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__["ErrorResponseType"].OnlyHttpPostAllowed:
            case src_app_models_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__["ErrorResponseType"].OnlyHttpsAllowed:
                return this.getGenericCommunicationFailureError();
            case src_app_models_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__["ErrorResponseType"].AnonymousAccessNotAllowed:
                return this.getAnonymousAccessNotAllowedError();
        }
    };
    return ErrorHelper;
}());



/***/ }),

/***/ "./src/app/helpers/ImageHelper.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/ImageHelper.ts ***!
  \****************************************/
/*! exports provided: ImageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHelper", function() { return ImageHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ImageHelper = /** @class */ (function () {
    function ImageHelper() {
    }
    ImageHelper.prototype.getImage = function (image, imageUrl) {
        if (image) {
            return "data:image/gif;base64," + image;
        }
        else {
            if (imageUrl != null) {
                return "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + imageUrl;
            }
        }
    };
    ImageHelper.prototype.getImageUrl = function (imageRelativeUrl) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].useRestStack === true) {
            return "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesEndpoint + imageRelativeUrl;
        }
        else {
            return "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + imageRelativeUrl;
        }
    };
    ImageHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageHelper);
    return ImageHelper;
}());



/***/ }),

/***/ "./src/app/helpers/ScrollHelper.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/ScrollHelper.ts ***!
  \*****************************************/
/*! exports provided: ScrollHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollHelper", function() { return ScrollHelper; });
var ScrollHelper = /** @class */ (function () {
    function ScrollHelper() {
    }
    /**
     * Scrolls to a specified element after a short delay of 100ms.
     * @param element The element to scroll to.
     */
    ScrollHelper.scrollToElementWithDelay = function (element) {
        var _this = this;
        setTimeout(function () {
            _this.scrollToElement(element);
        }, 100);
    };
    /**
     * Scrolls to a specified element.
     * @param element The element to scroll to.
     */
    ScrollHelper.scrollToElement = function (element) {
        element.scrollIntoView();
        window.scrollBy(0, -60); // -60 because of the navbar.
    };
    return ScrollHelper;
}());



/***/ }),

/***/ "./src/app/helpers/d365/HttpD365Helper.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/d365/HttpD365Helper.ts ***!
  \************************************************/
/*! exports provided: HttpD365Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpD365Helper", function() { return HttpD365Helper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ErrorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorHelper */ "./src/app/helpers/ErrorHelper.ts");





var HttpD365Helper = /** @class */ (function () {
    function HttpD365Helper(httpClient) {
        this.httpClient = httpClient;
    }
    HttpD365Helper.prototype.get = function (url, authenticationRequired) {
        if (authenticationRequired === void 0) { authenticationRequired = false; }
        return this.httpClient
            .get(this.addTimestamp(url))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.checkForError));
    };
    HttpD365Helper.prototype.post = function (url, body, authenticationRequired) {
        var _this = this;
        if (authenticationRequired === void 0) { authenticationRequired = false; }
        var httpOptions = this.buildHttpOptions();
        return this.httpClient
            .post(this.addTimestamp(url), this.encodeBody(body), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) { return _this.checkForError(value); }));
    };
    HttpD365Helper.prototype.extractValidationToken = function () {
        var validationToken = '';
        var metaTags = document.getElementsByTagName('meta');
        if (metaTags) {
            for (var i = 0; i < metaTags.length; i++) {
                var metaTag = metaTags[i];
                var nameAttribute = metaTag.getAttribute('name');
                var contentAttribute = metaTag.getAttribute('content');
                if (nameAttribute === 'token' && contentAttribute) {
                    validationToken = contentAttribute;
                }
            }
        }
        return validationToken;
    };
    HttpD365Helper.prototype.addTimestamp = function (url) {
        var separator = url.indexOf('?') === -1 ? '?' : '&';
        return "" + url + separator + "ts=" + Date.now();
    };
    HttpD365Helper.prototype.buildHttpOptions = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            validation: this.extractValidationToken()
        });
        return {
            headers: headers
        };
    };
    HttpD365Helper.prototype.encodeBody = function (body) {
        return "json=" + encodeURIComponent(JSON.stringify(body));
    };
    HttpD365Helper.prototype.checkForError = function (result) {
        if (result && typeof result === 'object' && 'error' in result && result['error']) {
            var errorResponse = result['error'];
            console.error('API call resulted with an error.');
            console.error(errorResponse);
            var localizableError = _ErrorHelper__WEBPACK_IMPORTED_MODULE_4__["ErrorHelper"].getLocalizableErrorForErrorResponse(errorResponse);
            throw localizableError;
        }
        else {
            return result;
        }
    };
    HttpD365Helper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HttpD365Helper);
    return HttpD365Helper;
}());



/***/ }),

/***/ "./src/app/helpers/mock/HttpMockHelper.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/mock/HttpMockHelper.ts ***!
  \************************************************/
/*! exports provided: HttpMockHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMockHelper", function() { return HttpMockHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HttpMockHelper = /** @class */ (function () {
    function HttpMockHelper(httpClient) {
        this.httpClient = httpClient;
    }
    HttpMockHelper.prototype.get = function (url, authenticationRequired) {
        var _this = this;
        if (authenticationRequired === void 0) { authenticationRequired = false; }
        url = url + "/get.json";
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.httpClient.get(url).subscribe(observer);
        });
    };
    HttpMockHelper.prototype.post = function (url, body, authenticationRequired) {
        var _this = this;
        if (authenticationRequired === void 0) { authenticationRequired = false; }
        url = url + "/post.json";
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.httpClient.get(url, body).subscribe(observer);
        });
    };
    HttpMockHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HttpMockHelper);
    return HttpMockHelper;
}());



/***/ }),

/***/ "./src/app/helpers/rest/HttpRestHelper.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/rest/HttpRestHelper.ts ***!
  \************************************************/
/*! exports provided: HttpRestHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRestHelper", function() { return HttpRestHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/AadB2CHelper */ "./src/app/helpers/AadB2CHelper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ErrorHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorHelper */ "./src/app/helpers/ErrorHelper.ts");








var HttpRestHelper = /** @class */ (function () {
    function HttpRestHelper(httpClient, aadB2CHelper) {
        this.httpClient = httpClient;
        this.aadB2CHelper = aadB2CHelper;
    }
    HttpRestHelper.prototype.get = function (url, authenticationRequired) {
        var _this = this;
        if (authenticationRequired === void 0) { authenticationRequired = false; }
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            _this.buildHttpOptions(authenticationRequired).then(function (httpOptions) {
                _this.httpClient.get(_this.addApplicationToken(url), httpOptions)
                    .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.handleError))
                    .subscribe(observer);
            });
        });
        return observable;
    };
    HttpRestHelper.prototype.post = function (url, body, authenticationRequired) {
        var _this = this;
        if (authenticationRequired === void 0) { authenticationRequired = false; }
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            _this.buildHttpOptions(authenticationRequired).then(function (httpOptions) {
                _this.httpClient.post(_this.addApplicationToken(url), body, httpOptions)
                    .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.handleError))
                    .subscribe(observer);
            });
        });
        return observable;
    };
    HttpRestHelper.prototype.addApplicationToken = function (url) {
        var separator = url.indexOf('?') !== -1 ? '&' : '?';
        return "" + url + separator + "emApplicationtoken=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emApplicationtoken;
    };
    HttpRestHelper.prototype.buildHttpOptions = function (authenticationRequired) {
        var _this = this;
        var notAuthenticatedHttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var promise = new Promise(function (resolve, reject) {
            var tokenHandler = function (accessToken) {
                if (accessToken && accessToken !== '') {
                    resolve({
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + accessToken
                        })
                    });
                }
                else {
                    resolve(notAuthenticatedHttpOptions);
                }
            };
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].useAadB2C) {
                resolve(notAuthenticatedHttpOptions);
            }
            else if (!authenticationRequired) {
                _this.aadB2CHelper.aquireTokenSilent().then(tokenHandler, function () { return tokenHandler(''); });
            }
            else {
                _this.aadB2CHelper.aquireToken().then(tokenHandler, function () { return tokenHandler(''); });
            }
        });
        return promise;
    };
    HttpRestHelper.prototype.handleError = function (errorResponse) {
        var errorMessage = '';
        if (errorResponse.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = errorResponse.error.message;
            console.error('An error occurred:', errorMessage);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + errorResponse.status + ", " +
                "body was: ");
            console.log(errorResponse.error);
            if (errorResponse.error) {
                errorMessage = errorResponse.error.Message;
            }
        }
        // return an observable with a user-facing error message
        if (errorMessage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new Error(errorMessage));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_ErrorHelper__WEBPACK_IMPORTED_MODULE_7__["ErrorHelper"].getGenericCommunicationFailureError());
        }
    };
    HttpRestHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_1__["AadB2CHelper"]])
    ], HttpRestHelper);
    return HttpRestHelper;
}());



/***/ }),

/***/ "./src/app/models/CustomRegistrationField.ts":
/*!***************************************************!*\
  !*** ./src/app/models/CustomRegistrationField.ts ***!
  \***************************************************/
/*! exports provided: CustomRegistrationField, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRegistrationField", function() { return CustomRegistrationField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
var CustomRegistrationField = /** @class */ (function () {
    function CustomRegistrationField(id, text, type, isRequired, choices) {
        this.arrayItemSeparator = "\u000a";
        this.responseItemSeparator = ", ";
        this.booleanOptionYes = "Yes";
        this.booleanOptionNo = "No";
        this.booleanOptionNoChoice = "NoChoice";
        this.customRegistrationFieldId = id;
        this.text = text;
        this.type = type;
        this.isRequired = isRequired;
        this.choices = choices;
    }
    Object.defineProperty(CustomRegistrationField.prototype, "choicesArray", {
        /**
         * Array representation of the possible choices.
         */
        get: function () {
            if (!this.choices) {
                return null;
            }
            return this.choices.split(this.arrayItemSeparator);
        },
        set: function (newChoices) {
            this.choices = newChoices.join(this.arrayItemSeparator);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomRegistrationField.prototype, "valueAsString", {
        /**
         * Returns the value (response of the user) of this custom field represented as string.
         * If the response contains multiple values (e.g. multiple choice), it is separated by ",".
         * If the response is for a boolean field, true is represented by the string 'Yes',
         * false by the string 'No' and undefined by the string'NoChoice'.
         * @returns The response of the user represented as string. Or null if there is no response.
         */
        get: function () {
            var response = "";
            if (this.value === null) {
                return null;
            }
            switch (this.type) {
                case Types.Boolean:
                    if (this.value === undefined) {
                        response = this.booleanOptionNoChoice;
                    }
                    else {
                        response = this.value;
                    }
                    break;
                case Types.SimpleText:
                case Types.SingleChoice:
                    response = this.value;
                    break;
                case Types.MultipleChoice:
                    response = this.value.join(this.responseItemSeparator);
                    break;
                default:
                    response = "";
            }
            return response;
        },
        set: function (value) {
            if (value == null) {
                return;
            }
            switch (this.type) {
                case Types.Boolean:
                    this.value = value;
                    break;
                case Types.SimpleText:
                case Types.SingleChoice:
                    this.value = value;
                    break;
                case Types.MultipleChoice:
                    this.value = value.split(this.responseItemSeparator);
                    break;
                default:
                    this.value = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a response object of this custom field where the values are represented as string.
     * @returns The response of the user represented as string. Or null if there is no response.
     */
    CustomRegistrationField.prototype.createResponse = function () {
        if (this.valueAsString == null || this.valueAsString === this.booleanOptionNoChoice) {
            return null;
        }
        var response = {
            id: this.customRegistrationFieldId,
            value: this.valueAsString ? this.valueAsString : ''
        };
        return response;
    };
    CustomRegistrationField.prototype.createDeepCopy = function () {
        return new CustomRegistrationField(this.customRegistrationFieldId, this.text, this.type, this.isRequired, this.choices);
    };
    return CustomRegistrationField;
}());

var Types;
(function (Types) {
    Types[Types["SimpleText"] = 100000000] = "SimpleText";
    Types[Types["Boolean"] = 100000001] = "Boolean";
    Types[Types["MultipleChoice"] = 100000002] = "MultipleChoice";
    Types[Types["SingleChoice"] = 100000003] = "SingleChoice";
})(Types || (Types = {}));


/***/ }),

/***/ "./src/app/models/ErrorResponse.ts":
/*!*****************************************!*\
  !*** ./src/app/models/ErrorResponse.ts ***!
  \*****************************************/
/*! exports provided: ErrorResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResponseType", function() { return ErrorResponseType; });
var ErrorResponseType;
(function (ErrorResponseType) {
    ErrorResponseType["EndpointNotFound"] = "EndpointNotFound";
    ErrorResponseType["InternalServerError"] = "InternalServerError";
    ErrorResponseType["OnlyHttpPostAllowed"] = "OnlyHttpPostAllowed";
    ErrorResponseType["AnonymousAccessNotAllowed"] = "AnonymousAccessNotAllowed";
    ErrorResponseType["OnlyHttpsAllowed"] = "OnlyHttpsAllowed";
})(ErrorResponseType || (ErrorResponseType = {}));


/***/ }),

/***/ "./src/app/models/LocalizableError.ts":
/*!********************************************!*\
  !*** ./src/app/models/LocalizableError.ts ***!
  \********************************************/
/*! exports provided: LocalizableError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizableError", function() { return LocalizableError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LocalizableError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalizableError, _super);
    function LocalizableError(message, localizationKey) {
        var _this = _super.call(this, message) || this;
        _this.localizationKey = localizationKey;
        return _this;
    }
    return LocalizableError;
}(Error));



/***/ }),

/***/ "./src/app/providers/http.helper.provider.ts":
/*!***************************************************!*\
  !*** ./src/app/providers/http.helper.provider.ts ***!
  \***************************************************/
/*! exports provided: HTTP_HELPER, HttpHelperProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_HELPER", function() { return HTTP_HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperProvider", function() { return HttpHelperProvider; });
/* harmony import */ var _helpers_d365_HttpD365Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers/d365/HttpD365Helper */ "./src/app/helpers/d365/HttpD365Helper.ts");
/* harmony import */ var _helpers_rest_HttpRestHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/rest/HttpRestHelper */ "./src/app/helpers/rest/HttpRestHelper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/AadB2CHelper */ "./src/app/helpers/AadB2CHelper.ts");
/* harmony import */ var _helpers_mock_HttpMockHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/mock/HttpMockHelper */ "./src/app/helpers/mock/HttpMockHelper.ts");







var HTTP_HELPER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('http.helper');
var httpHelperFactory = function (httpClient, aadB2CHelper) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useMockData) {
        return new _helpers_mock_HttpMockHelper__WEBPACK_IMPORTED_MODULE_6__["HttpMockHelper"](httpClient);
    }
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useRestStack) {
        return new _helpers_rest_HttpRestHelper__WEBPACK_IMPORTED_MODULE_1__["HttpRestHelper"](httpClient, aadB2CHelper);
    }
    else {
        return new _helpers_d365_HttpD365Helper__WEBPACK_IMPORTED_MODULE_0__["HttpD365Helper"](httpClient);
    }
};
var HttpHelperProvider = {
    provide: HTTP_HELPER,
    useFactory: httpHelperFactory,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_5__["AadB2CHelper"]]
};


/***/ }),

/***/ "./src/app/providers/service.providers.ts":
/*!************************************************!*\
  !*** ./src/app/providers/service.providers.ts ***!
  \************************************************/
/*! exports provided: EVENT_SERVICE, SESSION_SERVICE, TRACKS_SERVICE, USER_SERVICE, SPONSORSHIPS_SERVICE, EventServiceProvider, SessionServiceProvider, TracksServiceProvider, UserServiceProvider, SponsorshipsServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SERVICE", function() { return EVENT_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_SERVICE", function() { return SESSION_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACKS_SERVICE", function() { return TRACKS_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SERVICE", function() { return USER_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPONSORSHIPS_SERVICE", function() { return SPONSORSHIPS_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceProvider", function() { return EventServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionServiceProvider", function() { return SessionServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksServiceProvider", function() { return TracksServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceProvider", function() { return UserServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorshipsServiceProvider", function() { return SponsorshipsServiceProvider; });
/* harmony import */ var _services_rest_tracks_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/rest/tracks.rest.service */ "./src/app/services/rest/tracks.rest.service.ts");
/* harmony import */ var _services_d365_tracks_d365_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/d365/tracks.d365.service */ "./src/app/services/d365/tracks.d365.service.ts");
/* harmony import */ var _services_rest_user_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/rest/user.rest.service */ "./src/app/services/rest/user.rest.service.ts");
/* harmony import */ var _services_rest_event_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/rest/event.rest.service */ "./src/app/services/rest/event.rest.service.ts");
/* harmony import */ var _services_d365_event_d365_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/d365/event.d365.service */ "./src/app/services/d365/event.d365.service.ts");
/* harmony import */ var _services_rest_session_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/rest/session.rest.service */ "./src/app/services/rest/session.rest.service.ts");
/* harmony import */ var _services_d365_session_d365_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/d365/session.d365.service */ "./src/app/services/d365/session.d365.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_d365_user_d365_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/d365/user.d365.service */ "./src/app/services/d365/user.d365.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");
/* harmony import */ var _services_rest_sponsorships_rest_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/rest/sponsorships.rest.service */ "./src/app/services/rest/sponsorships.rest.service.ts");
/* harmony import */ var _services_d365_sponsors_d366_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/d365/sponsors.d366.service */ "./src/app/services/d365/sponsors.d366.service.ts");













var EVENT_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('event.service');
var SESSION_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('session.service');
var TRACKS_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('tracks.service');
var USER_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('user.service');
var SPONSORSHIPS_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('sponsors.service');
var eventServiceFactory = function (httpHelper) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].useMockData) {
        _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiEndpoint = './assets/mocks/api/responses/';
    }
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].useRestStack) {
        return new _services_rest_event_rest_service__WEBPACK_IMPORTED_MODULE_3__["EventRestService"](httpHelper);
    }
    else {
        return new _services_d365_event_d365_service__WEBPACK_IMPORTED_MODULE_4__["EventD365Service"](httpHelper);
    }
};
var sessionServiceFactory = function (httpHelper) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].useRestStack) {
        return new _services_rest_session_rest_service__WEBPACK_IMPORTED_MODULE_5__["SessionRestService"](httpHelper);
    }
    else {
        return new _services_d365_session_d365_service__WEBPACK_IMPORTED_MODULE_6__["SessionD365Service"](httpHelper);
    }
};
var tracksServiceFactory = function (httpHelper) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].useRestStack) {
        return new _services_rest_tracks_rest_service__WEBPACK_IMPORTED_MODULE_0__["TracksRestService"](httpHelper);
    }
    else {
        return new _services_d365_tracks_d365_service__WEBPACK_IMPORTED_MODULE_1__["TracksD365Service"](httpHelper);
    }
};
var userServiceFactory = function (httpHelper) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].useRestStack) {
        return new _services_rest_user_rest_service__WEBPACK_IMPORTED_MODULE_2__["UserRestService"](httpHelper);
    }
    else {
        return new _services_d365_user_d365_service__WEBPACK_IMPORTED_MODULE_8__["UserD365Service"](httpHelper);
    }
};
var sponsorshipsServiceFactory = function () {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].useRestStack) {
        return new _services_rest_sponsorships_rest_service__WEBPACK_IMPORTED_MODULE_11__["SponsorshipsRestService"]();
    }
    else {
        return new _services_d365_sponsors_d366_service__WEBPACK_IMPORTED_MODULE_12__["SponsorsD365Service"]();
    }
};
var EventServiceProvider = {
    provide: EVENT_SERVICE,
    useFactory: eventServiceFactory,
    deps: [src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_10__["HTTP_HELPER"]]
};
var SessionServiceProvider = {
    provide: SESSION_SERVICE,
    useFactory: sessionServiceFactory,
    deps: [src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_10__["HTTP_HELPER"]]
};
var TracksServiceProvider = {
    provide: TRACKS_SERVICE,
    useFactory: tracksServiceFactory,
    deps: [src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_10__["HTTP_HELPER"]]
};
var UserServiceProvider = {
    provide: USER_SERVICE,
    useFactory: userServiceFactory,
    deps: [src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_10__["HTTP_HELPER"]]
};
var SponsorshipsServiceProvider = {
    provide: SPONSORSHIPS_SERVICE,
    useFactory: sponsorshipsServiceFactory,
};


/***/ }),

/***/ "./src/app/resolvers/external.login.url.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/resolvers/external.login.url.resolver.ts ***!
  \**********************************************************/
/*! exports provided: ExternalLoginUrlResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLoginUrlResolver", function() { return ExternalLoginUrlResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/AadB2CHelper */ "./src/app/helpers/AadB2CHelper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _external_url_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./external.url.resolver */ "./src/app/resolvers/external.url.resolver.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ExternalLoginUrlResolver = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExternalLoginUrlResolver, _super);
    function ExternalLoginUrlResolver(aadB2CHElper, userService) {
        var _this = _super.call(this) || this;
        _this.aadB2CHElper = aadB2CHElper;
        _this.userService = userService;
        return _this;
    }
    ExternalLoginUrlResolver_1 = ExternalLoginUrlResolver;
    ExternalLoginUrlResolver.isResolverActive = function () {
        return ExternalLoginUrlResolver_1.isActive;
    };
    ExternalLoginUrlResolver.prototype.resolve = function (route) {
        var _this = this;
        ExternalLoginUrlResolver_1.isActive = true;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].useAadB2C) {
            this.aadB2CHElper.login().then(function () { return _this.userService.refreshUser(); }).then(function () { return ExternalLoginUrlResolver_1.isActive = false; });
        }
        else {
            this.redirectToExternalUrl('SignIn', route);
            ExternalLoginUrlResolver_1.isActive = false;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
    };
    var ExternalLoginUrlResolver_1;
    ExternalLoginUrlResolver.isActive = false;
    ExternalLoginUrlResolver = ExternalLoginUrlResolver_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_5__["USER_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_1__["AadB2CHelper"], Object])
    ], ExternalLoginUrlResolver);
    return ExternalLoginUrlResolver;
}(_external_url_resolver__WEBPACK_IMPORTED_MODULE_3__["ExternalUrlResolver"]));



/***/ }),

/***/ "./src/app/resolvers/external.logout.url.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/resolvers/external.logout.url.resolver.ts ***!
  \***********************************************************/
/*! exports provided: ExternalLogoutUrlResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLogoutUrlResolver", function() { return ExternalLogoutUrlResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/AadB2CHelper */ "./src/app/helpers/AadB2CHelper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _external_url_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./external.url.resolver */ "./src/app/resolvers/external.url.resolver.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var ExternalLogoutUrlResolver = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExternalLogoutUrlResolver, _super);
    function ExternalLogoutUrlResolver(aadB2CHElper) {
        var _this = _super.call(this) || this;
        _this.aadB2CHElper = aadB2CHElper;
        return _this;
    }
    ExternalLogoutUrlResolver.prototype.resolve = function (route) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useAadB2C) {
            this.aadB2CHElper.logout();
        }
        else {
            this.redirectToExternalUrl('Account/Login/Logoff', route);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    };
    ExternalLogoutUrlResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_helpers_AadB2CHelper__WEBPACK_IMPORTED_MODULE_1__["AadB2CHelper"]])
    ], ExternalLogoutUrlResolver);
    return ExternalLogoutUrlResolver;
}(_external_url_resolver__WEBPACK_IMPORTED_MODULE_4__["ExternalUrlResolver"]));



/***/ }),

/***/ "./src/app/resolvers/external.profile.url.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/resolvers/external.profile.url.resolver.ts ***!
  \************************************************************/
/*! exports provided: ExternalProfileUrlResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalProfileUrlResolver", function() { return ExternalProfileUrlResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _external_url_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./external.url.resolver */ "./src/app/resolvers/external.url.resolver.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ExternalProfileUrlResolver = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExternalProfileUrlResolver, _super);
    function ExternalProfileUrlResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExternalProfileUrlResolver.prototype.resolve = function (route) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].useAadB2C) {
            this.redirectToExternalUrl('profile', route);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    };
    ExternalProfileUrlResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
    ], ExternalProfileUrlResolver);
    return ExternalProfileUrlResolver;
}(_external_url_resolver__WEBPACK_IMPORTED_MODULE_3__["ExternalUrlResolver"]));



/***/ }),

/***/ "./src/app/resolvers/external.url.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/resolvers/external.url.resolver.ts ***!
  \****************************************************/
/*! exports provided: ExternalUrlResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalUrlResolver", function() { return ExternalUrlResolver; });
var ExternalUrlResolver = /** @class */ (function () {
    function ExternalUrlResolver() {
    }
    ExternalUrlResolver.prototype.redirectToExternalUrl = function (externalSubroute, route) {
        var externalLoginBaseUrl = "/" + externalSubroute;
        var returnUrl = '/';
        var eventId = route.queryParams['id'];
        if (eventId) {
            returnUrl = returnUrl + "event?id=" + eventId;
        }
        var externalLoginUrl = externalLoginBaseUrl + "?returnUrl=" + returnUrl;
        window.open(externalLoginUrl, '_self');
    };
    return ExternalUrlResolver;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_eventregistration_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/eventregistration/confirmation/confirmation.component */ "./src/app/components/eventregistration/confirmation/confirmation.component.ts");
/* harmony import */ var _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/eventregistration/eventregistration.component */ "./src/app/components/eventregistration/eventregistration.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _resolvers_external_login_url_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/external.login.url.resolver */ "./src/app/resolvers/external.login.url.resolver.ts");
/* harmony import */ var _resolvers_external_logout_url_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/external.logout.url.resolver */ "./src/app/resolvers/external.logout.url.resolver.ts");
/* harmony import */ var _resolvers_external_profile_url_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/external.profile.url.resolver */ "./src/app/resolvers/external.profile.url.resolver.ts");
/* harmony import */ var _components_myregistrations_myregistrations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/myregistrations/myregistrations.component */ "./src/app/components/myregistrations/myregistrations.component.ts");
/* harmony import */ var src_app_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/guards/is.authenticated.guard */ "./src/app/guards/is.authenticated.guard.ts");
/* harmony import */ var src_app_components_eventregistration_paymentdemo_payment_demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/eventregistration/paymentdemo/payment.demo */ "./src/app/components/eventregistration/paymentdemo/payment.demo.ts");
/* harmony import */ var _components_event_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/event/sessions/sessions.component */ "./src/app/components/event/sessions/sessions.component.ts");
/* harmony import */ var _components_event_sessiontracks_sessiontracks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/event/sessiontracks/sessiontracks.component */ "./src/app/components/event/sessiontracks/sessiontracks.component.ts");
/* harmony import */ var _components_event_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/event/speakers/speakers.component */ "./src/app/components/event/speakers/speakers.component.ts");
/* harmony import */ var _components_event_passes_passes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/event/passes/passes.component */ "./src/app/components/event/passes/passes.component.ts");
/* harmony import */ var _components_eventregistration_session_selection_session_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/eventregistration/session-selection/session-selection.component */ "./src/app/components/eventregistration/session-selection/session-selection.component.ts");
















// WARNING: Adding routes can break compatibility with hosted portal!
// Make sure to add a web page in Portals if you want to add an additional route.
var AppRoutes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "spinner", component: _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"] },
    {
        path: "event",
        component: _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"],
        children: [
            {
                path: "",
                redirectTo: _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventDetailSections"].Sessions,
                pathMatch: "prefix"
            },
            {
                path: _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventDetailSections"].Sessions,
                component: _components_event_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_11__["SessionsComponent"]
            },
            {
                path: _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventDetailSections"].SessionTracks,
                component: _components_event_sessiontracks_sessiontracks_component__WEBPACK_IMPORTED_MODULE_12__["SessiontracksComponent"]
            },
            {
                path: _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventDetailSections"].Speakers,
                component: _components_event_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_13__["SpeakersComponent"]
            },
            {
                path: _components_event_event_component__WEBPACK_IMPORTED_MODULE_2__["EventDetailSections"].PassInformation,
                component: _components_event_passes_passes_component__WEBPACK_IMPORTED_MODULE_14__["PassesComponent"]
            }
        ]
    },
    {
        path: _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_1__["EventCheckoutRoutePaths"].REGISTRATION,
        component: _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_1__["EventRegistrationComponent"],
        children: [
            {
                path: "",
                component: _components_eventregistration_session_selection_session_selection_component__WEBPACK_IMPORTED_MODULE_15__["SessionSelectionComponent"]
            }
        ]
    },
    { path: _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_1__["EventCheckoutRoutePaths"].CONFIRMATION, component: _components_eventregistration_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationComponent"] },
    { path: _components_eventregistration_eventregistration_component__WEBPACK_IMPORTED_MODULE_1__["EventCheckoutRoutePaths"].PAYMENT, component: src_app_components_eventregistration_paymentdemo_payment_demo__WEBPACK_IMPORTED_MODULE_10__["PaymentDemoComponent"] },
    {
        path: "externalLogin",
        resolve: { url: _resolvers_external_login_url_resolver__WEBPACK_IMPORTED_MODULE_5__["ExternalLoginUrlResolver"] },
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "externalLogout",
        resolve: { url: _resolvers_external_logout_url_resolver__WEBPACK_IMPORTED_MODULE_6__["ExternalLogoutUrlResolver"] },
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "externalProfile",
        resolve: { url: _resolvers_external_profile_url_resolver__WEBPACK_IMPORTED_MODULE_7__["ExternalProfileUrlResolver"] },
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "myregistrations",
        canActivate: [src_app_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_9__["IsAuthenticatedGuard"]],
        component: _components_myregistrations_myregistrations_component__WEBPACK_IMPORTED_MODULE_8__["MyRegistrationsComponent"]
    },
    { path: "**", redirectTo: "home" }
];


/***/ }),

/***/ "./src/app/services/active-event.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/active-event.service.ts ***!
  \**************************************************/
/*! exports provided: ActiveEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveEventService", function() { return ActiveEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/service.providers */ "./src/app/providers/service.providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ActiveEventService = /** @class */ (function () {
    function ActiveEventService(eventService, sessionService) {
        this.eventService = eventService;
        this.sessionService = sessionService;
        this.events = new Map();
        this.sessions = new Map();
        this.passes = new Map();
    }
    ActiveEventService.prototype.getEvent = function (readableEventId) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            // try to load from cache
            if (_this.events.has(readableEventId)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.events.get(readableEventId)).subscribe(observer);
                return;
            }
            // fetch from server
            _this.eventService
                .getEvent(readableEventId)
                .toPromise()
                .then(function (event) {
                _this.events.set(event.readableEventId, event);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event).subscribe(observer);
            }, function (error) { return observer.error(error); });
        });
    };
    ActiveEventService.prototype.getSessions = function (readableEventId, isCachingAllowed) {
        var _this = this;
        if (isCachingAllowed === void 0) { isCachingAllowed = true; }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            // try to load from cache
            if (isCachingAllowed && _this.sessions.has(readableEventId)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.sessions.get(readableEventId)).subscribe(observer);
                return;
            }
            // fetch from server
            _this.eventService
                .getSessions(readableEventId)
                .toPromise()
                .then(function (sessions) {
                _this.sessions.set(readableEventId, sessions);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(sessions).subscribe(observer);
            }, function (error) { return observer.error(error); });
        });
    };
    ActiveEventService.prototype.getAndFilterSessions = function (readableEventId, isCachingAllowed, sessionIdsToInclude) {
        if (isCachingAllowed === void 0) { isCachingAllowed = true; }
        if (sessionIdsToInclude === void 0) { sessionIdsToInclude = null; }
        var sessionsObservable = this.getSessions(readableEventId, isCachingAllowed);
        if (sessionIdsToInclude == null || sessionIdsToInclude.length === 0) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]).subscribe(observer);
            });
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            sessionsObservable.toPromise().then(function (sessions) {
                var filteredSessions = sessions.filter(function (session) { return sessionIdsToInclude.some(function (id) { return session.id === id; }); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filteredSessions).subscribe(observer);
            }, function (error) { return observer.error(error); });
        });
    };
    ActiveEventService.prototype.getPasses = function (readableEventId) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            // try to load from cache
            if (_this.passes.has(readableEventId)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.passes.get(readableEventId)).subscribe(observer);
                return;
            }
            // fetch from server
            _this.eventService
                .getPasses(readableEventId)
                .toPromise()
                .then(function (passes) {
                _this.passes.set(readableEventId, passes);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(passes).subscribe(observer);
            }, function (error) { return observer.error(error); });
        });
    };
    ActiveEventService.prototype.isFreeEvent = function (readableEventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var passes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPasses(readableEventId).toPromise()];
                    case 1:
                        passes = _a.sent();
                        if (passes == null) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, passes.length === 0];
                }
            });
        });
    };
    ActiveEventService.prototype.hasEventSessions = function (readableEventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sessions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSessions(readableEventId).toPromise()];
                    case 1:
                        sessions = _a.sent();
                        if (sessions == null) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, sessions.length > 0];
                }
            });
        });
    };
    ActiveEventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_2__["EVENT_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_providers_service_providers__WEBPACK_IMPORTED_MODULE_2__["SESSION_SERVICE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object])
    ], ActiveEventService);
    return ActiveEventService;
}());



/***/ }),

/***/ "./src/app/services/base/user.base.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/base/user.base.service.ts ***!
  \****************************************************/
/*! exports provided: UserBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBaseService", function() { return UserBaseService; });
var UserBaseService = /** @class */ (function () {
    function UserBaseService() {
    }
    UserBaseService.AnonymousUser = {
        id: '',
        firstName: '',
        lastName: '',
        isAnonymous: true
    };
    return UserBaseService;
}());



/***/ }),

/***/ "./src/app/services/browser-session.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/browser-session.service.ts ***!
  \*****************************************************/
/*! exports provided: BrowserSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserSessionService", function() { return BrowserSessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowserSessionService = /** @class */ (function () {
    function BrowserSessionService() {
        this.captchaKey = 'captcha';
        this.purchaseIdKey = 'purchase-id';
        this.totalKey = 'total';
        this.currencyKey = 'currency';
        this.guidRegex = new RegExp('^\{?[0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12}\}?$', 'i');
    }
    BrowserSessionService.prototype.setCaptcha = function (captcha) {
        sessionStorage.setItem(this.captchaKey, JSON.stringify(captcha));
    };
    BrowserSessionService.prototype.getCaptcha = function () {
        return JSON.parse(sessionStorage.getItem(this.captchaKey));
    };
    BrowserSessionService.prototype.setPurchaseId = function (purchaseId) {
        if (this.guidRegex.test(purchaseId)) {
            sessionStorage.setItem(this.purchaseIdKey, purchaseId);
        }
    };
    BrowserSessionService.prototype.getPurchaseId = function () {
        var purchaseId = sessionStorage.getItem(this.purchaseIdKey);
        if (this.guidRegex.test(purchaseId)) {
            return purchaseId;
        }
        return null;
    };
    BrowserSessionService.prototype.setRegistrationTotal = function (total) {
        if (!isNaN(parseInt(total, 10))) {
            sessionStorage.setItem(this.totalKey, total.toString());
        }
    };
    BrowserSessionService.prototype.getRegistrationTotal = function () {
        return parseInt(sessionStorage.getItem(this.totalKey), 10);
    };
    BrowserSessionService.prototype.setCurrency = function (symbol) {
        if (encodeURIComponent(symbol)) {
            sessionStorage.setItem(this.currencyKey, symbol.toString());
        }
    };
    BrowserSessionService.prototype.getCurrency = function () {
        return decodeURIComponent(sessionStorage.getItem(this.currencyKey));
    };
    BrowserSessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserSessionService);
    return BrowserSessionService;
}());



/***/ }),

/***/ "./src/app/services/captcha.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/captcha.service.ts ***!
  \*********************************************/
/*! exports provided: CaptchaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaService", function() { return CaptchaService; });
var CaptchaService = /** @class */ (function () {
    function CaptchaService() {
    }
    CaptchaService.prototype.getHipObject = function () {
        var hipObjectResult = CaptchaService.EmptyHipObject;
        if (window.top.WLSPHIP0) {
            window.top.WLSPHIP0.verify(window.top.WLSPHIP0.verifyCallback, '');
            if (window.top.WLSPHIP0.error !== 0) {
                window.top.WLSPHIP0.reloadHIP();
                return;
            }
            hipObjectResult = {
                Solution: window.top.HipObject['Solution'],
                Token: window.top.HipObject['Token'],
                Type: window.top.HipObject['Type'],
                FlowId: window.top.HipObject['FlowId']
            };
        }
        return hipObjectResult;
    };
    CaptchaService.EmptyHipObject = {
        Solution: '',
        Token: '',
        Type: '',
        FlowId: ''
    };
    return CaptchaService;
}());



/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.getItem = function (name) {
        name = name + '=';
        var cookies = decodeURIComponent(document.cookie).split(';');
        var cookie = cookies.find(function (c) { return c.includes(name); });
        if (cookie != null) {
            return cookie.split('=')[1];
        }
        return null;
    };
    CookieService.prototype.setItem = function (name, value) {
        document.cookie = name + "=" + value + "; path=/;";
    };
    CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/services/d365/event.d365.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/d365/event.d365.service.ts ***!
  \*****************************************************/
/*! exports provided: EventD365Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventD365Service", function() { return EventD365Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");




var EventD365Service = /** @class */ (function () {
    function EventD365Service(http) {
        this.http = http;
    }
    EventD365Service_1 = EventD365Service;
    EventD365Service.prototype.getPublishedEvents = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/published/");
    };
    EventD365Service.prototype.getEvent = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/event/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.getPasses = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/passes/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.getSessions = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/sessions/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.getSessionTracks = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/tracks/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.getSpeakers = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/speakers/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.getSponsors = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/sponsors/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.getCaptcha = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/captcha/");
    };
    EventD365Service.prototype.getCustomRegistrationFields = function (readableEventId) {
        // tslint:disable-next-line:max-line-length
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/customregistrationsfields/?readableEventId=" + readableEventId;
        return this.http.get(url);
    };
    EventD365Service.prototype.getEventRegistrationCount = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/registrationcount/?readableEventId=" + readableEventId);
    };
    EventD365Service.prototype.registerToEvent = function (readableEventId, registrationData) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/register/?readableEventId=" + readableEventId;
        return this.http.post(url, registrationData);
    };
    EventD365Service.prototype.finalizeRegistration = function (readableEventId, requestData) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.eventsEndpoint + "/finalizeregistration/?readableEventId=" + readableEventId;
        return this.http.post(url, requestData);
    };
    EventD365Service.prototype.registerToSession = function (readableEventId, sessionId) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + EventD365Service_1.usersEndpoint + "/registertosession/", {
            'readableEventId': readableEventId,
            'sessionId': sessionId
        });
    };
    var EventD365Service_1;
    EventD365Service.eventsEndpoint = 'api/events';
    EventD365Service.usersEndpoint = 'api/users';
    EventD365Service = EventD365Service_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EventD365Service);
    return EventD365Service;
}());



/***/ }),

/***/ "./src/app/services/d365/session.d365.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/d365/session.d365.service.ts ***!
  \*******************************************************/
/*! exports provided: SessionD365Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionD365Service", function() { return SessionD365Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");




var SessionD365Service = /** @class */ (function () {
    function SessionD365Service(http) {
        this.http = http;
    }
    SessionD365Service_1 = SessionD365Service;
    SessionD365Service.prototype.getSessionRegistrationCount = function (sessionId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + SessionD365Service_1.sessionsEndpoint + "/registrationcount/?sessionId=" + sessionId);
    };
    var SessionD365Service_1;
    SessionD365Service.sessionsEndpoint = 'api/sessions';
    SessionD365Service = SessionD365Service_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SessionD365Service);
    return SessionD365Service;
}());



/***/ }),

/***/ "./src/app/services/d365/sponsors.d366.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/d365/sponsors.d366.service.ts ***!
  \********************************************************/
/*! exports provided: SponsorsD365Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsD365Service", function() { return SponsorsD365Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var SponsorsD365Service = /** @class */ (function () {
    function SponsorsD365Service() {
        /**
         * The default sponsor logo that is provided by portal.
         */
        this.defaultLogoSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "default_sponsor_image.png";
    }
    SponsorsD365Service.prototype.getLogoSrc = function (sponsor) {
        if (sponsor == null || sponsor.image == null) {
            return this.defaultLogoSrc;
        }
        return "data:image/gif;base64," + sponsor.image;
    };
    SponsorsD365Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SponsorsD365Service);
    return SponsorsD365Service;
}());



/***/ }),

/***/ "./src/app/services/d365/tracks.d365.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/d365/tracks.d365.service.ts ***!
  \******************************************************/
/*! exports provided: TracksD365Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksD365Service", function() { return TracksD365Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");




var TracksD365Service = /** @class */ (function () {
    function TracksD365Service(http) {
        this.http = http;
    }
    TracksD365Service_1 = TracksD365Service;
    TracksD365Service.prototype.getSessions = function (trackId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + TracksD365Service_1.tracksEndpoint + "/sessions/?trackId=" + trackId);
    };
    var TracksD365Service_1;
    TracksD365Service.tracksEndpoint = 'api/tracks';
    TracksD365Service = TracksD365Service_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TracksD365Service);
    return TracksD365Service;
}());



/***/ }),

/***/ "./src/app/services/d365/user.d365.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/d365/user.d365.service.ts ***!
  \****************************************************/
/*! exports provided: UserD365Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserD365Service", function() { return UserD365Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../app/services/base/user.base.service */ "./src/app/services/base/user.base.service.ts");
/* harmony import */ var src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");







var UserD365Service = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserD365Service, _super);
    function UserD365Service(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.getLoggedInUserApiCall$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, UserD365Service_1.timerPeriodInMillis)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (i) { return _this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + UserD365Service_1.usersEndpoint + "/authenticated/"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_5__["UserBaseService"].AnonymousUser); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        return _this;
    }
    UserD365Service_1 = UserD365Service;
    UserD365Service.prototype.refreshUser = function () {
    };
    UserD365Service.prototype.getLoggedInUser = function () {
        return this.getLoggedInUserApiCall$;
    };
    UserD365Service.prototype.isLoggedIn = function () {
        return this.getLoggedInUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user != null && !user.isAnonymous; }));
    };
    UserD365Service.prototype.getRegistrationsForUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + UserD365Service_1.usersEndpoint + "/myregistrations/");
    };
    UserD365Service.prototype.getWaitlistItemsForUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + UserD365Service_1.usersEndpoint + "/mywaitlistitems/");
    };
    UserD365Service.prototype.cancelRegistration = function (registrationId) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + UserD365Service_1.usersEndpoint + "/cancelregistration/", { 'registrationId': registrationId });
    };
    var UserD365Service_1;
    UserD365Service.usersEndpoint = 'api/users';
    UserD365Service.timerPeriodInMillis = 15 * 60 * 1000; // 15 minutes
    UserD365Service = UserD365Service_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(src_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_6__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], UserD365Service);
    return UserD365Service;
}(_app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_5__["UserBaseService"]));



/***/ }),

/***/ "./src/app/services/labels.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/labels.service.ts ***!
  \********************************************/
/*! exports provided: LabelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsService", function() { return LabelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _browser_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-session.service */ "./src/app/services/browser-session.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../app/providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_reduce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/reduce */ "./node_modules/rxjs/internal/operators/reduce.js");
/* harmony import */ var rxjs_internal_operators_reduce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_reduce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/cookie.service.ts");










var LabelsService = /** @class */ (function () {
    function LabelsService(http, browserSessionService, cookieService) {
        this.http = http;
        this.browserSessionService = browserSessionService;
        this.cookieService = cookieService;
        this.languageToLcidMap = {
            ArabicSaudiArabia: 1025,
            Bulgarian: 1026,
            Catalan: 1027,
            ChineseTaiwan: 1028,
            Czech: 1029,
            Danish: 1030,
            GermanGermany: 1031,
            Greek: 1032,
            EnglishUS: 1033,
            Finnish: 1035,
            FrenchFrance: 1036,
            Hebrew: 1037,
            Hungarian: 1038,
            ItalianItaly: 1040,
            Japanese: 1041,
            Korean: 1042,
            DutchNetherlands: 1043,
            NorwegianBokml: 1044,
            Polish: 1045,
            PortugueseBrazil: 1046,
            RomanianRomania: 1048,
            Russian: 1049,
            Croatian: 1050,
            Slovak: 1051,
            SwedishSweden: 1053,
            Thai: 1054,
            Turkish: 1055,
            Indonesian: 1057,
            Ukrainian: 1058,
            Slovenian: 1060,
            Estonian: 1061,
            Latvian: 1062,
            Lithuanian: 1063,
            Vietnamese: 1066,
            Basque: 1069,
            Galician: 1110,
            Chinese: 2052,
            EnglishGB: 2057,
            PortuguesePortugal: 2070,
            SerbianLatin: 2074,
            ChineseHongKong: 3076,
            EnglishAustralia: 3081,
            SpanishSpain: 3082,
            FrenchCanada: 3084,
            SerbianCyrillic: 3098,
            EnglishCanada: 4105,
        };
        this.languageCodeToLcidMap = {
            'ar-sa': 1025,
            'bg': 1026,
            'ca': 1027,
            'zh-tw': 1028,
            'cs': 1029,
            'da': 1030,
            'de-de': 1031,
            'el': 1032,
            'en-us': 1033,
            'fi': 1035,
            'fr-fr': 1036,
            'he': 1037,
            'hu': 1038,
            'it-it': 1040,
            'ja': 1041,
            'ko': 1042,
            'nl-nl': 1043,
            'no-no': 1044,
            'pl': 1045,
            'pt-br': 1046,
            'ro': 1048,
            'ru': 1049,
            'hr': 1050,
            'sk': 1051,
            'sv-se': 1053,
            'th': 1054,
            'tr': 1055,
            'id': 1057,
            'uk': 1058,
            'sl': 1060,
            'et': 1061,
            'lv': 1062,
            'lt': 1063,
            'vi': 1066,
            'eu': 1069,
            'gl': 1110,
            'zh-cn': 2052,
            'en-gb': 2057,
            'pt-pt': 2070,
            'sr-sp': 2074,
            'zh-hk': 3076,
            'en-au': 3081,
            'es-es': 3082,
            'fr-ca': 3084,
            'sr-cy': 3098,
            'en-ca': 4105,
        };
        this.DefaultBrowserLcid = 1033;
        this.DefaultUserLanguage = 'en-US';
        this.selectedLanguageLcidCookieKey = 'selected-language-lcid';
        var savedLcid = this.getSelectedlcid();
        var localizationFileName = this.getLocalizationFileName(savedLcid);
        var apiCall$ = this.http.get(this.buildApiCallUrl(localizationFileName));
        this.labelsModel$ = apiCall$
            .pipe(this.saveLabelsModel())
            .pipe(this.handleLabelLoadingError())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
    }
    LabelsService.prototype.getLanguageCodeByLcid = function (lcid) {
        var _this = this;
        var languageCode = Object.getOwnPropertyNames(this.languageCodeToLcidMap)
            .filter(function (prop) { return _this.languageCodeToLcidMap[prop] === lcid; })
            .map(function (prop) { return prop; });
        if (languageCode.length === 0) {
            return this.DefaultUserLanguage;
        }
        return languageCode[0];
    };
    LabelsService.prototype.getCurrentLanguageCode = function () {
        if (this.isSelectedLanguageLcidSaved()) {
            var currentSelectedLcid = this.getSelectedLanguageLcid();
            return this.getLanguageCodeByLcid(currentSelectedLcid);
        }
        return this.DefaultUserLanguage;
    };
    LabelsService.prototype.getLabelsModel = function () {
        if (this.labelsLoaded()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.loadedLabelsModel);
        }
        else {
            return this.labelsModel$;
        }
    };
    LabelsService.prototype.translateLabel = function (key, defaultValue) {
        return this.getLabelsModel().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (labelsModel) {
            if (labelsModel.labels[key] !== undefined) {
                return labelsModel.labels[key];
            }
            else {
                return defaultValue !== undefined ? defaultValue : key;
            }
        }));
    };
    LabelsService.prototype.labelsLoaded = function () {
        return this.loadedLabelsModel !== undefined;
    };
    LabelsService.prototype.getSupportedLanguages = function () {
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_7__["from"])(this.extractSupportedLanguages())
            .pipe(this.flatMapToModel())
            .pipe(this.collectToArray());
    };
    LabelsService.prototype.getSelectedlcid = function () {
        if (this.isSelectedLanguageLcidSaved()) {
            return this.getSelectedLanguageLcid();
        }
        var browserLcid = this.getLcidFromBrowser();
        this.saveLcidToCookie(browserLcid);
        return browserLcid;
    };
    LabelsService.prototype.getLcidFromBrowser = function () {
        var userLanguage = this.getUserLanguage();
        return this.getUserLcid(userLanguage);
    };
    LabelsService.prototype.getUserLanguage = function () {
        var userLanguage = navigator.languages ? navigator.languages[0] : (navigator.language || navigator['userLanguage']);
        if (userLanguage) {
            return userLanguage.toLowerCase();
        }
        else {
            return this.DefaultUserLanguage;
        }
    };
    LabelsService.prototype.getUserLcid = function (userLanguage) {
        var userLcid = this.languageToLcidMap[userLanguage];
        if (userLcid) {
            return userLcid;
        }
        else {
            return this.DefaultBrowserLcid;
        }
    };
    LabelsService.prototype.saveLcidToCookie = function (lcid) {
        this.setSelectedLanguageLcid(lcid);
    };
    LabelsService.prototype.getLocalizationFileName = function (lcid) {
        return lcid + ".json";
    };
    LabelsService.prototype.buildApiCallUrl = function (localizationFileName) {
        return "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].localizationEndpoint + localizationFileName;
    };
    LabelsService.prototype.saveLabelsModel = function () {
        var _this = this;
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (labelsModel) {
            _this.loadedLabelsModel = labelsModel;
        });
    };
    LabelsService.prototype.handleLabelLoadingError = function () {
        var _this = this;
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error, caught) {
            _this.loadedLabelsModel = {
                labels: {},
                isJapanese: false
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this.loadedLabelsModel);
        });
    };
    LabelsService.prototype.extractSupportedLanguages = function () {
        var _this = this;
        var currentLcid = this.getSelectedlcid();
        return Object.getOwnPropertyNames(this.languageToLcidMap)
            .filter(function (prop) { return _this.languageToLcidMap[prop] !== currentLcid; })
            .map(function (prop) { return prop; });
    };
    LabelsService.prototype.flatMapToModel = function () {
        var _this = this;
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (supportedLanguageKey) {
            var supportedLanguageLabel$ = _this.translateLabel(supportedLanguageKey);
            var supportedLanguageLcid = _this.languageToLcidMap[supportedLanguageKey];
            return supportedLanguageLabel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (supportedLanguageLabel) {
                var supp = {
                    label: supportedLanguageLabel,
                    lcid: supportedLanguageLcid
                };
                return supp;
            }));
        });
    };
    LabelsService.prototype.collectToArray = function () {
        return Object(rxjs_internal_operators_reduce__WEBPACK_IMPORTED_MODULE_8__["reduce"])(function (acc, value, index) {
            acc.push(value);
            return acc;
        }, []);
    };
    LabelsService.prototype.selectLanguage = function (selectedLanguageLcid) {
        this.saveLcidToCookie(selectedLanguageLcid);
        window.location.reload();
    };
    LabelsService.prototype.setSelectedLanguageLcid = function (lcid) {
        this.cookieService.setItem(this.selectedLanguageLcidCookieKey, String(lcid));
    };
    LabelsService.prototype.isSelectedLanguageLcidSaved = function () {
        return this.cookieService.getItem(this.selectedLanguageLcidCookieKey) !== null;
    };
    LabelsService.prototype.getSelectedLanguageLcid = function () {
        return Number(this.cookieService.getItem(this.selectedLanguageLcidCookieKey));
    };
    LabelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_app_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_6__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _browser_session_service__WEBPACK_IMPORTED_MODULE_1__["BrowserSessionService"],
            _cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])
    ], LabelsService);
    return LabelsService;
}());



/***/ }),

/***/ "./src/app/services/rest/event.rest.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/rest/event.rest.service.ts ***!
  \*****************************************************/
/*! exports provided: EventRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRestService", function() { return EventRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var EventRestService = /** @class */ (function () {
    function EventRestService(http) {
        this.http = http;
    }
    EventRestService_1 = EventRestService;
    EventRestService.prototype.getPublishedEvents = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/published");
    };
    EventRestService.prototype.getEvent = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId);
    };
    EventRestService.prototype.getPasses = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/passes");
    };
    EventRestService.prototype.getSessions = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/sessions");
    };
    EventRestService.prototype.getSessionTracks = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/tracks");
    };
    EventRestService.prototype.getSpeakers = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/speakers");
    };
    EventRestService.prototype.getSponsors = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/sponsorships");
    };
    EventRestService.prototype.getCaptcha = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/captcha");
    };
    EventRestService.prototype.getCustomRegistrationFields = function (readableEventId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/custom-registration-fields";
        return this.http.get(url);
    };
    EventRestService.prototype.getEventRegistrationCount = function (readableEventId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/registrations/count");
    };
    EventRestService.prototype.registerToEvent = function (readableEventId, registrationData) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/registrations";
        return this.http.post(url, registrationData, true);
    };
    EventRestService.prototype.finalizeRegistration = function (readableEventId, requestData) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/registrations/finalize";
        return this.http.post(url, requestData, true);
    };
    EventRestService.prototype.registerToSession = function (readableEventId, sessionId) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + EventRestService_1.eventsEndpoint + "/" + readableEventId + "/sessions/" + sessionId + "/registrations", {}, true);
    };
    var EventRestService_1;
    EventRestService.eventsEndpoint = 'events';
    EventRestService = EventRestService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_1__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EventRestService);
    return EventRestService;
}());



/***/ }),

/***/ "./src/app/services/rest/session.rest.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/rest/session.rest.service.ts ***!
  \*******************************************************/
/*! exports provided: SessionRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRestService", function() { return SessionRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var SessionRestService = /** @class */ (function () {
    function SessionRestService(http) {
        this.http = http;
    }
    SessionRestService_1 = SessionRestService;
    SessionRestService.prototype.getSessionRegistrationCount = function (sessionId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + SessionRestService_1.sessionsEndpoint + "/" + sessionId + "/registrations/count");
    };
    var SessionRestService_1;
    SessionRestService.sessionsEndpoint = 'sessions';
    SessionRestService = SessionRestService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_1__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SessionRestService);
    return SessionRestService;
}());



/***/ }),

/***/ "./src/app/services/rest/sponsorships.rest.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/rest/sponsorships.rest.service.ts ***!
  \************************************************************/
/*! exports provided: SponsorshipsRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorshipsRestService", function() { return SponsorshipsRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var SponsorshipsRestService = /** @class */ (function () {
    function SponsorshipsRestService() {
    }
    SponsorshipsRestService_1 = SponsorshipsRestService;
    SponsorshipsRestService.prototype.getLogoSrc = function (sponsor) {
        if (sponsor == null || sponsor.id == null || sponsor.id === '') {
            return '';
        }
        return "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + SponsorshipsRestService_1.sponsorshipsEndpoint + "/" + sponsor.id + "/logo";
    };
    var SponsorshipsRestService_1;
    SponsorshipsRestService.sponsorshipsEndpoint = 'sponsorships';
    SponsorshipsRestService = SponsorshipsRestService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SponsorshipsRestService);
    return SponsorshipsRestService;
}());



/***/ }),

/***/ "./src/app/services/rest/tracks.rest.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/rest/tracks.rest.service.ts ***!
  \******************************************************/
/*! exports provided: TracksRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksRestService", function() { return TracksRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");




var TracksRestService = /** @class */ (function () {
    function TracksRestService(http) {
        this.http = http;
    }
    TracksRestService_1 = TracksRestService;
    TracksRestService.prototype.getSessions = function (trackId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + TracksRestService_1.tracksEndpoint + "/" + trackId + "/sessions");
    };
    var TracksRestService_1;
    TracksRestService.tracksEndpoint = 'tracks';
    TracksRestService = TracksRestService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_3__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TracksRestService);
    return TracksRestService;
}());



/***/ }),

/***/ "./src/app/services/rest/user.rest.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/rest/user.rest.service.ts ***!
  \****************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/http.helper.provider */ "./src/app/providers/http.helper.provider.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../app/services/base/user.base.service */ "./src/app/services/base/user.base.service.ts");







var UserRestService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserRestService, _super);
    function UserRestService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.manualUpdateObserver = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.getLoggedInUserApiCall$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, UserRestService_1.timerPeriodInMillis), _this.manualUpdateObserver)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (i) { return _this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + UserRestService_1.usersEndpoint + "/authenticated", true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_6__["UserBaseService"].AnonymousUser); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        return _this;
    }
    UserRestService_1 = UserRestService;
    UserRestService.prototype.refreshUser = function () {
        this.manualUpdateObserver.next();
    };
    UserRestService.prototype.getLoggedInUser = function () {
        return this.getLoggedInUserApiCall$;
    };
    UserRestService.prototype.isLoggedIn = function () {
        return this.getLoggedInUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) { return user != null && !user.isAnonymous; }));
    };
    UserRestService.prototype.getRegistrationsForUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + UserRestService_1.usersEndpoint + "/authenticated/registrations", true);
    };
    UserRestService.prototype.getWaitlistItemsForUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + UserRestService_1.usersEndpoint + "/authenticated/waitlist-items");
    };
    UserRestService.prototype.cancelRegistration = function (registrationId) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + UserRestService_1.usersEndpoint + "/authenticated/registrations/" + registrationId + "/cancel", {}, true);
    };
    var UserRestService_1;
    UserRestService.usersEndpoint = 'users';
    UserRestService.timerPeriodInMillis = 15 * 60 * 1000; // 15 minutes
    UserRestService = UserRestService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_providers_http_helper_provider__WEBPACK_IMPORTED_MODULE_1__["HTTP_HELPER"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], UserRestService);
    return UserRestService;
}(_app_services_base_user_base_service__WEBPACK_IMPORTED_MODULE_6__["UserBaseService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
  * This is the configuration when using the self-hosted approach.
  * For the self-hosted approach it is required to change the parameters to match your environment.
  * You can find more information on how to configure your self-hosted environment in
  * our Developer Guide (https://docs.microsoft.com/en-us/dynamics365/customer-engagement/marketing/developer/self-hosted).
  */
var environment = {
    /**
     * Enables/Disabled the production mode of Angular.
     * You can find more information about the production mode here: https://angular.io/api/core/enableProdMode
     */
    production: true,
    /**
     * This field links to the version specified in the `package.json` file by default. There is no need to change this property.
     * However, if you prefer not to expose the version of the application, you can set it to `null`.
     **/
    buildVersion: __webpack_require__(/*! ../../package.json */ "./package.json").version,
    /**
     * The URL that points to the Event Management API endpoint (which is used to retrieve information of events and to make registrations).
     * If you're using the deprecated Event Management Portal API then you need to enter the URL of your Portals.
     * If you're using the new Event Management Public API then you need to replace HOST with the value from the `Endpoint` field that you
     * get after registering your web application. Additionally you need to append 'EvtMgmt/api/v2.0/'.
     * Note: The URL **must** have a trailing slash.
     **/
    apiEndpoint: 'https://7efe7a8bcc6247a5a5136be8f8498a89.svc.dynamics.com/EvtMgmt/api/v2.0/',
    /**
     * Points to the URL where the localization files are stored (by default they are stored in the root directory).
     */
    localizationEndpoint: '/',
    /**
     * Specifies the base URL from where images are served.
     * This configuration enables you to serve images from a different location which might be
     * required if you want to use a CDN or image processing service.
     */
    imagesEndpoint: 'assets/images/',
    /**
     * This setting specifies which API is used.
     * If set to true then the new Event Management Public API is used.
     * If set to false then the deprecated Event Management Portal API is used. This API can only be used if you host on Portals.
     * Note: In order to use the new Event Management Public API you need to register your web application in CRM.
     */
    useRestStack: true,
    /**
     * This authenticates your web application against our Event Management Public API.
     * You can retrieve the application token by registering a new web application in CRM.
     * Note: This token is not required if you're using the deprecated Event Management Portal API.
     */
    emApplicationtoken: 'q-DGlseelquJpIIK0H7e9CoXQuhUayOG_K5og9IzNbSjC7nlxz0Mw3hOt8EIdLSrQX8y2skPsQif7ZNxt0K2_GtZpkEY6tQFpoPucElg9Sfwqm_PdDhUwqEX5haKyrQrgThL03yzM53xTJ55qlbZ5zqlDTTTfQa7_gcagEoNZJqlD73oFejufbthKzxwljiIzZ9qMNQra75L76WVFzs0ndyrxey2cTxkt7-pMJOau6lfVxkd8YjaA2amcDdD767x',
    /**
     * This flag specifies whether user authentication is supported (meaning user can to register/sign-in).
     * If set to false then the application will not display a possibility sign-in or register.
     */
    isAuthenticationEnabled: false,
    /**
     * Specifies whether you want to use **Azure Active Directory B2C identity management** for authentication.
     * If you want to use **Dynamics 365 Portals identity management** then this flag needs to be set to false.
     * Note: If AAD B2C is enabled then you need to configure the `aadB2CConfig` variable.
     */
    useAadB2C: false,
    /**
     * The configuration for **Azure Active Directory B2C identity management**.
     */
    aadB2CConfig: {
        authorityHost: '',
        tenant: '',
        clientID: '',
        signUpSignInPolicy: '',
        b2cScopes: [],
        redirectUri: ''
    },
    /**
     * This setting can be used to return mock objects instead of making real API calls.
     */
    useMockData: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AL_KM\Desktop\Arbeit\IFB\release\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map