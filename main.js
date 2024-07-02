"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["main"],{

/***/ 620:
/*!**************************************************!*\
  !*** ./src/app/Store/Appsettings/AppSettings.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBCallingURL": () => (/* binding */ DBCallingURL),
/* harmony export */   "ImageUpload": () => (/* binding */ ImageUpload),
/* harmony export */   "imagePath": () => (/* binding */ imagePath)
/* harmony export */ });

const DBCallingURL = 'https://nextasoft.in/order-online/Api/ValuePass.php';
const ImageUpload = 'https://nextasoft.in/order-online/Api/imageupload.php';
const imagePath = 'https://nextasoft.in/order-online/Api/';


/***/ }),

/***/ 3825:
/*!*************************************!*\
  !*** ./src/app/Store/LoginUsers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUsers": () => (/* binding */ LoginUsers)
/* harmony export */ });
class LoginUsers {
    constructor() {
        this.ConfirmPassword = "";
        this.CreatedDate = "";
        this.Email = "";
        this.FirstName = "";
        this.Id = 0;
        this.LastName = "";
        this.MobileNo = "";
        this.ModifiedDate = "";
        this.Password = "";
        this.Image = "";
        this.ViewName = "loginusers";
    }
}


/***/ }),

/***/ 2705:
/*!*************************************************!*\
  !*** ./src/app/Store/PageStore/Page.Actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClosePage": () => (/* binding */ ClosePage),
/* harmony export */   "OpenPage": () => (/* binding */ OpenPage),
/* harmony export */   "PageActionTypes": () => (/* binding */ PageActionTypes)
/* harmony export */ });
var PageActionTypes;
(function (PageActionTypes) {
    PageActionTypes["Open_Page"] = "OpenPage";
    PageActionTypes["Close_Page"] = "ClosePage";
})(PageActionTypes || (PageActionTypes = {}));
class OpenPage {
    constructor(payload) {
        this.payload = payload;
        this.type = PageActionTypes.Open_Page;
    }
}
class ClosePage {
    constructor(payload) {
        this.payload = payload;
        this.type = PageActionTypes.Close_Page;
    }
}


/***/ }),

/***/ 7696:
/*!*************************************************!*\
  !*** ./src/app/Store/PageStore/Page.Reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagereducer": () => (/* binding */ Pagereducer)
/* harmony export */ });
//export let initialState = []
// const newState = (state, newData) => {
//    
//     return Object.assign( state, newData);
// };
const Pagereducer = (state = [], action) => {
    switch (action.type) {
        case 'OpenPage':
            {
                let Page = action.payload;
                return [...(state.filter((el) => el.ViewName != Page.ViewName)), action.payload];
            }
        case 'ClosePage':
            {
                let ViewName = action.payload;
                return state.filter((el) => el.ViewName != ViewName);
            }
        default:
            return state;
    }
};


/***/ }),

/***/ 3737:
/*!************************************!*\
  !*** ./src/app/Store/loginuser.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adminDetails": () => (/* binding */ adminDetails)
/* harmony export */ });
class adminDetails {
    constructor() {
        this.Address = "";
        this.Currency = "";
        this.Email = "";
        this.Fax = "";
        this.FirstName = "";
        this.Id = 0;
        this.Image = "";
        this.Lastname = "";
        this.Logo = "";
        this.Password = "";
        this.Phone = "";
        this.RestaurantEmail = "";
        this.RestaurantName = "";
        this.SupportNo = "";
        this.Timings = "";
        this.UserName = "";
        this.Android = "";
        this.Ios = "";
        this.Website = "";
        this.ViewName = "adminDetails";
        this.Workingdays = "";
    }
}


/***/ }),

/***/ 46:
/*!**********************************!*\
  !*** ./src/app/Store/lstCart.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lstCart": () => (/* binding */ lstCart)
/* harmony export */ });
class lstCart {
    constructor() {
        this.itemTotal = 0;
        this.deliveryCharges = 0;
        this.taxAmount = 0;
        this.discount = 0;
        this.DiscountCode = "";
        this.DiscountId = 0;
        this.toPay = 0;
        this.tip = 0;
        this.instructions = "";
        this.OrderType = "";
        this.lstCartItems = [];
        this.ViewName = "cartDetails";
    }
}


/***/ }),

/***/ 4029:
/*!***************************************!*\
  !*** ./src/app/apicalling.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApicallingService": () => (/* binding */ ApicallingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store/Appsettings/AppSettings */ 620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
class ApicallingService {
    constructor(http) {
        this.http = http;
        this.DBCallingURL = _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__.DBCallingURL;
        this.imagePath = _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__.imagePath;
        this.ImageUpload = _Store_Appsettings_AppSettings__WEBPACK_IMPORTED_MODULE_0__.ImageUpload;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    }
    DBCalling(Operation, Xml, Xml1, Xml2, Xml3, Xml4) {
        debugger;
        var URL = '';
        URL = this.DBCallingURL;
        return this.http.post(URL, { Screen: Xml, Operation: Operation, Xml: Xml1, XmlChild1: Xml2, XmlChild2: Xml3, Search: Xml4 }, httpOptions);
    }
}
ApicallingService.ɵfac = function ApicallingService_Factory(t) { return new (t || ApicallingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApicallingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApicallingService, factory: ApicallingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-orders/my-orders.component */ 2739);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Home'
    },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, pathMatch: 'full' },
    { path: 'Cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__.CartComponent, pathMatch: 'full' },
    { path: 'my-orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_2__.MyOrdersComponent, pathMatch: 'full' },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Store_loginuser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store/loginuser */ 3737);
/* harmony import */ var _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store/PageStore/Page.Actions */ 2705);
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store/LoginUsers */ 3825);
/* harmony import */ var _Store_lstCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store/lstCart */ 46);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicalling.service */ 4029);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);











function AppComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.openPopup()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 50)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 52)(5, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.profile()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "My Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.myOrders()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "My Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Hi ", ctx_r1.loggedUser.FirstName, " ", ctx_r1.loggedUser.LastName, " ");
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 11)(1, "a", 54)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
class AppComponent {
    constructor(apiCall, http, store, router, _home, pipe) {
        this.apiCall = apiCall;
        this.http = http;
        this.store = store;
        this.router = router;
        this._home = _home;
        this.pipe = pipe;
        this.title = 'sdfsdf';
        this.imagePath = "";
        this.imageUpload = "";
        this.lstAdmin = [];
        this.active = "hide";
        debugger;
        this.imagePath = this.apiCall.imagePath;
        this.imageUpload = this.apiCall.ImageUpload;
        this.adminDetails = new _Store_loginuser__WEBPACK_IMPORTED_MODULE_0__.adminDetails();
        this.lstCartStore = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_3__.lstCart();
        this.loggedUser = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_2__.LoginUsers();
        let date = new Date();
        this.year = this.pipe.transform(date, 'YYYY');
        // alert(this.year)
        if (this.store.source) {
            this.store.source.subscribe((data) => {
                debugger;
                const result2 = data['ooweb'].filter((x) => x.ViewName === 'loginusers');
                if (result2.length > 0) {
                    this.loggedUser = result2[0];
                }
            });
        }
    }
    ngOnInit() {
        debugger;
        this.view();
    }
    view() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
            this.Logo = this.imagePath + this.lstAdmin.Logo;
            this.restaurant = this.imagePath + this.lstAdmin.Image;
            this.adminDetails = this.lstAdmin;
            this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__.OpenPage(Object.assign({}, this.adminDetails)));
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = this.Logo;
            document.getElementsByTagName('head')[0].appendChild(link);
        });
    }
    open(d) {
        debugger;
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d)}`;
        window.open(googleMapsUrl, '_blank');
    }
    home() {
        this.router.navigateByUrl('Home');
    }
    logout() {
        debugger;
        this.loggedUser = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_2__.LoginUsers();
        this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__.OpenPage(Object.assign({}, this.loggedUser)));
        this.lstCartStore = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_3__.lstCart();
        this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_1__.OpenPage(Object.assign({}, this.lstCartStore)));
        this.router.navigateByUrl('Home');
    }
    openPopup() {
        debugger;
        this._home.openPop();
    }
    navopen() {
        debugger;
        if (this.active == "hide") {
            this.active = "show";
        }
        else {
            this.active = "hide";
        }
    }
    myOrders() {
        this.router.navigateByUrl('my-orders');
    }
    profile() {
        this.router.navigateByUrl('profile');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_4__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 66, vars: 14, consts: [[1, "section-header"], [1, "header-main", "shadow-sm", "bg-white"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "p-0", 2, "z-index", "9"], [1, "container"], [1, "navbar-brand", 3, "click"], [1, "brand-wrap", "mb-0"], ["alt", "#", 1, "img-fluid", 2, "object-fit", "contain", 3, "src"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item", "my-auto"], ["class", "nav-link widget-header me-4 text-dark", 3, "click", 4, "ngIf"], ["class", "nav-item dropdown my-auto", 4, "ngIf"], ["class", "nav-item my-auto", 4, "ngIf"], [1, "offer-section", "py-4"], [1, "container", "position-relative"], ["alt", "#", 1, "restaurant-pic", 3, "src"], [1, "pt-3", "text-white"], [1, "fw-bold"], [1, "text-white", "m-0"], [1, "rating-wrap", "d-flex", "align-items-center", "mt-2"], [1, "rating-stars", "list-unstyled", 2, "visibility", "hidden"], [1, "feather-star", "text-warning"], [1, "feather-star"], [1, "label-rating", "text-white", "ms-2", "small", 2, "visibility", "hidden"], [1, "pb-4"], [1, "row"], [1, "col-6", "col-md-2"], [1, "text-white-50", "fw-bold", "m-0", "small"], [1, "p-3", "bg-primary", "bg-primary", "mt-n3", "rounded", "position-relative"], [1, "d-flex", "align-items-center"], [1, "feather_icon"], ["href", "#ratings-and-reviews", 1, "text-decoration-none", "text-dark", "mx-2"], [1, "p-2", "bg-light", "rounded-circle", "fw-bold", "feather-mail"], [1, "text-decoration-none", "text-dark", 3, "click"], [1, "p-2", "bg-light", "rounded-circle", "fw-bold", "feather-map-pin"], [1, "btn", "btn-sm", "btn-outline-light", "ms-auto", 3, "href"], [1, "section-footer", "border-top", "bg-dark"], [1, "footer-copyright", "border-top", "py-3", "section-footer"], [1, "container", "d-flex", "align-items-center"], [1, "mb-0", "text-white"], [1, "text-muted", "mb-0", "ms-auto", "d-flex", "align-items-center"], ["target", "_blank", 1, "d-block", 3, "href"], ["alt", "#", "src", "../assets/img/appstore.png", "height", "40"], ["target", "_blank", 1, "d-block", "ms-3", 3, "href"], ["alt", "#", "src", "../assets/img/playmarket.png", "height", "40"], [1, "nav-link", "widget-header", "me-4", "text-dark", 3, "click"], [1, "icon", "d-flex", "align-items-center"], [1, "feather-user", "h6", "me-2", "mb-0"], [1, "nav-item", "dropdown", "my-auto"], ["href", "#", "id", "dropdown04", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "widget-header", "me-4", "text-dark", "dropdown-toggle"], ["aria-labelledby", "dropdown04", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["href", "checkout.html", 1, "nav-link", "widget-header", "me-4", "text-dark"], [1, "feather-shopping-cart", "h6", "me-2", "mb-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "section", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AppComponent_a_12_Template, 5, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AppComponent_li_13_Template, 11, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AppComponent_li_14_Template, 6, 0, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 15)(16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 18)(19, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 21)(24, "ul", 22)(25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 23)(27, "i", 23)(28, "i", 23)(29, "i", 23)(30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " (245 Reviews) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 26)(34, "div", 27)(35, "div", 28)(36, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Timings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 28)(41, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Working Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 3)(46, "div", 30)(47, "div", 31)(48, "div", 32)(49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_a_click_51_listener() { return ctx.open(ctx.lstAdmin.Address); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "footer", 38)(57, "div", 39)(58, "div", 40)(59, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p", 42)(62, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.Logo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loggedUser.Id <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loggedUser.Id > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loggedUser.Id > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.restaurant, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.lstAdmin.RestaurantName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.lstAdmin.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.lstAdmin.Timings);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.lstAdmin.Workingdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx.lstAdmin.SupportNo, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" \u00A9 ", ctx.year, " ", ctx.adminDetails.RestaurantName, " All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx.adminDetails.Android, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx.adminDetails.Ios, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
AppComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AppComponent, factory: AppComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "localStorageSyncReducer": () => (/* binding */ localStorageSyncReducer)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-localstorage */ 8981);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _Store_PageStore_Page_Reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store/PageStore/Page.Reducer */ 7696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 8357);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-orders/my-orders.component */ 2739);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
















function localStorageSyncReducer(rootReducer) {
    return (0,ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__.localStorageSync)({ keys: ['ooweb'], rehydrate: true })(rootReducer);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__.GooglePlaceModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreModule.forRoot({ ooweb: _Store_PageStore_Page_Reducer__WEBPACK_IMPORTED_MODULE_4__.Pagereducer }, {
            metaReducers: [localStorageSyncReducer]
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__.CartComponent,
        _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_7__.MyOrdersComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__.GooglePlaceModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreRootModule] }); })();


/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _Store_lstCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store/lstCart */ 46);
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/LoginUsers */ 3825);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/PageStore/Page.Actions */ 2705);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);














const _c0 = ["success"];
function CartComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64)(1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_14_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const d_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.changeAddress(d_r5.Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "div", 67)(5, "div", 68)(6, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 72)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Landmark :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_14_Template_a_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const d_r5 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.editAddress(d_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", d_r5.Id == ctx_r0.selectedAddress ? "checked form-check position-relative border-custom-radio p-0" : " form-check position-relative border-custom-radio p-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", d_r5.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r5.AddressType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r5.CompleteAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", d_r5.AddressType, "");
} }
function CartComponent_div_26_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", d_r9.Addon, " ", ctx_r10.Currency, "", d_r9.AddonAmount, "");
} }
function CartComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 74)(1, "div", 75)(2, "div", 76)(3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CartComponent_div_26_p_7_Template, 2, 3, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 80)(9, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const d_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", d_r9.Vegtype == "0" ? "me-2 text-danger" : "me-2 text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r9.Product);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", d_r9.AddonAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.Currency, "", d_r9.Price, "");
} }
function CartComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CartComponent_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 94)(1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_28_div_2_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.paymentMode("cod")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " COD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r12.selectedPaymentMode == "cod" ? true : false);
} }
function CartComponent_div_28_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97)(1, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_28_div_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.paymentMode("online")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r13.selectedPaymentMode == "online" ? true : false);
} }
function CartComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84)(1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CartComponent_div_28_div_2_Template, 4, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CartComponent_div_28_div_3_Template, 4, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Item Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Delivery Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Tax (7.5%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Total Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.optionCod == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.optionOnlinePayment == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.Currency, "", ctx_r3.itemTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.Currency, "", ctx_r3.deliveryCharges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.Currency, "", ctx_r3.taxAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.Currency, "", ctx_r3.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r3.Currency, "", ctx_r3.tip, "");
} }
function CartComponent_div_29_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_29_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.saveOrder(ctx_r20.toPay)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("PAY ", ctx_r18.Currency, "", ctx_r18.toPay, "");
} }
function CartComponent_div_29_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_div_29_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.saveOrder(ctx_r22.toPay)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Place Order ", ctx_r19.Currency, "", ctx_r19.toPay, "");
} }
function CartComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CartComponent_div_29_a_1_Template, 2, 2, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CartComponent_div_29_a_2_Template, 2, 2, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.selectedPaymentMode == "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.selectedPaymentMode == "cod");
} }
class CartComponent {
    constructor(apiCall, store, pipe, router, http, elementRef) {
        this.apiCall = apiCall;
        this.store = store;
        this.pipe = pipe;
        this.router = router;
        this.http = http;
        this.elementRef = elementRef;
        this.dbResult = [];
        this.lstAdmin = [];
        this.imagePath = "";
        this.lstCart1 = [];
        this.itemTotal = 0;
        this.deliveryCharges = 0;
        this.taxAmount = 0;
        this.discount = 0;
        this.toPay = 0;
        this.ProductQty = 1;
        this.ProductPrice = 0;
        this.ProductAmount = 0;
        this.alertMessage = "";
        this.lstAddress = [];
        this.addressId = 0;
        this.CompleteAddress = "";
        this.Floor = "";
        this.NearbyLandmark = "";
        this.Latitude = "";
        this.Longitude = "";
        this.AddressType = "Home";
        this.Zipcode = "";
        this.Phone = "";
        this.Country = "";
        this.State = "";
        this.City = "";
        this.submit = false;
        this.instructions = "";
        this.tip = 0;
        this.DiscountCode = "";
        this.DiscountId = 0;
        this.selectedAddress = 0;
        this.OrderType = "";
        this.OrderAmount = 0;
        this.Currency = "";
        this.paymentHandler = null;
        this.selectedPaymentMode = "";
        this.primaryColor = "";
        this.orderId = 0;
        this.PaymentStatus = "Unpaid";
        this.optionCod = 0;
        this.optionOnlinePayment = 0;
        this.RefrenceNo = "";
        this.addressValidation = "";
        this.Cod = 0;
        this.OnlinePayment = 0;
        debugger;
        this.imagePath = this.apiCall.imagePath;
        this.lstCart = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_0__.lstCart();
        this.loggedUser = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_1__.LoginUsers();
        if (this.store.source) {
            debugger;
            this.store.source.subscribe((data) => {
                debugger;
                const result1 = data['ooweb'].filter((x) => x.ViewName === 'cartDetails');
                if (result1.length > 0) {
                    debugger;
                    this.lstCart = result1[0].lstCartItems;
                    this.lstCart1 = this.lstCart;
                    this.itemTotal = result1[0].itemTotal;
                    this.taxAmount = result1[0].taxAmount;
                    this.discount = result1[0].discount;
                    this.toPay = result1[0].toPay;
                    this.tip = result1[0].tip;
                    this.instructions = result1[0].instructions;
                    this.DiscountCode = result1[0].DiscountCode;
                    this.DiscountId = result1[0].DiscountId;
                    this.OrderType = result1[0].OrderType;
                    if (result1[0].OrderType == "Delivery") {
                        this.deliveryCharges = result1[0].deliveryCharges;
                    }
                    else {
                        this.deliveryCharges = 0;
                    }
                }
                const result2 = data['ooweb'].filter((x) => x.ViewName === 'loginusers');
                if (result2[0].Id > 0) {
                    debugger;
                    this.loggedUser = result2[0];
                    this.viewAddress();
                }
                const result3 = data['ooweb'].filter((x) => x.ViewName1 === 'adminDetails');
                if (result3.length > 0 && result3[0].Currency != "") {
                    debugger;
                    this.Currency = result3[0].Currency;
                    this.optionCod = result3[0].Cod;
                    this.optionOnlinePayment = result3[0].Online;
                    if (this.optionCod == 1 && this.optionOnlinePayment == 1) {
                        this.selectedPaymentMode = 'cod';
                        this.Cod = 1;
                    }
                    if (this.optionOnlinePayment == 1) {
                        this.selectedPaymentMode = 'online';
                        this.OnlinePayment = 1;
                        this.Cod = 0;
                    }
                    if (this.optionCod == 1) {
                        this.selectedPaymentMode = 'cod';
                        this.Cod = 1;
                        this.OnlinePayment = 0;
                    }
                }
            });
        }
    }
    ngOnInit() {
        debugger;
        const rootStyles = getComputedStyle(this.elementRef.nativeElement);
        this.primaryColor = rootStyles.getPropertyValue('--primary');
        this.view();
        // this.invokeStripe();
    }
    view() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
            this.Logo = this.imagePath + this.lstAdmin.Logo;
            this.restaurant = this.imagePath + this.lstAdmin.Image;
        });
    }
    viewAddress() {
        debugger;
        this.apiCall.DBCalling('View', "UserAddresses", "", "", "", this.loggedUser.Id).subscribe(res => {
            debugger;
            this.dbResult = res;
            if (this.dbResult.length > 0) {
                this.lstAddress = this.dbResult[0];
                this.selectedAddress = (+this.lstAddress[0].Id);
            }
        });
    }
    cartQty(d, e) {
        debugger;
        for (let i = 0; i < this.lstCart1.length; i++) {
            if (e == this.lstCart1[i].ProductId) {
                if (d == '+') {
                    this.ProductQty += 1;
                    this.ProductAmount = this.ProductQty * (+this.ProductPrice);
                }
                else {
                    this.ProductQty -= 1;
                    this.ProductAmount = this.ProductQty * (+this.ProductPrice);
                }
                this.lstCart1[i].Qty = this.ProductQty;
                this.lstCart1[i].Price = this.ProductAmount;
                break;
            }
        }
        this.calculate();
    }
    changeAddress(d) {
        this.selectedAddress = (+d);
    }
    saveOrder(e) {
        debugger;
        if (this.selectedAddress > 0) {
            let order = JSON.stringify({ "Id": this.orderId, "UserId": this.loggedUser.Id,
                "Subtotal": this.itemTotal, "Tax": this.taxAmount, "DiscountCode": this.DiscountCode, "DiscountId": this.DiscountId,
                "Discount": this.discount, "Total": this.toPay, "Tip": this.tip,
                "deliveryCharges": this.deliveryCharges, "OrderType": this.OrderType, "OrderAmount": this.OrderAmount,
                "Instructions": this.instructions, "OrderStatus": "", "PaymentStatus": this.PaymentStatus,
                "Cod": this.Cod, "OnlinePayment": this.OnlinePayment,
                "RefrenceNo": this.RefrenceNo, "AddressId": this.selectedAddress });
            debugger;
            let orderDetails = JSON.stringify(this.lstCart1);
            debugger;
            this.apiCall.DBCalling('Insert', "Orders", order, orderDetails, "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    debugger;
                    this.orderId = this.dbResult[0][0].DBresult;
                    if (this.selectedPaymentMode == 'online') {
                        this.makePayment(this.toPay);
                    }
                    if (this.selectedPaymentMode != 'online') {
                        this.lstCart = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_0__.lstCart();
                        this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_2__.OpenPage(Object.assign({}, this.lstCart)));
                        const modal = new bootstrap.Modal(document.getElementById('success'));
                        modal.show();
                        this.orderEmail();
                    }
                }
            });
        }
        else {
            debugger;
            if (this.lstAddress.length == 0) {
                this.addressValidation = "Add Addresss";
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: 'Add Delivery Address',
                    text: 'It looks like you haven\'t added a delivery address yet. Please add one to proceed with your order.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
            }
        }
    }
    removeProduct(e) {
        debugger;
        for (let i = 0; i < this.lstCart1.length; i++) {
            if (e == this.lstCart1[i].ProductId) {
                debugger;
                this.lstCart1.splice(i, 1);
                this.alertMessage = "remove";
                setTimeout(() => {
                    this.alertMessage = "hide";
                }, 2000);
            }
        }
        this.calculate();
    }
    calculate() {
        debugger;
        this.itemTotal = 0;
        for (let i = 0; i < this.lstCart1.length; i++) {
            this.itemTotal += (+this.lstCart1[i].Price) + (+this.lstCart1[i].AddonAmount);
        }
        this.toPay = this.itemTotal + this.deliveryCharges;
        // if(this.coupon !=''){
        //   debugger;
        //   this.applyCoupon();
        // }
        this.payment();
    }
    payment() {
        debugger;
        this.taxAmount = +((this.itemTotal + this.deliveryCharges - this.discount) * 7.5 / 100).toFixed(2);
        this.toPay = +(this.itemTotal + this.deliveryCharges + this.taxAmount - this.discount).toFixed(2);
    }
    From(address) {
        debugger;
        this.CompleteAddress = address.formatted_address;
        this.Latitude = address.geometry.location.lat();
        this.Longitude = address.geometry.location.lng();
    }
    saveAddres() {
        debugger;
        this.submit = true;
        if (this.Country != '' && this.State != '' && this.City != '' && this.Zipcode != '' && this.CompleteAddress != '') {
            debugger;
            var data = JSON.stringify({ "Id": this.addressId, "UserId": this.loggedUser.Id,
                "CompleteAddress": this.CompleteAddress, "Floor": this.Floor, "NearbyLandmark": this.NearbyLandmark, "Latitude": this.Latitude, "Longitude": this.Longitude,
                "AddressType": this.AddressType, "Zipcode": this.Zipcode, "Phone": this.Phone, "Country": this.Country, "State": this.State, "City": this.City });
            let operation;
            if (this.addressId == 0) {
                operation = "Insert";
            }
            else {
                operation = "Update";
            }
            this.apiCall.DBCalling(operation, "UserAddresses", data, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    debugger;
                    this.reset();
                    this.viewAddress();
                    window.location.reload();
                }
            });
        }
    }
    addressTYpe(e) {
        this.AddressType = e;
    }
    reset() {
        this.submit = false;
        this.addressId = 0;
        this.CompleteAddress = "";
        this.Floor = "";
        this.NearbyLandmark = "";
        this.Latitude = "";
        this.Longitude = "";
        this.AddressType = "";
        this.Zipcode = "";
        this.Phone = "";
        this.Country = "";
        this.State = "";
        this.City = "";
    }
    home() {
        this.router.navigateByUrl('Home');
    }
    makePayment(amount) {
        var that = this;
        const paymentHandler = window.StripeCheckout.configure({
            key: 'pk_test_51NgY2CSG79Dxl7Woz4vwsFMHv2iNox8abFyXl0P6sxA5sHfIFdOZH6wXFuIDDfgLxYlH8hHQzVT6HuLC92EipqeT00X3EKc1Ij',
            locale: 'auto',
            token: function (stripeToken) {
                debugger;
                console.log({ stripeToken });
                // alert('Stripe token generated!');
                that.verifyToken(stripeToken.id);
            }
        });
        paymentHandler.open({
            name: 'Xeato',
            description: 'Order Id : ' + this.orderId,
            amount: amount * 100,
            currency: 'inr'
        });
    }
    verifyToken(e) {
        debugger;
        const secretKey = 'sk_test_51NgY2CSG79Dxl7WoyVTPDLNtj0dpXjH2maruBd50NDjdqwojmzDQcIKaGeu99lkxiJPwnIQZZbh0VQPZbckUUfii00TnBE4ZX6'; // Replace with your actual Stripe secret key
        const tokenId = e; // Replace with the actual token ID
        debugger;
        const url = `https://api.stripe.com/v1/tokens/${tokenId}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
            'Authorization': `Bearer ${secretKey}`
        });
        debugger;
        this.http.get(url, { headers }).subscribe((response) => {
            debugger;
            this.updateOrder(response.id);
            console.log('Token verification successful:', response);
            // Now you can handle the response data
        }, (error) => {
            console.error('Token verification failed:', error);
        });
    }
    // invokeStripe() {
    //   if(!window.document.getElementById('stripe-script')) {
    //     const script = window.document.createElement("script");
    //     script.id = "stripe-script";
    //     script.type = "text/javascript";
    //     script.src = "https://checkout.stripe.com/checkout.js";
    //     script.onload = () => {
    //       this.paymentHandler = (<any>window).StripeCheckout.configure({
    //         key: 'pk_test_51NgY2CSG79Dxl7Woz4vwsFMHv2iNox8abFyXl0P6sxA5sHfIFdOZH6wXFuIDDfgLxYlH8hHQzVT6HuLC92EipqeT00X3EKc1Ij',
    //         locale: 'auto',
    //         token: function (stripeToken: any) {
    //           console.log(stripeToken)
    //           alert('Payment has been successfull!');
    //         }
    //       });
    //     }
    //     window.document.body.appendChild(script);
    //   }
    // }
    updateOrder(e) {
        debugger;
        var data = ({ 'Id': this.orderId, 'RefrenceNo': e, 'PaymentStatus': 'Paid' });
        var jsonData = JSON.stringify(data);
        this.apiCall.DBCalling("updateOrder", "Orders", jsonData, "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            if (this.dbResult[0][0].DBresult > 0) {
                debugger;
                this.lstCart = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_0__.lstCart();
                this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_2__.OpenPage(Object.assign({}, this.lstCart)));
                const modal = new bootstrap.Modal(document.getElementById('success'));
                modal.show();
                this.orderEmail();
            }
            else if (this.dbResult[0][0].DBresult == -1) {
                "test";
            }
        });
    }
    paymentMode(e) {
        debugger;
        if (e == 'cod') {
            this.PaymentStatus = "Unpaid";
            this.OnlinePayment = 0;
            this.Cod = 1;
        }
        else {
            this.OnlinePayment = 1;
            this.Cod = 0;
        }
        this.selectedPaymentMode = e;
    }
    orderEmail() {
        this.http.post('https://nextasoft.in/order-online/Api/orderEmail.php', { 'To': this.loggedUser.Email, 'orderId': this.orderId, 'username': this.loggedUser.FirstName + ' ' + this.loggedUser.LastName, 'theme': this.primaryColor }).subscribe(res => {
            debugger;
            console.log(res);
        });
    }
    myOrders() {
        this.router.navigateByUrl('my-orders');
        window.location.reload();
    }
    editAddress(d) {
        debugger;
        this.addressId = d.Id;
        this.AddressType = d.AddressType;
        this.Zipcode = d.Zipcode;
        this.Phone = d.Phone;
        this.Country = d.Country;
        this.State = d.State;
        this.City = d.State;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_4__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], viewQuery: function CartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    } }, decls: 106, vars: 19, consts: [[1, "container", "position-relative"], [1, "py-5", "row", "g-4"], [1, "col-md-8"], [1, "osahan-cart-item", "mb-3", "rounded", "shadow-sm", "bg-white", "overflow-hidden"], [1, "osahan-cart-item-profile", "bg-white", "p-3", "mt-4"], [1, "d-flex", "flex-column"], [1, "row", "g-4"], [1, "col-md-6", "my-auto"], [1, "m-0", "fw-bold"], [1, "col-md-6", "my-auto", "text-right"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-primary", "float-end", 3, "click"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "osahan-cart-item", "rounded", "rounded", "shadow-sm", "overflow-hidden", "bg-white", "sticky_sidebar", "mb-3"], [1, "d-flex", "border-bottom", "osahan-cart-item-profile", "bg-white", "p-3"], ["alt", "osahan", 1, "me-3", "rounded-circle", "img-fluid", 2, "width", "41px", "height", "41px", 3, "src"], [1, "mb-1", "fw-bold"], [1, "mb-0", "small", "text-muted"], [1, "feather-map-pin"], [1, "bg-white", "border-bottom", "py-2"], ["class", "gold-members row align-items-center justify-content-between px-3 py-2 border-bottom", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "bg-white p-3 clearfix border-bottom", 4, "ngIf"], ["class", "p-3", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "shadow-none"], [1, "modal-body"], [1, "row"], [1, "col-md-12", "mb-2"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "w-100"], ["type", "radio", "name", "btnradio", "id", "btnradio4", "checked", "", 1, "btn-check", 3, "click"], ["for", "btnradio4", 1, "btn", "btn-outline-secondary"], ["type", "radio", "name", "btnradio", "id", "btnradio5", 1, "btn-check", 3, "click"], ["for", "btnradio5", 1, "btn", "btn-outline-secondary"], ["type", "radio", "name", "btnradio", "id", "btnradio6", 1, "btn-check", 3, "click"], ["for", "btnradio6", 1, "btn", "btn-outline-secondary"], [1, "col-md-6", "mb-2"], [1, "form-label", "fw-bold", "small"], [1, "input-group"], ["placeholder", "Enter country", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Enter state", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Enter city", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Enter pin", "type", "number", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-12", "form-group", "mb-2"], [1, "input-group", "mb-3"], ["placeholder", "Enter address", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "modal-footer", "p-0", "border-0"], [1, "col-6", "m-0", "p-0"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "border-top", "btn-lg", "w-100"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click"], ["id", "success", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "recepie-body"], [1, "col-md-3", "col-3", "mx-auto"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "fill", "#22cb7c", 1, "ionicon"], ["d", "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"], [1, "col-md-12", "mt-4", "mb-4", "text-center"], [1, "col-md-6", "col-6"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", "w-100", 3, "click"], [1, "col-lg-6"], [3, "ngClass", "click"], [1, "form-check-label", "w-100", "border", "rounded", 3, "for"], [1, "p-3", "bg-white", "rounded", "rounded-bottom-0", "shadow-sm", "w-100"], [1, "d-flex", "align-items-center", "mb-2"], [1, "mb-0"], [1, "mb-0", "badge", "text-bg-success", "ms-auto"], [1, "icofont-check-circled"], [1, "small", "text-muted", "m-0"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-light", "border-top", "w-100", "rounded-top-0", 3, "click"], [1, "gold-members", "row", "align-items-center", "justify-content-between", "px-3", "py-2", "border-bottom"], [1, "col-md-7", "col-7"], [1, "media-body", "d-flex"], [3, "ngClass"], [1, "m-0"], ["class", "m-0 mx-4", 4, "ngIf"], [1, "col-md-5", "col-5", "p-0"], [1, "text-gray", "mb-0", "float-end", "ms-2", "text-muted", "mx-1"], [1, "m-0", "mx-4"], ["src", "https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png", "alt", "", 1, "w-100"], [1, "bg-white", "p-3", "clearfix", "border-bottom"], [1, "d-flex"], ["class", "form-check", 4, "ngIf"], ["class", "form-check mx-3", 4, "ngIf"], [1, "mb-1"], [1, "float-end", "text-dark"], [1, "text-info", "ms-1"], [1, "feather-info"], [1, "mb-1", "text-success"], [1, "float-end", "text-success"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input", "custom-control", "custom-radio", "custom-control-inline", 3, "checked", "click"], ["for", "flexRadioDefault1", 1, "form-check-label"], [1, "form-check", "mx-3"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input", "custom-control", "custom-radio", "custom-control-inline", 3, "checked", "click"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "p-3"], ["class", "btn btn-success w-100 btn-lg", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", "w-100", "btn-lg", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Delivery Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_a_click_12_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " ADD NEW ADDRESS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CartComponent_div_14_Template, 19, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 5)(20, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CartComponent_div_26_Template, 11, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CartComponent_div_27_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CartComponent_div_28_Template, 26, 12, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CartComponent_div_29_Template, 3, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 24)(31, "div", 25)(32, "div", 26)(33, "div", 27)(34, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Add Delivery Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 30)(38, "div", 31)(39, "div", 32)(40, "div", 33)(41, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_input_click_41_listener() { return ctx.addressTYpe("Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_input_click_44_listener() { return ctx.addressTYpe("Work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_input_click_47_listener() { return ctx.addressTYpe("Other"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 40)(51, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 42)(54, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_54_listener($event) { return ctx.Country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 40)(56, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 42)(59, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_59_listener($event) { return ctx.State = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 40)(61, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 42)(64, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_64_listener($event) { return ctx.City = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 40)(66, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 42)(69, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_69_listener($event) { return ctx.Zipcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 47)(71, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 48)(74, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_74_listener($event) { return ctx.CompleteAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 51)(78, "div", 52)(79, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 52)(82, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_button_click_82_listener() { return ctx.saveAddres(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 55)(85, "div", 25)(86, "div", 26)(87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 30)(90, "div", 56)(91, "div", 31)(92, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "svg", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 60)(96, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Order saved successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 61)(101, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_a_click_101_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 61)(104, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_Template_a_click_104_listener() { return ctx.myOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.restaurant, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.lstAdmin.RestaurantName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lstAdmin.Address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstCart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart1.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart1.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.Country)("ngClass", ctx.Country == "" && ctx.submit == true ? "validate form-control" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.State)("ngClass", ctx.State == "" && ctx.submit == true ? "validate form-control" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.City)("ngClass", ctx.City == "" && ctx.submit == true ? "validate form-control" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.Zipcode)("ngClass", ctx.Zipcode == "" && ctx.submit == true ? "validate form-control" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.CompleteAddress)("ngClass", ctx.CompleteAddress == "" && ctx.submit == true ? "validate form-control" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Order Id : #ORD-", ctx.orderId, "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store/PageStore/Page.Actions */ 2705);
/* harmony import */ var _Store_lstCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/lstCart */ 46);
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/LoginUsers */ 3825);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);












const _c0 = ["login"];
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Product Added\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Product Removed\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HomeComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const d_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.imagePath, "", d_r13.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r13.Name);
} }
function HomeComponent_div_17_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "h6", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_17_div_6_div_1_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const e_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.add(e_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const e_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r17.imagePath, "", e_r16.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](e_r16.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](e_r16.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r17.Currency, "", e_r16.Price, " ");
} }
function HomeComponent_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_div_17_div_6_div_1_Template, 11, 6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r16 = ctx.$implicit;
    const d_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", d_r14.Id == e_r16.CategoryId);
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65)(1, "h6", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HomeComponent_div_17_div_6_Template, 2, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const d_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", d_r14.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", d_r14.Products, " ITEMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.lstProducts);
} }
function HomeComponent_div_29_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", d_r23.Addon, " ", ctx_r24.Currency, "", d_r23.AddonAmount, "");
} }
function HomeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const d_r23 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.productAddons(d_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 79)(3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HomeComponent_div_29_p_7_Template, 2, 3, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 82)(9, "span", 83)(10, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const d_r23 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.cartQty("-", d_r23.ProductId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const d_r23 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.cartQty("+", d_r23.ProductId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_i_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const d_r23 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.removeProduct(d_r23.ProductId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const d_r23 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", d_r23.Vegtype == "0" ? "me-2 text-danger" : "me-2 text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r23.Product);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", d_r23.AddonAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", d_r23.Qty <= 1 ? "btn-sm left dec btn btn-outline-secondary disabled" : "btn-sm left dec btn btn-outline-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", d_r23.Qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r4.Currency, "", d_r23.Price, "");
} }
function HomeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 87)(1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 90)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Looks like you have not added anything to your cart. Go ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " ahead and explore the categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function HomeComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 94)(2, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.coupon = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_31_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.applyCoupon()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "APPLY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r31.coupon);
} }
function HomeComponent_div_31_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 70)(1, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Coupon applied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_31_p_3_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.removeCoupon()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function HomeComponent_div_31_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 70)(1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r33.invalidCoupon);
} }
function HomeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 91)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomeComponent_div_31_div_2_Template, 6, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HomeComponent_div_31_p_3_Template, 5, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeComponent_div_31_p_4_Template, 3, 1, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 94)(7, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Add Tip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.tipAmount = $event); })("input", function HomeComponent_div_31_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.addTip()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 97)(11, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "textarea", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_textarea_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.instructions = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.discount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.discount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.invalidCoupon != "" && ctx_r6.coupon != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.tipAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.instructions);
} }
function HomeComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 118)(1, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_32_div_2_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.ordType("Pickup")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Pickup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r43.OrderType == "Pickup" ? true : false);
} }
function HomeComponent_div_32_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121)(1, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_32_div_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.ordType("Delivery")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r44.OrderType == "Delivery" ? true : false);
} }
function HomeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 107)(1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomeComponent_div_32_div_2_Template, 4, 1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HomeComponent_div_32_div_3_Template, 4, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Item Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Delivery Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Total Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "h6", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "TO PAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.lstAdmin.Pickup == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.lstAdmin.Delivery == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.Currency, "", ctx_r7.itemTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.Currency, "", ctx_r7.OrderType == "Delivery" ? ctx_r7.deliveryCharges : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tax (", ctx_r7.lstAdmin.Tax, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.Currency, "", ctx_r7.taxAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.Currency, "", ctx_r7.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.Currency, "", ctx_r7.tipAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r7.Currency, "", ctx_r7.toPay, "");
} }
function HomeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 124)(1, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.checkOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function HomeComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Product Description : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.ProductDescription);
} }
function HomeComponent_div_44_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("+", ctx_r52.Currency, "", d_r51.Price, "");
} }
function HomeComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 127)(1, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_44_Template_input_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const d_r51 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.addExtra(d_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeComponent_div_44_span_4_Template, 2, 2, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const d_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", d_r51.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", d_r51.Price > 0);
} }
function HomeComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 132)(1, "div", 4)(2, "div", 133)(3, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_82_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.username = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 133)(7, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_82_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.password = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5)(11, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_82_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r59.Login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.username)("ngClass", ctx_r11.username == "" && ctx_r11.submit == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.password)("ngClass", ctx_r11.password == "" && ctx_r11.submit == true ? "form-control validate" : "form-control");
} }
function HomeComponent_div_83_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 147)(1, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r62.msg);
} }
function HomeComponent_div_83_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 147)(1, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r63.exist);
} }
function HomeComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 139)(2, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_83_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r64.FirstName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 139)(6, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_83_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.LastName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 139)(10, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Phone No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_83_div_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r67.MobileNo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 139)(14, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_83_div_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r68.Email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 139)(18, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_83_div_1_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r69.Password = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 139)(22, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_83_div_1_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r70.ConfirmPassword = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HomeComponent_div_83_div_1_div_25_Template, 3, 1, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, HomeComponent_div_83_div_1_div_26_Template, 3, 1, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 5)(28, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_83_div_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r71.register()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r60.FirstName)("ngClass", ctx_r60.FirstName == "" && ctx_r60.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r60.LastName)("ngClass", ctx_r60.LastName == "" && ctx_r60.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r60.MobileNo)("ngClass", ctx_r60.MobileNo == "" && ctx_r60.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r60.Email)("ngClass", ctx_r60.Email == "" && ctx_r60.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r60.Password)("ngClass", ctx_r60.Password == "" && ctx_r60.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r60.ConfirmPassword)("ngClass", ctx_r60.ConfirmPassword == "" && ctx_r60.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.msg != "" && ctx_r60.Password != ctx_r60.ConfirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.exist != "");
} }
function HomeComponent_div_83_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 148)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 150)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Registration Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Congratulations, your account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " has been successfully created. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 147)(11, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_83_div_2_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.login1()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 153)(13, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} }
function HomeComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_div_83_div_1_Template, 30, 14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomeComponent_div_83_div_2_Template, 15, 0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.active1 == "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.active1 != "form");
} }
class HomeComponent {
    // loggedUser = [];
    constructor(apiCall, store, pipe, router, renderer, http, elementRef) {
        this.apiCall = apiCall;
        this.store = store;
        this.pipe = pipe;
        this.router = router;
        this.renderer = renderer;
        this.http = http;
        this.elementRef = elementRef;
        this.dbResult = [];
        this.lstAdmin = [];
        this.imagePath = "";
        this.lstCategories = [];
        this.lstProducts = [];
        this.lstExtras = [];
        this.extras = [];
        this.search = "";
        this.ProductId = 0;
        this.Product = "";
        this.addonId = 0;
        this.lstCart = [];
        this.ProductQty = 1;
        this.ProductPrice = 0;
        this.ProductAmount = 0;
        this.AddonId = 0;
        this.Addon = "";
        this.AddonAmount = 0;
        this.Vegtype = 0;
        this.alertMessage = "";
        this.itemTotal = 0;
        this.deliveryCharges = 0;
        this.discount = 0;
        this.toPay = 0;
        this.coupon = "";
        this.lstCoupons = [];
        this.tax = 7.5;
        this.taxAmount = 0;
        this.invalidCoupon = "";
        this.Active = "Signin";
        this.ProductDescription = "";
        this.FirstName = "";
        this.LastName = "";
        this.MobileNo = "";
        this.Email = "";
        this.Password = "";
        this.ConfirmPassword = "";
        this.Id = 0;
        this.username = "";
        this.password = "";
        this.submit = false;
        this.submit1 = false;
        this.instructions = "";
        this.OrderType = "Pickup";
        this.Currency = "";
        this.lstCartStore1 = [];
        this.operation = "";
        this.active1 = "form";
        this.msg = "";
        this.exist = "";
        this.RestaurantName = "";
        this.RestaurantEmail = "";
        this.OwnerEmail = "";
        this.primaryColor = "";
        this.tipAmount = 0;
        this.pAddonId = 0;
        debugger;
        this.imagePath = this.apiCall.imagePath;
        debugger;
        this.lstCartStore = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_1__.lstCart();
        this.loggedUser = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_2__.LoginUsers();
        debugger;
        var date = new Date;
        this.todaysDate = this.pipe.transform(date, 'yyy-MM-dd');
        debugger;
        if (this.store.source) {
            debugger;
            this.store.source.subscribe((data) => {
                debugger;
                const result1 = data['ooweb'].filter((x) => x.ViewName === 'cartDetails');
                if (result1.length > 0 && result1[0].lstCartItems.length > 0) {
                    debugger;
                    this.lstCartStore1 = result1[0].lstCartItems;
                    // this.lstCart = this.lstCartStore1
                    this.lstCart = Object.assign([], this.lstCartStore1);
                    this.itemTotal = result1[0].itemTotal;
                    this.deliveryCharges = result1[0].deliveryCharges;
                    this.taxAmount = result1[0].taxAmount;
                    this.discount = result1[0].discount;
                    this.toPay = result1[0].toPay;
                    this.tipAmount = result1[0].tip;
                }
                debugger;
                const result2 = data['ooweb'].filter((x) => x.ViewName1 === 'adminDetails');
                if (result2.length > 0 && result2[0].Currency != "") {
                    debugger;
                    this.Currency = result2[0].Currency;
                    this.RestaurantName = result2[0].RestaurantName;
                    this.RestaurantEmail = result2[0].RestaurantEmail;
                    this.OwnerEmail = result2[0].Email;
                    this.deliveryCharges = result2[0].DeliveryCharges;
                }
                const result3 = data['ooweb'].filter((x) => x.ViewName === 'loginusers');
                if (result3[0].Id > 0) {
                    debugger;
                    this.loggedUser = result3[0];
                }
            });
        }
    }
    ngOnInit() {
        debugger;
        const rootStyles = getComputedStyle(this.elementRef.nativeElement);
        this.primaryColor = rootStyles.getPropertyValue('--primary');
        debugger;
        this.view();
        this.viewCategories();
        this.viewProducts();
        this.viewExtras();
        this.viewCoupons();
        // this.viewLoginuser();
    }
    ngAfterViewInit() {
        if (this.loggedUser.Id == 0) {
            this.openPop();
        }
    }
    view() {
        debugger;
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
            this.Logo = this.imagePath + this.lstAdmin.Logo;
            this.restaurant = this.imagePath + this.lstAdmin.Image;
        });
    }
    viewCategories() {
        this.apiCall.DBCalling('View', "categories", "", "", "", this.search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstCategories = this.dbResult[0];
        });
    }
    viewProducts() {
        this.apiCall.DBCalling('View', "Products", "", "", "", this.search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstProducts = this.dbResult[0];
        });
    }
    viewExtras() {
        debugger;
        this.apiCall.DBCalling('View', "Extras", "", "", "", this.search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstExtras = this.dbResult[0];
            this.lstExtras.push({ "Id": 0, "Name": "No addons", "Price": 0, "checked": false });
        });
    }
    viewCoupons() {
        debugger;
        this.apiCall.DBCalling('View', "Coupons", "", "", "", this.search).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstCoupons = this.dbResult[0];
        });
    }
    Login() {
        debugger;
        this.submit = true;
        if (this.username != "" && this.password != "") {
            this.apiCall.DBCalling('View', "Loginusers", this.username, this.password, "", 'User').subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult.length > 0) {
                    debugger;
                    this.loggedUser = this.dbResult[0][0];
                    this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_0__.OpenPage(Object.assign({}, this.loggedUser)));
                    window.location.reload();
                    // const modal = new bootstrap.Modal(document.getElementById('login'));
                    // modal.hide();
                }
                else {
                    alert('Invalid credentials');
                }
            });
        }
    }
    add(e) {
        debugger;
        this.ProductQty = 1;
        this.Product = e.Name;
        this.ProductId = e.Id;
        this.ProductPrice = e.Price;
        this.ProductAmount = e.Price;
        this.ProductDescription = e.Description;
        this.Vegtype = e.IsVegeterian;
        let data = (e.Extras);
        this.search = data;
        this.viewExtras();
    }
    Qty(d) {
        debugger;
        if (d == '+') {
            this.ProductQty += 1;
            this.ProductAmount = this.ProductQty * (+this.ProductPrice);
        }
        else {
            this.ProductQty -= 1;
            this.ProductAmount = this.ProductQty * (+this.ProductPrice);
        }
    }
    cartQty(d, e) {
        debugger;
        for (let i = 0; i < this.lstCart.length; i++) {
            if (e == this.lstCart[i].ProductId) {
                if (d == '+') {
                    // this.ProductQty +=1;
                    // this.ProductAmount = this.ProductQty * (+this.ProductPrice);
                    this.lstCart[i].Qty += 1;
                    this.ProductAmount = this.lstCart[i].Qty * (+this.ProductPrice);
                }
                else {
                    this.lstCart[i].Qty -= 1;
                    this.ProductAmount = this.lstCart[i].Qty * (+this.ProductPrice);
                }
                // this.lstCart[i].Qty = this.ProductQty;
                this.lstCart[i].Price = this.ProductAmount;
                break;
            }
        }
        this.calculate();
    }
    addExtra(d) {
        debugger;
        this.AddonId = d.Id;
        this.Addon = d.Name;
        this.AddonAmount = d.Price;
    }
    addToCart() {
        debugger;
        this.ProductDescription = "";
        if (this.lstCart.length == 0) {
            this.lstCart.push({
                'Id': 0, 'ProductId': this.ProductId, 'Product': this.Product, 'Qty': this.ProductQty, 'Price': this.ProductAmount,
                'AddonId': this.AddonId, 'Addon': this.Addon, 'Vegtype': this.Vegtype, 'AddonAmount': this.AddonAmount
            });
        }
        else {
            let data = this.lstCart.filter((x) => x.ProductId === this.ProductId);
            if (data.length > 0) {
                for (let i = 0; i < this.lstCart.length; i++) {
                    if (this.ProductId == this.lstCart[i].ProductId) {
                        this.lstCart[i].Id = 0;
                        this.lstCart[i].ProductId = this.ProductId;
                        this.lstCart[i].Product = this.Product;
                        this.lstCart[i].Qty = this.ProductQty;
                        this.lstCart[i].Price = this.ProductAmount;
                        this.lstCart[i].AddonId = this.AddonId;
                        this.lstCart[i].AddonId = this.AddonId;
                        this.lstCart[i].Addon = this.Addon;
                        this.lstCart[i].AddonAmount = this.AddonAmount;
                        this.lstCart[i].Vegtype = this.Vegtype;
                        break;
                    }
                }
            }
            else {
                this.lstCart.push({
                    'Id': 0, 'ProductId': this.ProductId, 'Product': this.Product, 'Qty': this.ProductQty, 'Price': this.ProductAmount,
                    'AddonId': this.AddonId, 'Addon': this.Addon, 'Vegtype': this.Vegtype, 'AddonAmount': this.AddonAmount
                });
            }
        }
        this.alert();
        this.AddonId = 0;
        this.Addon = "";
        this.AddonAmount = 0;
        this.calculate();
    }
    addTip() {
        this.calculate();
    }
    calculate() {
        debugger;
        this.itemTotal = 0;
        for (let i = 0; i < this.lstCart.length; i++) {
            this.itemTotal += (+this.lstCart[i].Price) + (+this.lstCart[i].AddonAmount);
        }
        if (this.OrderType == 'Delivery') {
            this.toPay = this.itemTotal + (+this.deliveryCharges) + (+this.tipAmount);
        }
        else {
            this.toPay = this.itemTotal + (+this.tipAmount);
        }
        if (this.coupon != '') {
            debugger;
            this.applyCoupon();
        }
        this.payment();
    }
    applyCoupon() {
        debugger;
        let data = this.lstCoupons.filter((x) => x.Code === this.coupon);
        if (data.length > 0 && this.todaysDate >= data[0].ValidFrom && this.todaysDate <= data[0].ValidTo) {
            debugger;
            this.invalidCoupon = "";
            this.lstCartStore.DiscountId = data[0].Id;
            if (data[0].Type == 'Percentage') {
                debugger;
                this.discount = (this.itemTotal) * (+data[0].Amount) / 100;
            }
            else if (data[0].Type == 'Amount') {
                debugger;
                this.discount = data[0].Amount;
            }
            this.payment();
        }
        else {
            this.invalidCoupon = "Invalid Coupon Code!";
        }
    }
    removeCoupon() {
        debugger;
        this.toPay = (this.toPay + this.discount);
        this.coupon = '';
        this.discount = 0;
        this.calculate();
    }
    payment() {
        debugger;
        let deliveryCharges = 0;
        if (this.OrderType == 'Delivery') {
            deliveryCharges = +this.deliveryCharges;
        }
        else {
            deliveryCharges = 0;
        }
        // this.taxAmount = +((this.itemTotal + deliveryCharges - this.discount) * (this.lstAdmin.Tax) / 100).toFixed(2);
        this.taxAmount = +((this.itemTotal - this.discount) * (this.lstAdmin.Tax) / 100).toFixed(2);
        this.toPay = +(this.itemTotal + deliveryCharges + this.taxAmount + this.tipAmount - this.discount).toFixed(2);
    }
    alert() {
        // this.alertMessage = "show";
        // setTimeout(() => {
        //   this.alertMessage = "hide";
        // }, 2000);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            // title: 'Product added',
            text: 'Product Added to cart successfully',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    }
    productAddons(d) {
        debugger;
        // this.Active1 = true;
        let data = this.lstProducts.filter((x) => x.Id === d.ProductId);
        this.Product = d.Product;
        this.ProductDescription = data[0].Description;
        this.ProductPrice = d.Price;
        if (d.AddonId > 0) {
            this.pAddonId = d.AddonId;
        }
        else {
            this.pAddonId = 0;
        }
        this.search = data[0].Extras;
        this.viewExtras();
    }
    removeProduct(e) {
        debugger;
        for (let i = 0; i < this.lstCart.length; i++) {
            if (e == this.lstCart[i].ProductId) {
                debugger;
                this.lstCart.splice(i, 1);
                this.alertMessage = "remove";
                setTimeout(() => {
                    this.alertMessage = "hide";
                }, 2000);
            }
        }
        this.calculate();
    }
    navigate() {
        debugger;
        this.router.navigateByUrl('Cart');
    }
    ordType(d) {
        this.OrderType = d;
        this.calculate();
    }
    checkOut() {
        debugger;
        this.lstCartStore.lstCartItems = this.lstCart;
        this.lstCartStore.itemTotal = this.itemTotal;
        this.lstCartStore.deliveryCharges = +this.deliveryCharges;
        this.lstCartStore.discount = this.discount;
        this.lstCartStore.DiscountCode = this.coupon;
        this.lstCartStore.toPay = this.toPay;
        this.lstCartStore.taxAmount = this.taxAmount;
        this.lstCartStore.OrderType = this.OrderType;
        this.lstCartStore.instructions = this.instructions;
        this.lstCartStore.tip = this.tipAmount;
        this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_0__.OpenPage(Object.assign({}, this.lstCartStore)));
        if (this.store.source) {
            debugger;
            this.store.source.subscribe((data) => {
                debugger;
                const result1 = data['ooweb'].filter((x) => x.ViewName === 'loginusers');
                if (result1.length > 0) {
                    debugger;
                    if (result1[0].Id > 0) {
                        this.router.navigateByUrl('Cart');
                    }
                    else {
                        debugger;
                        const modal = new bootstrap.Modal(document.getElementById('login'));
                        modal.show();
                    }
                }
                else {
                    debugger;
                    const modal = new bootstrap.Modal(document.getElementById('login'));
                    modal.show();
                }
            });
        }
        // this.CallStore();
    }
    openPop() {
        debugger;
        const modal = new bootstrap.Modal(document.getElementById('login'));
        modal.show();
    }
    activeTab(e) {
        debugger;
        this.Active = e;
        if (e == 'Signup') {
            this.active1 = "form";
        }
    }
    // CallStore(){
    // if (this.store.source) {
    //   debugger;
    //   this.store.source.subscribe((data: any) => {
    //     debugger;
    //     const result1 = data['ooweb'].filter((x: any) => x.ViewName === 'cartDetails');
    //     if (result1.length > 0) {
    //       debugger;
    //       this.lstCart = result1[0].lstCartItems;
    //     }
    //   });
    // }s
    // }
    clear() {
        debugger;
        this.lstCartStore = new _Store_lstCart__WEBPACK_IMPORTED_MODULE_1__.lstCart();
        this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_0__.OpenPage(Object.assign({}, this.lstCartStore)));
    }
    register() {
        debugger;
        this.submit1 = true;
        if (this.FirstName != '' && this.LastName != '' && this.MobileNo != '' && this.Email != '' && this.Password != '' && this.ConfirmPassword != '' && this.Password == this.ConfirmPassword) {
            debugger;
            this.msg = "";
            var data = ({ 'Id': this.Id, 'FirstName': this.FirstName, 'LastName': this.LastName, 'MobileNo': this.MobileNo, 'Email': this.Email, 'Password': this.Password, 'ConfirmPassword': this.ConfirmPassword });
            var jsonData = JSON.stringify(data);
            if (this.Id == 0) {
                this.operation = "Insert";
            }
            else {
                this.operation = "Update";
            }
            this.apiCall.DBCalling(this.operation, "Loginusers", jsonData, "", "", "").subscribe(res => {
                debugger;
                this.dbResult = res;
                if (this.dbResult[0][0].DBresult > 0) {
                    if (this.Id == 0) {
                        // this.Reset();
                        this.registerMail();
                        this.active1 = "Success";
                    }
                }
                else if (this.dbResult[0][0].DBresult == -1) {
                    debugger;
                    this.exist = "Email Already Exist!";
                }
            });
        }
        else if (this.Password != this.ConfirmPassword) {
            this.msg = "Invalid Password!";
        }
    }
    login1() {
        this.Active = "login";
    }
    registerMail() {
        debugger;
        var mail = JSON.stringify('nextasoft.in@gmail.com');
        var mailmsg = '<!DOCTYPE html>' +
            '<html>' +
            '<body style="font-family: Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0;">' +
            '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f6f6f6;">' +
            '<tr>' +
            '<td align="center">' +
            '<table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; margin-top: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">' +
            '<tr>' +
            '<td align="center" style="padding: 40px;">' +
            '<img src="' + this.imagePath + this.lstAdmin.Logo + '" style="width:80%">' +
            '<h2 style="color:' + this.primaryColor + '">Thank You for Registering with ' + this.RestaurantName + '</h2>' +
            // '<p style="color: #333;">Dear Valued Customer,</p>'+
            // '<p style="color: #333;">Were excited to welcome you to the '+ this.RestaurantName +' family! </p>'+
            // '<p style="color: #333;">Heres what you can do with '+ this.RestaurantName +' :</p>'+
            '<ul style="color: #333;">' +
            '<li>Browse our delicious menu</li>' +
            '<li>Place orders for delivery or pickup</li>' +
            '</ul>' +
            // '<p style="color: #333;">If you have any questions or need assistance with our app, our support team is here to help. Just reach out to us at [Support Email Address].</p>'+
            '<p style="color: #333;">Thank you for choosing ' + this.RestaurantName + ' for your food cravings. We cant wait to serve you!</p>' +
            '<p style="color: #333;"><a href="www.nextasoft.in">www.nextasoft.in</a></p>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</body>' +
            '</html>';
        var subject = 'Welcome to ' + this.RestaurantName + ' ' + this.FirstName + ' ' + this.LastName + ' : Your Registration is Complete!';
        // var mailmsg = "<html><body><h1>Hello, World!</h1><p>This is an HTML email.</p></body></html>"
        // console.log(data2)
        this.http.post('https://nextasoft.in/order-online/Api/registration.php', { 'To': this.Email, 'Message': mailmsg, 'Subject': subject, 'From': this.OwnerEmail, 'Restaurant': this.RestaurantName }).subscribe(res => {
            debugger;
            console.log(res);
        });
    }
    Reset() {
        debugger;
        this.Id = 0;
        this.FirstName = "";
        this.LastName = "";
        this.MobileNo = "";
        this.Email = "";
        this.Password = "";
        this.ConfirmPassword = "";
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_4__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
    } }, decls: 84, vars: 23, consts: [["class", "alert alert-success", "role", "alert", "style", "top: 15px;position: fixed;margin-left: auto;z-index: 9;right: 15px;", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", "style", "top: 15px;position: fixed;margin-left: auto;z-index: 9;right: 15px;", 4, "ngIf"], [1, "container"], [1, "fw-bold", "pt-4", "m-0", "mb-2"], [1, "row"], [1, "col-md-12"], [1, "categories", "p-0"], ["style", "margin-right: 15px; list-style: none;", 4, "ngFor", "ngForOf"], [1, "container", "position-relative"], [1, "col-md-8", "pt-3"], [1, "shadow-sm", "rounded", "bg-white", "mb-3", "overflow-hidden"], [1, "d-flex", "item-aligns-center"], [1, "fw-bold", "h6", "p-3", "border-bottom", "mb-0", "w-100"], ["class", "row m-0", 4, "ngFor", "ngForOf"], [1, "col-md-4", "pt-3"], [1, "osahan-cart-item", "rounded", "rounded", "shadow-sm", "overflow-hidden", "bg-white", "sticky_sidebar", "mb-3"], [1, "d-flex", "border-bottom", "osahan-cart-item-profile", "bg-white", "p-3"], ["alt", "osahan", 1, "me-3", "rounded-circle", "img-fluid", 2, "width", "41px", "height", "41px", 3, "src"], [1, "d-flex", "flex-column"], [1, "mb-1", "fw-bold"], [1, "mb-0", "small", "text-muted"], [1, "feather-map-pin"], [1, "bg-white", "border-bottom", "py-2"], ["class", "gold-members row align-items-center justify-content-between px-3 py-2 border-bottom", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "bg-white p-3 py-3 border-bottom clearfix", 4, "ngIf"], ["class", "bg-white p-3 clearfix border-bottom", 4, "ngIf"], ["class", "p-3", 4, "ngIf"], ["id", "extras", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "shadow-none"], [1, "modal-body"], [1, "recepie-body"], ["class", "row", 4, "ngIf"], ["class", "form-check custom-radio border-bottom py-2", 4, "ngFor", "ngForOf"], [1, "fw-bold", "mt-4"], [1, "d-flex", "align-items-center"], [1, "m-0"], [1, "ms-auto"], [1, "count-number"], ["type", "button", 3, "ngClass", "click"], [1, "feather-minus"], ["type", "text", "readonly", "", 1, "count-number-input", 3, "value"], ["type", "button", 1, "btn-sm", "right", "inc", "btn", "btn-outline-secondary", 3, "click"], [1, "feather-plus"], [1, "modal-footer", "p-0", "border-0"], [1, "col-6", "m-0", "p-0"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "border-top", "btn-lg", "w-100"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click"], ["id", "login", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "w-100"], ["type", "radio", "name", "btnradio", "id", "btnradio4", "checked", "", 1, "btn-check", 3, "click"], ["for", "btnradio4", 1, "btn", "btn-outline-secondary"], ["type", "radio", "name", "btnradio", "id", "btnradio6", 1, "btn-check", 3, "click"], ["for", "btnradio6", 1, "btn", "btn-outline-secondary"], ["class", "col-md-12 mt-3", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", 2, "top", "15px", "position", "fixed", "margin-left", "auto", "z-index", "9", "right", "15px"], ["role", "alert", 1, "alert", "alert-danger", 2, "top", "15px", "position", "fixed", "margin-left", "auto", "z-index", "9", "right", "15px"], [2, "margin-right", "15px", "list-style", "none"], [1, "category"], ["alt", "", 2, "width", "70px", "height", "70px", "object-fit", "cover", "border-radius", "50%", 3, "src"], [1, "text-center", "mt-2"], [1, "row", "m-0"], [1, "p-3", "m-0", "bg-light", "w-100"], [1, "text-black-50"], [1, "col-md-12", "px-0", "border-top"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["class", "d-flex align-items-center gap-2 p-3 border-bottom menu-list", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "p-3", "border-bottom", "menu-list"], ["alt", "#", 1, "rounded-pill", 3, "src"], [1, "mb-1"], [1, "text-muted", "mb-0", "text-container"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#extras", 1, "btn", "btn-outline-secondary", "btn-sm", "mx-2", 3, "click"], [1, "gold-members", "row", "align-items-center", "justify-content-between", "px-3", "py-2", "border-bottom"], ["data-bs-toggle", "modal", "data-bs-target", "#extras", 1, "col-md-7", "col-7", 3, "click"], [1, "media-body", "d-flex"], [3, "ngClass"], ["class", "m-0 mx-4", 4, "ngIf"], [1, "col-md-5", "col-5", "p-0"], [1, "count-number", "float-end"], [1, "feather-minus-circle", "mx-2", "text-danger", 3, "click"], [1, "text-gray", "mb-0", "float-end", "ms-2", "text-muted", "mx-3"], [1, "m-0", "mx-4"], [1, "text-center"], [1, "cart", "mt-5"], [1, "feather-shopping-cart", "h6", "me-2", "mb-0"], [1, "cart-data", "mt-4"], [1, "bg-white", "p-3", "py-3", "border-bottom", "clearfix"], ["class", "col-md-12", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "input-group", "input-group-sm", "mb-2"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-secondary"], ["placeholder", "Add Tip", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "input-group"], ["id", "message", 1, "input-group-text"], [1, "feather-message-square"], ["placeholder", "Any suggestions? We will pass it on...", "aria-label", "With textarea", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Apply Coupon", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-primary", 3, "click"], [1, "feather-percent"], [1, "text-success"], [1, "text-danger", 3, "click"], [1, "text-danger"], [1, "bg-white", "p-3", "clearfix", "border-bottom"], [1, "d-flex"], ["class", "form-check", 4, "ngIf"], ["class", "form-check mx-3", 4, "ngIf"], [1, "float-end", "text-dark"], [1, "text-info", "ms-1"], [1, "feather-info"], [1, "mb-1", "text-success"], [1, "float-end", "text-success"], [1, "fw-bold", "mb-0"], [1, "float-end"], [1, "form-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input", "custom-control", "custom-radio", "custom-control-inline", 3, "checked", "click"], ["for", "flexRadioDefault1", 1, "form-check-label"], [1, "form-check", "mx-3"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input", "custom-control", "custom-radio", "custom-control-inline", 3, "checked", "click"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "p-3"], [1, "btn", "btn-success", "w-100", "btn-lg", 3, "click"], [1, "feather-arrow-right"], [1, "form-check", "custom-radio", "border-bottom", "py-2"], ["type", "radio", "id", "customRadio1f", "name", "location", 1, "form-check-input", 3, "click"], ["for", "customRadio1f", 1, "form-check-label"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "col-md-12", "mt-3"], [1, "col-md-12", "form-group", "mb-3"], [1, "form-label"], ["placeholder", "Email", "type", "text", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Password", "type", "text", 3, "ngModel", "ngClass", "ngModelChange"], [1, "btn", "btn-primary", "w-100", 3, "click"], ["class", "row p-5", 4, "ngIf"], [1, "col-md-6", "form-group", "mb-3"], ["placeholder", "Firstname", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Lastname", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Phone", "type", "number", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Email", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Password", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["placeholder", "Confirm password", "type", "text", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "col-md-12 text-center", 4, "ngIf"], [1, "col-md-12", "text-center"], [1, "row", "p-5"], [1, "feather-check", "success"], [1, "col-md-12", "mt-4", "text-center"], [2, "color", "#878787"], [1, "widget-header", "text-white", "btn", "bg-primary", "m-none", 3, "click"], [1, "icon", "d-flex", "align-items-center"], [2, "padding", "1px 20px", "border-radius", "14px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div")(4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HomeComponent_li_9_Template, 5, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 4)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 7, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 18)(23, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, HomeComponent_div_29_Template, 18, 7, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 10, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, HomeComponent_div_31_Template, 14, 5, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, HomeComponent_div_32_Template, 31, 15, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, HomeComponent_div_33_Template, 4, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 28)(35, "div", 29)(36, "div", 30)(37, "div", 31)(38, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 34)(42, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, HomeComponent_div_43_Template, 6, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 5, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 39)(48, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 41)(51, "span", 42)(52, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_52_listener() { return ctx.Qty("-"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_55_listener() { return ctx.Qty("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 48)(58, "div", 49)(59, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 49)(62, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_62_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 52)(65, "div", 29)(66, "div", 30)(67, "div", 31)(68, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 34)(72, "div", 35)(73, "div", 4)(74, "div", 5)(75, "div", 53)(76, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_76_listener() { return ctx.activeTab("Signin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_79_listener() { return ctx.activeTab("Signup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, HomeComponent_div_82_Template, 13, 4, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, HomeComponent_div_83_Template, 3, 2, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.alertMessage == "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.alertMessage == "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.restaurant, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.lstAdmin.RestaurantName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lstAdmin.Address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lstCart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", ctx.Product, " ", ctx.Currency, "", ctx.ProductPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ProductDescription != "" || ctx.ProductDescription != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstExtras);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.ProductQty, " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.ProductQty <= 1 ? "btn-sm left dec btn btn-outline-secondary disabled" : "btn-sm left dec btn btn-outline-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.ProductQty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Active != "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Active == "Signup");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
HomeComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HomeComponent, factory: HomeComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2739:
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersComponent": () => (/* binding */ MyOrdersComponent)
/* harmony export */ });
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store/LoginUsers */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function MyOrdersComponent_div_21_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "COD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyOrdersComponent_div_21_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Online Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyOrdersComponent_div_21_tr_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r6.Productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r6.addonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r6.Qty);
} }
function MyOrdersComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "h2", 19)(2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyOrdersComponent_div_21_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const d_r1 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onExpandChange(d_r1.Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 21)(5, "div", 22)(6, "div", 2)(7, "div", 23)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Order Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 25)(13, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 23)(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 25)(21, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 23)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Payment Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 25)(29, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23)(32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Payment Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 25)(37, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, MyOrdersComponent_div_21_span_38_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, MyOrdersComponent_div_21_span_39_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 23)(41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Order Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 25)(46, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 23)(49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Instructions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 25)(54, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23)(57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 25)(62, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 23)(65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25)(70, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 28)(73, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "table", 29)(76, "thead")(77, "tr")(78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Addon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, MyOrdersComponent_div_21_tr_87_Template, 9, 4, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bs-target", "#collapseOne" + d_r1.Id)("aria-controls", "collapseOne" + d_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ORDER : #", d_r1.Id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "collapseOne" + d_r1.Id)("ngClass", i_r2 == 0 ? "accordion-collapse collapse" : "accordion-collapse collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bs-parent", "#accordionExample");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", d_r1.CreatedDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", d_r1.OrderStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", d_r1.PaymentStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", d_r1.Cod == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", d_r1.OnlinePayment == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", d_r1.OrderType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", d_r1.Instructions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.lstAdmin.Currency, "", d_r1.Discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.lstAdmin.Currency, "", d_r1.Total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.lstOrderDetails);
} }
class MyOrdersComponent {
    constructor(store, apiCall) {
        this.store = store;
        this.apiCall = apiCall;
        this.search = "";
        this.dbResult = [];
        this.lstOrders = [];
        this.lstOrderDetails = [];
        this.lstAdmin = [];
        this.lstOrders1 = [];
        debugger;
        this.loggedUser = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_0__.LoginUsers();
        if (this.store.source) {
            this.store.source.subscribe((data) => {
                debugger;
                const result2 = data['ooweb'].filter((x) => x.ViewName === 'loginusers');
                if (result2.length > 0) {
                    debugger;
                    this.loggedUser = result2[0];
                }
            });
        }
        this.Admin();
    }
    ngOnInit() {
        debugger;
        this.viewOrders();
    }
    viewOrders() {
        debugger;
        this.apiCall.DBCalling('myOrders', "Orders", "", "", "", this.loggedUser.Id).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstOrders = this.dbResult[0];
            this.lstOrders1 = this.lstOrders.filter((x) => x.OrderStatus === 'Ready for Pick up' || x.OrderStatus === 'Out for Delivery' || x.OrderStatus === '');
        });
    }
    onExpandChange(id) {
        debugger;
        this.apiCall.DBCalling('orderDetails', "Orders", "", "", "", id).subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstOrderDetails = this.dbResult[0];
        });
    }
    Admin() {
        this.apiCall.DBCalling('View', "Admin", "", "", "", "").subscribe(res => {
            debugger;
            this.dbResult = res;
            this.lstAdmin = this.dbResult[0][0];
        });
    }
    orderType(e) {
        debugger;
        if (e == 1) {
            this.lstOrders1 = this.lstOrders.filter((x) => x.OrderStatus === 'Picked up' || x.OrderStatus === 'Delivered');
        }
        if (e == 2) {
            this.lstOrders1 = this.lstOrders.filter((x) => x.OrderStatus === 'Ready for Pick up' || x.OrderStatus === 'Out for Delivery' || x.OrderStatus === '');
        }
        if (e == 3) {
            this.lstOrders1 = this.lstOrders.filter((x) => x.OrderStatus === 'Cancelled');
        }
    }
}
MyOrdersComponent.ɵfac = function MyOrdersComponent_Factory(t) { return new (t || MyOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_1__.ApicallingService)); };
MyOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyOrdersComponent, selectors: [["app-my-orders"]], decls: 22, vars: 1, consts: [[1, "py-4", "osahan-main-body"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-3"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabsa", "custom-tabsa", "border-0", "flex-column", "bg-white", "rounded", "overflow-hidden", "shadow-sm", "p-2", "c-t-order"], ["role", "presentation", 1, "nav-item", "border-top", 3, "click"], ["id", "progress-tab", "data-bs-toggle", "tab", "href", "#completed", "role", "tab", "aria-controls", "progress", "aria-selected", "false", "tabindex", "-1", 1, "nav-link", "border-0", "text-dark", "py-3", "active"], [1, "feather-clock", "me-2", "text-warning", "mb-0"], ["role", "presentation", 1, "nav-item", 3, "click"], ["id", "completed-tab", "data-bs-toggle", "tab", "href", "#completed", "role", "tab", "aria-controls", "completed", "aria-selected", "true", 1, "nav-link", "border-0", "text-dark", "py-3"], [1, "feather-check", "me-2", "text-success", "mb-0"], ["id", "canceled-tab", "data-bs-toggle", "tab", "href", "#completed", "role", "tab", "aria-controls", "canceled", "aria-selected", "false", "tabindex", "-1", 1, "nav-link", "border-0", "text-dark", "py-3"], [1, "feather-x-circle", "me-2", "text-danger", "mb-0"], ["id", "myTabContent", 1, "tab-content", "col-md-9"], ["id", "completed", "role", "tabpanel", "aria-labelledby", "completed-tab", 1, "tab-pane", "fade", "active", "show"], [1, "order-body"], ["id", "accordionExample", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button", 3, "click"], ["aria-labelledby", "headingOne", 3, "id", "ngClass"], [1, "accordion-body"], [1, "col-md-2", "col-6"], [2, "float", "right"], [1, "col-md-10", "col-6"], [1, "mb-0"], [4, "ngIf"], [1, "col-md-12", "mt-2"], [1, "table", "table-responsive"], [4, "ngFor", "ngForOf"]], template: function MyOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4)(5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyOrdersComponent_Template_li_click_5_listener() { return ctx.orderType(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " On Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyOrdersComponent_Template_li_click_9_listener() { return ctx.orderType(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyOrdersComponent_Template_li_click_13_listener() { return ctx.orderType(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MyOrdersComponent_div_21_Template, 88, 18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.lstOrders1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var D_musaddiq_work_Angular_foodOrderOnlineWeb_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/LoginUsers */ 3825);
/* harmony import */ var _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/PageStore/Page.Actions */ 2705);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _apicalling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apicalling.service */ 4029);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);













function ProfileComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 53);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.imagePath + ctx_r0.Image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function ProfileComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 54);
  }
}

function ProfileComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55)(1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.exist);
  }
}

function ProfileComponent_div_92_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Wrong Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ProfileComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_92_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProfileComponent_div_92_label_5_Template, 2, 0, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 62)(7, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_92_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.validate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.password)("ngClass", ctx_r3.password == "" && ctx_r3.submit == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.msg != "" && ctx_r3.password != "");
  }
}

function ProfileComponent_div_93_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 65)(1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "*Password Doesn't Match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function ProfileComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57)(1, "div", 65)(2, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_93_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.newPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 65)(6, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_93_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.newConfirmPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProfileComponent_div_93_div_9_Template, 3, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 62)(11, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_93_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.update());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.newPassword)("ngClass", ctx_r4.newPassword == "" && ctx_r4.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.newConfirmPassword)("ngClass", ctx_r4.newConfirmPassword == "" && ctx_r4.submit1 == true ? "form-control validate" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.newPassword != ctx_r4.newConfirmPassword && ctx_r4.submit1);
  }
}

class ProfileComponent {
  constructor(apiCall, http, store, router, app) {
    this.apiCall = apiCall;
    this.http = http;
    this.store = store;
    this.router = router;
    this.app = app;
    this.imagePath = "";
    this.FirstName = "";
    this.LastName = "";
    this.MobileNo = "";
    this.Email = "";
    this.Password = "";
    this.ConfirmPassword = "";
    this.Id = 0;
    this.operation = "";
    this.submit = false;
    this.dbResult = [];
    this.msg = "";
    this.exist = "";
    this.status = false;
    this.imageUpload = "";
    this.password = "";
    this.newPassword = "";
    this.newConfirmPassword = "";
    this.logUser = [];
    this.submit1 = false;
    this.success = false;
    this.Image = "";
    this.imageSrc1 = "";
    debugger;
    this.loggedUser = new _Store_LoginUsers__WEBPACK_IMPORTED_MODULE_1__.LoginUsers();
    this.imagePath = this.apiCall.imagePath;

    if (this.store.source) {
      this.store.source.subscribe(data => {
        debugger;
        const result2 = data['ooweb'].filter(x => x.ViewName === 'loginusers');

        if (result2.length > 0) {
          debugger;
          this.loggedUser = result2[0];
          this.Id = this.loggedUser.Id;
          this.FirstName = this.loggedUser.FirstName;
          this.LastName = this.loggedUser.LastName;
          this.MobileNo = this.loggedUser.MobileNo;
          this.Email = this.loggedUser.Email;
          this.Password = this.loggedUser.Password;
          this.ConfirmPassword = this.loggedUser.ConfirmPassword;
          this.Image = this.loggedUser.Image;
        }
      });
    }
  }

