> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/columnselector/maketransformer()

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a default-initialized transformer suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> ColumnSelectorTransformer<Estimator.Transformer, UnwrappedInput>
```
