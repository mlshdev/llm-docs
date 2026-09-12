> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatableestimator/update(_:withpreprocessed:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatableestimator/update(_:withpreprocessed:eventhandler:))

# update(\_:withPreprocessed:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer with a new sequence of preprocessed features.

## Declaration

```swift
func update<InputSequence>(_ transformer: inout PreprocessingUpdatableEstimator<Preprocessor, Estimator>.Transformer, withPreprocessed preprocessed: InputSequence, eventHandler: EventHandler? = nil) async throws where InputSequence : Sequence, Preprocessor.Output == InputSequence.Element, InputSequence.Element == Estimator.Transformer.Input
```

## Parameters

- `transformer`: A transformer to update.
- `preprocessed`: A sequence of preprocessed features.
- `eventHandler`: An event handler.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [PreprocessingUpdatableEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
