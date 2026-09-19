> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model/applied(to:eventhandler:)-3h2wx

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Performs the transformation on an input sequence.

## Declaration

```swift
func applied(to input: some TemporalSequence<MLShapedArray<Scalar>>, eventHandler: EventHandler? = nil) async throws -> AnyTemporalSequence<MLShapedArray<Scalar>>
```

## Parameters

- `input`: A temporal sequence of features. Each feature’s shape must be `[featureSize]`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An temporal sequence of predictions. Each prediction’s shape is `[forecastWindowSize, annotationSize]`.
