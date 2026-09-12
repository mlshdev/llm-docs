> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedestimator/preprocessed(from:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedestimator/preprocessed(from:eventhandler:))

# preprocessed(from:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Preprocesses a sequence of examples.

## Declaration

```swift
func preprocessed<S>(from input: S, eventHandler: EventHandler? = nil) async throws -> AnySequence<AnnotatedFeature<Preprocessor.Output, PreprocessingSupervisedEstimator<Preprocessor, Estimator>.Annotation>> where S : Sequence, S.Element == AnnotatedFeature<Preprocessor.Input, Estimator.Annotation>
```

## Parameters

- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The preprocessed examples.

## See Also

### Preprocessing and fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:validateOn:eventHandler:)](fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of preprocessed features.
- [PreprocessingSupervisedEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingSupervisedEstimator.Input](input.md): The input type.
- [PreprocessingSupervisedEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingSupervisedEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
