> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/descendants(where:)](https://developer.apple.com/documentation/usdkit/usdstage/descendants(where:))

# descendants(where:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the descendant prims of this stage that satisfy the given predicate.

## Declaration

```swift
func descendants(where predicate: USDPrim.Predicate) -> [USDPrim]
```

## See Also

### Traversing the scene

- [descendants](descendants.md): The active, loaded, defined, non-abstract descendant prims of this stage’s pseudo-root.
- [allDescendants](alldescendants.md): All descendant prims of this stage’s pseudo-root.
