> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/mode/everything](https://developer.apple.com/documentation/uikit/uicollisionbehavior/mode/everything)

# everything (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies that the dynamic items, associated with the collision behavior, collide with each other *and* with specified collision boundaries.

## Declaration

```swift
static var everything: UICollisionBehavior.Mode { get }
```

<a id="Discussion"></a>

## Discussion

This is the default collision behavior mode.

## See Also

### Constants

- [items](items.md): Specifies that the dynamic items, associated with the collision behavior, collide only with each other and not with specified collision boundaries.
- [boundaries](boundaries.md): Specifies that the dynamic items, associated with the collision behavior, collide only with specified collision boundaries and don’t collide with each other.

# UICollisionBehaviorModeEverything (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies that the dynamic items, associated with the collision behavior, collide with each other *and* with specified collision boundaries.

## Declaration

```objectivec
UICollisionBehaviorModeEverything
```

<a id="Discussion"></a>

## Discussion

This is the default collision behavior mode.

## See Also

### Constants

- [UICollisionBehaviorModeItems](items.md): Specifies that the dynamic items, associated with the collision behavior, collide only with each other and not with specified collision boundaries.
- [UICollisionBehaviorModeBoundaries](boundaries.md): Specifies that the dynamic items, associated with the collision behavior, collide only with specified collision boundaries and don’t collide with each other.
