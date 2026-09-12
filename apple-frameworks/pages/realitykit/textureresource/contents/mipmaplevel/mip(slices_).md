> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/mipmaplevel/mip(slices:)](https://developer.apple.com/documentation/realitykit/textureresource/contents/mipmaplevel/mip(slices:))

# mip(slices:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Specifies a single mipmap level of a 2D or 3D texture resource that slices provide.

## Declaration

```swift
static func mip(slices: [TextureResource.Contents.Slice]) -> TextureResource.Contents.MipmapLevel
```

## Parameters

- `slices`: The source slices. A 2D array texture requires one slice per `arrayLength`. A cube texture requires six slices, containing faces `[+X, -X, +Y, -Y, +Z, -Z]`. 2D and 3D textures need a single slice, and you can build their `MipmapLevel` with `mip(buffer:offset:size:bytesPerRow:)` or `mip(data:bytesPerRow)`.

## See Also

### Creating a texture mipmap level

- [mip(data:bytesPerRow:)](mip%28data_bytesperrow_%29.md): Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(data:bytesPerRow:bytesPerImage:)](mip%28data_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a byte buffer.
- [mip(unsafeBuffer:offset:size:bytesPerRow:)](mip%28unsafebuffer_offset_size_bytesperrow_%29.md): Specifies a single mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.
- [mip(unsafeBuffer:offset:size:bytesPerRow:bytesPerImage:)](mip%28unsafebuffer_offset_size_bytesperrow_bytesperimage_%29.md): Specifies a multi-image mipmap level of a texture resource with pixel data that RealityKit copies from a Metal buffer.
