> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/summarycolumnids](https://developer.apple.com/documentation/tabulardata/summarycolumnids)

# SummaryColumnIDs

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The summary data frame column identifiers.

## Declaration

```swift
enum SummaryColumnIDs
```

## Topics

### Type Properties

- [columnName](summarycolumnids/columnname.md): The identifier that represents the summary’s column that contains the column names in a data frame.
- [firstQuartile](summarycolumnids/firstquartile.md): The identifier that represents the summary’s column of first quartiles.
- [maximum](summarycolumnids/maximum.md): The identifier that represents the summary’s column of maximums.
- [mean](summarycolumnids/mean.md): The identifier that represents the summary’s column of arithmetic means.
- [median](summarycolumnids/median.md): The identifier that represents the summary’s column of medians.
- [minimum](summarycolumnids/minimum.md): The identifier that represents the summary’s column of minimums.
- [mode](summarycolumnids/mode.md): The identifier that represents the summary’s column of most frequent elements.
- [noneCount](summarycolumnids/nonecount.md): The identifier that represents the summary’s column of missing counts.
- [someCount](summarycolumnids/somecount.md): The identifier that represents the summary’s column of non-missing counts.
- [standardDeviation](summarycolumnids/standarddeviation.md): The identifier that represents the summary’s column of standard deviations.
- [thirdQuartile](summarycolumnids/thirdquartile.md): The identifier that represents the summary’s column of third quartiles.
- [uniqueCount](summarycolumnids/uniquecount.md): The identifier that represents the summary’s column of unique counts.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Summarizing a Data Frame

- [summary()](dataframe/summary%28%29.md): Generates a data frame that summarizes the columns of the data frame.
- [summary(of:)](dataframe/summary%28of_%29.md): Generates a data frame that summarizes the columns you select by name.
- [summary(ofColumns:)](dataframe/summary%28ofcolumns_%29.md): Generates a data frame that summarizes the columns you select by index.
