> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawablequeue-swift.class/descriptor](https://developer.apple.com/documentation/realitykit/textureresource/drawablequeue-swift.class/descriptor)

# TextureResource.DrawableQueue.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Describes the texture managed by the drawable queue

## Declaration

```swift
struct Descriptor
```

## Topics

### Initializers

- [init(pixelFormat:width:height:usage:mipmapsMode:)](descriptor/init%28pixelformat_width_height_usage_mipmapsmode_%29.md)
- [init(pixelFormat:width:height:usage:mipmapsMode:timeout:)](descriptor/init%28pixelformat_width_height_usage_mipmapsmode_timeout_%29.md)

### Instance Properties

- [height](descriptor/height.md): The height of each drawable’s texture in pixels.
- [mipmapsMode](descriptor/mipmapsmode.md): A Boolean value that determines whether the resource should generate mipmaps for each drawable’s texture after it was updated.
- [pixelFormat](descriptor/pixelformat.md): The size and bit layout of all pixels in each drawable’s texture.
- [timeout](descriptor/timeout.md): Specifies a timeout value in seconds when querying nextDrawable(). nextDrawable() will be blocked for up to the specified timeout period for a drawable to become available else throws `NextDrawableError.timeoutReached`. By default this is set to 1 second. Note that if `allowsNextDrawableTimeout` is false, then the timeout parameter will be ignored.
- [usage](descriptor/usage.md): Options that determine how you can use each drawable’s textures.
- [width](descriptor/width.md): The width of each drawable’s texture in pixels.

## See Also

### Texture drawing

- [Rendering a windowed game in stereo](../../rendering-a-windowed-game-in-stereo.md): Bring an iOS or iPadOS game to visionOS and enhance it.
- [Creating a dynamic height and normal map with low-level texture](../../creating-a-dynamic-height-map-with-low-level-texture.md): Create a low-level texture and update its pixel data on the GPU to form a dynamic height and normal map.
- [LowLevelTexture](../../lowleveltexture.md): A container for texture data allowing you to create and update textures using your own format.
- [LowLevelTexture.Descriptor](../../lowleveltexture/descriptor-swift.struct.md): An object that you use to configure new `LowLevelTexture` objects.
- [TextureResource.Drawable](../drawable.md): A drawable associated with a drawable queue
- [TextureResource.DrawableQueue](../drawablequeue-swift.class.md): A drawable queue that may be used to update a texture resource dynamically
