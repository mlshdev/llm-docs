> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlocalcontrastnormalizationgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlocalcontrastnormalizationgradientnode)

# MPSCNNLocalContrastNormalizationGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient local-contrast normalization kernel.

## Declaration

```swift
class MPSCNNLocalContrastNormalizationGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:)](mpscnnlocalcontrastnormalizationgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_%29.md)

### Instance Properties

- [alpha](mpscnnlocalcontrastnormalizationgradientnode/alpha.md)
- [beta](mpscnnlocalcontrastnormalizationgradientnode/beta.md)
- [delta](mpscnnlocalcontrastnormalizationgradientnode/delta.md)
- [kernelHeight](mpscnnlocalcontrastnormalizationgradientnode/kernelheight.md)
- [kernelWidth](mpscnnlocalcontrastnormalizationgradientnode/kernelwidth.md)
- [p0](mpscnnlocalcontrastnormalizationgradientnode/p0.md)
- [pm](mpscnnlocalcontrastnormalizationgradientnode/pm.md)
- [ps](mpscnnlocalcontrastnormalizationgradientnode/ps.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Normalization Layer Nodes

- [MPSCNNCrossChannelNormalizationNode](mpscnncrosschannelnormalizationnode.md): A representation of a normalization kernel across feature channels.
- [MPSCNNLocalContrastNormalizationNode](mpscnnlocalcontrastnormalizationnode.md): A representation of a local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationNode](mpscnnspatialnormalizationnode.md): A representation of a spatial normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

# MPSCNNLocalContrastNormalizationGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient local-contrast normalization kernel.

## Declaration

```objectivec
@interface MPSCNNLocalContrastNormalizationGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [alpha](mpscnnlocalcontrastnormalizationgradientnode/alpha.md)
- [beta](mpscnnlocalcontrastnormalizationgradientnode/beta.md)
- [delta](mpscnnlocalcontrastnormalizationgradientnode/delta.md)
- [kernelHeight](mpscnnlocalcontrastnormalizationgradientnode/kernelheight.md)
- [kernelWidth](mpscnnlocalcontrastnormalizationgradientnode/kernelwidth.md)
- [p0](mpscnnlocalcontrastnormalizationgradientnode/p0.md)
- [pm](mpscnnlocalcontrastnormalizationgradientnode/pm.md)
- [ps](mpscnnlocalcontrastnormalizationgradientnode/ps.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:](mpscnnlocalcontrastnormalizationgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:kernelWidth:kernelHeight:](mpscnnlocalcontrastnormalizationgradientnode/nodewithsourcegradient_sourceimage_gradientstate_kernelwidth_kernelheight_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Normalization Layer Nodes

- [MPSCNNCrossChannelNormalizationNode](mpscnncrosschannelnormalizationnode.md): A representation of a normalization kernel across feature channels.
- [MPSCNNLocalContrastNormalizationNode](mpscnnlocalcontrastnormalizationnode.md): A representation of a local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationNode](mpscnnspatialnormalizationnode.md): A representation of a spatial normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.
