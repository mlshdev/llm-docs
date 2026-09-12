> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/row/subscript(_:_:)-7gpc3](https://developer.apple.com/documentation/tabulardata/dataframe/row/subscript(_:_:)-7gpc3)

# subscript(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a value in the row you select by a column name and type.

## Declaration

```swift
subscript<T>(columnName: String, type: T.Type) -> T? { get set }
```

## Parameters

- `columnName`: The name of a column.
- `type`: The type of the column.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-5tsj0.md): Accesses a value at a column index.
- [subscript(\_:)](subscript%28__%29-2v7qz.md): Accesses a value in the row you select by a column name.
- [subscript(\_:)](subscript%28__%29-9o424.md): Accesses a value in the row you select by a column identifier.
- [subscript(\_:\_:)](subscript%28____%29-1o38p.md): Accesses a value in the row you select by a column index and type.
