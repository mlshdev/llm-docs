> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnviewdelegate](https://developer.apple.com/documentation/arkit/arscnviewdelegate)

# ARSCNViewDelegate (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Methods you can implement to mediate the automatic synchronization of SceneKit content with an AR session.

## Declaration

```swift
protocol ARSCNViewDelegate : ARSessionObserver, SCNSceneRendererDelegate
```

## Mentioned In

- [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md)

<a id="overview"></a>

## Overview

Implement this protocol to provide SceneKit content corresponding to [ARAnchor](aranchor.md) objects tracked by the view’s AR session, or to manage the view’s automatic updating of such content.

This protocol extends the [ARSessionObserver](arsessionobserver.md) protocol, so your session delegate can also implement those methods to respond to changes in session status.

## Topics

### Handling Content Updates

- [renderer(\_:nodeFor:)](arscnviewdelegate/renderer%28__nodefor_%29.md): Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.
- [renderer(\_:didAdd:for:)](arscnviewdelegate/renderer%28__didadd_for_%29.md): Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.
- [renderer(\_:willUpdate:for:)](arscnviewdelegate/renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer(\_:didUpdate:for:)](arscnviewdelegate/renderer%28__didupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.
- [renderer(\_:didRemove:for:)](arscnviewdelegate/renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.

## Relationships

### Inherits From

- [ARSessionObserver](arsessionobserver.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [SCNSceneRendererDelegate](../scenekit/scnscenerendererdelegate.md)

## See Also

### Responding to AR Updates

- [delegate](arscnview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SceneKit content.

# ARSCNViewDelegate (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Methods you can implement to mediate the automatic synchronization of SceneKit content with an AR session.

## Declaration

```objectivec
@protocol ARSCNViewDelegate <SCNSceneRendererDelegate, ARSessionObserver>
```

## Mentioned In

- [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md)

<a id="overview"></a>

## Overview

Implement this protocol to provide SceneKit content corresponding to [ARAnchor](aranchor.md) objects tracked by the view’s AR session, or to manage the view’s automatic updating of such content.

This protocol extends the [ARSessionObserver](arsessionobserver.md) protocol, so your session delegate can also implement those methods to respond to changes in session status.

## Topics

### Handling Content Updates

- [renderer:nodeForAnchor:](arscnviewdelegate/renderer%28__nodefor_%29.md): Asks the delegate to provide a SceneKit node corresponding to a newly added anchor.
- [renderer:didAddNode:forAnchor:](arscnviewdelegate/renderer%28__didadd_for_%29.md): Tells the delegate that a SceneKit node corresponding to a new AR anchor has been added to the scene.
- [renderer:willUpdateNode:forAnchor:](arscnviewdelegate/renderer%28__willupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties will be updated to match the current state of its corresponding anchor.
- [renderer:didUpdateNode:forAnchor:](arscnviewdelegate/renderer%28__didupdate_for_%29.md): Tells the delegate that a SceneKit node’s properties have been updated to match the current state of its corresponding anchor.
- [renderer:didRemoveNode:forAnchor:](arscnviewdelegate/renderer%28__didremove_for_%29.md): Tells the delegate that the SceneKit node corresponding to a removed AR anchor has been removed from the scene.

## Relationships

### Inherits From

- [ARSessionObserver](arsessionobserver.md)
- [SCNSceneRendererDelegate](../scenekit/scnscenerendererdelegate.md)

## See Also

### Responding to AR Updates

- [delegate](arscnview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SceneKit content.
