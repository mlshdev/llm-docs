> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest/1627343-getallresponseheaders](https://developer.apple.com/documentation/tvmljs/xmlhttprequest/1627343-getallresponseheaders)

# getAllResponseHeaders

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ · Safari Desktop 10.0+ · Safari Mobile 10.0+

Returns all of the response headers.

## Declaration

```
String getAllResponseHeaders();
```

```
DOMString getAllResponseHeaders();
```

<a id="return_value"></a>

## Return Value

A string representation of the response headers.

<a id="discussion"></a>

## Discussion

Returns `null` if no responses have been received.

## See Also

### Manipulating the Header List

- [getResponseHeader](1627438-getresponseheader.md): Retrieves the field value from the response that is contained in the specified header.
- [setRequestHeader](1627317-setrequestheader.md): Appends a header to the list of request headers.
