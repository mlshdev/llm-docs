> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inputstream](https://developer.apple.com/documentation/foundation/inputstream)

# InputStream (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A stream that provides read-only stream functionality.

## Declaration

```swift
class InputStream
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

[InputStream](inputstream.md) is “toll-free bridged” with its Core Foundation counterpart, [CFReadStream](../corefoundation/cfreadstream.md). For more information on toll-free bridging, see [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSInputStream` is an abstract superclass of a *class cluster* consisting of concrete subclasses of `NSStream` that provide standard read-only access to stream data. Although `NSInputStream` is probably sufficient for most situations requiring access to stream data, you can create a subclass of `NSInputStream` if you want more specialized behavior (for example, you want to record statistics on the data in a stream).

<a id="Methods-to-Override"></a>

#### Methods to Override

To create a subclass of `NSInputStream` you may have to implement initializers for the type of stream data supported and suitably re-implement existing initializers. You must also provide complete implementations of the following methods:

- [read(\_:maxLength:)](inputstream/read%28__maxlength_%29.md)

From the current read index, take up to the number of bytes specified in the second parameter from the stream and place them in the client-supplied buffer (first parameter). The buffer must be of the size specified by the second parameter. Return the actual number of bytes placed in the buffer; if there is nothing left in the stream, return `0`. Reset the index into the stream for the next read operation.

- [getBuffer(\_:length:)](inputstream/getbuffer%28__length_%29.md)

Return in 0(1) a pointer to the subclass-allocated buffer (first parameter). Return by reference in the second parameter the number of bytes actually put into the buffer. The buffer’s contents are valid only until the next stream operation. Return [false](https://developer.apple.com/documentation/swift/false) if you cannot access data in the buffer; otherwise, return [true](https://developer.apple.com/documentation/swift/true). If this method is not appropriate for your type of stream, you may return [false](https://developer.apple.com/documentation/swift/false).

- [hasBytesAvailable](inputstream/hasbytesavailable.md)

Return [true](https://developer.apple.com/documentation/swift/true) if there is more data to read in the stream, [false](https://developer.apple.com/documentation/swift/false) if there is not. If you want to be semantically compatible with `NSInputStream`, return [true](https://developer.apple.com/documentation/swift/true) if a read must be attempted to determine if bytes are available.

## Topics

### Creating Streams

- [init(data:)](inputstream/init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [init(fileAtPath:)](inputstream/init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.
- [init(url:)](inputstream/init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.

### Using Streams

- [read(\_:maxLength:)](inputstream/read%28__maxlength_%29.md): Reads up to a given number of bytes into a given buffer.
- [getBuffer(\_:length:)](inputstream/getbuffer%28__length_%29.md): Returns by reference a pointer to a read buffer and, by reference, the number of bytes available, and returns a Boolean value that indicates whether the buffer is available.
- [hasBytesAvailable](inputstream/hasbytesavailable.md): A Boolean value that indicates whether the receiver has bytes available to read.

### Initializers

- [init(URL:)](inputstream/init%28url_%29-3lbto.md)

### Default Implementations

- [NSInputStream Implementations](inputstream/nsinputstream-implementations.md)

## Relationships

### Inherits From

- [Stream](stream.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Streams

- [Stream](stream.md): An abstract class representing a stream.
- [OutputStream](outputstream.md): A stream that provides write-only stream functionality.
- [StreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.

# NSInputStream (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A stream that provides read-only stream functionality.

## Declaration

```objectivec
@interface NSInputStream : NSStream
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

[NSInputStream](inputstream.md) is “toll-free bridged” with its Core Foundation counterpart, [CFReadStreamRef](../corefoundation/cfreadstream.md). For more information on toll-free bridging, see [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSInputStream` is an abstract superclass of a *class cluster* consisting of concrete subclasses of `NSStream` that provide standard read-only access to stream data. Although `NSInputStream` is probably sufficient for most situations requiring access to stream data, you can create a subclass of `NSInputStream` if you want more specialized behavior (for example, you want to record statistics on the data in a stream).

<a id="Methods-to-Override"></a>

#### Methods to Override

To create a subclass of `NSInputStream` you may have to implement initializers for the type of stream data supported and suitably re-implement existing initializers. You must also provide complete implementations of the following methods:

- [read:maxLength:](inputstream/read%28__maxlength_%29.md)

From the current read index, take up to the number of bytes specified in the second parameter from the stream and place them in the client-supplied buffer (first parameter). The buffer must be of the size specified by the second parameter. Return the actual number of bytes placed in the buffer; if there is nothing left in the stream, return `0`. Reset the index into the stream for the next read operation.

- [getBuffer:length:](inputstream/getbuffer%28__length_%29.md)

Return in 0(1) a pointer to the subclass-allocated buffer (first parameter). Return by reference in the second parameter the number of bytes actually put into the buffer. The buffer’s contents are valid only until the next stream operation. Return [false](https://developer.apple.com/documentation/swift/false) if you cannot access data in the buffer; otherwise, return [true](https://developer.apple.com/documentation/swift/true). If this method is not appropriate for your type of stream, you may return [false](https://developer.apple.com/documentation/swift/false).

- [hasBytesAvailable](inputstream/hasbytesavailable.md)

Return [true](https://developer.apple.com/documentation/swift/true) if there is more data to read in the stream, [false](https://developer.apple.com/documentation/swift/false) if there is not. If you want to be semantically compatible with `NSInputStream`, return [true](https://developer.apple.com/documentation/swift/true) if a read must be attempted to determine if bytes are available.

## Topics

### Creating Streams

- [inputStreamWithData:](nsinputstream/inputstreamwithdata_.md): Creates and returns an initialized `NSInputStream` object for reading from a given `NSData` object.
- [inputStreamWithFileAtPath:](nsinputstream/inputstreamwithfileatpath_.md): Creates and returns an initialized `NSInputStream` object that reads data from the file at a given path.
- [initWithData:](inputstream/init%28data_%29.md): Initializes and returns an `NSInputStream` object for reading from a given `NSData` object.
- [initWithFileAtPath:](inputstream/init%28fileatpath_%29.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given path.
- [initWithURL:](inputstream/init%28url_%29-1lfmj.md): Initializes and returns an `NSInputStream` object that reads data from the file at a given URL.

### Using Streams

- [read:maxLength:](inputstream/read%28__maxlength_%29.md): Reads up to a given number of bytes into a given buffer.
- [getBuffer:length:](inputstream/getbuffer%28__length_%29.md): Returns by reference a pointer to a read buffer and, by reference, the number of bytes available, and returns a Boolean value that indicates whether the buffer is available.
- [hasBytesAvailable](inputstream/hasbytesavailable.md): A Boolean value that indicates whether the receiver has bytes available to read.

### Type Methods

- [inputStreamWithURL:](nsinputstream/inputstreamwithurl_.md): Creates and returns an initialized `NSInputStream` object that reads data from the file at a given URL.

## Relationships

### Inherits From

- [NSStream](stream.md)

## See Also

### Streams

- [NSStream](stream.md): An abstract class representing a stream.
- [NSOutputStream](outputstream.md): A stream that provides write-only stream functionality.
- [NSStreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.
