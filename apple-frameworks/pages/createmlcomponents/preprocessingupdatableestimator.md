> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatableestimator](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatableestimator)

# PreprocessingUpdatableEstimator

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An updatable estimator that composes a preprocessing transformer and an updatable estimator.

## Declaration

```swift
struct PreprocessingUpdatableEstimator<Preprocessor, Estimator> where Preprocessor : Transformer, Estimator : UpdatableEstimator, Preprocessor.Output == Estimator.Transformer.Input
```

## Topics

### Creating an estimator

- [init(\_:\_:)](preprocessingupdatableestimator/init%28____%29.md): Creates a composed updatable estimator from a preprocessing transformer and an estimator.

### Getting the properties

- [estimator](preprocessingupdatableestimator/estimator.md): The estimator.
- [preprocessor](preprocessingupdatableestimator/preprocessor.md): The preprocessing transformer.

### Encoding and decoding

- [decodeWithOptimizer(from:)](preprocessingupdatableestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer.
- [encodeWithOptimizer(\_:to:)](preprocessingupdatableestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessingupdatableestimator/preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](preprocessingupdatableestimator/fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](preprocessingupdatableestimator/fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [makeTransformer()](preprocessingupdatableestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](preprocessingupdatableestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](preprocessingupdatableestimator/update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableEstimator.Input](preprocessingupdatableestimator/input.md): The input type.
- [PreprocessingUpdatableEstimator.Intermediate](preprocessingupdatableestimator/intermediate.md): The intermediate type.
- [PreprocessingUpdatableEstimator.Output](preprocessingupdatableestimator/output.md): The output type.
- [Transformer](transformer.md): A transformer that takes an input and produces an output.

## Relationships

### Conforms To

- [Estimator](estimator.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UpdatableEstimator](updatableestimator.md)

## See Also

### Composition with preprocessing

- [PreprocessingEstimator](preprocessingestimator.md): An estimator that composes a preprocessing transformer and an estimator.
- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md): Deprecated. A temporal estimator that composes a preprocessing transformer and a temporal estimator.
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md): A supervised estimator that composes a preprocessing transformer and a supervised estimator.
- [PreprocessingSupervisedTemporalEstimator](preprocessingsupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that composes a preprocessing transformer and a supervised temporal estimator.
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md): Deprecated. An updatable temporal estimator that composes a preprocessing transformer and an updatable temporal estimator.
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md): An updatable supervised estimator that composes a preprocessing transformer and an updatable supervised estimator.
- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md): Deprecated. An updatable supervised temporal estimator that composes a preprocessing transformer and an updatable supervised temporal estimator.
