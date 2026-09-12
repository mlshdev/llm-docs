> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/mipmaplevel/mip(data:bytesperrow:)](https://developer.apple.com/documentation/realitykit/textureresource/contents/mipmaplevel/mip(data:bytesperrow:))

# mip(data:bytesPerRow:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.

## Declaration

```swift
static func mip(data: Data, bytesPerRow: Int) -> TextureResource.Contents.MipmapLevel
```

## Parameters

- `data`: The source buffer.
- `bytesPerRow`: The stride in bytes between rows of texture data that RealityKit stores in the source buffer. The value needs to be a multiple of the destination texture’s pixel size, in bytes.

## See Also

### Creating a texture mipmap level

- [mip(data:bytesPerRow:bytesPerImage:)](mip%28data_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(slices:)](mip%28slices_%29.md): Specifies a single mipmap level of a 2D or 3D texture resource that slices provide.
- [mip(unsafeBuffer:offset:size:bytesPerRow:)](mip%28unsafebuffer_offset_size_bytesperrow_%29.md): Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.
- [mip(unsafeBuffer:offset:size:bytesPerRow:bytesPerImage:)](mip%28unsafebuffer_offset_size_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.
