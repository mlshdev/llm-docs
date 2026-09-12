> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/autoenablesdefaultlighting](https://developer.apple.com/documentation/spritekit/sk3dnode/autoenablesdefaultlighting)

# autoenablesDefaultLighting (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether Scene Kit automatically adds lights to a scene.

## Declaration

```swift
var autoenablesDefaultLighting: Bool { get set }
```

## Mentioned In

- [Displaying 3D Content in a SpriteKit Scene](../displaying-3d-content-in-a-spritekit-scene.md)

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit automatically adds and places an omnidirectional light source when rendering scenes that contain no lights or only contain ambient lights. If you change the value to false, the only light sources SceneKit uses for rendering a scene are those contained in the scene graph.

## See Also

### Configuring a 3D Node

- [viewportSize](viewportsize.md): The size of the image rendered by the node.
- [scnScene](scnscene.md): The SceneKit scene to render.
- [pointOfView](pointofview.md): The Scene Kit node from which the scene’s contents are viewed when rendered.

# autoenablesDefaultLighting (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether Scene Kit automatically adds lights to a scene.

## Declaration

```objectivec
@property (nonatomic) BOOL autoenablesDefaultLighting;
```

## Mentioned In

- [Displaying 3D Content in a SpriteKit Scene](../displaying-3d-content-in-a-spritekit-scene.md)

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit automatically adds and places an omnidirectional light source when rendering scenes that contain no lights or only contain ambient lights. If you change the value to false, the only light sources SceneKit uses for rendering a scene are those contained in the scene graph.

## See Also

### Configuring a 3D Node

- [viewportSize](viewportsize.md): The size of the image rendered by the node.
- [scnScene](scnscene.md): The SceneKit scene to render.
- [pointOfView](pointofview.md): The Scene Kit node from which the scene’s contents are viewed when rendered.
