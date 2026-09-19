> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makedefaultgeometrymodifier()

# makeDefaultGeometryModifier()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a pass-through geometry modifier that performs no vertex transformation.

## Declaration

```swift
final func makeDefaultGeometryModifier() -> sending LowLevelMaterialResource.GeometryModifier
```

<a id="return-value"></a>

## Return Value

A pass-through [LowLevelMaterialResource.GeometryModifier](../lowlevelmaterialresource/geometrymodifier.md).
