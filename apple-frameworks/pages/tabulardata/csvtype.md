> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvtype](https://developer.apple.com/documentation/tabulardata/csvtype)

# CSVType

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Represents the value types in a CSV file.

## Declaration

```swift
enum CSVType
```

## Topics

### Enumeration Cases

- [CSVType.boolean](csvtype/boolean.md): A Boolean type.
- [CSVType.data](csvtype/data.md): A binary data type.
- [CSVType.date](csvtype/date.md): A date type.
- [CSVType.double](csvtype/double.md): A double-precision floating-point type.
- [CSVType.float](csvtype/float.md): A single-precision floating-point type.
- [CSVType.integer](csvtype/integer.md): An integer type.
- [CSVType.string](csvtype/string.md): A string type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Data Frame from a CSV

- [init(contentsOfCSVFile:columns:rows:types:options:)](dataframe/init%28contentsofcsvfile_columns_rows_types_options_%29.md): Creates a data frame from a CSV file.
- [init(csvData:columns:rows:types:options:)](dataframe/init%28csvdata_columns_rows_types_options_%29.md): Creates a data frame from CSV data.
- [CSVReadingOptions](csvreadingoptions.md): A set of CSV file-reading options.
