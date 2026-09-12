> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndilatedpoolingmaxgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmaxgradientnode)

# MPSCNNDilatedPoolingMaxGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient dilated max pooling filter.

## Declaration

```swift
class MPSCNNDilatedPoolingMaxGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:)](mpscnndilatedpoolingmaxgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_%29.md)

### Instance Properties

- [dilationRateX](mpscnndilatedpoolingmaxgradientnode/dilationratex.md)
- [dilationRateY](mpscnndilatedpoolingmaxgradientnode/dilationratey.md)

## Relationships

### Inherits From

- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md)

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
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.

# MPSCNNDilatedPoolingMaxGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient dilated max pooling filter.

## Declaration

```objectivec
@interface MPSCNNDilatedPoolingMaxGradientNode : MPSCNNPoolingGradientNode
```

## Topics

### Instance Properties

- [dilationRateX](mpscnndilatedpoolingmaxgradientnode/dilationratex.md)
- [dilationRateY](mpscnndilatedpoolingmaxgradientnode/dilationratey.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:](mpscnndilatedpoolingmaxgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:](mpscnndilatedpoolingmaxgradientnode/nodewithsourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_.md)

## Relationships

### Inherits From

- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md)

## See Also

### Pooling Layer Nodes

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md): A representation of an average pooling filter.
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md): A representation of a dilated max pooling filter.
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNPoolingNode](mpscnnpoolingnode.md): A representation of a MPS CNN pooling kernel.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.
