> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/descendants](https://developer.apple.com/documentation/usdkit/usdstage/descendants)

# descendants

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The active, loaded, defined, non-abstract descendant prims of this stage’s pseudo-root.

## Declaration

```swift
var descendants: [USDPrim] { get }
```

## See Also

### Traversing the scene

- [descendants(where:)](descendants%28where_%29.md): Returns the descendant prims of this stage that satisfy the given predicate.
- [allDescendants](alldescendants.md): All descendant prims of this stage’s pseudo-root.
