> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/csvreadingerror/unsupportedcolumntype(columnindex:columnname:type:)

# CSVReadingError.unsupportedColumnType(columnIndex:columnName:type:)

**Framework:** TabularData  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

An error that indicates that a column type is not one of the types supported by CSV.

## Declaration

```swift
case unsupportedColumnType(columnIndex: Int, columnName: String, type: String)
```

## Parameters

- `columnIndex`: The index of the column with the invalid type.
- `columnName`: The name of the column with the invalid type.
- `type`: The requested type.
