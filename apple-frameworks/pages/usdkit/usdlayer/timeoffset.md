> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/timeoffset](https://developer.apple.com/documentation/usdkit/usdlayer/timeoffset)

# USDLayer.TimeOffset

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A time transformation applied when composing layers.

## Declaration

```swift
struct TimeOffset
```

<a id="overview"></a>

## Overview

Consists of an offset (time shift) and a scale factor. Used in references and payloads to remap animation timing from a referenced layer into the referencing layer’s timeline.

## Topics

### Initializers

- [init(offset:scale:)](timeoffset/init%28offset_scale_%29.md): Creates a time offset with the given shift and scale.

### Instance Properties

- [isIdentity](timeoffset/isidentity.md): Whether this offset has no effect (`offset == 0`, `scale == 1`).
- [isValid](timeoffset/isvalid.md): Whether both `offset` and `scale` are finite (not NaN or infinite).
- [offset](timeoffset/offset.md): The time shift applied during composition.
- [scale](timeoffset/scale.md): The scale factor applied during composition.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDValueProtocol](../usdvalueprotocol.md)

## See Also

### Setting the time range

- [startTimeCode](starttimecode.md): The first time code in the layer’s animation range. `nil` if not authored.
- [endTimeCode](endtimecode.md): The last time code in the layer’s animation range. `nil` if not authored.
- [timeCodesPerSecond](timecodespersecond.md): The rate at which time codes advance per second. `nil` if not authored.
- [USDLayer.TimeCode](timecode.md): A time value in USD, typically used for animation keyframe times.
