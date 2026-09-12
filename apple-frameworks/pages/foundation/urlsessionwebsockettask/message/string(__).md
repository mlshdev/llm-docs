> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/message/string(_:)](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/message/string(_:))

# URLSessionWebSocketTask.Message.string(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A WebSocket message that contains a string.

## Declaration

```swift
case string(String)
```

<a id="Discussion"></a>

## Discussion

The [URLSessionWebSocketTask](../../urlsessionwebsockettask.md) uses UTF-8 encoding to send the message’s string.

## See Also

### Message types

- [URLSessionWebSocketTask.Message.data(\_:)](data%28__%29.md): A WebSocket message that contains a block of data.
