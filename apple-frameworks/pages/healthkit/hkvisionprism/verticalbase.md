> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisionprism/verticalbase](https://developer.apple.com/documentation/healthkit/hkvisionprism/verticalbase)

# verticalBase (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the vertical portion of the correction.

## Declaration

```swift
var verticalBase: HKPrismBase { get }
```

<a id="Discussion"></a>

## Discussion

This value can be either [HKPrismBase.in](../hkprismbase/in.md) or [HKPrismBase.out](../hkprismbase/out.md).

## See Also

### Accessing lens specification data

- [eye](eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](../hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](amount.md): The strength of the correction.
- [angle](angle.md): The orientation of the adjustment.
- [horizontalAmount](horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](verticalamount.md): The strength of the vertical correction.
- [HKPrismBase](../hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

# verticalBase (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the vertical portion of the correction.

## Declaration

```objectivec
@property (nonatomic, readonly) HKPrismBase verticalBase;
```

<a id="Discussion"></a>

## Discussion

This value can be either [HKPrismBaseIn](../hkprismbase/in.md) or [HKPrismBaseOut](../hkprismbase/out.md).

## See Also

### Accessing lens specification data

- [eye](eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](../hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](amount.md): The strength of the correction.
- [angle](angle.md): The orientation of the adjustment.
- [horizontalAmount](horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](verticalamount.md): The strength of the vertical correction.
- [HKPrismBase](../hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).
