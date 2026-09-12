> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedtemporalestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedtemporalestimator)

# PreprocessingUpdatableSupervisedTemporalEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.

## Declaration

```swift
struct PreprocessingUpdatableSupervisedTemporalEstimator<Preprocessor, Estimator> where Preprocessor : TemporalTransformer, Estimator : UpdatableSupervisedTemporalEstimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingupdatablesupervisedtemporalestimator/init%28____%29.md): Deprecated. Creates a composed supervised temporal estimator from a preprocessing transformer and a supervised temporal estimator.

### Getting the properties

- [estimator](preprocessingupdatablesupervisedtemporalestimator/estimator.md): Deprecated. The estimator.
- [preprocessor](preprocessingupdatablesupervisedtemporalestimator/preprocessor.md): Deprecated. The preprocessing transformer.

### Encoding and decoding

- [decodeWithOptimizer(from:)](preprocessingupdatablesupervisedtemporalestimator/decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.
- [encodeWithOptimizer(\_:to:)](preprocessingupdatablesupervisedtemporalestimator/encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [fitted(to:validateOn:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [fitted(toPreprocessed:validateOn:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/fitted%28topreprocessed_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features while validating.
- [makeTransformer()](preprocessingupdatablesupervisedtemporalestimator/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](preprocessingupdatablesupervisedtemporalestimator/update%28__withpreprocessed_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Annotation](preprocessingupdatablesupervisedtemporalestimator/annotation.md): Deprecated. The annotation type.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Input](preprocessingupdatablesupervisedtemporalestimator/input.md): Deprecated. The input type.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Intermediate](preprocessingupdatablesupervisedtemporalestimator/intermediate.md): Deprecated. The intermediate type.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Output](preprocessingupdatablesupervisedtemporalestimator/output.md): Deprecated. The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md)
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md)

## See Also

### Composition with preprocessing

- [PreprocessingEstimator](preprocessingestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md): Deprecated. A temporal estimator that composes a preprocessing transformer and a temporal estimator.
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md): A supervised estimator that composes a preprocessing transformer and a supervised estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md): Deprecated. An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
