> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvelementupdatetype/children

# TVElementUpdateType.children (Swift)

**Framework:** TVMLKit  
**Kind:** Case  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The order of child nodes have been updated due to the addition, removal, or replacement of child nodes.

> Please use SwiftUI or UIKit

## Declaration

```swift
case children
```

## See Also

### Constants

- [TVElementUpdateType.none](none.md): Deprecated. The tree structure did not change.
- [TVElementUpdateType.subtree](subtree.md): Deprecated. A subtree element has been updated without affecting the order of any immediate children.
- [TVElementUpdateType.node](node.md): Deprecated. The current node and its subtree have been modified.

# TVElementUpdateTypeChildren (Objective-C)

**Framework:** TVMLKit  
**Kind:** Enumeration Case  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The order of child nodes have been updated due to the addition, removal, or replacement of child nodes.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
TVElementUpdateTypeChildren
```

## See Also

### Constants

- [TVElementUpdateTypeNone](none.md): Deprecated. The tree structure did not change.
- [TVElementUpdateTypeSubtree](subtree.md): Deprecated. A subtree element has been updated without affecting the order of any immediate children.
- [TVElementUpdateTypeSelf](node.md): Deprecated. The current node and its subtree have been modified.
