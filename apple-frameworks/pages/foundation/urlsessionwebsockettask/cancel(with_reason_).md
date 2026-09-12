> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/cancel(with:reason:)](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/cancel(with:reason:))

# cancel(with:reason:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a close frame with the given close code and optional close reason.

## Declaration

```swift
func cancel(with closeCode: URLSessionWebSocketTask.CloseCode, reason: Data?)
```

## Parameters

- `closeCode`: A [URLSessionWebSocketTask.CloseCode](closecode-swift.enum.md) that indicates the reason for closing the connection.
- `reason`: Optional further information to explain the closing. The value of this parameter is defined by the endpoints, not by the standard.

<a id="Discussion"></a>

## Discussion

If you call [cancel()](../urlsessiontask/cancel%28%29.md) on the task instead of this method, it sends a cancellation frame with no close code or reason.

## See Also

### Closing the connection

- [closeCode](closecode-swift.property.md): A code that indicates the reason a connection closed.
- [URLSessionWebSocketTask.CloseCode](closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
- [closeReason](closereason.md): A block of data that provides further information about why a connection closed.

# cancelWithCloseCode:reason: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a close frame with the given close code and optional close reason.

## Declaration

```objectivec
- (void) cancelWithCloseCode:(NSURLSessionWebSocketCloseCode) closeCode reason:(NSData *) reason;
```

## Parameters

- `closeCode`: A [NSURLSessionWebSocketCloseCode](closecode-swift.enum.md) that indicates the reason for closing the connection.
- `reason`: Optional further information to explain the closing. The value of this parameter is defined by the endpoints, not by the standard.

<a id="Discussion"></a>

## Discussion

If you call [cancel](../urlsessiontask/cancel%28%29.md) on the task instead of this method, it sends a cancellation frame with no close code or reason.

## See Also

### Closing the connection

- [closeCode](closecode-swift.property.md): A code that indicates the reason a connection closed.
- [NSURLSessionWebSocketCloseCode](closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
- [closeReason](closereason.md): A block of data that provides further information about why a connection closed.
