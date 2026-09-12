> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatableestimator/maketransformer()](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatableestimator/maketransformer())

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a default-initialized transformer suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> PreprocessingUpdatableEstimator<Preprocessor, Estimator>.Transformer
```

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
