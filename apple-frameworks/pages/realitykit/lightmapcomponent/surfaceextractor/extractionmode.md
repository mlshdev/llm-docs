> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapcomponent/surfaceextractor/extractionmode](https://developer.apple.com/documentation/realitykit/lightmapcomponent/surfaceextractor/extractionmode)

# LightmapComponent.SurfaceExtractor.ExtractionMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Specifies what surface property to extract.

## Declaration

```swift
enum ExtractionMode
```

## Topics

### Choosing the extraction mode

- [LightmapComponent.SurfaceExtractor.ExtractionMode.finalShadedColor](extractionmode/finalshadedcolor.md): This will extract the final shaded color as it would be normally rendered, with all the effects from lights, shadows, etc. View-dependent effects like specular highlights will be consistent with the camera transform provided to `extractSurfacesForAtlasSlice`.
- [LightmapComponent.SurfaceExtractor.ExtractionMode.baseColor](extractionmode/basecolor.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Extracting surfaces

- [extractSurfacesForAtlasSlice(mode:atlasTextureIndex:textureSliceIndex:cameraOutput:cameraTransform:cameraFOVDegrees:onComplete:)](extractsurfacesforatlasslice%28mode_atlastextureindex_texturesliceindex_cameraoutput_cameratransform_camerafovdegrees_oncomplete_%29.md)
