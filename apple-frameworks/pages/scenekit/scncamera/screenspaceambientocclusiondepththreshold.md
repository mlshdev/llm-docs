> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/screenspaceambientocclusiondepththreshold](https://developer.apple.com/documentation/scenekit/scncamera/screenspaceambientocclusiondepththreshold)

# screenSpaceAmbientOcclusionDepthThreshold (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.

## Declaration

```swift
var screenSpaceAmbientOcclusionDepthThreshold: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

This [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md) property controls the effect of relative distance from the camera on SSAO effects. Higher values create more shadowing effects between foreground and background elements of the scene, but this can result in unrealistic dark halos around foreground elements that are far from the background. Lower values avoid dark halo effects, but create less visual separation between scene elements at different distances from the camera. The default value is 0.2 units.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.

# screenSpaceAmbientOcclusionDepthThreshold (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.

## Declaration

```objectivec
@property (nonatomic) CGFloat screenSpaceAmbientOcclusionDepthThreshold;
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

This [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md) property controls the effect of relative distance from the camera on SSAO effects. Higher values create more shadowing effects between foreground and background elements of the scene, but this can result in unrealistic dark halos around foreground elements that are far from the background. Lower values avoid dark halo effects, but create less visual separation between scene elements at different distances from the camera. The default value is 0.2 units.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.
