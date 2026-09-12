> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/update(_:withwindows:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/update(_:withwindows:eventhandler:))

# update(\_:withWindows:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Updates a model with a sequence of windows.

## Declaration

```swift
func update(_ model: inout LinearTimeSeriesForecaster<Scalar>.Model, withWindows windows: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, MLShapedArray<Scalar>>>, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `model`: The model to update.
- `windows`: A sequence of annotated windows. The feature shape must be `[inputWindowSize, featureSize]` and the annotation shape must be `[forecastWindowSize, annotationSize]`.
- `eventHandler`: An event handler.

<a id="discussion"></a>

## Discussion

For faster updates, consider passing a single [AnnotatedBatch](../annotatedbatch.md) with shaped arrays that contain multiple training examples. See [update(\_:with:)](update%28__with_%29.md).

## See Also

### Updating and fitting

- [update(\_:with:)](update%28__with_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new batch of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a model to a sequence of examples with validation.
- [fitted(toWindows:eventHandler:)](fitted%28towindows_eventhandler_%29.md): Fits a model to a sequence of windows.
- [fitted(toWindows:validateOn:eventHandler:)](fitted%28towindows_validateon_eventhandler_%29.md): Fits a model to a sequence of annotated windows with validation.
