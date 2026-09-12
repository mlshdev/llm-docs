> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/dropduplicates()](https://developer.apple.com/documentation/createml/mldatatable/dropduplicates())

# dropDuplicates()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the table by removing all duplicate rows.

## Declaration

```swift
func dropDuplicates() -> MLDataTable
```

<a id="return-value"></a>

## Return Value

A new data table.

<a id="discussion"></a>

## Discussion

> **Note**

> The order of the rows may not be preserved.

## See Also

### Discarding rows

- [dropMissing()](dropmissing%28%29.md): Creates a subset of the table by removing any row missing one or more values.
- [exclude(\_:of:)](exclude%28__of_%29.md): Creates a subset of the table by excluding the rows that contain any of the given values in the given column.
- [randomSample(by:seed:)](randomsample%28by_seed_%29.md): Creates a subset of the table by randomly selecting the given proportion of rows.
