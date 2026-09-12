> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Fits a linear regressor model to a sequence of annotated features.

## Declaration

```swift
func fitted(to input: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, MLShapedArray<Scalar>>>, eventHandler: EventHandler? = nil) async throws -> MultivariateLinearRegressor<Scalar>.Model
```

## Parameters

- `input`: A sequence of examples used for fitting the regressor. For faster processing, instead of passing a sequence of shaped arrays, consider passing a single shaped array containing all the training examples. For example instead of passing `N` shaped arrays with shape `[M]`, pass a single shaped array with shape `[N, M]`. See [fitted(to:validateOn:eventHandler:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/fitted%28to:validateon:eventhandler:%29-82szq).
- `eventHandler`: An event handler. This method reports mean squared errors.

<a id="return-value"></a>

## Return Value

The fitted linear regressor model.

## See Also

### Fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a linear regressor model to shaped arrays of features and annotations.
