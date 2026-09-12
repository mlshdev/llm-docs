> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skmutabletexture](https://developer.apple.com/documentation/spritekit/skmutabletexture)

# SKMutableTexture (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A texture whose contents can be dynamically updated.

## Declaration

```swift
class SKMutableTexture
```

## Mentioned In

- [Loading and Using Textures](loading-and-using-textures.md)

<a id="overview"></a>

## Overview

Normally, SpriteKit textures ([SKTexture](sktexture.md) objects) are static, meaning that once created, their contents cannot be changed. This is important because a static image can be more efficiently managed inside the graphics hardware. However, sometimes you need to be able to update the contents of a texture dynamically. In this case, you should use a mutable texture. Because there is a performance penalty for updating the texture’s contents, consider other options first. For example, you can render a texture in hardware using the [texture(from:)](skview/texture%28from_%29.md) method and a node tree.

To use this class, create a mutable texture using either one of its creation methods or those of its superclass. Then, when you need to update the mutable texture object’s contents, call the [modifyPixelData(\_:)](skmutabletexture/modifypixeldata%28__%29.md) method. Your block is called with the location of the texture in memory. Your block should update this texture and then return.

## Topics

### Creating an Empty Mutable Texture

- [init(size:pixelFormat:)](skmutabletexture/init%28size_pixelformat_%29.md): Initializes an empty texture with a specific size and format.
- [init(size:)](skmutabletexture/init%28size_%29.md): Initializes an empty texture with a specific size.

### Modifying a Mutable Texture’s Contents

- [modifyPixelData(\_:)](skmutabletexture/modifypixeldata%28__%29.md): Modifies the contents of a mutable texture.

## Relationships

### Inherits From

- [SKTexture](sktexture.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Textures

- [Maximizing Texture Performance](maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTexture](sktexture.md): An image, decoded on the GPU, that can be used to render various SpriteKit objects.
- [SKTextureAtlas](sktextureatlas.md): A collection of textures optimized for storage and drawing performance.

# SKMutableTexture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A texture whose contents can be dynamically updated.

## Declaration

```objectivec
@interface SKMutableTexture : SKTexture
```

## Mentioned In

- [Loading and Using Textures](loading-and-using-textures.md)

<a id="overview"></a>

## Overview

Normally, SpriteKit textures ([SKTexture](sktexture.md) objects) are static, meaning that once created, their contents cannot be changed. This is important because a static image can be more efficiently managed inside the graphics hardware. However, sometimes you need to be able to update the contents of a texture dynamically. In this case, you should use a mutable texture. Because there is a performance penalty for updating the texture’s contents, consider other options first. For example, you can render a texture in hardware using the [textureFromNode:](skview/texture%28from_%29.md) method and a node tree.

To use this class, create a mutable texture using either one of its creation methods or those of its superclass. Then, when you need to update the mutable texture object’s contents, call the [modifyPixelDataWithBlock:](skmutabletexture/modifypixeldata%28__%29.md) method. Your block is called with the location of the texture in memory. Your block should update this texture and then return.

## Topics

### Creating an Empty Mutable Texture

- [mutableTextureWithSize:](skmutabletexture/mutabletexturewithsize_.md): Creates an empty texture with a specific size.
- [initWithSize:pixelFormat:](skmutabletexture/init%28size_pixelformat_%29.md): Initializes an empty texture with a specific size and format.
- [initWithSize:](skmutabletexture/init%28size_%29.md): Initializes an empty texture with a specific size.

### Modifying a Mutable Texture’s Contents

- [modifyPixelDataWithBlock:](skmutabletexture/modifypixeldata%28__%29.md): Modifies the contents of a mutable texture.

## Relationships

### Inherits From

- [SKTexture](sktexture.md)

## See Also

### Textures

- [Maximizing Texture Performance](maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTexture](sktexture.md): An image, decoded on the GPU, that can be used to render various SpriteKit objects.
- [SKTextureAtlas](sktextureatlas.md): A collection of textures optimized for storage and drawing performance.
