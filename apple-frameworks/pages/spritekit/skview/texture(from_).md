> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/texture(from:)](https://developer.apple.com/documentation/spritekit/skview/texture(from:))

# texture(from:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Renders the contents of a node tree and returns the rendered image as a texture.

## Declaration

```swift
func texture(from node: SKNode) -> SKTexture?
```

## Parameters

- `node`: The node object that is the root node of the tree you want to render to the texture.

<a id="return-value"></a>

## Return Value

A SpriteKit texture that holds the rendered image.

## Mentioned In

- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md)
- [Loading and Using Textures](../loading-and-using-textures.md)

<a id="Discussion"></a>

## Discussion

The node being rendered does not need to appear in the view’s presented scene. The new texture is created with a size equal to the rectangle returned by the node’s [calculateAccumulatedFrame()](../sknode/calculateaccumulatedframe%28%29.md) method. If the node is not a scene node, it is rendered with a clear background color (```[``SKColor``` `clear]`).

## See Also

### Snapshotting Nodes to a Texture

- [texture(from:crop:)](texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a texture.
- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md): Render a portion of the node tree into a new texture.

# textureFromNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Renders the contents of a node tree and returns the rendered image as a texture.

## Declaration

```objectivec
- (SKTexture *) textureFromNode:(SKNode *) node;
```

## Parameters

- `node`: The node object that is the root node of the tree you want to render to the texture.

<a id="return-value"></a>

## Return Value

A SpriteKit texture that holds the rendered image.

## Mentioned In

- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md)
- [Loading and Using Textures](../loading-and-using-textures.md)

<a id="Discussion"></a>

## Discussion

The node being rendered does not need to appear in the view’s presented scene. The new texture is created with a size equal to the rectangle returned by the node’s [calculateAccumulatedFrame](../sknode/calculateaccumulatedframe%28%29.md) method. If the node is not a scene node, it is rendered with a clear background color (```[``SKColor``` `clear]`).

## See Also

### Snapshotting Nodes to a Texture

- [textureFromNode:crop:](texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a texture.
- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md): Render a portion of the node tree into a new texture.
