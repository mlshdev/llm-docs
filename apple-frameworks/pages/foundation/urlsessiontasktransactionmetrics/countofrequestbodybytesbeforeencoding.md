> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/countofrequestbodybytesbeforeencoding](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/countofrequestbodybytesbeforeencoding)

# countOfRequestBodyBytesBeforeEncoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The size of the upload body data, file, or stream, in bytes.

## Declaration

```swift
var countOfRequestBodyBytesBeforeEncoding: Int64 { get }
```

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesSent](countofrequestbodybytessent.md): The number of bytes transferred for the request body.
- [countOfRequestHeaderBytesSent](countofrequestheaderbytessent.md): The number of bytes transferred for the request header.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseBodyBytesReceived](countofresponsebodybytesreceived.md): The number of bytes transferred for the response body.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.

# countOfRequestBodyBytesBeforeEncoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The size of the upload body data, file, or stream, in bytes.

## Declaration

```objectivec
@property (readonly) int64_t countOfRequestBodyBytesBeforeEncoding;
```

## See Also

### Accessing data transfer metrics

- [countOfRequestBodyBytesSent](countofrequestbodybytessent.md): The number of bytes transferred for the request body.
- [countOfRequestHeaderBytesSent](countofrequestheaderbytessent.md): The number of bytes transferred for the request header.
- [countOfResponseBodyBytesAfterDecoding](countofresponsebodybytesafterdecoding.md): The size of data delivered to your delegate or completion handler.
- [countOfResponseBodyBytesReceived](countofresponsebodybytesreceived.md): The number of bytes transferred for the response body.
- [countOfResponseHeaderBytesReceived](countofresponseheaderbytesreceived.md): The number of bytes transferred for the response header.
