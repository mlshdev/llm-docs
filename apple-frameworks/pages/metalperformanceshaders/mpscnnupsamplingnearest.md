> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingnearest](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingnearest)

# MPSCNNUpsamplingNearest (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A nearest spatial upsampling filter.

## Declaration

```swift
class MPSCNNUpsamplingNearest
```

<a id="overview"></a>

## Overview

This filter can be used to resample an existing [MPSImage](mpsimage.md) using a different sampling frequency for the `x` and `y` dimensions with the purpose of enlarging the size of an image.

The number of output feature channels remains the same as the number of input feature channels.

The `scaleFactor` must be an integer value `>= 1`. The default value is `1`.

## Topics

### Initializers

- [init(device:integerScaleFactorX:integerScaleFactorY:)](mpscnnupsamplingnearest/init%28device_integerscalefactorx_integerscalefactory_%29.md): Initializes a nearest spatial upsampling filter.

## Relationships

### Inherits From

- [MPSCNNUpsampling](mpscnnupsampling.md)

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
- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md): A gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md): A gradient filter that upsamples an existing Metal Performance Shaders image.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.

# MPSCNNUpsamplingNearest (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A nearest spatial upsampling filter.

## Declaration

```objectivec
@interface MPSCNNUpsamplingNearest : MPSCNNUpsampling
```

<a id="overview"></a>

## Overview

This filter can be used to resample an existing [MPSImage](mpsimage.md) using a different sampling frequency for the `x` and `y` dimensions with the purpose of enlarging the size of an image.

The number of output feature channels remains the same as the number of input feature channels.

The `scaleFactor` must be an integer value `>= 1`. The default value is `1`.

## Topics

### Initializers

- [initWithDevice:integerScaleFactorX:integerScaleFactorY:](mpscnnupsamplingnearest/init%28device_integerscalefactorx_integerscalefactory_%29.md): Initializes a nearest spatial upsampling filter.

## Relationships

### Inherits From

- [MPSCNNUpsampling](mpscnnupsampling.md)

## See Also

### Upsampling Layers

- [MPSCNNUpsampling](mpscnnupsampling.md): A filter that resamples an existing MPS image.
- [MPSCNNUpsamplingBilinear](mpscnnupsamplingbilinear.md): A bilinear spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradient](mpscnnupsamplingbilineargradient.md): A gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingGradient](mpscnnupsamplinggradient.md): A gradient filter that upsamples an existing Metal Performance Shaders image.
- [MPSCNNUpsamplingNearestGradient](mpscnnupsamplingnearestgradient.md): A gradient upsampling filter that samples the pixel nearest to the source when upsampling to the destination pixel.
