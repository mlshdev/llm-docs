> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskviewdelegate/view(_:nodefor:)](https://developer.apple.com/documentation/arkit/arskviewdelegate/view(_:nodefor:))

# view(\_:nodeFor:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.

## Declaration

```swift
optional func view(_ view: ARSKView, nodeFor anchor: ARAnchor) -> SKNode?
```

## Parameters

- `view`: The [ARSKView](../arskview.md) object rendering the scene.
- `anchor`: The anchor for which a node is requested.

<a id="return-value"></a>

## Return Value

A new SpriteKit node, which ARKit will add to the scene and update to follow its corresponding AR anchor.

## Mentioned In

- [Providing 2D Virtual Content with SpriteKit](../providing-2d-virtual-content-with-spritekit.md)

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session, such as the origin of the world coordinate system and detected planes. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [add(anchor:)](../arsession/add%28anchor_%29.md) method.

You can implement this method to provide a new [SKNode](../../spritekit/sknode.md) object (or instance of any system or custom [SKNode](../../spritekit/sknode.md) subclass) you plan to use as a visual representation of the anchor.

Note that ARKit controls the node’s position, rotation, and scale to simulate a billboarded 3D effect even for 2D sprites. If you provide a `SKTransformLayer` node, ARKit applies a 3D transformation.

Alternatively, if you do not implement this method, ARKit creates an empty node, and you can implement the [view(\_:didAdd:for:)](view%28__didadd_for_%29.md) method instead to provide visual content by adding children to that node.

## See Also

### Handling Content Updates

- [view(\_:didAdd:for:)](view%28__didadd_for_%29.md): Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.
- [view(\_:willUpdate:for:)](view%28__willupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.
- [view(\_:didUpdate:for:)](view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view(\_:didRemove:for:)](view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.

# view:nodeForAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.

## Declaration

```objectivec
- (SKNode *) view:(ARSKView *) view nodeForAnchor:(ARAnchor *) anchor;
```

## Parameters

- `view`: The [ARSKView](../arskview.md) object rendering the scene.
- `anchor`: The anchor for which a node is requested.

<a id="return-value"></a>

## Return Value

A new SpriteKit node, which ARKit will add to the scene and update to follow its corresponding AR anchor.

## Mentioned In

- [Providing 2D Virtual Content with SpriteKit](../providing-2d-virtual-content-with-spritekit.md)

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session, such as the origin of the world coordinate system and detected planes. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [addAnchor:](../arsession/add%28anchor_%29.md) method.

You can implement this method to provide a new [SKNode](../../spritekit/sknode.md) object (or instance of any system or custom [SKNode](../../spritekit/sknode.md) subclass) you plan to use as a visual representation of the anchor.

Note that ARKit controls the node’s position, rotation, and scale to simulate a billboarded 3D effect even for 2D sprites. If you provide a `SKTransformLayer` node, ARKit applies a 3D transformation.

Alternatively, if you do not implement this method, ARKit creates an empty node, and you can implement the [view:didAddNode:forAnchor:](view%28__didadd_for_%29.md) method instead to provide visual content by adding children to that node.

## See Also

### Handling Content Updates

- [view:didAddNode:forAnchor:](view%28__didadd_for_%29.md): Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.
- [view:willUpdateNode:forAnchor:](view%28__willupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.
- [view:didUpdateNode:forAnchor:](view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view:didRemoveNode:forAnchor:](view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.
