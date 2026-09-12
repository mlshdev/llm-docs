> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/subscript(column:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/subscript(column:_:))

# subscript(column:\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a column by its index and type.

## Declaration

```swift
subscript<T>(column index: Int, type: T.Type) -> Column<T> { get set }
```

## Parameters

- `index`: The index of a column.
- `type`: The type of the column.

## See Also

### Accessing a Column

- [subscript(\_:)](subscript%28__%29-738lb.md): Accesses a column by its name.
- [subscript(\_:\_:)](subscript%28____%29-5walz.md): Accesses a column by its name and type.
- [subscript(\_:)](subscript%28__%29-6mv5i.md): Accesses a column by its column identifier.
- [subscript(column:)](subscript%28column_%29.md): Accesses a column by its index.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29.md): Accesses a column by its name to support dynamic-member lookup.
