> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndilatedpoolingmax](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmax)

# MPSCNNDilatedPoolingMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A dilated max pooling filter.

## Declaration

```swift
class MPSCNNDilatedPoolingMax
```

<a id="overview"></a>

## Overview

For each pixel, returns the maximum value of pixels in the `kernelWidth * kernelHeight` filter region by step size `dilationFactorX` `*` `dilationFactorY`.

## Topics

### Initializers

- [init(coder:device:)](mpscnndilatedpoolingmax/init%28coder_device_%29.md): Initializes a dilated max pooling filter.
- [init(device:kernelWidth:kernelHeight:dilationRateX:dilationRateY:strideInPixelsX:strideInPixelsY:)](mpscnndilatedpoolingmax/init%28device_kernelwidth_kernelheight_dilationratex_dilationratey_strideinpixelsx_strideinpixelsy_%29.md): Initializes a dilated max pooling filter.

### Instance Properties

- [dilationRateX](mpscnndilatedpoolingmax/dilationratex.md)
- [dilationRateY](mpscnndilatedpoolingmax/dilationratey.md)

## Relationships

### Inherits From

- [MPSCNNPooling](mpscnnpooling.md)

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

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

# MPSCNNDilatedPoolingMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A dilated max pooling filter.

## Declaration

```objectivec
@interface MPSCNNDilatedPoolingMax : MPSCNNPooling
```

<a id="overview"></a>

## Overview

For each pixel, returns the maximum value of pixels in the `kernelWidth * kernelHeight` filter region by step size `dilationFactorX` `*` `dilationFactorY`.

## Topics

### Initializers

- [initWithCoder:device:](mpscnndilatedpoolingmax/init%28coder_device_%29.md): Initializes a dilated max pooling filter.
- [initWithDevice:kernelWidth:kernelHeight:dilationRateX:dilationRateY:strideInPixelsX:strideInPixelsY:](mpscnndilatedpoolingmax/init%28device_kernelwidth_kernelheight_dilationratex_dilationratey_strideinpixelsx_strideinpixelsy_%29.md): Initializes a dilated max pooling filter.

### Instance Properties

- [dilationRateX](mpscnndilatedpoolingmax/dilationratex.md)
- [dilationRateY](mpscnndilatedpoolingmax/dilationratey.md)

## Relationships

### Inherits From

- [MPSCNNPooling](mpscnnpooling.md)

## See Also

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.
