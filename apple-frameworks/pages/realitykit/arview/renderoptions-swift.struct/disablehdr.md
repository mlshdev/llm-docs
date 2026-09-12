> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disablehdr](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablehdr)

# disableHDR

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable the high dynamic range post-processing effect.

## Declaration

```swift
static let disableHDR: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

RealityKit applies a high dynamic range effect, along with tone mapping, as a post-processing step in the GPU during the render. This effect is computationally inexpensive, but you can add the [disableHDR](disablehdr.md) option to the view’s [renderOptions](../renderoptions-swift.property.md) set to turn the effect off, if needed. Disabling the effect is most useful on older devices, like those with an A9 processor or earlier.

When deciding whether to use any effect, be sure to consider your app’s CPU and GPU utilization, as described in [Improving the Performance of a RealityKit App](../../improving-the-performance-of-a-realitykit-app.md).

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableAREnvironmentLighting](disablearenvironmentlighting.md): Disable lighting from environment probes.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
