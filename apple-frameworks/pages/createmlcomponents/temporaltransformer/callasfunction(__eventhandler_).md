> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/callasfunction(_:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/callasfunction(_:eventhandler:))

# callAsFunction(\_:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the transformation on an input sequence.

## Declaration

```swift
func callAsFunction<S>(_ input: S, eventHandler: EventHandler? = nil) async throws -> Self.OutputSequence where S : TemporalSequence, Self.Input == S.Feature
```

## Parameters

- `input`: The input temporal sequence.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence produced by applying the transformation to the input.

## See Also

### Transforming and predicting

- [callAsFunction(to:eventHandler:)](callasfunction%28to_eventhandler_%29.md): Performs the transformation on a sequence of inputs.
- [prediction(from:)](prediction%28from_%29.md): Performs a prediction on a single input.
