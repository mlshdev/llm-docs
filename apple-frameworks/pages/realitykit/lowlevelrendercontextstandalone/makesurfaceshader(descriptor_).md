> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makesurfaceshader(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makesurfaceshader(descriptor:))

# makeSurfaceShader(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeSurfaceShader(descriptor:)](makesurfaceshader%28descriptor_%29.md). Blocks the current thread until compilation completes.

## Declaration

```swift
final func makeSurfaceShader(descriptor: LowLevelMaterialResource.SurfaceShader.Descriptor) throws -> sending LowLevelMaterialResource.SurfaceShader
```
