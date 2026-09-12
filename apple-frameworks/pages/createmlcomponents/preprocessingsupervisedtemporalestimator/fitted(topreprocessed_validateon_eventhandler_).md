> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedtemporalestimator/fitted(topreprocessed:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedtemporalestimator/fitted(topreprocessed:validateon:eventhandler:))

# fitted(toPreprocessed:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Fits a transformer to a sequence of preprocessed examples while validating.

## Declaration

```swift
func fitted(toPreprocessed preprocessedInput: [AnnotatedFeature<PreprocessedFeatureSequence<Preprocessor.Output>, PreprocessingSupervisedTemporalEstimator<Preprocessor, Estimator>.Annotation>], validateOn preprocessedValidation: [AnnotatedFeature<PreprocessedFeatureSequence<Preprocessor.Output>, PreprocessingSupervisedTemporalEstimator<Preprocessor, Estimator>.Annotation>], eventHandler: EventHandler? = nil) async throws -> PreprocessingSupervisedTemporalEstimator<Preprocessor, Estimator>.Transformer
```

## Parameters

- `preprocessedInput`: A sequence of preprocessed features used for fitting the transformer.
- `preprocessedValidation`: A sequence of preprocessed features used for validating the fitted transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocesing and Fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed annotated features.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [PreprocessingSupervisedTemporalEstimator.Annotation](annotation.md): Deprecated. The annotation type.
- [PreprocessingSupervisedTemporalEstimator.Input](input.md): Deprecated. The input type.
- [PreprocessingSupervisedTemporalEstimator.Intermediate](intermediate.md): Deprecated. The intermediate type.
- [PreprocessingSupervisedTemporalEstimator.Output](output.md): Deprecated. The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
