> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/comparablecomparator/compare(_:_:)](https://developer.apple.com/documentation/foundation/comparablecomparator/compare(_:_:))

# compare(\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Provides the relative ordering of two elements.

## Declaration

```swift
func compare(_ lhs: Compared, _ rhs: Compared) -> ComparisonResult
```

## Parameters

- `lhs`: The first element to compare.
- `rhs`: The second element to compare.

<a id="return-value"></a>

## Return Value

The relative ordering between the two elements.

<a id="Discussion"></a>

## Discussion

The method returns flipped comparisons if the sort order is [SortOrder.reverse](../sortorder/reverse.md).
