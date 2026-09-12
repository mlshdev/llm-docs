> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnpoolingnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnpoolingnode)

# MPSCNNPoolingNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a MPS CNN pooling kernel.

## Declaration

```swift
class MPSCNNPoolingNode
```

## Topics

### Initializers

- [init(source:filterSize:)](mpscnnpoolingnode/init%28source_filtersize_%29.md)
- [init(source:filterSize:stride:)](mpscnnpoolingnode/init%28source_filtersize_stride_%29.md)
- [init(source:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:)](mpscnnpoolingnode/init%28source_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md)

### Instance Properties

- [kernelHeight](mpscnnpoolingnode/kernelheight.md)
- [kernelWidth](mpscnnpoolingnode/kernelwidth.md)
- [strideInPixelsX](mpscnnpoolingnode/strideinpixelsx.md)
- [strideInPixelsY](mpscnnpoolingnode/strideinpixelsy.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md)
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md)
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md)

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
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.

# MPSCNNPoolingNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a MPS CNN pooling kernel.

## Declaration

```objectivec
@interface MPSCNNPoolingNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:filterSize:](mpscnnpoolingnode/init%28source_filtersize_%29.md)
- [initWithSource:filterSize:stride:](mpscnnpoolingnode/init%28source_filtersize_stride_%29.md)
- [initWithSource:kernelWidth:kernelHeight:strideInPixelsX:strideInPixelsY:](mpscnnpoolingnode/init%28source_kernelwidth_kernelheight_strideinpixelsx_strideinpixelsy_%29.md)

### Type Methods

- [nodeWithSource:filterSize:stride:](mpscnnpoolingnode/nodewithsource_filtersize_stride_.md)
- [nodeWithSource:filterSize:](mpscnnpoolingnode/nodewithsource_filtersize_.md)

### Instance Properties

- [kernelHeight](mpscnnpoolingnode/kernelheight.md)
- [kernelWidth](mpscnnpoolingnode/kernelwidth.md)
- [strideInPixelsX](mpscnnpoolingnode/strideinpixelsx.md)
- [strideInPixelsY](mpscnnpoolingnode/strideinpixelsy.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md)
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md)
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md)

## See Also

### Pooling Layer Nodes

- [MPSCNNPoolingAverageNode](mpscnnpoolingaveragenode.md): A representation of an average pooling filter.
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md): A representation of a dilated max pooling filter.
- [MPSCNNPoolingL2NormNode](mpscnnpoolingl2normnode.md): A representation of a L2-norm pooling filter.
- [MPSCNNPoolingMaxNode](mpscnnpoolingmaxnode.md): A representation of a max pooling filter.
- [MPSCNNDilatedPoolingMaxGradientNode](mpscnndilatedpoolingmaxgradientnode.md): A representation of a gradient dilated max pooling filter.
- [MPSCNNPoolingAverageGradientNode](mpscnnpoolingaveragegradientnode.md): A representation of a gradient average pooling filter.
- [MPSCNNPoolingGradientNode](mpscnnpoolinggradientnode.md): A representation of a gradient pooling kernel.
- [MPSCNNPoolingL2NormGradientNode](mpscnnpoolingl2normgradientnode.md): A representation of a gradient L2-norm pooling filter.
- [MPSCNNPoolingMaxGradientNode](mpscnnpoolingmaxgradientnode.md): A representation of a gradient max pooling filter.
