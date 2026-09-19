> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/distinct()

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
