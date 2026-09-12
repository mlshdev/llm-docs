> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecasterconfiguration](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecasterconfiguration)

# LinearTimeSeriesForecasterConfiguration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The configuration for a linear time-series forecaster.

## Declaration

```swift
struct LinearTimeSeriesForecasterConfiguration
```

## Topics

### Creating a linear time series forecasater configuration

- [init(inputWindowSize:forecastWindowSize:)](lineartimeseriesforecasterconfiguration/init%28inputwindowsize_forecastwindowsize_%29.md): Creates a configuration.

### Inspecting a linear time series forecasater configuration

- [batchSize](lineartimeseriesforecasterconfiguration/batchsize.md): The number of examples in each training batch.
- [earlyStoppingIterationCount](lineartimeseriesforecasterconfiguration/earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](lineartimeseriesforecasterconfiguration/earlystoppingtolerance.md): The early-stopping tolerance.
- [forecastWindowSize](lineartimeseriesforecasterconfiguration/forecastwindowsize.md): The number of predicted samples.
- [inputWindowSize](lineartimeseriesforecasterconfiguration/inputwindowsize.md): The number of input samples.
- [learningRate](lineartimeseriesforecasterconfiguration/learningrate.md): The starting learning rate.
- [maximumIterationCount](lineartimeseriesforecasterconfiguration/maximumiterationcount.md): The maximum number of allowed passes through the data.
- [randomSeed](lineartimeseriesforecasterconfiguration/randomseed.md): A seed to generate reproducible results from random operations.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [TimeSeriesForecasterBatches](timeseriesforecasterbatches.md): A sequence of forecaster batches on a time series shaped array.
- [TimeSeriesForecasterAnnotatedWindows](timeseriesforecasterannotatedwindows.md): A sequence of forecasting windows on a time series shaped array.
- [TemporalFeature](temporalfeature.md): A temporal feature contains a segment identifier and a feature value.
- [TemporalSequence](temporalsequence.md): Async sequence for temporal features.
- [TemporalSegmentIdentifier](temporalsegmentidentifier.md): Uniquely identifiers a segment of a temporal sequence.
- [SlidingWindows](slidingwindows.md): A sequence of windows on a time series shaped array.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
