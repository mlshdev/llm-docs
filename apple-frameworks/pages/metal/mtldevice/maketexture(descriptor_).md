> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maketexture(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/maketexture(descriptor:))

# makeTexture(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a new texture instance.

## Declaration

```swift
func makeTexture(descriptor: MTLTextureDescriptor) -> (any MTLTexture)?
```

## Parameters

- `descriptor`: An [MTLTextureDescriptor](../mtltexturedescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Setting resource storage modes](../setting-resource-storage-modes.md)

## See Also

### Creating textures

- [makeTexture(descriptor:iosurface:plane:)](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [makeSharedTexture(descriptor:)](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [makeSharedTexture(handle:)](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignment(for:)](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignment(for:)](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

# newTextureWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a new texture instance.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithDescriptor:(MTLTextureDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLTextureDescriptor](../mtltexturedescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Setting resource storage modes](../setting-resource-storage-modes.md)

## See Also

### Creating textures

- [newTextureWithDescriptor:iosurface:plane:](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [newSharedTextureWithDescriptor:](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [newSharedTextureWithHandle:](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignmentForPixelFormat:](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignmentForPixelFormat:](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.
