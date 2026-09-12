> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/randomsample(by:seed:)](https://developer.apple.com/documentation/createml/mldatatable/randomsample(by:seed:))

# randomSample(by:seed:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the table by randomly selecting the given proportion of rows.

## Declaration

```swift
func randomSample(by proportion: Double, seed: Int = 42) -> MLDataTable
```

## Parameters

- `proportion`: The fraction of rows to sample from the original table. The value must be in the range `(0.0, 1.0)`.
- `seed`: A number that seeds a random number generator.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Discarding rows

- [dropMissing()](dropmissing%28%29.md): Creates a subset of the table by removing any row missing one or more values.
- [dropDuplicates()](dropduplicates%28%29.md): Creates a subset of the table by removing all duplicate rows.
- [exclude(\_:of:)](exclude%28__of_%29.md): Creates a subset of the table by excluding the rows that contain any of the given values in the given column.
