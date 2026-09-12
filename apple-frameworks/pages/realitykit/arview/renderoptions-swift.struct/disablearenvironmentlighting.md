> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.struct/disablearenvironmentlighting](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.struct/disablearenvironmentlighting)

# disableAREnvironmentLighting

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Disable lighting from environment probes.

## Declaration

```swift
static let disableAREnvironmentLighting: ARView.RenderOptions
```

<a id="discussion"></a>

## Discussion

By default, RealityKit automatically creates light probes to record the lighting conditions both globally, and at appropriate points in the scene. The framework adjusts the complexity of the light probe set to match the capabilities of the GPU. For example, it might use only a global probe on less capable devices. It then applies environment lighting to virtual objects based on the probes.

To disable this effect, add this option to the [renderOptions](../renderoptions-swift.property.md) set.

Alternatively, to use environment lighting but control the probes manually, ensure the render option set doesn’t include this option. Then configure the session for manual environment texturing, using the [ARWorldTrackingConfiguration.EnvironmentTexturing.manual](../../../arkit/arworldtrackingconfiguration/environmenttexturing-swift.enum/manual.md) value.

For more information about creating and placing probes manually, see [Adding realistic reflections to an AR experience](../../../arkit/adding-realistic-reflections-to-an-ar-experience.md).

## See Also

### Disabling rendering effects

- [disableCameraGrain](disablecameragrain.md): Disable the image noise effect.
- [disableHDR](disablehdr.md): Disable the high dynamic range post-processing effect.
- [disableGroundingShadows](disablegroundingshadows.md): Disable rendering of ambient occlusion and shadows that ground objects in an AR scene.
- [disableMotionBlur](disablemotionblur.md): Disable the motion blur for all virtual content.
- [disableDepthOfField](disabledepthoffield.md): Disable the depth of field effect for all virtual content.
- [disableFaceMesh](disablefacemesh.md): Disable generation of the face entity with the default occlusion material.
- [disablePersonOcclusion](disablepersonocclusion.md): Disable person segmentation.
- [disableFaceOcclusions](disablefaceocclusions.md): Deprecated. Disable automatic face occlusion.
- [disableAutomaticLighting](disableautomaticlighting.md): Deprecated. Disable automatic updates of the scene lighting.
