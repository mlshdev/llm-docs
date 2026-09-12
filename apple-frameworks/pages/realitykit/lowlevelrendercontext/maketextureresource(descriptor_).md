> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/maketextureresource(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/maketextureresource(descriptor:))

# makeTextureResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a texture resource from the given descriptor.

## Declaration

```swift
func makeTextureResource(descriptor: LowLevelTextureResource.Descriptor) throws -> LowLevelTextureResource
```

## Parameters

- `descriptor`: The texture type, pixel format, dimensions, and usage flags.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelTextureResource](../lowleveltextureresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the descriptor is invalid or if the underlying GPU allocation fails.

## See Also

### Creating resources

- [makeBufferResource(descriptor:)](makebufferresource%28descriptor_%29.md): Creates a GPU-managed buffer resource from the given descriptor.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md): Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md). Blocks the current thread until compilation completes.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-9nufj.md): Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.
