> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Fits a fully-connected network multi-label classifier model to a sequence of examples.

## Declaration

```swift
func fitted<Input, Validation>(to input: Input, validateOn validation: Validation, eventHandler: EventHandler? = nil) async throws -> FullyConnectedNetworkMultiLabelClassifierModel<Scalar, Label> where Input : Sequence, Validation : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Set<Label>>, Validation.Element == AnnotatedFeature<MLShapedArray<Scalar>, Set<Label>>
```

## Parameters

- `input`: A sequence of examples used for fitting the classifier.
- `validation`: A sequence of examples used for validating the fitted multi-label classifier.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted fully-connected network multi-label classifier model.

<a id="discussion"></a>

## Discussion

The training process partitions the input into random batches according to the batch size configuration parameter. Training stops when the validation loss stops improving or when the maximum number of iterations is reached.

## See Also

### Fitting a classifier

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a fully-connected network multi-label classifier model to a sequence of examples.
- [FullyConnectedNetworkMultiLabelClassifier.Annotation](annotation.md): The annotation type.
- [FullyConnectedNetworkMultiLabelClassifier.Transformer](transformer.md): The transformer type created by this estimator.
