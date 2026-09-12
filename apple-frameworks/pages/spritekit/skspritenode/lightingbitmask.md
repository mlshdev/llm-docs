> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/lightingbitmask](https://developer.apple.com/documentation/spritekit/skspritenode/lightingbitmask)

# lightingBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mask that defines how this sprite is lit by light nodes in the scene.

## Declaration

```swift
var lightingBitMask: UInt32 { get set }
```

## Mentioned In

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md)

<a id="Discussion"></a>

## Discussion

To determine whether this sprite is lit by a light node, the sprite’s [lightingBitMask](lightingbitmask.md) property is tested against the light’s [categoryBitMask](../../scenekit/scnlight/categorybitmask.md) property by performing a logical AND operation. If the comparison results in a nonzero value, the sprite is lit by this light.

The default value is 0x00000000 (all bits cleared).

## See Also

### Lighting a Sprite

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md): Add lighting and shadows to your scene with light nodes.
- [shadowedBitMask](shadowedbitmask.md): A mask that defines which lights add shadows to the sprite.
- [shadowCastBitMask](shadowcastbitmask.md): A mask that defines which lights are occluded by this sprite.
- [normalTexture](normaltexture.md): A texture that specifies the normal map for the sprite.

# lightingBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mask that defines how this sprite is lit by light nodes in the scene.

## Declaration

```objectivec
@property (nonatomic) uint32_t lightingBitMask;
```

## Mentioned In

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md)

<a id="Discussion"></a>

## Discussion

To determine whether this sprite is lit by a light node, the sprite’s [lightingBitMask](lightingbitmask.md) property is tested against the light’s [categoryBitMask](../../scenekit/scnlight/categorybitmask.md) property by performing a logical AND operation. If the comparison results in a nonzero value, the sprite is lit by this light.

The default value is 0x00000000 (all bits cleared).

## See Also

### Lighting a Sprite

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md): Add lighting and shadows to your scene with light nodes.
- [shadowedBitMask](shadowedbitmask.md): A mask that defines which lights add shadows to the sprite.
- [shadowCastBitMask](shadowcastbitmask.md): A mask that defines which lights are occluded by this sprite.
- [normalTexture](normaltexture.md): A texture that specifies the normal map for the sprite.
