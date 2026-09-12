> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapcomponent/surfaceextractor/extractionmode/finalshadedcolor](https://developer.apple.com/documentation/realitykit/lightmapcomponent/surfaceextractor/extractionmode/finalshadedcolor)

# LightmapComponent.SurfaceExtractor.ExtractionMode.finalShadedColor

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** macOS 27.0+

This will extract the final shaded color as it would be normally rendered, with all the effects from lights, shadows, etc. View-dependent effects like specular highlights will be consistent with the camera transform provided to `extractSurfacesForAtlasSlice`.

## Declaration

```swift
case finalShadedColor
```

## See Also

### Choosing the extraction mode

- [LightmapComponent.SurfaceExtractor.ExtractionMode.baseColor](basecolor.md)
