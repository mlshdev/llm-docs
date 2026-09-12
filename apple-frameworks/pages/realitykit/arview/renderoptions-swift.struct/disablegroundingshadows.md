> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disablegroundingshadows](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablegroundingshadows)

# disableGroundingShadows

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.

## Declaration

```swift
static let disableGroundingShadows: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

Objects in the real world cast a grounding shadow onto adjacent surfaces due to ambient light. This provides viewers with a visual cue that the object is in close proximity to the surface. Objects without a grounding shadow appear disconnected from their environment. To create the same visual cue for virtual objects, RealityKit provides a grounding shadow effect.

![A side-by-side comparison of a virtual object — a three](https://developer.apple.com/images/com.apple.RealityKit/ARView-RenderOptions-swift-struct-disableGroundingShadows-1@2x.png)

Applying this effect involves a low, constant GPU cost. You can disable the effect by adding the [disableGroundingShadows](disablegroundingshadows.md) option to the view’s [renderOptions](../renderoptions-swift.property.md) set, if needed. Disabling the effect is most useful for older devices, like those with an A9 processor or earlier.

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
