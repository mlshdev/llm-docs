> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/model/applied(towindow:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model/applied(towindow:eventhandler:))

# applied(toWindow:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Performs a prediction on a window of input features.

## Declaration

```swift
func applied(toWindow input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) async throws -> MLShapedArray<Scalar>
```

## Parameters

- `input`: An window of input features with shape `[inputWindowSize, featureSize]`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A shaped array of predictions with shape `[forecastWindowSize, annotationSize]`.

## See Also

### Applying the model

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs a prediction on a shaped array of features.
