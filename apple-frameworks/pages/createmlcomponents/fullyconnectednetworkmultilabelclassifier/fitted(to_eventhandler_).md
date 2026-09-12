> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Fits a fully-connected network multi-label classifier model to a sequence of examples.

## Declaration

```swift
func fitted<Input>(to input: Input, eventHandler: EventHandler? = nil) async throws -> FullyConnectedNetworkMultiLabelClassifierModel<Scalar, Label> where Input : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Set<Label>>
```

## Parameters

- `input`: A sequence of examples used for fitting the classifier.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted fully-connected network multi-label classifier model.

<a id="discussion"></a>

## Discussion

The training process partitions the input into random batches according to the batch size configuration parameter. Training stops when the maximum number of iterations is reached.

> **Note**

> This method does not do early-stopping, using a high value for `maximumIterations` may lead to over-fitting. Consider providing a validation set.

## See Also

### Fitting a classifier

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a fully-connected network multi-label classifier model to a sequence of examples.
- [FullyConnectedNetworkMultiLabelClassifier.Annotation](annotation.md): The annotation type.
- [FullyConnectedNetworkMultiLabelClassifier.Transformer](transformer.md): The transformer type created by this estimator.
