> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimator](https://developer.apple.com/documentation/createmlcomponents/updatableestimator)

# UpdatableEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that can be incrementally updated.

## Declaration

```swift
protocol UpdatableEstimator<Transformer> : Estimator
```

## Topics

### Adapting

- [adaptedAsSupervised(annotationType:)](updatableestimator/adaptedassupervised%28annotationtype_%29.md): Exposes this estimator as a supervised estimator.
- [adaptedAsTemporal()](updatableestimator/adaptedastemporal%28%29.md): Deprecated. Exposes this estimator as a temporal estimator.

### Appending

- [appending(\_:)](updatableestimator/appending%28__%29.md): Composes this updatable estimator with another updatable estimator.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](updatableestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatableestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.

### Transforming

- [makeTransformer()](updatableestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatableestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:with:)](updatableestimator/update%28__with_%29.md)

## Relationships

### Inherits From

- [Estimator](estimator.md)

### Conforming Types

- [NumericImputer](numericimputer.md)
- [OneHotEncoder](onehotencoder.md)
- [OrdinalEncoder](ordinalencoder.md)
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md)
- [StandardScaler](standardscaler.md)
- [TransformerToUpdatableEstimatorAdaptor](transformertoupdatableestimatoradaptor.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
- [RandomTransformer](randomtransformer.md): A transformer that takes an input and a random number generator and produces a randomized output.
- [Estimator](estimator.md): An estimator that creates a transformer by fitting to a data set.
- [TemporalEstimator](temporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of temporal features.
- [SupervisedEstimator](supervisedestimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md): A supervised estimator that can be incrementally updated.
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
