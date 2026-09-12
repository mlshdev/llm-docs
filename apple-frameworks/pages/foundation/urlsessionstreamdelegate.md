> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamdelegate](https://developer.apple.com/documentation/foundation/urlsessionstreamdelegate)

# URLSessionStreamDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.

## Declaration

```swift
protocol URLSessionStreamDelegate : URLSessionTaskDelegate
```

<a id="overview"></a>

## Overview

In addition to these methods, be sure to implement the methods in the [URLSessionTaskDelegate](urlsessiontaskdelegate.md) and [URLSessionDelegate](urlsessiondelegate.md) protocols to handle events common to all task types and session-level events, respectively.

> **Note**

> A [URLSession](urlsession.md) object need not have a delegate. If no delegate is assigned, a system-provided delegate is used, and you must provide a completion callback to obtain the data.

## Topics

### Handling rerouting

- [urlSession(\_:betterRouteDiscoveredFor:)](urlsessionstreamdelegate/urlsession%28__betterroutediscoveredfor_%29.md): Tells the delegate that a better route to the host has been detected for the stream.

### Completing stream capture

- [urlSession(\_:streamTask:didBecome:outputStream:)](urlsessionstreamdelegate/urlsession%28__streamtask_didbecome_outputstream_%29.md): Tells the delegate that the stream task has been completed as a result of the stream task calling the [captureStreams()](urlsessionstreamtask/capturestreams%28%29.md) method.

### Handling closing events

- [urlSession(\_:readClosedFor:)](urlsessionstreamdelegate/urlsession%28__readclosedfor_%29.md): Tells the delegate that the read side of the underlying socket has been closed.
- [urlSession(\_:writeClosedFor:)](urlsessionstreamdelegate/urlsession%28__writeclosedfor_%29.md): Tells the delegate that the write side of the underlying socket has been closed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [URLSessionDelegate](urlsessiondelegate.md)
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding stream tasks to a session

- [streamTask(withHostName:port:)](urlsession/streamtask%28withhostname_port_%29.md): Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.
- [streamTask(with:)](urlsession/streamtask%28with_%29.md): Deprecated. Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.
- [URLSessionStreamTask](urlsessionstreamtask.md): A URL session task that is stream-based.

# NSURLSessionStreamDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.

## Declaration

```objectivec
@protocol NSURLSessionStreamDelegate <NSURLSessionTaskDelegate>
```

<a id="overview"></a>

## Overview

In addition to these methods, be sure to implement the methods in the [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md) and [NSURLSessionDelegate](urlsessiondelegate.md) protocols to handle events common to all task types and session-level events, respectively.

> **Note**

> A [NSURLSession](urlsession.md) object need not have a delegate. If no delegate is assigned, a system-provided delegate is used, and you must provide a completion callback to obtain the data.

## Topics

### Handling rerouting

- [URLSession:betterRouteDiscoveredForStreamTask:](urlsessionstreamdelegate/urlsession%28__betterroutediscoveredfor_%29.md): Tells the delegate that a better route to the host has been detected for the stream.

### Completing stream capture

- [URLSession:streamTask:didBecomeInputStream:outputStream:](urlsessionstreamdelegate/urlsession%28__streamtask_didbecome_outputstream_%29.md): Tells the delegate that the stream task has been completed as a result of the stream task calling the [captureStreams](urlsessionstreamtask/capturestreams%28%29.md) method.

### Handling closing events

- [URLSession:readClosedForStreamTask:](urlsessionstreamdelegate/urlsession%28__readclosedfor_%29.md): Tells the delegate that the read side of the underlying socket has been closed.
- [URLSession:writeClosedForStreamTask:](urlsessionstreamdelegate/urlsession%28__writeclosedfor_%29.md): Tells the delegate that the write side of the underlying socket has been closed.

## Relationships

### Inherits From

- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Adding stream tasks to a session

- [streamTaskWithHostName:port:](urlsession/streamtask%28withhostname_port_%29.md): Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.
- [streamTaskWithNetService:](urlsession/streamtask%28with_%29.md): Deprecated. Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.
- [NSURLSessionStreamTask](urlsessionstreamtask.md): A URL session task that is stream-based.
