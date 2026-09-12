> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedestimator/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedestimator/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a composed transformer to a sequence of examples.

## Declaration

```swift
func fitted<InputSequence, Validation>(to input: InputSequence, validateOn validation: Validation, eventHandler: EventHandler? = nil) async throws -> PreprocessingUpdatableSupervisedEstimator<Preprocessor, Estimator>.Transformer where InputSequence : Sequence, Validation : Sequence, InputSequence.Element == AnnotatedFeature<Preprocessor.Input, Estimator.Annotation>, Validation.Element == AnnotatedFeature<Preprocessor.Input, Estimator.Annotation>
```

## Parameters

- `input`: A sequence of examples used for fitting the transformer.
- `validation`: A sequence of examples used for validating the fitted transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [fitted(toPreprocessed:validateOn:eventHandler:)](fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableSupervisedEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingUpdatableSupervisedEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableSupervisedEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableSupervisedEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
