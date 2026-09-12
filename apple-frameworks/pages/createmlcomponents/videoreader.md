> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader](https://developer.apple.com/documentation/createmlcomponents/videoreader)

# VideoReader

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A video file reader.

## Declaration

```swift
struct VideoReader
```

## Topics

### Creating the reader

- [init()](videoreader/init%28%29.md): Creates a video reader.

### Reading

- [read(\_:)](videoreader/read%28__%29.md): Reads a sequence of annotated files as an array of annotated async sequences of video frames.
- [readCamera(configuration:)](videoreader/readcamera%28configuration_%29.md): Reads an async sequence of video frames captured with a video camera.
- [read(contentsOf:)](videoreader/read%28contentsof_%29.md): Reads a video file as an async sequence of video frames.
- [VideoReader.AsyncFrames](videoreader/asyncframes.md): An async sequence of video frames.
- [VideoReader.CameraAsyncBuffers](videoreader/cameraasyncbuffers.md): An async sequence of video frames.
- [VideoReader.CameraConfiguration](videoreader/cameraconfiguration.md): The configuration of the camera to pass to the `readCamera` method.

### Applying

- [applied(to:eventHandler:)](videoreader/applied%28to_eventhandler_%29.md): Reads a video file as an async sequence of video frames.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

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
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
