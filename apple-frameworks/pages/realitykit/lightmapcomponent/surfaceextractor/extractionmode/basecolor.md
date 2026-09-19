> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lightmapcomponent/surfaceextractor/extractionmode/basecolor

# LightmapComponent.SurfaceExtractor.ExtractionMode.baseColor

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** macOS 27.0+

## Declaration

```swift
case baseColor
```

## See Also

### Choosing the extraction mode

- [LightmapComponent.SurfaceExtractor.ExtractionMode.finalShadedColor](finalshadedcolor.md): This will extract the final shaded color as it would be normally rendered, with all the effects from lights, shadows, etc. View-dependent effects like specular highlights will be consistent with the camera transform provided to `extractSurfacesForAtlasSlice`.
