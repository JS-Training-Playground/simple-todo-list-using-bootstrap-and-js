parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.querySelector("#frmItem"),n=document.querySelector("#inptItem"),t=document.querySelector("#lstItems"),i=[];function a(e){i&&document.querySelectorAll(".list-group-item").forEach(function(n){n.querySelector("#dlt").addEventListener("click",function(t){t.preventDefault(),n.remove(),i.splice(i.indexOf(e),1),o(i)})})}function l(e){if(t.innerHTML="",null!==e&&e.length>0)e.forEach(function(e){var n='          \n            <li class="list-group-item d-flex justify-content-between align-items-center fs-4">\n            <span id="liText">'.concat(e.name,'</span>\n            <span>\n              <a><i class="bi bi-check-square"></i></a>\n              <a><i class="bi bi-x-square" id="dlt"></i></a>\n            </span>\n            </li>');t.insertAdjacentHTML("beforeend",n),a(e)});else{t.insertAdjacentHTML("beforeend",'\n        <li class="list-group-item d-flex justify-content-between align-items-center">\n               <span>No Records Found.</span>\n        </li>')}}function s(){var e=localStorage.getItem("todoItems");null===e&&"undefined"===e||(i=JSON.parse(e)),l(i)}function o(e){localStorage.setItem("todoItems",JSON.stringify(e))}document.addEventListener("DOMContentLoaded",function(){e.addEventListener("submit",function(e){e.preventDefault();var t=n.value.trim();if(0!==t.length){var a={name:t,isDone:!1};(i=i||[]).push(a),o(i),l(i)}else alert("A task cannot be empty. Please enter a Task......");n.value=""}),s()});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/simple-todo-list-using-bootstrap-and-js/main.f8142825.js.map