> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/closecode-swift.property](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/closecode-swift.property)

# closeCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A code that indicates the reason a connection closed.

## Declaration

```swift
var closeCode: URLSessionWebSocketTask.CloseCode { get }
```

<a id="Discussion"></a>

## Discussion

You can retrieve the close code at any time. When the task is not yet closed, this value is [URLSessionWebSocketTask.CloseCode.invalid](closecode-swift.enum/invalid.md).

## See Also

### Closing the connection

- [cancel(with:reason:)](cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [URLSessionWebSocketTask.CloseCode](closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
- [closeReason](closereason.md): A block of data that provides further information about why a connection closed.

# closeCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A code that indicates the reason a connection closed.

## Declaration

```objectivec
@property (readonly) NSURLSessionWebSocketCloseCode closeCode;
```

<a id="Discussion"></a>

## Discussion

You can retrieve the close code at any time. When the task is not yet closed, this value is [NSURLSessionWebSocketCloseCodeInvalid](closecode-swift.enum/invalid.md).

## See Also

### Closing the connection

- [cancelWithCloseCode:reason:](cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [NSURLSessionWebSocketCloseCode](closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
- [closeReason](closereason.md): A block of data that provides further information about why a connection closed.
