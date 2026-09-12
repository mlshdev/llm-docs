> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/animate(withnormaltextures:timeperframe:)](https://developer.apple.com/documentation/spritekit/skaction/animate(withnormaltextures:timeperframe:))

# animate(withNormalTextures:timePerFrame:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that animates changes to a sprite’s normal texture.

## Declaration

```swift
class func animate(withNormalTextures textures: [SKTexture], timePerFrame sec: TimeInterval) -> SKAction
```

## Parameters

- `textures`: An array of textures to use.
- `sec`: The amount of time that each texture is displayed.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by an [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [normalTexture](../skspritenode/normaltexture.md) property animates through the array of textures. The sprite’s [normalTexture](../skspritenode/normaltexture.md) property is changed to the next texture in the array. The action then pauses for the specified time before continuing. The action continues until it has finished animating through all of the textures in the array. The total duration of the action is the number of textures multiplied by the frame interval.

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
- [animate(with:timePerFrame:resize:restore:)](animate%28with_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.
- [setNormalTexture(\_:)](setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture(\_:resize:)](setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animate(withNormalTextures:timePerFrame:resize:restore:)](animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorize(with:colorBlendFactor:duration:)](colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorize(withColorBlendFactor:duration:)](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.

# animateWithNormalTextures:timePerFrame: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that animates changes to a sprite’s normal texture.

## Declaration

```objectivec
+ (SKAction *) animateWithNormalTextures:(NSArray<SKTexture *> *) textures timePerFrame:(NSTimeInterval) sec;
```

## Parameters

- `textures`: An array of textures to use.
- `sec`: The amount of time that each texture is displayed.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action can only be executed by an [SKSpriteNode](../skspritenode.md) object. When the action executes, the sprite’s [normalTexture](../skspritenode/normaltexture.md) property animates through the array of textures. The sprite’s [normalTexture](../skspritenode/normaltexture.md) property is changed to the next texture in the array. The action then pauses for the specified time before continuing. The action continues until it has finished animating through all of the textures in the array. The total duration of the action is the number of textures multiplied by the frame interval.

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
- [animateWithTextures:timePerFrame:resize:restore:](animate%28with_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture, possibly resizing the sprite.
- [setNormalTexture:](setnormaltexture%28__%29.md): Creates an action that changes a sprite’s normal texture.
- [setNormalTexture:resize:](setnormaltexture%28__resize_%29.md): Creates an action that changes a sprite’s normal texture, possibly resizing the sprite.
- [animateWithNormalTextures:timePerFrame:resize:restore:](animate%28withnormaltextures_timeperframe_resize_restore_%29.md): Creates an action that animates changes to a sprite’s texture.
- [colorizeWithColor:colorBlendFactor:duration:](colorize%28with_colorblendfactor_duration_%29.md): Creates an animation that animates a sprite’s color and blend factor.
- [colorizeWithColorBlendFactor:duration:](colorize%28withcolorblendfactor_duration_%29.md): Creates an action that animates a sprite’s blend factor.
