> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumnslice/distinct()](https://developer.apple.com/documentation/tabulardata/anycolumnslice/distinct())

# distinct()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a column slice that contains unique elements.

## Declaration

```swift
func distinct() -> AnyColumnSlice
```

<a id="return-value"></a>

## Return Value

A type-erased column slice.

<a id="discussion"></a>

## Discussion

The method only adds the first of multiple elements with the same value — the element with the smallest index — to the slice.
