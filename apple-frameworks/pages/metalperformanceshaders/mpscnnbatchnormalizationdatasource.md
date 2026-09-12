> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalizationdatasource](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalizationdatasource)

# MPSCNNBatchNormalizationDataSource (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.

## Declaration

```swift
protocol MPSCNNBatchNormalizationDataSource : NSCopying, NSObjectProtocol
```

## Topics

### Initializers

- [init(coder:)](mpscnnbatchnormalizationdatasource/init%28coder_%29.md)

### Instance Methods

- [beta()](mpscnnbatchnormalizationdatasource/beta%28%29.md)
- [copy(with:device:)](mpscnnbatchnormalizationdatasource/copy%28with_device_%29.md)
- [encode(with:)](mpscnnbatchnormalizationdatasource/encode%28with_%29.md)
- [epsilon()](mpscnnbatchnormalizationdatasource/epsilon%28%29.md)
- [gamma()](mpscnnbatchnormalizationdatasource/gamma%28%29.md)
- [label()](mpscnnbatchnormalizationdatasource/label%28%29.md)
- [load()](mpscnnbatchnormalizationdatasource/load%28%29.md)
- [mean()](mpscnnbatchnormalizationdatasource/mean%28%29.md)
- [numberOfFeatureChannels()](mpscnnbatchnormalizationdatasource/numberoffeaturechannels%28%29.md)
- [purge()](mpscnnbatchnormalizationdatasource/purge%28%29.md)
- [updateGammaAndBeta(with:)](mpscnnbatchnormalizationdatasource/updategammaandbeta%28with_%29.md)
- [updateGammaAndBeta(with:batchNormalizationState:)](mpscnnbatchnormalizationdatasource/updategammaandbeta%28with_batchnormalizationstate_%29.md)
- [updateMeanAndVariance(with:)](mpscnnbatchnormalizationdatasource/updatemeanandvariance%28with_%29.md)
- [updateMeanAndVariance(with:batchNormalizationState:)](mpscnnbatchnormalizationdatasource/updatemeanandvariance%28with_batchnormalizationstate_%29.md)
- [variance()](mpscnnbatchnormalizationdatasource/variance%28%29.md)

### Type Properties

- [supportsSecureCoding](mpscnnbatchnormalizationdatasource/supportssecurecoding.md)

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
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.

# MPSCNNBatchNormalizationDataSource (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A protocol that defines methods that a batch normalization state uses to initialize scale factors, bias terms, and batch statistics.

## Declaration

```objectivec
@protocol MPSCNNBatchNormalizationDataSource <NSObject, NSCopying>
```

## Topics

### Instance Methods

- [beta](mpscnnbatchnormalizationdatasource/beta%28%29.md)
- [copyWithZone:device:](mpscnnbatchnormalizationdatasource/copy%28with_device_%29.md)
- [encodeWithCoder:](mpscnnbatchnormalizationdatasource/encode%28with_%29.md)
- [epsilon](mpscnnbatchnormalizationdatasource/epsilon%28%29.md)
- [gamma](mpscnnbatchnormalizationdatasource/gamma%28%29.md)
- [initWithCoder:](mpscnnbatchnormalizationdatasource/init%28coder_%29.md)
- [label](mpscnnbatchnormalizationdatasource/label%28%29.md)
- [load](mpscnnbatchnormalizationdatasource/load%28%29.md)
- [mean](mpscnnbatchnormalizationdatasource/mean%28%29.md)
- [numberOfFeatureChannels](mpscnnbatchnormalizationdatasource/numberoffeaturechannels%28%29.md)
- [purge](mpscnnbatchnormalizationdatasource/purge%28%29.md)
- [updateGammaAndBetaWithBatchNormalizationState:](mpscnnbatchnormalizationdatasource/updategammaandbeta%28with_%29.md)
- [updateGammaAndBetaWithCommandBuffer:batchNormalizationState:](mpscnnbatchnormalizationdatasource/updategammaandbeta%28with_batchnormalizationstate_%29.md)
- [updateMeanAndVarianceWithBatchNormalizationState:](mpscnnbatchnormalizationdatasource/updatemeanandvariance%28with_%29.md)
- [updateMeanAndVarianceWithCommandBuffer:batchNormalizationState:](mpscnnbatchnormalizationdatasource/updatemeanandvariance%28with_batchnormalizationstate_%29.md)
- [variance](mpscnnbatchnormalizationdatasource/variance%28%29.md)

### Type Properties

- [supportsSecureCoding](mpscnnbatchnormalizationdatasource/supportssecurecoding.md)

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
- [MPSCNNInstanceNormalizationGradientNode](mpscnninstancenormalizationgradientnode.md): A representation of a gradient instance normalization kernel.
- [MPSCNNInstanceNormalizationDataSource](mpscnninstancenormalizationdatasource.md): A protocol that defines methods that an instance normalization uses to initialize scale factors and bias terms.
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md): A representation of an instance normalization kernel.
- [MPSCNNLocalContrastNormalizationGradientNode](mpscnnlocalcontrastnormalizationgradientnode.md): A representation of a gradient local-contrast normalization kernel.
- [MPSCNNSpatialNormalizationGradientNode](mpscnnspatialnormalizationgradientnode.md): A representation of a gradient spatial normalization kernel.
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md): Virtual base class for CNN normalization nodes.
