"use strict";function ajax(e){var t=e||{},s=t.url;if(s){var o=t.type||"get",n=t.data||{},r=!1!==t.async||t.async,c=t.dataType||"text",a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");a.open(o,s+"?",r);var p=[];for(var u in n)p.push(u+"="+n[u]);switch(s=(n=p.join("&"))?s+"?"+n:s,a.onload=function(e){200===e.target.status?"json"===c?"function"==typeof t.success&&t.success(JSON.parse(e.target.response)):"function"==typeof t.success&&t.success(e.target.response):"function"==typeof t.error&&t.error(new Error("error"))},o.toLowerCase()){case"get":a.open(o,s,r),a.send();break;case"post":a.open(o,s,r),a.setRequestHeader("content-type","Application/x-www-form-urlencoded"),a.send(n)}}}