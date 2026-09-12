> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/timecode](https://developer.apple.com/documentation/usdkit/usdlayer/timecode)

# USDLayer.TimeCode

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A time value in USD, typically used for animation keyframe times.

## Declaration

```swift
struct TimeCode
```

<a id="overview"></a>

## Overview

Wraps a `Double` but is treated as a distinct schema-registered value type by USD, allowing attributes to be explicitly typed as time code rather than generic floating-point.

## Topics

### Initializers

- [init(\_:)](timecode/init%28__%29.md): Creates a time code at the given time.

### Instance Properties

- [value](timecode/value.md): The underlying time value as a Double.

### Type Properties

- [default](timecode/default.md): The default time code (0.0).

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDPrim.Attribute.Value](../usdprim/attribute/value.md)
- [USDValueProtocol](../usdvalueprotocol.md)

## See Also

### Setting the time range

- [startTimeCode](starttimecode.md): The first time code in the layer’s animation range. `nil` if not authored.
- [endTimeCode](endtimecode.md): The last time code in the layer’s animation range. `nil` if not authored.
- [timeCodesPerSecond](timecodespersecond.md): The rate at which time codes advance per second. `nil` if not authored.
- [USDLayer.TimeOffset](timeoffset.md): A time transformation applied when composing layers.
