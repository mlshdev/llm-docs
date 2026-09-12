> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/maximummessagesize](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/maximummessagesize)

# maximumMessageSize (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum number of bytes to buffer before the receive call fails with an error.

## Declaration

```swift
var maximumMessageSize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This value includes the sum of all bytes from continuation frames. Receive calls will fail once the task reaches this limit.

## See Also

### Sending and receiving data

- [send(\_:completionHandler:)](send%28__completionhandler_%29.md): Sends a WebSocket message, receiving the result in a completion handler.
- [URLSessionWebSocketTask.Message](message.md): An enumeration of the types of messages sent and received.
- [receive(completionHandler:)](receive%28completionhandler_%29.md): Reads a WebSocket message once all the frames of the message are available.

# maximumMessageSize (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum number of bytes to buffer before the receive call fails with an error.

## Declaration

```objectivec
@property NSInteger maximumMessageSize;
```

<a id="Discussion"></a>

## Discussion

This value includes the sum of all bytes from continuation frames. Receive calls will fail once the task reaches this limit.

## See Also

### Sending and receiving data

- [sendMessage:completionHandler:](../nsurlsessionwebsockettask/sendmessage_completionhandler_.md): Sends a WebSocket message, receiving the result in a completion handler.
- [receiveMessageWithCompletionHandler:](../nsurlsessionwebsockettask/receivemessagewithcompletionhandler_.md): Reads a WebSocket message once all the frames of the message are available.
