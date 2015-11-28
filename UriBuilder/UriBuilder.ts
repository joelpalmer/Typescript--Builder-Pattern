//https://msdn.microsoft.com/en-us/library/system.uribuilder%28v=vs.110%29.aspx
//Eventually should be added to Utils

interface IUri {

    fragment: string;
    host: string;
    userName: string;
    password: string;
    scheme: string;
    path: string;
    port: number;
    query: string;

}

class UriBuilder{

    public fragment: string;
    public host: string;
    public userName: string;
    public password: string;
    public scheme: string;
    public path: string;
    public port: number;
    public query: string;

    constructor(obj : IUri = {fragment:null, host:"localhost", userName: null, password: null, scheme: "http", path: "/", port: -1, query: null}){

        this.fragment = obj.fragment;
        this.host = obj.host;
        this.userName = obj.userName;
        this.password = obj.password;
        this.scheme = obj.scheme;
        this.path = obj.path;
        this.port = obj.port;
        this.query = obj.query;

    }

    toString() {
        return ""+this.scheme+"://"+this.host+this.path;
    }


}

var urlProps = {};

var myurl = new UriBuilder();

console.log(myurl.toString());