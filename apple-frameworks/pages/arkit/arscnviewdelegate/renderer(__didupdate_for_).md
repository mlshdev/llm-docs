> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnviewdelegate/renderer(_:didupdate:for:)](https://developer.apple.com/documentation/arkit/arscnviewdelegate/renderer(_:didupdate:for:))

# renderer(\_:didUpdate:for:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.

## Declaration

```swift
optional func renderer(_ renderer: any SCNSceneRenderer, didUpdate node: SCNNode, for anchor: ARAnchor)
```

## Parameters

- `renderer`: The [ARSCNView](../arscnview.md) object rendering the scene.
- `node`: The updated SceneKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically update anchors in a session. The view calls this method once for each updated anchor.

## See Also

### Handling Content Updates

- [renderer(\_:nodeFor:)](renderer%28__nodefor_%29.md): Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.
- [renderer(\_:didAdd:for:)](renderer%28__didadd_for_%29.md): Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.
- [renderer(\_:willUpdate:for:)](renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer(\_:didRemove:for:)](renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.

# renderer:didUpdateNode:forAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.

## Declaration

```objectivec
- (void) renderer:(id<SCNSceneRenderer>) renderer didUpdateNode:(SCNNode *) node forAnchor:(ARAnchor *) anchor;
```

## Parameters

- `renderer`: The [ARSCNView](../arscnview.md) object rendering the scene.
- `node`: The updated SceneKit node.
- `anchor`: The AR anchor corresponding to the node.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically update anchors in a session. The view calls this method once for each updated anchor.

## See Also

### Handling Content Updates

- [renderer:nodeForAnchor:](renderer%28__nodefor_%29.md): Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.
- [renderer:didAddNode:forAnchor:](renderer%28__didadd_for_%29.md): Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.
- [renderer:willUpdateNode:forAnchor:](renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer:didRemoveNode:forAnchor:](renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.
