> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindows](https://developer.apple.com/documentation/createmlcomponents/slidingwindows)

# SlidingWindows

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A sequence of windows on a time series shaped array.

## Declaration

```swift
struct SlidingWindows<Scalar> where Scalar : MLShapedArrayScalar
```

<a id="overview"></a>

## Overview

The shape of each window in the sequence is `[length, featureSize]`. The sequence will return as many windows as fit in the input. For example, an input shaped array of shape `[8, 1]` using `stride` of 1 and `length` of 4 will produce 5 examples:

```
[[1], [2], [3], [4]]
[[2], [3], [4], [5]]
[[3], [4], [5], [6]]
[[4], [5], [6], [7]]
[[5], [6], [7], [8]]
```

## Topics

### Creating a sliding window

- [init(input:length:stride:)](slidingwindows/init%28input_length_stride_%29.md): Creates a sliding windows sequence.

### Inspecting the sliding window

- [endIndex](slidingwindows/endindex.md): The collection’s “past the end” position–that is, the position one greater than the last valid subscript argument.
- [input](slidingwindows/input.md): The input shaped array.
- [length](slidingwindows/length.md): The number samples in each window.
- [startIndex](slidingwindows/startindex.md): The position of the first window.
- [stride](slidingwindows/stride.md): The number of samples between windows.

### Getting the index

- [index(\_:offsetBy:)](slidingwindows/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(after:)](slidingwindows/index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](slidingwindows/index%28before_%29.md): Returns the position immediately before the given index.

### Getting the subscript

- [subscript(\_:)](slidingwindows/subscript%28__%29.md): Accesses a contiguous range of windows.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
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
- [TimeSeriesForecasterAnnotatedWindows](timeseriesforecasterannotatedwindows.md): A sequence of forecasting windows on a time series shaped array.
- [TemporalFeature](temporalfeature.md): A temporal feature contains a segment identifier and a feature value.
- [TemporalSequence](temporalsequence.md): Async sequence for temporal features.
- [TemporalSegmentIdentifier](temporalsegmentidentifier.md): Uniquely identifiers a segment of a temporal sequence.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
