> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlsessionwebsockettask/receivemessagewithcompletionhandler:](https://developer.apple.com/documentation/foundation/nsurlsessionwebsockettask/receivemessagewithcompletionhandler:)

# receiveMessageWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Reads a WebSocket message once all the frames of the message are available.

## Declaration

```objectivec
- (void) receiveMessageWithCompletionHandler:(void (^)(NSURLSessionWebSocketMessage *message, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A closure that receives two parameters: the WebSocket message, and an [NSError](../nserror.md) that indicates an error encountered while receiving the message. The error is `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

If the task reaches the [maximumMessageSize](../urlsessionwebsockettask/maximummessagesize.md) while buffering the frames, this call fails with an error.

## See Also

### Sending and receiving data

- [sendMessage:completionHandler:](sendmessage_completionhandler_.md): Sends a WebSocket message, receiving the result in a completion handler.
- [maximumMessageSize](../urlsessionwebsockettask/maximummessagesize.md): The maximum number of bytes to buffer before the receive call fails with an error.
