> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disableautomaticlighting](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disableautomaticlighting)

# disableAutomaticLighting

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable automatic updates of the scene lighting.

## Declaration

```swift
static let disableAutomaticLighting: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

By default, ARKit analyzes the scene lighting in captured camera images and automatically updates lighting in the scene. Add the [disableAutomaticLighting](disableautomaticlighting.md) option to the AR view’s [renderOptions](../renderoptions-swift.property.md) to disable the feature.

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
