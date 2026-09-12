> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/countofrequestbodybytessent](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/countofrequestbodybytessent)

# countOfRequestBodyBytesSent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes transferred for the request body.

## Declaration

```swift
var countOfRequestBodyBytesSent: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

This value includes protocol-specific framing, transfer encoding, and content encoding.

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesBeforeEncoding](countofrequestbodybytesbeforeencoding.md): The size of the upload body data, file, or stream, in bytes.
- [countOfRequestHeaderBytesSent](countofrequestheaderbytessent.md): The number of bytes transferred for the request header.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseBodyBytesReceived](countofresponsebodybytesreceived.md): The number of bytes transferred for the response body.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.

# countOfRequestBodyBytesSent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes transferred for the request body.

## Declaration

```objectivec
@property (readonly) int64_t countOfRequestBodyBytesSent;
```

<a id="Discussion"></a>

## Discussion

This value includes protocol-specific framing, transfer encoding, and content encoding.

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesBeforeEncoding](countofrequestbodybytesbeforeencoding.md): The size of the upload body data, file, or stream, in bytes.
- [countOfRequestHeaderBytesSent](countofrequestheaderbytessent.md): The number of bytes transferred for the request header.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseBodyBytesReceived](countofresponsebodybytesreceived.md): The number of bytes transferred for the response body.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.
