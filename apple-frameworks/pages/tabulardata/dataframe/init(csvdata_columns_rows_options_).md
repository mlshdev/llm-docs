> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/init(csvdata:columns:rows:options:)](https://developer.apple.com/documentation/tabulardata/dataframe/init(csvdata:columns:rows:options:))

# init(csvData:columns:rows:options:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Creates a data frame from CSV data.

## Declaration

```swift
init<each T>(csvData data: Data, columns: repeat ColumnID<each T>, rows: Range<Int>? = nil, options: CSVReadingOptions = .init()) throws
```

## Parameters

- `data`: The contents of a CSV file.
- `columns`: The column identifiers.
- `rows`: A range of indices; Set to `nil` to use every row in the CSV file.
- `options`: The options that tell the data frame how to read the CSV data.
