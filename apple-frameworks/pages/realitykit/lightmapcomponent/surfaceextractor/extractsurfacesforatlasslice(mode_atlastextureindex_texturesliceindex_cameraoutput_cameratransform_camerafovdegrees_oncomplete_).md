> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lightmapcomponent/surfaceextractor/extractsurfacesforatlasslice(mode:atlastextureindex:texturesliceindex:cameraoutput:cameratransform:camerafovdegrees:oncomplete:)

# extractSurfacesForAtlasSlice(mode:atlasTextureIndex:textureSliceIndex:cameraOutput:cameraTransform:cameraFOVDegrees:onComplete:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
@MainActor func extractSurfacesForAtlasSlice(mode: LightmapComponent.SurfaceExtractor.ExtractionMode, atlasTextureIndex: Int, textureSliceIndex: Int, cameraOutput: RealityRenderer.CameraOutput, cameraTransform: Transform = .init(), cameraFOVDegrees: Float = 90, onComplete: (@Sendable () -> Void)? = nil) throws
```

## See Also

### Extracting surfaces

- [LightmapComponent.SurfaceExtractor.ExtractionMode](extractionmode.md): Specifies what surface property to extract.
