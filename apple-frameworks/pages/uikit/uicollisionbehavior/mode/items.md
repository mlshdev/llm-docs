> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/mode/items](https://developer.apple.com/documentation/uikit/uicollisionbehavior/mode/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies that the dynamic items, associated with the collision behavior, collide only with each other and not with specified collision boundaries.

## Declaration

```swift
static var items: UICollisionBehavior.Mode { get }
```

## See Also

### Constants

- [boundaries](boundaries.md): Specifies that the dynamic items, associated with the collision behavior, collide only with specified collision boundaries and don’t collide with each other.
- [everything](everything.md): Specifies that the dynamic items, associated with the collision behavior, collide with each other *and* with specified collision boundaries.

# UICollisionBehaviorModeItems (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies that the dynamic items, associated with the collision behavior, collide only with each other and not with specified collision boundaries.

## Declaration

```objectivec
UICollisionBehaviorModeItems
```

## See Also

### Constants

- [UICollisionBehaviorModeBoundaries](boundaries.md): Specifies that the dynamic items, associated with the collision behavior, collide only with specified collision boundaries and don’t collide with each other.
- [UICollisionBehaviorModeEverything](everything.md): Specifies that the dynamic items, associated with the collision behavior, collide with each other *and* with specified collision boundaries.
