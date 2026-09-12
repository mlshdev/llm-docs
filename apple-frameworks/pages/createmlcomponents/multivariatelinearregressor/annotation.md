> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/annotation](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/annotation)

# MultivariateLinearRegressor.Annotation

**Framework:** Create ML Components  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The annotation type.

## Declaration

```swift
typealias Annotation = MLShapedArray<Scalar>
```

## See Also

### Supporting types

- [MultivariateLinearRegressor.Model](model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A trained multivariate linear regressor model.
- [MultivariateLinearRegressor.Configuration](configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`.
- [MultivariateLinearRegressor.Feature](feature.md): The feature type.
- [MultivariateLinearRegressor.Transformer](transformer.md): The transformer type created by this estimator.
