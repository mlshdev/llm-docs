> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/filter(_:)](https://developer.apple.com/documentation/tabulardata/column/filter(_:))

# filter(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a slice that contains the elements that satisfy a predicate.

## Declaration

```swift
func filter(_ isIncluded: (Column<WrappedElement>.Element) throws -> Bool) rethrows -> DiscontiguousColumnSlice<WrappedElement>
```

## Parameters

- `isIncluded`: A predicate closure that returns a Boolean. The method uses the closure to determine whether it includes an element in the slice.
