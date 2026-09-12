> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesforecasterbatches](https://developer.apple.com/documentation/createmlcomponents/timeseriesforecasterbatches)

# TimeSeriesForecasterBatches

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A sequence of forecaster batches on a time series shaped array.

## Declaration

```swift
struct TimeSeriesForecasterBatches<Scalar> where Scalar : MLShapedArrayScalar
```

<a id="overview"></a>

## Overview

A time-series forecaster takes a series of samples and produces a prediction of the next samples. For example the sequence `[1, 2, 3, 4]` could predict `[5, 6]`. To train a forecaster, each training batch contains the input samples along with the annotations (ground truth predictions). For example a batch could have this:

```
features = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
]
annotations = [
    [5, 6],
    [6, 7],
    [7, 8],
]
```

The shape of the features in the sequence is `[batchSize, inputWindowSize, featureSize]` and the shape of the annotations is `[batchSize, forecastWindowSize, annotationSize]`. The batch sequence will return as many feature-annotation examples as fit in the input. For example, an input sequence size of 10 with an input sample count of 4 and a prediction sample count of 2 will produce 5 examples:

```
features: [1, 2, 3, 4], annotations: [5, 6]
features: [2, 3, 4, 5], annotations: [6, 7]
features: [3, 4, 5, 6], annotations: [7, 8]
features: [4, 5, 6, 7], annotations: [8, 9]
features: [5, 6, 7, 8], annotations: [9, 10]
```

Note that 9 and 10 are never used as features because there would be no annotations for those examples.

## Topics

### Creating a time series forecaster batch

- [init(features:annotations:batchSize:inputWindowSize:forecastWindowSize:shufflesBatches:)](timeseriesforecasterbatches/init%28features_annotations_batchsize_inputwindowsize_forecastwindowsize_shufflesbatches_%29.md): Creates a batch sequence.

### Inspecting a time series forecaster batch

- [annotations](timeseriesforecasterbatches/annotations.md): The original annotations.
- [batchSize](timeseriesforecasterbatches/batchsize.md): The batch size.
- [features](timeseriesforecasterbatches/features.md): The original features.
- [forecastWindowSize](timeseriesforecasterbatches/forecastwindowsize.md): The prediction sample count.
- [inputWindowSize](timeseriesforecasterbatches/inputwindowsize.md): The input sample count.
- [shufflesBatches](timeseriesforecasterbatches/shufflesbatches.md): A Boolean value indicating whether to shuffle the batches.

### Default Implementations

- [Sequence Implementations](timeseriesforecasterbatches/sequence-implementations.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Time-based components

- [Creating a time-series classifier](creating-a-time-series-classifier.md): Train a machine learning model to predict the class label of time-series signals.
- [Creating a time-series forecaster](creating-a-time-series-forecaster.md): Forecast future data points by training a machine learning model using historical data.
- [DateFeatures](datefeatures.md): A set of date and time features.
- [DateFeatureExtractor](datefeatureextractor.md): A time and date feature extractor.
- [LinearTimeSeriesForecaster](lineartimeseriesforecaster.md): A time-series forecasting estimator.
- [LinearTimeSeriesForecasterConfiguration](lineartimeseriesforecasterconfiguration.md): The configuration for a linear time-series forecaster.
- [TimeSeriesForecasterAnnotatedWindows](timeseriesforecasterannotatedwindows.md): A sequence of forecasting windows on a time series shaped array.
- [TemporalFeature](temporalfeature.md): A temporal feature contains a segment identifier and a feature value.
- [TemporalSequence](temporalsequence.md): Async sequence for temporal features.
- [TemporalSegmentIdentifier](temporalsegmentidentifier.md): Uniquely identifiers a segment of a temporal sequence.
- [SlidingWindows](slidingwindows.md): A sequence of windows on a time series shaped array.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
