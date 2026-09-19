> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/transformer

# MultivariateLinearRegressor.Transformer

**Framework:** Create ML Components  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The transformer type created by this estimator.

## Declaration

```swift
typealias Transformer = MultivariateLinearRegressor<Scalar>.Model
```

## See Also

### Supporting types

- [MultivariateLinearRegressor.Model](model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [MultivariateLinearRegressor.Annotation](annotation.md): The annotation type.
- [MultivariateLinearRegressor.Configuration](configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`.
- [MultivariateLinearRegressor.Feature](feature.md): The feature type.
