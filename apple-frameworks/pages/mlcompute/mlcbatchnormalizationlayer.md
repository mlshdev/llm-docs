> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcbatchnormalizationlayer](https://developer.apple.com/documentation/mlcompute/mlcbatchnormalizationlayer)

# MLCBatchNormalizationLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that normalizes a batch of inputs.

## Declaration

```swift
class MLCBatchNormalizationLayer
```

## Topics

### Creating Batch Normalization Layers

- [init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:)](mlcbatchnormalizationlayer/init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates a batch normalization layer with the number of feature channels, tensors, and variance epsilon you specify.
- [init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:)](mlcbatchnormalizationlayer/init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates a batch normalization layer with the number of feature channels, tensors, variance epsilon, and momentum you specify.

### Inspecting Batch Normalization Layers

- [featureChannelCount](mlcbatchnormalizationlayer/featurechannelcount.md): Deprecated. The number of feature channels.
- [mean](mlcbatchnormalizationlayer/mean.md): Deprecated. The mean tensor.
- [variance](mlcbatchnormalizationlayer/variance.md): Deprecated. The variance tensor.
- [beta](mlcbatchnormalizationlayer/beta.md): Deprecated. The beta tensor.
- [gamma](mlcbatchnormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](mlcbatchnormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [momentum](mlcbatchnormalizationlayer/momentum.md): Deprecated. The value you use for the running mean and variance computation.
- [betaParameter](mlcbatchnormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](mlcbatchnormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

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
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.

# MLCBatchNormalizationLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that normalizes a batch of inputs.

## Declaration

```objectivec
@interface MLCBatchNormalizationLayer : MLCLayer
```

## Topics

### Creating Batch Normalization Layers

- [layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon:](mlcbatchnormalizationlayer/init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates a batch normalization layer with the number of feature channels, tensors, and variance epsilon you specify.
- [layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:](mlcbatchnormalizationlayer/init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates a batch normalization layer with the number of feature channels, tensors, variance epsilon, and momentum you specify.

### Inspecting Batch Normalization Layers

- [featureChannelCount](mlcbatchnormalizationlayer/featurechannelcount.md): Deprecated. The number of feature channels.
- [mean](mlcbatchnormalizationlayer/mean.md): Deprecated. The mean tensor.
- [variance](mlcbatchnormalizationlayer/variance.md): Deprecated. The variance tensor.
- [beta](mlcbatchnormalizationlayer/beta.md): Deprecated. The beta tensor.
- [gamma](mlcbatchnormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](mlcbatchnormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [momentum](mlcbatchnormalizationlayer/momentum.md): Deprecated. The value you use for the running mean and variance computation.
- [betaParameter](mlcbatchnormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](mlcbatchnormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.
