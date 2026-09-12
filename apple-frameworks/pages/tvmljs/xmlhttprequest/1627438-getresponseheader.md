> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest/1627438-getresponseheader](https://developer.apple.com/documentation/tvmljs/xmlhttprequest/1627438-getresponseheader)

# getResponseHeader

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ · Safari Desktop 4.0+ · Safari Mobile 3.0+

Retrieves the field value from the response that is contained in the specified header.

## Declaration

```
String getResponseHeader(
    in String header
);
```

```
DOMString? getResponseHeader(
    DOMString header
);
```

## Parameters

- `header`: The header field name. An exception is raised if this value is not `null` or `String`.

<a id="return_value"></a>

## Return Value

The header field value.

<a id="discussion"></a>

## Discussion

If the header value is `Set-Cookie` or `Set-Cookie2`, the value inside the header will not be returned. This method returns `null` if no response has been received or if the specified header doesn’t exist.

## See Also

### Manipulating the Header List

- [getAllResponseHeaders](1627343-getallresponseheaders.md): Returns all of the response headers.
- [setRequestHeader](1627317-setrequestheader.md): Appends a header to the list of request headers.
