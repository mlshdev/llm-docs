> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makematerialresource(descriptor:)-9nufj](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makematerialresource(descriptor:)-9nufj)

# makeMaterialResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.

## Declaration

```swift
nonisolated(nonsending) func makeMaterialResource(descriptor: LowLevelMaterialResource.Descriptor) async throws -> sending LowLevelMaterialResource
```

## Parameters

- `descriptor`: The geometry modifier, surface shader, and lighting function to compile into a material.

<a id="return-value"></a>

## Return Value

A newly compiled [LowLevelMaterialResource](../lowlevelmaterialresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if shader compilation fails.

## See Also

### Creating resources

- [makeBufferResource(descriptor:)](makebufferresource%28descriptor_%29.md): Creates a GPU-managed buffer resource from the given descriptor.
- [makeTextureResource(descriptor:)](maketextureresource%28descriptor_%29.md): Creates a texture resource from the given descriptor.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md): Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md). Blocks the current thread until compilation completes.
