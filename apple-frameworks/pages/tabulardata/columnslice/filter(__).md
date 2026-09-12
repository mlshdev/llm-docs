> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnslice/filter(_:)](https://developer.apple.com/documentation/tabulardata/columnslice/filter(_:))

# filter(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a slice that contains the elements that satisfy the predicate.

## Declaration

```swift
func filter(_ isIncluded: (ColumnSlice<WrappedElement>.Element) throws -> Bool) rethrows -> DiscontiguousColumnSlice<WrappedElement>
```

## Parameters

- `isIncluded`: The filter predicate. Elements for which the predicate returns `true` are included.
