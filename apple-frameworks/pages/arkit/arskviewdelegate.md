> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskviewdelegate](https://developer.apple.com/documentation/arkit/arskviewdelegate)

# ARSKViewDelegate (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Methods you can implement to mediate the automatic synchronization of SpriteKit content with an AR session.

## Declaration

```swift
protocol ARSKViewDelegate : ARSessionObserver, SKViewDelegate
```

<a id="overview"></a>

## Overview

Implement this protocol to provide SpriteKit content corresponding to [ARAnchor](aranchor.md) objects tracked by the view’s AR session, or to manage the view’s automatic updating of such content.

This protocol extends the [ARSessionObserver](arsessionobserver.md) protocol, so your session delegate can also implement those methods to respond to changes in session status.

## Topics

### Handling Content Updates

- [view(\_:nodeFor:)](arskviewdelegate/view%28__nodefor_%29.md): Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.
- [view(\_:didAdd:for:)](arskviewdelegate/view%28__didadd_for_%29.md): Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.
- [view(\_:willUpdate:for:)](arskviewdelegate/view%28__willupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.
- [view(\_:didUpdate:for:)](arskviewdelegate/view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view(\_:didRemove:for:)](arskviewdelegate/view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.

## Relationships

### Inherits From

- [ARSessionObserver](arsessionobserver.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [SKViewDelegate](../spritekit/skviewdelegate.md)

## See Also

### Responding to AR Updates

- [delegate](arskview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SpriteKit content.

# ARSKViewDelegate (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Methods you can implement to mediate the automatic synchronization of SpriteKit content with an AR session.

## Declaration

```objectivec
@protocol ARSKViewDelegate <SKViewDelegate, ARSessionObserver>
```

<a id="overview"></a>

## Overview

Implement this protocol to provide SpriteKit content corresponding to [ARAnchor](aranchor.md) objects tracked by the view’s AR session, or to manage the view’s automatic updating of such content.

This protocol extends the [ARSessionObserver](arsessionobserver.md) protocol, so your session delegate can also implement those methods to respond to changes in session status.

## Topics

### Handling Content Updates

- [view:nodeForAnchor:](arskviewdelegate/view%28__nodefor_%29.md): Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.
- [view:didAddNode:forAnchor:](arskviewdelegate/view%28__didadd_for_%29.md): Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.
- [view:willUpdateNode:forAnchor:](arskviewdelegate/view%28__willupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.
- [view:didUpdateNode:forAnchor:](arskviewdelegate/view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view:didRemoveNode:forAnchor:](arskviewdelegate/view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.

## Relationships

### Inherits From

- [ARSessionObserver](arsessionobserver.md)
- [SKViewDelegate](../spritekit/skviewdelegate.md)

## See Also

### Responding to AR Updates

- [delegate](arskview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SpriteKit content.
