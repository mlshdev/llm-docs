> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifier/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a logistic regression classifier model to a sequence of examples while validating with a validation sequence.

## Declaration

```swift
func fitted<Input>(to input: Input, eventHandler: EventHandler? = nil) async throws -> LogisticRegressionClassifier<Scalar, Label>.Transformer where Input : Sequence, Input.Element == AnnotatedFeature<MLShapedArray<Scalar>, Label>
```

## Parameters

- `input`: A sequence of examples used for fitting the transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a logistic regression classifier model to a sequence of examples.
- [LogisticRegressionClassifier.Annotation](annotation.md): The annotation type.
- [LogisticRegressionClassifier.Transformer](transformer.md): The transformer type created by this estimator.
