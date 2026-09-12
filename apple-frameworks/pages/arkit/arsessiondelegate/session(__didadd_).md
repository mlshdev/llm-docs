> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessiondelegate/session(_:didadd:)](https://developer.apple.com/documentation/arkit/arsessiondelegate/session(_:didadd:))

# session(\_:didAdd:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that one or more anchors have been added to the session.

## Declaration

```swift
optional func session(_ session: ARSession, didAdd anchors: [ARAnchor])
```

## Parameters

- `session`: The session providing information.
- `anchors`: The anchors newly added to the session.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session.

If you display an AR experience using SceneKit or SpriteKit, you can instead implement one of the following methods instead to track not only the addition of anchors to the session but also how to add SceneKit or SpriteKit content to the corresponding scene:

- [ARSCNView](../arscnview.md): [renderer(\_:nodeFor:)](../arscnviewdelegate/renderer%28__nodefor_%29.md) or [renderer(\_:didAdd:for:)](../arscnviewdelegate/renderer%28__didadd_for_%29.md)
- [ARSKView](../arskview.md): [node(for:)](../arskview/node%28for_%29.md) or [view(\_:didAdd:for:)](../arskviewdelegate/view%28__didadd_for_%29.md)

## See Also

### Handling Content Updates

- [session(\_:didUpdate:)](session%28__didupdate_%29-3qtt8.md): Tells the delegate that the session has adjusted the properties of one or more anchors.
- [session(\_:didRemove:)](session%28__didremove_%29.md): Tells the delegate that one or more anchors have been removed from the session.

# session:didAddAnchors: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that one or more anchors have been added to the session.

## Declaration

```objectivec
- (void) session:(ARSession *) session didAddAnchors:(NSArray<__kindof ARAnchor *> *) anchors;
```

## Parameters

- `session`: The session providing information.
- `anchors`: The anchors newly added to the session.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically add anchors to a session.

If you display an AR experience using SceneKit or SpriteKit, you can instead implement one of the following methods instead to track not only the addition of anchors to the session but also how to add SceneKit or SpriteKit content to the corresponding scene:

- [ARSCNView](../arscnview.md): [renderer:nodeForAnchor:](../arscnviewdelegate/renderer%28__nodefor_%29.md) or [renderer:didAddNode:forAnchor:](../arscnviewdelegate/renderer%28__didadd_for_%29.md)
- [ARSKView](../arskview.md): [nodeForAnchor:](../arskview/node%28for_%29.md) or [view:didAddNode:forAnchor:](../arskviewdelegate/view%28__didadd_for_%29.md)

## See Also

### Handling Content Updates

- [session:didUpdateAnchors:](session%28__didupdate_%29-3qtt8.md): Tells the delegate that the session has adjusted the properties of one or more anchors.
- [session:didRemoveAnchors:](session%28__didremove_%29.md): Tells the delegate that one or more anchors have been removed from the session.
