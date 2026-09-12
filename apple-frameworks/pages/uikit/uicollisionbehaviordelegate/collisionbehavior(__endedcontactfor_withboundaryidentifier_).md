> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:endedcontactfor:withboundaryidentifier:)](https://developer.apple.com/documentation/uikit/uicollisionbehaviordelegate/collisionbehavior(_:endedcontactfor:withboundaryidentifier:))

# collisionBehavior(\_:endedContactFor:withBoundaryIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called when a collision between a dynamic item and a boundary has ended.

## Declaration

```swift
optional func collisionBehavior(_ behavior: UICollisionBehavior, endedContactFor item: any UIDynamicItem, withBoundaryIdentifier identifier: (any NSCopying)?)
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic item that has ended contact.
- `item`: The dynamic item that collided.
- `identifier`: The identifier of the boundary that the dynamic item collided with.

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior(\_:beganContactFor:withBoundaryIdentifier:at:)](collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior(\_:beganContactFor:with:at:)](collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior(\_:endedContactFor:with:)](collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.

# collisionBehavior:endedContactForItem:withBoundaryIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called when a collision between a dynamic item and a boundary has ended.

## Declaration

```objectivec
- (void) collisionBehavior:(UICollisionBehavior *) behavior endedContactForItem:(id<UIDynamicItem>) item withBoundaryIdentifier:(id<NSCopying>) identifier;
```

## Parameters

- `behavior`: The collision behavior that owns the dynamic item that has ended contact.
- `item`: The dynamic item that collided.
- `identifier`: The identifier of the boundary that the dynamic item collided with.

## See Also

### Responding to UIKit Dynamics collisions

- [collisionBehavior:beganContactForItem:withBoundaryIdentifier:atPoint:](collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior:beganContactForItem:withItem:atPoint:](collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior:endedContactForItem:withItem:](collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.
