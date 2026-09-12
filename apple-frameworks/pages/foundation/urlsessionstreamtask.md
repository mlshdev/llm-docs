> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionstreamtask](https://developer.apple.com/documentation/foundation/urlsessionstreamtask)

# URLSessionStreamTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that is stream-based.

## Declaration

```swift
class URLSessionStreamTask
```

<a id="overview"></a>

## Overview

[URLSessionStreamTask](urlsessionstreamtask.md) is a concrete subclass of [URLSessionTask](urlsessiontask.md). Many of the methods in the [URLSessionStreamTask](urlsessionstreamtask.md) class are documented in [URLSessionTask](urlsessiontask.md).

The [URLSessionStreamTask](urlsessionstreamtask.md) class provides an interface a TCP/IP connection created via [URLSession](urlsession.md). Tasks may be created from an [URLSession](urlsession.md) using the [streamTask(withHostName:port:)](urlsession/streamtask%28withhostname_port_%29.md) and [streamTask(with:)](urlsession/streamtask%28with_%29.md) methods. They may also be created as a result of an [URLSessionDataTask](urlsessiondatatask.md) being upgraded via the HTTP `Upgrade:` response header and appropriate use of the [httpShouldUsePipelining](urlsessionconfiguration/httpshouldusepipelining.md) option of [URLSessionConfiguration](urlsessionconfiguration.md).

> **Note**

>  See [RFC 2817](https://tools.ietf.org/html/rfc2817) and [RFC 6455](https://tools.ietf.org/html/rfc6455) for information about the `Upgrade:` header.

A [URLSessionStreamTask](urlsessionstreamtask.md) object performs asynchronous reads and writes, which are enqueued and executed serially, calling a handler upon completion being on the session delegate queue. If the task is canceled, all enqueued reads and writes will call their completion handlers with an appropriate error.

When working with APIs that accept [Stream](stream.md) objects, you can create [InputStream](inputstream.md) and [OutputStream](outputstream.md) objects from an [URLSessionStreamTask](urlsessionstreamtask.md) object by calling the [captureStreams()](urlsessionstreamtask/capturestreams%28%29.md) method.

> **Note**

>  watchOS supports [URLSessionStreamTask](urlsessionstreamtask.md) for specific use cases. For more details, see [TN3135: Low-level networking on watchOS](https://developer.apple.com/documentation/technotes/tn3135-low-level-networking-on-watchos).

## Topics

### Reading and writing data

- [readData(ofMinLength:maxLength:timeout:completionHandler:)](urlsessionstreamtask/readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md): Asynchronously reads a number of bytes from the stream, and calls a handler upon completion.
- [write(\_:timeout:completionHandler:)](urlsessionstreamtask/write%28__timeout_completionhandler_%29.md): Asynchronously writes the specified data to the stream, and calls a handler upon completion.

### Capturing streams

- [captureStreams()](urlsessionstreamtask/capturestreams%28%29.md): Completes any already enqueued reads and writes, and then invokes the [urlSession(\_:streamTask:didBecome:outputStream:)](urlsessionstreamdelegate/urlsession%28__streamtask_didbecome_outputstream_%29.md) delegate message.

### Closing read and write sockets

- [closeRead()](urlsessionstreamtask/closeread%28%29.md): Completes any enqueued reads and writes, and then closes the read side of the underlying socket.
- [closeWrite()](urlsessionstreamtask/closewrite%28%29.md): Completes any enqueued reads and writes, and then closes the write side of the underlying socket.

### Starting and stopping secure connections

- [startSecureConnection()](urlsessionstreamtask/startsecureconnection%28%29.md): Completes any enqueued reads and writes, and establishes a secure connection.
- [stopSecureConnection()](urlsessionstreamtask/stopsecureconnection%28%29.md): Deprecated. Completes any enqueued reads and writes, and closes the secure connection.

### Initializers

- [init()](urlsessionstreamtask/init%28%29.md): Deprecated.

### Type Methods

- [new()](urlsessionstreamtask/new%28%29.md): Deprecated.

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

### Adding stream tasks to a session

- [streamTask(withHostName:port:)](urlsession/streamtask%28withhostname_port_%29.md): Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.
- [streamTask(with:)](urlsession/streamtask%28with_%29.md): Deprecated. Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.
- [URLSessionStreamDelegate](urlsessionstreamdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.

# NSURLSessionStreamTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL session task that is stream-based.

## Declaration

```objectivec
@interface NSURLSessionStreamTask : NSURLSessionTask
```

<a id="overview"></a>

## Overview

[NSURLSessionStreamTask](urlsessionstreamtask.md) is a concrete subclass of [NSURLSessionTask](urlsessiontask.md). Many of the methods in the [NSURLSessionStreamTask](urlsessionstreamtask.md) class are documented in [NSURLSessionTask](urlsessiontask.md).

The [NSURLSessionStreamTask](urlsessionstreamtask.md) class provides an interface a TCP/IP connection created via [NSURLSession](urlsession.md). Tasks may be created from an [NSURLSession](urlsession.md) using the [streamTaskWithHostName:port:](urlsession/streamtask%28withhostname_port_%29.md) and [streamTaskWithNetService:](urlsession/streamtask%28with_%29.md) methods. They may also be created as a result of an [NSURLSessionDataTask](urlsessiondatatask.md) being upgraded via the HTTP `Upgrade:` response header and appropriate use of the [HTTPShouldUsePipelining](urlsessionconfiguration/httpshouldusepipelining.md) option of [NSURLSessionConfiguration](urlsessionconfiguration.md).

> **Note**

>  See [RFC 2817](https://tools.ietf.org/html/rfc2817) and [RFC 6455](https://tools.ietf.org/html/rfc6455) for information about the `Upgrade:` header.

A [NSURLSessionStreamTask](urlsessionstreamtask.md) object performs asynchronous reads and writes, which are enqueued and executed serially, calling a handler upon completion being on the session delegate queue. If the task is canceled, all enqueued reads and writes will call their completion handlers with an appropriate error.

When working with APIs that accept [NSStream](stream.md) objects, you can create [NSInputStream](inputstream.md) and [NSOutputStream](outputstream.md) objects from an [NSURLSessionStreamTask](urlsessionstreamtask.md) object by calling the [captureStreams](urlsessionstreamtask/capturestreams%28%29.md) method.

> **Note**

>  watchOS supports [NSURLSessionStreamTask](urlsessionstreamtask.md) for specific use cases. For more details, see [TN3135: Low-level networking on watchOS](https://developer.apple.com/documentation/technotes/tn3135-low-level-networking-on-watchos).

## Topics

### Reading and writing data

- [readDataOfMinLength:maxLength:timeout:completionHandler:](urlsessionstreamtask/readdata%28ofminlength_maxlength_timeout_completionhandler_%29.md): Asynchronously reads a number of bytes from the stream, and calls a handler upon completion.
- [writeData:timeout:completionHandler:](urlsessionstreamtask/write%28__timeout_completionhandler_%29.md): Asynchronously writes the specified data to the stream, and calls a handler upon completion.

### Capturing streams

- [captureStreams](urlsessionstreamtask/capturestreams%28%29.md): Completes any already enqueued reads and writes, and then invokes the [URLSession:streamTask:didBecomeInputStream:outputStream:](urlsessionstreamdelegate/urlsession%28__streamtask_didbecome_outputstream_%29.md) delegate message.

### Closing read and write sockets

- [closeRead](urlsessionstreamtask/closeread%28%29.md): Completes any enqueued reads and writes, and then closes the read side of the underlying socket.
- [closeWrite](urlsessionstreamtask/closewrite%28%29.md): Completes any enqueued reads and writes, and then closes the write side of the underlying socket.

### Starting and stopping secure connections

- [startSecureConnection](urlsessionstreamtask/startsecureconnection%28%29.md): Completes any enqueued reads and writes, and establishes a secure connection.
- [stopSecureConnection](urlsessionstreamtask/stopsecureconnection%28%29.md): Deprecated. Completes any enqueued reads and writes, and closes the secure connection.

### Instance Methods

- [init](urlsessionstreamtask/init%28%29.md): Deprecated.

### Type Methods

- [new](urlsessionstreamtask/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSURLSessionTask](urlsessiontask.md)

## See Also

### Adding stream tasks to a session

- [streamTaskWithHostName:port:](urlsession/streamtask%28withhostname_port_%29.md): Creates a task that establishes a bidirectional TCP/IP connection to a specified hostname and port.
- [streamTaskWithNetService:](urlsession/streamtask%28with_%29.md): Deprecated. Creates a task that establishes a bidirectional TCP/IP connection using a specified network service.
- [NSURLSessionStreamDelegate](urlsessionstreamdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.
