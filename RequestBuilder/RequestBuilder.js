/*
 In the real world project it is used in conjunction with https://docs.angularjs.org/api/ng/service/$http
 */
var Utils;
(function (Utils) {
    var RequestBuilder = (function () {
        function RequestBuilder(verb) {
            this.verb = verb;
        }
        Object.defineProperty(RequestBuilder.prototype, "Verb", {
            get: function () {
                return this.verb;
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.setHost = function (value) {
            this.host = value;
            return this;
        };
        Object.defineProperty(RequestBuilder.prototype, "Host", {
            get: function () {
                return this.host;
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.setScheme = function (value) {
            this.scheme = value;
            return this;
        };
        Object.defineProperty(RequestBuilder.prototype, "Scheme", {
            get: function () {
                return this.scheme + "://";
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.setUserName = function (value) {
            //this.userName = value;
            //return this;
            throw new Error("Not Implemented");
        };
        Object.defineProperty(RequestBuilder.prototype, "UserName", {
            get: function () {
                //return this.userName;
                throw new Error("Not Implemented");
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.setPort = function (value) {
            this.port = value;
            return this;
        };
        Object.defineProperty(RequestBuilder.prototype, "Port", {
            get: function () {
                return ":" + this.port;
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.setPath = function (value) {
            this.path = value;
            return this;
        };
        Object.defineProperty(RequestBuilder.prototype, "Path", {
            get: function () {
                return "/" + this.path;
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.setQuery = function (value) {
            var firstPair = "?" + value[0].key + "=" + value[0].value;
            var pairs = "";
            for (var i = 0; i < value.length; i++) {
                if (i > 0)
                    pairs += "&" + value[i].key + "=" + value[i].value;
            }
            this.query = firstPair + pairs;
            return this;
        };
        Object.defineProperty(RequestBuilder.prototype, "Query", {
            get: function () {
                return this.query;
            },
            enumerable: true,
            configurable: true
        });
        RequestBuilder.prototype.build = function () {
            return new Request(this);
        };
        return RequestBuilder;
    })();
    Utils.RequestBuilder = RequestBuilder;
    var Request = (function () {
        function Request(requestBuilder) {
            this.verb = requestBuilder.Verb;
            this.host = requestBuilder.Host;
            //this.userName = requestBuilder.userName;
            //this.password = requestBuilder.password;
            this.scheme = requestBuilder.Scheme;
            this.path = requestBuilder.Path;
            this.port = requestBuilder.Port;
            this.query = requestBuilder.Query;
        }
        Object.defineProperty(Request.prototype, "Verb", {
            get: function () {
                return this.verb;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "Host", {
            get: function () {
                return this.host;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "Scheme", {
            get: function () {
                return this.scheme;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "Path", {
            get: function () {
                return this.path;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "Port", {
            get: function () {
                return this.port;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "Query", {
            get: function () {
                return this.query;
            },
            enumerable: true,
            configurable: true
        });
        Request.prototype.toString = function () {
            return "" + this.Scheme + this.Host + this.Port + this.Path + this.Query;
        };
        return Request;
    })();
    Utils.Request = Request;
})(Utils || (Utils = {}));
var myRequest = new Utils.RequestBuilder("get")
    .setScheme("http")
    .setPath("mypath")
    .setHost("localhost")
    .setPort("9999")
    .setQuery([{ key: "v", value: "t" }, { key: "name", value: "me" }, { key: "she", value: "Lola" }])
    .build();
console.log("My Request: " + myRequest.toString());
var a = document.getElementById("aOutput");
a.href = myRequest.toString();
//# sourceMappingURL=RequestBuilder.js.map