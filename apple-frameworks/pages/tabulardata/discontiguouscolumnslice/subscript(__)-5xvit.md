> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice/subscript(_:)-5xvit](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/subscript(_:)-5xvit)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses a contiguous range of elements with an unbounded range.

## Declaration

```swift
subscript(range: UnboundedRange) -> DiscontiguousColumnSlice<WrappedElement> { get set }
```

## Parameters

- `range`: An unbounded range of valid indices in the column slice.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-9y37v.md): Accesses an element at an index.
- [subscript(\_:)](subscript%28__%29-8rd2f.md): Accesses a contiguous range of elements.
- [subscript(\_:)](subscript%28__%29-4k2lh.md): Accesses a contiguous range of elements with a range expression.
