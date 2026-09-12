> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprism/verticalamount](https://developer.apple.com/documentation/healthkit/hkvisionprism/verticalamount)

# verticalAmount (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The strength of the vertical correction.

## Declaration

```swift
@NSCopying var verticalAmount: HKQuantity { get }
```

<a id="Discussion"></a>

## Discussion

This parameter holds the vertical component of the prescriptions correction, measured in [prismDiopter()](../hkunit/prismdiopter%28%29.md) units.

## See Also

### Accessing lens specification data

- [eye](eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](../hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](amount.md): The strength of the correction.
- [angle](angle.md): The orientation of the adjustment.
- [horizontalAmount](horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalBase](verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](../hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

# verticalAmount (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The strength of the vertical correction.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKQuantity * verticalAmount;
```

<a id="Discussion"></a>

## Discussion

This parameter holds the vertical component of the prescriptions correction, measured in [prismDiopterUnit](../hkunit/prismdiopter%28%29.md) units.

## See Also

### Accessing lens specification data

- [eye](eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](../hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](amount.md): The strength of the correction.
- [angle](angle.md): The orientation of the adjustment.
- [horizontalAmount](horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalBase](verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](../hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).
