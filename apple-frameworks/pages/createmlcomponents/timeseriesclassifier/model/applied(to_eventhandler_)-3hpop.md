> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier/model/applied(to:eventhandler:)-3hpop](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/model/applied(to:eventhandler:)-3hpop)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Performs the transformation on an input sequence.

## Declaration

```swift
func applied(to input: some TemporalSequence<MLShapedArray<Scalar>>, eventHandler: EventHandler? = nil) async throws -> AnyTemporalSequence<ClassificationDistribution<Label>>
```

## Parameters

- `input`: A temporal sequence of features. Each feature’s shape must be `[featureSize]`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An temporal sequence of predictions. Each prediction’s shape is `[forecastWindowSize, annotationSize]`.
