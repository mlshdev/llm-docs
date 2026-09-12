> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/jsonreadingerror/failedtoparse(row:column:type:contents:)](https://developer.apple.com/documentation/tabulardata/jsonreadingerror/failedtoparse(row:column:type:contents:))

# JSONReadingError.failedToParse(row:column:type:contents:)

**Framework:** TabularData  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when a JSON value fails to parse as the specified type.

## Declaration

```swift
case failedToParse(row: Int, column: String, type: JSONType, contents: String)
```

## Parameters

- `row`: The index of the row that contains the incorrect value.
- `column`: The name of the column that contains the incorrect value.
- `expectedType`: The expected type.
- `value`: The JSON value.

## See Also

### Getting Error Information

- [JSONReadingError.incompatibleValues(column:)](incompatiblevalues%28column_%29.md): An error that occurs when the JSON data contains incompatible values in a column.
- [JSONReadingError.unsupportedStructure](unsupportedstructure.md): An error that occurs when the JSON structure is incompatible with a data frame.
- [JSONReadingError.wrongType(row:column:expectedType:value:)](wrongtype%28row_column_expectedtype_value_%29.md): An error that occurs when the JSON data contains a value of the wrong type for a type-constrained column.
