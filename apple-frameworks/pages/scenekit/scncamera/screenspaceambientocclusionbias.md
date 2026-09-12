> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/screenspaceambientocclusionbias](https://developer.apple.com/documentation/scenekit/scncamera/screenspaceambientocclusionbias)

# screenSpaceAmbientOcclusionBias (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An offset for modulating ambient occlusion effects.

## Declaration

```swift
var screenSpaceAmbientOcclusionBias: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

This [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md) value is used in an intermediate stage of calculating the SSAO effect, and measures a distance in scene units. Increasing or decreasing this value from its default of 0.03 can help to offset unrealistic effects produced by changing other SSAO settings.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.

# screenSpaceAmbientOcclusionBias (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An offset for modulating ambient occlusion effects.

## Declaration

```objectivec
@property (nonatomic) CGFloat screenSpaceAmbientOcclusionBias;
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

This [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md) value is used in an intermediate stage of calculating the SSAO effect, and measures a distance in scene units. Increasing or decreasing this value from its default of 0.03 can help to offset unrealistic effects produced by changing other SSAO settings.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.
