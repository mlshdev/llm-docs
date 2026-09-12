> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedestimatortotemporaladaptor/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimatortotemporaladaptor/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Updates a transformer with a new sequence of examples.

## Declaration

```swift
func update<InputSequence, FeatureSequence>(_ transformer: inout UpdatableSupervisedEstimatorToTemporalAdaptor<Base>.Transformer, with input: InputSequence, eventHandler: EventHandler? = nil) async throws where InputSequence : Sequence, FeatureSequence : TemporalSequence, InputSequence.Element == AnnotatedFeature<FeatureSequence, Base.Annotation>, FeatureSequence.Feature == Base.Transformer.Input
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A sequence of examples.
- `eventHandler`: An event handler.

## See Also

### Fitting and updating

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [makeTransformer()](maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Annotation](annotation.md): Deprecated. The annotation type.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Input](input.md): Deprecated. The input type.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Output](output.md): Deprecated. The output type.
- [UpdatableSupervisedEstimatorToTemporalAdaptor.Transformer](transformer.md): Deprecated. The transformer type created by this estimator.
