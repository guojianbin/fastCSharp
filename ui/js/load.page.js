'use strict';
var fastCSharp;
(function (fastCSharp) {
    var Loader = (function () {
        function Loader() {
        }
        Loader.CreateJavascipt = function (Src, Charset) {
            if (Charset === void 0) { Charset = Loader.Charset; }
            var Script = document.createElement('script');
            Script.lang = 'javascript';
            Script.type = 'text/javascript';
            Script.src = Src;
            Script.charset = Charset;
            return Script;
        };
        Loader.AppendJavaScript = function (Src, Charset) {
            if (Charset === void 0) { Charset = Loader.Charset; }
            this.DocumentHead.appendChild(this.CreateJavascipt(Src, Charset));
        };
        Loader.Load = function () {
            Loader.DocumentHead = document.getElementsByTagName('head')[0];
            for (var Nodes = Loader.DocumentHead.childNodes, Index = Nodes.length; Index !== 0;) {
                var Node = Nodes[--Index];
                if (Node.tagName && Node.tagName.toLowerCase() === 'script') {
                    var LoadJs = Node.src.match(/^(https?:\/\/[^\/]+\/)js\/load(Page)?\.js\?v=([\dABCDEF]+)$/i);
                    if (LoadJs && LoadJs[1] && LoadJs[3]) {
                        Loader.JsDomain = LoadJs[1];
                        Loader.Version = LoadJs[3];
                        Loader.Charset = Node.charset;
                        break;
                    }
                }
            }
            if (!Loader.JsDomain)
                Loader.JsDomain = '/';
            Loader.PageView = false;
            Loader.AppendJavaScript(Loader.JsDomain + 'js/base.js?v=' + Loader.Version);
        };
        return Loader;
    }());
    fastCSharp.Loader = Loader;
    Loader.Load();
})(fastCSharp || (fastCSharp = {}));