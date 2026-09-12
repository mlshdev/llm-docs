> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/subscript(_:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/subscript(_:_:))

# subscript(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a column you select by its name and type.

## Declaration

```swift
subscript<T>(columnName: String, type: T.Type) -> DiscontiguousColumnSlice<T> { get }
```

## Parameters

- `columnName`: The name of a column.
- `type`: The type of the column.

## See Also

### Creating a Slice by Selecting a Column

- [subscript(\_:)](subscript%28__%29-32h9z.md): Returns a column you select by its column identifier.
- [subscript(column:\_:)](subscript%28column___%29.md): Returns a column you select by its index.
- [subscript(\_:)](subscript%28__%29-18kdy.md): Returns a column you select by its name.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29.md): Returns a column you select by its name to support dynamic-member lookup.
