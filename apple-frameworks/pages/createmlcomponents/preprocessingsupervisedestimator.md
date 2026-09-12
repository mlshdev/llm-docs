> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedestimator)

# PreprocessingSupervisedEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A supervised estimator that composes a preprocessing transformer and a supervised estimator.

## Declaration

```swift
struct PreprocessingSupervisedEstimator<Preprocessor, Estimator> where Preprocessor : Transformer, Estimator : SupervisedEstimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating the estimator

- [init(\_:\_:)](preprocessingsupervisedestimator/init%28____%29.md): Creates a composed supervised estimator from a preprocessing transformer and an estimator.

### Getting the properties

- [estimator](preprocessingsupervisedestimator/estimator.md): The estimator.
- [preprocessor](preprocessingsupervisedestimator/preprocessor.md): The preprocessing transformer.

### Preprocessing and fitting

- [preprocessed(from:eventHandler:)](preprocessingsupervisedestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingsupervisedestimator/fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingsupervisedestimator/fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [fitted(to:validateOn:eventHandler:)](preprocessingsupervisedestimator/fitted%28to_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:validateOn:eventHandler:)](preprocessingsupervisedestimator/fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a composed transformer to a sequence of preprocessed features.
- [PreprocessingSupervisedEstimator.Annotation](preprocessingsupervisedestimator/annotation.md): The annotation type.
- [PreprocessingSupervisedEstimator.Input](preprocessingsupervisedestimator/input.md): The input type.
- [PreprocessingSupervisedEstimator.Intermediate](preprocessingsupervisedestimator/intermediate.md): The intermediate type.
- [PreprocessingSupervisedEstimator.Output](preprocessingsupervisedestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)

## See Also

### Composition with preprocessing

- [PreprocessingEstimator](preprocessingestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md): Deprecated. A temporal estimator that composes a preprocessing transformer and a temporal estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md): An updatable estimator that composes a preprocessing transformer and an updatable estimator.
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md): Deprecated. An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md): Deprecated. An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.
