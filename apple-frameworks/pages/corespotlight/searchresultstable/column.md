> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchresultstable/column](https://developer.apple.com/documentation/corespotlight/searchresultstable/column)

# SearchResultsTable.Column

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct Column
```

## Topics

### Initializers

- [init(name:type:)](column/init%28name_type_%29.md)

### Instance Properties

- [name](column/name.md)
- [type](column/type.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the column and row details

- [header](header.md): What this table represents (e.g., “Emails per month from John”).
- [columns](columns.md): Column definitions with name and type hint.
- [rows](rows.md): Data rows — each row’s values array matches `columns` by index.
- [SearchResultsTable.Row](row.md)
