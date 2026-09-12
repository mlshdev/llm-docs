> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skeffectnode](https://developer.apple.com/documentation/spritekit/skeffectnode)

# SKEffectNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.

## Declaration

```swift
class SKEffectNode
```

## Mentioned In

- [About Node Drawing Order](about-node-drawing-order.md)
- [Adding a Video to a Scene](adding-a-video-to-a-scene.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

<a id="overview"></a>

## Overview

An [SKEffectNode](skeffectnode.md) object renders its children into a buffer and optionally applies a Core Image filter to this rendered output. Because effect nodes conform to [SKWarpable](skwarpable.md), you can also use them to apply distortions to nodes that don’t implement the protocol, such as shape and video nodes. Use effect nodes to incorporate sophisticated special effects into a scene or to cache the contents of a static subtree for faster rendering performance.

Each time a new frame is rendered using the effect node, the effect node follows these steps:

1. It draws its children into a private framebuffer.
2. It applies a Core Image effect to the private framebuffer. This stage is optional; see the [filter](skeffectnode/filter.md) and [shouldEnableEffects](skeffectnode/shouldenableeffects.md) properties.
3. It blends the contents of its private framebuffer into its parent’s framebuffer, using one of the standard sprite blend modes.
4. It discards its private framebuffer. This step is optional; see the [shouldRasterize](skeffectnode/shouldrasterize.md) property.

## Topics

### Applying Core Image Filters with an Effect Node

- [Applying Special Effects to a Node’s Children](applying-special-effects-to-a-node-s-children.md): Apply the Core Image suite of filters to child nodes of an effect node.
- [filter](skeffectnode/filter.md): The Core Image filter to apply.
- [shouldEnableEffects](skeffectnode/shouldenableeffects.md): A Boolean value that determines whether the effect node applies the filter to its children as they are drawn.
- [shouldCenterFilter](skeffectnode/shouldcenterfilter.md): A Boolean value that determines whether the effect node automatically sets the filter’s image center.

### Warping Nodes with an Effect Node

- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md): Distort the child nodes of an effect node by applying a warping effect.

### Applying a Shader with an Effect Node

Supply a code file that does custom per-pixel alteration or colorization of an effect node’s children.

- [shader](skeffectnode/shader.md): A custom shader that is called when the effect node is blended into the parent’s framebuffer.
- [attributeValues](skeffectnode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](skeffectnode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](skeffectnode/value%28forattributenamed_%29.md): Gets the value of a shader attribute.

### Flattening an Effect Node’s Child Tree for Performance Improvement

- [Improving the Performance of Static Content](improving-the-performance-of-static-content.md): Flatten a portion of your node hierarchy to a single texture to improve performance.
- [shouldRasterize](skeffectnode/shouldrasterize.md): A Boolean value that indicates whether the results of rendering the child nodes should be cached.

### Configuring Alpha Blending

Change how an effect node uses its alpha value, such as additive blending, that results in the sprite being brighter than it was before.

- [blendMode](skeffectnode/blendmode.md): The blend mode used to draw the node’s contents into its parent’s framebuffer.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Inherited By

- [SKScene](skscene.md)

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

### Nodes that Modify Drawing

- [SKCropNode](skcropnode.md): A node that masks pixels drawn by its children so that only some pixels are seen.
- [SKTransformNode](sktransformnode.md): A node that allows its children to rotate in 3D.

# SKEffectNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.

## Declaration

```objectivec
@interface SKEffectNode : SKNode
```

## Mentioned In

- [About Node Drawing Order](about-node-drawing-order.md)
- [Adding a Video to a Scene](adding-a-video-to-a-scene.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

<a id="overview"></a>

## Overview

An [SKEffectNode](skeffectnode.md) object renders its children into a buffer and optionally applies a Core Image filter to this rendered output. Because effect nodes conform to [SKWarpable](skwarpable.md), you can also use them to apply distortions to nodes that don’t implement the protocol, such as shape and video nodes. Use effect nodes to incorporate sophisticated special effects into a scene or to cache the contents of a static subtree for faster rendering performance.

Each time a new frame is rendered using the effect node, the effect node follows these steps:

1. It draws its children into a private framebuffer.
2. It applies a Core Image effect to the private framebuffer. This stage is optional; see the [filter](skeffectnode/filter.md) and [shouldEnableEffects](skeffectnode/shouldenableeffects.md) properties.
3. It blends the contents of its private framebuffer into its parent’s framebuffer, using one of the standard sprite blend modes.
4. It discards its private framebuffer. This step is optional; see the [shouldRasterize](skeffectnode/shouldrasterize.md) property.

## Topics

### Applying Core Image Filters with an Effect Node

- [Applying Special Effects to a Node’s Children](applying-special-effects-to-a-node-s-children.md): Apply the Core Image suite of filters to child nodes of an effect node.
- [filter](skeffectnode/filter.md): The Core Image filter to apply.
- [shouldEnableEffects](skeffectnode/shouldenableeffects.md): A Boolean value that determines whether the effect node applies the filter to its children as they are drawn.
- [shouldCenterFilter](skeffectnode/shouldcenterfilter.md): A Boolean value that determines whether the effect node automatically sets the filter’s image center.

### Warping Nodes with an Effect Node

- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md): Distort the child nodes of an effect node by applying a warping effect.

### Applying a Shader with an Effect Node

Supply a code file that does custom per-pixel alteration or colorization of an effect node’s children.

- [shader](skeffectnode/shader.md): A custom shader that is called when the effect node is blended into the parent’s framebuffer.
- [attributeValues](skeffectnode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](skeffectnode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](skeffectnode/value%28forattributenamed_%29.md): Gets the value of a shader attribute.

### Flattening an Effect Node’s Child Tree for Performance Improvement

- [Improving the Performance of Static Content](improving-the-performance-of-static-content.md): Flatten a portion of your node hierarchy to a single texture to improve performance.
- [shouldRasterize](skeffectnode/shouldrasterize.md): A Boolean value that indicates whether the results of rendering the child nodes should be cached.

### Configuring Alpha Blending

Change how an effect node uses its alpha value, such as additive blending, that results in the sprite being brighter than it was before.

- [blendMode](skeffectnode/blendmode.md): The blend mode used to draw the node’s contents into its parent’s framebuffer.

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Inherited By

- [SKScene](skscene.md)

### Conforms To

- [SKWarpable](skwarpable.md)

## See Also

### Nodes that Modify Drawing

- [SKCropNode](skcropnode.md): A node that masks pixels drawn by its children so that only some pixels are seen.
- [SKTransformNode](sktransformnode.md): A node that allows its children to rotate in 3D.
