> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/normaltexture](https://developer.apple.com/documentation/spritekit/skspritenode/normaltexture)

# normalTexture (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A texture that specifies the normal map for the sprite.

## Declaration

```swift
var normalTexture: SKTexture? { get set }
```

<a id="Discussion"></a>

## Discussion

A normal map texture is used when a sprite is lit, giving it a more realistic look with shadows and specular highlights. The texture must be a normal map texture.

## See Also

### Lighting a Sprite

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md): Add lighting and shadows to your scene with light nodes.
- [lightingBitMask](lightingbitmask.md): A mask that defines how this sprite is lit by light nodes in the scene.
- [shadowedBitMask](shadowedbitmask.md): A mask that defines which lights add shadows to the sprite.
- [shadowCastBitMask](shadowcastbitmask.md): A mask that defines which lights are occluded by this sprite.

# normalTexture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A texture that specifies the normal map for the sprite.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKTexture * normalTexture;
```

<a id="Discussion"></a>

## Discussion

A normal map texture is used when a sprite is lit, giving it a more realistic look with shadows and specular highlights. The texture must be a normal map texture.

## See Also

### Lighting a Sprite

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md): Add lighting and shadows to your scene with light nodes.
- [lightingBitMask](lightingbitmask.md): A mask that defines how this sprite is lit by light nodes in the scene.
- [shadowedBitMask](shadowedbitmask.md): A mask that defines which lights add shadows to the sprite.
- [shadowCastBitMask](shadowcastbitmask.md): A mask that defines which lights are occluded by this sprite.
