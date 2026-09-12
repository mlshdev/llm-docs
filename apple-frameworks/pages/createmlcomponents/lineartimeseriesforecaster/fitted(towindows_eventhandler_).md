> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/fitted(towindows:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/fitted(towindows:eventhandler:))

# fitted(toWindows:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Fits a model to a sequence of windows.

## Declaration

```swift
func fitted(toWindows input: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, MLShapedArray<Scalar>>>, eventHandler: EventHandler? = nil) async throws -> LinearTimeSeriesForecaster<Scalar>.Model
```

## Parameters

- `input`: A sequence of annotated windows. Each window’s shape should be `[inputWindowSize, featureSize]` and each annotation’s shape should be `[forecastWindowSize, annotationSize]`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted model.

## See Also

### Updating and fitting

- [update(\_:with:)](update%28__with_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a new batch of examples.
- [update(\_:withWindows:eventHandler:)](update%28__withwindows_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a sequence of windows.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a model to a sequence of examples with validation.
- [fitted(toWindows:validateOn:eventHandler:)](fitted%28towindows_validateon_eventhandler_%29.md): Fits a model to a sequence of annotated windows with validation.
