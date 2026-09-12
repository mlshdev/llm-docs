> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesforecasterbatches/annotations](https://developer.apple.com/documentation/createmlcomponents/timeseriesforecasterbatches/annotations)

# annotations

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The original annotations.

## Declaration

```swift
let annotations: MLShapedArray<Scalar>
```

## See Also

### Inspecting a time series forecaster batch

- [batchSize](batchsize.md): The batch size.
- [features](features.md): The original features.
- [forecastWindowSize](forecastwindowsize.md): The prediction sample count.
- [inputWindowSize](inputwindowsize.md): The input sample count.
- [shufflesBatches](shufflesbatches.md): A Boolean value indicating whether to shuffle the batches.
