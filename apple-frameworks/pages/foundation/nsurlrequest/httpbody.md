> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/httpbody](https://developer.apple.com/documentation/foundation/nsurlrequest/httpbody)

# httpBody (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body.

## Declaration

```swift
var httpBody: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This data is sent as the message body of a request, as in an HTTP `POST` request.

## See Also

### Related Documentation

- [httpBodyStream](../nsmutableurlrequest/httpbodystream.md): The request body as an input stream.
- [httpBody](../nsmutableurlrequest/httpbody.md): The request body.

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL being requested.
- [httpBodyStream](httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with the request.

# HTTPBody (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * HTTPBody;
```

<a id="Discussion"></a>

## Discussion

This data is sent as the message body of a request, as in an HTTP `POST` request.

## See Also

### Related Documentation

- [HTTPBodyStream](../nsmutableurlrequest/httpbodystream.md): The request body as an input stream.
- [HTTPBody](../nsmutableurlrequest/httpbody.md): The request body.

### Accessing request components

- [HTTPMethod](httpmethod.md): The HTTP request method.
- [URL](url.md): The URL being requested.
- [HTTPBodyStream](httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](maindocumenturl.md): The main document URL associated with the request.
