> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream](https://developer.apple.com/documentation/foundation/stream)

# Stream (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class representing a stream.

## Declaration

```swift
class Stream
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

This class’s interface is common to all Cocoa stream classes, including its concrete subclasses [InputStream](inputstream.md) and [OutputStream](outputstream.md).

[Stream](stream.md) objects provide an easy way to read and write data to and from a variety of media in a device-independent way. You can create stream objects for data located in memory, in a file, or on a network (using sockets), and you can use stream objects without loading all of the data into memory at once.

By default, [Stream](stream.md) instances that aren’t file-based are non-seekable, one-way streams (although custom seekable subclasses are possible). After you provide or consume data, you can’t retrieve the data from the stream.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[Stream](stream.md) is an abstract class, incapable of instantiation and intended for you to subclass it. It publishes a programmatic interface that all subclasses must adopt and provide implementations for. The two Apple-provided concrete subclasses of [Stream](stream.md), [InputStream](inputstream.md) and [OutputStream](outputstream.md), are suitable for most purposes. However, there might be situations when you want a peer subclass to [InputStream](inputstream.md) and [OutputStream](outputstream.md). For example, you might want a class that implements a full-duplex (two-way) stream, or a class whose instances are capable of seeking through a stream.

<a id="Methods-to-Override"></a>

#### Methods to Override

All subclasses must fully implement the following methods:

- [open()](stream/open%28%29.md) and [close()](stream/close%28%29.md)

Implement [open()](stream/open%28%29.md) to open the stream for reading or writing and make the stream available to the client directly or, if the stream object is scheduled on a run loop, to the delegate. Implement [close()](stream/close%28%29.md) to close the stream and remove the stream object from the run loop, if necessary. A closed stream should still be able to accept new properties and report its current properties. Once you close a stream, you can’t reopen it.

- [delegate](stream/delegate.md)

Return and set the delegate. By a default, a stream object must be its own delegate; so a [delegate](stream/delegate.md) message with an argument of `nil` should restore this delegate. Don’t retain the delegate to prevent retain cycles.

To learn about delegates and delegation, read “Delegation” in Cocoa Fundamentals Guide.

- [schedule(in:forMode:)](stream/schedule%28in_formode_%29.md) and [remove(from:forMode:)](stream/remove%28from_formode_%29.md)

Implement [schedule(in:forMode:)](stream/schedule%28in_formode_%29.md) to schedule the stream object on the specified run loop for the specified mode. Implement [remove(from:forMode:)](stream/remove%28from_formode_%29.md) to remove the object from the run loop. See the documentation of the [RunLoop](runloop.md) class for details. Once the stream object for an open stream is scheduled on a run loop, it is the responsibility of the subclass as it processes stream data to send [stream(\_:handle:)](streamdelegate/stream%28__handle_%29.md) messages to its delegate.

- [property(forKey:)](stream/property%28forkey_%29.md) and [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md)

Implement these methods to return and set, respectively, the property value for the specified key. You may add custom properties, but be sure to handle all properties defined by [Stream](stream.md) as well.

- [streamStatus](stream/streamstatus.md) and [streamError](stream/streamerror.md)

Implement [streamStatus](stream/streamstatus.md) to return the current status of the stream as a [Stream.Status](stream/status.md) constant; you may define new [Stream.Status](stream/status.md) constants, but be sure to handle the system defined constants properly. Implement [streamError](stream/streamerror.md) to return an [NSError](nserror.md) object representing the current error. You might decide to return a custom [NSError](nserror.md) object that can provide complete and localized information about the error.

## Topics

### Creating Streams

- [getStreamsTo(\_:port:inputStream:outputStream:)](stream/getstreamsto%28__port_inputstream_outputstream_%29.md): Deprecated. Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

### Configuring Streams

- [property(forKey:)](stream/property%28forkey_%29.md): Returns the receiver’s property for a given key.
- [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md): Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.
- [delegate](stream/delegate.md): Sets the receiver’s delegate.

### Using Streams

- [open()](stream/open%28%29.md): Opens the receiving stream.
- [close()](stream/close%28%29.md): Closes the receiver.

### Managing Run Loops

- [schedule(in:forMode:)](stream/schedule%28in_formode_%29.md): Schedules the receiver on a given run loop in a given mode.
- [remove(from:forMode:)](stream/remove%28from_formode_%29.md): Removes the receiver from a given run loop running in a given mode.

### Getting Stream Information

- [streamStatus](stream/streamstatus.md): Returns the receiver’s status.
- [streamError](stream/streamerror.md): Returns an `NSError` object representing the stream error.

### Constants

- [Stream.Status](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).
- [Stream.Event](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream(\_:handle:)](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [StreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [StreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [StreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [StreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [Stream.PropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [property(forKey:)](stream/property%28forkey_%29.md) and setting properties with [setProperty(\_:forKey:)](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

### Type Methods

- [getBoundStreams(withBufferSize:inputStream:outputStream:)](stream/getboundstreams%28withbuffersize_inputstream_outputstream_%29.md): Creates and returns by reference a bound pair of input and output streams.
- [getStreamsToHost(withName:port:inputStream:outputStream:)](stream/getstreamstohost%28withname_port_inputstream_outputstream_%29.md): Deprecated. Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [InputStream](inputstream.md)
- [OutputStream](outputstream.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Streams

- [InputStream](inputstream.md): A stream that provides read-only stream functionality.
- [OutputStream](outputstream.md): A stream that provides write-only stream functionality.
- [StreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.

# NSStream (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class representing a stream.

## Declaration

```objectivec
@interface NSStream : NSObject
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

This class’s interface is common to all Cocoa stream classes, including its concrete subclasses [NSInputStream](inputstream.md) and [NSOutputStream](outputstream.md).

[NSStream](stream.md) objects provide an easy way to read and write data to and from a variety of media in a device-independent way. You can create stream objects for data located in memory, in a file, or on a network (using sockets), and you can use stream objects without loading all of the data into memory at once.

By default, [NSStream](stream.md) instances that aren’t file-based are non-seekable, one-way streams (although custom seekable subclasses are possible). After you provide or consume data, you can’t retrieve the data from the stream.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[NSStream](stream.md) is an abstract class, incapable of instantiation and intended for you to subclass it. It publishes a programmatic interface that all subclasses must adopt and provide implementations for. The two Apple-provided concrete subclasses of [NSStream](stream.md), [NSInputStream](inputstream.md) and [NSOutputStream](outputstream.md), are suitable for most purposes. However, there might be situations when you want a peer subclass to [NSInputStream](inputstream.md) and [NSOutputStream](outputstream.md). For example, you might want a class that implements a full-duplex (two-way) stream, or a class whose instances are capable of seeking through a stream.

<a id="Methods-to-Override"></a>

#### Methods to Override

All subclasses must fully implement the following methods:

- [open](stream/open%28%29.md) and [close](stream/close%28%29.md)

Implement [open](stream/open%28%29.md) to open the stream for reading or writing and make the stream available to the client directly or, if the stream object is scheduled on a run loop, to the delegate. Implement [close](stream/close%28%29.md) to close the stream and remove the stream object from the run loop, if necessary. A closed stream should still be able to accept new properties and report its current properties. Once you close a stream, you can’t reopen it.

- [delegate](stream/delegate.md)

Return and set the delegate. By a default, a stream object must be its own delegate; so a [delegate](stream/delegate.md) message with an argument of `nil` should restore this delegate. Don’t retain the delegate to prevent retain cycles.

To learn about delegates and delegation, read “Delegation” in Cocoa Fundamentals Guide.

- [scheduleInRunLoop:forMode:](stream/schedule%28in_formode_%29.md) and [removeFromRunLoop:forMode:](stream/remove%28from_formode_%29.md)

Implement [scheduleInRunLoop:forMode:](stream/schedule%28in_formode_%29.md) to schedule the stream object on the specified run loop for the specified mode. Implement [removeFromRunLoop:forMode:](stream/remove%28from_formode_%29.md) to remove the object from the run loop. See the documentation of the [NSRunLoop](runloop.md) class for details. Once the stream object for an open stream is scheduled on a run loop, it is the responsibility of the subclass as it processes stream data to send [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md) messages to its delegate.

- [propertyForKey:](stream/property%28forkey_%29.md) and [setProperty:forKey:](stream/setproperty%28__forkey_%29.md)

Implement these methods to return and set, respectively, the property value for the specified key. You may add custom properties, but be sure to handle all properties defined by [NSStream](stream.md) as well.

- [streamStatus](stream/streamstatus.md) and [streamError](stream/streamerror.md)

Implement [streamStatus](stream/streamstatus.md) to return the current status of the stream as a [NSStreamStatus](stream/status.md) constant; you may define new [NSStreamStatus](stream/status.md) constants, but be sure to handle the system defined constants properly. Implement [streamError](stream/streamerror.md) to return an [NSError](nserror.md) object representing the current error. You might decide to return a custom [NSError](nserror.md) object that can provide complete and localized information about the error.

## Topics

### Creating Streams

- [getStreamsToHost:port:inputStream:outputStream:](stream/getstreamsto%28__port_inputstream_outputstream_%29.md): Deprecated. Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

### Configuring Streams

- [propertyForKey:](stream/property%28forkey_%29.md): Returns the receiver’s property for a given key.
- [setProperty:forKey:](stream/setproperty%28__forkey_%29.md): Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.
- [delegate](stream/delegate.md): Sets the receiver’s delegate.

### Using Streams

- [open](stream/open%28%29.md): Opens the receiving stream.
- [close](stream/close%28%29.md): Closes the receiver.

### Managing Run Loops

- [scheduleInRunLoop:forMode:](stream/schedule%28in_formode_%29.md): Schedules the receiver on a given run loop in a given mode.
- [removeFromRunLoop:forMode:](stream/remove%28from_formode_%29.md): Removes the receiver from a given run loop running in a given mode.

### Getting Stream Information

- [streamStatus](stream/streamstatus.md): Returns the receiver’s status.
- [streamError](stream/streamerror.md): Returns an `NSError` object representing the stream error.

### Constants

- [NSStreamStatus](stream/status.md): The type declared for the constants listed in doc:stream/stream_status_constants.
- [Stream Status Constants](stream_status_constants.md): These constants indicate the current status of a stream. They are returned by [streamStatus](stream/streamstatus.md).
- [NSStreamEvent](stream/event.md): Describes the constants that may be sent to the delegate as a bit field in the second parameter of [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md) to specify the kind of stream event.
- [NSStreamNetworkServiceTypeValue](streamnetworkservicetypevalue.md): `NSStream` defines these string constants for specifying the service type of a stream.
- [NSStreamSOCKSProxyConfiguration](streamsocksproxyconfiguration.md)
- [NSStreamSOCKSProxyVersion](streamsocksproxyversion.md)
- [NSStreamSocketSecurityLevel](streamsocketsecuritylevel.md): `NSStream` defines these string constants for specifying the secure-socket layer (SSL) security level.
- [NSStreamPropertyKey](stream/propertykey.md): `NSStream` defines these string constants as keys for accessing stream properties using [propertyForKey:](stream/property%28forkey_%29.md) and setting properties with [setProperty:forKey:](stream/setproperty%28__forkey_%29.md):
- [NSStreamSocketSSLErrorDomain](nsstreamsocketsslerrordomain.md): The error domain used by `NSError` when reporting SSL errors.
- [NSStreamSOCKSErrorDomain](nsstreamsockserrordomain.md): The error domain used by `NSError` when reporting SOCKS errors.

### Type Methods

- [getBoundStreamsWithBufferSize:inputStream:outputStream:](stream/getboundstreams%28withbuffersize_inputstream_outputstream_%29.md): Creates and returns by reference a bound pair of input and output streams.
- [getStreamsToHostWithName:port:inputStream:outputStream:](stream/getstreamstohost%28withname_port_inputstream_outputstream_%29.md): Deprecated. Creates and returns by reference an `NSInputStream` object and `NSOutputStream` object for a socket connection with a given host on a given port.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSInputStream](inputstream.md)
- [NSOutputStream](outputstream.md)

## See Also

### Streams

- [NSInputStream](inputstream.md): A stream that provides read-only stream functionality.
- [NSOutputStream](outputstream.md): A stream that provides write-only stream functionality.
- [NSStreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.
