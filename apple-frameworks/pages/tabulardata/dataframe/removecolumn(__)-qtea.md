> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/removecolumn(_:)-qtea](https://developer.apple.com/documentation/tabulardata/dataframe/removecolumn(_:)-qtea)

# removeColumn(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Removes a column you select by its column identifier from the data frame.

## Declaration

```swift
@discardableResult mutating func removeColumn<T>(_ id: ColumnID<T>) -> Column<T>
```

## Parameters

- `id`: The identifier of a column in the data frame.

<a id="return-value"></a>

## Return Value

The column the method removes from the data frame.

## See Also

### Removing a Column

- [removeColumn(\_:)](removecolumn%28__%29-5zu7l.md): Removes a column you select by its name from the data frame.
