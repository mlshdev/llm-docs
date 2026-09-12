> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlsessionwebsockettask/sendmessage:completionhandler:](https://developer.apple.com/documentation/foundation/nsurlsessionwebsockettask/sendmessage:completionhandler:)

# sendMessage:completionHandler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a WebSocket message, receiving the result in a completion handler.

## Declaration

```objectivec
- (void) sendMessage:(NSURLSessionWebSocketMessage *) message completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `message`: The WebSocket message to send.
- `completionHandler`: A block that receives an [NSError](../nserror.md) that indicates an error encountered while sending, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

If an error occurs while sending the message, any outstanding work also fails.

## See Also

### Sending and receiving data

- [receiveMessageWithCompletionHandler:](receivemessagewithcompletionhandler_.md): Reads a WebSocket message once all the frames of the message are available.
- [maximumMessageSize](../urlsessionwebsockettask/maximummessagesize.md): The maximum number of bytes to buffer before the receive call fails with an error.
