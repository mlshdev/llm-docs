> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawable](https://developer.apple.com/documentation/realitykit/textureresource/drawable)

# TextureResource.Drawable

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A drawable associated with a drawable queue

## Declaration

```swift
class Drawable
```

## Topics

### Working with a drawable

- [drawableQueue](drawable/drawablequeue.md): The DrawableQueue that this Drawable is owned by
- [texture](drawable/texture.md): A Metal texture object that contains the drawable’s contents.
- [present()](drawable/present%28%29.md): Presents the updated texture to the renderer as soon as possible.

### Instance Methods

- [presentOnSceneUpdate()](drawable/presentonsceneupdate%28%29.md): Presents the updated texture to the renderer atomically with the current scene update.

## See Also

### Texture drawing

- [Rendering a windowed game in stereo](../rendering-a-windowed-game-in-stereo.md): Bring an iOS or iPadOS game to visionOS and enhance it.
- [Creating a dynamic height and normal map with low-level texture](../creating-a-dynamic-height-map-with-low-level-texture.md): Create a low-level texture and update its pixel data on the GPU to form a dynamic height and normal map.
- [LowLevelTexture](../lowleveltexture.md): A container for texture data allowing you to create and update textures using your own format.
- [LowLevelTexture.Descriptor](../lowleveltexture/descriptor-swift.struct.md): An object that you use to configure new `LowLevelTexture` objects.
- [TextureResource.DrawableQueue](drawablequeue-swift.class.md): A drawable queue that may be used to update a texture resource dynamically
- [TextureResource.DrawableQueue.Descriptor](drawablequeue-swift.class/descriptor.md): Describes the texture managed by the drawable queue
