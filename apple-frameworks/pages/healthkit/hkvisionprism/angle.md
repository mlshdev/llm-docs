> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprism/angle](https://developer.apple.com/documentation/healthkit/hkvisionprism/angle)

# angle (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the adjustment.

## Declaration

```swift
@NSCopying var angle: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

This is the orientation of the [amount](amount.md) correction, measured in [degreeAngle()](../hkunit/degreeangle%28%29.md) units.

## See Also

### Accessing lens specification data

- [eye](eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](../hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](amount.md): The strength of the correction.
- [horizontalAmount](horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](verticalamount.md): The strength of the vertical correction.
- [verticalBase](verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](../hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

# angle (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the adjustment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKQuantity * angle;
```

<a id="Discussion"></a>

## Discussion

This is the orientation of the [amount](amount.md) correction, measured in [degreeAngleUnit](../hkunit/degreeangle%28%29.md) units.

## See Also

### Accessing lens specification data

- [eye](eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](../hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](amount.md): The strength of the correction.
- [horizontalAmount](horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](verticalamount.md): The strength of the vertical correction.
- [verticalBase](verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](../hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).
