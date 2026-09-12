> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklightnode/categorybitmask](https://developer.apple.com/documentation/spritekit/sklightnode/categorybitmask)

# categoryBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mask that defines which categories this light belongs to.

## Declaration

```swift
var categoryBitMask: UInt32 { get set }
```

## Mentioned In

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md)

<a id="Discussion"></a>

## Discussion

Every light in a scene can be assigned to up to 32 different categories, each corresponding to a bit in the bit mask. SpriteKit does not predefine any lighting categories, so it is up to you to define which values are used in your game. When a scene is rendered, a light’s [categoryBitMask](categorybitmask.md) property is compared to each sprite node’s [lightingBitMask](../skspritenode/lightingbitmask.md), [shadowCastBitMask](../skspritenode/shadowcastbitmask.md), and [shadowedBitMask](../skspritenode/shadowedbitmask.md) properties to determine whether that sprite interacts with the light.

The default value is `0x00000001`.

## See Also

### Determining Whether a Light Node Is Active

- [isEnabled](isenabled.md): A Boolean value that indicates whether the node is casting light.

# categoryBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mask that defines which categories this light belongs to.

## Declaration

```objectivec
@property (nonatomic) uint32_t categoryBitMask;
```

## Mentioned In

- [Lighting a Sprite with Light Nodes](../lighting-a-sprite-with-light-nodes.md)

<a id="Discussion"></a>

## Discussion

Every light in a scene can be assigned to up to 32 different categories, each corresponding to a bit in the bit mask. SpriteKit does not predefine any lighting categories, so it is up to you to define which values are used in your game. When a scene is rendered, a light’s [categoryBitMask](categorybitmask.md) property is compared to each sprite node’s [lightingBitMask](../skspritenode/lightingbitmask.md), [shadowCastBitMask](../skspritenode/shadowcastbitmask.md), and [shadowedBitMask](../skspritenode/shadowedbitmask.md) properties to determine whether that sprite interacts with the light.

The default value is `0x00000001`.

## See Also

### Determining Whether a Light Node Is Active

- [enabled](isenabled.md): A Boolean value that indicates whether the node is casting light.
