> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedtabularestimator](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtabularestimator)

# UpdatableSupervisedTabularEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A supervised tabular estimator that can be incrementally updated.

## Declaration

```swift
protocol UpdatableSupervisedTabularEstimator<Transformer, Annotation> : SupervisedTabularEstimator
```

## Topics

### Appending

- [appending(\_:)](updatablesupervisedtabularestimator/appending%28__%29.md): Composes this supervised tabular estimator with another supervised tabular estimator.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](updatablesupervisedtabularestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatablesupervisedtabularestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.

### Reading and writing

- [readWithOptimizer(from:)](updatablesupervisedtabularestimator/readwithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer from a file.
- [writeWithOptimizer(\_:to:overwrite:)](updatablesupervisedtabularestimator/writewithoptimizer%28__to_overwrite_%29.md): Writes the encoded transformer and optimizer to a file.

### Transforming

- [makeTransformer()](updatablesupervisedtabularestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:)](updatablesupervisedtabularestimator/update%28__with_%29.md)
- [update(\_:with:eventHandler:)](updatablesupervisedtabularestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.

## Relationships

### Inherits From

- [SupervisedTabularEstimator](supervisedtabularestimator.md)

### Conforming Types

- [AnnotatedFeatureProvider](annotatedfeatureprovider.md)
- [BoostedTreeClassifier](boostedtreeclassifier.md)
- [BoostedTreeRegressor](boostedtreeregressor.md)
- [PreprocessingUpdatableSupervisedTabularEstimator](preprocessingupdatablesupervisedtabularestimator.md)
- [UpdatableTabularEstimatorToSupervisedAdaptor](updatabletabularestimatortosupervisedadaptor.md)

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
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
