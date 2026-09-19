> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/tabularpipelinedataerror/missingcolumn(operation:columnname:)

# TabularPipelineDataError.missingColumn(operation:columnName:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A column is missing from the data frame.

## Declaration

```swift
case missingColumn(operation: String, columnName: String)
```

## See Also

### Getting the cases

- [TabularPipelineDataError.incorrectType(operation:columnName:actual:expected:)](incorrecttype%28operation_columnname_actual_expected_%29.md): A column has an incorrect type.
- [TabularPipelineDataError.missingValues(operation:columnName:)](missingvalues%28operation_columnname_%29.md): The selected column has missing values.
