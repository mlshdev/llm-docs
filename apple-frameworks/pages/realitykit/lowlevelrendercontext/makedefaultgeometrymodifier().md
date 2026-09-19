> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makedefaultgeometrymodifier()

# makeDefaultGeometryModifier()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a pass-through geometry modifier that performs no vertex transformation.

## Declaration

```swift
func makeDefaultGeometryModifier() -> sending LowLevelMaterialResource.GeometryModifier
```

<a id="return-value"></a>

## Return Value

A pass-through [LowLevelMaterialResource.GeometryModifier](../lowlevelmaterialresource/geometrymodifier.md).

## See Also

### Creating geometry modifiers

- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-307ec.md): Synchronous variant of [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-307ec.md). Blocks the current thread until compilation completes.
- [makeGeometryModifier(descriptor:)](makegeometrymodifier%28descriptor_%29-9tq7q.md): Asynchronously creates a geometry modifier from a user-authored Metal function described by the given descriptor.
