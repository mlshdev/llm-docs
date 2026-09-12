> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/websockettask(with:)-87ipz](https://developer.apple.com/documentation/foundation/urlsession/websockettask(with:)-87ipz)

# webSocketTask(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a WebSocket task for the provided URL.

## Declaration

```swift
func webSocketTask(with url: URL) -> URLSessionWebSocketTask
```

## Parameters

- `url`: The WebSocket URL with which to connect.

<a id="Discussion"></a>

## Discussion

The provided URL must have a `ws` or `wss` scheme.

## See Also

### Adding WebSocket tasks to a session

- [webSocketTask(with:)](websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTask(with:protocols:)](websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [URLSessionWebSocketTask](../urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [URLSessionWebSocketDelegate](../urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.

# webSocketTaskWithURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a WebSocket task for the provided URL.

## Declaration

```objectivec
- (NSURLSessionWebSocketTask *) webSocketTaskWithURL:(NSURL *) url;
```

## Parameters

- `url`: The WebSocket URL with which to connect.

<a id="Discussion"></a>

## Discussion

The provided URL must have a `ws` or `wss` scheme.

## See Also

### Adding WebSocket tasks to a session

- [webSocketTaskWithRequest:](websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTaskWithURL:protocols:](websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [NSURLSessionWebSocketTask](../urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [NSURLSessionWebSocketDelegate](../urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
- [NSURLSessionWebSocketMessage](../nsurlsessionwebsocketmessage.md)
- [NSURLSessionWebSocketMessageType](../nsurlsessionwebsocketmessagetype.md): An enumeration of the types of messages sent and received.
