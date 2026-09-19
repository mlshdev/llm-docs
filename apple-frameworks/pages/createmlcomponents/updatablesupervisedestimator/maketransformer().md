> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimator/maketransformer()

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a default-initialized transformer suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> Self.Transformer
```

## See Also

### Transforming

- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:with:)](update%28__with_%29.md)
