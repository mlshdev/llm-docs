> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingtemporalestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingtemporalestimator)

# PreprocessingTemporalEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A temporal estimator that composes a preprocessing transformer and a temporal estimator.

## Declaration

```swift
struct PreprocessingTemporalEstimator<Preprocessor, Estimator> where Preprocessor : TemporalTransformer, Estimator : TemporalEstimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingtemporalestimator/init%28____%29.md): Deprecated. Creates a composed temporal estimator from a preprocessing transformer and a temporal estimator.

### Getting the properties

- [estimator](preprocessingtemporalestimator/estimator.md): Deprecated. The estimator.
- [preprocessor](preprocessingtemporalestimator/preprocessor.md): Deprecated. The preprocessing transformer.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingtemporalestimator/preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingtemporalestimator/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingtemporalestimator/fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [PreprocessingTemporalEstimator.Input](preprocessingtemporalestimator/input.md): Deprecated. The input type.
- [PreprocessingTemporalEstimator.Intermediate](preprocessingtemporalestimator/intermediate.md): Deprecated. The intermediate type.
- [PreprocessingTemporalEstimator.Output](preprocessingtemporalestimator/output.md): Deprecated. The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalEstimator](temporalestimator.md)

## See Also

### Composition with preprocessing

- [PreprocessingEstimator](preprocessingestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md): A supervised estimator that composes a preprocessing transformer and a supervised estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md): Deprecated. An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md): Deprecated. An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.
