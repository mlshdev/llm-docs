> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabularpipelinedataerror/missingvalues(operation:columnname:)](https://developer.apple.com/documentation/createmlcomponents/tabularpipelinedataerror/missingvalues(operation:columnname:))

# TabularPipelineDataError.missingValues(operation:columnName:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The selected column has missing values.

## Declaration

```swift
case missingValues(operation: String, columnName: String)
```

## See Also

### Getting the cases

- [TabularPipelineDataError.incorrectType(operation:columnName:actual:expected:)](incorrecttype%28operation_columnname_actual_expected_%29.md): A column has an incorrect type.
- [TabularPipelineDataError.missingColumn(operation:columnName:)](missingcolumn%28operation_columnname_%29.md): A column is missing from the data frame.
