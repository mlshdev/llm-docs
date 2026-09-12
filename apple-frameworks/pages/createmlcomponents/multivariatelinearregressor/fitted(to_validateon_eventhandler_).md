> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Fits a linear regressor model to shaped arrays of features and annotations.

## Declaration

```swift
func fitted(to input: AnnotatedBatch<Scalar>, validateOn validation: AnnotatedBatch<Scalar>?, eventHandler: EventHandler? = nil) async throws -> MultivariateLinearRegressor<Scalar>.Model
```

## Parameters

- `input`: An annotated batch containing the features and annotations. The last dimension of the features is the model’s input size and the last dimension of the annotations is the model’s output size. All the leading dimensions of the features must match all leading dimensions of the annotations. For example, the feature shape can be `[N, X]` and the annotation shape can be `[N, Y]` for `N` examples where `X` is the input size and `Y` is the output size.
- `validation`: An annotated batch containing the validation features and annotations. The last dimension of the features must be `inputSize` and the last dimension of the annotations must be `outputSize`. All the leading dimensions of the features must match all leading dimensions of the annotations.
- `eventHandler`: An event handler. This method reports the mean squared errors.

<a id="return-value"></a>

## Return Value

The fitted model.

## See Also

### Fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a linear regressor model to a sequence of annotated features.
