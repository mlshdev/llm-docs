> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makesimplesurfaceshader(descriptor:)-14ppx](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makesimplesurfaceshader(descriptor:)-14ppx)

# makeSimpleSurfaceShader(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously creates a simple surface shader using a built-in tint color or texture implementation, as described by the given descriptor.

## Declaration

```swift
nonisolated(nonsending) func makeSimpleSurfaceShader(descriptor: LowLevelMaterialResource.SimpleSurfaceDescriptor) async throws -> sending LowLevelMaterialResource.SurfaceShader
```

## Parameters

- `descriptor`: The combination of tint color, texture, output channel, and opacity flags.

<a id="return-value"></a>

## Return Value

A compiled [LowLevelMaterialResource.SurfaceShader](../lowlevelmaterialresource/surfaceshader.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if shader compilation fails.

## See Also

### Creating surface shaders

- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-66tq8.md): Synchronous variant of [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-66tq8.md). Blocks the current thread until compilation completes.
- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-9kdy6.md): Asynchronously creates a custom surface shader from a user-authored Metal function descriptor.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-74vhb.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-74vhb.md). Blocks the current thread until compilation completes.
