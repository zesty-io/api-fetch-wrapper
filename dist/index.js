!function(t,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.Zesty=s():t.Zesty=s()}(window,(function(){return function(t){var s={};function e(n){if(s[n])return s[n].exports;var i=s[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=s,e.d=function(t,s,n){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)e.d(n,i,function(s){return t[s]}.bind(null,i));return n},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=0)}([function(t,s,e){"use strict";e.r(s),e.d(s,"FetchWrapper",(function(){return n}));class n{constructor(t,s,e={}){this.instanceZUID=t,this.authToken=s,this.accountsAPIEndpoints={instanceAppInstallPOST:"/instances/INSTANCE_ZUID/app-installs",instanceAppInstalls:"/instances/INSTANCE_ZUID/app-installs",instanceAppInstallGET:"/instances/INSTANCE_ZUID/app-installs/APP_ZUID",instanceAppInstallDELETE:"/instances/INSTANCE_ZUID/app-installs/APP_ZUID",apps:"/apps",appsPOST:"/apps",appsGET:"apps/APP_ZUID",appsPUT:"apps/APP_ZUID",appsDELETE:"apps/APP_ZUID",intanceDnsPOST:"/instances/dns",instanceGET:"/instances/INSTANCE_ZUID",instances:"/instances",instancesInvitedGET:"/instances/invites",instanceUserGET:"/instances/INSTANCE_ZUID/users",instanceUsersRolesGET:"/instances/INSTANCE_ZUID/users/roles",instancesPendingUsersGET:"/instances/INSTANCE_ZUID/users/pending",instancesCompaniesGET:"/instances/INSTANCE_ZUID/companies",instancePUT:"/instances/INSTANCE_ZUID",instanceBluprintPUT:"/instances/INSTANCE_ZUID/blueprints",instanceDELETE:"/instances/INSTANCE_ZUID",domainPOST:"/instances/INSTANCE_ZUID/domains",domainPUT:"/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",domainGET:"/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",domainDELETE:"/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",domains:"/instances/INSTANCE_ZUID/domains",userGET:"/users/USER_ZUID",userInstancesGET:"/users/USER_ZUID/instances",usersPOST:"/users",userPUT:"/users/USER_ZUID",userDELETE:"/users/USER_ZUID",usersEmailPOST:"/users/emails",usersEmailDELETE:"/users/emails",userEmailsGET:"/users/emails",userEmailVerifyGET:"/users/emails/verifications",userEmailVerifyPOST:"/users/emails/verifications",companyGET:"/companies/COMPANY_ZUID",companies:"/companies",companiesPOST:"/companies",companyDELETE:"/companies/COMPANY_ZUID",inviteGET:"/invites/INVITE_ZUID",invites:"/invites",invitesPOST:"/invites",invitePUT:"/invites/INVITE_ZUID",inviteDELETE:"/invites/INVITE_ZUID"},this.sitesServiceEndpoints={schedulePublishPOST:"/content/items/ITEM_ZUID/publish-schedule",scheduleUnpublishPATCH:"/content/items/ITEM_ZUID/publish-schedule/PUBLISHING_ZUID",itemsDELETE:"/content/sets/MODEL_ZUID/items/ITEM_ZUID"},this.instanceAPIEndpoints={models:"/content/models",fields:"/content/models/MODEL_ZUID/fields",itemsPublishing:"/content/models/MODEL_ZUID/items/ITEM_ZUID/publishings",itemsVersions:"/content/models/MODEL_ZUID/items/ITEM_ZUID/versions",items:"/content/models/MODEL_ZUID/items",views:"/web/views",settings:"/env/settings",settingUpdate:"/env/settings/SETTING_ZUID",stylesheets:"/web/stylesheets",stylesheetsVersions:"/web/stylesheets/STYLESHEET_ZUID/versions",scriptsVersions:"/web/scripts/SCRIPT_ZUID/versions/VERSION_NUMBER",scripts:"/web/scripts",headers:"/web/headers",nav:"/env/nav",headtags:"/web/headtags",audits:"/env/audits"},this.mediaAPIEndpoints={binsGETAll:"/media-manager-service/site/SITE_ID/bins",binsGET:"/media-manager-service/bin/BIN_ID",binsPATCH:"/media-manager-service/bin/BIN_ID",filesPOST:"/media-storage-service/upload/STORAGE_DRIVER/STORAGE_NAME",filesGET:"/media-manager-service/file/FILE_ID",filesGETAll:"/media-manager-service/bin/BIN_ID/files",filesPATCH:"/media-manager-service/file/FILE_ID",filesDELETE:"/media-manager-service/file/FILE_ID",groupsGET:"/media-manager-service/group/GROUP_ID",groupsGETAll:"/media-manager-service/bin/BIN_ID/groups",groupsPOST:"/media-manager-service/group",groupsPATCH:"/media-manager-service/group/GROUP_ID",groupsDELETE:"/media-manager-service/group/GROUP_ID"},this.authAPIEndpoints={verify:"/verify"},this.authAPIURL=e.hasOwnProperty("authAPIURL")?e.authAPIURL:"https://auth.api.zesty.io",this.instancesAPIURL=e.hasOwnProperty("instancesAPIURL")?"https://"+this.instanceZUID+e.instancesAPIURL:"https://"+this.instanceZUID+".api.zesty.io/v1",this.accountsAPIURL=e.hasOwnProperty("accountsAPIURL")?e.accountsAPIURL:"https://accounts.api.zesty.io/v1",this.mediaAPIURL=e.hasOwnProperty("mediaAPIURL")?e.mediaAPIURL:"https://svc.zesty.io",this.sitesServiceURL=e.hasOwnProperty("sitesServiceURL")?e.sitesServiceURL+this.instanceZUID:"https://svc.zesty.io/sites-service/"+this.instanceZUID,this.logErrors=!!e.hasOwnProperty("logErrors")&&e.logErrors,this.logResponses=!!e.hasOwnProperty("logResponses")&&e.logResponses,this.sitesServiceURL=this.makeInstanceZUIDURL(this.sitesServiceURL,t)}makeInstanceZUIDURL(t,s){return this.replaceInURL(t,{INSTANCE_ZUID:s})}getInstanceAPIURL(){return this.instancesAPIURL}setInstanceZUID(t){return this.instanceZUID=t}buildAPIURL(t,s="instances"){switch(s){case"accounts":return`${this.accountsAPIURL}${t}`;case"instances":return`${this.instancesAPIURL}${t}`;case"sites-service":return`${this.sitesServiceURL}${t}`;case"media":return`${this.mediaAPIURL}${t}`;default:return""}}replaceInURL(t,s){for(const e in s)t=t.replace(e,s[e]);return t}async makeRequest(t,s="GET",e="",n={}){"GET"!=s&&(n.body=e),n.method=s,n.headers={"Content-Type":"application/json",Authorization:`Bearer ${this.authToken}`},n.credentials="same-origin";try{const s=await fetch(t,n);return await s.json()}catch(t){return console.error("Error:",t),t}}async verify(){let t=this.authAPIURL+this.authAPIEndpoints.verify;return await this.makeRequest(t)}async getModels(){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.models;return await this.makeRequest(t)}async getViews(){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views;return await this.makeRequest(t)}async getView(t){let s=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+t;return await this.makeRequest(s)}async createView(t,s="",e="ajax-json"){let n=JSON.stringify({code:s,fileName:t,type:e}),i=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views;return await this.makeRequest(i,"POST",n)}async updateView(t,s){let e=JSON.stringify({code:s}),n=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+t;return await this.makeRequest(n,"PUT",e)}async publishView(t,s){let e=JSON.stringify({code:s}),n=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+t+"?action=publish";return await this.makeRequest(n,"PUT",e)}async installApp(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST,{INSTANCE_ZUID:t}),n=JSON.stringify({appZUID:s});return await this.makeRequest(e,"POST",n)}async updateInstalledApp(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST,{INSTANCE_ZUID:t}),n=JSON.stringify({appZUID:s});return await this.makeRequest(e,"PUT",n)}async getAllInstalledApps(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstalls,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async getInstalledApp(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallGET,{INSTANCE_ZUID:t,APP_ZUID:s});return await this.makeRequest(e)}async deleteInstalledApp(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallDELETE,{INSTANCE_ZUID:t,APP_ZUID:s});return await this.makeRequest(e,"DELETE")}async registerApp(t,s,e,n){let i=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsPOST),a=JSON.stringify({name:t,label:s,url:e,publisher:n});return await this.makeRequest(i,"POST",a)}async getAllRegisterdApps(){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.apps);return await this.makeRequest(t)}async getRegisteredApp(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsGET,{APP_ZUID:t});return await this.makeRequest(s)}async updateRegisteredApp(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsPUT,{APP_ZUID:t}),e=JSON.stringify({appZUID:t});return await this.makeRequest(s,"PUT",e)}async deleteRegisteredApp(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsDELETE,{APP_ZUID:t});return await this.makeRequest(s,"DELETE")}async getSettings(){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.settings;return await this.makeRequest(t)}async updateSetting(t,s){let e=this.getInstanceAPIURL()+this.replaceInURL(this.instanceAPIEndpoints.settingUpdate,{SETTING_ZUID:t}),n=JSON.stringify(s);return await this.makeRequest(e,"PUT",n)}async getFields(t){let s=this.getInstanceAPIURL()+this.replaceInURL(this.instanceAPIEndpoints.fields,{MODEL_ZUID:t});return await this.makeRequest(s)}async createInstance(t,s){let e=JSON.stringify({name:t,ecoZUID:s}),n=this.accountsAPIURL+this.accountsAPIEndpoints.instances;return await this.makeRequest(n,"POST",e)}async verifyDns(t,s,e){let n=JSON.stringify({domain:t,aRecord:s,cName:e}),i=this.accountsAPIURL+this.accountsAPIEndpoints.intanceDnsPOST;return await this.makeRequest(i,"POST",n)}async getInstance(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceGET,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async getInstances(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.instances;return await this.makeRequest(t)}async getAllInvitedInstances(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.instancesInvited;return await this.makeRequest(t)}async getInstanceUsers(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceUserGET,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async getInstanceUsersWithRoles(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceUsersRolesGET,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async getInstancePendingUsers(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesPendingUsersGET,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async getInstanceCompanies(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesCompaniesGET,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async updateInstance(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancePUT,{INSTANCE_ZUID:t})+`?action=${s}`;return await this.makeRequest(e,"PUT")}async updateInstanceBlueprint(t,s){let e=JSON.stringify({zuid:s}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceBluprintPUT,{INSTANCE_ZUID:t});return await this.makeRequest(n,"PUT",e)}async deleteInstance(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceDELETE,{INSTANCE_ZUID:t});return await this.makeRequest(s,"DELETE")}async createDomain(t,s){let e=JSON.stringify({domain:s}),n=this.accountsAPIURL+this.accountsAPIEndpoints.domainPOST;return await this.makeRequest(n,"POST",e)}async updateDomain(t,s,e){let n=JSON.stringify({domain:e}),i=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domainPUT,{INSTANCE_ZUID:t,DOMAIN_ZUID:s});return await this.makeRequest(i,"PUT",n)}async getDomain(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domainGET,{INSTANCE_ZUID:t,DOMAIN_ZUID:s});return await this.makeRequest(e)}async deleteDomain(t,s){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domainDELETE,{INSTANCE_ZUID:t,DOMAIN_ZUID:s});return await this.makeRequest(e,"DELETE")}async getDomain(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domains,{INSTANCE_ZUID:t});return await this.makeRequest(s)}async getUser(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userGET,{USER_ZUID:t});return await this.makeRequest(s)}async getUserInstances(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userInstancesGET,{USER_ZUID:t});return await this.makeRequest(s)}async createUser(t,s,e,n){let i=JSON.stringify({firstName:t,lastName:s,email:e,password:n}),a=this.accountsAPIURL+this.accountsAPIEndpoints.usersPOST;return await this.makeRequest(a,"POST",i)}async updateUser(t){let s=JSON.stringify({}),e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userPUT,{USER_ZUID:t})+"?action=updatePassword";return await this.makeRequest(e,"PUT",s)}async deleteUser(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userDELETE,{USER_ZUID:t});return await this.makeRequest(s,"DELETE")}async addUnverifiedEmail(t,s){let e=JSON.stringify({name:t,address:s}),n=this.accountsAPIURL+this.accountsAPIEndpoints.usersEmailPOST;return await this.makeRequest(n,"POST",e)}async deleteUserEmail(t){let s=this.accountsAPIURL+this.accountsAPIEndpoints.usersEmailDELETE+`?address=${t}`;return await this.makeRequest(s,"DELETE")}async getUserEmails(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.userEmailsGET;return await this.makeRequest(t)}async verifyEmailAddress(t,s){let e=this.accountsAPIURL+this.accountsAPIEndpoints.userEmailVerifyGET+`?address=${t}&verificationCode${s}`;return await this.makeRequest(e)}async resendEmailVerification(t){let s=JSON.stringify({}),e=this.accountsAPIURL+this.accountsAPIEndpoints.userEmailVerifyPOST+`?address=${t}`;return await this.makeRequest(e,"POST",s)}async getCompany(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.companyGET,{COMPANY_ZUID:t});return await this.makeRequest(s)}async getAllCompanies(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.companies;return await this.makeRequest(t)}async createCompany(t,s){let e=JSON.stringify({name:t,description:s}),n=this.accountsAPIURL+this.accountsAPIEndpoints.companiesPOST;return await this.makeRequest(n,"POST",e)}async deleteCompany(t,s,e,n){let i=JSON.stringify({firstName:s,lastName:e,email:n}),a=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.companyDELETE,{COMPANY_ZUID:t});return await this.makeRequest(a,"DELETE",i)}async getInvite(t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.inviteGET,{INVITE_ZUID:t});return await this.makeRequest(s)}async getAllInvites(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.invites;return await this.makeRequest(t)}async createInvite(t,s,e,n){let i=JSON.stringify({inviteeName:t,inviteeEmail:s,entityZUID:e,accessLevel:n}),a=this.accountsAPIURL+this.accountsAPIEndpoints.invitesPOST;return await this.makeRequest(a,"POST",i)}async respondToInvite(t,s){let e=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.invitePUT,{INVITE_ZUID:t})+`?action=${s}`;return await this.makeRequest(n,"PUT",e)}async deleteInvite(t){let s=JSON.stringify({}),e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.inviteDELETE,{INVITE_ZUID:t});return await this.makeRequest(e,"DELETE",s)}}}])}));