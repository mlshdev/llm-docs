> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgroupnormalizationlayer](https://developer.apple.com/documentation/mlcompute/mlcgroupnormalizationlayer)

# MLCGroupNormalizationLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that divides the channels into groups for normalization.

## Declaration

```swift
class MLCGroupNormalizationLayer
```

## Topics

### Creating Group Normalization Layers

- [init(featureChannelCount:groupCount:beta:gamma:varianceEpsilon:)](mlcgroupnormalizationlayer/init%28featurechannelcount_groupcount_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates a group normalization layer with the number of feature channels and groups, beta and gamma tensors, and variance epsilon you specify.

### Inspecting Group Normalization Layers

- [featureChannelCount](mlcgroupnormalizationlayer/featurechannelcount.md): Deprecated. The number of feature channels.
- [groupCount](mlcgroupnormalizationlayer/groupcount.md): Deprecated. The number of groups into which you separate the channels.
- [beta](mlcgroupnormalizationlayer/beta.md): Deprecated. The beta tensor.
- [gamma](mlcgroupnormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](mlcgroupnormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](mlcgroupnormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](mlcgroupnormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.

# MLCGroupNormalizationLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that divides the channels into groups for normalization.

## Declaration

```objectivec
@interface MLCGroupNormalizationLayer : MLCLayer
```

## Topics

### Creating Group Normalization Layers

- [layerWithFeatureChannelCount:groupCount:beta:gamma:varianceEpsilon:](mlcgroupnormalizationlayer/init%28featurechannelcount_groupcount_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates a group normalization layer with the number of feature channels and groups, beta and gamma tensors, and variance epsilon you specify.

### Inspecting Group Normalization Layers

- [featureChannelCount](mlcgroupnormalizationlayer/featurechannelcount.md): Deprecated. The number of feature channels.
- [groupCount](mlcgroupnormalizationlayer/groupcount.md): Deprecated. The number of groups into which you separate the channels.
- [beta](mlcgroupnormalizationlayer/beta.md): Deprecated. The beta tensor.
- [gamma](mlcgroupnormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](mlcgroupnormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](mlcgroupnormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](mlcgroupnormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.
