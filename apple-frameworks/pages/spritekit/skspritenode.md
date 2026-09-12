> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode](https://developer.apple.com/documentation/spritekit/skspritenode)

# SKSpriteNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An image or solid color.

## Declaration

```swift
class SKSpriteNode
```

## Mentioned In

- [Getting Started with Shape Nodes](getting-started-with-shape-nodes.md)
- [Adding a Video to a Scene](adding-a-video-to-a-scene.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Loading and Using Textures](loading-and-using-textures.md)

<a id="overview"></a>

## Overview

`SKSpriteNode` is an onscreen graphical element that can be initialized from an image or a solid color. SpriteKit adds functionality to its ability to display images using the functions discussed below.

## Topics

### Creating a Sprite from an Image Filename

Start with the basic ways to configure and use a sprite node.

- [Getting Started with Sprite Nodes](getting-started-with-sprite-nodes.md): Learn the basics about using images, also known as sprites, with SpriteKit.
- [init(imageNamed:)](skspritenode/init%28imagenamed_%29.md): Initializes a textured sprite using an image file.
- [init(imageNamed:normalMapped:)](skspritenode/init%28imagenamed_normalmapped_%29.md): Initializes a textured sprite using an image file, optionally adding a normal map to simulate 3D lighting.

### Creating a Sprite from a Texture

Reuse a texture across multiple sprite nodes using initializers or the setter.

- [init(texture:)](skspritenode/init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [init(texture:color:size:)](skspritenode/init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [init(texture:size:)](skspritenode/init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [init(texture:normalMap:)](skspritenode/init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](skspritenode/texture.md): The texture used to draw the sprite.

### Creating a Solid-Color Sprite

Create a colored block of any size that’s also useful for visual debugging.

- [init(color:size:)](skspritenode/init%28color_size_%29.md): Initializes a single-color sprite node.

### Initializing a Sprite from an Archive

- [init(coder:)](skspritenode/init%28coder_%29.md): Tells you when to initialize a sprite from an archive.

### Setting a Sprite’s Size and Position

Control a sprite’s onscreen placement and size.

- [Using the Anchor Point to Move a Sprite](using-the-anchor-point-to-move-a-sprite.md): Learn how the anchor point affects a sprite’s position.
- [size](skspritenode/size.md): The dimensions of the sprite, in points.
- [scale(to:)](skspritenode/scale%28to_%29.md): Scales the sprite node to a specified size.
- [anchorPoint](skspritenode/anchorpoint.md): Defines the point in the sprite that corresponds to the node’s position.

### Scaling a Sprite in Nine Parts

Resize a sprite in nine parts by defining a center rectangle.

- [Resizing a Sprite in Nine Parts](resizing-a-sprite-in-nine-parts.md): Scale a sprite using nine-part algorithm.
- [centerRect](skspritenode/centerrect.md): Enable nine-part stretching of the sprite’s texture.

### Tinting a Sprite

Combine color and blend factor properties to colorize a textured sprite.

- [Tinting a Sprite](tinting-a-sprite.md): Provide a color and blend factor to additively color your sprite.
- [color](skspritenode/color.md): The sprite’s color.
- [colorBlendFactor](skspritenode/colorblendfactor.md): A floating-point value that describes how the color is blended with the sprite’s texture.

### Configuring Alpha Blendling

Determine how a sprite uses an alpha value, such as additive blending, that results in the sprite being brighter than it was before.

- [Blending a Sprite with Different Interpretations of Alpha](blending-a-sprite-with-different-interpretations-of-alpha.md): Reinterpret a sprite’s alpha property to react differently to the objects below it.
- [blendMode](skspritenode/blendmode.md): The blend mode used to draw the sprite into the parent’s framebuffer.
- [SKBlendMode](skblendmode.md): The modes that describe how the source and destination pixel colors are used to calculate the new destination color.

### Lighting a Sprite

Configure how a sprite is lit when it’s near a light node.

- [Lighting a Sprite with Light Nodes](lighting-a-sprite-with-light-nodes.md): Add lighting and shadows to your scene with light nodes.
- [lightingBitMask](skspritenode/lightingbitmask.md): A mask that defines how this sprite is lit by light nodes in the scene.
- [shadowedBitMask](skspritenode/shadowedbitmask.md): A mask that defines which lights add shadows to the sprite.
- [shadowCastBitMask](skspritenode/shadowcastbitmask.md): A mask that defines which lights are occluded by this sprite.
- [normalTexture](skspritenode/normaltexture.md): A texture that specifies the normal map for the sprite.

### Adding a Custom Shader to a Sprite

Supply a code file that does custom per-pixel rendering or colorization of a sprite.

- [Applying Shaders to a Sprite](applying-shaders-to-a-sprite.md): Write custom GLSL code that modifies the look of your sprite.
- [shader](skspritenode/shader.md): A text file that defines code that does custom per-pixel drawing or colorization.
- [attributeValues](skspritenode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](skspritenode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](skspritenode/value%28forattributenamed_%29.md): Sets the value of a shader attribute.

### Animating a Sprite by Changing its Texture

- [Animating a Sprite by Changing its Texture](animating-a-sprite-by-changing-its-texture.md): Load a sequence of images and play them back at a rate you define, while optionally looping the resulting animation.

### Instance Properties

- [customPlaygroundQuickLook](skspritenode/customplaygroundquicklook.md): Deprecated. A custom playground quick look for this instance.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [SKWarpable](skwarpable.md)
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
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.

# SKSpriteNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An image or solid color.

## Declaration

```objectivec
@interface SKSpriteNode : SKNode
```

## Mentioned In

- [Getting Started with Shape Nodes](getting-started-with-shape-nodes.md)
- [Adding a Video to a Scene](adding-a-video-to-a-scene.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Loading and Using Textures](loading-and-using-textures.md)

<a id="overview"></a>

## Overview

`SKSpriteNode` is an onscreen graphical element that can be initialized from an image or a solid color. SpriteKit adds functionality to its ability to display images using the functions discussed below.

## Topics

### Creating a Sprite from an Image Filename

Start with the basic ways to configure and use a sprite node.

- [Getting Started with Sprite Nodes](getting-started-with-sprite-nodes.md): Learn the basics about using images, also known as sprites, with SpriteKit.
- [initWithImageNamed:](skspritenode/init%28imagenamed_%29.md): Initializes a textured sprite using an image file.
- [spriteNodeWithImageNamed:normalMapped:](skspritenode/init%28imagenamed_normalmapped_%29.md): Initializes a textured sprite using an image file, optionally adding a normal map to simulate 3D lighting.

### Creating a Sprite from a Texture

Reuse a texture across multiple sprite nodes using initializers or the setter.

- [initWithTexture:](skspritenode/init%28texture_%29.md): Initializes a textured sprite using an existing texture object.
- [initWithTexture:color:size:](skspritenode/init%28texture_color_size_%29.md): Initializes a textured sprite in color using an existing texture object.
- [spriteNodeWithColor:size:](skspritenode/spritenodewithcolor_size_.md): Initializes a single-color sprite.
- [spriteNodeWithImageNamed:](skspritenode/spritenodewithimagenamed_.md): Initializes a textured sprite using an image file.
- [spriteNodeWithTexture:](skspritenode/spritenodewithtexture_.md): Initializes a textured sprite using an existing texture object.
- [spriteNodeWithTexture:size:](skspritenode/init%28texture_size_%29.md): Initializes a textured sprite using an existing texture object but with a specified size.
- [spriteNodeWithTexture:normalMap:](skspritenode/init%28texture_normalmap_%29.md): Initializes a textured sprite with a normal map to simulate 3D lighting.
- [texture](skspritenode/texture.md): The texture used to draw the sprite.

### Creating a Solid-Color Sprite

Create a colored block of any size that’s also useful for visual debugging.

- [initWithColor:size:](skspritenode/init%28color_size_%29.md): Initializes a single-color sprite node.

### Initializing a Sprite from an Archive

- [initWithCoder:](skspritenode/init%28coder_%29.md): Tells you when to initialize a sprite from an archive.

### Setting a Sprite’s Size and Position

Control a sprite’s onscreen placement and size.

- [Using the Anchor Point to Move a Sprite](using-the-anchor-point-to-move-a-sprite.md): Learn how the anchor point affects a sprite’s position.
- [size](skspritenode/size.md): The dimensions of the sprite, in points.
- [scaleToSize:](skspritenode/scale%28to_%29.md): Scales the sprite node to a specified size.
- [anchorPoint](skspritenode/anchorpoint.md): Defines the point in the sprite that corresponds to the node’s position.

### Scaling a Sprite in Nine Parts

Resize a sprite in nine parts by defining a center rectangle.

- [Resizing a Sprite in Nine Parts](resizing-a-sprite-in-nine-parts.md): Scale a sprite using nine-part algorithm.
- [centerRect](skspritenode/centerrect.md): Enable nine-part stretching of the sprite’s texture.

### Tinting a Sprite

Combine color and blend factor properties to colorize a textured sprite.

- [Tinting a Sprite](tinting-a-sprite.md): Provide a color and blend factor to additively color your sprite.
- [color](skspritenode/color.md): The sprite’s color.
- [colorBlendFactor](skspritenode/colorblendfactor.md): A floating-point value that describes how the color is blended with the sprite’s texture.

### Configuring Alpha Blendling

Determine how a sprite uses an alpha value, such as additive blending, that results in the sprite being brighter than it was before.

- [Blending a Sprite with Different Interpretations of Alpha](blending-a-sprite-with-different-interpretations-of-alpha.md): Reinterpret a sprite’s alpha property to react differently to the objects below it.
- [blendMode](skspritenode/blendmode.md): The blend mode used to draw the sprite into the parent’s framebuffer.
- [SKBlendMode](skblendmode.md): The modes that describe how the source and destination pixel colors are used to calculate the new destination color.

### Lighting a Sprite

Configure how a sprite is lit when it’s near a light node.

- [Lighting a Sprite with Light Nodes](lighting-a-sprite-with-light-nodes.md): Add lighting and shadows to your scene with light nodes.
- [lightingBitMask](skspritenode/lightingbitmask.md): A mask that defines how this sprite is lit by light nodes in the scene.
- [shadowedBitMask](skspritenode/shadowedbitmask.md): A mask that defines which lights add shadows to the sprite.
- [shadowCastBitMask](skspritenode/shadowcastbitmask.md): A mask that defines which lights are occluded by this sprite.
- [normalTexture](skspritenode/normaltexture.md): A texture that specifies the normal map for the sprite.

### Adding a Custom Shader to a Sprite

Supply a code file that does custom per-pixel rendering or colorization of a sprite.

- [Applying Shaders to a Sprite](applying-shaders-to-a-sprite.md): Write custom GLSL code that modifies the look of your sprite.
- [shader](skspritenode/shader.md): A text file that defines code that does custom per-pixel drawing or colorization.
- [attributeValues](skspritenode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](skspritenode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](skspritenode/value%28forattributenamed_%29.md): Sets the value of a shader attribute.

### Animating a Sprite by Changing its Texture

- [Animating a Sprite by Changing its Texture](animating-a-sprite-by-changing-its-texture.md): Load a sequence of images and play them back at a rate you define, while optionally looping the resulting animation.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [SKWarpable](skwarpable.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.
