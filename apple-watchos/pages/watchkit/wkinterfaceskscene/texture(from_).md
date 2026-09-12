> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceskscene/texture(from:)](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene/texture(from:))

# texture(from:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Renders the contents of a node tree and returns the rendered image as a SpriteKit texture.

## Declaration

```swift
func texture(from node: SKNode) -> SKTexture?
```

## Parameters

- `node`: A node object representing the root node of the tree to be render to the texture.

<a id="return-value"></a>

## Return Value

A SpriteKit texture that holds the rendered image.

<a id="Discussion"></a>

## Discussion

The `node` being rendered does not need to appear in the interface’s presented scene. The new texture is created with a size equal to the rectangle returned by the `node`’s [calculateAccumulatedFrame()](https://developer.apple.com/documentation/spritekit/sknode/calculateaccumulatedframe%28%29) method. If the `node` is not a scene node, it is rendered with a clear background color (`[SKColor clearColor]`).

## See Also

### Snapshotting Nodes to a Texture

- [texture(from:crop:)](texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a SpriteKit texture.

# textureFromNode: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Renders the contents of a node tree and returns the rendered image as a SpriteKit texture.

## Declaration

```objectivec
- (SKTexture *) textureFromNode:(SKNode *) node;
```

## Parameters

- `node`: A node object representing the root node of the tree to be render to the texture.

<a id="return-value"></a>

## Return Value

A SpriteKit texture that holds the rendered image.

<a id="Discussion"></a>

## Discussion

The `node` being rendered does not need to appear in the interface’s presented scene. The new texture is created with a size equal to the rectangle returned by the `node`’s [calculateAccumulatedFrame](https://developer.apple.com/documentation/spritekit/sknode/calculateaccumulatedframe%28%29) method. If the `node` is not a scene node, it is rendered with a clear background color (`[SKColor clearColor]`).

## See Also

### Snapshotting Nodes to a Texture

- [textureFromNode:crop:](texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a SpriteKit texture.
