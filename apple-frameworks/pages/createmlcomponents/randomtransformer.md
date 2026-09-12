> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/randomtransformer](https://developer.apple.com/documentation/createmlcomponents/randomtransformer)

# RandomTransformer

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that takes an input and a random number generator and produces a randomized output.

## Declaration

```swift
protocol RandomTransformer<Input, Output>
```

## Topics

### Performing the transformation

- [applied(to:generator:eventHandler:)](randomtransformer/applied%28to_generator_eventhandler_%29.md): Performs the random transformation on a single input.
- [Input](randomtransformer/input.md): The input type.
- [Output](randomtransformer/output.md): The output type.

## Relationships

### Conforming Types

- [ApplyEachRandomly](applyeachrandomly.md)
- [ApplyRandomly](applyrandomly.md)
- [ChooseRandomly](chooserandomly.md)
- [RandomImageCropper](randomimagecropper.md)
- [ShuffleRandomly](shufflerandomly.md)
- [UniformRandomFloatingPointParameter](uniformrandomfloatingpointparameter.md)
- [UniformRandomIntegerParameter](uniformrandomintegerparameter.md)

## See Also

### Protocols

- [Transformer](transformer.md): A transformer that takes an input and produces an output.
- [TemporalTransformer](temporaltransformer.md): A transformer that takes an asynchronous input sequence of temporal features and produces an asynchronous output sequence.
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
