> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest/1627317-setrequestheader](https://developer.apple.com/documentation/tvmljs/xmlhttprequest/1627317-setrequestheader)

# setRequestHeader

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ · Safari Desktop 4.0+ · Safari Mobile 3.0+

Appends a header to the list of request headers.

## Declaration

```
void setRequestHeader(
    in String header, 
    in String value
);
```

```
void setRequestHeader(
    DOMString header, 
    DOMString value
);
```

## Parameters

- `header`: The header name.
- `value`: The header value.

<a id="discussion"></a>

## Discussion

If the header already exists in the list of request headers, the specified value is combined with the value currently in the list to create a single request header.

## See Also

### Manipulating the Header List

- [getAllResponseHeaders](1627343-getallresponseheaders.md): Returns all of the response headers.
- [getResponseHeader](1627438-getresponseheader.md): Retrieves the field value from the response that is contained in the specified header.
