> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/summary(of:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/summary(of:))

# summary(of:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame that summarizes the columns you select by name.

## Declaration

```swift
func summary(of columnNames: String...) -> DataFrame
```

## Parameters

- `columnNames`: A comma-separated, or variadic, list of column names in the data frame slice.

## See Also

### Summarizing a Slice

- [summary()](summary%28%29.md): Generates a data frame that summarizes the columns of the data frame slice.
- [summary(ofColumns:)](summary%28ofcolumns_%29.md): Generates a data frame that summarizes the columns you select by index.
- [SummaryColumnIDs](../../summarycolumnids.md): The summary data frame column identifiers.
