> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamdelegate](https://developer.apple.com/documentation/foundation/streamdelegate)

# StreamDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that delegates of a stream instance use to handle events on the stream.

## Declaration

```swift
protocol StreamDelegate : NSObjectProtocol
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

## Topics

### Using Streams

- [stream(\_:handle:)](streamdelegate/stream%28__handle_%29.md): The delegate receives this message when a given event has occurred on a given stream.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Streams

- [Stream](stream.md): An abstract class representing a stream.
- [InputStream](inputstream.md): A stream that provides read-only stream functionality.
- [OutputStream](outputstream.md): A stream that provides write-only stream functionality.

# NSStreamDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that delegates of a stream instance use to handle events on the stream.

## Declaration

```objectivec
@protocol NSStreamDelegate <NSObject>
```

## Mentioned In

- [Uploading streams of data](uploading-streams-of-data.md)

## Topics

### Using Streams

- [stream:handleEvent:](streamdelegate/stream%28__handle_%29.md): The delegate receives this message when a given event has occurred on a given stream.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Streams

- [NSStream](stream.md): An abstract class representing a stream.
- [NSInputStream](inputstream.md): A stream that provides read-only stream functionality.
- [NSOutputStream](outputstream.md): A stream that provides write-only stream functionality.
