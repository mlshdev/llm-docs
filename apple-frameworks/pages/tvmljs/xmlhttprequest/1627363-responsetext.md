> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest/1627363-responsetext](https://developer.apple.com/documentation/tvmljs/xmlhttprequest/1627363-responsetext)

# responseText

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ · Safari Desktop 9.0+ · Safari Mobile 9.0+

The response to the request.

## Declaration

```
readonly attribute String responseText;
```

```
readonly attribute DOMString? responseText;
```

<a id="discussion"></a>

## Discussion

If the request was unsuccessful or has not been sent, the value of this attribute is `null`. Otherwise, this attribute contains a string containing the response.

## See Also

### Retrieving Request Information

- [metrics](1627436-metrics.md): A dictionary of keys used to request start and response start and end times.
- [readyState](1627324-readystate.md): The current state of the request.
- [response](1627364-response.md): The response entity body.
- [responseCacheIsValid](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/2871089-responsecacheisvalid)
- [responseType](1627342-responsetype.md): The type of response.
- [responseURL](https://developer.apple.com/documentation/webkitjs/xmlhttprequest/1630664-responseurl)
- [responseXML](1627307-responsexml.md): The document response entity body.
- [status](1627403-status.md): The HTTP status code.
- [statusText](1627375-statustext.md): The HTTP status text.
