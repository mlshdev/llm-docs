> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/timecode](https://developer.apple.com/documentation/usdkit/usdstage/timecode)

# USDStage.TimeCode

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A unitless point in time, used with time-varying values authored in 3D scenes.

## Declaration

```swift
struct TimeCode
```

## Topics

### Initializers

- [init(\_:)](timecode/init%28__%29-20ucy.md): A numeric time value.
- [init(\_:)](timecode/init%28__%29-336gn.md): A numeric time value.
- [init(preTime:)](timecode/init%28pretime_%29-2p3ii.md): The instant directly before the given time value.
- [init(preTime:)](timecode/init%28pretime_%29-7gpbh.md): The instant directly before the given time value.

### Instance Properties

- [isPreTime](timecode/ispretime.md): A Boolean value that indicates whether this time code represents the limit of a value approaching from the left of a discontinuity.
- [value](timecode/value.md): The numeric value of this time code, or `nil` if it is the default time code.

### Type Properties

- [default](timecode/default.md): The time code used to author and read values that do not vary over time.
- [earliest](timecode/earliest.md): A sentinel time code that resolves to the earliest authored sample of a value.

### Type Methods

- [safeStep(maxValue:maxCompression:)](timecode/safestep%28maxvalue_maxcompression_%29.md): Returns a time delta small enough to represent a jump discontinuity, but large enough to survive scaling and shifting without collapsing to zero.

### Default Implementations

- [CustomStringConvertible Implementations](timecode/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with time codes

- [timeCodeRange](timecoderange.md): The range of time codes over which this stage has authored animation.
- [timeCodesPerSecond](timecodespersecond.md): The number of time codes per second of playback for this stage.
