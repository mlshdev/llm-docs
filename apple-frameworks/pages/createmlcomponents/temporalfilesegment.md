> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalfilesegment](https://developer.apple.com/documentation/createmlcomponents/temporalfilesegment)

# TemporalFileSegment

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A URL and a time range identifying a specific segment of a time-based (temporal) file.

## Declaration

```swift
struct TemporalFileSegment
```

## Topics

### Creating a file segment

- [init(url:range:)](temporalfilesegment/init%28url_range_%29.md): Creates a TemporalFileSegment.

### Getting the properties

- [range](temporalfilesegment/range.md): The time range in seconds.
- [url](temporalfilesegment/url.md): The file URL.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [SlidingWindows](slidingwindows.md): A sequence of windows on a time series shaped array.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
