> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeroundingmethod/quicktime](https://developer.apple.com/documentation/coremedia/cmtimeroundingmethod/quicktime)

# CMTimeRoundingMethod.quickTime (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds using the QuickTime method.

## Declaration

```swift
case quickTime
```

<a id="Discussion"></a>

## Discussion

This method uses [CMTimeRoundingMethod.roundTowardZero](roundtowardzero.md) if converting from larger to smaller scale (more precision to less precision), but uses [CMTimeRoundingMethod.roundAwayFromZero](roundawayfromzero.md) if converting from smaller to larger scale (less precision to more precision).

This method never rounds a negative number down to `0`, but instead returns the smallest magnitude negative time (`-1 / newTimescale`).

## See Also

### Rounding Methods

- [CMTimeRoundingMethod.roundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [CMTimeRoundingMethod.roundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [CMTimeRoundingMethod.roundTowardZero](roundtowardzero.md): Rounds toward zero.
- [CMTimeRoundingMethod.roundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [CMTimeRoundingMethod.roundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.

# kCMTimeRoundingMethod_QuickTime (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Rounds using the QuickTime method.

## Declaration

```objectivec
kCMTimeRoundingMethod_QuickTime
```

<a id="Discussion"></a>

## Discussion

This method uses [kCMTimeRoundingMethod_RoundTowardZero](roundtowardzero.md) if converting from larger to smaller scale (more precision to less precision), but uses [kCMTimeRoundingMethod_RoundAwayFromZero](roundawayfromzero.md) if converting from smaller to larger scale (less precision to more precision).

This method never rounds a negative number down to `0`, but instead returns the smallest magnitude negative time (`-1 / newTimescale`).

## See Also

### Rounding Methods

- [kCMTimeRoundingMethod_RoundHalfAwayFromZero](roundhalfawayfromzero.md): Rounds half away from zero.
- [kCMTimeRoundingMethod_RoundAwayFromZero](roundawayfromzero.md): Rounds away from zero.
- [kCMTimeRoundingMethod_RoundTowardZero](roundtowardzero.md): Rounds toward zero.
- [kCMTimeRoundingMethod_RoundTowardPositiveInfinity](roundtowardpositiveinfinity.md): Rounds toward positive infinity.
- [kCMTimeRoundingMethod_RoundTowardNegativeInfinity](roundtowardnegativeinfinity.md): Rounds toward negative infinity.
