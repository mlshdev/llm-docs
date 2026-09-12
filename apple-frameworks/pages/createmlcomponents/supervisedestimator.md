> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimator](https://developer.apple.com/documentation/createmlcomponents/supervisedestimator)

# SupervisedEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An estimator that creates a transformer by fitting to a data set.

## Declaration

```swift
protocol SupervisedEstimator<Transformer, Annotation>
```

## Topics

### Reading and writing

- [read(from:)](supervisedestimator/read%28from_%29.md): Reads the encoded transformer from a file.
- [write(\_:to:overwrite:)](supervisedestimator/write%28__to_overwrite_%29.md): Writes the encoded transformer to a file.
- [Annotation](supervisedestimator/annotation.md): The annotation type.
- [Transformer](supervisedestimator/transformer.md): The transformer type created by this estimator.

### Appending

- [appending(\_:)](supervisedestimator/appending%28__%29.md): Composes this supervised estimator with an estimator.

### Adapting and fitting

- [adaptedAsTemporal()](supervisedestimator/adaptedastemporal%28%29.md): Deprecated. Conforms when `Annotation` conforms to `Sendable`. Exposes this supervised estimator as a temporal supervised estimator.
- [fitted(to:eventHandler:)](supervisedestimator/fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](supervisedestimator/fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples while validating with a validation sequence.
- [fitted(to:)](supervisedestimator/fitted%28to_%29.md)
- [fitted(to:validateOn:)](supervisedestimator/fitted%28to_validateon_%29.md)

### Encoding and decoding

- [encode(\_:to:)](supervisedestimator/encode%28__to_%29.md): Encodes a fitted transformer.
- [decode(from:)](supervisedestimator/decode%28from_%29.md): Decodes a previously fitted transformer.

## Relationships

### Inherited By

- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md)

### Conforming Types

- [EstimatorToSupervisedAdaptor](estimatortosupervisedadaptor.md)
- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md)
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md)
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md)
- [LinearRegressor](linearregressor.md)
- [LinearTimeSeriesForecaster](lineartimeseriesforecaster.md)
- [LogisticRegressionClassifier](logisticregressionclassifier.md)
- [MultivariateLinearRegressor](multivariatelinearregressor.md)
- [PreprocessingSupervisedEstimator](preprocessingsupervisedestimator.md)
- [PreprocessingUpdatableSupervisedEstimator](preprocessingupdatablesupervisedestimator.md)
- [TimeSeriesClassifier](timeseriesclassifier.md)
- [UpdatableEstimatorToSupervisedAdaptor](updatableestimatortosupervisedadaptor.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
- [RandomTransformer](randomtransformer.md): A transformer that takes an input and a random number generator and produces a randomized output.
- [Estimator](estimator.md): An estimator that creates a transformer by fitting to a data set.
- [TemporalEstimator](temporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of temporal features.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableEstimator](updatableestimator.md): An estimator that can be incrementally updated.
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md): A supervised estimator that can be incrementally updated.
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
