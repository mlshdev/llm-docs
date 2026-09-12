> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingestimator)

# PreprocessingEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that composes a preprocessing transformer and an estimator.

## Declaration

```swift
struct PreprocessingEstimator<Preprocessor, Estimator> where Preprocessor : Transformer, Estimator : Estimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingestimator/init%28____%29.md): Creates a composed estimator from a preprocessing transformer and an estimator.

### Getting the properties

- [estimator](preprocessingestimator/estimator.md): The estimator.
- [preprocessor](preprocessingestimator/preprocessor.md): The preprocessing transformer.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingestimator/fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingestimator/fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [PreprocessingEstimator.Input](preprocessingestimator/input.md): The input type.
- [PreprocessingEstimator.Intermediate](preprocessingestimator/intermediate.md): The intermediate type.
- [PreprocessingEstimator.Output](preprocessingestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Composition with preprocessing

- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md): Deprecated. A temporal estimator that composes a preprocessing transformer and a temporal estimator.
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md): A supervised estimator that composes a preprocessing transformer and a supervised estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md): Deprecated. An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md): Deprecated. An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.
