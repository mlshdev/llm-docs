> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:endedcontactfor:with:)](https://developer.apple.com/documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:endedcontactfor:with:))

# collisionBehavior(\_:endedContactFor:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a collision between two dynamic items has ended.

## Declaration

```swift
optional func collisionBehavior(_ behavior: UICollisionBehavior, endedContactFor item1: any UIDynamicItem, with item2: any UIDynamicItem)
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic items that collided.
- `item1`: The first of the two dynamic items participating in the collision.
- `item2`: The second of the two dynamic items participating in the collision.

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior(\_:beganContactFor:withBoundaryIdentifier:at:)](collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior(\_:beganContactFor:with:at:)](collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior(\_:endedContactFor:withBoundaryIdentifier:)](collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.

# collisionBehavior:endedContactForItem:withItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when a collision between two dynamic items has ended.

## Declaration

```objectivec
- (void) collisionBehavior:(UICollisionBehavior *) behavior endedContactForItem:(id<UIDynamicItem>) item1 withItem:(id<UIDynamicItem>) item2;
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic items that collided.
- `item1`: The first of the two dynamic items participating in the collision.
- `item2`: The second of the two dynamic items participating in the collision.

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior:beganContactForItem:withBoundaryIdentifier:atPoint:](collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior:beganContactForItem:withItem:atPoint:](collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior:endedContactForItem:withBoundaryIdentifier:](collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
