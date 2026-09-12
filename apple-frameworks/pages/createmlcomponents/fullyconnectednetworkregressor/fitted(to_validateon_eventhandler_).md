> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkregressor/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkregressor/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a fully connected network regressor model to a sequence of examples.

## Declaration

```swift
func fitted<Input, Validation>(to input: Input, validateOn validation: Validation, eventHandler: EventHandler? = nil) async throws -> FullyConnectedNetworkRegressorModel<Scalar> where Input : Sequence, Validation : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Float>, Validation.Element == AnnotatedFeature<MLShapedArray<Scalar>, Float>
```

## Parameters

- `input`: A sequence of examples used for fitting the regressor.
- `validation`: A sequence of examples used for validating the fitted regressor.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted fully connected network regressor model.

<a id="discussion"></a>

## Discussion

The training process partitions the input into random batches according to the batch size configuration parameter. Training stops when the validation loss stops improving or when the maximum number of iterations is reached.

## See Also

### Fitting a regressor

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a fully connected network regressor model to a sequence of examples.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
