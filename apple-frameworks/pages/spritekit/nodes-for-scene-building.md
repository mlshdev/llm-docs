> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/nodes-for-scene-building](https://developer.apple.com/documentation/spritekit/nodes-for-scene-building)

# Nodes for Scene Building

**Interface languages:** Swift, Objective-C

**Framework:** SpriteKit  
**Kind:** API Collection

Define the appearance or layout of scene content.

## Topics

### Base Nodes

Provide a reference, point of view, or foundation to all things displayed in a scene.

- [Using Base Nodes to Lay Out SpriteKit Content](using-base-nodes-to-lay-out-spritekit-content.md): Use nonvisual nodes to define the layout of a scene.
- [SKNode](sknode.md): The base class of all SpriteKit nodes.
- [SKCameraNode](skcameranode.md): A node that determines which parts of the scene are visible within a view.
- [SKReferenceNode](skreferencenode.md): A node that’s defined in an archived `.sks` file.

### Nodes that Draw

Display images, shapes, particles, text, video, tiles, or even 3D content.

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.

### Nodes for Environmental Effects

Provide environmental effects to your scene, such as audio, lighting, or areas with specific physics characteristics.

- [SKAudioNode](skaudionode.md): A node that plays audio.
- [SKLightNode](sklightnode.md): A node that lights surrounding nodes.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.

### Nodes that Modify Drawing

Modify the rendering of child nodes by cropping, applying Core Image filters, or performing 3D transformations.

- [SKEffectNode](skeffectnode.md): A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.
- [SKCropNode](skcropnode.md): A node that masks pixels drawn by its children so that only some pixels are seen.
- [SKTransformNode](sktransformnode.md): A node that allows its children to rotate in 3D.

## See Also

### Essentials

- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md): Display visual content using SpriteKit.
- [SKScene](skscene.md): An object that organizes all of the active SpriteKit content.
