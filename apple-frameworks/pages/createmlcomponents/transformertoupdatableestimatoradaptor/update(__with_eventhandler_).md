> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/transformertoupdatableestimatoradaptor/update(_:with:eventhandler:)

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Does nothing since this estimator uses a pre-defined transformer.

## Declaration

```swift
func update<InputSequence>(_ transformer: inout Transformer, with input: InputSequence, eventHandler: EventHandler? = nil) async throws where InputSequence : Sequence, Transformer.Input == InputSequence.Element
```

## See Also

### Fitting and updating

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Returns the pre-defined transformer.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
