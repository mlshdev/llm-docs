> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlsessionwebsocketmessage](https://developer.apple.com/documentation/foundation/nsurlsessionwebsocketmessage)

# NSURLSessionWebSocketMessage

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
@interface NSURLSessionWebSocketMessage : NSObject
```

## Topics

### Instance Properties

- [data](nsurlsessionwebsocketmessage/data.md)
- [string](nsurlsessionwebsocketmessage/string.md)
- [type](nsurlsessionwebsocketmessage/type.md)

### Instance Methods

- [initWithData:](nsurlsessionwebsocketmessage/initwithdata_.md)
- [initWithString:](nsurlsessionwebsocketmessage/initwithstring_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding WebSocket tasks to a session

- [webSocketTaskWithURL:](urlsession/websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTaskWithRequest:](urlsession/websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTaskWithURL:protocols:](urlsession/websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [NSURLSessionWebSocketTask](urlsessionwebsockettask.md): A URL session task that communicates over the WebSockets protocol standard.
- [NSURLSessionWebSocketDelegate](urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
- [NSURLSessionWebSocketMessageType](nsurlsessionwebsocketmessagetype.md): An enumeration of the types of messages sent and received.
