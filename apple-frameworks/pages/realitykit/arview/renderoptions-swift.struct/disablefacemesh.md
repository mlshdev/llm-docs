> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablefacemesh

# disableFaceMesh

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable generation of the face entity with the default occlusion material.

## Declaration

```swift
static let disableFaceMesh: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

By default, [ARKit](../../../arkit.md) detects people and hides virtual objects behind their faces.

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
