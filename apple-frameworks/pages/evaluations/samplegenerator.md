> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/samplegenerator](https://developer.apple.com/documentation/evaluations/samplegenerator)

# SampleGenerator

**Framework:** Evaluations  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An actor that generates evaluation samples using a language model.

## Declaration

```swift
actor SampleGenerator<SampleType> where SampleType : ModelSampleProtocol
```

## Mentioned In

- [Designing datasets to test your feature](designing-evaluation-datasets.md)
- [Generating synthetic datasets](generating-synthetic-evaluation-datasets.md)
- [Designing effective evaluations](designing-effective-evaluations.md)

<a id="overview"></a>

## Overview

To produce new samples, create an instance, configure its properties, and call [run()](samplegenerator/run%28%29.md). After iteration completes, access [samples](samplegenerator/samples.md) for the full dataset, or [invalidSamples](samplegenerator/invalidsamples.md) for any samples the validator rejected.

## Topics

### Creating a generator

- [init(\_:samples:targetCount:sessionProvider:samplingStrategy:validator:)](samplegenerator/init%28__samples_targetcount_sessionprovider_samplingstrategy_validator_%29-2804x.md): Creates a generator for custom, generable evaluation samples.
- [init(\_:samples:targetCount:sessionProvider:samplingStrategy:validator:)](samplegenerator/init%28__samples_targetcount_sessionprovider_samplingstrategy_validator_%29-8t01x.md): Creates a generator for sample values with a generable-expected value type.

### Configuring generation

- [samplingStrategy](samplegenerator/samplingstrategy-swift.property.md): The strategy for selecting existing samples as examples in the prompt.
- [validator](samplegenerator/validator.md): An optional closure that decides whether a generated sample is valid.
- [SampleGenerator.SamplingStrategy](samplegenerator/samplingstrategy-swift.enum.md): The values that define how the generator selects existing samples as examples in the generation prompt.

### Running generation

- [run()](samplegenerator/run%28%29.md): Runs the generator and returns a stream of newly synthesized samples.

### Accessing results

- [samples](samplegenerator/samples.md): All initial and generated samples from the most recent run.
- [invalidSamples](samplegenerator/invalidsamples.md): Samples that the validator rejected during the most recent run.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Datasets

- [Generating synthetic datasets](generating-synthetic-evaluation-datasets.md): Expand a small set of manually written evaluation samples into a larger dataset.
- [Designing datasets to test your feature](designing-evaluation-datasets.md): Build categorized test datasets that reflect the full range of real-world use of your feature.
- [ModelSample](modelsample.md): A general-purpose language model evaluation sample.
- [Loader](loader.md): A protocol for types that supply a dataset for evaluation.
