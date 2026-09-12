> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/httpbodystream](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/httpbodystream)

# httpBodyStream (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body as an input stream.

## Declaration

```swift
var httpBodyStream: InputStream? { get set }
```

<a id="Discussion"></a>

## Discussion

The request body of the receiver will be this input stream. The entire contents of the stream will be sent as the body, as in an HTTP `POST` request. The input stream should be unopened and the receiver will take over as the stream’s delegate.

Setting a body stream clears any data in [httpBody](httpbody.md). These values are mutually exclusive.

## See Also

### Accessing request components

- [httpMethod](httpmethod.md): The HTTP request method.
- [url](url.md): The URL being requested.
- [httpBody](httpbody.md): The request body.
- [mainDocumentURL](maindocumenturl.md): The main document URL.

# HTTPBodyStream (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request body as an input stream.

## Declaration

```objectivec
@property (retain, nullable) NSInputStream * HTTPBodyStream;
```

<a id="Discussion"></a>

## Discussion

The request body of the receiver will be this input stream. The entire contents of the stream will be sent as the body, as in an HTTP `POST` request. The input stream should be unopened and the receiver will take over as the stream’s delegate.

Setting a body stream clears any data in [HTTPBody](httpbody.md). These values are mutually exclusive.

## See Also

### Accessing request components

- [HTTPMethod](httpmethod.md): The HTTP request method.
- [URL](url.md): The URL being requested.
- [HTTPBody](httpbody.md): The request body.
- [mainDocumentURL](maindocumenturl.md): The main document URL.
