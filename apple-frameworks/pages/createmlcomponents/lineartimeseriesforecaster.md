> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster)

# LinearTimeSeriesForecaster

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A time-series forecasting estimator.

## Declaration

```swift
struct LinearTimeSeriesForecaster<Scalar> where Scalar : MLShapedArrayScalar, Scalar : BinaryFloatingPoint
```

<a id="overview"></a>

## Overview

> **Note**

> Only `Float` and `Double` are currently supported as the Scalar type. You may get faster training when using `Float`.

## Topics

### Creating a linear time series forecaster

- [init(configuration:)](lineartimeseriesforecaster/init%28configuration_%29.md): Creates a linear time-series forecaster.

### Inspecting a linear time series forecaster

- [configuration](lineartimeseriesforecaster/configuration-swift.property.md): The configuration.
- [forecastWindowSize](lineartimeseriesforecaster/forecastwindowsize.md): The number of predicted samples.
- [inputWindowSize](lineartimeseriesforecaster/inputwindowsize.md): The number of input samples.

### Updating and fitting

- [update(\_:with:)](lineartimeseriesforecaster/update%28__with_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new batch of examples.
- [update(\_:withWindows:eventHandler:)](lineartimeseriesforecaster/update%28__withwindows_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a sequence of windows.
- [fitted(to:eventHandler:)](lineartimeseriesforecaster/fitted%28to_eventhandler_%29.md): Fits a model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](lineartimeseriesforecaster/fitted%28to_validateon_eventhandler_%29.md): Fits a model to a sequence of examples with validation.
- [fitted(toWindows:eventHandler:)](lineartimeseriesforecaster/fitted%28towindows_eventhandler_%29.md): Fits a model to a sequence of windows.
- [fitted(toWindows:validateOn:eventHandler:)](lineartimeseriesforecaster/fitted%28towindows_validateon_eventhandler_%29.md): Fits a model to a sequence of annotated windows with validation.

### Supporting types

- [LinearTimeSeriesForecaster.Configuration](lineartimeseriesforecaster/configuration-swift.typealias.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`.
- [LinearTimeSeriesForecaster.Model](lineartimeseriesforecaster/model.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. A linear time-series forecasting model.

### Default Implementations

- [SupervisedEstimator Implementations](lineartimeseriesforecaster/supervisedestimator-implementations.md)
- [UpdatableSupervisedEstimator Implementations](lineartimeseriesforecaster/updatablesupervisedestimator-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SupervisedEstimator](supervisedestimator.md)
- [UpdatableSupervisedEstimator](updatablesupervisedestimator.md)

## See Also

### Time-based components

- [Creating a time-series classifier](creating-a-time-series-classifier.md): Train a machine learning model to predict the class label of time-series signals.
- [Creating a time-series forecaster](creating-a-time-series-forecaster.md): Forecast future data points by training a machine learning model using historical data.
- [DateFeatures](datefeatures.md): A set of date and time features.
- [DateFeatureExtractor](datefeatureextractor.md): A time and date feature extractor.
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
- [TemporalFileSegment](temporalfilesegment.md): A URL and a time range identifying a specific segment of a time-based (temporal) file.
