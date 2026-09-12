> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/screenspaceambientocclusionnormalthreshold](https://developer.apple.com/documentation/scenekit/scncamera/screenspaceambientocclusionnormalthreshold)

# screenSpaceAmbientOcclusionNormalThreshold (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The magnitude of the blur effect applied to create ambient occlusion shadows.

## Declaration

```swift
var screenSpaceAmbientOcclusionNormalThreshold: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

SSAO shadowing includes a blur effect to realistically soften differences in shadow between adjacent pixels, which depends on both the smoothness of scene geometry and this factor. Larger blur factors create a softer, more spread-out blur; smaller factors create coarser shadowing effects.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.

# screenSpaceAmbientOcclusionNormalThreshold (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The magnitude of the blur effect applied to create ambient occlusion shadows.

## Declaration

```objectivec
@property (nonatomic) CGFloat screenSpaceAmbientOcclusionNormalThreshold;
```

<a id="Discussion"></a>

## Discussion

Ambient occlusion is an effect that improves material shading by calculating the amounts of ambient light that reach various parts of a surface, creating shadows on parts of a geometry where incoming light is obscured by other parts of the geometry. (You can provide pre-rendered ambient occlusion effects for a material using its [ambientOcclusion](../scnmaterial/ambientocclusion.md) property.) *Screen-space ambient occlusion* (SSAO) provides a real-time approximation of this effect for the entire scene viewed through the camera.

SSAO shadowing includes a blur effect to realistically soften differences in shadow between adjacent pixels, which depends on both the smoothness of scene geometry and this factor. Larger blur factors create a softer, more spread-out blur; smaller factors create coarser shadowing effects.

## See Also

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionBias](screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionDepthThreshold](screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
