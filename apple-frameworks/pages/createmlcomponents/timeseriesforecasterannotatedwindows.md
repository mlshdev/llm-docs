> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesforecasterannotatedwindows](https://developer.apple.com/documentation/createmlcomponents/timeseriesforecasterannotatedwindows)

# TimeSeriesForecasterAnnotatedWindows

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A sequence of forecasting windows on a time series shaped array.

## Declaration

```swift
struct TimeSeriesForecasterAnnotatedWindows<Scalar> where Scalar : MLShapedArrayScalar
```

<a id="overview"></a>

## Overview

A time-series forecaster takes a series of samples and produces a prediction of the next samples. For example the sequence `[1, 2, 3, 4]` could predict `[5, 6]`.

The shape of each feature in the sequence is `[inputWindowSize, featureSize]` and the shape of each annotation is `[forecastWindowSize, annotationSize]`. The sequence will return as many feature-annotation examples as fit in the input. For example an input sequence of size of 10 with an input sample count of 4, a prediction sample count of 2, and a stride of 1 will produce 5 annotated windows:

```
feature: [1, 2, 3, 4], annotation: [5, 6]
feature: [2, 3, 4, 5], annotation: [6, 7]
feature: [3, 4, 5, 6], annotation: [7, 8]
feature: [4, 5, 6, 7], annotation: [8, 9]
feature: [5, 6, 7, 8], annotation: [9, 10]
```

Note that 9 and 10 are never used as features because there would be no annotations for those samples.

## Topics

### Creating a time series forecaster annotated window

- [init(features:annotations:inputWindowSize:forecastWindowSize:stride:shufflesElements:)](timeseriesforecasterannotatedwindows/init%28features_annotations_inputwindowsize_forecastwindowsize_stride_shuffleselements_%29.md): Creates a batch sequence.

### Inspecting a time series forecaster annotated window

- [annotations](timeseriesforecasterannotatedwindows/annotations.md): The original annotations.
- [features](timeseriesforecasterannotatedwindows/features.md): The original features.
- [forecastWindowSize](timeseriesforecasterannotatedwindows/forecastwindowsize.md): The prediction sample count.
- [inputWindowSize](timeseriesforecasterannotatedwindows/inputwindowsize.md): The input sample count.
- [shufflesElements](timeseriesforecasterannotatedwindows/shuffleselements.md): A Boolean value indicating whether to shuffle the elements.
- [stride](timeseriesforecasterannotatedwindows/stride.md): The number of samples between windows.

### Default Implementations

- [Sequence Implementations](timeseriesforecasterannotatedwindows/sequence-implementations.md)

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
- [TimeSeriesForecasterBatches](timeseriesforecasterbatches.md): A sequence of forecaster batches on a time series shaped array.
- [TemporalFeature](temporalfeature.md): A temporal feature contains a segment identifier and a feature value.
- [TemporalSequence](temporalsequence.md): Async sequence for temporal features.
- [TemporalSegmentIdentifier](temporalsegmentidentifier.md): Uniquely identifiers a segment of a temporal sequence.
- [SlidingWindows](slidingwindows.md): A sequence of windows on a time series shaped array.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
