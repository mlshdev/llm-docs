> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Updates a model with a sequence of features.

## Declaration

```swift
func update(_ model: inout LinearTimeSeriesForecaster<Scalar>.Model, with input: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, MLShapedArray<Scalar>>>, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `model`: The model to update.
- `input`: A sequence of annotated features. The feature shape must be `[featureSize]` and the annotation shape must be `[annotationSize]`.
- `eventHandler`: An event handler.

<a id="discussion"></a>

## Discussion

This method uses a sliding window to chunk the input features into features of [inputWindowSize](inputwindowsize.md) elements and annotations of [forecastWindowSize](forecastwindowsize.md) elements. If you want to use a different windowing strategy, use [update(\_:withWindows:eventHandler:)](update%28__withwindows_eventhandler_%29.md).
