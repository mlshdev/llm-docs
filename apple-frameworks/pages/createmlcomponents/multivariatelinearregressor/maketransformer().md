> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/maketransformer()](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/maketransformer())

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a default-initialized model suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> MultivariateLinearRegressor<Scalar>.Model
```

## See Also

### Fitting Progressively

- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new sequence of examples.
- [update(\_:with:)](update%28__with_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new shaped array of examples.
