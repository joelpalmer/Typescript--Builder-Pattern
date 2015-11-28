//https://msdn.microsoft.com/en-us/library/system.uribuilder%28v=vs.110%29.aspx
//Eventually should be added to Utils
var UriBuilder = (function () {
    function UriBuilder(obj) {
        if (obj === void 0) { obj = { fragment: null, host: "localhost", userName: null, password: null, scheme: "http", path: "/", port: -1, query: null }; }
        this.fragment = obj.fragment;
        this.host = obj.host;
        this.userName = obj.userName;
        this.password = obj.password;
        this.scheme = obj.scheme;
        this.path = obj.path;
        this.port = obj.port;
        this.query = obj.query;
    }
    UriBuilder.prototype.toString = function () {
        return "" + this.scheme + "://" + this.host + this.path;
    };
    return UriBuilder;
})();
var urlProps = {};
var myurl = new UriBuilder();
console.log(myurl.toString());
//# sourceMappingURL=RequestBuilder.js.map