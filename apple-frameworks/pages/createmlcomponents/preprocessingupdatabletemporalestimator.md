> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatabletemporalestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatabletemporalestimator)

# PreprocessingUpdatableTemporalEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.

## Declaration

```swift
struct PreprocessingUpdatableTemporalEstimator<Preprocessor, Estimator> where Preprocessor : TemporalTransformer, Estimator : UpdatableTemporalEstimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingupdatabletemporalestimator/init%28____%29.md): Deprecated. Creates a composed temporal estimator from a preprocessing transformer and a temporal estimator.

### Getting the properties

- [estimator](preprocessingupdatabletemporalestimator/estimator.md): Deprecated. The estimator.
- [preprocessor](preprocessingupdatabletemporalestimator/preprocessor.md): Deprecated. The preprocessing transformer.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](preprocessingupdatabletemporalestimator/encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](preprocessingupdatabletemporalestimator/decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingupdatabletemporalestimator/preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingupdatabletemporalestimator/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingupdatabletemporalestimator/fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [update(\_:withPreprocessed:eventHandler:)](preprocessingupdatabletemporalestimator/update%28__withpreprocessed_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of preprocessed features.
- [update(\_:with:eventHandler:)](preprocessingupdatabletemporalestimator/update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [makeTransformer()](preprocessingupdatabletemporalestimator/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [PreprocessingUpdatableTemporalEstimator.Input](preprocessingupdatabletemporalestimator/input.md): Deprecated. The input type.
- [PreprocessingUpdatableTemporalEstimator.Intermediate](preprocessingupdatabletemporalestimator/intermediate.md): Deprecated. The intermediate type.
- [PreprocessingUpdatableTemporalEstimator.Output](preprocessingupdatabletemporalestimator/output.md): Deprecated. The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalEstimator](temporalestimator.md)
- [UpdatableTemporalEstimator](updatabletemporalestimator.md)

## See Also

### Composition with preprocessing

- [PreprocessingEstimator](preprocessingestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md): Deprecated. A temporal estimator that composes a preprocessing transformer and a temporal estimator.
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md): A supervised estimator that composes a preprocessing transformer and a supervised estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md): Deprecated. An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.
