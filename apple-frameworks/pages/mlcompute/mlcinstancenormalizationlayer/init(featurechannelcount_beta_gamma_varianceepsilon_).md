> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinstancenormalizationlayer/init(featurechannelcount:beta:gamma:varianceepsilon:)](https://developer.apple.com/documentation/mlcompute/mlcinstancenormalizationlayer/init(featurechannelcount:beta:gamma:varianceepsilon:))

# init(featureChannelCount:beta:gamma:varianceEpsilon:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, and variance epsilon you specify.

## Declaration

```swift
convenience init?(featureChannelCount: Int, beta: MLCTensor?, gamma: MLCTensor?, varianceEpsilon: Float)
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

## See Also

### Creating Instance Normalization Layers

- [init(featureChannelCount:beta:gamma:varianceEpsilon:momentum:)](init%28featurechannelcount_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, variance epsilon, and momentum you specify.
- [init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:)](init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, mean, variance, beta and gamma tensors, variance epsilon, and momentum you specify.

# layerWithFeatureChannelCount:beta:gamma:varianceEpsilon: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, and variance epsilon you specify.

## Declaration

```objectivec
+ (instancetype) layerWithFeatureChannelCount:(NSUInteger) featureChannelCount beta:(MLCTensor *) beta gamma:(MLCTensor *) gamma varianceEpsilon:(float) varianceEpsilon;
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

## See Also

### Creating Instance Normalization Layers

- [layerWithFeatureChannelCount:beta:gamma:varianceEpsilon:momentum:](init%28featurechannelcount_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, variance epsilon, and momentum you specify.
- [layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:](init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, mean, variance, beta and gamma tensors, variance epsilon, and momentum you specify.
