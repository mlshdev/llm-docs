> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlrequest/httpbodystream](https://developer.apple.com/documentation/foundation/urlrequest/httpbodystream)

# httpBodyStream

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stream used to deliver the HTTP body.

## Declaration

```swift
var httpBodyStream: InputStream? { get set }
```

<a id="Discussion"></a>

## Discussion

The stream is returned for examination only; it’s unsafe for the caller to manipulate the stream in any way.

> **Note**

>  The [httpBodyStream](httpbodystream.md) and [httpBody](httpbody.md) are mutually exclusive - only one can be set on a given request. The body stream is preserved across copies, but is lost when the request is coded via the [NSCoding](../nscoding.md) protocol

## See Also

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL of the request.
- [httpBody](httpbody.md): The data sent as the message body of a request, such as for an HTTP POST request.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with this request.
