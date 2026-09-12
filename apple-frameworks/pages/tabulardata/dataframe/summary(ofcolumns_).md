> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/summary(ofcolumns:)](https://developer.apple.com/documentation/tabulardata/dataframe/summary(ofcolumns:))

# summary(ofColumns:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame that summarizes the columns you select by index.

## Declaration

```swift
func summary(ofColumns columnIndices: Int...) -> DataFrame
```

## Parameters

- `columnIndices`: A comma-separated, or variadic, list of column indices in the data frame.

## See Also

### Summarizing a Data Frame

- [summary()](summary%28%29.md): Generates a data frame that summarizes the columns of the data frame.
- [summary(of:)](summary%28of_%29.md): Generates a data frame that summarizes the columns you select by name.
- [SummaryColumnIDs](../summarycolumnids.md): The summary data frame column identifiers.
