> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/pointofview](https://developer.apple.com/documentation/spritekit/sk3dnode/pointofview)

# pointOfView (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The Scene Kit node from which the scene’s contents are viewed when rendered.

## Declaration

```swift
var pointOfView: SCNNode? { get set }
```

<a id="Discussion"></a>

## Discussion

Use a [SCNNode](../../scenekit/scnnode.md) object with an [SCNCamera](../../scenekit/scncamera.md) instance assigned to its [camera](../../scenekit/scnnode/camera.md) property to view a scene. This SceneKit node provides the position and direction of a virtual camera, and the camera object provides rendering parameters such as field of view and focus. The direction of view is along the negative z-axis of the SceneKit node’s local coordinate space.

## See Also

### Configuring a 3D Node

- [viewportSize](viewportsize.md): The size of the image rendered by the node.
- [scnScene](scnscene.md): The SceneKit scene to render.
- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether Scene Kit automatically adds lights to a scene.

# pointOfView (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The Scene Kit node from which the scene’s contents are viewed when rendered.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNNode * pointOfView;
```

<a id="Discussion"></a>

## Discussion

Use a [SCNNode](../../scenekit/scnnode.md) object with an [SCNCamera](../../scenekit/scncamera.md) instance assigned to its [camera](../../scenekit/scnnode/camera.md) property to view a scene. This SceneKit node provides the position and direction of a virtual camera, and the camera object provides rendering parameters such as field of view and focus. The direction of view is along the negative z-axis of the SceneKit node’s local coordinate space.

## See Also

### Configuring a 3D Node

- [viewportSize](viewportsize.md): The size of the image rendered by the node.
- [scnScene](scnscene.md): The SceneKit scene to render.
- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether Scene Kit automatically adds lights to a scene.
