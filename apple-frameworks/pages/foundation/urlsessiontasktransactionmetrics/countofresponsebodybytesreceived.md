> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/countofresponsebodybytesreceived](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/countofresponsebodybytesreceived)

# countOfResponseBodyBytesReceived (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes transferred for the response body.

## Declaration

```swift
var countOfResponseBodyBytesReceived: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

This value includes protocol-specific framing, transfer encoding, and content encoding.

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesBeforeEncoding](countofrequestbodybytesbeforeencoding.md): The size of the upload body data, file, or stream, in bytes.
- [countOfRequestBodyBytesSent](countofrequestbodybytessent.md): The number of bytes transferred for the request body.
- [countOfRequestHeaderBytesSent](countofrequestheaderbytessent.md): The number of bytes transferred for the request header.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.

# countOfResponseBodyBytesReceived (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes transferred for the response body.

## Declaration

```objectivec
@property (readonly) int64_t countOfResponseBodyBytesReceived;
```

<a id="Discussion"></a>

## Discussion

This value includes protocol-specific framing, transfer encoding, and content encoding.

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesBeforeEncoding](countofrequestbodybytesbeforeencoding.md): The size of the upload body data, file, or stream, in bytes.
- [countOfRequestBodyBytesSent](countofrequestbodybytessent.md): The number of bytes transferred for the request body.
- [countOfRequestHeaderBytesSent](countofrequestheaderbytessent.md): The number of bytes transferred for the request header.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.
