> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedtabularestimator/fitted(topreprocessed:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedtabularestimator/fitted(topreprocessed:validateon:eventhandler:))

# fitted(toPreprocessed:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a data frame of preprocessed examples while validating.

## Declaration

```swift
func fitted(toPreprocessed preprocessedInput: DataFrame, validateOn preprocessedValidation: DataFrame?, eventHandler: EventHandler? = nil) async throws -> PreprocessingSupervisedTabularEstimator<Preprocessor, Estimator>.Transformer
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

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame
- [PreprocessingSupervisedTabularEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingSupervisedTabularEstimator.Input](input.md): The input type.
- [PreprocessingSupervisedTabularEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingSupervisedTabularEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
