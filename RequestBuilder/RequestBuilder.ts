/*
 In the real world project it is used in conjunction with https://docs.angularjs.org/api/ng/service/$http
 */


module Utils {
    export class RequestBuilder {

        private verb:string;
        private host:string;
        private _userName:string;
        private password:string;
        private scheme:string;
        private path:string;
        private port:string;
        private query:string;

        constructor(verb:string) {

            this.verb = verb;
        }

        get Verb() {
            return this.verb;
        }

        setHost(value:string):RequestBuilder {
            this.host = value;
            return this;
        }

        get Host() {
            return this.host;
        }

        setScheme(value:string):RequestBuilder {
            this.scheme = value;
            return this;
        }

        get Scheme() {
            return this.scheme + "://";

        }

        setUserName(value:string):RequestBuilder {
            //this.userName = value;
            //return this;

            throw new Error("Not Implemented");
        }

        get UserName() {
            //return this.userName;
            throw new Error("Not Implemented");
        }

        setPort(value:string):RequestBuilder {
            this.port = value;
            return this;
        }

        get Port() {
            return ":" + this.port;

        }

        setPath(value:string):RequestBuilder {
            this.path = value;
            return this;
        }

        get Path() {
            return "/" + this.path;

        }

        setQuery(value:[{key: string; value: string}]):RequestBuilder {
            var firstPair: string = "?"+value[0].key + "=" + value[0].value;
            var pairs: string = "";

            for(var i: number = 0; i < value.length; i++ ){
                if(i > 0)
                pairs += "&"+value[i].key + "=" + value[i].value;
            }


            this.query = firstPair + pairs;
            return this;
        }

        get Query() {
            return this.query;
        }

        build():Request {
            return new Request(this);
        }


    }

    export class Request {

        private verb:string;
        private host:string;
        //private _userName:string;
        //private password:string;
        private scheme:string;
        private path:string;
        private port:string;
        private query:string;

        constructor(requestBuilder:RequestBuilder) {

            this.verb = requestBuilder.Verb;
            this.host = requestBuilder.Host;
            //this.userName = requestBuilder.userName;
            //this.password = requestBuilder.password;
            this.scheme = requestBuilder.Scheme;
            this.path = requestBuilder.Path;
            this.port = requestBuilder.Port;
            this.query = requestBuilder.Query;

        }

        get Verb() {
            return this.verb;
        }

        get Host() {
            return this.host;
        }

        get Scheme() {
            return this.scheme;
        }

        get Path() {
            return this.path;
        }

        get Port() {
            return this.port;
        }

        get Query() {
            return this.query;
        }

        toString() {
            return "" + this.Scheme + this.Host + this.Port + this.Path + this.Query;
        }

    }
}


var myRequest = new Utils.RequestBuilder("get")
    .setScheme("http")
    .setPath("mypath")
    .setHost("localhost")
    .setPort("9999")
    .setQuery([{key: "v", value: "t"},{key: "name", value: "me"}, {key: "she", value: "Lola"} ])
    .build();

console.log("My Request: " + myRequest.toString());

var a = <HTMLAnchorElement> document.getElementById("aOutput");
a.href = myRequest.toString();