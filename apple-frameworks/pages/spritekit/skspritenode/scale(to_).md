> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/scale(to:)](https://developer.apple.com/documentation/spritekit/skspritenode/scale(to:))

# scale(to:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Scales the sprite node to a specified size.

## Declaration

```swift
func scale(to size: CGSize)
```

<a id="Discussion"></a>

## Discussion

This method works by setting the sprite node’s [xScale](../sknode/xscale.md) and [yScale](../sknode/yscale.md) to achieve the specified size in its parent’s coordinate space.

## See Also

### Setting a Sprite’s Size and Position

- [Using the Anchor Point to Move a Sprite](../using-the-anchor-point-to-move-a-sprite.md): Learn how the anchor point affects a sprite’s position.
- [size](size.md): The dimensions of the sprite, in points.
- [anchorPoint](anchorpoint.md): Defines the point in the sprite that corresponds to the node’s position.

# scaleToSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Scales the sprite node to a specified size.

## Declaration

```objectivec
- (void) scaleToSize:(CGSize) size;
```

<a id="Discussion"></a>

## Discussion

This method works by setting the sprite node’s [xScale](../sknode/xscale.md) and [yScale](../sknode/yscale.md) to achieve the specified size in its parent’s coordinate space.

## See Also

### Setting a Sprite’s Size and Position

- [Using the Anchor Point to Move a Sprite](../using-the-anchor-point-to-move-a-sprite.md): Learn how the anchor point affects a sprite’s position.
- [size](size.md): The dimensions of the sprite, in points.
- [anchorPoint](anchorpoint.md): Defines the point in the sprite that corresponds to the node’s position.
