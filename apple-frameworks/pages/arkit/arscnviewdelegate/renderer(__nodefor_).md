> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnviewdelegate/renderer(_:nodefor:)](https://developer.apple.com/documentation/arkit/arscnviewdelegate/renderer(_:nodefor:))

# renderer(\_:nodeFor:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.

## Declaration

```swift
optional func renderer(_ renderer: any SCNSceneRenderer, nodeFor anchor: ARAnchor) -> SCNNode?
```

## Parameters

- `renderer`: The [ARSCNView](../arscnview.md) object rendering the scene.
- `anchor`: The anchor for which a node is requested.

<a id="return-value"></a>

## Return Value

A new SceneKit node, which ARKit will add to the scene and update to follow its corresponding AR anchor.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [add(anchor:)](../arsession/add%28anchor_%29.md) method.

You can implement this method to provide a new [SCNNode](../../scenekit/scnnode.md) object (or instance of an [SCNNode](../../scenekit/scnnode.md) subclass) containing any attachments you plan to use as a visual representation of the anchor. Note that ARKit controls the node’s visibility and its [transform](../../scenekit/scnnode/transform.md) property, so you may find it useful to add child nodes or adjust the node’s [pivot](../../scenekit/scnnode/pivot.md) property to maintain any changes to position or orientation that you make.

If you return `nil` from this method, no node is added to the scene.

Alternatively, if you do not implement this method, ARKit creates an empty node, and you can implement the [renderer(\_:didAdd:for:)](renderer%28__didadd_for_%29.md) method instead to provide visual content by attaching it to that node.

## See Also

### Handling Content Updates

- [renderer(\_:didAdd:for:)](renderer%28__didadd_for_%29.md): Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.
- [renderer(\_:willUpdate:for:)](renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer(\_:didUpdate:for:)](renderer%28__didupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.
- [renderer(\_:didRemove:for:)](renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.

# renderer:nodeForAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.

## Declaration

```objectivec
- (SCNNode *) renderer:(id<SCNSceneRenderer>) renderer nodeForAnchor:(ARAnchor *) anchor;
```

## Parameters

- `renderer`: The [ARSCNView](../arscnview.md) object rendering the scene.
- `anchor`: The anchor for which a node is requested.

<a id="return-value"></a>

## Return Value

A new SceneKit node, which ARKit will add to the scene and update to follow its corresponding AR anchor.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session. ARKit also calls this method to provide visual content for any [ARAnchor](../aranchor.md) objects you manually add using the session’s [addAnchor:](../arsession/add%28anchor_%29.md) method.

You can implement this method to provide a new [SCNNode](../../scenekit/scnnode.md) object (or instance of an [SCNNode](../../scenekit/scnnode.md) subclass) containing any attachments you plan to use as a visual representation of the anchor. Note that ARKit controls the node’s visibility and its [transform](../../scenekit/scnnode/transform.md) property, so you may find it useful to add child nodes or adjust the node’s [pivot](../../scenekit/scnnode/pivot.md) property to maintain any changes to position or orientation that you make.

If you return `nil` from this method, no node is added to the scene.

Alternatively, if you do not implement this method, ARKit creates an empty node, and you can implement the [renderer:didAddNode:forAnchor:](renderer%28__didadd_for_%29.md) method instead to provide visual content by attaching it to that node.

## See Also

### Handling Content Updates

- [renderer:didAddNode:forAnchor:](renderer%28__didadd_for_%29.md): Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.
- [renderer:willUpdateNode:forAnchor:](renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer:didUpdateNode:forAnchor:](renderer%28__didupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.
- [renderer:didRemoveNode:forAnchor:](renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.
