> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimator](https://developer.apple.com/documentation/createmlcomponents/estimator)

# Estimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that creates a transformer by fitting to a data set.

## Declaration

```swift
protocol Estimator<Transformer>
```

## Topics

### Getting the properties

- [Transformer](estimator/transformer.md): The transformer type created by this estimator.

### Appending

- [appending(\_:)](estimator/appending%28__%29.md): Composes this estimator with another estimator.

### Encoding and decoding

- [encode(\_:to:)](estimator/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](estimator/decode%28from_%29.md): Decodes a previously fitted transformer.

### Reading and writing

- [read(from:)](estimator/read%28from_%29.md): Reads the encoded transformer from a file.
- [write(\_:to:overwrite:)](estimator/write%28__to_overwrite_%29.md): Writes the encoded transformer to a file.

### Fitting and adapting

- [adaptedAsSupervised(annotationType:)](estimator/adaptedassupervised%28annotationtype_%29.md): Exposes this estimator as a supervised estimator.
- [adaptedAsTemporal()](estimator/adaptedastemporal%28%29.md): Deprecated. Exposes this estimator as a temporal estimator.
- [fitted(to:eventHandler:)](estimator/fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:)](estimator/fitted%28to_%29.md)

## Relationships

### Inherited By

- [UpdatableEstimator](updatableestimator.md)

### Conforming Types

- [CategoricalImputer](categoricalimputer.md)
- [MaxAbsScaler](maxabsscaler.md)
- [MinMaxScaler](minmaxscaler.md)
- [NormalizationScaler](normalizationscaler.md)
- [NumericImputer](numericimputer.md)
- [OneHotEncoder](onehotencoder.md)
- [OrdinalEncoder](ordinalencoder.md)
- [PreprocessingEstimator](preprocessingestimator.md)
- [PreprocessingUpdatableEstimator](preprocessingupdatableestimator.md)
- [RobustScaler](robustscaler.md)
- [StandardScaler](standardscaler.md)
- [TransformerToEstimatorAdaptor](transformertoestimatoradaptor.md)
- [TransformerToUpdatableEstimatorAdaptor](transformertoupdatableestimatoradaptor.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
- [RandomTransformer](randomtransformer.md): A transformer that takes an input and a random number generator and produces a randomized output.
- [TemporalEstimator](temporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of temporal features.
- [SupervisedEstimator](supervisedestimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableEstimator](updatableestimator.md): An estimator that can be incrementally updated.
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md): A supervised estimator that can be incrementally updated.
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
