webpackJsonp([2],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniversalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UniversalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UniversalPage = /** @class */ (function () {
    function UniversalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.description = this.navParams.get("description");
    }
    UniversalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UniversalPage');
    };
    UniversalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-universal',template:/*ion-inline-start:"/home/ktsirakos/Documents/Projects/ListApp/src/pages/universal/universal.html"*/'<!--\n  Generated template for the UniversalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>UniversalPage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p>\n      {{description}}\n    </p>\n</ion-content>\n'/*ion-inline-end:"/home/ktsirakos/Documents/Projects/ListApp/src/pages/universal/universal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UniversalPage);
    return UniversalPage;
}());

//# sourceMappingURL=universal.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list/list.module": [
		676,
		1
	],
	"../pages/universal/universal.module": [
		677,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__universal_universal__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.array = [];
        this.array = [
            {
                "name": "Event",
                "array": [
                    {
                        "name": "Street food Festival",
                        "url": "assets/imgs/festival.jpeg",
                        "site": "https://www.facebook.com/streetfoodfestivalcrete/"
                    },
                    {
                        "name": "Kritiko Aporrito Event",
                        "url": "assets/imgs/download.jpeg",
                        "site": "https://www.instagram.com/kritiko_aporrito/"
                    }
                ],
                "url": "assets/imgs/calendar.png"
            },
            {
                "name": "Restaurants",
                "url": "assets/imgs/cake.png",
                "array": [
                    {
                        "name": "Emporiko",
                        "url": "assets/imgs/talos.png",
                        "array": [
                            {
                                "name": "Kouzineri",
                                "url": "assets/imgs/kouzineri.jpeg",
                                "description": "For more information call 2810****** Kouzeineri"
                            },
                            {
                                "name": "Lokal",
                                "url": "assets/imgs/lokal.jpg",
                                "site": "https://www.tripadvisor.com.gr/Restaurant_Review-g189417-d17149716-Reviews-Lokal-Heraklion_Crete.html"
                            }
                        ]
                    },
                    {
                        "name": "Estrella",
                        "url": "assets/imgs/estrella.jpeg",
                        "site": "https://www.facebook.com/EstrellaHeraklion/"
                    }
                ]
            },
            {
                "name": "Shops",
                "url": "assets/imgs/debit-card.png",
                "array": [
                    {
                        "name": "Berska",
                        "url": "assets/imgs/berska.png",
                        "site": "https://www.bershka.com"
                    },
                    {
                        "name": "Zara",
                        "url": "assets/imgs/zara.png",
                        "site": "https://www.zara.com"
                    },
                    {
                        "name": "Mall",
                        "url": "assets/imgs/themall.jpeg",
                        "array": [
                            {
                                "name": "None",
                                "url": "assets/imgs/empty.png"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Services",
                "url": "assets/imgs/customer-service.png",
                "array": [
                    {
                        "name": "Town Hall", "url": "assets/imgs/townhall.jpeg",
                        "page": __WEBPACK_IMPORTED_MODULE_0__universal_universal__["a" /* UniversalPage */],
                        "description": "For more information call 2810******"
                    },
                    {
                        "name": "Mpougatsa", "url": "assets/imgs/mpougatsa.jpg",
                        "site": "https://www.google.com/search?q=mpougatsa&hl=en&sxsrf=ACYBGNQTOXpjUh7bIvPfX9lZiI5C4nk4NA:1568918128031&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjjwM-9w93kAhVR46QKHWhVApMQ_AUIEigB&biw=960&bih=884"
                    }
                ]
            }
        ];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ktsirakos/Documents/Projects/ListApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Crazy List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div class="pallete"> -->\n    <my-list [message]="array"></my-list>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"/home/ktsirakos/Documents/Projects/ListApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_universal_universal__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_list_list__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_my_list_my_list__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser_ngx__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_imaged_button_imaged_button__ = __webpack_require__(675);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_2__components_my_list_my_list__["a" /* MyListComponent */],
                __WEBPACK_IMPORTED_MODULE_1__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_universal_universal__["a" /* UniversalPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_imaged_button_imaged_button__["a" /* ImagedButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/universal/universal.module#UniversalPageModule', name: 'UniversalPage', segment: 'universal', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_universal_universal__["a" /* UniversalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_list_list__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MyListComponent = /** @class */ (function () {
    function MyListComponent(navCtlr) {
        this.navCtlr = navCtlr;
        this.path = "./assets/imgs/estrella.jpeg";
    }
    MyListComponent.prototype.createElement = function (object) {
        console.log(object);
        if (!object.array && object.page) {
            this.navCtlr.push(object.page, { "tittle": object.tittle, "description": object.description });
        }
        else if (object.site) {
            this.navCtlr.push(__WEBPACK_IMPORTED_MODULE_0__pages_list_list__["a" /* ListPage */], { "siteUrl": object.site, "tittle": object.name });
        }
        else {
            this.navCtlr.push(__WEBPACK_IMPORTED_MODULE_0__pages_list_list__["a" /* ListPage */], { "array": object.array, "tittle": object.name });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MyListComponent.prototype, "message", void 0);
    MyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'my-list',template:/*ion-inline-start:"/home/ktsirakos/Documents/Projects/ListApp/src/components/my-list/my-list.html"*/'<!-- Generated template for the MyListComponent component -->\n\n<!-- <button class="testButtons" id="object.name" (click)="createElement(object)" *ngFor="let object of message">\n  <img class="image" [src]="object.url"/> -->\n  <!-- <p class="text">\n    {{object.name}}\n  </p>\n</button> -->\n\n\n<imaged-button [inputData]="data" *ngFor="let data of message"></imaged-button>\n\n\n\n'/*ion-inline-end:"/home/ktsirakos/Documents/Projects/ListApp/src/components/my-list/my-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], MyListComponent);
    return MyListComponent;
}());

//# sourceMappingURL=my-list.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ktsirakos/Documents/Projects/ListApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ktsirakos/Documents/Projects/ListApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagedButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_list_list__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ImagedButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ImagedButtonComponent = /** @class */ (function () {
    function ImagedButtonComponent(navCtlr) {
        this.navCtlr = navCtlr;
        console.log('Hello ImagedButtonComponent Component');
        // console.log(document.getElementById(this.object.name))
    }
    ImagedButtonComponent.prototype.ngAfterViewInit = function () {
        this.styleFromTS = { "background-image": "url(" + this.inputData.url + ")" };
    };
    ImagedButtonComponent.prototype.createElement = function (object) {
        console.log(object);
        if (!object.array && object.page) {
            this.navCtlr.push(object.page, { "tittle": object.tittle, "description": object.description });
        }
        else if (object.site) {
            this.navCtlr.push(__WEBPACK_IMPORTED_MODULE_0__pages_list_list__["a" /* ListPage */], { "siteUrl": object.site, "tittle": object.name });
        }
        else {
            this.navCtlr.push(__WEBPACK_IMPORTED_MODULE_0__pages_list_list__["a" /* ListPage */], { "array": object.array, "tittle": object.name });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImagedButtonComponent.prototype, "inputData", void 0);
    ImagedButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'imaged-button',template:/*ion-inline-start:"/home/ktsirakos/Documents/Projects/ListApp/src/components/imaged-button/imaged-button.html"*/'\n<div>\n  <button class="testButtons" [ngStyle]="styleFromTS" [id]="inputData.name" (click)="createElement(inputData)">\n    <p class="text">\n        {{inputData.name}}\n    </p>\n  </button>\n</div>\n'/*ion-inline-end:"/home/ktsirakos/Documents/Projects/ListApp/src/components/imaged-button/imaged-button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ImagedButtonComponent);
    return ImagedButtonComponent;
}());

//# sourceMappingURL=imaged-button.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.array = [];
        this.tittle = [];
        this.openedBrowser = false;
        this.array = this.navParams.get("array");
        this.tittle = this.navParams.get("tittle");
        this.url = this.navParams.get("siteUrl");
        console.log(this.url);
        if (this.url) {
            this.createBrowser(this.url);
        }
    }
    ListPage.prototype.createBrowser = function (url) {
        this.iab.create(url);
        this.openedBrowser = true;
    };
    ListPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ListPage');
        //   this.array.forEach(elem => {
        //     var buttonelem = document.getElementById(elem.name);
        //     buttonelem.style.backgroundImage = `url(${elem.url})`
        //     console.log(elem.name)
        //   })
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/ktsirakos/Documents/Projects/ListApp/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{tittle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <my-list [message]="array"></my-list>\n\n  <div *ngIf="openedBrowser">\n    <p>\n      You are redirecting on your default browser..\n    </p>\n    <div>\n      if you are not, press the following link\n    </div>\n    <div>\n      <a [href]="url">{{url}}</a>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ktsirakos/Documents/Projects/ListApp/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map