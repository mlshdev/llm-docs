> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/filteredindexset(in:includeinteger:)-6cdvc](https://developer.apple.com/documentation/foundation/indexset/filteredindexset(in:includeinteger:)-6cdvc)

# filteredIndexSet(in:includeInteger:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an IndexSet filtered according to the result of `includeInteger`.

## Declaration

```swift
func filteredIndexSet(in range: Range<IndexSet.Element>, includeInteger: (IndexSet.Element) throws -> Bool) rethrows -> IndexSet
```

## Parameters

- `range`: A range of integers. For each integer in the range that intersects the integers in the IndexSet, then the `includeInteger` predicate will be invoked.
- `includeInteger`: The predicate which decides if an integer will be included in the result or not.

## See Also

### Selecting Elements

- [filteredIndexSet(in:includeInteger:)](filteredindexset%28in_includeinteger_%29-9dn86.md): Returns an IndexSet filtered according to the result of `includeInteger`.
- [filteredIndexSet(includeInteger:)](filteredindexset%28includeinteger_%29.md): Returns an IndexSet filtered according to the result of `includeInteger`.
