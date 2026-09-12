> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/send(_:completionhandler:)](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/send(_:completionhandler:))

# send(\_:completionHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a WebSocket message, receiving the result in a completion handler.

## Declaration

```swift
@preconcurrency func send(_ message: URLSessionWebSocketTask.Message, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

## Parameters

- `message`: The WebSocket message to send to the other endpoint.
- `completionHandler`: A closure that receives an [NSError](../nserror.md) that indicates an error encountered while sending, or nil if no error occurred.

<a id="Discussion"></a>

## Discussion

If an error occurs while sending the message, any outstanding work also fails.

## See Also

### Sending and receiving data

- [URLSessionWebSocketTask.Message](message.md): An enumeration of the types of messages sent and received.
- [receive(completionHandler:)](receive%28completionhandler_%29.md): Reads a WebSocket message once all the frames of the message are available.
- [maximumMessageSize](maximummessagesize.md): The maximum number of bytes to buffer before the receive call fails with an error.
