> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/init(groups:groupkeyscolumnname:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/init(groups:groupkeyscolumnname:))

# init(groups:groupKeysColumnName:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a row grouping from a list of groups.

## Declaration

```swift
init<D>(groups: [(GroupingKey?, D)], groupKeysColumnName: String) where D : DataFrameProtocol
```

## Parameters

- `groups`: An array of tuples. Each tuple pairs a key with a data frame type.
- `groupKeysColumnName`: The name of the grouping key column the row grouping creates when it generates a data frame, such as its [ungrouped()](ungrouped%28%29.md) or [counts(order:)](counts%28order_%29.md) methods.

<a id="discussion"></a>

## Discussion

The member data frames must all have the same columns (count, names, and types).

## See Also

### Creating a Row Grouping

- [init(frame:columnName:timeUnit:)](init%28frame_columnname_timeunit_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Creates a row grouping from a column with date or time elements.
