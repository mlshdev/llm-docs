> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingbilineargradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingbilineargradient)

# MPSCNNUpsamplingBilinearGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient bilinear spatial upsampling filter.

## Declaration

```swift
class MPSCNNUpsamplingBilinearGradient
```

## Topics

### Initializers

- [init(device:integerScaleFactorX:integerScaleFactorY:)](mpscnnupsamplingbilineargradient/init%28device_integerscalefactorx_integerscalefactory_%29.md)

## Relationships

### Inherits From

- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Upsampling Layers

- [MPSCNNUpsampling](mpscnnupsampling.md): A filter that resamples an existing MPS image.
- [MPSCNNUpsamplingBilinear](mpscnnupsamplingbilinear.md): A bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearest](mpscnnupsamplingnearest.md): A nearest spatial upsampling filter.
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md): A gradient filter that upsamples an existing Metal Performance Shaders image.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.

# MPSCNNUpsamplingBilinearGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient bilinear spatial upsampling filter.

## Declaration

```objectivec
@interface MPSCNNUpsamplingBilinearGradient : MPSCNNUpsamplingGradient
```

## Topics

### Instance Methods

- [initWithDevice:integerScaleFactorX:integerScaleFactorY:](mpscnnupsamplingbilineargradient/init%28device_integerscalefactorx_integerscalefactory_%29.md)

## Relationships

### Inherits From

- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md)

## See Also

### Upsampling Layers

- [MPSCNNUpsampling](mpscnnupsampling.md): A filter that resamples an existing MPS image.
- [MPSCNNUpsamplingBilinear](mpscnnupsamplingbilinear.md): A bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearest](mpscnnupsamplingnearest.md): A nearest spatial upsampling filter.
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md): A gradient filter that upsamples an existing Metal Performance Shaders image.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.
