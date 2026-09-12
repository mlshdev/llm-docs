> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehaviordelegate](https://developer.apple.com/documentation/uikit/uicollisionbehaviordelegate)

# UICollisionBehaviorDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

To respond to UIKit dynamic item collisions, configure a custom class to adopt the [UICollisionBehaviorDelegate](uicollisionbehaviordelegate.md) protocol. Then, in a collision behavior (an instance of the [UICollisionBehavior](uicollisionbehavior.md) class), set the delegate to be an instance of your custom class.

## Declaration

```swift
@MainActor protocol UICollisionBehaviorDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate is notified of collisions that occur between the behavior’s dynamic items, or between a dynamic item and a boundary, depending on the behavior’s mode (as set with its [collisionMode](uicollisionbehavior/collisionmode.md) property). In the case of a collision between an item and the boundary defined by a reference view, the identifier passed to the delegate method is `nil`. (For more on the reference view and the different ways to initialize a dynamic animator, read the Overview in [UIDynamicAnimator](uidynamicanimator.md).)

## Topics

### Responding to UIKit Dynamics collisions

- [collisionBehavior(\_:beganContactFor:withBoundaryIdentifier:at:)](uicollisionbehaviordelegate/collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior(\_:beganContactFor:with:at:)](uicollisionbehaviordelegate/collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior(\_:endedContactFor:withBoundaryIdentifier:)](uicollisionbehaviordelegate/collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
- [collisionBehavior(\_:endedContactFor:with:)](uicollisionbehaviordelegate/collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the collision behavior

- [collisionDelegate](uicollisionbehavior/collisiondelegate.md): The delegate object that you want to respond to collisions for the collision behavior.

# UICollisionBehaviorDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

To respond to UIKit dynamic item collisions, configure a custom class to adopt the [UICollisionBehaviorDelegate](uicollisionbehaviordelegate.md) protocol. Then, in a collision behavior (an instance of the [UICollisionBehavior](uicollisionbehavior.md) class), set the delegate to be an instance of your custom class.

## Declaration

```objectivec
@protocol UICollisionBehaviorDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate is notified of collisions that occur between the behavior’s dynamic items, or between a dynamic item and a boundary, depending on the behavior’s mode (as set with its [collisionMode](uicollisionbehavior/collisionmode.md) property). In the case of a collision between an item and the boundary defined by a reference view, the identifier passed to the delegate method is `nil`. (For more on the reference view and the different ways to initialize a dynamic animator, read the Overview in [UIDynamicAnimator](uidynamicanimator.md).)

## Topics

### Responding to UIKit Dynamics collisions

- [collisionBehavior:beganContactForItem:withBoundaryIdentifier:atPoint:](uicollisionbehaviordelegate/collisionbehavior%28__begancontactfor_withboundaryidentifier_at_%29.md): Called when a collision, between a dynamic item and a collision boundary, has begun.
- [collisionBehavior:beganContactForItem:withItem:atPoint:](uicollisionbehaviordelegate/collisionbehavior%28__begancontactfor_with_at_%29.md): Called when a collision between two dynamic items has begun.
- [collisionBehavior:endedContactForItem:withBoundaryIdentifier:](uicollisionbehaviordelegate/collisionbehavior%28__endedcontactfor_withboundaryidentifier_%29.md): Called when a collision between a dynamic item and a boundary has ended.
- [collisionBehavior:endedContactForItem:withItem:](uicollisionbehaviordelegate/collisionbehavior%28__endedcontactfor_with_%29.md): Called when a collision between two dynamic items has ended.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the collision behavior

- [collisionDelegate](uicollisionbehavior/collisiondelegate.md): The delegate object that you want to respond to collisions for the collision behavior.
