> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsocketdelegate](https://developer.apple.com/documentation/foundation/urlsessionwebsocketdelegate)

# URLSessionWebSocketDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.

## Declaration

```swift
protocol URLSessionWebSocketDelegate : URLSessionTaskDelegate
```

## Topics

### Handling WebSocket lifecycle events

- [urlSession(\_:webSocketTask:didOpenWithProtocol:)](urlsessionwebsocketdelegate/urlsession%28__websockettask_didopenwithprotocol_%29.md): Tells the delegate that the WebSocket task successfully negotiated the handshake with the endpoint, indicating the negotiated protocol.
- [urlSession(\_:webSocketTask:didCloseWith:reason:)](urlsessionwebsocketdelegate/urlsession%28__websockettask_didclosewith_reason_%29.md): Tells the delegate that the WebSocket task received a close frame from the server endpoint, optionally including a close code and reason from the server.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [URLSessionDelegate](urlsessiondelegate.md)
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding WebSocket tasks to a session

- [webSocketTask(with:)](urlsession/websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTask(with:)](urlsession/websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTask(with:protocols:)](urlsession/websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [URLSessionWebSocketTask](urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.

# NSURLSessionWebSocketDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.

## Declaration

```objectivec
@protocol NSURLSessionWebSocketDelegate <NSURLSessionTaskDelegate>
```

## Topics

### Handling WebSocket lifecycle events

- [URLSession:webSocketTask:didOpenWithProtocol:](urlsessionwebsocketdelegate/urlsession%28__websockettask_didopenwithprotocol_%29.md): Tells the delegate that the WebSocket task successfully negotiated the handshake with the endpoint, indicating the negotiated protocol.
- [URLSession:webSocketTask:didCloseWithCode:reason:](urlsessionwebsocketdelegate/urlsession%28__websockettask_didclosewith_reason_%29.md): Tells the delegate that the WebSocket task received a close frame from the server endpoint, optionally including a close code and reason from the server.

## Relationships

### Inherits From

- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding WebSocket tasks to a session

- [webSocketTaskWithURL:](urlsession/websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTaskWithRequest:](urlsession/websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTaskWithURL:protocols:](urlsession/websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [NSURLSessionWebSocketTask](urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [NSURLSessionWebSocketMessage](nsurlsessionwebsocketmessage.md)
- [NSURLSessionWebSocketMessageType](nsurlsessionwebsocketmessagetype.md): An enumeration of the types of messages sent and received.
