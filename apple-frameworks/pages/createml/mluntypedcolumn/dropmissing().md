> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mluntypedcolumn/dropmissing()

# dropMissing()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column by removing all elements without a value.

## Declaration

```swift
func dropMissing() -> MLUntypedColumn
```

<a id="return-value"></a>

## Return Value

A new column.

## See Also

### Discarding elements to generate an untyped column

- [dropDuplicates()](dropduplicates%28%29.md): Creates a subset of the column by removing all duplicate elements.
