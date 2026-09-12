> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatabletabularestimator/update(_:withpreprocessed:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatabletabularestimator/update(_:withpreprocessed:eventhandler:))

# update(\_:withPreprocessed:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer with a new data frame of preprocessed features.

## Declaration

```swift
func update(_ transformer: inout PreprocessingUpdatableTabularEstimator<Preprocessor, Estimator>.Transformer, withPreprocessed preprocessed: DataFrame, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `transformer`: A transformer to update.
- `preprocessed`: A data frame of preprocessed features.
- `eventHandler`: An event handler.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a data frame of preprocessed features.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new data frame of examples.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [PreprocessingUpdatableTabularEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableTabularEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableTabularEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
