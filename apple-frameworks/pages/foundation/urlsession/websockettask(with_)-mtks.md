> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/websockettask(with:)-mtks](https://developer.apple.com/documentation/foundation/urlsession/websockettask(with:)-mtks)

# webSocketTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a WebSocket task for the provided URL request.

## Declaration

```swift
func webSocketTask(with request: URLRequest) -> URLSessionWebSocketTask
```

## Parameters

- `request`: A URL request that indicates a WebSockets endpoint with which to connect.

<a id="Discussion"></a>

## Discussion

You can modify the request’s properties prior to calling [resume()](../urlsessiontask/resume%28%29.md) on the task. The task uses these properties during the HTTP handshake phase.

To add custom protocols, add a header with the key `Sec-WebSocket-Protocol`, and a comma-separated list of protocols you want to negotiate with the server. The custom HTTP headers provided by the client remain unchanged for the handshake with the server.

## See Also

### Adding WebSocket tasks to a session

- [webSocketTask(with:)](websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTask(with:protocols:)](websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [URLSessionWebSocketTask](../urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [URLSessionWebSocketDelegate](../urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.

# webSocketTaskWithRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a WebSocket task for the provided URL request.

## Declaration

```objectivec
- (NSURLSessionWebSocketTask *) webSocketTaskWithRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: A URL request that indicates a WebSockets endpoint with which to connect.

<a id="Discussion"></a>

## Discussion

You can modify the request’s properties prior to calling [resume](../urlsessiontask/resume%28%29.md) on the task. The task uses these properties during the HTTP handshake phase.

To add custom protocols, add a header with the key `Sec-WebSocket-Protocol`, and a comma-separated list of protocols you want to negotiate with the server. The custom HTTP headers provided by the client remain unchanged for the handshake with the server.

## See Also

### Adding WebSocket tasks to a session

- [webSocketTaskWithURL:](websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTaskWithURL:protocols:](websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [NSURLSessionWebSocketTask](../urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [NSURLSessionWebSocketDelegate](../urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
- [NSURLSessionWebSocketMessage](../nsurlsessionwebsocketmessage.md)
- [NSURLSessionWebSocketMessageType](../nsurlsessionwebsocketmessagetype.md): An enumeration of the types of messages sent and received.
