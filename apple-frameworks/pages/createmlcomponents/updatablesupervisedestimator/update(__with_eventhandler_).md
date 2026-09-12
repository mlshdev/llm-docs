> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedestimator/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimator/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer with a new sequence of examples.

## Declaration

```swift
func update<InputSequence>(_ transformer: inout Self.Transformer, with input: InputSequence, eventHandler: EventHandler?) async throws where InputSequence : Sequence, InputSequence.Element == AnnotatedFeature<Self.Transformer.Input, Self.Annotation>
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A sequence of examples.
- `eventHandler`: An event handler.

## Mentioned In

- [Augmenting images to expand your training data](../augmenting-images-to-expand-your-training-data.md)

## Default Implementations

### UpdatableSupervisedEstimator Implementations

- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29-483v7.md): Updates a transformer on an async sequence of examples.

## See Also

### Transforming

- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:)](update%28__with_%29.md)
