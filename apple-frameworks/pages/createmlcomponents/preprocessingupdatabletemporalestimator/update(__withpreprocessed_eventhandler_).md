> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatabletemporalestimator/update(_:withpreprocessed:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatabletemporalestimator/update(_:withpreprocessed:eventhandler:))

# update(\_:withPreprocessed:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Updates a transformer with a new sequence of preprocessed features.

## Declaration

```swift
func update<InputSequence>(_ transformer: inout PreprocessingUpdatableTemporalEstimator<Preprocessor, Estimator>.Transformer, withPreprocessed preprocessed: InputSequence, eventHandler: EventHandler? = nil) async throws where InputSequence : Sequence, InputSequence.Element : TemporalSequence, Estimator.Transformer.Input == InputSequence.Element.Feature
```

## Parameters

- `transformer`: A transformer to update.
- `preprocessed`: A sequence of preprocessed features.
- `eventHandler`: An event handler.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [makeTransformer()](maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [PreprocessingUpdatableTemporalEstimator.Input](input.md): Deprecated. The input type.
- [PreprocessingUpdatableTemporalEstimator.Intermediate](intermediate.md): Deprecated. The intermediate type.
- [PreprocessingUpdatableTemporalEstimator.Output](output.md): Deprecated. The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
