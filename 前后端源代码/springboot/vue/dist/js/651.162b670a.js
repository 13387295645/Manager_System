"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[651],{2651:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{margin:"10px 0"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入名称","suffix-icon":"el-icon-search"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-button",{staticClass:"ml-5",attrs:{type:"primary"},on:{click:e.load}},[e._v("搜索")]),t("el-button",{attrs:{type:"warning"},on:{click:e.reset}},[e._v("重置")])],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增 "),t("i",{staticClass:"el-icon-circle-plus-outline"})]),t("el-popconfirm",{staticClass:"ml-5",attrs:{"confirm-button-text":"确定","cancel-button-text":"我再想想",icon:"el-icon-info","icon-color":"red",title:"您确定批量删除这些数据吗？"},on:{confirm:e.delBatch}},[t("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("批量删除 "),t("i",{staticClass:"el-icon-remove-outline"})])],1)],1),t("el-table",{attrs:{data:e.tableData,border:"",stripe:"","header-cell-class-name":"headerBg"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"name",label:"员工姓名"}}),t("el-table-column",{attrs:{prop:"departmenter",label:"所属部门"}}),t("el-table-column",{attrs:{prop:"position",label:"职位"}}),t("el-table-column",{attrs:{prop:"hireDate",label:"入职日期"}}),t("el-table-column",{attrs:{prop:"email",label:"电子邮件",width:"150"}}),t("el-table-column",{attrs:{prop:"phoneNumber",label:"电话号码"}}),t("el-table-column",{attrs:{prop:"address",label:"地址"}}),t("el-table-column",{attrs:{prop:"createdAt",label:"创建时间",width:"150"}}),t("el-table-column",{attrs:{prop:"updatedAt",label:"更新时间",width:"150"}}),t("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.handleEdit(l.row)}}},[e._v("编辑 "),t("i",{staticClass:"el-icon-edit"})]),t("el-popconfirm",{staticClass:"ml-5",attrs:{"confirm-button-text":"确定","cancel-button-text":"我再想想",icon:"el-icon-info","icon-color":"red",title:"您确定删除吗？"},on:{confirm:function(t){return e.del(l.row.id)}}},[t("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除 "),t("i",{staticClass:"el-icon-remove-outline"})])],1)]}}])})],1),t("div",{staticStyle:{padding:"10px 0"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[2,5,10,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"信息",visible:e.dialogFormVisible,width:"40%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{staticStyle:{width:"80%",margin:"0 auto"},attrs:{"label-width":"120px",size:"small"}},[t("el-form-item",{attrs:{label:"员工姓名"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"所属部门"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.departmenter,callback:function(t){e.$set(e.form,"departmenter",t)},expression:"form.departmenter"}},e._l(e.departments,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"职位"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}})],1),t("el-form-item",{attrs:{label:"入职日期"}},[t("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form.hireDate,callback:function(t){e.$set(e.form,"hireDate",t)},expression:"form.hireDate"}})],1),t("el-form-item",{attrs:{label:"电子邮件"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("el-form-item",{attrs:{label:"电话号码"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phoneNumber,callback:function(t){e.$set(e.form,"phoneNumber",t)},expression:"form.phoneNumber"}})],1),t("el-form-item",{attrs:{label:"地址"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},o=[],s={name:"Employee",data(){return{tableData:[],departments:[],total:0,pageNum:1,pageSize:10,name:"",form:{},dialogFormVisible:!1,multipleSelection:[],user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{}}},created(){this.load(),this.request.get("/department").then((e=>{this.departments=e.data}))},methods:{load(){this.request.get("/employee/page",{params:{pageNum:this.pageNum,pageSize:this.pageSize,name:this.name}}).then((e=>{this.tableData=e.data.records,this.total=e.data.total}))},save(){this.request.post("/employee",this.form).then((e=>{"200"===e.code?(this.$message.success("保存成功"),this.dialogFormVisible=!1,this.load()):this.$message.error("保存失败")}))},handleAdd(){this.dialogFormVisible=!0,this.form={},this.$nextTick((()=>{this.$refs.img&&this.$refs.img.clearFiles(),this.$refs.file&&this.$refs.file.clearFiles()}))},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogFormVisible=!0,this.$nextTick((()=>{this.$refs.img&&this.$refs.img.clearFiles(),this.$refs.file&&this.$refs.file.clearFiles()}))},del(e){this.request.delete("/employee/"+e).then((e=>{"200"===e.code?(this.$message.success("删除成功"),this.load()):this.$message.error("删除失败")}))},handleSelectionChange(e){console.log(e),this.multipleSelection=e},delBatch(){if(!this.multipleSelection.length)return void this.$message.error("请选择需要删除的数据");let e=this.multipleSelection.map((e=>e.id));this.request.post("/employee/del/batch",e).then((e=>{"200"===e.code?(this.$message.success("批量删除成功"),this.load()):this.$message.error("批量删除失败")}))},reset(){this.name="",this.load()},handleSizeChange(e){console.log(e),this.pageSize=e,this.load()},handleCurrentChange(e){console.log(e),this.pageNum=e,this.load()},handleFileUploadSuccess(e){this.form.file=e},handleImgUploadSuccess(e){this.form.img=e},download(e){window.open(e)},exp(){window.open("http://localhost:9090/employee/export")},handleExcelImportSuccess(){this.$message.success("导入成功"),this.load()}}},i=s,r=l(1656),n=(0,r.A)(i,a,o,!1,null,null,null),c=n.exports}}]);
//# sourceMappingURL=651.162b670a.js.map