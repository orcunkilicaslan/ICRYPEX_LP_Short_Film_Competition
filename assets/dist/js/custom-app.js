"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){$(document).ready(function(){$(window).width(),$(window).on("load resize scroll",function(e){var t=$(window).scrollTop(),n=$("body"),o=$("header.header");t>o.height()/3?(o.addClass("headscroll"),n.addClass("bodyscroll")):(o.removeClass("headscroll"),n.removeClass("bodyscroll"))})}),$(document).ready(function(){$("body").addClass("daphne-navbody"),$(window).width()<1060?$(".daphne-mobile").click(function(){$(".daphne-navbody").toggleClass("daphne-moverlay")}):$('.daphne-navbar .nav-link[data-toggle="dropdown"]').click(function(){$("body").addClass("daphne-doverlay"),$(document).click(function(e){$(e.target).parent().hasClass("show")||setTimeout(function(){$("body").removeClass("daphne-doverlay")},250)})})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$('[data-toggle="popover"]').popover()})},function(e,t){document.addEventListener("DOMContentLoaded",function(){var a=new Date("February 1, 2021 23:59:59").getTime(),d=setInterval(function(){var e=(new Date).getTime(),t=a-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),e=Math.floor(t%6e4/1e3);document.getElementById("countDays").innerHTML=n,document.getElementById("countHours").innerHTML=o,document.getElementById("countMinutes").innerHTML=r,document.getElementById("countSeconds").innerHTML=e,t<0?(clearInterval(d),document.getElementById("countdownArea").style.opacity="1",document.getElementById("countdownArea").innerHTML="<p>SÜRESİ DOLDU</p>"):document.getElementById("countdownArea").style.opacity="1"},0)})}]);