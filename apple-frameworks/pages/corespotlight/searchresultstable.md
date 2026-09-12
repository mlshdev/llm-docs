> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchresultstable](https://developer.apple.com/documentation/corespotlight/searchresultstable)

# SearchResultsTable

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Tabulated result data — rows with typed columns for display or spreadsheet export.

## Declaration

```swift
struct SearchResultsTable
```

## Topics

### Creating the search count

- [init(header:columns:rows:)](searchresultstable/init%28header_columns_rows_%29.md)

### Getting the column and row details

- [header](searchresultstable/header.md): What this table represents (e.g., “Emails per month from John”).
- [columns](searchresultstable/columns.md): Column definitions with name and type hint.
- [rows](searchresultstable/rows.md): Data rows — each row’s values array matches `columns` by index.
- [SearchResultsTable.Column](searchresultstable/column.md)
- [SearchResultsTable.Row](searchresultstable/row.md)

### Getting cell details

- [SearchResultsTable.Value](searchresultstable/value.md): A cell value — typed so the host app can format, sort, or export correctly.
- [SearchResultsTable.ValueType](searchresultstable/valuetype.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Search results

- [SearchCount](searchcount.md): A scalar count result (e.g., “47 emails from John”).
- [SearchStatistic](searchstatistic.md): A scalar statistic derived from search results (sum, average, max, min, median, stddev).
- [SearchTextResult](searchtextresult.md): LLM-generated text summary or analysis from a pipeline stage.
