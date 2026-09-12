> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedtabularestimator/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedtabularestimator/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer with a new data frame of examples.

## Declaration

```swift
func update(_ transformer: inout PreprocessingUpdatableSupervisedTabularEstimator<Preprocessor, Estimator>.Transformer, with input: DataFrame, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A data frame of examples.
- `eventHandler`: An event handler.

## See Also

### Preprocesing and fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [fitted(toPreprocessed:validateOn:eventHandler:)](fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new data frame of preprocessed features.
- [PreprocessingUpdatableSupervisedTabularEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingUpdatableSupervisedTabularEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableSupervisedTabularEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableSupervisedTabularEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
