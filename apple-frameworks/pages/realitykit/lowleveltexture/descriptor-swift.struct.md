> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltexture/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveltexture/descriptor-swift.struct)

# LowLevelTexture.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that you use to configure new `LowLevelTexture` objects.

## Declaration

```swift
struct Descriptor
```

## Topics

### Initializers

- [init(\_:)](descriptor-swift.struct/init%28__%29.md): Create from a Metal texture descriptor.
- [init(textureType:pixelFormat:width:height:depth:mipmapLevelCount:arrayLength:textureUsage:swizzle:)](descriptor-swift.struct/init%28texturetype_pixelformat_width_height_depth_mipmaplevelcount_arraylength_textureusage_swizzle_%29.md): Creates a descriptor for a low-level texture.

### Instance Properties

- [arrayLength](descriptor-swift.struct/arraylength.md): The number of array elements for this texture.
- [depth](descriptor-swift.struct/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [height](descriptor-swift.struct/height.md): The height of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](descriptor-swift.struct/mipmaplevelcount.md): The number of mipmap levels for the texture.
- [pixelFormat](descriptor-swift.struct/pixelformat.md): The size and bit layout of all pixels in the texture.
- [swizzle](descriptor-swift.struct/swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.
- [textureType](descriptor-swift.struct/texturetype.md): The dimension and arrangement of texture image data.
- [textureUsage](descriptor-swift.struct/textureusage.md): An enumeration for the various options that determine how you can use a texture.
- [width](descriptor-swift.struct/width.md): The width of the texture image for the base level mipmap, in pixels.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Texture drawing

- [Rendering a windowed game in stereo](../rendering-a-windowed-game-in-stereo.md): Bring an iOS or iPadOS game to visionOS and enhance it.
- [Creating a dynamic height and normal map with low-level texture](../creating-a-dynamic-height-map-with-low-level-texture.md): Create a low-level texture and update its pixel data on the GPU to form a dynamic height and normal map.
- [LowLevelTexture](../lowleveltexture.md): A container for texture data allowing you to create and update textures using your own format.
- [TextureResource.Drawable](../textureresource/drawable.md): A drawable associated with a drawable queue
- [TextureResource.DrawableQueue](../textureresource/drawablequeue-swift.class.md): A drawable queue that may be used to update a texture resource dynamically
- [TextureResource.DrawableQueue.Descriptor](../textureresource/drawablequeue-swift.class/descriptor.md): Describes the texture managed by the drawable queue
