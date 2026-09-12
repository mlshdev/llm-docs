> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkvisioneye](https://developer.apple.com/documentation/healthkit/hkvisioneye)

# HKVisionEye (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A value that specifies the eye for a vision prescription.

## Declaration

```swift
enum HKVisionEye
```

## Topics

### Eyes

- [HKVisionEye.left](hkvisioneye/left.md): The left eye.
- [HKVisionEye.right](hkvisioneye/right.md): The right eye.

### Initializers

- [init(rawValue:)](hkvisioneye/init%28rawvalue_%29.md)

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
- [amount](hkvisionprism/amount.md): The strength of the correction.
- [angle](hkvisionprism/angle.md): The orientation of the adjustment.
- [horizontalAmount](hkvisionprism/horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](hkvisionprism/horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](hkvisionprism/verticalamount.md): The strength of the vertical correction.
- [verticalBase](hkvisionprism/verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).

# HKVisionEye (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A value that specifies the eye for a vision prescription.

## Declaration

```objectivec
enum HKVisionEye : NSInteger;
```

## Topics

### Eyes

- [HKVisionEyeLeft](hkvisioneye/left.md): The left eye.
- [HKVisionEyeRight](hkvisioneye/right.md): The right eye.

## See Also

### Accessing lens specification data

- [eye](hkvisionprism/eye.md): A value indicating which eye the correction applies to.
- [amount](hkvisionprism/amount.md): The strength of the correction.
- [angle](hkvisionprism/angle.md): The orientation of the adjustment.
- [horizontalAmount](hkvisionprism/horizontalamount.md): The strength of the horizontal correction.
- [horizontalBase](hkvisionprism/horizontalbase.md): The orientation of the horizontal portion of the correction.
- [verticalAmount](hkvisionprism/verticalamount.md): The strength of the vertical correction.
- [verticalBase](hkvisionprism/verticalbase.md): The orientation of the vertical portion of the correction.
- [HKPrismBase](hkprismbase.md): The orientation of the prism correction, represented by the location of the prism’s base (the thickest part of the prism).
