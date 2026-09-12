> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalestimator](https://developer.apple.com/documentation/createmlcomponents/temporalestimator)

# TemporalEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An estimator that creates a transformer by fitting to a sequence of temporal features.

## Declaration

```swift
protocol TemporalEstimator<Transformer>
```

## Topics

### Reading and writing

- [read(from:)](temporalestimator/read%28from_%29.md): Deprecated. Reads the encoded transformer from a file.
- [write(\_:to:overwrite:)](temporalestimator/write%28__to_overwrite_%29.md): Deprecated. Writes the encoded transformer to a file.

### Appending

- [appending(\_:)](temporalestimator/appending%28__%29.md): Deprecated. Composes this temporal estimator with a supervised temporal estimator.

### Adapting and fitting

- [adaptedAsSupervised(annotationType:)](temporalestimator/adaptedassupervised%28annotationtype_%29.md): Deprecated. Exposes this temporal estimator as a supervised temporal estimator.
- [fitted(to:)](temporalestimator/fitted%28to_%29.md): Deprecated.
- [fitted(to:eventHandler:)](temporalestimator/fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [Transformer](temporalestimator/transformer.md): Deprecated. The transformer type created by this estimator.

### Encoding and decoding

- [encode(\_:to:)](temporalestimator/encode%28__to_%29.md): Deprecated. Encodes a fitted transformer.
- [decode(from:)](temporalestimator/decode%28from_%29.md): Deprecated. Decodes a previously fitted transformer.

## Relationships

### Inherited By

- [UpdatableTemporalEstimator](updatabletemporalestimator.md)

### Conforming Types

- [EstimatorToTemporalAdaptor](estimatortotemporaladaptor.md)
- [PreprocessingTemporalEstimator](preprocessingtemporalestimator.md)
- [PreprocessingUpdatableTemporalEstimator](preprocessingupdatabletemporalestimator.md)
- [TemporalTransformerToEstimatorAdaptor](temporaltransformertoestimatoradaptor.md)
- [TemporalTransformerToUpdatableEstimatorAdaptor](temporaltransformertoupdatableestimatoradaptor.md)
- [UpdatableEstimatorToTemporalAdaptor](updatableestimatortotemporaladaptor.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
- [RandomTransformer](randomtransformer.md): A transformer that takes an input and a random number generator and produces a randomized output.
- [Estimator](estimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedEstimator](supervisedestimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableEstimator](updatableestimator.md): An estimator that can be incrementally updated.
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md): A supervised estimator that can be incrementally updated.
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
