> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/dropduplicates()](https://developer.apple.com/documentation/createml/mldatacolumn/dropduplicates())

# dropDuplicates()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column by removing all duplicate elements.

## Declaration

```swift
func dropDuplicates() -> MLDataColumn<Element>
```

<a id="return-value"></a>

## Return Value

A new column.

<a id="discussion"></a>

## Discussion

> **Note**

> The new column may not preserve the order of the original column.

## See Also

### Discarding elements to generate a column

- [dropMissing()](dropmissing%28%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Creates a subset of the column by removing all elements without a value.
