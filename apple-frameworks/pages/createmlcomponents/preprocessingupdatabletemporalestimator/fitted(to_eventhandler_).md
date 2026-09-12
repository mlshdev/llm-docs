> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatabletemporalestimator/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatabletemporalestimator/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Fits a transformer to a sequence of examples.

## Declaration

```swift
func fitted<InputSequence>(to input: InputSequence, eventHandler: EventHandler? = nil) async throws -> PreprocessingUpdatableTemporalEstimator<Preprocessor, Estimator>.Transformer where InputSequence : Sequence, Preprocessor.Input == InputSequence.Element.Feature, InputSequence.Element : TemporalSequence
```

## Parameters

- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of preprocessed features.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [makeTransformer()](maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [PreprocessingUpdatableTemporalEstimator.Input](input.md): Deprecated. The input type.
- [PreprocessingUpdatableTemporalEstimator.Intermediate](intermediate.md): Deprecated. The intermediate type.
- [PreprocessingUpdatableTemporalEstimator.Output](output.md): Deprecated. The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
