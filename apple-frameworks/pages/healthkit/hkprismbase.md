> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkprismbase](https://developer.apple.com/documentation/healthkit/hkprismbase)

# HKPrismBase (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

## Declaration

```swift
enum HKPrismBase
```

## Topics

### Prism Base

- [HKPrismBase.none](hkprismbase/none.md): No prism correction.
- [HKPrismBase.up](hkprismbase/up.md): The prism’s base is at the top of the lens.
- [HKPrismBase.down](hkprismbase/down.md): The prism’s base is at the bottom of the lens.
- [HKPrismBase.in](hkprismbase/in.md): The prism base is on the inside edge of the lens.
- [HKPrismBase.out](hkprismbase/out.md): The prism base is on the outside edge of the lens.

### Initializers

- [init(rawValue:)](hkprismbase/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing lens specification data

- [eye](hkvisionprism/eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](hkvisionprism/amount.md): The strength of the correction.
- [angle](hkvisionprism/angle.md): The orientation of the adjustment.
- [horizontalAmount](hkvisionprism/horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](hkvisionprism/horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](hkvisionprism/verticalamount.md): The strength of the vertical correction.
- [verticalBase](hkvisionprism/verticalbase.md): The orientation of the vertical portion of the correction.

# HKPrismBase (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

## Declaration

```objectivec
enum HKPrismBase : NSInteger;
```

## Topics

### Prism Base

- [HKPrismBaseNone](hkprismbase/none.md): No prism correction.
- [HKPrismBaseUp](hkprismbase/up.md): The prism’s base is at the top of the lens.
- [HKPrismBaseDown](hkprismbase/down.md): The prism’s base is at the bottom of the lens.
- [HKPrismBaseIn](hkprismbase/in.md): The prism base is on the inside edge of the lens.
- [HKPrismBaseOut](hkprismbase/out.md): The prism base is on the outside edge of the lens.

## See Also

### Accessing lens specification data

- [eye](hkvisionprism/eye.md): A value indicating which eye the correction applies to.
- [HKVisionEye](hkvisioneye.md): A value that specifies the eye for a vision prescription.
- [amount](hkvisionprism/amount.md): The strength of the correction.
- [angle](hkvisionprism/angle.md): The orientation of the adjustment.
- [horizontalAmount](hkvisionprism/horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](hkvisionprism/horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](hkvisionprism/verticalamount.md): The strength of the vertical correction.
- [verticalBase](hkvisionprism/verticalbase.md): The orientation of the vertical portion of the correction.
