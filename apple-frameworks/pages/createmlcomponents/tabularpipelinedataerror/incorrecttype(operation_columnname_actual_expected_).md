> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabularpipelinedataerror/incorrecttype(operation:columnname:actual:expected:)](https://developer.apple.com/documentation/createmlcomponents/tabularpipelinedataerror/incorrecttype(operation:columnname:actual:expected:))

# TabularPipelineDataError.incorrectType(operation:columnName:actual:expected:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A column has an incorrect type.

## Declaration

```swift
case incorrectType(operation: String, columnName: String, actual: String, expected: String)
```

## See Also

### Getting the cases

- [TabularPipelineDataError.missingColumn(operation:columnName:)](missingcolumn%28operation_columnname_%29.md): A column is missing from the data frame.
- [TabularPipelineDataError.missingValues(operation:columnName:)](missingvalues%28operation_columnname_%29.md): The selected column has missing values.
