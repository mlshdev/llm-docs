> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/discontiguouscolumnslice/map(_:)](https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/map(_:))

# map(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new column by applying a transformation to each element.

## Declaration

```swift
func map<T>(_ transform: (DiscontiguousColumnSlice<WrappedElement>.Element) throws -> T?) rethrows -> Column<T>
```

## Parameters

- `transform`: A closure that transforms the column slice’s elements to another type.
