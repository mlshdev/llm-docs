> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas/texturenamed(_:)](https://developer.apple.com/documentation/spritekit/sktextureatlas/texturenamed(_:))

# textureNamed(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a texture from data stored in the texture atlas.

## Declaration

```swift
func textureNamed(_ name: String) -> SKTexture
```

## Parameters

- `name`: The name of a texture stored in the atlas object.

<a id="return-value"></a>

## Return Value

The SpriteKit texture associated with the name. If the specified image does not exist in the atlas object, SpriteKit returns a placeholder texture image.

## Mentioned In

- [About Texture Atlases](../about-texture-atlases.md)
- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

# textureNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a texture from data stored in the texture atlas.

## Declaration

```objectivec
- (SKTexture *) textureNamed:(NSString *) name;
```

## Parameters

- `name`: The name of a texture stored in the atlas object.

<a id="return-value"></a>

## Return Value

The SpriteKit texture associated with the name. If the specified image does not exist in the atlas object, SpriteKit returns a placeholder texture image.

## Mentioned In

- [About Texture Atlases](../about-texture-atlases.md)
- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)
