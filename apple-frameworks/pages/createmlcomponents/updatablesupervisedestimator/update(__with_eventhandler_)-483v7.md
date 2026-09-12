> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedestimator/update(_:with:eventhandler:)-483v7](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimator/update(_:with:eventhandler:)-483v7)

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer on an async sequence of examples.

## Declaration

```swift
func update<Input>(_ transformer: inout Self.Transformer, with input: Input, eventHandler: EventHandler? = nil) async throws where Input : AsyncSequence, Input.Element == AnnotatedFeature<Self.Transformer.Input, Self.Annotation>
```

## Parameters

- `transformer`: A transformer to update.
- `input`: An async sequence of examples used for updating the transformer.
- `eventHandler`: An event handler.

<a id="discussion"></a>

## Discussion

Note that the async sequence is collected before updating the transformer.
