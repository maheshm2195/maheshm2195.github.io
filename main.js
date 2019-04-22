(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _app_user_logged_in_user_logged_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/user-logged-in/user-logged-in.component */ "./src/app/user-logged-in/user-logged-in.component.ts");
/* harmony import */ var _app_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/onboarding-form/onboarding-form.component */ "./src/app/onboarding-form/onboarding-form.component.ts");
/* harmony import */ var _app_onboarded_students_list_onboarded_students_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/onboarded-students-list/onboarded-students-list.component */ "./src/app/onboarded-students-list/onboarded-students-list.component.ts");








var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"] },
    {
        path: 'logged', component: _app_user_logged_in_user_logged_in_component__WEBPACK_IMPORTED_MODULE_5__["UserLoggedInComponent"], canActivate: [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]],
        children: [
            { path: '', redirectTo: 'onboarded-students', pathMatch: 'full' },
            { path: 'onboard-students', component: _app_onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingFormComponent"] },
            { path: 'onboarded-students', component: _app_onboarded_students_list_onboarded_students_list_component__WEBPACK_IMPORTED_MODULE_7__["OnboardedStudentsListComponent"] }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'student-onboarding';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboarding-form/onboarding-form.component */ "./src/app/onboarding-form/onboarding-form.component.ts");
/* harmony import */ var _onboarded_students_list_onboarded_students_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onboarded-students-list/onboarded-students-list.component */ "./src/app/onboarded-students-list/onboarded-students-list.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _custom_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-pipes/filter.pipe */ "./src/app/custom-pipes/filter.pipe.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _user_logged_in_user_logged_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-logged-in/user-logged-in.component */ "./src/app/user-logged-in/user-logged-in.component.ts");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _onboarding_form_onboarding_form_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingFormComponent"],
                _onboarded_students_list_onboarded_students_list_component__WEBPACK_IMPORTED_MODULE_8__["OnboardedStudentsListComponent"],
                _custom_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__["LoginFormComponent"],
                _user_logged_in_user_logged_in_component__WEBPACK_IMPORTED_MODULE_14__["UserLoggedInComponent"],
                _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_student_service__WEBPACK_IMPORTED_MODULE_10__["StudentService"],
                _services_categories_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
            ],
            entryComponents: [_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/custom-pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterStudents'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 40%; top:0; bottom: 0;left: 0; right: 0; margin: auto;\">\r\n    <h3>Login school admin</h3>\r\n\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onloginFormSubmit()\">\r\n\r\n        <input class=\"form-control\" placeholder=\"User name\" formControlName=\"username\">\r\n\r\n        <input class=\"form-control\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n\r\n        <div style=\"color: red;\">{{errorMessage}}</div>\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary btn-sm\">LOGIN</button>\r\n        <button type=\"button\" (click)=\"resetForm()\" class=\"btn btn-secondary btn-sm\">RESET</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(loginService, fb) {
        this.loginService = loginService;
        this.fb = fb;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onloginFormSubmit = function () {
        if (this.loginForm.get('username').value == "admin" && this.loginForm.get('password').value == "admin") {
            this.loginService.setLogIn(true);
            this.loginService.setUserName(this.loginForm.get('username').value);
        }
        else {
            this.errorMessage = "Invalid credentials. Please enter Username as 'admin' and password as 'admin' for login";
        }
    };
    LoginFormComponent.prototype.resetForm = function () {
        this.loginForm.reset();
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/onboarded-students-list/onboarded-students-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/onboarded-students-list/onboarded-students-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".international {\r\n    background-color: lightblue;\r\n}\r\n\r\n.domestic {\r\n    background-color: lightgoldenrodyellow;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGVkLXN0dWRlbnRzLWxpc3Qvb25ib2FyZGVkLXN0dWRlbnRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRlZC1zdHVkZW50cy1saXN0L29uYm9hcmRlZC1zdHVkZW50cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50ZXJuYXRpb25hbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5kb21lc3RpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/onboarded-students-list/onboarded-students-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/onboarded-students-list/onboarded-students-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Student Details</h3>\n\n<div style=\"margin-bottom: 10px;\">\n  <div style=\"text-align: left;\">\n    <select [(ngModel)]=\"studentCategoryFilter\">\n      <option value=\"all\">All</option>\n      <option value=\"0\">International</option>\n      <option value=\"1\">Domestic</option>\n    </select>\n  </div>\n\n  <div style=\"text-align: right;\">\n    <input [(ngModel)]=\"studentNameFilter\" placeholder=\"Search student\">\n  </div>\n</div>\n\n<div class=\"card-columns\">\n  <div *ngFor=\"let Student of allStudents | filterStudents : studentNameFilter\">\n    <div class=\"card\" style=\"width: 18rem;\"\n      *ngIf=\"studentCategoryFilter=='all' || Student.categories==studentCategoryFilter\">\n\n      <div class=\"card-body\" [ngClass]=\"{\n        'international' : Student.categories==0,\n        'domestic' : Student.categories==1\n           }\">\n        <h5 class=\"card-title\">{{'Student ' + Student.id}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{Student.name}}</h6>\n        <span class=\"card-text\">\n          {{Student.name + ' is a '}}</span>\n        <span>{{Student.categories == 0 ? 'International student' : 'Domestic student'}}</span>\n        <span>{{' with his last score being ' + Student.lastClassScore}}</span>\n        <div></div>\n\n        <td><button type=\"button\" (click)=\"sendStudentToEdit(Student.id)\" class=\"btn btn-success btn-sm\">Edit</button>\n        </td>\n        <td><button type=\"button\" (click)=\"sendStudentToView(Student.id)\" class=\"btn btn-secondary btn-sm\">View</button>\n        </td>\n        <td><button type=\"button\" (click)=\"deleteStudent(Student.id)\" class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/onboarded-students-list/onboarded-students-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/onboarded-students-list/onboarded-students-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: OnboardedStudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardedStudentsListComponent", function() { return OnboardedStudentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts");






var OnboardedStudentsListComponent = /** @class */ (function () {
    function OnboardedStudentsListComponent(studentService, router, dialog) {
        this.studentService = studentService;
        this.router = router;
        this.dialog = dialog;
        this.studentCategoryFilter = "all";
        this.studentNameFilter = "";
    }
    OnboardedStudentsListComponent.prototype.ngOnInit = function () {
        this.getAllStudents();
    };
    //Fetch all students
    OnboardedStudentsListComponent.prototype.getAllStudents = function () {
        var _this = this;
        this.studentService.getAllStudents()
            .subscribe(function (data) { return _this.allStudents = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    // send the studentId to form component for viewing using window state
    OnboardedStudentsListComponent.prototype.sendStudentToView = function (studentId) {
        this.statusCode = null;
        this.router.navigateByUrl('logged/onboard-students', {
            state: {
                studentId: studentId,
                action: "view"
            }
        });
    };
    // send the studentId to form component for editing using window state
    OnboardedStudentsListComponent.prototype.sendStudentToEdit = function (studentId) {
        this.statusCode = null;
        this.router.navigateByUrl('logged/onboard-students', {
            state: {
                studentId: studentId,
                action: "edit"
            }
        });
    };
    // Delete student after confirming with user
    OnboardedStudentsListComponent.prototype.deleteStudent = function (studentId) {
        var _this = this;
        this.dialogRef = this.dialog.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            disableClose: false
        });
        this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete ?";
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.statusCode = null;
                _this.studentService.deleteStudentById(studentId)
                    .subscribe(function (successCode) {
                    //this.statusCode = successCode;
                    //Expecting success code 204 from server
                    _this.statusCode = 204;
                    _this.getAllStudents();
                }, function (errorCode) { return _this.statusCode = errorCode; });
            }
            _this.dialogRef = null;
        });
    };
    OnboardedStudentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarded-students-list',
            template: __webpack_require__(/*! ./onboarded-students-list.component.html */ "./src/app/onboarded-students-list/onboarded-students-list.component.html"),
            styles: [__webpack_require__(/*! ./onboarded-students-list.component.css */ "./src/app/onboarded-students-list/onboarded-students-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], OnboardedStudentsListComponent);
    return OnboardedStudentsListComponent;
}());



/***/ }),

/***/ "./src/app/onboarding-form/onboarding-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/onboarding-form/onboarding-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmctZm9ybS9vbmJvYXJkaW5nLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/onboarding-form/onboarding-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/onboarding-form/onboarding-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 40%; top:0; bottom: 0;left: 0; right: 0; margin: auto;\">\n<h3>\n     Onboarding form <span *ngIf=\"actionToTake=='view'\">(view)</span> <span *ngIf=\"actionToTake=='edit'\">(edit)</span>\n</h3>\n<div>\n     <form [formGroup]=\"studentForm\" (ngSubmit)=\"onStudentFormSubmit()\">\n          <div class=\"form-group\">\n               <label for=\"name\">Student Name</label>\n               <input class=\"form-control\" id=\"name\" placeholder=\"Name\" formControlName=\"name\">\n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"categories\">Category</label>\n\n               <select class=\"form-control\" id=\"categories\" formControlName=\"categories\"\n                    [attr.disabled]=\"actionToTake=='view' ? '' : null\" (change)=\"onCategoryChange($event.target.value)\">\n                    <option *ngFor=\"let category of allCategories; let i=index\" value={{i}}>\n                         {{category.name}}</option>\n               </select>\n\n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"documents\">Documents</label>\n\n               <div formArrayName=\"documents\" style=\"text-align: left;\">\n                    <div *ngFor=\"let document of documents.controls; let i = index\" class=\"row\">\n                         <span class=\"col-sm-7\">{{allDocuments[i].name}}</span>\n                         <span class=\"col-sm-1\" *ngIf=allDocuments[i].mandatory>* </span>\n                         <span class=\"col-sm-1\" *ngIf=!allDocuments[i].mandatory> </span>\n                         <span class=\"col-sm-4\"><input [attr.disabled]=\"actionToTake=='view' ? '' : null\"\n                                   type=\"checkbox\" [formControlName]=\"i\"></span>\n\n                    </div>\n               </div>\n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"dob\">DOB</label>\n               <input class=\"form-control\" id=\"dob\" type=\"date\" formControlName=\"dob\">\n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"fatherName\">Father's name</label>\n               <input class=\"form-control\" id=\"fatherName\" type=\"text\" formControlName=\"fatherName\" placeholder=\"Father's Name\">\n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"fatherName\">Mother's name</label>\n               <input class=\"form-control\" type=\"text\" formControlName=\"motherName\" placeholder=\"Mother's Name\">\n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"lastClassScore\">Last class score</label>\n               <input class=\"form-control\" id=\"lastClassScore\" type=\"number\" formControlName=\"lastClassScore\" placeholder=\"%(marks)\">\n          </div>\n\n          <button *ngIf=\"!studentIdToUpdate\" [disabled]=\"!studentForm.valid || actionToTake=='view'\" class=\"btn btn-primary\">ON\n               BOARD</button>\n          <button *ngIf=\"studentIdToUpdate\" [disabled]=\"!studentForm.valid || actionToTake=='view'\" class=\"btn btn-primary\">UPDATE</button>\n     </form>\n\n     <br />\n     <div style=\"color: green;\" *ngIf=\"statusCode\">\n          <div *ngIf=\"statusCode === 201\" [ngClass]=\"'success'\">\n               Student added successfully.\n          </div>\n          <div *ngIf=\"statusCode === 409\" [ngClass]=\"'success'\">\n               Student already exists.\n          </div>\n          <div *ngIf=\"statusCode === 200\" [ngClass]=\"'success'\">\n               Student updated successfully.\n          </div>\n          <div style=\"color: red;\" *ngIf=\"statusCode === 500\" [ngClass]=\"'error'\">\n               Internal Server Error.\n          </div>\n     </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/onboarding-form/onboarding-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/onboarding-form/onboarding-form.component.ts ***!
  \**************************************************************/
/*! exports provided: OnboardingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingFormComponent", function() { return OnboardingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var OnboardingFormComponent = /** @class */ (function () {
    //Create constructor to get service instance
    function OnboardingFormComponent(fb, studentService, categoryService, activatedRoute) {
        this.fb = fb;
        this.studentService = studentService;
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.studentIdToUpdate = null;
        this.processValidation = false;
        this.studentForm = null;
        this.state$ = null;
        this.actionToTake = null;
    }
    //Create ngOnInit() and and load students
    OnboardingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get state from window history. This state is set when a user clicks on view/edit buttons of a student
        this.state$ = this.activatedRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return window.history.state; }));
        this.state$.subscribe(function (res) {
            _this.studentIdToUpdate = res.studentId;
            _this.actionToTake = res.action;
        }, function (err) { return console.log(err); });
        //Create form
        this.studentForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            categories: ["0"],
            documents: this.fb.array([]),
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fatherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            motherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastClassScore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // load data
        this.loadData();
        if (this.studentIdToUpdate != null && this.actionToTake == "view") {
            this.studentForm.disable();
        }
    };
    // load data and populate form based on whether studentIdToUpdate is null or not. 
    // If it's null means we need an unfilled form, else we want to populate the form 
    // with student details pointed by studentIdToUpdate
    OnboardingFormComponent.prototype.loadData = function () {
        var _this = this;
        this.categoryService.getAllCategories()
            .subscribe(function (data) {
            _this.allCategories = data;
            // this.getAllStudents();
            if (_this.studentIdToUpdate != null) {
                _this.loadStudentToEdit(_this.studentIdToUpdate);
            }
            else {
                _this.allDocuments = _this.allCategories[0].documents;
                _this.createDocumentFormArray(_this.allDocuments);
            }
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    // clear and then populate documents in the form based on category selection by user
    OnboardingFormComponent.prototype.createDocumentFormArray = function (documentsOfCategory) {
        var _this = this;
        this.clearDocuments();
        documentsOfCategory.forEach(function (document) {
            if (document.mandatory) {
                _this.documents.push(_this.fb.control(document.submitted, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue));
            }
            else {
                _this.documents.push(_this.fb.control(document.submitted));
            }
        });
    };
    //Handle create and update student
    OnboardingFormComponent.prototype.onStudentFormSubmit = function () {
        var _this = this;
        this.processValidation = true;
        if (this.studentForm.invalid) {
            return; //Validation failed, exit from method.
        }
        //Form is valid, now perform create or update
        this.statusCode = null;
        var student = this.studentForm.value;
        if (this.studentIdToUpdate == null) {
            //Generate student id then create student
            this.studentService.getAllStudents()
                .subscribe(function (students) {
                //Generate student id
                if (students.length > 0) {
                    var maxIndex = students.length - 1;
                    var studentWithMaxIndex = students[maxIndex];
                    var studentId = studentWithMaxIndex.id + 1;
                    student.id = studentId;
                }
                else {
                    student.id = 1;
                }
                //Create student
                _this.studentService.createStudent(student)
                    .subscribe(function (successCode) {
                    _this.statusCode = successCode;
                    _this.loadData();
                    _this.backToCreateStudent();
                }, function (errorCode) { return _this.statusCode = errorCode; });
            });
        }
        else {
            //Handle update student
            student.id = this.studentIdToUpdate;
            this.studentService.updateStudent(student)
                .subscribe(function (successCode) {
                _this.statusCode = successCode;
                _this.loadData();
                _this.backToCreateStudent();
            }, function (errorCode) { return _this.statusCode = errorCode; });
        }
    };
    //Load student by id to edit
    OnboardingFormComponent.prototype.loadStudentToEdit = function (studentId) {
        var _this = this;
        this.statusCode = null;
        this.studentService.getStudentById(studentId)
            .subscribe(function (student) {
            _this.studentIdToUpdate = student.id;
            _this.allDocuments = _this.allCategories[Number(student.categories)].documents;
            _this.createDocumentFormArray(_this.allDocuments);
            _this.studentForm.setValue({
                name: student.name,
                categories: student.categories,
                documents: student.documents,
                dob: student.dob,
                fatherName: student.fatherName,
                motherName: student.motherName,
                lastClassScore: student.lastClassScore
            });
            _this.processValidation = true;
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    //Go back from update to create
    OnboardingFormComponent.prototype.backToCreateStudent = function () {
        this.studentIdToUpdate = null;
        this.studentForm.reset();
        this.processValidation = false;
    };
    // on change of selection of category from drop down
    OnboardingFormComponent.prototype.onCategoryChange = function (filterVal) {
        this.allDocuments = this.allCategories[filterVal].documents;
        this.createDocumentFormArray(this.allDocuments);
    };
    Object.defineProperty(OnboardingFormComponent.prototype, "documents", {
        // get documents from form
        get: function () {
            return this.studentForm.get('documents');
        },
        enumerable: true,
        configurable: true
    });
    ;
    // clear documents in form
    OnboardingFormComponent.prototype.clearDocuments = function () {
        while (0 !== this.documents.length) {
            this.documents.removeAt(0);
        }
    };
    OnboardingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-form',
            template: __webpack_require__(/*! ./onboarding-form.component.html */ "./src/app/onboarding-form/onboarding-form.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-form.component.css */ "./src/app/onboarding-form/onboarding-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OnboardingFormComponent);
    return OnboardingFormComponent;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var CategoryService = /** @class */ (function () {
    //Create constructor to get Http instance
    function CategoryService(http) {
        this.http = http;
        //URL for CRUD operations
        // categoryUrl = "http://localhost:3000/categories";
        this.categoryUrl = "https://json-server-student-onboarding.herokuapp.com/categories";
    }
    //Fetch all categories
    CategoryService.prototype.getAllCategories = function () {
        return this.http.get(this.categoryUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Fetch category by id
    CategoryService.prototype.getCategoryById = function (categoryId) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: cpHeaders });
        return this.http.get(this.categoryUrl + "/" + categoryId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    CategoryService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.status);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginService = /** @class */ (function () {
    function LoginService(_router) {
        this._router = _router;
        this.loggedIn = false;
        this.userName = null;
    }
    LoginService.prototype.canActivate = function () {
        if (this.loggedIn) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    };
    // set the state whether a valid login has been made or not
    LoginService.prototype.setLogIn = function (loggedIn) {
        this.loggedIn = loggedIn;
        this._router.navigate(['/logged']);
    };
    // get name of user who has logged in
    LoginService.prototype.getUserName = function () {
        return this.userName;
    };
    // set the name of user who has logged in
    LoginService.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var StudentService = /** @class */ (function () {
    //Create constructor to get Http instance
    function StudentService(http) {
        this.http = http;
        //URL for CRUD operations
        // studentUrl = "http://localhost:3000/students";
        this.studentUrl = "https://json-server-student-onboarding.herokuapp.com/students";
    }
    //Fetch all students
    StudentService.prototype.getAllStudents = function () {
        return this.http.get(this.studentUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Create student
    StudentService.prototype.createStudent = function (student) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(this.studentUrl, student, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    //Fetch student by id
    StudentService.prototype.getStudentById = function (studentId) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: cpHeaders });
        return this.http.get(this.studentUrl + "/" + studentId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Update student
    StudentService.prototype.updateStudent = function (student) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: cpHeaders });
        return this.http.put(this.studentUrl + "/" + student.id, student, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    //Delete student	
    StudentService.prototype.deleteStudentById = function (studentId) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: cpHeaders });
        return this.http.delete(this.studentUrl + "/" + studentId)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    StudentService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    StudentService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.status);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Confirm</h1>\n<div md-dialog-content>{{confirmMessage}}</div>\n<div md-dialog-actions>\n  <button md-button style=\"color: #fff;background-color: #153961;\" (click)=\"dialogRef.close(true)\">Confirm</button>\n  <button md-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/shared/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/user-logged-in/user-logged-in.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-logged-in/user-logged-in.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9nZ2VkLWluL3VzZXItbG9nZ2VkLWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-logged-in/user-logged-in.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-logged-in/user-logged-in.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"padding:5px\">\n      <nav class=\"navbar navbar-light bg-light\">\n          <span class=\"navbar-brand mb-0 h1\">On Boarding app</span>\n          <span><i class=\"material-icons\" style=\"font-size:36px; margin-right: 5px;\">account_circle</i>{{adminName}}</span>\n      </nav>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"onboard-students\">Onboarding Form</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"onboarded-students\">Student's List</a></li>\n    </ul>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user-logged-in/user-logged-in.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-logged-in/user-logged-in.component.ts ***!
  \************************************************************/
/*! exports provided: UserLoggedInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedInComponent", function() { return UserLoggedInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");



var UserLoggedInComponent = /** @class */ (function () {
    function UserLoggedInComponent(loginService) {
        this.loginService = loginService;
        this.adminName = null;
    }
    UserLoggedInComponent.prototype.ngOnInit = function () {
        this.adminName = this.loginService.getUserName();
    };
    UserLoggedInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-logged-in',
            template: __webpack_require__(/*! ./user-logged-in.component.html */ "./src/app/user-logged-in/user-logged-in.component.html"),
            styles: [__webpack_require__(/*! ./user-logged-in.component.css */ "./src/app/user-logged-in/user-logged-in.component.css")]
        })
        // this is the main component after user has logged in
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], UserLoggedInComponent);
    return UserLoggedInComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OneDrive - Nagarro\D_Drive\NAGP\2. Angular\Assignment\student-onboarding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map