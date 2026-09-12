> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolingmax](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolingmax)

# MPSCNNPoolingMax (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A max pooling filter.

## Declaration

```swift
class MPSCNNPoolingMax
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter returns the maximum value of the pixels in the filter region defined by `kernelWidth` x `kernelHeight`.

## Topics

### Initializers

- [init(coder:device:)](mpscnnpoolingmax/init%28coder_device_%29.md): Initializes a max pooling filter.
- [init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:)](mpscnnpoolingmax/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes a max pooling filter.

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
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

# MPSCNNPoolingMax (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A max pooling filter.

## Declaration

```objectivec
@interface MPSCNNPoolingMax : MPSCNNPooling
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter returns the maximum value of the pixels in the filter region defined by `kernelWidth` x `kernelHeight`.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnpoolingmax/init%28coder_device_%29.md): Initializes a max pooling filter.
- [initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:](mpscnnpoolingmax/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes a max pooling filter.

## Relationships

### Inherits From

- [MPSCNNPooling](mpscnnpooling.md)

## See Also

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.
