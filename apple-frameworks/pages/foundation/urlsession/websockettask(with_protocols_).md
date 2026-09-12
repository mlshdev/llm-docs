> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/websockettask(with:protocols:)](https://developer.apple.com/documentation/foundation/urlsession/websockettask(with:protocols:))

# webSocketTask(with:protocols:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a WebSocket task given a URL and an array of protocols.

## Declaration

```swift
func webSocketTask(with url: URL, protocols: [String]) -> URLSessionWebSocketTask
```

## Parameters

- `url`: The WebSocket URL with which to connect.
- `protocols`: An array of protocols to negotiate with the server.

<a id="Discussion"></a>

## Discussion

During the WebSocket handshake, the task uses the provided protocols to negotiate a preferred protocol with the server.

> **Note**

>  The protocol doesn’t affect the WebSocket framing. More details on the protocol are available in [RFC 6455, The WebSocket Protocol](https://tools.ietf.org/html/rfc6455).

## See Also

### Adding WebSocket tasks to a session

- [webSocketTask(with:)](websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTask(with:)](websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [URLSessionWebSocketTask](../urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [URLSessionWebSocketDelegate](../urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.

# webSocketTaskWithURL:protocols: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a WebSocket task given a URL and an array of protocols.

## Declaration

```objectivec
- (NSURLSessionWebSocketTask *) webSocketTaskWithURL:(NSURL *) url protocols:(NSArray<NSString *> *) protocols;
```

## Parameters

- `url`: The WebSocket URL with which to connect.
- `protocols`: An array of protocols to negotiate with the server.

<a id="Discussion"></a>

## Discussion

During the WebSocket handshake, the task uses the provided protocols to negotiate a preferred protocol with the server.

> **Note**

>  The protocol doesn’t affect the WebSocket framing. More details on the protocol are available in [RFC 6455, The WebSocket Protocol](https://tools.ietf.org/html/rfc6455).

## See Also

### Adding WebSocket tasks to a session

- [webSocketTaskWithURL:](websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTaskWithRequest:](websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [NSURLSessionWebSocketTask](../urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [NSURLSessionWebSocketDelegate](../urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
- [NSURLSessionWebSocketMessage](../nsurlsessionwebsocketmessage.md)
- [NSURLSessionWebSocketMessageType](../nsurlsessionwebsocketmessagetype.md): An enumeration of the types of messages sent and received.
