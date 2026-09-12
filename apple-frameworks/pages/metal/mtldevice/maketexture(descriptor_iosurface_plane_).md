> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maketexture(descriptor:iosurface:plane:)](https://developer.apple.com/documentation/metal/mtldevice/maketexture(descriptor:iosurface:plane:))

# makeTexture(descriptor:iosurface:plane:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

Creates a texture instance that uses I/O surface to store its underlying data.

## Declaration

```swift
func makeTexture(descriptor: MTLTextureDescriptor, iosurface: IOSurfaceRef, plane: Int) -> (any MTLTexture)?
```

## Parameters

- `descriptor`: An [MTLTextureDescriptor](../mtltexturedescriptor.md) instance.
- `iosurface`: An `IOSurfaceRef` instance.
- `plane`: A plane within i`osurface` the method sets as the texture’s underlying data.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

## See Also

### Creating textures

- [makeTexture(descriptor:)](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [makeSharedTexture(descriptor:)](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [makeSharedTexture(handle:)](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignment(for:)](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignment(for:)](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.

# newTextureWithDescriptor:iosurface:plane: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

Creates a texture instance that uses I/O surface to store its underlying data.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithDescriptor:(MTLTextureDescriptor *) descriptor iosurface:(IOSurfaceRef) iosurface plane:(NSUInteger) plane;
```

## Parameters

- `descriptor`: An [MTLTextureDescriptor](../mtltexturedescriptor.md) instance.
- `iosurface`: An `IOSurfaceRef` instance.
- `plane`: A plane within i`osurface` the method sets as the texture’s underlying data.

<a id="return-value"></a>

## Return Value

A new [MTLTexture](../mtltexture.md) instance if the method completed successfully; otherwise `nil`.

## See Also

### Creating textures

- [newTextureWithDescriptor:](maketexture%28descriptor_%29.md): Creates a new texture instance.
- [newSharedTextureWithDescriptor:](makesharedtexture%28descriptor_%29.md): Creates a texture that you can share across process boundaries.
- [newSharedTextureWithHandle:](makesharedtexture%28handle_%29.md): Creates a texture that references a shared texture.
- [minimumLinearTextureAlignmentForPixelFormat:](minimumlineartexturealignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a linear texture from a buffer.
- [minimumTextureBufferAlignmentForPixelFormat:](minimumtexturebufferalignment%28for_%29.md): Returns the minimum alignment the GPU device requires to create a texture buffer from a buffer.
