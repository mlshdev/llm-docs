> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makesimplesurfaceshader(descriptor:)-3f0mt](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makesimplesurfaceshader(descriptor:)-3f0mt)

# makeSimpleSurfaceShader(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously creates a simple surface shader using a built-in tint color or texture implementation, as described by the given descriptor.

## Declaration

```swift
nonisolated(nonsending) final func makeSimpleSurfaceShader(descriptor: LowLevelMaterialResource.SimpleSurfaceDescriptor) async throws -> sending LowLevelMaterialResource.SurfaceShader
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
