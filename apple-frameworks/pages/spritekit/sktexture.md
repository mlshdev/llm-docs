> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture](https://developer.apple.com/documentation/spritekit/sktexture)

# SKTexture (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An image, decoded on the GPU, that can be used to render various SpriteKit objects.

## Declaration

```swift
class SKTexture
```

## Mentioned In

- [Getting Started with Sprite Nodes](getting-started-with-sprite-nodes.md)
- [Loading and Using Textures](loading-and-using-textures.md)
- [About Texture Atlases](about-texture-atlases.md)
- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md)
- [Maximizing Texture Performance](maximizing-texture-performance.md)
- [Preloading Textures into Memory](preloading-textures-into-memory.md)

<a id="overview"></a>

## Overview

An [SKTexture](sktexture.md) object is an image that can be applied to [SKSpriteNode](skspritenode.md) and [SKShapeNode](skshapenode.md) objects, particles created by an [SKEmitterNode](skemitternode.md) object, or tiles used in an [SKTileMapNode](sktilemapnode.md). A texture object manages the texture data and graphics resources that are needed to render the image. Most texture objects are created from source images stored in your app bundle—your game’s artwork. Once created, a texture object’s contents are immutable. Multiple sprites can share the same texture object, sharing a single resource.

<a id="Deallocating-a-Texture"></a>

### Deallocating a Texture

After a texture is loaded into the graphics hardware memory, it stays in memory until the referencing [SKTexture](sktexture.md) object is deleted. This means that between levels (or in a dynamic game), you may need to make sure a texture object is deleted. Delete a [SKTexture](sktexture.md) object by removing any strong references to it, including:

- All texture references from [SKSpriteNode](skspritenode.md) and [SKEffectNode](skeffectnode.md) objects in your game
- Any strong references to the texture in your own code
- An [SKTextureAtlas](sktextureatlas.md) object that was used to create the texture object

## Topics

### First Steps

Create texture objects from images on disk or in memory.

- [Loading and Using Textures](loading-and-using-textures.md): Learn the basics about using textures in SpriteKit.
- [Texture Initializers](texture-initializers.md): See the various ways to create and use textures in SpriteKit.

### Reading a Texture’s Size and Optional Source Location

Read the texture’s size or optional cropping rectangle.

- [size()](sktexture/size%28%29.md): Gets the size of the texture.
- [textureRect()](sktexture/texturerect%28%29.md): Gets a rectangle that defines the portion of the texture used to render its image.

### Configuring a Texture’s Behavior for Scaling

Define the texture’s behavior at different scales.

- [filteringMode](sktexture/filteringmode.md): The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [usesMipmaps](sktexture/usesmipmaps.md): A Boolean value that indicates whether the texture attempts to generate mipmaps.

### Getting a Texture’s Underlying Image

- [cgImage()](sktexture/cgimage%28%29.md): Returns the texture’s image data as a Quartz 2D image.

### Preloading a Texture for Performance

Gain fine-tuned control over when a texture is decoded.

- [Preloading Textures into Memory](preloading-textures-into-memory.md): Decompress images ahead of time to avoid performance issues during gameplay.
- [preload(completionHandler:)](sktexture/preload%28completionhandler_%29.md): Load texture data into memory, calling a completion handler after the task completes.
- [preload(\_:withCompletionHandler:)](sktexture/preload%28__withcompletionhandler_%29.md): Load the data of multiple textures into memory.

### Instance Properties

- [customPlaygroundQuickLook](sktexture/customplaygroundquicklook.md): Deprecated.

### Initializers

