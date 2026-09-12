> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/jsonreadingerror/incompatiblevalues(column:)](https://developer.apple.com/documentation/tabulardata/jsonreadingerror/incompatiblevalues(column:))

# JSONReadingError.incompatibleValues(column:)

**Framework:** TabularData  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that occurs when the JSON data contains incompatible values in a column.

## Declaration

```swift
case incompatibleValues(column: String)
```

## Parameters

- `column`: The name of the column that contains the incompatible values.

## See Also

### Getting Error Information

- [JSONReadingError.failedToParse(row:column:type:contents:)](failedtoparse%28row_column_type_contents_%29.md): An error that occurs when a JSON value fails to parse as the specified type.
- [JSONReadingError.unsupportedStructure](unsupportedstructure.md): An error that occurs when the JSON structure is incompatible with a data frame.
- [JSONReadingError.wrongType(row:column:expectedType:value:)](wrongtype%28row_column_expectedtype_value_%29.md): An error that occurs when the JSON data contains a value of the wrong type for a type-constrained column.
