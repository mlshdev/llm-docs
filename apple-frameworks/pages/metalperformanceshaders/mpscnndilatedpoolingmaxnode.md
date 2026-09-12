> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndilatedpoolingmaxnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndilatedpoolingmaxnode)

# MPSCNNDilatedPoolingMaxNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a dilated max pooling filter.

## Declaration

```swift
class MPSCNNDilatedPoolingMaxNode
```

## Topics

### Initializers

- [init(source:filterSize:)](mpscnndilatedpoolingmaxnode/init%28source_filtersize_%29.md)
- [init(source:filterSize:stride:dilationRate:)](mpscnndilatedpoolingmaxnode/init%28source_filtersize_stride_dilationrate_%29.md)
- [init(source:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:)](mpscnndilatedpoolingmaxnode/init%28source_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_%29.md)

### Instance Properties

- [dilationRateX](mpscnndilatedpoolingmaxnode/dilationratex.md)
- [dilationRateY](mpscnndilatedpoolingmaxnode/dilationratey.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

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
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNPoolingNode](mpscnnpoolingnode.md): A representation of a MPS CNN pooling kernel.
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.

# MPSCNNDilatedPoolingMaxNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a dilated max pooling filter.

## Declaration

```objectivec
@interface MPSCNNDilatedPoolingMaxNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:filterSize:](mpscnndilatedpoolingmaxnode/init%28source_filtersize_%29.md)
- [initWithSource:filterSize:stride:dilationRate:](mpscnndilatedpoolingmaxnode/init%28source_filtersize_stride_dilationrate_%29.md)
- [initWithSource:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:dilationRateX:dilationRateY:](mpscnndilatedpoolingmaxnode/init%28source_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_dilationratex_dilationratey_%29.md)

### Instance Properties

- [dilationRateX](mpscnndilatedpoolingmaxnode/dilationratex.md)
- [dilationRateY](mpscnndilatedpoolingmaxnode/dilationratey.md)

### Type Methods

- [nodeWithSource:filterSize:](mpscnndilatedpoolingmaxnode/nodewithsource_filtersize_.md)
- [nodeWithSource:filterSize:stride:dilationRate:](mpscnndilatedpoolingmaxnode/nodewithsource_filtersize_stride_dilationrate_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Pooling Layer Nodes

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md): A representation of an average pooling filter.
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNPoolingNode](mpscnnpoolingnode.md): A representation of a MPS CNN pooling kernel.
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.
