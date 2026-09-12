> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer)

# TemporalTransformer

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output  sequence.

## Declaration

```swift
protocol TemporalTransformer<Input, Output>
```

<a id="overview"></a>

## Overview

A temporal transformer, unlike a regular transformer, can accumulate multiple inputs before producing an output. For example, an audio transformer can accumulate audio buffers until the desired length is reached before producing an output.

## Topics

### Applying and adapting

- [applied(to:eventHandler:)](temporaltransformer/applied%28to_eventhandler_%29.md): Performs the transformation on an input sequence.
- [adaptedAsEstimator()](temporaltransformer/adaptedasestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [adaptedAsUpdatableEstimator()](temporaltransformer/adaptedasupdatableestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [Input](temporaltransformer/input.md): The input type.
- [Output](temporaltransformer/output.md): The output type.
- [OutputSequence](temporaltransformer/outputsequence.md): The output async sequence type.

### Appending

- [appending(\_:)](temporaltransformer/appending%28__%29.md): Composes this temporal transformer with another temporal transformer.

### Transforming and predicting

- [callAsFunction(\_:eventHandler:)](temporaltransformer/callasfunction%28__eventhandler_%29.md): Performs the transformation on an input sequence.
- [callAsFunction(to:eventHandler:)](temporaltransformer/callasfunction%28to_eventhandler_%29.md): Performs the transformation on a sequence of inputs.
- [prediction(from:)](temporaltransformer/prediction%28from_%29.md): Performs a prediction on a single input.

### Exporting

- [export(to:)](temporaltransformer/export%28to_%29.md): Exports this temporal transformer as a CoreML model.
- [export(to:metadata:)](temporaltransformer/export%28to_metadata_%29.md): Exports this temporal transformer as a CoreML model with user-supplied metadata.

## Relationships

### Conforming Types

- [AudioFeaturePrint](audiofeatureprint.md)
- [ComposedTemporalTransformer](composedtemporaltransformer.md)
- [Downsampler](downsampler.md)
- [HumanBodyActionCounter](humanbodyactioncounter.md)
- [LinearTimeSeriesForecaster.Model](lineartimeseriesforecaster/model.md)
- [SlidingWindowTransformer](slidingwindowtransformer.md)
- [TemporalAdaptor](temporaladaptor.md)
- [TimeSeriesClassifier.Model](timeseriesclassifier/model.md)
- [TransformerToTemporalAdaptor](transformertotemporaladaptor.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
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
- [UpdatableTabularEstimator](updatabletabularestimator.md): A tabular estimator that can be incrementally updated.
