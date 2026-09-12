> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolinggradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolinggradientnode)

# MPSCNNPoolingGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient pooling kernel.

## Declaration

```swift
class MPSCNNPoolingGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:paddingPolicy:)](mpscnnpoolinggradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_paddingpolicy_%29.md)

### Instance Properties

- [kernelHeight](mpscnnpoolinggradientnode/kernelheight.md)
- [kernelWidth](mpscnnpoolinggradientnode/kernelwidth.md)
- [strideInPixelsX](mpscnnpoolinggradientnode/strideinpixelsx.md)
- [strideInPixelsY](mpscnnpoolinggradientnode/strideinpixelsy.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Inherited By

- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md)
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md)
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md)
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Pooling Layer Nodes

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md): A representation of an average pooling filter.
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md): A representation of a dilated max pooling filter.
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNPoolingNode](mpscnnpoolingnode.md): A representation of a MPS CNN pooling kernel.
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.

# MPSCNNPoolingGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient pooling kernel.

## Declaration

```objectivec
@interface MPSCNNPoolingGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [kernelHeight](mpscnnpoolinggradientnode/kernelheight.md)
- [kernelWidth](mpscnnpoolinggradientnode/kernelwidth.md)
- [strideInPixelsX](mpscnnpoolinggradientnode/strideinpixelsx.md)
- [strideInPixelsY](mpscnnpoolinggradientnode/strideinpixelsy.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:paddingPolicy:](mpscnnpoolinggradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_paddingpolicy_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:paddingPolicy:](mpscnnpoolinggradientnode/nodewithsourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_paddingpolicy_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Inherited By

- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md)
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md)
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md)
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md)

## See Also

### Pooling Layer Nodes

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md): A representation of an average pooling filter.
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md): A representation of a dilated max pooling filter.
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNPoolingNode](mpscnnpoolingnode.md): A representation of a MPS CNN pooling kernel.
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.
