> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnslice/subscript(_:)-38hn8](https://developer.apple.com/documentation/tabulardata/columnslice/subscript(_:)-38hn8)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses an element at an index.

## Declaration

```swift
subscript(position: Int) -> ColumnSlice<WrappedElement>.Element { get set }
```

## Parameters

- `position`: A valid index to an element in the column slice.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-7lrhk.md): Accesses a contiguous range of elements.
