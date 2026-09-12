> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/mipmaplevel](https://developer.apple.com/documentation/realitykit/textureresource/contents/mipmaplevel)

# TextureResource.Contents.MipmapLevel

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

An object that references the pixel data for a single mipmap of a texture.

## Declaration

```swift
struct MipmapLevel
```

## Topics

### Creating a texture mipmap level

- [mip(data:bytesPerRow:)](mipmaplevel/mip%28data_bytesperrow_%29.md): Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(data:bytesPerRow:bytesPerImage:)](mipmaplevel/mip%28data_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(slices:)](mipmaplevel/mip%28slices_%29.md): Specifies a single mipmap level of a 2D or 3D texture resource that slices provide.
- [mip(unsafeBuffer:offset:size:bytesPerRow:)](mipmaplevel/mip%28unsafebuffer_offset_size_bytesperrow_%29.md): Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.
- [mip(unsafeBuffer:offset:size:bytesPerRow:bytesPerImage:)](mipmaplevel/mip%28unsafebuffer_offset_size_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining the content

- [TextureResource.Contents.Slice](slice.md): An object that references the pixel data for a single slice of a mipmap.
