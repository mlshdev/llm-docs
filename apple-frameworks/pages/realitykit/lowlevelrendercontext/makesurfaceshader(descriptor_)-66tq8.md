> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makesurfaceshader(descriptor:)-66tq8](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makesurfaceshader(descriptor:)-66tq8)

# makeSurfaceShader(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-66tq8.md). Blocks the current thread until compilation completes.

## Declaration

```swift
func makeSurfaceShader(descriptor: LowLevelMaterialResource.SurfaceShader.Descriptor) throws -> sending LowLevelMaterialResource.SurfaceShader
```

## See Also

### Creating surface shaders

- [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29-9kdy6.md): Asynchronously creates a custom surface shader from a user-authored Metal function descriptor.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-74vhb.md): Synchronous variant of [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-74vhb.md). Blocks the current thread until compilation completes.
- [makeSimpleSurfaceShader(descriptor:)](makesimplesurfaceshader%28descriptor_%29-14ppx.md): Asynchronously creates a simple surface shader using a built-in tint color or texture implementation, as described by the given descriptor.
