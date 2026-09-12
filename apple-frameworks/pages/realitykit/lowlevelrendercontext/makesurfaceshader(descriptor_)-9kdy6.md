> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makesurfaceshader(descriptor:)-9kdy6](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makesurfaceshader(descriptor:)-9kdy6)

# makeSurfaceShader(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously creates a custom surface shader from a user-authored Metal function descriptor.

## Declaration

```swift
nonisolated(nonsending) func makeSurfaceShader(descriptor: LowLevelMaterialResource.SurfaceShader.Descriptor) async throws -> sending LowLevelMaterialResource.SurfaceShader
```

## Parameters

- `descriptor`: The Metal function name, library, and optional constant values.

<a id="return-value"></a>

## Return Value

A compiled [LowLevelMaterialResource.SurfaceShader](../lowlevelmaterialresource/surfaceshader.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the specified Metal function cannot be found or compiled.

## See Also

### Creating surface shaders

- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-66tq8.md): Synchronous variant of [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-66tq8.md). Blocks the current thread until compilation completes.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-74vhb.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-74vhb.md). Blocks the current thread until compilation completes.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-14ppx.md): Asynchronously creates a simple surface shader using a built-in tint color or texture implementation, as described by the given descriptor.
