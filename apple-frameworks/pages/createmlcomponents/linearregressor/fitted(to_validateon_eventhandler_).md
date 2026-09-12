> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/linearregressor/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a linear regressor model to a sequence of examples.

## Declaration

```swift
func fitted<Input, Validation>(to input: Input, validateOn validation: Validation, eventHandler: EventHandler? = nil) async throws -> LinearRegressorModel<Scalar> where Input : Sequence, Validation : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Scalar>, Validation.Element == AnnotatedFeature<MLShapedArray<Scalar>, Scalar>
```

## Parameters

- `input`: A sequence of examples used for fitting the regressor.
- `validation`: A sequence of examples used for validating the fitted regressor.
- `eventHandler`: An event handler. This method reports maximum error and root-mean-square error metrics.

<a id="return-value"></a>

## Return Value

The fitted linear regressor model.

## See Also

### Fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a linear regressor model to a sequence of examples.
- [LinearRegressor.Annotation](annotation.md): The annotation type.
- [LinearRegressor.Transformer](transformer.md): The transformer type created by this estimator.
