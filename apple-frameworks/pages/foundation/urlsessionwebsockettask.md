> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask)

# URLSessionWebSocketTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A URL session task that communicates over the WebSockets protocol standard.

## Declaration

```swift
class URLSessionWebSocketTask
```

<a id="overview"></a>

## Overview

[URLSessionWebSocketTask](urlsessionwebsockettask.md) is a concrete subclass of [URLSessionTask](urlsessiontask.md) that provides a message-oriented transport protocol over TCP and TLS in the form of WebSocket framing. It follows the WebSocket Protocol defined in [RFC 6455](https://tools.ietf.org/html/rfc6455).

You create a [URLSessionWebSocketTask](urlsessionwebsockettask.md) with either a `ws:` or `wss:` URL. When creating the task, you can also provide a list of protocols to advertise during the handshake phase. Once the handshake completes, your app receives notifications through the session’s [delegate](urlsession/delegate.md).

You send data with [send(\_:completionHandler:)](urlsessionwebsockettask/send%28__completionhandler_%29.md) and receive data with [receive(completionHandler:)](urlsessionwebsockettask/receive%28completionhandler_%29.md). The task performs reads and writes asynchronously, and allows you to send and receive messages that contain both binary frames and UTF-8 encoded text frames. The task enqueues any reads or writes you perform prior to the handshake’s completion, and executes them after the handshake completes.

[URLSessionWebSocketTask](urlsessionwebsockettask.md) supports redirection and authentication like other types of tasks do, using the methods in [URLSessionTaskDelegate](urlsessiontaskdelegate.md). The WebSocket task calls the redirection and authentication delegate methods prior to completing the handshake. The WebSocket task also supports cookies, by storing cookies to the session configuration’s [httpCookieStorage](urlsessionconfiguration/httpcookiestorage.md), and attaches cookies to outgoing HTTP handshake requests.

> **Note**

>  watchOS supports [URLSessionWebSocketTask](urlsessionwebsockettask.md) for specific use cases. For more details, see [TN3135: Low-level networking on watchOS](https://developer.apple.com/documentation/technotes/tn3135-low-level-networking-on-watchos).

## Topics

### Sending and receiving data

- [send(\_:completionHandler:)](urlsessionwebsockettask/send%28__completionhandler_%29.md): Sends a WebSocket message, receiving the result in a completion handler.
- [URLSessionWebSocketTask.Message](urlsessionwebsockettask/message.md): An enumeration of the types of messages sent and received.
- [receive(completionHandler:)](urlsessionwebsockettask/receive%28completionhandler_%29.md): Reads a WebSocket message once all the frames of the message are available.
- [maximumMessageSize](urlsessionwebsockettask/maximummessagesize.md): The maximum number of bytes to buffer before the receive call fails with an error.

### Sending ping frames

- [sendPing(pongReceiveHandler:)](urlsessionwebsockettask/sendping%28pongreceivehandler_%29.md): Sends a ping frame from the client side, with a closure to receive the pong from the server endpoint.

### Closing the connection

- [cancel(with:reason:)](urlsessionwebsockettask/cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [closeCode](urlsessionwebsockettask/closecode-swift.property.md): A code that indicates the reason a connection closed.
- [URLSessionWebSocketTask.CloseCode](urlsessionwebsockettask/closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
- [closeReason](urlsessionwebsockettask/closereason.md): A block of data that provides further information about why a connection closed.

### Instance Methods

- [receive()](urlsessionwebsockettask/receive%28%29.md)
- [send(\_:)](urlsessionwebsockettask/send%28__%29.md)

## Relationships

### Inherits From

- [URLSessionTask](urlsessiontask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](progressreporting.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding WebSocket tasks to a session

- [webSocketTask(with:)](urlsession/websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTask(with:)](urlsession/websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTask(with:protocols:)](urlsession/websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [URLSessionWebSocketDelegate](urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.

# NSURLSessionWebSocketTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A URL session task that communicates over the WebSockets protocol standard.

## Declaration

```objectivec
@interface NSURLSessionWebSocketTask : NSURLSessionTask
```

<a id="overview"></a>

## Overview

[NSURLSessionWebSocketTask](urlsessionwebsockettask.md) is a concrete subclass of [NSURLSessionTask](urlsessiontask.md) that provides a message-oriented transport protocol over TCP and TLS in the form of WebSocket framing. It follows the WebSocket Protocol defined in [RFC 6455](https://tools.ietf.org/html/rfc6455).

You create a [NSURLSessionWebSocketTask](urlsessionwebsockettask.md) with either a `ws:` or `wss:` URL. When creating the task, you can also provide a list of protocols to advertise during the handshake phase. Once the handshake completes, your app receives notifications through the session’s [delegate](urlsession/delegate.md).

You send data with [send(\_:completionHandler:)](urlsessionwebsockettask/send%28__completionhandler_%29.md) and receive data with [receive(completionHandler:)](urlsessionwebsockettask/receive%28completionhandler_%29.md). The task performs reads and writes asynchronously, and allows you to send and receive messages that contain both binary frames and UTF-8 encoded text frames. The task enqueues any reads or writes you perform prior to the handshake’s completion, and executes them after the handshake completes.

[NSURLSessionWebSocketTask](urlsessionwebsockettask.md) supports redirection and authentication like other types of tasks do, using the methods in [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md). The WebSocket task calls the redirection and authentication delegate methods prior to completing the handshake. The WebSocket task also supports cookies, by storing cookies to the session configuration’s [HTTPCookieStorage](urlsessionconfiguration/httpcookiestorage.md), and attaches cookies to outgoing HTTP handshake requests.

> **Note**

>  watchOS supports [NSURLSessionWebSocketTask](urlsessionwebsockettask.md) for specific use cases. For more details, see [TN3135: Low-level networking on watchOS](https://developer.apple.com/documentation/technotes/tn3135-low-level-networking-on-watchos).

## Topics

### Sending and receiving data

- [sendMessage:completionHandler:](nsurlsessionwebsockettask/sendmessage_completionhandler_.md): Sends a WebSocket message, receiving the result in a completion handler.
- [receiveMessageWithCompletionHandler:](nsurlsessionwebsockettask/receivemessagewithcompletionhandler_.md): Reads a WebSocket message once all the frames of the message are available.
- [maximumMessageSize](urlsessionwebsockettask/maximummessagesize.md): The maximum number of bytes to buffer before the receive call fails with an error.

### Sending ping frames

- [sendPingWithPongReceiveHandler:](urlsessionwebsockettask/sendping%28pongreceivehandler_%29.md): Sends a ping frame from the client side, with a closure to receive the pong from the server endpoint.

### Closing the connection

- [cancelWithCloseCode:reason:](urlsessionwebsockettask/cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [closeCode](urlsessionwebsockettask/closecode-swift.property.md): A code that indicates the reason a connection closed.
- [NSURLSessionWebSocketCloseCode](urlsessionwebsockettask/closecode-swift.enum.md): A code that indicates why a WebSocket connection closed.
- [closeReason](urlsessionwebsockettask/closereason.md): A block of data that provides further information about why a connection closed.

## Relationships

### Inherits From

- [NSURLSessionTask](urlsessiontask.md)

## See Also

### Adding WebSocket tasks to a session

- [webSocketTaskWithURL:](urlsession/websockettask%28with_%29-87ipz.md): Creates a WebSocket task for the provided URL.
- [webSocketTaskWithRequest:](urlsession/websockettask%28with_%29-mtks.md): Creates a WebSocket task for the provided URL request.
- [webSocketTaskWithURL:protocols:](urlsession/websockettask%28with_protocols_%29.md): Creates a WebSocket task given a URL and an array of protocols.
- [NSURLSessionWebSocketDelegate](urlsessionwebsocketdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
- [NSURLSessionWebSocketMessage](nsurlsessionwebsocketmessage.md)
- [NSURLSessionWebSocketMessageType](nsurlsessionwebsocketmessagetype.md): An enumeration of the types of messages sent and received.
