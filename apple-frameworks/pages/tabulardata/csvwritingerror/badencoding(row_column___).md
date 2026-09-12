> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvwritingerror/badencoding(row:column:_:)](https://developer.apple.com/documentation/tabulardata/csvwritingerror/badencoding(row:column:_:))

# CSVWritingError.badEncoding(row:column:\_:)

**Framework:** TabularData  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that indicates CSV data contains an invalid UTF-8 byte sequence.

## Declaration

```swift
case badEncoding(row: Int, column: String, Data)
```

## Parameters

- `row`: The index of the row that contains the invalid sequence.
- `column`: The index of the column that contains the invalid sequence.
- `data`: The data that contains the invalid sequence.

## See Also

### Getting Error Information

- [column](column.md): The index of the column that contains the error.
- [row](row.md): The index of the row that contains the error.
