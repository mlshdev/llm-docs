> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/animate(with:timeperframe:resize:restore:)](https://developer.apple.com/documentation/spritekit/skaction/animate(with:timeperframe:resize:restore:))

# animate(with:timePerFrame:resize:restore:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.

## Declaration

```swift
class func animate(with textures: [SKTexture], timePerFrame sec: TimeInterval, resize: Bool, restore: Bool) -> SKAction
```

## Parameters

- `textures`: An array of textures to use when animating a sprite.
- `sec`: The amount of time, in seconds, that each texture is displayed.
- `resize`: If [true](https://developer.apple.com/documentation/swift/true), the sprite is resized to match each new texture. If [false](https://developer.apple.com/documentation/swift/false), the size of the sprite remains at a constant size.
- `restore`: - If [true](https://developer.apple.com/documentation/swift/true):

  When the action completes, the sprite’s texture is restored to the texture it had before the action completed. (If the resize parameter is [true](https://developer.apple.com/documentation/swift/true), the sprite is resized to match the size of the original texture.)

  - If [false](https://developer.apple.com/documentation/swift/false):

  When the action completes, the sprite’s texture remains set to the final texture in the array.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by an [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [texture](../skspritenode/texture.md) property animates through the array of textures. The sprite’s [texture](../skspritenode/texture.md) property is changed to the next texture in the array. The action then pauses for the specified time before continuing. The action continues until it has finished animating through all of the textures in the array. The total duration of the action is the number of textures multiplied by the frame interval.

> **Note**

>  If the `restore` parameter is [true](https://developer.apple.com/documentation/swift/true) and this action is removed from a node before it completes, then node’s texture is still restored. This differs from the default behavior of removing an action.

This action is reversible; the resulting action animates through the same textures from last to first.

## See Also

### Animating a Node’s Texture

- [resize(byWidth:height:duration:)](resize%28bywidth_height_duration_%29.md): Creates an action that adjusts the size of a sprite.
- [resize(toHeight:duration:)](resize%28toheight_duration_%29.md): Creates an action that changes the height of a sprite to a new absolute value.
- [resize(toWidth:duration:)](resize%28towidth_duration_%29.md): Creates an action that changes the width of a sprite to a new absolute value.
- [resize(toWidth:height:duration:)](resize%28towidth_height_duration_%29.md): Creates an action that changes the width and height of a sprite to a new absolute value.
- [setTexture(\_:)](settexture%28__%29.md): Creates an action that changes a sprite’s texture.
- [setTexture(\_:resize:)](settexture%28__resize_%29.md): Creates an action that changes a sprite’s texture, possibly resizing the sprite.
- [animate(with:timePerFrame:)](animate%28with_timeperframe_%29.md): Creates an action that animates changes to a sprite’s texture.
- [setNormalTexture(\_:)](setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture(\_:resize:)](setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animate(withNormalTextures:timePerFrame:)](animate%28withnormaltextures_timeperframe_%29.md): Creates an action that animates changes to a sprite’s normal texture.
- [animate(withNormalTextures:timePerFrame:resize:restore:)](animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorize(with:colorBlendFactor:duration:)](colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorize(withColorBlendFactor:duration:)](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.

# animateWithTextures:timePerFrame:resize:restore: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.

## Declaration

```objectivec
+ (SKAction *) animateWithTextures:(NSArray<SKTexture *> *) textures timePerFrame:(NSTimeInterval) sec resize:(BOOL) resize restore:(BOOL) restore;
```

## Parameters

- `textures`: An array of textures to use when animating a sprite.
- `sec`: The amount of time, in seconds, that each texture is displayed.
- `resize`: If [true](https://developer.apple.com/documentation/swift/true), the sprite is resized to match each new texture. If [false](https://developer.apple.com/documentation/swift/false), the size of the sprite remains at a constant size.
- `restore`: - If [true](https://developer.apple.com/documentation/swift/true):

  When the action completes, the sprite’s texture is restored to the texture it had before the action completed. (If the resize parameter is [true](https://developer.apple.com/documentation/swift/true), the sprite is resized to match the size of the original texture.)

  - If [false](https://developer.apple.com/documentation/swift/false):

  When the action completes, the sprite’s texture remains set to the final texture in the array.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by an [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [texture](../skspritenode/texture.md) property animates through the array of textures. The sprite’s [texture](../skspritenode/texture.md) property is changed to the next texture in the array. The action then pauses for the specified time before continuing. The action continues until it has finished animating through all of the textures in the array. The total duration of the action is the number of textures multiplied by the frame interval.

> **Note**

>  If the `restore` parameter is [true](https://developer.apple.com/documentation/swift/true) and this action is removed from a node before it completes, then node’s texture is still restored. This differs from the default behavior of removing an action.

This action is reversible; the resulting action animates through the same textures from last to first.

## See Also

### Animating a Node’s Texture

- [resizeByWidth:height:duration:](resize%28bywidth_height_duration_%29.md): Creates an action that adjusts the size of a sprite.
- [resizeToHeight:duration:](resize%28toheight_duration_%29.md): Creates an action that changes the height of a sprite to a new absolute value.
- [resizeToWidth:duration:](resize%28towidth_duration_%29.md): Creates an action that changes the width of a sprite to a new absolute value.
- [resizeToWidth:height:duration:](resize%28towidth_height_duration_%29.md): Creates an action that changes the width and height of a sprite to a new absolute value.
- [setTexture:](settexture%28__%29.md): Creates an action that changes a sprite’s texture.
- [setTexture:resize:](settexture%28__resize_%29.md): Creates an action that changes a sprite’s texture, possibly resizing the sprite.
- [animateWithTextures:timePerFrame:](animate%28with_timeperframe_%29.md): Creates an action that animates changes to a sprite’s texture.
- [setNormalTexture:](setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture:resize:](setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animateWithNormalTextures:timePerFrame:](animate%28withnormaltextures_timeperframe_%29.md): Creates an action that animates changes to a sprite’s normal texture.
- [animateWithNormalTextures:timePerFrame:resize:restore:](animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorizeWithColor:colorBlendFactor:duration:](colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorizeWithColorBlendFactor:duration:](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.
