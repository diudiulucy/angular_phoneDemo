/**
 * Created by asus-1 on 2017/4/1.
 */
'use strict';

angular.
module('phonecatApp').animation('.phone',function phoneAnimationFactory() {
    return {
        addClass:animateIn,
        removeClass:animateOut
    };

    function animateIn(element,className,done) {
       if(className !='selected'){
           return;
       }
       element.css({
           position:'absolute',
           top:500,
           left:0,
           display:'block'
       }).animate({
           top:0
       },done);

       return function animateInEnd(wasCanceled) {
           if(wasCanceled){
               element.stop();
           }
       };

   };
  function animateOut(element,className,done) {
       if(className !='selected'){
           return;
       }
       element.css({
           position:'absolute',
           top:0,
           left:0
       }).animate({
           top:-500
       },done);

       return function animateOutEnd(wasCancel) {
           if(wasCancel){
               element.stop();
           }
       };
   };

});