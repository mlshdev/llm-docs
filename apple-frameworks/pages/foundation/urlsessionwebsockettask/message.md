> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/message](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/message)

# URLSessionWebSocketTask.Message

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of the types of messages sent and received.

## Declaration

```swift
enum Message
```

## Topics

### Message types

- [URLSessionWebSocketTask.Message.data(\_:)](message/data%28__%29.md): A WebSocket message that contains a block of data.
- [URLSessionWebSocketTask.Message.string(\_:)](message/string%28__%29.md): A WebSocket message that contains a string.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending and receiving data

- [send(\_:completionHandler:)](send%28__completionhandler_%29.md): Sends a WebSocket message, receiving the result in a completion handler.
- [receive(completionHandler:)](receive%28completionhandler_%29.md): Reads a WebSocket message once all the frames of the message are available.
- [maximumMessageSize](maximummessagesize.md): The maximum number of bytes to buffer before the receive call fails with an error.
