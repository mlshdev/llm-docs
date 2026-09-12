> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkclassifier/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkclassifier/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a fully connected network classifier model to a sequence of examples.

## Declaration

```swift
func fitted<Input>(to input: Input, eventHandler: EventHandler? = nil) async throws -> FullyConnectedNetworkClassifierModel<Scalar, Label> where Input : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Label>
```

## Parameters

- `input`: A sequence of examples used for fitting the classifier.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted fully connected network classifier model.

<a id="discussion"></a>

## Discussion

The training process partitions the input into random batches according to the batch size configuration parameter. Training stops when the maximum number of iterations is reached.

> **Note**

> This method does not do early-stopping, using a high value for `maximumIterations` may lead to over-fitting. Consider providing a validation set.

## See Also

### Fitting a classifier

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a fully connected network classifier model to a sequence of examples.
- [FullyConnectedNetworkClassifier.Annotation](annotation.md): The annotation type.
- [FullyConnectedNetworkClassifier.Transformer](transformer.md): The transformer type created by this estimator.
