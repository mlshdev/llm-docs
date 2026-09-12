> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makesharedtexture(handle:)](https://developer.apple.com/documentation/metal/mtldevice/makesharedtexture(handle:))

# makeSharedTexture(handle:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Creates a texture that references a shared texture.

## Declaration

```swift
func makeSharedTexture(handle sharedHandle: MTLSharedTextureHandle) -> (any MTLTexture)?
```

## Parameters

- `sharedHandle`: An [MTLSharedTextureHandle](../mtlsharedtexturehandle.md) instance, typically from another process using the same GPU device.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

<a id="discussion"></a>

## Discussion

Call this method from the same [MTLDevice](../mtldevice.md) instance that created the shared texture instance.

> **Tip**

>  You can identify the correct device with the texture handle’s [device](../mtlsharedtexturehandle/device.md) property.

## See Also

### Creating textures

- [makeTexture(descriptor:)](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [makeTexture(descriptor:iosurface:plane:)](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [makeSharedTexture(descriptor:)](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [minimumLinearTextureAlignment(for:)](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignment(for:)](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

# newSharedTextureWithHandle: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Creates a texture that references a shared texture.

## Declaration

```objectivec
- (id<MTLTexture>) newSharedTextureWithHandle:(MTLSharedTextureHandle *) sharedHandle;
```

## Parameters

- `sharedHandle`: An [MTLSharedTextureHandle](../mtlsharedtexturehandle.md) instance, typically from another process using the same GPU device.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

<a id="discussion"></a>

## Discussion

Call this method from the same [MTLDevice](../mtldevice.md) instance that created the shared texture instance.

> **Tip**

>  You can identify the correct device with the texture handle’s [device](../mtlsharedtexturehandle/device.md) property.

## See Also

### Creating textures

- [newTextureWithDescriptor:](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [newTextureWithDescriptor:iosurface:plane:](maketexture%28descriptor_iosurface_plane_%29.md): Creates a texture instance that uses I/O surface to store its underlying data.
- [newSharedTextureWithDescriptor:](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [minimumLinearTextureAlignmentForPixelFormat:](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignmentForPixelFormat:](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.
