> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnspatialnormalizationgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnspatialnormalizationgradientnode)

# MPSCNNSpatialNormalizationGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient spatial normalization kernel.

## Declaration

```swift
class MPSCNNSpatialNormalizationGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:kernelSize:)](mpscnnspatialnormalizationgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelsize_%29.md)

### Instance Properties

- [alpha](mpscnnspatialnormalizationgradientnode/alpha.md)
- [beta](mpscnnspatialnormalizationgradientnode/beta.md)
- [delta](mpscnnspatialnormalizationgradientnode/delta.md)
- [kernelHeight](mpscnnspatialnormalizationgradientnode/kernelheight.md)
- [kernelWidth](mpscnnspatialnormalizationgradientnode/kernelwidth.md)

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
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

# MPSCNNSpatialNormalizationGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient spatial normalization kernel.

## Declaration

```objectivec
@interface MPSCNNSpatialNormalizationGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [alpha](mpscnnspatialnormalizationgradientnode/alpha.md)
- [beta](mpscnnspatialnormalizationgradientnode/beta.md)
- [delta](mpscnnspatialnormalizationgradientnode/delta.md)
- [kernelHeight](mpscnnspatialnormalizationgradientnode/kernelheight.md)
- [kernelWidth](mpscnnspatialnormalizationgradientnode/kernelwidth.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:kernelSize:](mpscnnspatialnormalizationgradientnode/init%28sourcegradient_sourceimage_gradientstate_kernelsize_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:kernelSize:](mpscnnspatialnormalizationgradientnode/nodewithsourcegradient_sourceimage_gradientstate_kernelsize_.md)

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
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.
