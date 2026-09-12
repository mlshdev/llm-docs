> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolingl2norm](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolingl2norm)

# MPSCNNPoolingL2Norm (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An L2-norm pooling filter.

## Declaration

```swift
class MPSCNNPoolingL2Norm
```

<a id="overview"></a>

## Overview

For each pixel, returns L2-Norm of pixels in the `kernelWidth * kernelHeight` filter region:

![out\[c,x,y\] = sqrt ( sum\_{dx,dy} in\[c,x+dx,y+dy\] \* in\[c,x+dx,y+dy\] )](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903549@2x.png)

## Topics

### Initializers

- [init(coder:device:)](mpscnnpoolingl2norm/init%28coder_device_%29.md): Initializes an L2-norm pooling filter.
- [init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:)](mpscnnpoolingl2norm/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes an L2-norm pooling filter.

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
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

# MPSCNNPoolingL2Norm (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An L2-norm pooling filter.

## Declaration

```objectivec
@interface MPSCNNPoolingL2Norm : MPSCNNPooling
```

<a id="overview"></a>

## Overview

For each pixel, returns L2-Norm of pixels in the `kernelWidth * kernelHeight` filter region:

![out\[c,x,y\] = sqrt ( sum\_{dx,dy} in\[c,x+dx,y+dy\] \* in\[c,x+dx,y+dy\] )](https://developer.apple.com/images/com.apple.metalperformanceshaders/media-2903549@2x.png)

## Topics

### Initializers

- [initWithCoder:device:](mpscnnpoolingl2norm/init%28coder_device_%29.md): Initializes an L2-norm pooling filter.
- [initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:](mpscnnpoolingl2norm/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes an L2-norm pooling filter.

## Relationships

### Inherits From

- [MPSCNNPooling](mpscnnpooling.md)

## See Also

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.
