> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/direction-swift.enum](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/direction-swift.enum)

# CMIOExtensionStream.Direction (Swift)

**Framework:** Core Media I/O  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Constants that define the data-flow direction of the stream.

## Declaration

```swift
enum Direction
```

<a id="overview"></a>

## Overview

A stream can be a source or sink. A source stream produces samples, and a sink stream consumes samples.

## Topics

### Directions

- [CMIOExtensionStream.Direction.source](direction-swift.enum/source.md): A stream that provides sample buffers for capture.
- [CMIOExtensionStream.Direction.sink](direction-swift.enum/sink.md): A stream that consumes sample buffers for playback.

### Initializers

- [init(rawValue:)](direction-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [direction](direction-swift.property.md): The data-flow direction of the stream.
- [clockType](clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStream.ClockType](clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.

# CMIOExtensionStreamDirection (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Constants that define the data-flow direction of the stream.

## Declaration

```objectivec
enum CMIOExtensionStreamDirection : NSInteger;
```

<a id="overview"></a>

## Overview

A stream can be a source or sink. A source stream produces samples, and a sink stream consumes samples.

## Topics

### Directions

- [CMIOExtensionStreamDirectionSource](direction-swift.enum/source.md): A stream that provides sample buffers for capture.
- [CMIOExtensionStreamDirectionSink](direction-swift.enum/sink.md): A stream that consumes sample buffers for playback.

## See Also

### Inspecting a Stream

- [source](source.md): The source object for the stream.
- [direction](direction-swift.property.md): The data-flow direction of the stream.
- [clockType](clocktype-swift.property.md): A clock type for the stream.
- [CMIOExtensionStreamClockType](clocktype-swift.enum.md): Constants that indicate the clock type of a stream.
- [customClockConfiguration](customclockconfiguration.md): An optional custom clock configuration for a stream.
- [CMIOExtensionStreamCustomClockConfiguration](../cmioextensionstreamcustomclockconfiguration.md): An object that describes the parameters to create a custom clock on the host side.
