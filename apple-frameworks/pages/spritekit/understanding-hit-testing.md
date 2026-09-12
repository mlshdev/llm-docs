> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/understanding-hit-testing](https://developer.apple.com/documentation/spritekit/understanding-hit-testing)

# Understanding Hit-Testing (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Learn how find child nodes at a given point by using hit-testing.

<a id="overview"></a>

## Overview

When SpriteKit processes touch or mouse events, it walks the scene to find the closest node that will accept the event. If the first node tested won’t accept the event, SpriteKit checks the next closest node, and so on. This process is called *hit-testing*, and the order in which it’s processed is essentially the reverse of drawing order.

For a node to be considered during hit-testing, its [isUserInteractionEnabled](sknode/isuserinteractionenabled.md) property must be set to a [true](https://developer.apple.com/documentation/swift/true). The default value is a [false](https://developer.apple.com/documentation/swift/false) for any node except a scene node. A node that will receive events needs to implement the appropriate responder methods from its parent class ([UIResponder](../uikit/uiresponder.md) on iOS and [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder) on macOS). This is one of the few places where you must implement platform-specific code in SpriteKit.

Sometimes, you also want to look for nodes directly, rather than relying on the standard event-handling mechanisms. In SpriteKit you can ask a node whether any of its descendants intersect a specific point in their coordinate system. Call the [atPoint(\_:)](sknode/atpoint%28__%29.md) method to find the first descendant that intersects the point, or use the [nodes(at:)](sknode/nodes%28at_%29.md) method to receive an array of all of the nodes that intersect the point.

## See Also

### Hit Testing

- [contains(\_:)](sknode/contains%28__%29.md): Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.
- [atPoint(\_:)](sknode/atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
- [nodes(at:)](sknode/nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.

# Understanding Hit-Testing (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Learn how find child nodes at a given point by using hit-testing.

<a id="overview"></a>

## Overview

When SpriteKit processes touch or mouse events, it walks the scene to find the closest node that will accept the event. If the first node tested won’t accept the event, SpriteKit checks the next closest node, and so on. This process is called *hit-testing*, and the order in which it’s processed is essentially the reverse of drawing order.

For a node to be considered during hit-testing, its [userInteractionEnabled](sknode/isuserinteractionenabled.md) property must be set to a [true](https://developer.apple.com/documentation/swift/true). The default value is a [false](https://developer.apple.com/documentation/swift/false) for any node except a scene node. A node that will receive events needs to implement the appropriate responder methods from its parent class ([UIResponder](../uikit/uiresponder.md) on iOS and [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder) on macOS). This is one of the few places where you must implement platform-specific code in SpriteKit.

Sometimes, you also want to look for nodes directly, rather than relying on the standard event-handling mechanisms. In SpriteKit you can ask a node whether any of its descendants intersect a specific point in their coordinate system. Call the [nodeAtPoint:](sknode/atpoint%28__%29.md) method to find the first descendant that intersects the point, or use the [nodesAtPoint:](sknode/nodes%28at_%29.md) method to receive an array of all of the nodes that intersect the point.

## See Also

### Hit Testing

- [containsPoint:](sknode/contains%28__%29.md): Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.
- [nodeAtPoint:](sknode/atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
- [nodesAtPoint:](sknode/nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.
