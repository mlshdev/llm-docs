> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolinggradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolinggradient)

# MPSCNNPoolingGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient pooling kernel.

## Declaration

```swift
class MPSCNNPoolingGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnpoolinggradient/init%28coder_device_%29.md)
- [init(device:kernelWidth:kernelHeight:)](mpscnnpoolinggradient/init%28device_kernelwidth_kernelheight_%29.md)
- [init(device:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:)](mpscnnpoolinggradient/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md)

### Instance Properties

- [sourceSize](mpscnnpoolinggradient/sourcesize.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md)
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md)
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md)
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md)

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
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.

# MPSCNNPoolingGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient pooling kernel.

## Declaration

```objectivec
@interface MPSCNNPoolingGradient : MPSCNNGradientKernel
```

## Topics

### Instance Properties

- [sourceSize](mpscnnpoolinggradient/sourcesize.md)

### Instance Methods

- [initWithCoder:device:](mpscnnpoolinggradient/init%28coder_device_%29.md)
- [initWithDevice:kernelWidth:kernelHeight:](mpscnnpoolinggradient/init%28device_kernelwidth_kernelheight_%29.md)
- [initWithDevice:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:](mpscnnpoolinggradient/init%28device_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md)
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md)
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md)
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md)

## See Also

### Pooling Layers

- [MPSCNNPoolingAverage](mpscnnpoolingaverage.md): An average pooling filter.
- [MPSCNNPoolingAverageGradient](mpscnnpoolingaveragegradient.md): A gradient average pooling filter.
- [MPSCNNPoolingL2Norm](mpscnnpoolingl2norm.md): An L2-norm pooling filter.
- [MPSCNNPoolingMax](mpscnnpoolingmax.md): A max pooling filter.
- [MPSCNNDilatedPoolingMax](mpscnndilatedpoolingmax.md): A dilated max pooling filter.
- [MPSCNNPooling](mpscnnpooling.md): A pooling kernel.
- [MPSCNNDilatedPoolingMaxGradient](mpscnndilatedpoolingmaxgradient.md): A gradient dilated max pooling filter.
- [MPSCNNPoolingL2NormGradient](mpscnnpoolingl2normgradient.md): A gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradient](mpscnnpoolingmaxgradient.md): A gradient max pooling filter.
