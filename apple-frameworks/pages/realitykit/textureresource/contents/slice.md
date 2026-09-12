> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/slice](https://developer.apple.com/documentation/realitykit/textureresource/contents/slice)

# TextureResource.Contents.Slice

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that references the pixel data for a single slice of a mipmap.

## Declaration

```swift
struct Slice
```

<a id="overview"></a>

## Overview

2D array textures have `arrayLength` slices per mipmap, and cube textures have six slices per mipmap. 2D and 3D textures have a single slice per mipmap.

## Topics

### Creating a texture slice

- [slice(data:bytesPerRow:)](slice/slice%28data_bytesperrow_%29.md): Specifies a single mipmap level slice of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [slice(unsafeBuffer:offset:size:bytesPerRow:)](slice/slice%28unsafebuffer_offset_size_bytesperrow_%29.md): Specifies a single mipmap level slice of a texture resource with pixel data that RealityKit copies from a Metal buffer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining the content

- [TextureResource.Contents.MipmapLevel](mipmaplevel.md): An object that references the pixel data for a single mipmap of a texture.
