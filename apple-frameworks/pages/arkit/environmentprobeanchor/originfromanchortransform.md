> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/environmentprobeanchor/originfromanchortransform

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The transform from the environment probe anchor to the origin coordinate system.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Getting anchor information

- [environmentTexture](environmenttexture.md): The environment texture of an anchor.
- [cameraScaleReference](camerascalereference.md): The camera scale reference of this anchor.
