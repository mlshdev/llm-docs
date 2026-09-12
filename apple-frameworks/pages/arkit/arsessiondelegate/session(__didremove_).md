> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessiondelegate/session(_:didremove:)](https://developer.apple.com/documentation/arkit/arsessiondelegate/session(_:didremove:))

# session(\_:didRemove:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that one or more anchors have been removed from the session.

## Declaration

```swift
optional func session(_ session: ARSession, didRemove anchors: [ARAnchor])
```

## Parameters

- `session`: The session providing information.
- `anchors`: The anchors newly removed from the session.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically remove anchors from a session.

If you display an AR experience using SceneKit or SpriteKit, you can instead implement one of the following methods instead to track not only the anchors in the session but also any corresponding SceneKit or SpriteKit content:

- [ARSCNView](../arscnview.md): [renderer(\_:didRemove:for:)](../arscnviewdelegate/renderer%28__didremove_for_%29.md)
- [ARSKView](../arskview.md): [view(\_:didRemove:for:)](../arskviewdelegate/view%28__didremove_for_%29.md)

## See Also

### Handling Content Updates

- [session(\_:didAdd:)](session%28__didadd_%29.md): Tells the delegate that one or more anchors have been added to the session.
- [session(\_:didUpdate:)](session%28__didupdate_%29-3qtt8.md): Tells the delegate that the session has adjusted the properties of one or more anchors.

# session:didRemoveAnchors: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that one or more anchors have been removed from the session.

## Declaration

```objectivec
- (void) session:(ARSession *) session didRemoveAnchors:(NSArray<__kindof ARAnchor *> *) anchors;
```

## Parameters

- `session`: The session providing information.
- `anchors`: The anchors newly removed from the session.

<a id="Discussion"></a>

## Discussion

Depending on the session configuration, ARKit may automatically remove anchors from a session.

If you display an AR experience using SceneKit or SpriteKit, you can instead implement one of the following methods instead to track not only the anchors in the session but also any corresponding SceneKit or SpriteKit content:

- [ARSCNView](../arscnview.md): [renderer:didRemoveNode:forAnchor:](../arscnviewdelegate/renderer%28__didremove_for_%29.md)
- [ARSKView](../arskview.md): [view:didRemoveNode:forAnchor:](../arskviewdelegate/view%28__didremove_for_%29.md)

## See Also

### Handling Content Updates

- [session:didAddAnchors:](session%28__didadd_%29.md): Tells the delegate that one or more anchors have been added to the session.
- [session:didUpdateAnchors:](session%28__didupdate_%29-3qtt8.md): Tells the delegate that the session has adjusted the properties of one or more anchors.
