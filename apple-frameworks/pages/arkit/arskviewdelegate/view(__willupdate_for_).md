> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskviewdelegate/view(_:willupdate:for:)](https://developer.apple.com/documentation/arkit/arskviewdelegate/view(_:willupdate:for:))

# view(\_:willUpdate:for:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.

## Declaration

```swift
optional func view(_ view: ARSKView, willUpdate node: SKNode, for anchor: ARAnchor)
```

## Parameters

- `view`: The [ARSKView](../arskview.md) object rendering the scene.
- `node`: The updated SpriteKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically update anchors in a session. The view calls this method once for each updated anchor.

## See Also

### Handling Content Updates

- [view(\_:nodeFor:)](view%28__nodefor_%29.md): Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.
- [view(\_:didAdd:for:)](view%28__didadd_for_%29.md): Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.
- [view(\_:didUpdate:for:)](view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view(\_:didRemove:for:)](view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.

# view:willUpdateNode:forAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SpriteKit node’s properties will be updated to match the current state of its corresponding anchor.

## Declaration

```objectivec
- (void) view:(ARSKView *) view willUpdateNode:(SKNode *) node forAnchor:(ARAnchor *) anchor;
```

## Parameters

- `view`: The [ARSKView](../arskview.md) object rendering the scene.
- `node`: The updated SpriteKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically update anchors in a session. The view calls this method once for each updated anchor.

## See Also

### Handling Content Updates

- [view:nodeForAnchor:](view%28__nodefor_%29.md): Asks the delegate to provide a SpriteKit node corresponding to a newly added anchor.
- [view:didAddNode:forAnchor:](view%28__didadd_for_%29.md): Tells the delegate that a SpriteKit node corresponding to a new AR anchor has been added to the scene.
- [view:didUpdateNode:forAnchor:](view%28__didupdate_for_%29.md): Tells the delegate that a SpriteKit node’s properties have been updated to match the current state of its corresponding anchor.
- [view:didRemoveNode:forAnchor:](view%28__didremove_for_%29.md): Tells the delegate that the SpriteKit node corresponding to an AR anchor has been removed from the scene.
