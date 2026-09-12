> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/screenspaceambientocclusionradius](https://developer.apple.com/documentation/scenekit/scncamera/screenspaceambientocclusionradius)

# screenSpaceAmbientOcclusionRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The distance, in units of scene space, at which ambient occlusion takes effect.

## Declaration

```swift
var screenSpaceAmbientOcclusionRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

SSAO effects work by storing relevant scene geometry information for each pixel, and using that information to produce per-pixel shading effects. This [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md) property determines the area in scene space to consider around each pixel for determining the amount of incoming ambient light blocked by surrounding geometry (and thus the amount of shadow effect to apply). The default value is 5; smaller values cause SSAO effects to apply only to finer geometry details, while larger values affect coarser details.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.

# screenSpaceAmbientOcclusionRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The distance, in units of scene space, at which ambient occlusion takes effect.

## Declaration

```objectivec
@property (nonatomic) CGFloat screenSpaceAmbientOcclusionRadius;
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

SSAO effects work by storing relevant scene geometry information for each pixel, and using that information to produce per-pixel shading effects. This [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md) property determines the area in scene space to consider around each pixel for determining the amount of incoming ambient light blocked by surrounding geometry (and thus the amount of shadow effect to apply). The default value is 5; smaller values cause SSAO effects to apply only to finer geometry details, while larger values affect coarser details.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.
