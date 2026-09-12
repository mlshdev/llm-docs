> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsocketdelegate/urlsession(_:websockettask:didclosewith:reason:)](https://developer.apple.com/documentation/foundation/urlsessionwebsocketdelegate/urlsession(_:websockettask:didclosewith:reason:))

# urlSession(\_:webSocketTask:didCloseWith:reason:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the WebSocket task received a close frame from the server endpoint, optionally including a close code and reason from the server.

## Declaration

```swift
optional func urlSession(_ session: URLSession, webSocketTask: URLSessionWebSocketTask, didCloseWith closeCode: URLSessionWebSocketTask.CloseCode, reason: Data?)
```

## Parameters

- `session`: The session of the WebSocket task that closed.
- `webSocketTask`: The WebSocket task that closed.
- `closeCode`: The close code provided by the server. If the close frame didn’t include a close code, this value is `nil`.
- `reason`: The close reason provided by the server. If the close frame didn’t include a reason, this value is `nil`.

## See Also

### Handling WebSocket lifecycle events

- [urlSession(\_:webSocketTask:didOpenWithProtocol:)](urlsession%28__websockettask_didopenwithprotocol_%29.md): Tells the delegate that the WebSocket task successfully negotiated the handshake with the endpoint, indicating the negotiated protocol.

# URLSession:webSocketTask:didCloseWithCode:reason: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the WebSocket task received a close frame from the server endpoint, optionally including a close code and reason from the server.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session webSocketTask:(NSURLSessionWebSocketTask *) webSocketTask didCloseWithCode:(NSURLSessionWebSocketCloseCode) closeCode reason:(NSData *) reason;
```

## Parameters

- `session`: The session of the WebSocket task that closed.
- `webSocketTask`: The WebSocket task that closed.
- `closeCode`: The close code provided by the server. If the close frame didn’t include a close code, this value is `nil`.
- `reason`: The close reason provided by the server. If the close frame didn’t include a reason, this value is `nil`.

## See Also

### Handling WebSocket lifecycle events

- [URLSession:webSocketTask:didOpenWithProtocol:](urlsession%28__websockettask_didopenwithprotocol_%29.md): Tells the delegate that the WebSocket task successfully negotiated the handshake with the endpoint, indicating the negotiated protocol.
