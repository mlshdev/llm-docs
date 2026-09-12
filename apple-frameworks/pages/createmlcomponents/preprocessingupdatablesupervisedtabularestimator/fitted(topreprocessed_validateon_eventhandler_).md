> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedtabularestimator/fitted(topreprocessed:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedtabularestimator/fitted(topreprocessed:validateon:eventhandler:))

# fitted(toPreprocessed:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a composed transformer to a data frame of examples.

## Declaration

```swift
func fitted(toPreprocessed preprocessedInput: DataFrame, validateOn preprocessedValidation: DataFrame?, eventHandler: EventHandler? = nil) async throws -> PreprocessingUpdatableSupervisedTabularEstimator<Preprocessor, Estimator>.Transformer
```

## Parameters

- `preprocessedInput`: A data frame of preprocessed features used for fitting the transformer.
- `preprocessedValidation`: A data frame of preprocessed features used for validating the fitted transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocesing and fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new data frame of examples.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new data frame of preprocessed features.
- [PreprocessingUpdatableSupervisedTabularEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingUpdatableSupervisedTabularEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableSupervisedTabularEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableSupervisedTabularEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
