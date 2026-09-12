> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgroupnormalizationlayer/init(featurechannelcount:groupcount:beta:gamma:varianceepsilon:)](https://developer.apple.com/documentation/mlcompute/mlcgroupnormalizationlayer/init(featurechannelcount:groupcount:beta:gamma:varianceepsilon:))

# init(featureChannelCount:groupCount:beta:gamma:varianceEpsilon:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a group normalization layer with the number of feature channels and groups, beta and gamma tensors, and variance epsilon you specify.

## Declaration

```swift
convenience init?(featureChannelCount: Int, groupCount: Int, beta: MLCTensor?, gamma: MLCTensor?, varianceEpsilon: Float)
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `groupCount`: The number of groups into which you separate the channels.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

# layerWithFeatureChannelCount:groupCount:beta:gamma:varianceEpsilon: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a group normalization layer with the number of feature channels and groups, beta and gamma tensors, and variance epsilon you specify.

## Declaration

```objectivec
+ (instancetype) layerWithFeatureChannelCount:(NSUInteger) featureChannelCount groupCount:(NSUInteger) groupCount beta:(MLCTensor *) beta gamma:(MLCTensor *) gamma varianceEpsilon:(float) varianceEpsilon;
```

## Parameters

- `featureChannelCount`: The number of feature channels.
- `groupCount`: The number of groups into which you separate the channels.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.
