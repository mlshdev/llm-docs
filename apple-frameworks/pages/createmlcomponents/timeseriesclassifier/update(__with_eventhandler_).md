> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Updates a model with a new batch of examples.

## Declaration

```swift
func update(_ transformer: inout TimeSeriesClassifier<Scalar, Label>.Model, with input: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, Label>>, eventHandler: EventHandler? = nil) async throws
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A sequence of annotated features for updating the transformer. Each feature’s shape should be `[sequenceLength, featureSize]`.
- `eventHandler`: An event handler.
