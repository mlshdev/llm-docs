> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/httpbody](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/httpbody)

# httpBody (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body.

## Declaration

```swift
var httpBody: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The request body is sent as the message body of the request, as in an HTTP `POST` request. Setting the HTTP body data clears any input stream in [httpBodyStream](httpbodystream.md). These values are mutually exclusive.

## See Also

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL being requested.
- [httpBodyStream](httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](maindocumenturl.md): The main document URL.

# HTTPBody (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body.

## Declaration

```objectivec
@property (copy, nullable) NSData * HTTPBody;
```

<a id="Discussion"></a>

## Discussion

The request body is sent as the message body of the request, as in an HTTP `POST` request. Setting the HTTP body data clears any input stream in [HTTPBodyStream](httpbodystream.md). These values are mutually exclusive.

## See Also

### Accessing request components

- [HTTPMethod](httpmethod.md): The HTTP request method.
- [URL](url.md): The URL being requested.
- [HTTPBodyStream](httpbodystream.md): The request body as an input stream.
- [mainDocumentURL](maindocumenturl.md): The main document URL.