  ngOnInit() {
    this.imageUpload = this.apiCall.ImageUpload;
  }

  save() {
    this.submit = true;

    if (this.FirstName != '' && this.LastName != '' && this.MobileNo != '' && this.Email != '' && this.Password != '' && this.ConfirmPassword != '' && this.Password == this.ConfirmPassword) {
      debugger;
      this.msg = "";
      var data = {
        'Id': this.Id,
        'FirstName': this.FirstName,
        'LastName': this.LastName,
        'MobileNo': this.MobileNo,
        'Email': this.Email,
        'Password': this.Password,
        'ConfirmPassword': this.ConfirmPassword,
        'Image': this.Image
      };
      var jsonData = JSON.stringify(data);

      if (this.Id == 0) {
        this.operation = "Insert";
      } else {
        this.operation = "Update";
      }

      this.apiCall.DBCalling(this.operation, "Loginusers", jsonData, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult[0][0].DBresult > 0) {
          this.Login();

          if (this.Id == 0) {// this.Reset();
          }
        } else if (this.dbResult[0][0].DBresult == -1) {
          debugger;
          this.exist = "Email Already Exist!";
        }
      });
    } else if (this.Password != this.ConfirmPassword) {
      this.msg = "Invalid Password!";
    }
  }

  Login() {
    debugger;
    this.submit = true;

    if (this.Email != "" && this.Password != "") {
      this.apiCall.DBCalling('View', "Loginusers", this.Email, this.Password, "", 'User').subscribe(res => {
        debugger;
        this.dbResult = res;

        if (this.dbResult.length > 0) {
          debugger;
          this.loggedUser = this.dbResult[0][0];
          window.location.reload(); // const modal = new bootstrap.Modal(document.getElementById('login'));
          // modal.hide();

          this.store.dispatch(new _Store_PageStore_Page_Actions__WEBPACK_IMPORTED_MODULE_2__.OpenPage(Object.assign({}, this.loggedUser)));
          window.location.reload();
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }

  onFileChange(event) {
    debugger;
    this.status = false;
    const file = event.target.files[0];
    this.status = event.target.files.length > 0 ? true : false;
    var Imageurl = event.target.files[0];

    if (this.status == true) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result;
        this.imageSrc1 = this.imageSrc;
        this.saveImage();
      };
    }
  }

  saveImage() {
    var _this = this;

    return (0,D_musaddiq_work_Angular_foodOrderOnlineWeb_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let value = _this.Image;
        _this.Image = ""; //  this.loader.loaderon()

        yield _this.http.post(_this.imageUpload, {
          'image': _this.imageSrc
        }).subscribe(res => {
          debugger;
          _this.dbResult = res;

          if (res == null) {
            _this.Image = value; // this.saveProduct()
          } else {
            debugger;
            _this.Image = _this.dbResult[0][1]; //  this.saveProduct()
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }

  validate() {
    debugger;
    this.submit = true;

    if (this.password == this.loggedUser.Password) {
      this.success = true;
    } else {
      this.msg = "Wrong Password!";
    }
  }

  update() {
    debugger;
    this.submit1 = true;

    if (this.newPassword != '' && this.newConfirmPassword != '' && this.newPassword == this.newConfirmPassword) {
      debugger;
      let order = JSON.stringify({
        'Password': this.newPassword,
        'ConfirmPassword': this.newConfirmPassword,
        'Id': this.loggedUser.Id
      });
      this.apiCall.DBCalling('updatePassword', "Loginusers", order, "", "", "").subscribe(res => {
        debugger;
        this.dbResult = res;
        this.password = this.newConfirmPassword; // this.Login();

        this.reset();
        const changePasswordButton = document.getElementById("changePassword");

        if (changePasswordButton) {
          changePasswordButton.click();
        }

        this.alert();
      });
    }
  }

  reset() {
    this.newPassword = "";
    this.newConfirmPassword = "";
    this.password = "";
    this.submit = false;
    this.submit1 = false;
    this.success = false;
  }

  alert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
      title: 'Password Changed',
      text: 'Please log in again.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(result => {
      if (result.isConfirmed) {
        this.app.logout();
        this.router.navigateByUrl('Home');
      }
    });
  }

  cancel() {
    this.reset();
  }

}

ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_apicalling_service__WEBPACK_IMPORTED_MODULE_4__.ApicallingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent));
};

ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 94,
  vars: 16,
  consts: [[1, "container", "position-relative"], [1, "py-5", "osahan-profile", "row"], [1, "col-md-4", "mb-3"], [1, "bg-white", "rounded", "shadow-sm", "sticky_sidebar", "overflow-hidden"], ["href", "profile.html", 1, ""], [1, "d-flex", "align-items-center", "p-3"], [1, "left", "me-3"], ["class", "rounded-circle", "style", "width: 50px;", 3, "src", 4, "ngIf"], ["src", "../../assets/img/no-image.jpg", "class", "rounded-circle", "style", "width: 50px;", 4, "ngIf"], [1, "right"], [1, "mb-1", "fw-bold"], [1, "text-muted", "m-0", "small"], [1, "bg-white", "profile-details"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "d-flex", "w-100", "align-items-center", "border-bottom", "p-3"], [1, "fw-bold", "mb-1", "text-dark"], [1, "small", "text-muted", "m-0"], [1, "right", "ms-auto"], [1, "fw-bold", "m-0"], [1, "feather-chevron-right", "h6", "m-0"], ["href", "contact-us.html", 1, "d-flex", "w-100", "align-items-center", "border-bottom", "px-3", "py-4"], [1, "fw-bold", "m-0", "text-dark"], [1, "feather-phone", "bg-primary", "text-white", "p-2", "rounded-circle", "me-2"], ["href", "terms.html", 1, "d-flex", "w-100", "align-items-center", "border-bottom", "px-3", "py-4"], [1, "feather-info", "bg-success", "text-white", "p-2", "rounded-circle", "me-2"], ["href", "privacy.html", 1, "d-flex", "w-100", "align-items-center", "px-3", "py-4"], [1, "feather-lock", "bg-warning", "text-white", "p-2", "rounded-circle", "me-2"], [1, "col-md-8", "mb-3"], [1, "rounded", "shadow-sm", "p-4", "bg-white"], [1, "mb-4"], ["id", "edit_profile"], [1, "form-group", "mb-3"], [1, "pb-1"], ["type", "text", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "number", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "email", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "image", 1, "pb-1"], ["type", "file", 1, "form-control", 3, "change"], ["class", "col-md-12 text-center", 4, "ngIf"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "additional"], [1, "change_password", "my-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#change_password", 1, "p-3", "border", "rounded", "bg-white", "btn", "d-flex", "align-items-center"], [1, "feather-arrow-right", "ms-auto"], ["id", "change_password", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "id", "changePassword", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "shadow-none"], [1, "modal-body"], [1, "recepie-body"], ["class", "row", 4, "ngIf"], [1, "rounded-circle", 2, "width", "50px", 3, "src"], ["src", "../../assets/img/no-image.jpg", 1, "rounded-circle", 2, "width", "50px"], [1, "col-md-12", "text-center"], [1, "text-danger"], [1, "row"], [1, "col-md-12", "mb-2", "text-left"], ["for", ""], ["type", "text", "placeholder", "Enter old password", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "", "class", "text-danger mt-2", 4, "ngIf"], [1, "col-md-12"], [1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "click"], ["for", "", 1, "text-danger", "mt-2"], [1, "col-md-12", "mb-3"], ["type", "text", "placeholder", "Enter new password", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "text", "placeholder", "Enter confirm password", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "col-md-12 mb-3", 4, "ngIf"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ProfileComponent_img_7_Template, 1, 1, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProfileComponent_img_8_Template, 1, 0, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9)(10, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12)(15, "a", 13)(16, "div", 6)(17, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Add or remove a delivery address");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16)(22, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 19)(25, "div", 6)(26, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 16)(30, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 22)(33, "div", 6)(34, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Term of use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 16)(38, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "a", 24)(41, "div", 6)(42, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " Privacy policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 16)(46, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 26)(49, "div", 27)(50, "h5", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "My account");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 29)(53, "div")(54, "div", 30)(55, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.FirstName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 30)(59, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_61_listener($event) {
        return ctx.LastName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 30)(63, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Mobile Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_65_listener($event) {
        return ctx.MobileNo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 30)(67, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_69_listener($event) {
        return ctx.Email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 30)(71, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_73_listener($event) {
        return ctx.onFileChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, ProfileComponent_div_74_Template, 3, 1, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 38)(76, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_76_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Save Changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 40)(79, "div", 41)(80, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Change Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 44)(84, "div", 45)(85, "div", 46)(86, "div", 47)(87, "h5", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Change Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 50)(91, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, ProfileComponent_div_92_Template, 9, 3, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, ProfileComponent_div_93_Template, 13, 5, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Image != "" && ctx.Image != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Image == "" || ctx.Image == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.loggedUser.FirstName, " ", ctx.loggedUser.LastName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.loggedUser.Email);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.FirstName)("ngClass", ctx.FirstName == "" && ctx.submit == true ? "form-control validate" : "form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.LastName)("ngClass", ctx.LastName == "" && ctx.submit == true ? "form-control validate" : "form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.MobileNo)("ngClass", ctx.MobileNo == "" && ctx.submit == true ? "form-control validate" : "form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.Email)("ngClass", ctx.Email == "" && ctx.submit == true ? "form-control validate" : "form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.exist != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.success);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.success);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel],
  styles: [".rounded-circle[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    object-fit: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZGVkLWNpcmNsZXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map