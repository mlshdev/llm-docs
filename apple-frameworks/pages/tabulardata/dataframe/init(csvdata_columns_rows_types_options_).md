> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/init(csvdata:columns:rows:types:options:)](https://developer.apple.com/documentation/tabulardata/dataframe/init(csvdata:columns:rows:types:options:))

# init(csvData:columns:rows:types:options:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a data frame from CSV data.

## Declaration

```swift
init(csvData data: Data, columns: [String]? = nil, rows: Range<Int>? = nil, types: [String : CSVType] = [:], options: CSVReadingOptions = .init()) throws
```

## Parameters

- `data`: The contents of a CSV file in a [Data](../../foundation/data.md) instance.
- `columns`: An array of column names; Set to `nil` to use every column in the CSV file.
- `rows`: A range of indices; Set to `nil` to use every row in the CSV file.
- `types`: A dictionary of column names and their CSV types. The data frame infers the types for column names that aren’t in the dictionary.
- `options`: The options that tell the data frame how to read the CSV data.

<a id="discussion"></a>

## Discussion

> **Throws**

> A `CSVReadingError` instance.

## See Also

### Creating a Data Frame from a CSV

- [init(contentsOfCSVFile:columns:rows:types:options:)](init%28contentsofcsvfile_columns_rows_types_options_%29.md): Creates a data frame from a CSV file.
- [CSVType](../csvtype.md): Represents the value types in a CSV file.
- [CSVReadingOptions](../csvreadingoptions.md): A set of CSV file-reading options.
