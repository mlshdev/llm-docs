> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disablepersonocclusion](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablepersonocclusion)

# disablePersonOcclusion

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable person segmentation.

## Declaration

```swift
static let disablePersonOcclusion: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

By default, ARKit detects users in the frame, and hides content occluded by users. Add the [disablePersonOcclusion](disablepersonocclusion.md) option to the AR view’s [renderOptions](../renderoptions-swift.property.md) to disable this feature.

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
