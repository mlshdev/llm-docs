> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedestimator)

# PreprocessingUpdatableSupervisedEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.

## Declaration

```swift
struct PreprocessingUpdatableSupervisedEstimator<Preprocessor, Estimator> where Preprocessor : Transformer, Estimator : UpdatableSupervisedEstimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating the estimator

- [init(\_:\_:)](preprocessingupdatablesupervisedestimator/init%28____%29.md): Creates a composed supervised estimator from a preprocessing transformer and a supervised estimator.

### Getting the properties

- [estimator](preprocessingupdatablesupervisedestimator/estimator.md): The estimator.
- [preprocessor](preprocessingupdatablesupervisedestimator/preprocessor.md): The preprocessing transformer.

### Encoding and decoding

- [decodeWithOptimizer(from:)](preprocessingupdatablesupervisedestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.
- [encodeWithOptimizer(\_:to:)](preprocessingupdatablesupervisedestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingupdatablesupervisedestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingupdatablesupervisedestimator/fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingupdatablesupervisedestimator/fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [fitted(to:validateOn:eventHandler:)](preprocessingupdatablesupervisedestimator/fitted%28to_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:validateOn:eventHandler:)](preprocessingupdatablesupervisedestimator/fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [makeTransformer()](preprocessingupdatablesupervisedestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](preprocessingupdatablesupervisedestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](preprocessingupdatablesupervisedestimator/update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableSupervisedEstimator.Annotation](preprocessingupdatablesupervisedestimator/annotation.md): The annotation type.
- [PreprocessingUpdatableSupervisedEstimator.Input](preprocessingupdatablesupervisedestimator/input.md): The input type.
- [PreprocessingUpdatableSupervisedEstimator.Intermediate](preprocessingupdatablesupervisedestimator/intermediate.md): The intermediate type.
- [PreprocessingUpdatableSupervisedEstimator.Output](preprocessingupdatablesupervisedestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md)

## See Also

### Composition with preprocessing

- [PreprocessingEstimator](preprocessingestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md): Deprecated. A temporal estimator that composes a preprocessing transformer and a temporal estimator.
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md): A supervised estimator that composes a preprocessing transformer and a supervised estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md): Deprecated. An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.
- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md): Deprecated. An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.
