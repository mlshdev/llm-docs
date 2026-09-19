> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/countofrequestheaderbytessent

# countOfRequestHeaderBytesSent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes transferred for the request header.

## Declaration

```swift
var countOfRequestHeaderBytesSent: Int64 { get }
```

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesBeforeEncoding](countofrequestbodybytesbeforeencoding.md): The size of the upload body data, file, or stream, in bytes.
- [countOfRequestBodyBytesSent](countofrequestbodybytessent.md): The number of bytes transferred for the request body.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseBodyBytesReceived](countofresponsebodybytesreceived.md): The number of bytes transferred for the response body.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.

# countOfRequestHeaderBytesSent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of bytes transferred for the request header.

## Declaration

```objectivec
@property (readonly) int64_t countOfRequestHeaderBytesSent;
```

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesBeforeEncoding](countofrequestbodybytesbeforeencoding.md): The size of the upload body data, file, or stream, in bytes.
- [countOfRequestBodyBytesSent](countofrequestbodybytessent.md): The number of bytes transferred for the request body.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseBodyBytesReceived](countofresponsebodybytesreceived.md): The number of bytes transferred for the response body.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.
