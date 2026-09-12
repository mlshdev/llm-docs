> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/replacecolumn(_:with:)-oa9g](https://developer.apple.com/documentation/tabulardata/dataframe/replacecolumn(_:with:)-oa9g)

# replaceColumn(\_:with:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Replaces a column in the data frame, by column identifier, with a typed column.

## Declaration

```swift
mutating func replaceColumn<T, U>(_ id: ColumnID<T>, with newColumn: Column<U>)
```

## Parameters

- `id`: The identifier of a column in the data frame.
- `newColumn`: Another column that replaces the column.

## See Also

### Replacing a Column

- [replaceColumn(\_:with:)](replacecolumn%28__with_%29-2b3u3.md): Replaces a column in the data frame, by name, with a type-erased column.
- [replaceColumn(\_:with:)](replacecolumn%28__with_%29-4yub5.md): Replaces a column in the data frame, by name, with a typed column.
- [replaceColumn(\_:with:)](replacecolumn%28__with_%29-9sn9i.md): Replaces a column in the data frame, by column identifier, with a type-erased column.
