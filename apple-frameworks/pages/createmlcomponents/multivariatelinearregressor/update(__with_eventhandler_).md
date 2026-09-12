> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Updates a model with a new sequence of examples.

## Declaration

```swift
func update(_ model: inout MultivariateLinearRegressor<Scalar>.Model, with input: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, MLShapedArray<Scalar>>>, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `model`: A model to update.
- `input`: A sequence of examples. For faster updates, consider passing a single [AnnotatedBatch](../annotatedbatch.md) with shaped arrays that contain multiple training examples. For example instead of passing a sequence of `N` shaped arrays with shape `[M]`, pass a single shaped array with shape `[N, M]`. See also [update(\_:with:)](update%28__with_%29.md).
- `eventHandler`: An event handler. This method reports the mean squared error.

## See Also

### Fitting Progressively

- [makeTransformer()](maketransformer%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Creates a default-initialized model suitable for incremental fitting.
- [update(\_:with:)](update%28__with_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new shaped array of examples.
