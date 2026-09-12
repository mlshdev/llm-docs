> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lightmapcomponent/surfaceextractor](https://developer.apple.com/documentation/realitykit/lightmapcomponent/surfaceextractor)

# LightmapComponent.SurfaceExtractor

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** macOS 27.0+

This is a helper for extracting certain surface properties from entities within a lightmapped scene and rendering them out into the atlas defined by the light map.

## Declaration

```swift
@MainActor class SurfaceExtractor
```

## Topics

### Creating a surface extractor

- [init(lightmapRootEntity:)](surfaceextractor/init%28lightmaprootentity_%29.md)

### Extracting surfaces

- [extractSurfacesForAtlasSlice(mode:atlasTextureIndex:textureSliceIndex:cameraOutput:cameraTransform:cameraFOVDegrees:onComplete:)](surfaceextractor/extractsurfacesforatlasslice%28mode_atlastextureindex_texturesliceindex_cameraoutput_cameratransform_camerafovdegrees_oncomplete_%29.md)
- [LightmapComponent.SurfaceExtractor.ExtractionMode](surfaceextractor/extractionmode.md): Specifies what surface property to extract.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
