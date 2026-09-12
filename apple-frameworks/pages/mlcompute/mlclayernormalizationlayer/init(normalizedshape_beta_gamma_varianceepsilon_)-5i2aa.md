> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayernormalizationlayer/init(normalizedshape:beta:gamma:varianceepsilon:)-5i2aa](https://developer.apple.com/documentation/mlcompute/mlclayernormalizationlayer/init(normalizedshape:beta:gamma:varianceepsilon:)-5i2aa)

# init(normalizedShape:beta:gamma:varianceEpsilon:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a normalization layer with a shape, beta and gamma tensors, and variance epsilon you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(normalizedShape: [Int], beta: MLCTensor, gamma: MLCTensor, varianceEpsilon: Float)
```

## Parameters

- `normalizedShape`: The shape of the axes where normalization occurs.
- `beta`: The beta tensor.
- `gamma`: The gamma tensor.
- `varianceEpsilon`: The variance epsilon you use for numerical stability.

## See Also

### Creating Layer Normalization Layers

- [init(normalizedShape:beta:gamma:varianceEpsilon:)](init%28normalizedshape_beta_gamma_varianceepsilon_%29-28e6g.md): Deprecated. Creates a normalization layer with a shape, optional beta and gamma tensors, and variance epsilon you specify.
