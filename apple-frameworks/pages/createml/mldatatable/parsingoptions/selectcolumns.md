> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatatable/parsingoptions/selectcolumns

# selectColumns

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The list of column names to import from a CSV file; otherwise `nil` to import all columns.

## Declaration

```swift
var selectColumns: [String]?
```

## See Also

### Limiting rows and columns

- [maxRows](maxrows.md): The maximum number of rows to import form a CSV file; otherwise `nil` to import all rows.
