> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplinggradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplinggradient)

# MPSCNNUpsamplingGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient filter that upsamples an existing Metal Performance Shaders image.

## Declaration

```swift
class MPSCNNUpsamplingGradient
```

## Topics

### Instance Properties

- [scaleFactorX](mpscnnupsamplinggradient/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplinggradient/scalefactory.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md)
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md)

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
- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md): A gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.

# MPSCNNUpsamplingGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient filter that upsamples an existing Metal Performance Shaders image.

## Declaration

```objectivec
@interface MPSCNNUpsamplingGradient : MPSCNNGradientKernel
```

## Topics

### Instance Properties

- [scaleFactorX](mpscnnupsamplinggradient/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplinggradient/scalefactory.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md)
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md)

## See Also

### Upsampling Layers

- [MPSCNNUpsampling](mpscnnupsampling.md): A filter that resamples an existing MPS image.
- [MPSCNNUpsamplingBilinear](mpscnnupsamplingbilinear.md): A bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearest](mpscnnupsamplingnearest.md): A nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md): A gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.
