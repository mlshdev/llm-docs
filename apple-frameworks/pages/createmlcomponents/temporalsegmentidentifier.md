> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalsegmentidentifier](https://developer.apple.com/documentation/createmlcomponents/temporalsegmentidentifier)

# TemporalSegmentIdentifier

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Uniquely identifiers a segment of a temporal sequence.

## Declaration

```swift
struct TemporalSegmentIdentifier
```

## Topics

### Creating a segment identifier

- [init(source:range:timescale:)](temporalsegmentidentifier/init%28source_range_timescale_%29.md): Creates a temporal-segment identifier.

### Getting the properties

- [durationInSeconds](temporalsegmentidentifier/durationinseconds.md): The segment duration in seconds.
- [range](temporalsegmentidentifier/range.md): The segment’s timestamp range.
- [rangeInSeconds](temporalsegmentidentifier/rangeinseconds.md): The time range in seconds.
- [source](temporalsegmentidentifier/source.md): The segment source. For files use the full path or URL of the file.
- [timescale](temporalsegmentidentifier/timescale.md): The identifier’s timescale is the number of uniquely identifiable timestamps in a second.

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
- [SlidingWindows](slidingwindows.md): A sequence of windows on a time series shaped array.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
