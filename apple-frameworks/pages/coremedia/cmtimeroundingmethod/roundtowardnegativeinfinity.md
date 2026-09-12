> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeroundingmethod/roundtowardnegativeinfinity](https://developer.apple.com/documentation/coremedia/cmtimeroundingmethod/roundtowardnegativeinfinity)

# CMTimeRoundingMethod.roundTowardNegativeInfinity (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds toward negative infinity.

## Declaration

```swift
case roundTowardNegativeInfinity
```

<a id="Discussion"></a>

## Discussion

This method rounds toward [negativeInfinity](../cmtime/negativeinfinity.md) if the fraction isn’t equal to `0`.

## See Also

### Rounding Methods

- [CMTimeRoundingMethod.roundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [CMTimeRoundingMethod.roundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [CMTimeRoundingMethod.roundTowardZero](roundtowardzero.md): Rounds toward zero.
- [CMTimeRoundingMethod.quickTime](quicktime.md): Rounds using the QuickTime method.
- [CMTimeRoundingMethod.roundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.

# kCMTimeRoundingMethod_RoundTowardNegativeInfinity (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds toward negative infinity.

## Declaration

```objectivec
kCMTimeRoundingMethod_RoundTowardNegativeInfinity
```

<a id="Discussion"></a>

## Discussion

This method rounds toward [kCMTimeNegativeInfinity](../cmtime/negativeinfinity.md) if the fraction isn’t equal to `0`.

## See Also

### Rounding Methods

- [kCMTimeRoundingMethod_RoundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [kCMTimeRoundingMethod_RoundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [kCMTimeRoundingMethod_RoundTowardZero](roundtowardzero.md): Rounds toward zero.
- [kCMTimeRoundingMethod_QuickTime](quicktime.md): Rounds using the QuickTime method.
- [kCMTimeRoundingMethod_RoundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
