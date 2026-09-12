> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/texture(from:crop:)](https://developer.apple.com/documentation/spritekit/skview/texture(from:crop:))

# texture(from:crop:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Renders a portion of a node’s contents and returns the rendered image as a texture.

## Declaration

```swift
func texture(from node: SKNode, crop: CGRect) -> SKTexture?
```

## Parameters

- `node`: The node object that is the root node of the tree you want to render to the texture.
- `crop`: A rectangle in the node’s coordinate system that describes the area to be rendered.

<a id="return-value"></a>

## Return Value

A SpriteKit texture that holds the rendered image.

## Mentioned In

- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md)

<a id="Discussion"></a>

## Discussion

The node being rendered does not need to appear in the view’s presented scene. The new texture is created with a size equal to the size of the `crop` rectangle. If the node is not a scene node, it is rendered with a clear background color (```[``SKColor``` `clear]`).

## See Also

### Snapshotting Nodes to a Texture

- [texture(from:)](texture%28from_%29.md): Renders the contents of a node tree and returns the rendered image as a texture.
- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md): Render a portion of the node tree into a new texture.

# textureFromNode:crop: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Renders a portion of a node’s contents and returns the rendered image as a texture.

## Declaration

```objectivec
- (SKTexture *) textureFromNode:(SKNode *) node crop:(CGRect) crop;
```

## Parameters

- `node`: The node object that is the root node of the tree you want to render to the texture.
- `crop`: A rectangle in the node’s coordinate system that describes the area to be rendered.

<a id="return-value"></a>

## Return Value

A SpriteKit texture that holds the rendered image.

## Mentioned In

- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md)

<a id="Discussion"></a>

## Discussion

The node being rendered does not need to appear in the view’s presented scene. The new texture is created with a size equal to the size of the `crop` rectangle. If the node is not a scene node, it is rendered with a clear background color (```[``SKColor``` `clear]`).

## See Also

### Snapshotting Nodes to a Texture

- [textureFromNode:](texture%28from_%29.md): Renders the contents of a node tree and returns the rendered image as a texture.
- [Creating a New Node By Rendering To a Texture](../creating-a-new-node-by-rendering-to-a-texture.md): Render a portion of the node tree into a new texture.
