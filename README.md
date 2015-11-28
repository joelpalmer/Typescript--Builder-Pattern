# Typescript--Builder-Pattern
Real world TypeScript implementation of the builder pattern for building a complex http request object that provides the client with a fluent API.

If you wanted to use it inside of an Angular directive like I am in a real project...

```typescript
scope: {},
        link: function (scope:ISidebarScope) {

            scope.Utils = Utils;
            var myRequest = new scope.Utils.RequestBuilder("get").setScheme("http").setPath("mypath").setHost("localhost").setPort("9999").build();

            console.log("My Request: " + myRequest.toString());

            var a = <HTMLAnchorElement> document.getElementById("aOutput");
            a.href = myRequest.toString();
```