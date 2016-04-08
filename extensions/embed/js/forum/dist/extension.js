/*! iFrame Resizer (iframeSizer.contentWindow.min.js) - v3.5.1 - 2015-11-04
 *  Desc: Include this file in any page being loaded into an iframe
 *        to force the iframe to resize to the content size.
 *  Requires: iframeResizer.min.js on host page.
 *  Copyright: (c) 2015 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function c(b,c,d){"removeEventListener"in a?b.removeEventListener(c,d,!1):"detachEvent"in a&&b.detachEvent("on"+c,d)}function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}function e(a){var b,c,d,e=null,f=0,g=function(){f=Fa(),e=null,d=a.apply(b,c),e||(b=c=null)};return function(){var h=Fa();f||(f=h);var i=xa-(h-f);return b=this,c=arguments,0>=i||i>xa?(e&&(clearTimeout(e),e=null),f=h,d=a.apply(b,c),e||(b=c=null)):e||(e=setTimeout(g,i)),d}}function f(a){return ma+"["+oa+"] "+a}function g(b){la&&"object"==typeof a.console&&console.log(f(b))}function h(b){"object"==typeof a.console&&console.warn(f(b))}function i(){j(),g("Initialising iFrame ("+location.href+")"),k(),n(),m("background",W),m("padding",$),A(),s(),t(),o(),C(),u(),ia=B(),N("init","Init message from host page"),Da()}function j(){function a(a){return"true"===a?!0:!1}var b=ha.substr(na).split(":");oa=b[0],X=void 0!==b[1]?Number(b[1]):X,_=void 0!==b[2]?a(b[2]):_,la=void 0!==b[3]?a(b[3]):la,ja=void 0!==b[4]?Number(b[4]):ja,U=void 0!==b[6]?a(b[6]):U,Y=b[7],fa=void 0!==b[8]?b[8]:fa,W=b[9],$=b[10],ua=void 0!==b[11]?Number(b[11]):ua,ia.enable=void 0!==b[12]?a(b[12]):!1,qa=void 0!==b[13]?b[13]:qa,Aa=void 0!==b[14]?b[14]:Aa}function k(){function b(){var b=a.iFrameResizer;g("Reading data from page: "+JSON.stringify(b)),Ca="messageCallback"in b?b.messageCallback:Ca,Da="readyCallback"in b?b.readyCallback:Da,ta="targetOrigin"in b?b.targetOrigin:ta,fa="heightCalculationMethod"in b?b.heightCalculationMethod:fa,Aa="widthCalculationMethod"in b?b.widthCalculationMethod:Aa}"iFrameResizer"in a&&Object===a.iFrameResizer.constructor&&b(),g("TargetOrigin for parent set to: "+ta)}function l(a,b){return-1!==b.indexOf("-")&&(h("Negative CSS value ignored for "+a),b=""),b}function m(a,b){void 0!==b&&""!==b&&"null"!==b&&(document.body.style[a]=b,g("Body "+a+' set to "'+b+'"'))}function n(){void 0===Y&&(Y=X+"px"),m("margin",l("margin",Y))}function o(){document.documentElement.style.height="",document.body.style.height="",g('HTML & body height set to "auto"')}function p(e){function f(){N(e.eventName,e.eventType)}var h={add:function(c){b(a,c,f)},remove:function(b){c(a,b,f)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(h[e.method])):h[e.method](e.eventName),g(d(e.method)+" event listener: "+e.eventType)}function q(a){p({method:a,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),p({method:a,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),p({method:a,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),p({method:a,eventType:"Input",eventName:"input"}),p({method:a,eventType:"Mouse Up",eventName:"mouseup"}),p({method:a,eventType:"Mouse Down",eventName:"mousedown"}),p({method:a,eventType:"Orientation Change",eventName:"orientationchange"}),p({method:a,eventType:"Touch Start",eventName:"touchstart"}),p({method:a,eventType:"Touch End",eventName:"touchend"}),p({method:a,eventType:"Touch Cancel",eventName:"touchcancel"}),p({method:a,eventType:"Print",eventName:["afterprint","beforeprint"]}),p({method:a,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),p({method:a,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),p({method:a,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===qa&&p({method:a,eventType:"IFrame Resized",eventName:"resize"})}function r(a,b,c,d){return b!==a&&(a in c||(h(a+" is not a valid option for "+d+"CalculationMethod."),a=b),g(d+' calculation method set to "'+a+'"')),a}function s(){fa=r(fa,ea,Ga,"height")}function t(){Aa=r(Aa,za,Ha,"width")}function u(){!0===U?(q("add"),F()):g("Auto Resize disabled")}function v(){g("Disable outgoing messages"),ra=!1}function w(){g("Remove event listener: Message"),c(a,"message",S)}function x(){null!==Z&&Z.disconnect()}function y(){q("remove"),x(),clearInterval(ka)}function z(){v(),w(),!0===U&&y()}function A(){var a=document.createElement("div");a.style.clear="both",a.style.display="block",document.body.appendChild(a)}function B(){function c(){return{x:void 0!==a.pageXOffset?a.pageXOffset:document.documentElement.scrollLeft,y:void 0!==a.pageYOffset?a.pageYOffset:document.documentElement.scrollTop}}function d(a){var b=a.getBoundingClientRect(),d=c();return{x:parseInt(b.left,10)+parseInt(d.x,10),y:parseInt(b.top,10)+parseInt(d.y,10)}}function e(a){function b(a){var b=d(a);g("Moving to in page link (#"+c+") at x: "+b.x+" y: "+b.y),R(b.y,b.x,"scrollToOffset")}var c=a.split("#")[1]||a,e=decodeURIComponent(c),f=document.getElementById(e)||document.getElementsByName(e)[0];void 0!==f?b(f):(g("In page link (#"+c+") not found in iFrame, so sending to parent"),R(0,0,"inPageLink","#"+c))}function f(){""!==location.hash&&"#"!==location.hash&&e(location.href)}function i(){function a(a){function c(a){a.preventDefault(),e(this.getAttribute("href"))}"#"!==a.getAttribute("href")&&b(a,"click",c)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),a)}function j(){b(a,"hashchange",f)}function k(){setTimeout(f,ba)}function l(){Array.prototype.forEach&&document.querySelectorAll?(g("Setting up location.hash handlers"),i(),j(),k()):h("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ia.enable?l():g("In page linking not enabled"),{findTarget:e}}function C(){g("Enable public methods"),Ba.parentIFrame={autoResize:function(a){return!0===a&&!1===U?(U=!0,u()):!1===a&&!0===U&&(U=!1,y()),U},close:function(){R(0,0,"close"),z()},getId:function(){return oa},getPageInfo:function(a){"function"==typeof a?(Ea=a,R(0,0,"pageInfo")):(Ea=a,R(0,0,"pageInfoStop"))},moveToAnchor:function(a){ia.findTarget(a)},reset:function(){Q("parentIFrame.reset")},scrollTo:function(a,b){R(b,a,"scrollTo")},scrollToOffset:function(a,b){R(b,a,"scrollToOffset")},sendMessage:function(a,b){R(0,0,"message",JSON.stringify(a),b)},setHeightCalculationMethod:function(a){fa=a,s()},setWidthCalculationMethod:function(a){Aa=a,t()},setTargetOrigin:function(a){g("Set targetOrigin: "+a),ta=a},size:function(a,b){var c=""+(a?a:"")+(b?","+b:"");N("size","parentIFrame.size("+c+")",a,b)}}}function D(){0!==ja&&(g("setInterval: "+ja+"ms"),ka=setInterval(function(){N("interval","setInterval: "+ja)},Math.abs(ja)))}function E(){function b(a){function b(a){!1===a.complete&&(g("Attach listeners to "+a.src),a.addEventListener("load",f,!1),a.addEventListener("error",h,!1),k.push(a))}"attributes"===a.type&&"src"===a.attributeName?b(a.target):"childList"===a.type&&Array.prototype.forEach.call(a.target.querySelectorAll("img"),b)}function c(a){k.splice(k.indexOf(a),1)}function d(a){g("Remove listeners from "+a.src),a.removeEventListener("load",f,!1),a.removeEventListener("error",h,!1),c(a)}function e(a,b,c){d(a.target),N(b,c+": "+a.target.src,void 0,void 0)}function f(a){e(a,"imageLoad","Image loaded")}function h(a){e(a,"imageLoadFailed","Image load failed")}function i(a){N("mutationObserver","mutationObserver: "+a[0].target+" "+a[0].type),a.forEach(b)}function j(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return m=new l(i),g("Create body MutationObserver"),m.observe(a,b),m}var k=[],l=a.MutationObserver||a.WebKitMutationObserver,m=j();return{disconnect:function(){"disconnect"in m&&(g("Disconnect body MutationObserver"),m.disconnect(),k.forEach(d))}}}function F(){var b=0>ja;a.MutationObserver||a.WebKitMutationObserver?b?D():Z=E():(g("MutationObserver not supported in this browser!"),D())}function G(a,b){function c(a){var c=/^\d+(px)?$/i;if(c.test(a))return parseInt(a,V);var d=b.style.left,e=b.runtimeStyle.left;return b.runtimeStyle.left=b.currentStyle.left,b.style.left=a||0,a=b.style.pixelLeft,b.style.left=d,b.runtimeStyle.left=e,a}var d=0;return b=b||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(d=document.defaultView.getComputedStyle(b,null),d=null!==d?d[a]:0):d=c(b.currentStyle[a]),parseInt(d,V)}function H(a){a>xa/2&&(xa=2*a,g("Event throttle increased to "+xa+"ms"))}function I(a,b){for(var c=b.length,e=0,f=0,h=d(a),i=Fa(),j=0;c>j;j++)e=b[j].getBoundingClientRect()[a]+G("margin"+h,b[j]),e>f&&(f=e);return i=Fa()-i,g("Parsed "+c+" HTML elements"),g("Element position calculated in "+i+"ms"),H(i),f}function J(a){return[a.bodyOffset(),a.bodyScroll(),a.documentElementOffset(),a.documentElementScroll()]}function K(a,b){function c(){return h("No tagged elements ("+b+") found on page"),da}var d=document.querySelectorAll("["+b+"]");return 0===d.length?c():I(a,d)}function L(){return document.querySelectorAll("body *")}function M(a,b,c,d){function e(){da=l,ya=m,R(da,ya,a)}function f(){function a(a,b){var c=Math.abs(a-b)<=ua;return!c}return l=void 0!==c?c:Ga[fa](),m=void 0!==d?d:Ha[Aa](),a(da,l)||_&&a(ya,m)}function h(){return!(a in{init:1,interval:1,size:1})}function i(){return fa in pa||_&&Aa in pa}function j(){g("No change in size detected")}function k(){h()&&i()?Q(b):a in{interval:1}||j()}var l,m;f()||"init"===a?(O(),e()):k()}function N(a,b,c,d){function e(){a in{reset:1,resetPage:1,init:1}||g("Trigger event: "+b)}function f(){return va&&a in aa}f()?g("Trigger event cancelled: "+a):(e(),Ia(a,b,c,d))}function O(){va||(va=!0,g("Trigger event lock on")),clearTimeout(wa),wa=setTimeout(function(){va=!1,g("Trigger event lock off"),g("--")},ba)}function P(a){da=Ga[fa](),ya=Ha[Aa](),R(da,ya,a)}function Q(a){var b=fa;fa=ea,g("Reset trigger event: "+a),O(),P("reset"),fa=b}function R(a,b,c,d,e){function f(){void 0===e?e=ta:g("Message targetOrigin: "+e)}function h(){var f=a+":"+b,h=oa+":"+f+":"+c+(void 0!==d?":"+d:"");g("Sending message to host page ("+h+")"),sa.postMessage(ma+h,e)}!0===ra&&(f(),h())}function S(b){function c(){return ma===(""+b.data).substr(0,na)}function d(){ha=b.data,sa=b.source,i(),ca=!1,setTimeout(function(){ga=!1},ba)}function e(){ga?g("Page reset ignored by init"):(g("Page size reset by host page"),P("resetPage"))}function f(){N("resizeParent","Parent window requested size check")}function j(){var a=l();ia.findTarget(a)}function k(){return b.data.split("]")[1].split(":")[0]}function l(){return b.data.substr(b.data.indexOf(":")+1)}function m(){return"iFrameResize"in a}function n(){var a=l();g("MessageCallback called from parent: "+a),Ca(JSON.parse(a)),g(" --")}function o(){var a=l();g("PageInfoFromParent called from parent: "+a),Ea(JSON.parse(a)),g(" --")}function p(){return b.data.split(":")[2]in{"true":1,"false":1}}function q(){switch(k()){case"reset":e();break;case"resize":f();break;case"moveToAnchor":j();break;case"message":n();break;case"pageInfo":o();break;default:m()||p()||h("Unexpected message ("+b.data+")")}}function r(){!1===ca?q():p()?d():g('Ignored message of type "'+k()+'". Received before initialization.')}c()&&r()}function T(){"loading"!==document.readyState&&a.parent.postMessage("[iFrameResizerChild]Ready","*")}var U=!0,V=10,W="",X=0,Y="",Z=null,$="",_=!1,aa={resize:1,click:1},ba=128,ca=!0,da=1,ea="bodyOffset",fa=ea,ga=!0,ha="",ia={},ja=32,ka=null,la=!1,ma="[iFrameSizer]",na=ma.length,oa="",pa={max:1,min:1,bodyScroll:1,documentElementScroll:1},qa="child",ra=!0,sa=a.parent,ta="*",ua=0,va=!1,wa=null,xa=16,ya=1,za="scroll",Aa=za,Ba=a,Ca=function(){h("MessageCallback function not defined")},Da=function(){},Ea=function(){},Fa=Date.now||function(){return(new Date).getTime()},Ga={bodyOffset:function(){return document.body.offsetHeight+G("marginTop")+G("marginBottom")},offset:function(){return Ga.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,J(Ga))},min:function(){return Math.min.apply(null,J(Ga))},grow:function(){return Ga.max()},lowestElement:function(){return Math.max(Ga.bodyOffset(),I("bottom",L()))},taggedElement:function(){return K("bottom","data-iframe-height")}},Ha={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Ha.bodyScroll(),Ha.documentElementScroll())},max:function(){return Math.max.apply(null,J(Ha))},min:function(){return Math.min.apply(null,J(Ha))},rightMostElement:function(){return I("right",L())},taggedElement:function(){return K("right","data-iframe-width")}},Ia=e(M);b(a,"message",S),T()}(window||{});
//# sourceMappingURL=iframeResizer.contentWindow.map;
'use strict';

System.register('flarum/embed/components/DiscussionPage', ['flarum/components/DiscussionPage', 'flarum/components/PostStream', 'flarum/helpers/listItems'], function (_export, _context) {
  var BaseDiscussionPage, PostStream, listItems, DiscussionPage;
  return {
    setters: [function (_flarumComponentsDiscussionPage) {
      BaseDiscussionPage = _flarumComponentsDiscussionPage.default;
    }, function (_flarumComponentsPostStream) {
      PostStream = _flarumComponentsPostStream.default;
    }, function (_flarumHelpersListItems) {
      listItems = _flarumHelpersListItems.default;
    }],
    execute: function () {
      DiscussionPage = function (_BaseDiscussionPage) {
        babelHelpers.inherits(DiscussionPage, _BaseDiscussionPage);

        function DiscussionPage() {
          babelHelpers.classCallCheck(this, DiscussionPage);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(DiscussionPage).apply(this, arguments));
        }

        babelHelpers.createClass(DiscussionPage, [{
          key: 'init',
          value: function init() {
            babelHelpers.get(Object.getPrototypeOf(DiscussionPage.prototype), 'init', this).call(this);

            this.bodyClass = null;
          }
        }, {
          key: 'view',
          value: function view() {
            return m(
              'div',
              { className: 'DiscussionPage' },
              m(
                'div',
                { 'class': 'container' },
                m(
                  'div',
                  { className: 'DiscussionPage-discussion' },
                  m(
                    'nav',
                    { className: 'DiscussionPage-nav--embed' },
                    m(
                      'ul',
                      null,
                      listItems(this.sidebarItems().toArray())
                    )
                  ),
                  m(
                    'div',
                    { className: 'DiscussionPage-stream' },
                    this.stream ? this.stream.render() : ''
                  )
                )
              )
            );
          }
        }, {
          key: 'sidebarItems',
          value: function sidebarItems() {
            var items = babelHelpers.get(Object.getPrototypeOf(DiscussionPage.prototype), 'sidebarItems', this).call(this);

            items.remove('scrubber');

            var count = this.discussion.repliesCount();

            items.add('replies', m(
              'h3',
              null,
              m(
                'a',
                { href: app.route.discussion(this.discussion).replace('/embed', '/d'), config: m.route },
                count,
                ' comment',
                count == 1 ? '' : 's'
              )
            ), 100);

            var props = items.get('controls').props;
            props.className = props.className.replace('App-primaryControl', '');

            return items;
          }
        }]);
        return DiscussionPage;
      }(BaseDiscussionPage);

      _export('default', DiscussionPage);
    }
  };
});;
'use strict';

System.register('flarum/embed/main', ['flarum/extend', 'flarum/app', 'flarum/components/Composer', 'flarum/components/PostStream', 'flarum/components/ModalManager', 'flarum/components/AlertManager', 'flarum/components/PostMeta', 'flarum/utils/mapRoutes', 'flarum/utils/Pane', 'flarum/utils/Drawer', 'flarum/embed/components/DiscussionPage'], function (_export, _context) {
  var override, extend, app, Composer, PostStream, ModalManager, AlertManager, PostMeta, mapRoutes, Pane, Drawer, DiscussionPage;
  return {
    setters: [function (_flarumExtend) {
      override = _flarumExtend.override;
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsComposer) {
      Composer = _flarumComponentsComposer.default;
    }, function (_flarumComponentsPostStream) {
      PostStream = _flarumComponentsPostStream.default;
    }, function (_flarumComponentsModalManager) {
      ModalManager = _flarumComponentsModalManager.default;
    }, function (_flarumComponentsAlertManager) {
      AlertManager = _flarumComponentsAlertManager.default;
    }, function (_flarumComponentsPostMeta) {
      PostMeta = _flarumComponentsPostMeta.default;
    }, function (_flarumUtilsMapRoutes) {
      mapRoutes = _flarumUtilsMapRoutes.default;
    }, function (_flarumUtilsPane) {
      Pane = _flarumUtilsPane.default;
    }, function (_flarumUtilsDrawer) {
      Drawer = _flarumUtilsDrawer.default;
    }, function (_flarumEmbedComponentsDiscussionPage) {
      DiscussionPage = _flarumEmbedComponentsDiscussionPage.default;
    }],
    execute: function () {

      app.initializers.replace('boot', function () {
        m.route.mode = 'pathname';

        override(m, 'route', function (original, root, arg1, arg2, vdom) {
          if (arguments.length === 1) {} else if (arguments.length === 4 && typeof arg1 === 'string') {} else if (root.addEventListener || root.attachEvent) {
            root.href = vdom.attrs.href.replace('/embed', '/d');
            root.target = '_blank';

            // TODO: If href leads to a post within this discussion that we have
            // already loaded, then scroll to it?
            return;
          }

          return original.apply(this, Array.prototype.slice.call(arguments, 1));
        });

        // Trim the /embed prefix off of post permalinks
        override(PostMeta.prototype, 'getPermalink', function (original, post) {
          return original(post).replace('/embed', '/d');
        });

        app.pageInfo = m.prop();

        var reposition = function reposition() {
          var info = app.pageInfo();
          this.$().css('top', Math.max(0, info.scrollTop - info.offsetTop));
        };

        extend(ModalManager.prototype, 'show', reposition);
        extend(Composer.prototype, 'show', reposition);

        window.iFrameResizer = {
          readyCallback: function readyCallback() {
            window.parentIFrame.getPageInfo(app.pageInfo);
          }
        };

        extend(PostStream.prototype, 'goToNumber', function (promise, number) {
          if (number === 'reply' && 'parentIFrame' in window && app.composer.isFullScreen()) {
            var itemTop = this.$('.PostStream-item:last').offset().top;
            window.parentIFrame.scrollToOffset(0, itemTop);
          }
        });

        app.pane = new Pane(document.getElementById('app'));
        app.drawer = new Drawer();
        app.composer = m.mount(document.getElementById('composer'), Composer.component());
        app.modal = m.mount(document.getElementById('modal'), ModalManager.component());
        app.alerts = m.mount(document.getElementById('alerts'), AlertManager.component());

        app.viewingDiscussion = function (discussion) {
          return this.current instanceof DiscussionPage && this.current.discussion === discussion;
        };

        delete app.routes['index.filter'];
        app.routes['discussion'] = { path: '/embed/:id', component: DiscussionPage.component() };
        app.routes['discussion.near'] = { path: '/embed/:id/:near', component: DiscussionPage.component() };

        var basePath = app.forum.attribute('basePath');
        m.route.mode = 'pathname';
        m.route(document.getElementById('content'), basePath + '/', mapRoutes(app.routes, basePath));

        if (m.route.param('hideFirstPost')) {
          extend(PostStream.prototype, 'view', function (vdom) {
            if (vdom.children[0].attrs['data-number'] === 1) {
              vdom.children.splice(0, 1);
            }
          });
        }

        // Initialize FastClick, which makes links and buttons much more responsive on
        // touch devices.
        $(function () {
          FastClick.attach(document.body);

          $('body').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
        });

        app.booted = true;
      });
    }
  };
});