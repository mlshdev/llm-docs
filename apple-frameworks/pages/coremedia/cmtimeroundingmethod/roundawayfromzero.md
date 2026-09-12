> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeroundingmethod/roundawayfromzero](https://developer.apple.com/documentation/coremedia/cmtimeroundingmethod/roundawayfromzero)

# CMTimeRoundingMethod.roundAwayFromZero (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds away from zero.

## Declaration

```swift
case roundAwayFromZero
```

<a id="Discussion"></a>

## Discussion

This method rounds away from zero if the absolute value of the fraction is greater than `0`.

## See Also

### Rounding Methods

- [CMTimeRoundingMethod.roundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [CMTimeRoundingMethod.roundTowardZero](roundtowardzero.md): Rounds toward zero.
- [CMTimeRoundingMethod.quickTime](quicktime.md): Rounds using the QuickTime method.
- [CMTimeRoundingMethod.roundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [CMTimeRoundingMethod.roundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.

# kCMTimeRoundingMethod_RoundAwayFromZero (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds away from zero.

## Declaration

```objectivec
kCMTimeRoundingMethod_RoundAwayFromZero
```

<a id="Discussion"></a>

## Discussion

This method rounds away from zero if the absolute value of the fraction is greater than `0`.

## See Also

### Rounding Methods

- [kCMTimeRoundingMethod_RoundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [kCMTimeRoundingMethod_RoundTowardZero](roundtowardzero.md): Rounds toward zero.
- [kCMTimeRoundingMethod_QuickTime](quicktime.md): Rounds using the QuickTime method.
- [kCMTimeRoundingMethod_RoundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [kCMTimeRoundingMethod_RoundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.
