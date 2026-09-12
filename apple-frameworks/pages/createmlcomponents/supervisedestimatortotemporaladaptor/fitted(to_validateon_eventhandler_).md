> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimatortotemporaladaptor/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/supervisedestimatortotemporaladaptor/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Fits a transformer to a sequence of examples while validating with a validation sequence.

## Declaration

```swift
func fitted<InputSequence, Validation, FeatureSequence>(to input: InputSequence, validateOn validation: Validation, eventHandler: EventHandler? = nil) async throws -> SupervisedEstimatorToTemporalAdaptor<Base>.Transformer where InputSequence : Sequence, Validation : Sequence, FeatureSequence : TemporalSequence, InputSequence.Element == AnnotatedFeature<FeatureSequence, Base.Annotation>, Validation.Element == AnnotatedFeature<FeatureSequence, Base.Annotation>, FeatureSequence.Feature == Base.Transformer.Input
```

## Parameters

- `input`: A sequence of examples used for fitting the transformer.
- `validation`: A sequence of examples used for validating the fitted transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [SupervisedEstimatorToTemporalAdaptor.Annotation](annotation.md): Deprecated. The annotation type.
- [SupervisedEstimatorToTemporalAdaptor.Input](input.md): Deprecated. The input type.
- [SupervisedEstimatorToTemporalAdaptor.Output](output.md): Deprecated. The output type.
- [SupervisedEstimatorToTemporalAdaptor.Transformer](transformer.md): Deprecated. The transformer type created by this estimator.
