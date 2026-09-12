> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskviewdelegate/view(_:didadd:for:)](https://developer.apple.com/documentation/arkit/arskviewdelegate/view(_:didadd:for:))

# view(\_:didAdd:for:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.

## Declaration

```swift
optional func view(_ view: ARSKView, didAdd node: SKNode, for anchor: ARAnchor)
```

## Parameters

- `view`: The [ARSKView](../arskview.md) object rendering the scene.
- `node`: The newly added SpriteKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session. The view calls this method once for each new anchor. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [add(anchor:)](../arsession/add%28anchor_%29.md) method.

You can provide visual content for the anchor by adding child nodes.

Alternatively, you can implement the [view(\_:nodeFor:)](view%28__nodefor_%29.md) method to create your own node (or instance of an [SKNode](../../spritekit/sknode.md) subclass) for an anchor.

## See Also

### Handling Content Updates

- [view(\_:nodeFor:)](view%28__nodefor_%29.md): Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.
- [view(\_:willUpdate:for:)](view%28__willupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.
- [view(\_:didUpdate:for:)](view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view(\_:didRemove:for:)](view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.

# view:didAddNode:forAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.

## Declaration

```objectivec
- (void) view:(ARSKView *) view didAddNode:(SKNode *) node forAnchor:(ARAnchor *) anchor;
```

## Parameters

- `view`: The [ARSKView](../arskview.md) object rendering the scene.
- `node`: The newly added SpriteKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session. The view calls this method once for each new anchor. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [addAnchor:](../arsession/add%28anchor_%29.md) method.

You can provide visual content for the anchor by adding child nodes.

Alternatively, you can implement the [view:nodeForAnchor:](view%28__nodefor_%29.md) method to create your own node (or instance of an [SKNode](../../spritekit/sknode.md) subclass) for an anchor.

## See Also

### Handling Content Updates

- [view:nodeForAnchor:](view%28__nodefor_%29.md): Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.
- [view:willUpdateNode:forAnchor:](view%28__willupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.
- [view:didUpdateNode:forAnchor:](view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view:didRemoveNode:forAnchor:](view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.
