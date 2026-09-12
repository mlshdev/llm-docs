> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makebufferresource(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makebufferresource(descriptor:))

# makeBufferResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a GPU-managed buffer resource from the given descriptor.

## Declaration

```swift
func makeBufferResource(descriptor: LowLevelBufferResource.Descriptor) throws -> LowLevelBufferResource
```

## Parameters

- `descriptor`: The capacity and alignment requirements for the buffer.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelBufferResource](../lowlevelbufferresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the descriptor is invalid or if the underlying GPU allocation fails.

## See Also

### Creating resources

- [makeTextureResource(descriptor:)](maketextureresource%28descriptor_%29.md): Creates a texture resource from the given descriptor.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md): Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md). Blocks the current thread until compilation completes.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-9nufj.md): Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.
