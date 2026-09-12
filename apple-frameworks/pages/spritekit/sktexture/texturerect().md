> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/texturerect()](https://developer.apple.com/documentation/spritekit/sktexture/texturerect())

# textureRect() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets a rectangle that defines the portion of the texture used to render its image.

## Declaration

```swift
func textureRect() -> CGRect
```

<a id="return-value"></a>

## Return Value

A rectangle in the unit coordinate space.

<a id="Discussion"></a>

## Discussion

The default value is a rectangle that covers the entire texture `(0,0)` \- `(1,1)`. You cannot set this value directly; to use only a portion of a texture, use the [init(rect:in:)](init%28rect_in_%29.md) method to create a new texture.

## See Also

### Reading a Texture’s Size and Optional Source Location

- [size()](size%28%29.md): Gets the size of the texture.

# textureRect (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets a rectangle that defines the portion of the texture used to render its image.

## Declaration

```objectivec
- (CGRect) textureRect;
```

<a id="return-value"></a>

## Return Value

A rectangle in the unit coordinate space.

<a id="Discussion"></a>

## Discussion

The default value is a rectangle that covers the entire texture `(0,0)` \- `(1,1)`. You cannot set this value directly; to use only a portion of a texture, use the [textureWithRect:inTexture:](init%28rect_in_%29.md) method to create a new texture.

## See Also

### Reading a Texture’s Size and Optional Source Location

- [size](size%28%29.md): Gets the size of the texture.
