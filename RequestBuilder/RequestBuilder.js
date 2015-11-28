/*Design references:
 http://hc.apache.org/httpcomponents-client-ga/httpclient/apidocs/org/apache/http/client/methods/RequestBuilder.html
 https://msdn.microsoft.com/en-us/library/System.UriBuilder%28v=vs.110%29.aspx

 In the real world project it is used in conjunction with https://docs.angularjs.org/api/ng/service/$http

 */
var Utils;
(function (Utils) {
    var RequestBuilder = (function () {
        function RequestBuilder(verb) {
            this.verb = verb;
        }
        Object.defineProperty(RequestBuilder.prototype, "userName", {
            get: function () {
                return this._userName;
            },
            set: function (value) {
                this._userName = value;
            },
            enumerable: true,
            configurable: true
        });
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
                return this.scheme;
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
                return this.port;
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
            this.query = value;
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
            return "" + this.scheme + "://" + this.host + this.path;
        };
        return Request;
    })();
    Utils.Request = Request;
})(Utils || (Utils = {}));
var myRequest = new Utils.RequestBuilder("get").setScheme("http").setPath("mypath").setHost("localhost").build();
console.log("My Request: " + myRequest.toString());
//# sourceMappingURL=RequestBuilder.js.map