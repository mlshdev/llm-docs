> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/lightingbitmask](https://developer.apple.com/documentation/spritekit/sktilemapnode/lightingbitmask)

# lightingBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A mask that defines how the tile map is lit by light nodes in the scene.

## Declaration

```swift
var lightingBitMask: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

To determine whether this sprite is lit by a light node, the sprite’s `lightingBitMask` property is tested against the light’s [categoryBitMask](../../scenekit/scnlight/categorybitmask.md) property by performing a logical AND operation. If the comparison results in a nonzero value, the sprite is lit by this light.

The default value is 0x00000000 (all bits cleared).

# lightingBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A mask that defines how the tile map is lit by light nodes in the scene.

## Declaration

```objectivec
@property (nonatomic) uint32_t lightingBitMask;
```

<a id="Discussion"></a>

## Discussion

To determine whether this sprite is lit by a light node, the sprite’s `lightingBitMask` property is tested against the light’s [categoryBitMask](../../scenekit/scnlight/categorybitmask.md) property by performing a logical AND operation. If the comparison results in a nonzero value, the sprite is lit by this light.

The default value is 0x00000000 (all bits cleared).
