> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/nextsibling](https://developer.apple.com/documentation/usdkit/usdprim/nextsibling)

# nextSibling

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The active, loaded, defined, non-abstract successor of this prim in its parent’s list of children.

## Declaration

```swift
var nextSibling: USDPrim? { get }
```

## See Also

### Traversing the hierarchy

- [children](children.md): The active, loaded, defined, non-abstract child prims of this prim.
- [allChildren](allchildren.md): The child prims of this prim.
- [descendants](descendants.md): The active, loaded, defined, non-abstract descendant prims of this prim, in depth-first order.
- [allDescendants](alldescendants.md): The descendant prims of this prim.
- [children(where:)](children%28where_%29.md): Returns the child prims of this prim that satisfy the given predicate.
- [descendants(where:)](descendants%28where_%29.md): Returns the descendant prims of this prim that satisfy the given predicate.
- [nextSibling(where:)](nextsibling%28where_%29.md): The successor of this prim in its parent’s list of children that satisfies the given predicate.
- [prim(at:)](prim%28at_%29.md): Returns the prim at a given path, relative to this prim.
- [USDPrim.Predicate](predicate.md): A filter which returns true or false for prims based on their flags.
