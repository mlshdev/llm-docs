> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream](https://developer.apple.com/documentation/foundation/outputstream)

# OutputStream (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A stream that provides write-only stream functionality.

## Declaration

```swift
class OutputStream
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

[OutputStream](outputstream.md) is “toll-free bridged” with its Core Foundation counterpart, [CFWriteStream](../corefoundation/cfwritestream.md). For more information on toll-free bridging, see [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSOutputStream` is a concrete subclass of `NSStream` that lets you write data to a stream. Although `NSOutputStream` is probably sufficient for most situations requiring this capability, you can create a subclass of `NSOutputStream` if you want more specialized behavior (for example, you want to record statistics on the data in a stream).

<a id="Methods-to-Override"></a>

#### Methods to Override

To create a subclass of `NSOutputStream` you may have to implement initializers for the type of stream data supported and suitably reimplement existing initializers. You must also provide complete implementations of the following methods:

- [write(\_:maxLength:)](outputstream/write%28__maxlength_%29.md)

From the current write pointer, take up to the number of bytes specified in the `maxLength:` parameter from the client-supplied buffer (first parameter) and put them onto the stream. The buffer must be of the size specified by the second parameter. To prepare for the next operation, offset the write pointer by the number of bytes written. Return a signed integer based on the outcome of the current operation:

- If the write operation is successful, return the actual number of bytes put onto the stream.
- If the stream is of a fixed length and has reached its capacity, return `0`.
- If there was an error writing to the stream, return `-1`.
- [hasSpaceAvailable](outputstream/hasspaceavailable.md)

Return [true](https://developer.apple.com/documentation/swift/true) if the stream can currently accept more data, [false](https://developer.apple.com/documentation/swift/false) if it cannot. If you want to be semantically compatible with `NSOutputStream`, return [true](https://developer.apple.com/documentation/swift/true) if a write must be attempted to determine if space is available.

## Topics

### Creating Streams

- [toMemory()](outputstream/tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [init(toMemory:)](outputstream/init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [init(toBuffer:capacity:)](outputstream/init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [init(toFileAtPath:append:)](outputstream/init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [init(url:append:)](outputstream/init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.

### Using Streams

- [hasSpaceAvailable](outputstream/hasspaceavailable.md): A boolean value that indicates whether the receiver can be written to.
- [write(\_:maxLength:)](outputstream/write%28__maxlength_%29.md): Writes the contents of a provided data buffer to the receiver.

### Initializers

- [init(URL:append:)](outputstream/init%28url_append_%29-4dpt1.md)

### Default Implementations

- [NSOutputStream Implementations](outputstream/nsoutputstream-implementations.md)

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
- [InputStream](inputstream.md): A stream that provides read-only stream functionality.
- [StreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.

# NSOutputStream (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A stream that provides write-only stream functionality.

## Declaration

```objectivec
@interface NSOutputStream : NSStream
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

[NSOutputStream](outputstream.md) is “toll-free bridged” with its Core Foundation counterpart, [CFWriteStreamRef](../corefoundation/cfwritestream.md). For more information on toll-free bridging, see [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSOutputStream` is a concrete subclass of `NSStream` that lets you write data to a stream. Although `NSOutputStream` is probably sufficient for most situations requiring this capability, you can create a subclass of `NSOutputStream` if you want more specialized behavior (for example, you want to record statistics on the data in a stream).

<a id="Methods-to-Override"></a>

#### Methods to Override

To create a subclass of `NSOutputStream` you may have to implement initializers for the type of stream data supported and suitably reimplement existing initializers. You must also provide complete implementations of the following methods:

- [write:maxLength:](outputstream/write%28__maxlength_%29.md)

From the current write pointer, take up to the number of bytes specified in the `maxLength:` parameter from the client-supplied buffer (first parameter) and put them onto the stream. The buffer must be of the size specified by the second parameter. To prepare for the next operation, offset the write pointer by the number of bytes written. Return a signed integer based on the outcome of the current operation:

- If the write operation is successful, return the actual number of bytes put onto the stream.
- If the stream is of a fixed length and has reached its capacity, return `0`.
- If there was an error writing to the stream, return `-1`.
- [hasSpaceAvailable](outputstream/hasspaceavailable.md)

Return [true](https://developer.apple.com/documentation/swift/true) if the stream can currently accept more data, [false](https://developer.apple.com/documentation/swift/false) if it cannot. If you want to be semantically compatible with `NSOutputStream`, return [true](https://developer.apple.com/documentation/swift/true) if a write must be attempted to determine if space is available.

## Topics

### Creating Streams

- [outputStreamToMemory](outputstream/tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToBuffer:capacity:](nsoutputstream/outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.
- [outputStreamToFileAtPath:append:](nsoutputstream/outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.
- [initToMemory](outputstream/init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [initToBuffer:capacity:](outputstream/init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [initToFileAtPath:append:](outputstream/init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [initWithURL:append:](outputstream/init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.

### Using Streams

- [hasSpaceAvailable](outputstream/hasspaceavailable.md): A boolean value that indicates whether the receiver can be written to.
- [write:maxLength:](outputstream/write%28__maxlength_%29.md): Writes the contents of a provided data buffer to the receiver.

### Type Methods

- [outputStreamWithURL:append:](nsoutputstream/outputstreamwithurl_append_.md): Creates and returns an initialized output stream for writing to a specified URL.

## Relationships

### Inherits From

- [NSStream](stream.md)

## See Also

### Streams

- [NSStream](stream.md): An abstract class representing a stream.
- [NSInputStream](inputstream.md): A stream that provides read-only stream functionality.
- [NSStreamDelegate](streamdelegate.md): An interface that delegates of a stream instance use to handle events on the stream.
