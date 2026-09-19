> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatatable/fillmissing(columnnamed:with:)

# fillMissing(columnNamed:with:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a modified copy of the table by filling in the missing values in the named column.

## Declaration

```swift
func fillMissing(columnNamed: String, with value: MLDataValue) -> MLDataTable
```

## Parameters

- `columnNamed`: The name of the column with missing values.
- `value`: An `MLDataValue` to put in place for every missing value in the column.

<a id="return-value"></a>

## Return Value

A new data table.
