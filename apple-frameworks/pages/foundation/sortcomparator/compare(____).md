> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortcomparator/compare(_:_:)](https://developer.apple.com/documentation/foundation/sortcomparator/compare(_:_:))

# compare(\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Provides the relative ordering of two elements based on the sort order of the comparator.

## Declaration

```swift
func compare(_ lhs: Self.Compared, _ rhs: Self.Compared) -> ComparisonResult
```

## Parameters

- `lhs`: The first element to compare.
- `rhs`: The second element to compare.

<a id="return-value"></a>

## Return Value

The relative ordering between the two elements according to the sort order of the comparator.

## See Also

### Using a Comparator

- [Compared](compared.md): A type that the sort comparator can compare.
