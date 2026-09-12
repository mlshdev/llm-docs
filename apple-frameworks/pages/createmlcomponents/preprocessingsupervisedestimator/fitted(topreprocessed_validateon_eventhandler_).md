> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedestimator/fitted(topreprocessed:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedestimator/fitted(topreprocessed:validateon:eventhandler:))

# fitted(toPreprocessed:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a composed transformer to a sequence of preprocessed features.

## Declaration

```swift
func fitted<Input, Validation>(toPreprocessed preprocessedInput: Input, validateOn preprocessedValidation: Validation, eventHandler: EventHandler? = nil) async throws -> PreprocessingSupervisedEstimator<Preprocessor, Estimator>.Transformer where Input : Sequence, Validation : Sequence, Input.Element == AnnotatedFeature<Preprocessor.Output, Estimator.Annotation>, Validation.Element == AnnotatedFeature<Preprocessor.Output, Estimator.Annotation>
```

## Parameters

- `preprocessedInput`: A sequence of preprocessed features.
- `preprocessedValidation`: A sequence of preprocessed features used for validating the fitted transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocessing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [PreprocessingSupervisedEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingSupervisedEstimator.Input](input.md): The input type.
- [PreprocessingSupervisedEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingSupervisedEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
