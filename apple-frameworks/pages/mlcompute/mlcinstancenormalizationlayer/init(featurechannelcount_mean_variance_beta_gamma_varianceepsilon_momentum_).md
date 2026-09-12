> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinstancenormalizationlayer/init(featurechannelcount:mean:variance:beta:gamma:varianceepsilon:momentum:)](https://developer.apple.com/documentation/mlcompute/mlcinstancenormalizationlayer/init(featurechannelcount:mean:variance:beta:gamma:varianceepsilon:momentum:))

# init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates an instance normalization layer with the number of feature channels, mean, variance, beta and gamma tensors, variance epsilon, and momentum you specify.

## Declaration

```swift
convenience init?(featureChannelCount: Int, mean: MLCTensor, variance: MLCTensor, beta: MLCTensor?, gamma: MLCTensor?, varianceEpsilon: Float, momentum: Float)
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `mean`: The running mean tensor.
- `variance`: The running variance tensor.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The epslion value.
- `momentum`: The momentum value for the running mean and variance computation.

## See Also

### Creating Instance Normalization Layers

- [init(featureChannelCount:beta:gamma:varianceEpsilon:)](init%28featurechannelcount_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, and variance epsilon you specify.
- [init(featureChannelCount:beta:gamma:varianceEpsilon:momentum:)](init%28featurechannelcount_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, variance epsilon, and momentum you specify.

# layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates an instance normalization layer with the number of feature channels, mean, variance, beta and gamma tensors, variance epsilon, and momentum you specify.

## Declaration

```objectivec
+ (instancetype) layerWithFeatureChannelCount:(NSUInteger) featureChannelCount mean:(MLCTensor *) mean variance:(MLCTensor *) variance beta:(MLCTensor *) beta gamma:(MLCTensor *) gamma varianceEpsilon:(float) varianceEpsilon momentum:(float) momentum;
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `mean`: The running mean tensor.
- `variance`: The running variance tensor.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The epslion value.
- `momentum`: The momentum value for the running mean and variance computation.

## See Also

### Creating Instance Normalization Layers

- [layerWithFeatureChannelCount:beta:gamma:varianceEpsilon:](init%28featurechannelcount_beta_gamma_varianceepsilon_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, and variance epsilon you specify.
- [layerWithFeatureChannelCount:beta:gamma:varianceEpsilon:momentum:](init%28featurechannelcount_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates an instance normalization layer with the number of feature channels, beta and gamma tensors, variance epsilon, and momentum you specify.
