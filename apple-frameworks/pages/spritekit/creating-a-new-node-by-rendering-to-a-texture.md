> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/creating-a-new-node-by-rendering-to-a-texture](https://developer.apple.com/documentation/spritekit/creating-a-new-node-by-rendering-to-a-texture)

# Creating a New Node By Rendering To a Texture (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Render a portion of the node tree into a new texture.

<a id="overview"></a>

## Overview

You can create a texture from some portion of on-screen content with [texture(from:)](skview/texture%28from_%29.md), or its variation, [texture(from:crop:)](skview/texture%28from_crop_%29.md). Both of these functions are available for scenes rendered by [SKView](skview.md) or [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene).

There are a couple reasons you might want to do this, for example:

- Creating a new sprite node whose texture reflects prior shading done with [SKShader](skshader.md)
- Flattening a hierarchy of nodes into a texture, either for performance, or to apply some effect. Note that this can also be done using [SKEffectNode](skeffectnode.md) and setting [shouldRasterize](skeffectnode/shouldrasterize.md) to true.
- Breaking appart an existing node into separate nodes, for example, for an explosion effect.

## See Also

### Snapshotting Nodes to a Texture

- [texture(from:crop:)](skview/texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a texture.
- [texture(from:)](skview/texture%28from_%29.md): Renders the contents of a node tree and returns the rendered image as a texture.

# Creating a New Node By Rendering To a Texture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Render a portion of the node tree into a new texture.

<a id="overview"></a>

## Overview

You can create a texture from some portion of on-screen content with [textureFromNode:](skview/texture%28from_%29.md), or its variation, [textureFromNode:crop:](skview/texture%28from_crop_%29.md). Both of these functions are available for scenes rendered by [SKView](skview.md) or [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene).

There are a couple reasons you might want to do this, for example:

- Creating a new sprite node whose texture reflects prior shading done with [SKShader](skshader.md)
- Flattening a hierarchy of nodes into a texture, either for performance, or to apply some effect. Note that this can also be done using [SKEffectNode](skeffectnode.md) and setting [shouldRasterize](skeffectnode/shouldrasterize.md) to true.
- Breaking appart an existing node into separate nodes, for example, for an explosion effect.

## See Also

### Snapshotting Nodes to a Texture

- [textureFromNode:crop:](skview/texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a texture.
- [textureFromNode:](skview/texture%28from_%29.md): Renders the contents of a node tree and returns the rendered image as a texture.
