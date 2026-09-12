> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/subscript(_:)-6mv5i](https://developer.apple.com/documentation/tabulardata/dataframe/subscript(_:)-6mv5i)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a column by its column identifier.

## Declaration

```swift
subscript<T>(id: ColumnID<T>) -> Column<T> { get set }
```

## Parameters

- `id`: The identifier of a column.

## See Also

### Accessing a Column

- [subscript(\_:)](subscript%28__%29-738lb.md): Accesses a column by its name.
- [subscript(\_:\_:)](subscript%28____%29-5walz.md): Accesses a column by its name and type.
- [subscript(column:)](subscript%28column_%29.md): Accesses a column by its index.
- [subscript(column:\_:)](subscript%28column___%29.md): Accesses a column by its index and type.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29.md): Accesses a column by its name to support dynamic-member lookup.
