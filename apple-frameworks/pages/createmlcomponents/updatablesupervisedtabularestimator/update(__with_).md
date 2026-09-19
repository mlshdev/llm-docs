> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtabularestimator/update(_:with:)

# update(\_:with:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
func update(_ transformer: inout Self.Transformer, with input: DataFrame) async throws
```

## See Also

### Transforming

- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
