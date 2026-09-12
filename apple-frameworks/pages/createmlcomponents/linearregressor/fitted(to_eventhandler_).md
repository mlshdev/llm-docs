> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/linearregressor/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a linear regressor model to a sequence of examples.

## Declaration

```swift
func fitted<Input>(to input: Input, eventHandler: EventHandler? = nil) async throws -> LinearRegressorModel<Scalar> where Input : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Scalar>
```

## Parameters

- `input`: A sequence of examples used for fitting the regressor.
- `eventHandler`: An event handler. This method reports maximum error and root-mean-square error metrics.

<a id="return-value"></a>

## Return Value

The fitted linear regressor model.

## See Also

### Fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a linear regressor model to a sequence of examples.
- [LinearRegressor.Annotation](annotation.md): The annotation type.
- [LinearRegressor.Transformer](transformer.md): The transformer type created by this estimator.
