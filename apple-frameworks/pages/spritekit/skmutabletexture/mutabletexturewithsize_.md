> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skmutabletexture/mutabletexturewithsize:](https://developer.apple.com/documentation/spritekit/skmutabletexture/mutabletexturewithsize:)

# mutableTextureWithSize:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an empty texture with a specific size.

## Declaration

```objectivec
+ (instancetype) mutableTextureWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the texture, in pixels.

<a id="return-value"></a>

## Return Value

An empty mutable texture.

<a id="Discussion"></a>

## Discussion

You must call the [modifyPixelDataWithBlock:](modifypixeldata%28__%29.md) method at least once before using this texture.

## See Also

### Creating an Empty Mutable Texture

- [initWithSize:pixelFormat:](init%28size_pixelformat_%29.md): Initializes an empty texture with a specific size and format.
- [initWithSize:](init%28size_%29.md): Initializes an empty texture with a specific size.
