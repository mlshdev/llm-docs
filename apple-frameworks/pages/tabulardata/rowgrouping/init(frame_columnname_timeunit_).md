> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/init(frame:columnname:timeunit:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/init(frame:columnname:timeunit:))

# init(frame:columnName:timeUnit:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a row grouping from a column with date or time elements.

## Declaration

```swift
init<D>(frame: D, columnName: String, timeUnit: Calendar.Component) where GroupingKey == Int, D : DataFrameProtocol
```

## Parameters

- `frame`: A data frame type.
- `columnName`: The name of the column that stores a row’s date and time information.
- `timeUnit`: A calendar component that tells the row grouping how to create its groups.

## See Also

### Creating a Row Grouping

- [init(groups:groupKeysColumnName:)](init%28groups_groupkeyscolumnname_%29.md): Creates a row grouping from a list of groups.
