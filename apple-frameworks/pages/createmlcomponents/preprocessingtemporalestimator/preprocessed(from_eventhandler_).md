> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingtemporalestimator/preprocessed(from:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingtemporalestimator/preprocessed(from:eventhandler:))

# preprocessed(from:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Preprocesses a sequence of examples.

## Declaration

```swift
func preprocessed<InputSequence>(from input: InputSequence, eventHandler: EventHandler? = nil) async throws -> [PreprocessedFeatureSequence<Preprocessor.Output>] where InputSequence : Sequence, Preprocessor.Input == InputSequence.Element.Feature, InputSequence.Element : TemporalSequence
```

## Parameters

- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The preprocessed examples.

## See Also

### Preprocesing and fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [PreprocessingTemporalEstimator.Input](input.md): Deprecated. The input type.
- [PreprocessingTemporalEstimator.Intermediate](intermediate.md): Deprecated. The intermediate type.
- [PreprocessingTemporalEstimator.Output](output.md): Deprecated. The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
