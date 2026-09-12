> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/model/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Performs a prediction on a shaped array of features.

## Declaration

```swift
func applied(to input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) async throws -> MLShapedArray<Scalar>
```

## Parameters

- `input`: An shaped array of features. The shape must be `[N, featureSize]` where `N` is the length of the sequence, which must be at least `inputWindowSize`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A shaped array of predictions with shape `[M, forecastWindowSize, annotationSize]` where `M` is the number of predictions based on the input sequence length and the [stride](stride.md) property.

<a id="discussion"></a>

## Discussion

This method uses a sliding window to chunk the input features into [inputWindowSize](inputwindowsize.md) elements every [stride](stride.md) elements. If you want to use a different windowing strategy, use [applied(toWindow:eventHandler:)](applied%28towindow_eventhandler_%29.md).

## See Also

### Applying the model

- [applied(toWindow:eventHandler:)](applied%28towindow_eventhandler_%29.md): Performs a prediction on a window of input features.
