> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/centerrect](https://developer.apple.com/documentation/spritekit/skspritenode/centerrect)

# centerRect (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enable nine-part stretching of the sprite’s texture.

## Declaration

```swift
var centerRect: CGRect { get set }
```

## Mentioned In

- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)
- [Animating a Sprite by Changing its Texture](../animating-a-sprite-by-changing-its-texture.md)

<a id="Discussion"></a>

## Discussion

Controls how the texture is stretched to fill the SKSpriteNode.

The argument rectangle is in the unit coordinate space with a default value of `(0,0)-(1.0,1.0)`, which indicates that the entire texture is stretched to fill the sprite.

If instead you define a different rectangle, its coordinates are used to break the texture into a 3 x 3 grid that is scaled like the following:

- The four corners of this grid are applied without performing any scaling.
- The upper and lower-middle parts are scaled horizontally
- The left and right-middle parts are scaled vertically
- The center is scaled in all directions.

This is what’s referred to as a 9-part scaling algorithm.

## See Also

### Scaling a Sprite in Nine Parts

- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md): Scale a sprite using nine-part algorithm.

# centerRect (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enable nine-part stretching of the sprite’s texture.

## Declaration

```objectivec
@property (nonatomic) CGRect centerRect;
```

## Mentioned In

- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md)
- [Animating a Sprite by Changing its Texture](../animating-a-sprite-by-changing-its-texture.md)

<a id="Discussion"></a>

## Discussion

Controls how the texture is stretched to fill the SKSpriteNode.

The argument rectangle is in the unit coordinate space with a default value of `(0,0)-(1.0,1.0)`, which indicates that the entire texture is stretched to fill the sprite.

If instead you define a different rectangle, its coordinates are used to break the texture into a 3 x 3 grid that is scaled like the following:

- The four corners of this grid are applied without performing any scaling.
- The upper and lower-middle parts are scaled horizontally
- The left and right-middle parts are scaled vertically
- The center is scaled in all directions.

This is what’s referred to as a 9-part scaling algorithm.

## See Also

### Scaling a Sprite in Nine Parts

- [Resizing a Sprite in Nine Parts](../resizing-a-sprite-in-nine-parts.md): Scale a sprite using nine-part algorithm.