- [init(CGImage:)](sktexture/init%28cgimage_%29-4ypk.md)
- [init(coder:)](sktexture/init%28coder_%29.md)
- [init(rect:inTexture:)](sktexture/init%28rect_intexture_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKMutableTexture](skmutabletexture.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Textures

- [Maximizing Texture Performance](maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTextureAtlas](sktextureatlas.md): A collection of textures optimized for storage and drawing performance.
- [SKMutableTexture](skmutabletexture.md): A texture whose contents can be dynamically updated.

# SKTexture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An image, decoded on the GPU, that can be used to render various SpriteKit objects.

## Declaration

```objectivec
@interface SKTexture : NSObject
```

## Mentioned In

- [Getting Started with Sprite Nodes](getting-started-with-sprite-nodes.md)
- [Loading and Using Textures](loading-and-using-textures.md)
- [About Texture Atlases](about-texture-atlases.md)
- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md)
- [Maximizing Texture Performance](maximizing-texture-performance.md)
- [Preloading Textures into Memory](preloading-textures-into-memory.md)

<a id="overview"></a>

## Overview

An [SKTexture](sktexture.md) object is an image that can be applied to [SKSpriteNode](skspritenode.md) and [SKShapeNode](skshapenode.md) objects, particles created by an [SKEmitterNode](skemitternode.md) object, or tiles used in an [SKTileMapNode](sktilemapnode.md). A texture object manages the texture data and graphics resources that are needed to render the image. Most texture objects are created from source images stored in your app bundle—your game’s artwork. Once created, a texture object’s contents are immutable. Multiple sprites can share the same texture object, sharing a single resource.

<a id="Deallocating-a-Texture"></a>

### Deallocating a Texture

After a texture is loaded into the graphics hardware memory, it stays in memory until the referencing [SKTexture](sktexture.md) object is deleted. This means that between levels (or in a dynamic game), you may need to make sure a texture object is deleted. Delete a [SKTexture](sktexture.md) object by removing any strong references to it, including:

- All texture references from [SKSpriteNode](skspritenode.md) and [SKEffectNode](skeffectnode.md) objects in your game
- Any strong references to the texture in your own code
- An [SKTextureAtlas](sktextureatlas.md) object that was used to create the texture object

## Topics

### First Steps

Create texture objects from images on disk or in memory.

- [Loading and Using Textures](loading-and-using-textures.md): Learn the basics about using textures in SpriteKit.
- [Texture Initializers](texture-initializers.md): See the various ways to create and use textures in SpriteKit.

### Reading a Texture’s Size and Optional Source Location

Read the texture’s size or optional cropping rectangle.

- [size](sktexture/size%28%29.md): Gets the size of the texture.
- [textureRect](sktexture/texturerect%28%29.md): Gets a rectangle that defines the portion of the texture used to render its image.

### Configuring a Texture’s Behavior for Scaling

Define the texture’s behavior at different scales.

- [filteringMode](sktexture/filteringmode.md): The filtering mode used when the size of a sprite drawn with the texture is not drawn at the texture’s native size.
- [SKTextureFilteringMode](sktexturefilteringmode.md): Texture filtering modes to use when the texture is drawn in a size other than its native size.
- [usesMipmaps](sktexture/usesmipmaps.md): A Boolean value that indicates whether the texture attempts to generate mipmaps.

### Getting a Texture’s Underlying Image

- [CGImage](sktexture/cgimage%28%29.md): Returns the texture’s image data as a Quartz 2D image.

### Preloading a Texture for Performance

Gain fine-tuned control over when a texture is decoded.

- [Preloading Textures into Memory](preloading-textures-into-memory.md): Decompress images ahead of time to avoid performance issues during gameplay.
- [preloadWithCompletionHandler:](sktexture/preload%28completionhandler_%29.md): Load texture data into memory, calling a completion handler after the task completes.
- [preloadTextures:withCompletionHandler:](sktexture/preload%28__withcompletionhandler_%29.md): Load the data of multiple textures into memory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKMutableTexture](skmutabletexture.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Textures

- [Maximizing Texture Performance](maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTextureAtlas](sktextureatlas.md): A collection of textures optimized for storage and drawing performance.
- [SKMutableTexture](skmutabletexture.md): A texture whose contents can be dynamically updated.
