> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/colorblendfactor](https://developer.apple.com/documentation/spritekit/skspritenode/colorblendfactor)

# colorBlendFactor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A floating-point value that describes how the color is blended with the sprite’s texture.

## Declaration

```swift
var colorBlendFactor: CGFloat { get set }
```

## Mentioned In

- [Tinting a Sprite](../tinting-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The value must be a number between `0.0` and `1.0`, inclusive. The default value (`0.0`) indicates the color property is ignored and that the texture’s values should be used unmodified. For values greater than `0.0`, the texture is blended with the color before being drawn to the scene.

## See Also

### Tinting a Sprite

- [Tinting a Sprite](../tinting-a-sprite.md): Provide a color and blend factor to additively color your sprite.
- [color](color.md): The sprite’s color.

# colorBlendFactor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A floating-point value that describes how the color is blended with the sprite’s texture.

## Declaration

```objectivec
@property (nonatomic) CGFloat colorBlendFactor;
```

## Mentioned In

- [Tinting a Sprite](../tinting-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The value must be a number between `0.0` and `1.0`, inclusive. The default value (`0.0`) indicates the color property is ignored and that the texture’s values should be used unmodified. For values greater than `0.0`, the texture is blended with the color before being drawn to the scene.

## See Also

### Tinting a Sprite

- [Tinting a Sprite](../tinting-a-sprite.md): Provide a color and blend factor to additively color your sprite.
- [color](color.md): The sprite’s color.
