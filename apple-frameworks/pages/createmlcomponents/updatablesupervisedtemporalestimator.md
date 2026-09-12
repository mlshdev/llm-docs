> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedtemporalestimator](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtemporalestimator)

# UpdatableSupervisedTemporalEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A supervised temporal estimator that can be incrementally updated.

## Declaration

```swift
protocol UpdatableSupervisedTemporalEstimator<Transformer, Annotation> : SupervisedTemporalEstimator
```

## Topics

### Appending

- [appending(\_:)](updatablesupervisedtemporalestimator/appending%28__%29.md): Deprecated. Composes this updatable supervised temporal estimator with another updatable supervised temporal estimator.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](updatablesupervisedtemporalestimator/encodewithoptimizer%28__to_%29.md): Deprecated. Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatablesupervisedtemporalestimator/decodewithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer with a decoder.

### Reading and writing

- [readWithOptimizer(from:)](updatablesupervisedtemporalestimator/readwithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer from a file.
- [writeWithOptimizer(\_:to:overwrite:)](updatablesupervisedtemporalestimator/writewithoptimizer%28__to_overwrite_%29.md): Deprecated. Writes the encoded transformer and optimizer to a file.

### Transforming

- [makeTransformer()](updatablesupervisedtemporalestimator/maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatablesupervisedtemporalestimator/update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [update(\_:with:)](updatablesupervisedtemporalestimator/update%28__with_%29.md): Deprecated.

## Relationships

### Inherits From

- [SupervisedTemporalEstimator](supervisedtemporalestimator.md)

### Conforming Types

- [PreprocessingUpdatableSupervisedTemporalEstimator](preprocessingupdatablesupervisedtemporalestimator.md)
- [UpdatableSupervisedEstimatorToTemporalAdaptor](updatablesupervisedestimatortotemporaladaptor.md)
- [UpdatableTemporalEstimatorToSupervisedAdaptor](updatabletemporalestimatortosupervisedadaptor.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
- [RandomTransformer](randomtransformer.md): A transformer that takes an input and a random number generator and produces a randomized output.
- [Estimator](estimator.md): An estimator that creates a transformer by fitting to a data set.
- [TemporalEstimator](temporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of temporal features.
- [SupervisedEstimator](supervisedestimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableEstimator](updatableestimator.md): An estimator that can be incrementally updated.
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md): A supervised estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
