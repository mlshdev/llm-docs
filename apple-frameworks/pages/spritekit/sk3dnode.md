> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode](https://developer.apple.com/documentation/spritekit/sk3dnode)

# SK3DNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

3D SceneKit content drawn as a flattened sprite.

## Declaration

```swift
class SK3DNode
```

## Mentioned In

- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md)

<a id="overview"></a>

## Overview

Use [SK3DNode](sk3dnode.md) objects to incorporate 3D SceneKit content into a SpriteKit-based game. When SpriteKit renders the node, the SceneKit scene is animated and rendered first. Then this rendered image is composited into the SpriteKit scene. Use the [scnScene](sk3dnode/scnscene.md) property to specify the SceneKit scene to be rendered.

## Topics

### Getting Started with 3D Node

- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md): Draw SceneKit content in a SpriteKit scene by using a 3D node.

### Creating 3D Nodes

- [init(viewportSize:)](sk3dnode/init%28viewportsize_%29.md): Initializes a new 3D node.
- [init(coder:)](sk3dnode/init%28coder_%29.md): Tells you when to initialize a 3D node that has been unarchived.

### Configuring a 3D Node

- [viewportSize](sk3dnode/viewportsize.md): The size of the image rendered by the node.
- [scnScene](sk3dnode/scnscene.md): The SceneKit scene to render.
- [pointOfView](sk3dnode/pointofview.md): The Scene Kit node from which the scene’s contents are viewed when rendered.
- [autoenablesDefaultLighting](sk3dnode/autoenablesdefaultlighting.md): A Boolean value that determines whether Scene Kit automatically adds lights to a scene.

### Animating a 3D Node’s Content in Scene Kit

- [isPlaying](sk3dnode/isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](sk3dnode/loops.md): A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.
- [sceneTime](sk3dnode/scenetime.md): The current scene time.

### Projecting Points and Performing Hit-Testing

- [hitTest(\_:options:)](sk3dnode/hittest%28__options_%29.md): Searches the Scene Kit scene for objects corresponding to a point in the rendered image.
- [projectPoint(\_:)](sk3dnode/projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the SceneKit scene to the 2D viewport coordinate system of the SpriteKit node.
- [unprojectPoint(\_:)](sk3dnode/unprojectpoint%28__%29.md): Unprojects a point from the SpriteKit node’s 2D viewport coordinate system to the 3D world coordinate system of the SceneKit scene.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.

# SK3DNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

3D SceneKit content drawn as a flattened sprite.

## Declaration

```objectivec
@interface SK3DNode : SKNode
```

## Mentioned In

- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md)

<a id="overview"></a>

## Overview

Use [SK3DNode](sk3dnode.md) objects to incorporate 3D SceneKit content into a SpriteKit-based game. When SpriteKit renders the node, the SceneKit scene is animated and rendered first. Then this rendered image is composited into the SpriteKit scene. Use the [scnScene](sk3dnode/scnscene.md) property to specify the SceneKit scene to be rendered.

## Topics

### Getting Started with 3D Node

- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md): Draw SceneKit content in a SpriteKit scene by using a 3D node.

### Creating 3D Nodes

- [nodeWithViewportSize:](sk3dnode/nodewithviewportsize_.md): Creates and initializes a new 3D node.
- [initWithViewportSize:](sk3dnode/init%28viewportsize_%29.md): Initializes a new 3D node.
- [initWithCoder:](sk3dnode/init%28coder_%29.md): Tells you when to initialize a 3D node that has been unarchived.

### Configuring a 3D Node

- [viewportSize](sk3dnode/viewportsize.md): The size of the image rendered by the node.
- [scnScene](sk3dnode/scnscene.md): The SceneKit scene to render.
- [pointOfView](sk3dnode/pointofview.md): The Scene Kit node from which the scene’s contents are viewed when rendered.
- [autoenablesDefaultLighting](sk3dnode/autoenablesdefaultlighting.md): A Boolean value that determines whether Scene Kit automatically adds lights to a scene.

### Animating a 3D Node’s Content in Scene Kit

- [playing](sk3dnode/isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](sk3dnode/loops.md): A Boolean value that determines whether Scene Kit restarts the scene time after all animations in the scene have played.
- [sceneTime](sk3dnode/scenetime.md): The current scene time.

### Projecting Points and Performing Hit-Testing

- [hitTest:options:](sk3dnode/hittest%28__options_%29.md): Searches the Scene Kit scene for objects corresponding to a point in the rendered image.
- [projectPoint:](sk3dnode/projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the SceneKit scene to the 2D viewport coordinate system of the SpriteKit node.
- [unprojectPoint:](sk3dnode/unprojectpoint%28__%29.md): Unprojects a point from the SpriteKit node’s 2D viewport coordinate system to the 3D world coordinate system of the SceneKit scene.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
