> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnninstancenormalizationdatasource](https://developer.apple.com/documentation/metalperformanceshaders/mpscnninstancenormalizationdatasource)

# MPSCNNInstanceNormalizationDataSource (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.

## Declaration

```swift
protocol MPSCNNInstanceNormalizationDataSource : NSCopying, NSObjectProtocol
```

## Topics

### Initializers

- [init(coder:)](mpscnninstancenormalizationdatasource/init%28coder_%29.md)

### Instance Properties

- [numberOfFeatureChannels](mpscnninstancenormalizationdatasource/numberoffeaturechannels.md)

### Instance Methods

- [beta()](mpscnninstancenormalizationdatasource/beta%28%29.md)
- [copy(with:device:)](mpscnninstancenormalizationdatasource/copy%28with_device_%29.md)
- [encode(with:)](mpscnninstancenormalizationdatasource/encode%28with_%29.md)
- [epsilon()](mpscnninstancenormalizationdatasource/epsilon%28%29.md)
- [gamma()](mpscnninstancenormalizationdatasource/gamma%28%29.md)
- [label()](mpscnninstancenormalizationdatasource/label%28%29.md)
- [load()](mpscnninstancenormalizationdatasource/load%28%29.md)
- [purge()](mpscnninstancenormalizationdatasource/purge%28%29.md)
- [updateGammaAndBeta(with:instanceNormalizationStateBatch:)](mpscnninstancenormalizationdatasource/updategammaandbeta%28with_instancenormalizationstatebatch_%29.md)
- [updateGammaAndBeta(withInstanceNormalizationStateBatch:)](mpscnninstancenormalizationdatasource/updategammaandbeta%28withinstancenormalizationstatebatch_%29.md)

### Type Properties

- [supportsSecureCoding](mpscnninstancenormalizationdatasource/supportssecurecoding.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
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
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

# MPSCNNInstanceNormalizationDataSource (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.

## Declaration

```objectivec
@protocol MPSCNNInstanceNormalizationDataSource <NSObject, NSCopying>
```

## Topics

### Instance Properties

- [numberOfFeatureChannels](mpscnninstancenormalizationdatasource/numberoffeaturechannels.md)

### Instance Methods

- [beta](mpscnninstancenormalizationdatasource/beta%28%29.md)
- [copyWithZone:device:](mpscnninstancenormalizationdatasource/copy%28with_device_%29.md)
- [encodeWithCoder:](mpscnninstancenormalizationdatasource/encode%28with_%29.md)
- [epsilon](mpscnninstancenormalizationdatasource/epsilon%28%29.md)
- [gamma](mpscnninstancenormalizationdatasource/gamma%28%29.md)
- [initWithCoder:](mpscnninstancenormalizationdatasource/init%28coder_%29.md)
- [label](mpscnninstancenormalizationdatasource/label%28%29.md)
- [load](mpscnninstancenormalizationdatasource/load%28%29.md)
- [purge](mpscnninstancenormalizationdatasource/purge%28%29.md)
- [updateGammaAndBetaWithCommandBuffer:instanceNormalizationStateBatch:](mpscnninstancenormalizationdatasource/updategammaandbeta%28with_instancenormalizationstatebatch_%29.md)
- [updateGammaAndBetaWithInstanceNormalizationStateBatch:](mpscnninstancenormalizationdatasource/updategammaandbeta%28withinstancenormalizationstatebatch_%29.md)

### Type Properties

- [supportsSecureCoding](mpscnninstancenormalizationdatasource/supportssecurecoding.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Normalization Layer Nodes

- [MPSCNNCrossChannelNormalizationNode](mpscnncrosschannelnormalizationnode.md): A representation of a normalization kernel across feature channels.
- [MPSCNNLocalContrastNormalizationNode](mpscnnlocalcontrastnormalizationnode.md): A representation of a local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationNode](mpscnnspatialnormalizationnode.md): A representation of a spatial normalization kernel.
- [MPSCNNBatchNormalizationGradientNode](mpscnnbatchnormalizationgradientnode.md): A representation of a gradient batch normalization kernel.
- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md): A representation of a batch normalization kernel.
- [MPSCNNBatchNormalizationDataSource](mpscnnbatchnormalizationdatasource.md): A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.
