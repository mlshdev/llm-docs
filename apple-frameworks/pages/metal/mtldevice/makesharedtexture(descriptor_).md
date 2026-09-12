> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makesharedtexture(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makesharedtexture(descriptor:))

# makeSharedTexture(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Creates a texture that you can share across process boundaries.

## Declaration

```swift
func makeSharedTexture(descriptor: MTLTextureDescriptor) -> (any MTLTexture)?
```

## Parameters

- `descriptor`: An [MTLTextureDescriptor](../mtltexturedescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

<a id="discussion"></a>

## Discussion

You can create a shared texture but only with [storageModePrivate](../mtlresourceoptions/storagemodeprivate.md). You can share the texture with another process by:

1. Creating a texture handle (see [makeSharedTextureHandle()](../mtltexture/makesharedtexturehandle%28%29.md))
2. Passing the texture handle to the other process
3. Creating a texture in the other process by calling the [makeSharedTexture(handle:)](makesharedtexture%28handle_%29.md)method

> **Important**

>  You can share a texture with another process that uses the same GPU, but not with a different GPU.

## See Also

### Creating textures

- [makeTexture(descriptor:)](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [makeTexture(descriptor:iosurface:plane:)](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [makeSharedTexture(handle:)](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignment(for:)](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignment(for:)](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

# newSharedTextureWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Creates a texture that you can share across process boundaries.

## Declaration

```objectivec
- (id<MTLTexture>) newSharedTextureWithDescriptor:(MTLTextureDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLTextureDescriptor](../mtltexturedescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

<a id="discussion"></a>

## Discussion

You can create a shared texture but only with [MTLResourceStorageModePrivate](../mtlresourceoptions/storagemodeprivate.md). You can share the texture with another process by:

1. Creating a texture handle (see [newSharedTextureHandle](../mtltexture/makesharedtexturehandle%28%29.md))
2. Passing the texture handle to the other process
3. Creating a texture in the other process by calling the [newSharedTextureWithHandle:](makesharedtexture%28handle_%29.md)method

> **Important**

>  You can share a texture with another process that uses the same GPU, but not with a different GPU.

## See Also

### Creating textures

- [newTextureWithDescriptor:](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [newTextureWithDescriptor:iosurface:plane:](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [newSharedTextureWithHandle:](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignmentForPixelFormat:](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignmentForPixelFormat:](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.
