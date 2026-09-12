> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/color](https://developer.apple.com/documentation/spritekit/skspritenode/color)

# color (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sprite’s color.

## Declaration

```swift
var color: UIColor { get set }
```

```swift
var color: NSColor { get set }
```

## Mentioned In

- [Tinting a Sprite](../tinting-a-sprite.md)

<a id="Discussion"></a>

## Discussion

If the [texture](texture.md) property is non-`nil`, the red, green, and blue values of the color property are blended with the texture before the texture is drawn and the alpha property is ignored. If the [texture](texture.md) property is `nil`, the color (including the alpha component) is used to draw a single-color rectangle.

## See Also

### Tinting a Sprite

- [Tinting a Sprite](../tinting-a-sprite.md): Provide a color and blend factor to additively color your sprite.
- [colorBlendFactor](colorblendfactor.md): A floating-point value that describes how the color is blended with the sprite’s texture.

# color (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The sprite’s color.

## Declaration

```objectivec
@property (nonatomic, retain) UIColor * color;
```

```objectivec
@property (nonatomic, retain) NSColor * color;
```

## Mentioned In

- [Tinting a Sprite](../tinting-a-sprite.md)

<a id="Discussion"></a>

## Discussion

If the [texture](texture.md) property is non-`nil`, the red, green, and blue values of the color property are blended with the texture before the texture is drawn and the alpha property is ignored. If the [texture](texture.md) property is `nil`, the color (including the alpha component) is used to draw a single-color rectangle.

## See Also

### Tinting a Sprite

- [Tinting a Sprite](../tinting-a-sprite.md): Provide a color and blend factor to additively color your sprite.
- [colorBlendFactor](colorblendfactor.md): A floating-point value that describes how the color is blended with the sprite’s texture.
