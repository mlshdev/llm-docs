> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifier/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Updates a fully-connected network multi-label classifier model with a new sequence of examples.

## Declaration

```swift
func update<InputSequence>(_ transformer: inout FullyConnectedNetworkMultiLabelClassifierModel<Scalar, Label>, with input: InputSequence, eventHandler: EventHandler? = nil) async throws where InputSequence : Sequence, InputSequence.Element == AnnotatedFeature<MLShapedArray<Scalar>, Set<Label>>
```

## Parameters

- `transformer`: A fully-connected network multi-label classifier model to update.
- `input`: A sequence of examples.
- `eventHandler`: An event handler.
