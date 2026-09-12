> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/scene](https://developer.apple.com/documentation/arkit/arscnview/scene)

# scene (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The SceneKit scene to be displayed in the view.

## Declaration

```swift
var scene: SCNScene { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Unlike the parent [SCNView](../../scenekit/scnview.md) class, an [ARSCNView](../arscnview.md) object requires a non-`nil` scene to display.

## See Also

### Essentials

- [Providing 3D Virtual Content with SceneKit](../providing-3d-virtual-content-with-scenekit.md): Use SceneKit to add realistic three-dimensional objects to your AR experience.
- [session](session.md): The AR session that manages motion tracking and camera image processing for the view’s contents.

# scene (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The SceneKit scene to be displayed in the view.

## Declaration

```objectivec
@property (nonatomic, strong) SCNScene * scene;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Unlike the parent [SCNView](../../scenekit/scnview.md) class, an [ARSCNView](../arscnview.md) object requires a non-`nil` scene to display.

## See Also

### Essentials

- [Providing 3D Virtual Content with SceneKit](../providing-3d-virtual-content-with-scenekit.md): Use SceneKit to add realistic three-dimensional objects to your AR experience.
- [session](session.md): The AR session that manages motion tracking and camera image processing for the view’s contents.
