> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawablequeue-swift.class](https://developer.apple.com/documentation/realitykit/textureresource/drawablequeue-swift.class)

# TextureResource.DrawableQueue

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A drawable queue that may be used to update a texture resource dynamically

## Declaration

```swift
class DrawableQueue
```

<a id="overview"></a>

## Overview

Each drawable queue can work with at most one consumer, such as a [RealityRenderer](../realityrenderer.md) instance or a render server.

## Topics

### Creating a queue

- [init(\_:)](drawablequeue-swift.class/init%28__%29.md): Create a new drawable queue.

### Working with queues

- [allowsNextDrawableTimeout](drawablequeue-swift.class/allowsnextdrawabletimeout.md): A Boolean value that determines whether requests for a new drawable expire if the system can’t satisfy them.
- [height](drawablequeue-swift.class/height.md): The height of each drawable’s texture in pixels.
- [mipmapsMode](drawablequeue-swift.class/mipmapsmode.md): Options that determine how mipmaps are handled for each drawable’s textures.
- [pixelFormat](drawablequeue-swift.class/pixelformat.md): The size and bit layout of all pixels in each drawable’s texture.
- [usage](drawablequeue-swift.class/usage.md): Options that determine how you can use each drawable’s textures.
- [width](drawablequeue-swift.class/width.md): The width of each drawable’s texture in pixels.
- [nextDrawable()](drawablequeue-swift.class/nextdrawable%28%29.md): Returns drawable when one is available, blocking the caller in the meantime.

### Structures

- [TextureResource.DrawableQueue.Descriptor](drawablequeue-swift.class/descriptor.md): Describes the texture managed by the drawable queue

## See Also

### Texture drawing

- [Rendering a windowed game in stereo](../rendering-a-windowed-game-in-stereo.md): Bring an iOS or iPadOS game to visionOS and enhance it.
- [Creating a dynamic height and normal map with low-level texture](../creating-a-dynamic-height-map-with-low-level-texture.md): Create a low-level texture and update its pixel data on the GPU to form a dynamic height and normal map.
- [LowLevelTexture](../lowleveltexture.md): A container for texture data allowing you to create and update textures using your own format.
- [LowLevelTexture.Descriptor](../lowleveltexture/descriptor-swift.struct.md): An object that you use to configure new `LowLevelTexture` objects.
- [TextureResource.Drawable](drawable.md): A drawable associated with a drawable queue
- [TextureResource.DrawableQueue.Descriptor](drawablequeue-swift.class/descriptor.md): Describes the texture managed by the drawable queue
