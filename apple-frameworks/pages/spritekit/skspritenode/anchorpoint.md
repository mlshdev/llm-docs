> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/anchorpoint](https://developer.apple.com/documentation/spritekit/skspritenode/anchorpoint)

# anchorPoint (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the point in the sprite that corresponds to the node’s position.

## Declaration

```swift
var anchorPoint: CGPoint { get set }
```

## Mentioned In

- [Animating a Sprite by Changing its Texture](../animating-a-sprite-by-changing-its-texture.md)
- [Using the Anchor Point to Move a Sprite](../using-the-anchor-point-to-move-a-sprite.md)

<a id="Discussion"></a>

## Discussion

You specify the value for this property in the unit coordinate space. The default value is `(0.5,0.5)`, which means that the sprite is centered on its position.

## See Also

### Setting a Sprite’s Size and Position

- [Using the Anchor Point to Move a Sprite](../using-the-anchor-point-to-move-a-sprite.md): Learn how the anchor point affects a sprite’s position.
- [size](size.md): The dimensions of the sprite, in points.
- [scale(to:)](scale%28to_%29.md): Scales the sprite node to a specified size.

# anchorPoint (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the point in the sprite that corresponds to the node’s position.

## Declaration

```objectivec
@property (nonatomic) CGPoint anchorPoint;
```

## Mentioned In

- [Animating a Sprite by Changing its Texture](../animating-a-sprite-by-changing-its-texture.md)
- [Using the Anchor Point to Move a Sprite](../using-the-anchor-point-to-move-a-sprite.md)

<a id="Discussion"></a>

## Discussion

You specify the value for this property in the unit coordinate space. The default value is `(0.5,0.5)`, which means that the sprite is centered on its position.

## See Also

### Setting a Sprite’s Size and Position

- [Using the Anchor Point to Move a Sprite](../using-the-anchor-point-to-move-a-sprite.md): Learn how the anchor point affects a sprite’s position.
- [size](size.md): The dimensions of the sprite, in points.
- [scaleToSize:](scale%28to_%29.md): Scales the sprite node to a specified size.
