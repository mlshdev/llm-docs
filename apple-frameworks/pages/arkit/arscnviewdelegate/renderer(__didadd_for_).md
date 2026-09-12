> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnviewdelegate/renderer(_:didadd:for:)](https://developer.apple.com/documentation/arkit/arscnviewdelegate/renderer(_:didadd:for:))

# renderer(\_:didAdd:for:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.

## Declaration

```swift
optional func renderer(_ renderer: any SCNSceneRenderer, didAdd node: SCNNode, for anchor: ARAnchor)
```

## Parameters

- `renderer`: The [ARSCNView](../arscnview.md) object rendering the scene.
- `node`: The newly added SceneKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session. The view calls this method once for each new anchor. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [add(anchor:)](../arsession/add%28anchor_%29.md) method.

You can provide visual content for the anchor by attaching geometry (or other SceneKit features) to this node or by adding child nodes.

Alternatively, you can implement the [renderer(\_:nodeFor:)](renderer%28__nodefor_%29.md) method to create your own node (or instance of an [SCNNode](../../scenekit/scnnode.md) subclass) for an anchor.

## See Also

### Handling Content Updates

- [renderer(\_:nodeFor:)](renderer%28__nodefor_%29.md): Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.
- [renderer(\_:willUpdate:for:)](renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer(\_:didUpdate:for:)](renderer%28__didupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.
- [renderer(\_:didRemove:for:)](renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.

# renderer:didAddNode:forAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.

## Declaration

```objectivec
- (void) renderer:(id<SCNSceneRenderer>) renderer didAddNode:(SCNNode *) node forAnchor:(ARAnchor *) anchor;
```

## Parameters

- `renderer`: The [ARSCNView](../arscnview.md) object rendering the scene.
- `node`: The newly added SceneKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session. The view calls this method once for each new anchor. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [addAnchor:](../arsession/add%28anchor_%29.md) method.

You can provide visual content for the anchor by attaching geometry (or other SceneKit features) to this node or by adding child nodes.

Alternatively, you can implement the [renderer:nodeForAnchor:](renderer%28__nodefor_%29.md) method to create your own node (or instance of an [SCNNode](../../scenekit/scnnode.md) subclass) for an anchor.

## See Also

### Handling Content Updates

- [renderer:nodeForAnchor:](renderer%28__nodefor_%29.md): Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.
- [renderer:willUpdateNode:forAnchor:](renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer:didUpdateNode:forAnchor:](renderer%28__didupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.
- [renderer:didRemoveNode:forAnchor:](renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.
