"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[802],{4802:(T,h,o)=>{o.r(h),o.d(h,{AdminDashboardModule:()=>L});var u=o(6895),i=o(7844),A=o(9653),f=o(805),Z=o(4325),c=o(727),v=(()=>{return(n=v||(v={})).PENDING="PENDING",n.CANCELLED="CANCELLED",n.APPROVED="APPROVED",v;var n})(),m=o(1990),p=o(4374),g=o(8779),e=o(4650),y=o(4466),_=o(326),b=o(1228),C=o(8396);const U=["paginator"];function x(n,a){if(1&n&&(e.TgZ(0,"th",22),e._uU(1),e._UZ(2,"p-sortIcon",23),e.qZA()),2&n){const t=a.$implicit;e.Q6J("pSortableColumn",t),e.xp6(1),e.hij(" ",t," "),e.xp6(1),e.Q6J("field",t)}}function E(n,a){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,x,3,3,"th",21),e._UZ(2,"th"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.leaveTableColumns)}}function S(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr",24)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._UZ(13,"td"),e.TgZ(14,"td")(15,"div",25)(16,"button",26),e._uU(17," Action "),e.qZA(),e.TgZ(18,"ul",27)(19,"li")(20,"a",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.onView(null==r?null:r._id))}),e._uU(21,"View"),e.qZA()(),e.TgZ(22,"li")(23,"a",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.onEditBtnClick(null==r?null:r._id))}),e._uU(24,"Edit "),e.qZA()(),e.TgZ(25,"li")(26,"a",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.openDeleteDialog(r))}),e._uU(27,"Delete"),e.qZA()(),e.TgZ(28,"li")(29,"a",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.approveStatus(null==r?null:r._id,null==d.leaveStatus?null:d.leaveStatus.APPROVED))}),e._uU(30," Approve "),e.qZA()()()()()()}if(2&n){const t=a.$implicit;e.xp6(2),e.AsE(" ",null==t||null==t.user?null:t.user.firstname," ",null==t||null==t.user?null:t.user.lastname," "),e.xp6(2),e.Oqu(null==t||null==t.leavetype?null:t.leavetype.leavetype),e.xp6(2),e.Oqu(e.lcZ(7,6,null==t?null:t.startDate)),e.xp6(3),e.Oqu(e.lcZ(10,8,null==t?null:t.endDate)),e.xp6(3),e.Oqu(null==t?null:t.status)}}const M=[{path:"",redirectTo:"admin",pathMatch:"full"},{path:"admin",component:(()=>{class n{constructor(t,l,s,r,d,$){this.store=t,this.router=l,this.employeeservice=s,this.leaveService=r,this.dialogService=d,this.authservice=$,this.subscription=new c.w0,this.leaveTableColumns=["Employee Name","leaveType","startDate","EndDate","status"],this.leaveStatus=v}ngOnInit(){this.getEmployeeSummarys(),this.getPendingleaves()}getPendingleaves(){this.pendingleaves$=this.store.pipe((0,A.Ys)(g.AK)),this.store.dispatch(p.QH.loadpendingleaves())}handleSelect(t){this.router.navigate([`/app/leave/leave-details/${t}`])}onView(t){this.router.navigate([`/app/leave/leave-details/${t}`])}onEditBtnClick(t){this.router.navigate([`/app/leave/edit-leaveId/${t}`])}onDeleteleave(t){this.store.dispatch(p.QH.deleteleave({id:t})),this.getPendingleaves()}getEmployeeSummarys(){this.subscription.add(this.employeeservice.getAdminSummary().subscribe(t=>{this.employeeSummary=t.result}))}approveStatus(t,l){this.store.dispatch(p.QH.ApproveLeave({update:{id:t,changes:{status:l}}})),this.getPendingleaves()}openDeleteDialog(t){this.dialogService.open(m.a,{width:"30%",height:"35%",header:"Delete Confirmation"}).onClose.subscribe(s=>{s&&this.onDeleteleave(t?._id)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.yh),e.Y36(i.F0),e.Y36(y.G),e.Y36(_.e),e.Y36(Z.xA),e.Y36(b.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-dashboard"]],viewQuery:function(t,l){if(1&t&&e.Gf(U,7),2&t){let s;e.iGM(s=e.CRH())&&(l.paginator=s.first)}},features:[e._Bn([f.ez,Z.xA])],decls:58,vars:8,consts:[[1,"container"],[1,"summary-section"],[1,"row"],[1,"col-sm-6","col-md-4"],[1,"card"],[1,"card-body"],[1,"col"],[1,"text-uppercase"],[1,"font-weight-bold","sibasi-secondary"],[1,"h5","font-weight-bold"],[1,"col","text-right","icon-dashboard-container"],[1,"text-muted"],[1,"card","mt-4"],[1,"row","m-0"],[1,"col-auto"],[1,"fas","fa-hospital-user","fa-2x","sibasi-primary"],[1,"mt-1"],[1,"table-responsive"],[3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[1,"p-selectable-row"],[1,"btn-group"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-danger","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",2)(7,"div",6)(8,"div",7)(9,"small",8),e._uU(10," Total "),e.qZA()(),e.TgZ(11,"div",9),e._uU(12),e.qZA()(),e.TgZ(13,"div",10),e._UZ(14,"i"),e.qZA()(),e.TgZ(15,"div",11),e._uU(16,"Employees"),e.qZA()()()(),e.TgZ(17,"div",3)(18,"div",4)(19,"div",5)(20,"div",2)(21,"div",6)(22,"div",7)(23,"small",8),e._uU(24," ToTal "),e.qZA()(),e.TgZ(25,"div",9),e._uU(26),e.qZA()(),e.TgZ(27,"div",10),e._UZ(28,"i"),e.qZA()(),e.TgZ(29,"div",11),e._uU(30,"Departments"),e.qZA()()()(),e.TgZ(31,"div",3)(32,"div",4)(33,"div",5)(34,"div",2)(35,"div",6)(36,"div",7)(37,"small",8),e._uU(38," Total "),e.qZA()(),e.TgZ(39,"div",9),e._uU(40),e.qZA()(),e._UZ(41,"div",10),e.qZA(),e.TgZ(42,"div",11),e._uU(43,"Number of leaves applied"),e.qZA()()()()()(),e.TgZ(44,"div",12)(45,"div",5)(46,"div",13)(47,"div",14),e._UZ(48,"i",15),e.TgZ(49,"b",9),e._uU(50," All leave history"),e.qZA()(),e._UZ(51,"div",16),e.TgZ(52,"div",5)(53,"div",17)(54,"p-table",18),e.ALo(55,"async"),e.YNc(56,E,3,1,"ng-template",19),e.YNc(57,S,31,10,"ng-template",20),e.qZA()()()()()()()),2&t&&(e.xp6(12),e.hij(" ",(null==l.employeeSummary?null:l.employeeSummary.totalUser)||"--"," "),e.xp6(14),e.hij(" ",(null==l.employeeSummary?null:l.employeeSummary.totaldepartments)||"--"," "),e.xp6(14),e.hij(" ",(null==l.employeeSummary?null:l.employeeSummary.totalLeaves)||"--"," "),e.xp6(14),e.Q6J("value",e.lcZ(55,6,l.pendingleaves$))("paginator",!0)("rows",10))},dependencies:[u.sg,C.iA,f.jx,C.lQ,C.fz,u.Ov,u.uU],changeDetection:0}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.Bz.forChild(M),i.Bz]}),n})();var P=o(5593),N=o(1493),D=o(433),B=o(8003),Y=o(4057),J=o(1997);let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,O,C.U$,B.dTQ,P.hJ,N.S,Y.X0,D.UX,D.u5,J.U]}),n})()},1990:(T,h,o)=>{o.d(h,{a:()=>Z});var u=o(4325),i=o(4650),A=o(805),f=o(5593);let Z=(()=>{class c{constructor(m,p,g){this.dialogService=m,this.messageService=p,this.ref=g,this.msgs=[]}ngOnInit(){}deleteConfirmation(m){this.ref.close(m)}}return c.\u0275fac=function(m){return new(m||c)(i.Y36(u.xA),i.Y36(A.ez),i.Y36(u.E7))},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-popup"]],inputs:{message:"message"},features:[i._Bn([u.xA])],decls:7,vars:0,consts:[[1,"grid","mt-2"],[1,"pi","pi-info-circle",2,"font-size","2rem"],[1,"ml-2"],[1,"flex","justify-content-end","mt-4"],["pButton","","icon","pi pi-times","label","No",1,"p-button-text","mb-2",3,"click"],["pButton","","icon","pi pi-check","label","Yes",1,"p-button-primary","mb-2",3,"click"]],template:function(m,p){1&m&&(i.TgZ(0,"div",0),i._UZ(1,"i",1),i.TgZ(2,"p",2),i._uU(3,"Are you sure you want to delete this record?"),i.qZA()(),i.TgZ(4,"div",3)(5,"button",4),i.NdJ("click",function(){return p.deleteConfirmation(!1)}),i.qZA(),i.TgZ(6,"button",5),i.NdJ("click",function(){return p.deleteConfirmation(!0)}),i.qZA()())},dependencies:[f.Hq]}),c})()}}]);