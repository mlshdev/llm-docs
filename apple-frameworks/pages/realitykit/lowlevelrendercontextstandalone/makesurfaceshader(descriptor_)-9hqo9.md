> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makesurfaceshader(descriptor:)-9hqo9](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makesurfaceshader(descriptor:)-9hqo9)

# makeSurfaceShader(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously creates a custom surface shader from a user-authored Metal function descriptor.

## Declaration

```swift
nonisolated(nonsending) final func makeSurfaceShader(descriptor: LowLevelMaterialResource.SurfaceShader.Descriptor) async throws -> sending LowLevelMaterialResource.SurfaceShader
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
