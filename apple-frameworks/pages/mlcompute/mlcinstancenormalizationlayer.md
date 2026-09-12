> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinstancenormalizationlayer](https://developer.apple.com/documentation/mlcompute/mlcinstancenormalizationlayer)

# MLCInstanceNormalizationLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that normalizes all features of one channel.

## Declaration

```swift
class MLCInstanceNormalizationLayer
```

## Topics

### Creating Instance Normalization Layers

- [init(featureChannelCount:beta:gamma:varianceEpsilon:)](mlcinstancenormalizationlayer/init%28featurechannelcount_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, and variance epsilon you specify.
- [init(featureChannelCount:beta:gamma:varianceEpsilon:momentum:)](mlcinstancenormalizationlayer/init%28featurechannelcount_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, variance epsilon, and momentum you specify.
- [init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:)](mlcinstancenormalizationlayer/init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, mean, variance, beta and gamma tensors, variance epsilon, and momentum you specify.

### Inspecting Instance Normalization Layers

- [beta](mlcinstancenormalizationlayer/beta.md): Deprecated. The beta tensor.
- [betaParameter](mlcinstancenormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [featureChannelCount](mlcinstancenormalizationlayer/featurechannelcount.md): Deprecated. The number of feature channels.
- [gamma](mlcinstancenormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [gammaParameter](mlcinstancenormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.
- [mean](mlcinstancenormalizationlayer/mean.md): Deprecated. The running mean tensor.
- [momentum](mlcinstancenormalizationlayer/momentum.md): Deprecated. The momentum value for the running mean and variance computation.
- [variance](mlcinstancenormalizationlayer/variance.md): Deprecated. The running variance tensor.
- [varianceEpsilon](mlcinstancenormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.

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
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.

# MLCInstanceNormalizationLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that normalizes all features of one channel.

## Declaration

```objectivec
@interface MLCInstanceNormalizationLayer : MLCLayer
```

## Topics

### Creating Instance Normalization Layers

- [layerWithFeatureChannelCount:beta:gamma:varianceEpsilon:](mlcinstancenormalizationlayer/init%28featurechannelcount_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, and variance epsilon you specify.
- [layerWithFeatureChannelCount:beta:gamma:varianceEpsilon:momentum:](mlcinstancenormalizationlayer/init%28featurechannelcount_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, variance epsilon, and momentum you specify.
- [layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:](mlcinstancenormalizationlayer/init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, mean, variance, beta and gamma tensors, variance epsilon, and momentum you specify.

### Inspecting Instance Normalization Layers

- [beta](mlcinstancenormalizationlayer/beta.md): Deprecated. The beta tensor.
- [betaParameter](mlcinstancenormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [featureChannelCount](mlcinstancenormalizationlayer/featurechannelcount.md): Deprecated. The number of feature channels.
- [gamma](mlcinstancenormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [gammaParameter](mlcinstancenormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.
- [mean](mlcinstancenormalizationlayer/mean.md): Deprecated. The running mean tensor.
- [momentum](mlcinstancenormalizationlayer/momentum.md): Deprecated. The momentum value for the running mean and variance computation.
- [variance](mlcinstancenormalizationlayer/variance.md): Deprecated. The running variance tensor.
- [varianceEpsilon](mlcinstancenormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.
