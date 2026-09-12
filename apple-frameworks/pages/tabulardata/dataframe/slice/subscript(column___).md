> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/subscript(column:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/subscript(column:_:))

# subscript(column:\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a column you select by its index.

## Declaration

```swift
subscript<T>(column index: Int, type: T.Type) -> DiscontiguousColumnSlice<T> { get }
```

## Parameters

- `index`: The index of a column.

## See Also

### Creating a Slice by Selecting a Column

- [subscript(\_:)](subscript%28__%29-32h9z.md): Returns a column you select by its column identifier.
- [subscript(\_:\_:)](subscript%28____%29.md): Returns a column you select by its name and type.
- [subscript(\_:)](subscript%28__%29-18kdy.md): Returns a column you select by its name.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29.md): Returns a column you select by its name to support dynamic-member lookup.
