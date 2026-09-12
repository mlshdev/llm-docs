> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/minimumtexturebufferalignment(for:)](https://developer.apple.com/documentation/metal/mtldevice/minimumtexturebufferalignment(for:))

# minimumTextureBufferAlignment(for:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

## Declaration

```swift
func minimumTextureBufferAlignment(for format: MTLPixelFormat) -> Int
```

## Parameters

- `format`: An [MTLPixelFormat](../mtlpixelformat.md) instance.

<a id="discussion"></a>

## Discussion

Metal aligns textures to their minimum alignment value, which directly affects the [makeTexture(descriptor:offset:bytesPerRow:)](../mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md) method’s `offset` and `bytesPerRow` parameters.

## See Also

### Creating textures

- [makeTexture(descriptor:)](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [makeTexture(descriptor:iosurface:plane:)](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [makeSharedTexture(descriptor:)](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [makeSharedTexture(handle:)](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignment(for:)](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.

# minimumTextureBufferAlignmentForPixelFormat: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

## Declaration

```objectivec
- (NSUInteger) minimumTextureBufferAlignmentForPixelFormat:(MTLPixelFormat) format;
```

## Parameters

- `format`: An [MTLPixelFormat](../mtlpixelformat.md) instance.

<a id="discussion"></a>

## Discussion

Metal aligns textures to their minimum alignment value, which directly affects the [newTextureWithDescriptor:offset:bytesPerRow:](../mtlbuffer/maketexture%28descriptor_offset_bytesperrow_%29.md) method’s `offset` and `bytesPerRow` parameters.

## See Also

### Creating textures

- [newTextureWithDescriptor:](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [newTextureWithDescriptor:iosurface:plane:](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [newSharedTextureWithDescriptor:](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [newSharedTextureWithHandle:](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignmentForPixelFormat:](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
