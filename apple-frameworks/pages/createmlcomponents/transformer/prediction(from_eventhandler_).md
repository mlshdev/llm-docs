> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/prediction(from:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/transformer/prediction(from:eventhandler:))

# prediction(from:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Performs a prediction on a sequence of annotated inputs.

## Declaration

```swift
func prediction<S, Annotation>(from input: S, eventHandler: EventHandler? = nil) async throws -> [AnnotatedPrediction<Self.Output, Annotation>] where S : Sequence, S.Element == AnnotatedFeature<Self.Input, Annotation>
```

## Parameters

- `input`: A sequence of annotated inputs.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

Annotated predictions produced by applying the transformer to the inputs.

## See Also

### Transforming and predicting

- [callAsFunction(\_:eventHandler:)](callasfunction%28__eventhandler_%29.md): Performs the transformation on a single input.
- [prediction(from:)](prediction%28from_%29.md): Performs a prediction from a single input.
