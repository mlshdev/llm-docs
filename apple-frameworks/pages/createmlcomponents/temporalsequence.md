> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalsequence](https://developer.apple.com/documentation/createmlcomponents/temporalsequence)

# TemporalSequence

**Framework:** Create ML Components  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Async sequence for temporal features.

## Declaration

```swift
protocol TemporalSequence<Feature> : AsyncSequence
```

## Topics

### Getting the sequence count

- [count](temporalsequence/count.md): The number of elements in the sequence if available, calculated nondestructively.

### Associating the types

- [Feature](temporalsequence/feature.md): The feature type.

## Relationships

### Inherits From

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

### Conforming Types

- [AnyTemporalSequence](anytemporalsequence.md)
- [AudioFeaturePrint.FeatureSequence](audiofeatureprint/featuresequence.md)
- [AudioReader.AsyncBuffers](audioreader/asyncbuffers.md)
- [AudioReader.MicrophoneAsyncBuffers](audioreader/microphoneasyncbuffers.md)
- [Downsampler.DownStreamSequence](downsampler/downstreamsequence.md)
- [HumanBodyActionCounter.CumulativeSumSequence](humanbodyactioncounter/cumulativesumsequence.md)
- [PreprocessedFeatureSequence](preprocessedfeaturesequence.md)
- [SlidingWindowTransformer.WindowSequence](slidingwindowtransformer/windowsequence.md)
- [VideoReader.AsyncFrames](videoreader/asyncframes.md)
- [VideoReader.CameraAsyncBuffers](videoreader/cameraasyncbuffers.md)

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
- [TemporalSegmentIdentifier](temporalsegmentidentifier.md): Uniquely identifiers a segment of a temporal sequence.
- [SlidingWindows](slidingwindows.md): A sequence of windows on a time series shaped array.
- [SlidingWindowTransformer](slidingwindowtransformer.md): A temporal transformer that groups input elements.
- [Downsampler](downsampler.md): A temporal transformer that down samples the input stream.
- [VideoReader](videoreader.md): A video file reader.
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
