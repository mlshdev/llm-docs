> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeroundingmethod/roundtowardpositiveinfinity](https://developer.apple.com/documentation/coremedia/cmtimeroundingmethod/roundtowardpositiveinfinity)

# CMTimeRoundingMethod.roundTowardPositiveInfinity (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds toward positive infinity.

## Declaration

```swift
case roundTowardPositiveInfinity
```

<a id="Discussion"></a>

## Discussion

This method rounds toward [positiveInfinity](../cmtime/positiveinfinity.md) if the fraction isn’t equal to `0`.

## See Also

### Rounding Methods

- [CMTimeRoundingMethod.roundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [CMTimeRoundingMethod.roundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [CMTimeRoundingMethod.roundTowardZero](roundtowardzero.md): Rounds toward zero.
- [CMTimeRoundingMethod.quickTime](quicktime.md): Rounds using the QuickTime method.
- [CMTimeRoundingMethod.roundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.

# kCMTimeRoundingMethod_RoundTowardPositiveInfinity (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds toward positive infinity.

## Declaration

```objectivec
kCMTimeRoundingMethod_RoundTowardPositiveInfinity
```

<a id="Discussion"></a>

## Discussion

This method rounds toward [kCMTimePositiveInfinity](../cmtime/positiveinfinity.md) if the fraction isn’t equal to `0`.

## See Also

### Rounding Methods

- [kCMTimeRoundingMethod_RoundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [kCMTimeRoundingMethod_RoundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [kCMTimeRoundingMethod_RoundTowardZero](roundtowardzero.md): Rounds toward zero.
- [kCMTimeRoundingMethod_QuickTime](quicktime.md): Rounds using the QuickTime method.
- [kCMTimeRoundingMethod_RoundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.
