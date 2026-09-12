> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnspatialnormalizationnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnspatialnormalizationnode)

# MPSCNNSpatialNormalizationNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a spatial normalization kernel.

## Declaration

```swift
class MPSCNNSpatialNormalizationNode
```

## Topics

### Initializers

- [init(source:)](mpscnnspatialnormalizationnode/init%28source_%29.md)
- [init(source:kernelSize:)](mpscnnspatialnormalizationnode/init%28source_kernelsize_%29.md)

### Instance Properties

- [kernelHeight](mpscnnspatialnormalizationnode/kernelheight.md)
- [kernelWidth](mpscnnspatialnormalizationnode/kernelwidth.md)

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
- [MPSCNNLocalContrastNormalizationNode](mpscnnlocalcontrastnormalizationnode.md): A representation of a local-contrast normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

# MPSCNNSpatialNormalizationNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a spatial normalization kernel.

## Declaration

```objectivec
@interface MPSCNNSpatialNormalizationNode : MPSCNNNormalizationNode
```

## Topics

### Initializers

- [initWithSource:](mpscnnspatialnormalizationnode/init%28source_%29.md)
- [initWithSource:kernelSize:](mpscnnspatialnormalizationnode/init%28source_kernelsize_%29.md)

### Instance Properties

- [kernelHeight](mpscnnspatialnormalizationnode/kernelheight.md)
- [kernelWidth](mpscnnspatialnormalizationnode/kernelwidth.md)

### Type Methods

- [nodeWithSource:kernelSize:](mpscnnspatialnormalizationnode/nodewithsource_kernelsize_.md)

## Relationships

### Inherits From

- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md)

## See Also

### Normalization Layer Nodes

- [MPSCNNCrossChannelNormalizationNode](mpscnncrosschannelnormalizationnode.md): A representation of a normalization kernel across feature channels.
- [MPSCNNLocalContrastNormalizationNode](mpscnnlocalcontrastnormalizationnode.md): A representation of a local-contrast normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.
