> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumnslice/subscript(_:)-3qisq](https://developer.apple.com/documentation/tabulardata/anycolumnslice/subscript(_:)-3qisq)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a contiguous range of elements.

## Declaration

```swift
subscript(range: Range<Int>) -> AnyColumnSlice { get set }
```

## Parameters

- `range`: A range of valid indices in the column slice.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-g0gb.md): Accesses an element at an index.
