> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcbatchnormalizationlayer/init(featurechannelcount:mean:variance:beta:gamma:varianceepsilon:)](https://developer.apple.com/documentation/mlcompute/mlcbatchnormalizationlayer/init(featurechannelcount:mean:variance:beta:gamma:varianceepsilon:))

# init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batch normalization layer with the number of feature channels, tensors, and variance epsilon you specify.

## Declaration

```swift
convenience init?(featureChannelCount: Int, mean: MLCTensor, variance: MLCTensor, beta: MLCTensor?, gamma: MLCTensor?, varianceEpsilon: Float)
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `mean`: The mean tensor.
- `variance`: The variance tensor.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

## See Also

### Creating Batch Normalization Layers

- [init(featureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:)](init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates a batch normalization layer with the number of feature channels, tensors, variance epsilon, and momentum you specify.

# layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batch normalization layer with the number of feature channels, tensors, and variance epsilon you specify.

## Declaration

```objectivec
+ (instancetype) layerWithFeatureChannelCount:(NSUInteger) featureChannelCount mean:(MLCTensor *) mean variance:(MLCTensor *) variance beta:(MLCTensor *) beta gamma:(MLCTensor *) gamma varianceEpsilon:(float) varianceEpsilon;
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `mean`: The mean tensor.
- `variance`: The variance tensor.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

## See Also

### Creating Batch Normalization Layers

- [layerWithFeatureChannelCount:mean:variance:beta:gamma:varianceEpsilon:momentum:](init%28featurechannelcount_mean_variance_beta_gamma_varianceepsilon_momentum_%29.md): Deprecated. Creates a batch normalization layer with the number of feature channels, tensors, variance epsilon, and momentum you specify.
