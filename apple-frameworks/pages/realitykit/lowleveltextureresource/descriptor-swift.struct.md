> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltextureresource/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveltextureresource/descriptor-swift.struct)

# LowLevelTextureResource.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The configuration for a new low-level texture resource.

## Declaration

```swift
struct Descriptor
```

<a id="overview"></a>

## Overview

This descriptor is analogous to `MTLTextureDescriptor`.

## Topics

### Creating a descriptor

- [init(textureType:pixelFormat:width:height:depth:mipmapLevelCount:arrayLength:textureUsage:swizzle:)](descriptor-swift.struct/init%28texturetype_pixelformat_width_height_depth_mipmaplevelcount_arraylength_textureusage_swizzle_%29.md): Creates a texture descriptor with the specified texture type, pixel format, dimensions, mipmap count, array length, usage flags, and swizzle pattern.

### Configuring texture usage

- [textureUsage](descriptor-swift.struct/textureusage.md): The options that determine how the texture can be used.
- [swizzle](descriptor-swift.struct/swizzle.md): The channel swizzle pattern the GPU applies when sampling the texture.

### Instance Properties

- [arrayLength](descriptor-swift.struct/arraylength.md): The number of array elements for this texture.
- [depth](descriptor-swift.struct/depth.md): The depth of the texture image for the base mipmap level, in pixels.
- [height](descriptor-swift.struct/height.md): The height of the texture image for the base mipmap level, in pixels.
- [mipmapLevelCount](descriptor-swift.struct/mipmaplevelcount.md): The number of mipmap levels for the texture.
- [pixelFormat](descriptor-swift.struct/pixelformat.md): The size and bit layout of all pixels in the texture.
- [textureType](descriptor-swift.struct/texturetype.md): The dimension and arrangement of texture image data.
- [width](descriptor-swift.struct/width.md): The width of the texture image for the base mipmap level, in pixels.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the descriptor

- [descriptor](descriptor-swift.property.md): The descriptor used to create this texture resource.
