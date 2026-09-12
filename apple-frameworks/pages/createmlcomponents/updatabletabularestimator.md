> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatabletabularestimator](https://developer.apple.com/documentation/createmlcomponents/updatabletabularestimator)

# UpdatableTabularEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A tabular estimator that can be incrementally updated.

## Declaration

```swift
protocol UpdatableTabularEstimator<Transformer> : TabularEstimator
```

## Topics

### Appending

- [appending(\_:)](updatabletabularestimator/appending%28__%29.md): Composes this updatable tabular estimator with an updatable supervised tabular estimator.

### Adapting

- [adaptedAsSupervised(annotationColumnID:)](updatabletabularestimator/adaptedassupervised%28annotationcolumnid_%29.md): Exposes this updatable tabular estimator as a supervised tabular estimator.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](updatabletabularestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatabletabularestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.

### Transforming

- [makeTransformer()](updatabletabularestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:)](updatabletabularestimator/update%28__with_%29.md)
- [update(\_:with:eventHandler:)](updatabletabularestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.

## Relationships

### Inherits From

- [TabularEstimator](tabularestimator.md)

### Conforming Types

- [ColumnSelector](columnselector.md)
- [PreprocessingUpdatableTabularEstimator](preprocessingupdatabletabularestimator.md)
- [TabularTransformerToUpdatableEstimatorAdaptor](tabulartransformertoupdatableestimatoradaptor.md)

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
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
