> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolingaverage](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolingaverage)

# MPSCNNPoolingAverage (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An average pooling filter.

## Declaration

```swift
class MPSCNNPoolingAverage
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter returns the average value of the pixels in the filter region defined by `kernelWidth` `x` `kernelHeight`.

When the value of the [edgeMode](mpscnnkernel/edgemode.md) property is set to [MPSImageEdgeMode.clamp](mpsimageedgemode/clamp.md), the filtering window is shrunk to remain within the source image borders. For pixels close to the image borders, the filtering window will be smaller in order to fit inside the source image and less values will be used to compute the average value. In case the filtering window is entirely outside the source image border, the output value will be `0`.

## Topics

### Initializers

- [init(coder:device:)](mpscnnpoolingaverage/init%28coder_device_%29.md): Initializes an average pooling filter.
- [init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:)](mpscnnpoolingaverage/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes an average pooling filter.

### Instance Properties

- [zeroPadSizeX](mpscnnpoolingaverage/zeropadsizex.md)
- [zeroPadSizeY](mpscnnpoolingaverage/zeropadsizey.md)

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

- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

# MPSCNNPoolingAverage (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An average pooling filter.

## Declaration

```objectivec
@interface MPSCNNPoolingAverage : MPSCNNPooling
```

<a id="overview"></a>

## Overview

For each pixel in an image, the filter returns the average value of the pixels in the filter region defined by `kernelWidth` `x` `kernelHeight`.

When the value of the [edgeMode](mpscnnkernel/edgemode.md) property is set to [MPSImageEdgeModeClamp](mpsimageedgemode/clamp.md), the filtering window is shrunk to remain within the source image borders. For pixels close to the image borders, the filtering window will be smaller in order to fit inside the source image and less values will be used to compute the average value. In case the filtering window is entirely outside the source image border, the output value will be `0`.

## Topics

### Initializers

- [initWithCoder:device:](mpscnnpoolingaverage/init%28coder_device_%29.md): Initializes an average pooling filter.
- [initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:](mpscnnpoolingaverage/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md): Initializes an average pooling filter.

### Instance Properties

- [zeroPadSizeX](mpscnnpoolingaverage/zeropadsizex.md)
- [zeroPadSizeY](mpscnnpoolingaverage/zeropadsizey.md)

## Relationships

### Inherits From

- [MPSCNNPooling](mpscnnpooling.md)

## See Also

### Pooling Layers

- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNPoolingGradient](mpscnnpoolinggradient.md): A gradient pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.
