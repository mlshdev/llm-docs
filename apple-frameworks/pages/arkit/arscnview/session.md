> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/session](https://developer.apple.com/documentation/arkit/arscnview/session)

# session (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The AR session that manages motion tracking and camera image processing for the view’s contents.

## Declaration

```swift
var session: ARSession { get set }
```

<a id="Discussion"></a>

## Discussion

A view creates its own session object; use this property to access and configure the view’s session.

## See Also

### Essentials

- [Providing 3D Virtual Content with SceneKit](../providing-3d-virtual-content-with-scenekit.md): Use SceneKit to add realistic three-dimensional objects to your AR experience.
- [scene](scene.md): The SceneKit scene to be displayed in the view.

# session (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The AR session that manages motion tracking and camera image processing for the view’s contents.

## Declaration

```objectivec
@property (nonatomic, strong) ARSession * session;
```

<a id="Discussion"></a>

## Discussion

A view creates its own session object; use this property to access and configure the view’s session.

## See Also

### Essentials

- [Providing 3D Virtual Content with SceneKit](../providing-3d-virtual-content-with-scenekit.md): Use SceneKit to add realistic three-dimensional objects to your AR experience.
- [scene](scene.md): The SceneKit scene to be displayed in the view.
