> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/colorize(with:colorblendfactor:duration:)](https://developer.apple.com/documentation/spritekit/skaction/colorize(with:colorblendfactor:duration:))

# colorize(with:colorBlendFactor:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an animation that animates a sprite’s color and blend factor.

## Declaration

```swift
class func colorize(with color: UIColor, colorBlendFactor: CGFloat, duration: TimeInterval) -> SKAction
```

```swift
class func colorize(with color: NSColor, colorBlendFactor: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `color`: The new color for the sprite.
- `colorBlendFactor`: The new blend factor for the sprite.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by an [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [color](../skspritenode/color.md) and [colorBlendFactor](../skspritenode/colorblendfactor.md) properties are animated to their new values.

This action is not reversible; the reverse of this action does nothing.

## See Also

### Animating a Node’s Texture

- [resize(byWidth:height:duration:)](resize%28bywidth_height_duration_%29.md): Creates an action that adjusts the size of a sprite.
- [resize(toHeight:duration:)](resize%28toheight_duration_%29.md): Creates an action that changes the height of a sprite to a new absolute value.
- [resize(toWidth:duration:)](resize%28towidth_duration_%29.md): Creates an action that changes the width of a sprite to a new absolute value.
- [resize(toWidth:height:duration:)](resize%28towidth_height_duration_%29.md): Creates an action that changes the width and height of a sprite to a new absolute value.
- [setTexture(\_:)](settexture%28__%29.md): Creates an action that changes a sprite’s texture.
- [setTexture(\_:resize:)](settexture%28__resize_%29.md): Creates an action that changes a sprite’s texture, possibly resizing the sprite.
- [animate(with:timePerFrame:)](animate%28with_timeperframe_%29.md): Creates an action that animates changes to a sprite’s texture.
- [animate(with:timePerFrame:resize:restore:)](animate%28with_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.
- [setNormalTexture(\_:)](setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture(\_:resize:)](setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animate(withNormalTextures:timePerFrame:)](animate%28withnormaltextures_timeperframe_%29.md): Creates an action that animates changes to a sprite’s normal texture.
- [animate(withNormalTextures:timePerFrame:resize:restore:)](animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorize(withColorBlendFactor:duration:)](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.

# colorizeWithColor:colorBlendFactor:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an animation that animates a sprite’s color and blend factor.

## Declaration

```objectivec
+ (SKAction *) colorizeWithColor:(UIColor *) color colorBlendFactor:(CGFloat) colorBlendFactor duration:(NSTimeInterval) duration;
```

```objectivec
+ (SKAction *) colorizeWithColor:(NSColor *) color colorBlendFactor:(CGFloat) colorBlendFactor duration:(NSTimeInterval) duration;
```

## Parameters

- `color`: The new color for the sprite.
- `colorBlendFactor`: The new blend factor for the sprite.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by an [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [color](../skspritenode/color.md) and [colorBlendFactor](../skspritenode/colorblendfactor.md) properties are animated to their new values.

This action is not reversible; the reverse of this action does nothing.

## See Also

### Animating a Node’s Texture

- [resizeByWidth:height:duration:](resize%28bywidth_height_duration_%29.md): Creates an action that adjusts the size of a sprite.
- [resizeToHeight:duration:](resize%28toheight_duration_%29.md): Creates an action that changes the height of a sprite to a new absolute value.
- [resizeToWidth:duration:](resize%28towidth_duration_%29.md): Creates an action that changes the width of a sprite to a new absolute value.
- [resizeToWidth:height:duration:](resize%28towidth_height_duration_%29.md): Creates an action that changes the width and height of a sprite to a new absolute value.
- [setTexture:](settexture%28__%29.md): Creates an action that changes a sprite’s texture.
- [setTexture:resize:](settexture%28__resize_%29.md): Creates an action that changes a sprite’s texture, possibly resizing the sprite.
- [animateWithTextures:timePerFrame:](animate%28with_timeperframe_%29.md): Creates an action that animates changes to a sprite’s texture.
- [animateWithTextures:timePerFrame:resize:restore:](animate%28with_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.
- [setNormalTexture:](setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture:resize:](setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animateWithNormalTextures:timePerFrame:](animate%28withnormaltextures_timeperframe_%29.md): Creates an action that animates changes to a sprite’s normal texture.
- [animateWithNormalTextures:timePerFrame:resize:restore:](animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorizeWithColorBlendFactor:duration:](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.
