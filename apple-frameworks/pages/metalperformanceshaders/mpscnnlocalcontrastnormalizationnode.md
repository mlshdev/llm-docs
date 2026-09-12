> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnlocalcontrastnormalizationnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnlocalcontrastnormalizationnode)

# MPSCNNLocalContrastNormalizationNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a local-contrast normalization kernel.

## Declaration

```swift
class MPSCNNLocalContrastNormalizationNode
```

## Topics

### Initializers

- [init(source:)](mpscnnlocalcontrastnormalizationnode/init%28source_%29.md)
- [init(source:kernelSize:)](mpscnnlocalcontrastnormalizationnode/init%28source_kernelsize_%29.md)

### Instance Properties

- [kernelHeight](mpscnnlocalcontrastnormalizationnode/kernelheight.md)
- [kernelWidth](mpscnnlocalcontrastnormalizationnode/kernelwidth.md)
- [p0](mpscnnlocalcontrastnormalizationnode/p0.md)
- [pm](mpscnnlocalcontrastnormalizationnode/pm.md)
- [ps](mpscnnlocalcontrastnormalizationnode/ps.md)

## Relationships

### Inherits From

- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md)

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
- [MPSCNNSpatialNormalizationNode](mpscnnspatialnormalizationnode.md): A representation of a spatial normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

# MPSCNNLocalContrastNormalizationNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a local-contrast normalization kernel.

## Declaration

```objectivec
@interface MPSCNNLocalContrastNormalizationNode : MPSCNNNormalizationNode
```

## Topics

### Initializers

- [initWithSource:](mpscnnlocalcontrastnormalizationnode/init%28source_%29.md)
- [initWithSource:kernelSize:](mpscnnlocalcontrastnormalizationnode/init%28source_kernelsize_%29.md)

### Instance Properties

- [kernelHeight](mpscnnlocalcontrastnormalizationnode/kernelheight.md)
- [kernelWidth](mpscnnlocalcontrastnormalizationnode/kernelwidth.md)
- [p0](mpscnnlocalcontrastnormalizationnode/p0.md)
- [pm](mpscnnlocalcontrastnormalizationnode/pm.md)
- [ps](mpscnnlocalcontrastnormalizationnode/ps.md)

### Type Methods

- [nodeWithSource:kernelSize:](mpscnnlocalcontrastnormalizationnode/nodewithsource_kernelsize_.md)

## Relationships

### Inherits From

- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md)

## See Also

### Normalization Layer Nodes

- [MPSCNNCrossChannelNormalizationNode](mpscnncrosschannelnormalizationnode.md): A representation of a normalization kernel across feature channels.
- [MPSCNNSpatialNormalizationNode](mpscnnspatialnormalizationnode.md): A representation of a spatial normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.
