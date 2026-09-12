> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makegeometrymodifier(descriptor:)-307ec](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makegeometrymodifier(descriptor:)-307ec)

# makeGeometryModifier(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-307ec.md). Blocks the current thread until compilation completes.

## Declaration

```swift
func makeGeometryModifier(descriptor: LowLevelMaterialResource.GeometryModifier.Descriptor) throws -> sending LowLevelMaterialResource.GeometryModifier
```

## See Also

### Creating geometry modifiers

- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-9tq7q.md): Asynchronously creates a geometry modifier from a user-authored Metal function described by the given descriptor.
- [makeDefaultGeometryModifier()](makedefaultgeometrymodifier%28%29.md): Returns a pass-through geometry modifier that performs no vertex transformation.
