> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/keypathcomparator/compare(_:_:)

# compare(\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Provides the relative ordering of two items according to the ordering of the properties that the comparator’s key path references.

## Declaration

```swift
func compare(_ lhs: Compared, _ rhs: Compared) -> ComparisonResult
```

## Parameters

- `lhs`: The first property to compare.
- `rhs`: The second property to compare.

<a id="return-value"></a>

## Return Value

The relative ordering for the compared properties.

<a id="Discussion"></a>

## Discussion

The method returns flipped comparisons if the sort order is [SortOrder.reverse](../sortorder/reverse.md).
