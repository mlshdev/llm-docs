> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/filteredindexset(includeinteger:)](https://developer.apple.com/documentation/foundation/indexset/filteredindexset(includeinteger:))

# filteredIndexSet(includeInteger:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an IndexSet filtered according to the result of `includeInteger`.

## Declaration

```swift
func filteredIndexSet(includeInteger: (IndexSet.Element) throws -> Bool) rethrows -> IndexSet
```

## Parameters

- `includeInteger`: The predicate which decides if an integer will be included in the result or not.

## See Also

### Selecting Elements

- [filteredIndexSet(in:includeInteger:)](filteredindexset%28in_includeinteger_%29-6cdvc.md): Returns an IndexSet filtered according to the result of `includeInteger`.
- [filteredIndexSet(in:includeInteger:)](filteredindexset%28in_includeinteger_%29-9dn86.md): Returns an IndexSet filtered according to the result of `includeInteger`.
