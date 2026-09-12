> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:begancontactfor:withboundaryidentifier:at:)](https://developer.apple.com/documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:begancontactfor:withboundaryidentifier:at:))

# collisionBehavior(\_:beganContactFor:withBoundaryIdentifier:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a collision, between a dynamic item and a collision boundary, has begun.

## Declaration

```swift
optional func collisionBehavior(_ behavior: UICollisionBehavior, beganContactFor item: any UIDynamicItem, withBoundaryIdentifier identifier: (any NSCopying)?, at p: CGPoint)
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic item that has started contact with a boundary.
- `item`: The dynamic item that has started contact with a boundary.
- `identifier`: The identifier of the boundary that the dynamic item has started contact with.
- `p`: The collision point on the boundary.

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior(\_:beganContactFor:with:at:)](collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior(\_:endedContactFor:withBoundaryIdentifier:)](collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
- [collisionBehavior(\_:endedContactFor:with:)](collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.

# collisionBehavior:beganContactForItem:withBoundaryIdentifier:atPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when a collision, between a dynamic item and a collision boundary, has begun.

## Declaration

```objectivec
- (void) collisionBehavior:(UICollisionBehavior *) behavior beganContactForItem:(id<UIDynamicItem>) item withBoundaryIdentifier:(id<NSCopying>) identifier atPoint:(CGPoint) p;
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic item that has started contact with a boundary.
- `item`: The dynamic item that has started contact with a boundary.
- `identifier`: The identifier of the boundary that the dynamic item has started contact with.
- `p`: The collision point on the boundary.

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior:beganContactForItem:withItem:atPoint:](collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior:endedContactForItem:withBoundaryIdentifier:](collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
- [collisionBehavior:endedContactForItem:withItem:](collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.
