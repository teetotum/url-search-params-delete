# url-search-params-delete

A polyfill adding support for `.delete(key,value)` to `URLSearchParams` as discussed at https://github.com/whatwg/url/issues/335

```js
const paramsString = "foo=1&foo=2&bar=3";
const searchParams = new URLSearchParams(paramsString);
searchParams.delete("foo", "2");
console.log(searchParams.toString()); // "foo=1&bar=3"
```

Install the npm package `url-search-params-delete` and import it in your application code; a suitable location for this is usually at the top of your entry file.

```js
import "url-search-params-delete";
```
