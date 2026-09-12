> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeroundingmethod/roundhalfawayfromzero](https://developer.apple.com/documentation/coremedia/cmtimeroundingmethod/roundhalfawayfromzero)

# CMTimeRoundingMethod.roundHalfAwayFromZero (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds half away from zero.

## Declaration

```swift
case roundHalfAwayFromZero
```

<a id="Discussion"></a>

## Discussion

This method rounds toward zero if the absolute value is less than `0.5`, and away from `0` if it’s greater than or equal to `0.5`.

This is the default rounding method.

## See Also

### Rounding Methods

- [CMTimeRoundingMethod.roundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [CMTimeRoundingMethod.roundTowardZero](roundtowardzero.md): Rounds toward zero.
- [CMTimeRoundingMethod.quickTime](quicktime.md): Rounds using the QuickTime method.
- [CMTimeRoundingMethod.roundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [CMTimeRoundingMethod.roundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.

# kCMTimeRoundingMethod_RoundHalfAwayFromZero (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds half away from zero.

## Declaration

```objectivec
kCMTimeRoundingMethod_RoundHalfAwayFromZero
```

<a id="Discussion"></a>

## Discussion

This method rounds toward zero if the absolute value is less than `0.5`, and away from `0` if it’s greater than or equal to `0.5`.

This is the default rounding method.

## See Also

### Rounding Methods

- [kCMTimeRoundingMethod_RoundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [kCMTimeRoundingMethod_RoundTowardZero](roundtowardzero.md): Rounds toward zero.
- [kCMTimeRoundingMethod_QuickTime](quicktime.md): Rounds using the QuickTime method.
- [kCMTimeRoundingMethod_RoundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [kCMTimeRoundingMethod_RoundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.
