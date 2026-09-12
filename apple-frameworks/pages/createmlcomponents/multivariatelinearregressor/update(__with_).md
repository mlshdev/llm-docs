> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/update(_:with:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/update(_:with:))

# update(\_:with:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Updates a model with a new shaped array of examples.

## Declaration

```swift
func update(_ model: inout MultivariateLinearRegressor<Scalar>.Model, with input: AnnotatedBatch<Scalar>) async throws -> Scalar
```

## Parameters

- `model`: A model to update.
- `input`: An annotated batch containing the features and annotations. The last dimension of the features is the model’s input size and the last dimension of the annotations is the model’s output size. All the leading dimensions of the features must match all leading dimensions of the annotations. For example, the feature shape can be `[N, X]` and the annotation shape can be `[N, Y]` for `N` examples where `X` is the input size and `Y` is the output size.

<a id="return-value"></a>

## Return Value

The mean squared error for the batch, also known as the batch loss.

## See Also

### Fitting Progressively

- [makeTransformer()](maketransformer%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Creates a default-initialized model suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new sequence of examples.
