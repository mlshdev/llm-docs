> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:begancontactfor:with:at:)](https://developer.apple.com/documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:begancontactfor:with:at:))

# collisionBehavior(\_:beganContactFor:with:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a collision between two dynamic items has begun.

## Declaration

```swift
optional func collisionBehavior(_ behavior: UICollisionBehavior, beganContactFor item1: any UIDynamicItem, with item2: any UIDynamicItem, at p: CGPoint)
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic items that have started to contact each other.
- `item1`: The first of the two dynamic items participating in the collision.
- `item2`: The second of the two dynamic items participating in the collision.
- `p`: The contact point for the collision. The coordinate system that pertains to a collision depends on how you initialized the associated animator. For details, read the Overview of [UIDynamicAnimator](../uidynamicanimator.md).

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior(\_:beganContactFor:withBoundaryIdentifier:at:)](collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior(\_:endedContactFor:withBoundaryIdentifier:)](collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
- [collisionBehavior(\_:endedContactFor:with:)](collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.

# collisionBehavior:beganContactForItem:withItem:atPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when a collision between two dynamic items has begun.

## Declaration

```objectivec
- (void) collisionBehavior:(UICollisionBehavior *) behavior beganContactForItem:(id<UIDynamicItem>) item1 withItem:(id<UIDynamicItem>) item2 atPoint:(CGPoint) p;
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic items that have started to contact each other.
- `item1`: The first of the two dynamic items participating in the collision.
- `item2`: The second of the two dynamic items participating in the collision.
- `p`: The contact point for the collision. The coordinate system that pertains to a collision depends on how you initialized the associated animator. For details, read the Overview of [UIDynamicAnimator](../uidynamicanimator.md).

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior:beganContactForItem:withBoundaryIdentifier:atPoint:](collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior:endedContactForItem:withBoundaryIdentifier:](collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
- [collisionBehavior:endedContactForItem:withItem:](collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.
