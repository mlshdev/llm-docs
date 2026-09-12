> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/mipmaplevel/mip(unsafebuffer:offset:size:bytesperrow:)](https://developer.apple.com/documentation/realitykit/textureresource/contents/mipmaplevel/mip(unsafebuffer:offset:size:bytesperrow:))

# mip(unsafeBuffer:offset:size:bytesPerRow:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.

## Declaration

```swift
static func mip(unsafeBuffer buffer: any MTLBuffer, offset: Int = 0, size: Int, bytesPerRow: Int) -> TextureResource.Contents.MipmapLevel
```

## Parameters

- `buffer`: The source buffer. Don’t modify this buffer while using it as the source of a copy operation.
- `offset`: The byte position in the source buffer where the copying starts. The offset needs to be a multiple of the destination texture’s pixel size, in bytes.
- `size`: The number of bytes in the source buffer (starting from `offset`) available for copying.
- `bytesPerRow`: The stride in bytes between rows of texture data that RealityKit stores in the source buffer. The value needs to be a multiple of the destination texture’s pixel size, in bytes.

<a id="discussion"></a>

## Discussion

> **Important**

> A [TextureResource.Contents.MipmapLevel](../mipmaplevel.md) that you create with this function and use to create a [TextureResource](../../../textureresource.md) copies from the source buffer. That copy occurs when initializing the texture resource. The caller is responsible for ensuring that the system doesn’t modify the source Metal buffer while copying it to a texture.

## See Also

### Creating a texture mipmap level

- [mip(data:bytesPerRow:)](mip%28data_bytesperrow_%29.md): Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(data:bytesPerRow:bytesPerImage:)](mip%28data_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(slices:)](mip%28slices_%29.md): Specifies a single mipmap level of a 2D or 3D texture resource that slices provide.
- [mip(unsafeBuffer:offset:size:bytesPerRow:bytesPerImage:)](mip%28unsafebuffer_offset_size_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.
