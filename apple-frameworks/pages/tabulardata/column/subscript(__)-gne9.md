> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/subscript(_:)-gne9](https://developer.apple.com/documentation/tabulardata/column/subscript(_:)-gne9)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a contiguous range of elements.

## Declaration

```swift
subscript(bounds: Range<Int>) -> ColumnSlice<WrappedElement> { get set }
```

## Parameters

- `bounds`: A range of valid indices in the column.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-qm4d.md): Accesses an element at an index.
- [subscript(\_:)](subscript%28__%29-52xy1.md): Accesses a contiguous range of elements with a range expression.
