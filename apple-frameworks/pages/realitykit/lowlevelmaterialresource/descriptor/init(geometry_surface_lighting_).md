> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/descriptor/init(geometry:surface:lighting:)

# init(geometry:surface:lighting:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor from the three shader stages.

## Declaration

```swift
init(geometry: LowLevelMaterialResource.GeometryModifier, surface: LowLevelMaterialResource.SurfaceShader, lighting: LowLevelMaterialResource.LightingFunction)
```

## Parameters

- `geometry`: The vertex-stage geometry modifier.
- `surface`: The fragment-stage surface shader.
- `lighting`: The lighting evaluation function.
