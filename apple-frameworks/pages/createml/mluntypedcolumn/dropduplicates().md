> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/dropduplicates()](https://developer.apple.com/documentation/createml/mluntypedcolumn/dropduplicates())

# dropDuplicates()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column by removing all duplicate elements.

## Declaration

```swift
func dropDuplicates() -> MLUntypedColumn
```

<a id="return-value"></a>

## Return Value

A new column.

<a id="discussion"></a>

## Discussion

> **Note**

> The new column may not preserve the order of the original column.

## See Also

### Discarding elements to generate an untyped column

- [dropMissing()](dropmissing%28%29.md): Creates a subset of the column by removing all elements without a value.
