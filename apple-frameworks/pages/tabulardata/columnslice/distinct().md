> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnslice/distinct()](https://developer.apple.com/documentation/tabulardata/columnslice/distinct())

# distinct()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a discontiguous slice that contains unique elements.

## Declaration

```swift
func distinct() -> DiscontiguousColumnSlice<WrappedElement>
```

<a id="return-value"></a>

## Return Value

A discontiguous column slice.

<a id="discussion"></a>

## Discussion

The method only adds the first of multiple elements with the same value — the element with the smallest index — to the slice.
