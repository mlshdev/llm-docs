> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makegeometrymodifier(descriptor:)-9tq7q](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makegeometrymodifier(descriptor:)-9tq7q)

# makeGeometryModifier(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously creates a geometry modifier from a user-authored Metal function described by the given descriptor.

## Declaration

```swift
nonisolated(nonsending) func makeGeometryModifier(descriptor: LowLevelMaterialResource.GeometryModifier.Descriptor) async throws -> sending LowLevelMaterialResource.GeometryModifier
```

## Parameters

- `descriptor`: The Metal function name, library, and optional constant values.

<a id="return-value"></a>

## Return Value

A compiled [LowLevelMaterialResource.GeometryModifier](../lowlevelmaterialresource/geometrymodifier.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the specified Metal function cannot be found or compiled.

## See Also

### Creating geometry modifiers

- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-307ec.md): Synchronous variant of [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-307ec.md). Blocks the current thread until compilation completes.
- [makeDefaultGeometryModifier()](makedefaultgeometrymodifier%28%29.md): Returns a pass-through geometry modifier that performs no vertex transformation.
