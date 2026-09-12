> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/prediction(from:)](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/prediction(from:))

# prediction(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs a prediction on a single input.

## Declaration

```swift
func prediction<S, Label>(from input: S) async throws -> Self.OutputSequence where S : TemporalSequence, Label : Hashable, Self.Input == S.Feature, Self.Output == ClassificationDistribution<Label>
```

## Parameters

- `input`: The input feature.

<a id="return-value"></a>

## Return Value

A classification array.

## See Also

### Transforming and predicting

- [callAsFunction(\_:eventHandler:)](callasfunction%28__eventhandler_%29.md): Performs the transformation on an input sequence.
- [callAsFunction(to:eventHandler:)](callasfunction%28to_eventhandler_%29.md): Performs the transformation on a sequence of inputs.
