> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedestimator](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimator)

# UpdatableSupervisedEstimator

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A supervised estimator that can be incrementally updated.

## Declaration

```swift
protocol UpdatableSupervisedEstimator<Transformer, Annotation> : SupervisedEstimator
```

## Topics

### Appending

- [appending(\_:)](updatablesupervisedestimator/appending%28__%29.md): Composes this updatable estimator with an updatable estimator.

### Adapting

- [adaptedAsTemporal()](updatablesupervisedestimator/adaptedastemporal%28%29.md): Deprecated. Conforms when `Annotation` conforms to `Sendable`. Exposes this supervised estimator as a temporal supervised estimator.

### Encoding and decoding

- [encodeWithOptimizer(\_:to:)](updatablesupervisedestimator/encodewithoptimizer%28__to_%29.md): Encodes the transformer and optimizer to an encoder.
- [decodeWithOptimizer(from:)](updatablesupervisedestimator/decodewithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer with a decoder.

### Reading and writing

- [readWithOptimizer(from:)](updatablesupervisedestimator/readwithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer from a file.
- [writeWithOptimizer(\_:to:overwrite:)](updatablesupervisedestimator/writewithoptimizer%28__to_overwrite_%29.md): Writes the encoded transformer and optimizer to a file.

### Transforming

- [makeTransformer()](updatablesupervisedestimator/maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](updatablesupervisedestimator/update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:with:)](updatablesupervisedestimator/update%28__with_%29.md)

## Relationships

### Inherits From

- [SupervisedEstimator](supervisedestimator.md)

### Conforming Types

- [FullyConnectedNetworkClassifier](fullyconnectednetworkclassifier.md)
- [FullyConnectedNetworkMultiLabelClassifier](fullyconnectednetworkmultilabelclassifier.md)
- [FullyConnectedNetworkRegressor](fullyconnectednetworkregressor.md)
- [LinearRegressor](linearregressor.md)
- [LinearTimeSeriesForecaster](lineartimeseriesforecaster.md)
- [LogisticRegressionClassifier](logisticregressionclassifier.md)
- [MultivariateLinearRegressor](multivariatelinearregressor.md)
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
- [SupervisedEstimator](supervisedestimator.md): An estimator that creates a transformer by fitting to a data set.
- [SupervisedTemporalEstimator](supervisedtemporalestimator.md): Deprecated. An estimator that creates a transformer by fitting to a sequence of annotated temporal features.
- [UpdatableEstimator](updatableestimator.md): An estimator that can be incrementally updated.
- [UpdatableSupervisedTemporalEstimator](updatablesupervisedtemporalestimator.md): Deprecated. A supervised temporal estimator that can be incrementally updated.
- [UpdatableSupervisedTabularEstimator](updatablesupervisedtabularestimator.md): A supervised tabular estimator that can be incrementally updated.
- [UpdatableTemporalEstimator](updatabletemporalestimator.md): Deprecated. A temporal estimator that can be incrementally updated.
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
