> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest/1627324-readystate](https://developer.apple.com/documentation/tvmljs/xmlhttprequest/1627324-readystate)

# readyState

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ · Safari Desktop 4.0+ · Safari Mobile 3.0+

The current state of the request.

## Declaration

```
readonly attribute int readyState;
```

```
readonly attribute unsigned short readyState;
```

<a id="discussion"></a>

## Discussion

This attribute can have the following values:

- `0 - UNSENT`
- `1 - OPENED`
- `2 - HEADERS_RECEIVED`
- `3 - LOADING`
- `4 - DONE`

## See Also

### Retrieving Request Information

- [metrics](1627436-metrics.md): A dictionary of keys used to request start and response start and end times.
- [response](1627364-response.md): The response entity body.
- [responseCacheIsValid](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/2871089-responsecacheisvalid)
- [responseText](1627363-responsetext.md): The response to the request.
- [responseType](1627342-responsetype.md): The type of response.
- [responseURL](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630664-responseurl)
- [responseXML](1627307-responsexml.md): The document response entity body.
- [status](1627403-status.md): The HTTP status code.
- [statusText](1627375-statustext.md): The HTTP status text.
