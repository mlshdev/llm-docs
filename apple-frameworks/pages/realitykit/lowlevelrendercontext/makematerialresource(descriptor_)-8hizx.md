> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makematerialresource(descriptor:)-8hizx

# makeMaterialResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-8hizx.md). Blocks the current thread until compilation completes.

## Declaration

```swift
func makeMaterialResource(descriptor: LowLevelMaterialResource.Descriptor) throws -> sending LowLevelMaterialResource
```

## See Also

### Creating resources

- [makeBufferResource(descriptor:)](makebufferresource%28descriptor_%29.md): Creates a GPU-managed buffer resource from the given descriptor.
- [makeTextureResource(descriptor:)](maketextureresource%28descriptor_%29.md): Creates a texture resource from the given descriptor.
- [makeMaterialResource(descriptor:)](makematerialresource%28descriptor_%29-9nufj.md): Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.
