> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessiondelegate/session(_:didupdate:)-3qtt8](https://developer.apple.com/documentation/arkit/arsessiondelegate/session(_:didupdate:)-3qtt8)

# session(\_:didUpdate:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has adjusted the properties of one or more anchors.

## Declaration

```swift
optional func session(_ session: ARSession, didUpdate anchors: [ARAnchor])
```

## Parameters

- `session`: The session providing information.
- `anchors`: The anchors whose properties have changed.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically update the properties of anchors in a session.

If you display an AR experience using SceneKit or SpriteKit, you can implement one of the following methods instead to track not only the anchors in the session but also any corresponding SceneKit or SpriteKit content:

- [ARSCNView](../arscnview.md): [renderer(\_:willUpdate:for:)](../arscnviewdelegate/renderer%28__willupdate_for_%29.md) or [renderer(\_:didUpdate:for:)](../arscnviewdelegate/renderer%28__didupdate_for_%29.md)
- [ARSKView](../arskview.md): [view(\_:willUpdate:for:)](../arskviewdelegate/view%28__willupdate_for_%29.md) or [view(\_:didUpdate:for:)](../arskviewdelegate/view%28__didupdate_for_%29.md)

## See Also

### Handling Content Updates

- [session(\_:didAdd:)](session%28__didadd_%29.md): Tells the delegate that one or more anchors have been added to the session.
- [session(\_:didRemove:)](session%28__didremove_%29.md): Tells the delegate that one or more anchors have been removed from the session.

# session:didUpdateAnchors: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has adjusted the properties of one or more anchors.

## Declaration

```objectivec
- (void) session:(ARSession *) session didUpdateAnchors:(NSArray<__kindof ARAnchor *> *) anchors;
```

## Parameters

- `session`: The session providing information.
- `anchors`: The anchors whose properties have changed.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically update the properties of anchors in a session.

If you display an AR experience using SceneKit or SpriteKit, you can implement one of the following methods instead to track not only the anchors in the session but also any corresponding SceneKit or SpriteKit content:

- [ARSCNView](../arscnview.md): [renderer:willUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__willupdate_for_%29.md) or [renderer:didUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__didupdate_for_%29.md)
- [ARSKView](../arskview.md): [view:willUpdateNode:forAnchor:](../arskviewdelegate/view%28__willupdate_for_%29.md) or [view:didUpdateNode:forAnchor:](../arskviewdelegate/view%28__didupdate_for_%29.md)

## See Also

### Handling Content Updates

- [session:didAddAnchors:](session%28__didadd_%29.md): Tells the delegate that one or more anchors have been added to the session.
- [session:didRemoveAnchors:](session%28__didremove_%29.md): Tells the delegate that one or more anchors have been removed from the session.
