> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayernormalizationlayer/layerwithnormalizedshape:beta:gamma:varianceepsilon:](https://developer.apple.com/documentation/mlcompute/mlclayernormalizationlayer/layerwithnormalizedshape:beta:gamma:varianceepsilon:)

# layerWithNormalizedShape:beta:gamma:varianceEpsilon:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a normalization layer with a shape, beta and gamma tensors, and variance epsilon you specify.

## Declaration

```objectivec
+ (instancetype) layerWithNormalizedShape:(NSArray<NSNumber *> *) normalizedShape beta:(MLCTensor *) beta gamma:(MLCTensor *) gamma varianceEpsilon:(float) varianceEpsilon;
```

## Parameters

- `normalizedShape`: The shape of the axes where normalization occurs.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

<a id="return-value"></a>

## Return Value

A new [MLCLayerNormalizationLayer](../mlclayernormalizationlayer.md) instance.
