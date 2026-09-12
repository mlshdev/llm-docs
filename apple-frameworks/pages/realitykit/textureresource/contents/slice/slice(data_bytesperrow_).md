> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/contents/slice/slice(data:bytesperrow:)](https://developer.apple.com/documentation/realitykit/textureresource/contents/slice/slice(data:bytesperrow:))

# slice(data:bytesPerRow:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Specifies a single mipmap level slice of a texture resource with pixel data that RealityKit copies from a byte buffer.

## Declaration

```swift
static func slice(data: Data, bytesPerRow: Int) -> TextureResource.Contents.Slice
```

## Parameters

- `data`: The source buffer.
- `bytesPerRow`: The stride in bytes between rows of texture data that RealityKit stores in the source buffer. The value needs to be a multiple of the destination texture’s pixel size, in bytes.

## See Also

### Creating a texture slice

- [slice(unsafeBuffer:offset:size:bytesPerRow:)](slice%28unsafebuffer_offset_size_bytesperrow_%29.md): Specifies a single mipmap level slice of a texture resource with pixel data that RealityKit copies from a Metal buffer.
