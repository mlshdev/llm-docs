> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/httpbodystream](https://developer.apple.com/documentation/foundation/nsurlrequest/httpbodystream)

# httpBodyStream (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body as an input stream.

## Declaration

```swift
var httpBodyStream: InputStream? { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if the body stream has not been set. The returned stream is for examination only—it is not safe to manipulate the stream in any way.

The receiver will have either an HTTP body or an HTTP body stream, only one may be set for a request. A HTTP body stream is preserved when copying an [NSURLRequest](../nsurlrequest.md) object, but is lost when a request is archived using the [NSCoding](../nscoding.md) protocol.

## See Also

### Related Documentation

- [httpBodyStream](../nsmutableurlrequest/httpbodystream.md): The request body as an input stream.
- [httpBody](../nsmutableurlrequest/httpbody.md): The request body.

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL being requested.
- [httpBody](httpbody.md): The request body.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with the request.

# HTTPBodyStream (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body as an input stream.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSInputStream * HTTPBodyStream;
```

<a id="Discussion"></a>

## Discussion

`nil` if the body stream has not been set. The returned stream is for examination only—it is not safe to manipulate the stream in any way.

The receiver will have either an HTTP body or an HTTP body stream, only one may be set for a request. A HTTP body stream is preserved when copying an [NSURLRequest](../nsurlrequest.md) object, but is lost when a request is archived using the [NSCoding](../nscoding.md) protocol.

## See Also

### Related Documentation

- [HTTPBodyStream](../nsmutableurlrequest/httpbodystream.md): The request body as an input stream.
- [HTTPBody](../nsmutableurlrequest/httpbody.md): The request body.

### Accessing request components

- [HTTPMethod](httpmethod.md): The HTTP request method.
- [URL](url.md): The URL being requested.
- [HTTPBody](httpbody.md): The request body.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with the request.
