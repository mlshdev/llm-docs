> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas](https://developer.apple.com/documentation/spritekit/sktextureatlas)

# SKTextureAtlas (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of textures optimized for storage and drawing performance.

## Declaration

```swift
class SKTextureAtlas
```

## Mentioned In

- [About Texture Atlases](about-texture-atlases.md)
- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md)
- [Maximizing Texture Performance](maximizing-texture-performance.md)

<a id="overview"></a>

## Overview

An `SKTextureAtlas` is a collection of textures that were either created from an `.atlas` folder in the app bundle, or created at runtime. Texture atlases improve memory usage and rendering performance by reducing draw calls. Whenever you have textures that are always used together, store them in an atlas for best results.

SpriteKit implicitly loads an atlas when one of the atlas’s textures is accessed. Use [textureNamed(\_:)](sktextureatlas/texturenamed%28__%29.md) when you want to explicitly access a texture atlas’s contents.

The preferred place to create a texture atlas is within an asset catalog (see [Creating a Sprite Atlas](about-texture-atlases.md#Creating-a-Sprite-Atlas)), but you can also put your source textures in an `.atlas` folder in the app bundle.

## Topics

### First Steps

- [About Texture Atlases](about-texture-atlases.md): Learn about the benefits of having a texture atlas, and the process for using it.

### Accessing Textures

Retrieve textures from an atlas by the textures’ filenames.

- [textureNamed(\_:)](sktextureatlas/texturenamed%28__%29.md): Creates a texture from data stored in the texture atlas.

### Creating a Texture Atlas Programmatically

Create an atlas in code.

- [init(named:)](sktextureatlas/init%28named_%29.md): Creates a texture atlas from data stored in the app bundle.
- [init(dictionary:)](sktextureatlas/init%28dictionary_%29.md): Creates a texture atlas from a set of image files.

### Preloading Textures

Gain fine-tuned control over when an atlas is decoded.

- [preload(completionHandler:)](sktextureatlas/preload%28completionhandler_%29.md): Loads an atlas object’s textures into memory, calling a completion handler after the task completes.
- [preloadTextureAtlases(\_:withCompletionHandler:)](sktextureatlas/preloadtextureatlases%28__withcompletionhandler_%29.md): Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.
- [preloadTextureAtlasesNamed(\_:withCompletionHandler:)](sktextureatlas/preloadtextureatlasesnamed%28__withcompletionhandler_%29.md): Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.

### Reading Source Image Filenames

Determine whether an atlas contains a particular source image.

- [textureNames](sktextureatlas/texturenames.md): The names of the texture images stored in the atlas.

### Instance Properties

- [customPlaygroundQuickLook](sktextureatlas/customplaygroundquicklook.md): Deprecated. A custom playground quick look for this instance.

### Initializers

- [init(coder:)](sktextureatlas/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Textures

- [Maximizing Texture Performance](maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTexture](sktexture.md): An image, decoded on the GPU, that can be used to render various SpriteKit objects.
- [SKMutableTexture](skmutabletexture.md): A texture whose contents can be dynamically updated.

# SKTextureAtlas (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of textures optimized for storage and drawing performance.

## Declaration

```objectivec
@interface SKTextureAtlas : NSObject
```

## Mentioned In

- [About Texture Atlases](about-texture-atlases.md)
- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md)
- [Maximizing Texture Performance](maximizing-texture-performance.md)

<a id="overview"></a>

## Overview

An `SKTextureAtlas` is a collection of textures that were either created from an `.atlas` folder in the app bundle, or created at runtime. Texture atlases improve memory usage and rendering performance by reducing draw calls. Whenever you have textures that are always used together, store them in an atlas for best results.

SpriteKit implicitly loads an atlas when one of the atlas’s textures is accessed. Use [textureNamed:](sktextureatlas/texturenamed%28__%29.md) when you want to explicitly access a texture atlas’s contents.

The preferred place to create a texture atlas is within an asset catalog (see [Creating a Sprite Atlas](about-texture-atlases.md#Creating-a-Sprite-Atlas)), but you can also put your source textures in an `.atlas` folder in the app bundle.

## Topics

### First Steps

- [About Texture Atlases](about-texture-atlases.md): Learn about the benefits of having a texture atlas, and the process for using it.

### Accessing Textures

Retrieve textures from an atlas by the textures’ filenames.

- [textureNamed:](sktextureatlas/texturenamed%28__%29.md): Creates a texture from data stored in the texture atlas.

### Creating a Texture Atlas Programmatically

Create an atlas in code.

- [atlasNamed:](sktextureatlas/init%28named_%29.md): Creates a texture atlas from data stored in the app bundle.
- [atlasWithDictionary:](sktextureatlas/init%28dictionary_%29.md): Creates a texture atlas from a set of image files.

### Preloading Textures

Gain fine-tuned control over when an atlas is decoded.

- [preloadWithCompletionHandler:](sktextureatlas/preload%28completionhandler_%29.md): Loads an atlas object’s textures into memory, calling a completion handler after the task completes.
- [preloadTextureAtlases:withCompletionHandler:](sktextureatlas/preloadtextureatlases%28__withcompletionhandler_%29.md): Loads the textures of multiple atlas objects into memory, calling a completion handler after the task completes.
- [preloadTextureAtlasesNamed:withCompletionHandler:](sktextureatlas/preloadtextureatlasesnamed%28__withcompletionhandler_%29.md): Loads the textures of multiple atlases into memory, calling a completion handler after the task completes.

### Reading Source Image Filenames

Determine whether an atlas contains a particular source image.

- [textureNames](sktextureatlas/texturenames.md): The names of the texture images stored in the atlas.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Textures

- [Maximizing Texture Performance](maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTexture](sktexture.md): An image, decoded on the GPU, that can be used to render various SpriteKit objects.
- [SKMutableTexture](skmutabletexture.md): A texture whose contents can be dynamically updated.
