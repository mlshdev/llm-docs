> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/resize(bywidth:height:duration:)](https://developer.apple.com/documentation/spritekit/skaction/resize(bywidth:height:duration:))

# resize(byWidth:height:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adjusts the size of a sprite.

## Declaration

```swift
class func resize(byWidth width: CGFloat, height: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `width`: The amount to add to the sprite’s width.
- `height`: The amount to add to the sprite’s height.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by a [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [size](../skspritenode/size.md) property animates to its new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.resize(byWidth: -width, height: -height, duration: sec)
```

**Obj-C**

```objc
[SKAction resizeByWidth: -width height: -height duration: sec];
```

## See Also

### Animating a Node’s Texture

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
- [colorize(with:colorBlendFactor:duration:)](colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorize(withColorBlendFactor:duration:)](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.

# resizeByWidth:height:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adjusts the size of a sprite.

## Declaration

```objectivec
+ (SKAction *) resizeByWidth:(CGFloat) width height:(CGFloat) height duration:(NSTimeInterval) duration;
```

## Parameters

- `width`: The amount to add to the sprite’s width.
- `height`: The amount to add to the sprite’s height.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by a [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [size](../skspritenode/size.md) property animates to its new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.resize(byWidth: -width, height: -height, duration: sec)
```

**Obj-C**

```objc
[SKAction resizeByWidth: -width height: -height duration: sec];
```

## See Also

### Animating a Node’s Texture

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
- [colorizeWithColor:colorBlendFactor:duration:](colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorizeWithColorBlendFactor:duration:](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.
