> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsocketdelegate/urlsession(_:websockettask:didopenwithprotocol:)](https://developer.apple.com/documentation/foundation/urlsessionwebsocketdelegate/urlsession(_:websockettask:didopenwithprotocol:))

# urlSession(\_:webSocketTask:didOpenWithProtocol:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the WebSocket task successfully negotiated the handshake with the endpoint, indicating the negotiated protocol.

## Declaration

```swift
optional func urlSession(_ session: URLSession, webSocketTask: URLSessionWebSocketTask, didOpenWithProtocol protocol: String?)
```

## Parameters

- `session`: The session of the WebSocket task that opened.
- `webSocketTask`: The WebSocket task that opened.
- `protocol`: The protocol picked during the handshake phase. This parameter is `nil` if the server did not pick a protocol, or if the client did not advertise protocols when creating the task.

<a id="Discussion"></a>

## Discussion

If the handshake fails, the task doesn’t call this delegate method.

## See Also

### Handling WebSocket lifecycle events

- [urlSession(\_:webSocketTask:didCloseWith:reason:)](urlsession%28__websockettask_didclosewith_reason_%29.md): Tells the delegate that the WebSocket task received a close frame from the server endpoint, optionally including a close code and reason from the server.

# URLSession:webSocketTask:didOpenWithProtocol: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the WebSocket task successfully negotiated the handshake with the endpoint, indicating the negotiated protocol.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session webSocketTask:(NSURLSessionWebSocketTask *) webSocketTask didOpenWithProtocol:(NSString *) protocol;
```

## Parameters

- `session`: The session of the WebSocket task that opened.
- `webSocketTask`: The WebSocket task that opened.
- `protocol`: The protocol picked during the handshake phase. This parameter is `nil` if the server did not pick a protocol, or if the client did not advertise protocols when creating the task.

<a id="Discussion"></a>

## Discussion

If the handshake fails, the task doesn’t call this delegate method.

## See Also

### Handling WebSocket lifecycle events

- [URLSession:webSocketTask:didCloseWithCode:reason:](urlsession%28__websockettask_didclosewith_reason_%29.md): Tells the delegate that the WebSocket task received a close frame from the server endpoint, optionally including a close code and reason from the server.
