> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeroundingmethod](https://developer.apple.com/documentation/coremedia/cmtimeroundingmethod)

# CMTimeRoundingMethod (Swift)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of rounding methods to use when performing time calculations.

## Declaration

```swift
enum CMTimeRoundingMethod
```

## Topics

### Default Rounding Method

- [default](cmtimeroundingmethod/default.md): The default rounding method.

### Rounding Methods

- [CMTimeRoundingMethod.roundHalfAwayFromZero](cmtimeroundingmethod/roundhalfawayfromzero.md): Rounds half away from zero.
- [CMTimeRoundingMethod.roundAwayFromZero](cmtimeroundingmethod/roundawayfromzero.md): Rounds away from zero.
- [CMTimeRoundingMethod.roundTowardZero](cmtimeroundingmethod/roundtowardzero.md): Rounds toward zero.
- [CMTimeRoundingMethod.quickTime](cmtimeroundingmethod/quicktime.md): Rounds using the QuickTime method.
- [CMTimeRoundingMethod.roundTowardPositiveInfinity](cmtimeroundingmethod/roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [CMTimeRoundingMethod.roundTowardNegativeInfinity](cmtimeroundingmethod/roundtowardnegativeinfinity.md): Rounds toward negative infinity.

### Initializers

- [init(rawValue:)](cmtimeroundingmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing the Timescale

- [CMTimeConvertScale(\_:timescale:method:)](cmtimeconvertscale%28__timescale_method_%29.md): Converts the source time to a new timescale using the specified rounding method.

# CMTimeRoundingMethod (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of rounding methods to use when performing time calculations.

## Declaration

```objectivec
enum CMTimeRoundingMethod : uint32_t;
```

## Topics

### Default Rounding Method

- [kCMTimeRoundingMethod_Default](cmtimeroundingmethod/default.md): The default rounding method.

### Rounding Methods

- [kCMTimeRoundingMethod_RoundHalfAwayFromZero](cmtimeroundingmethod/roundhalfawayfromzero.md): Rounds half away from zero.
- [kCMTimeRoundingMethod_RoundAwayFromZero](cmtimeroundingmethod/roundawayfromzero.md): Rounds away from zero.
- [kCMTimeRoundingMethod_RoundTowardZero](cmtimeroundingmethod/roundtowardzero.md): Rounds toward zero.
- [kCMTimeRoundingMethod_QuickTime](cmtimeroundingmethod/quicktime.md): Rounds using the QuickTime method.
- [kCMTimeRoundingMethod_RoundTowardPositiveInfinity](cmtimeroundingmethod/roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [kCMTimeRoundingMethod_RoundTowardNegativeInfinity](cmtimeroundingmethod/roundtowardnegativeinfinity.md): Rounds toward negative infinity.

## See Also

### Changing the Timescale

- [CMTimeConvertScale](cmtimeconvertscale%28__timescale_method_%29.md): Converts the source time to a new timescale using the specified rounding method.
