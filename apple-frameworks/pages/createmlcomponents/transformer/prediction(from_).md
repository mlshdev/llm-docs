> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/transformer/prediction(from:)](https://developer.apple.com/documentation/createmlcomponents/transformer/prediction(from:))

# prediction(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs a prediction from a single input.

## Declaration

```swift
func prediction<Label>(from input: Self.Input) async throws -> ClassificationDistribution<Label> where Label : Hashable, Self.Output == ClassificationDistribution<Label>
```

## Parameters

- `input`: The input feature.

<a id="return-value"></a>

## Return Value

A classification array.

## See Also

### Transforming and predicting

- [callAsFunction(\_:eventHandler:)](callasfunction%28__eventhandler_%29.md): Performs the transformation on a single input.
- [prediction(from:eventHandler:)](prediction%28from_eventhandler_%29.md): Performs a prediction on a sequence of annotated inputs.
