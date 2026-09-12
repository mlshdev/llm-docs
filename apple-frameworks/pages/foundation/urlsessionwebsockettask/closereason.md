> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/closereason](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/closereason)

# closeReason (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A block of data that provides further information about why a connection closed.

## Declaration

```swift
var closeReason: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The close reason provides further information about why a connection closed, beyond that provided by the [closeCode](closecode-swift.property.md). The value of this property isn’t defined by [RFC 6455](https://tools.ietf.org/html/rfc6455); the endpoints define how it’s used.

You can retrieve the close reason at any time. When the task is not yet closed, this value is [URLSessionWebSocketTask.CloseCode.invalid](closecode-swift.enum/invalid.md).

## See Also

### Closing the connection

- [cancel(with:reason:)](cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [closeCode](closecode-swift.property.md): A code that indicates the reason a connection closed.
- [URLSessionWebSocketTask.CloseCode](closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.

# closeReason (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A block of data that provides further information about why a connection closed.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * closeReason;
```

<a id="Discussion"></a>

## Discussion

The close reason provides further information about why a connection closed, beyond that provided by the [closeCode](closecode-swift.property.md). The value of this property isn’t defined by [RFC 6455](https://tools.ietf.org/html/rfc6455); the endpoints define how it’s used.

You can retrieve the close reason at any time. When the task is not yet closed, this value is [NSURLSessionWebSocketCloseCodeInvalid](closecode-swift.enum/invalid.md).

## See Also

### Closing the connection

- [cancelWithCloseCode:reason:](cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [closeCode](closecode-swift.property.md): A code that indicates the reason a connection closed.
- [NSURLSessionWebSocketCloseCode](closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
