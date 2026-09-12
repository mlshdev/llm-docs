> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/vignettingpower](https://developer.apple.com/documentation/scenekit/scncamera/vignettingpower)

# vignettingPower (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The amount of the rendered scene to darken with a vignette effect.

## Declaration

```swift
var vignettingPower: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A vignette effect darkens the edges and corners of the rendered scene, simulating the effect of lens and barrel shape on the image produced by a physical camera. Higher values result apply the darkening effect to a broader area around the edges of the rendered image, and lower values apply the effect to a smaller area, leaving more of the rendered image at full brightness. The default value of `0.0` results in no vignetting effect.

This property controls the area of the rendered image to be darkened; the [vignettingIntensity](vignettingintensity.md) property controls the level of darkening applied to those areas.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adding Stylistic Visual Effects

- [bloomIntensity](bloomintensity.md): The magnitude of bloom effect to apply to highlights in the rendered scene. Animatable.
- [bloomThreshold](bloomthreshold.md): The brightness threshold at which to apply a bloom effect to highlights in the rendered scene. Animatable.
- [bloomBlurRadius](bloomblurradius.md): The radius, in pixels, for the blurring portion of the bloom effect applied to highlights in the rendered scene. Animatable.
- [colorFringeIntensity](colorfringeintensity.md): The blend factor for fading the color fringing effect applied to the rendered scene.
- [colorFringeStrength](colorfringestrength.md): The magnitude of color fringing effect to apply to the rendered scene.
- [vignettingIntensity](vignettingintensity.md): The magnitude of vignette (darkening around edges) effect to apply to the rendered scene.

# vignettingPower (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The amount of the rendered scene to darken with a vignette effect.

## Declaration

```objectivec
@property (nonatomic) CGFloat vignettingPower;
```

<a id="Discussion"></a>

## Discussion

A vignette effect darkens the edges and corners of the rendered scene, simulating the effect of lens and barrel shape on the image produced by a physical camera. Higher values result apply the darkening effect to a broader area around the edges of the rendered image, and lower values apply the effect to a smaller area, leaving more of the rendered image at full brightness. The default value of `0.0` results in no vignetting effect.

This property controls the area of the rendered image to be darkened; the [vignettingIntensity](vignettingintensity.md) property controls the level of darkening applied to those areas.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adding Stylistic Visual Effects

- [bloomIntensity](bloomintensity.md): The magnitude of bloom effect to apply to highlights in the rendered scene. Animatable.
- [bloomThreshold](bloomthreshold.md): The brightness threshold at which to apply a bloom effect to highlights in the rendered scene. Animatable.
- [bloomBlurRadius](bloomblurradius.md): The radius, in pixels, for the blurring portion of the bloom effect applied to highlights in the rendered scene. Animatable.
- [colorFringeIntensity](colorfringeintensity.md): The blend factor for fading the color fringing effect applied to the rendered scene.
- [colorFringeStrength](colorfringestrength.md): The magnitude of color fringing effect to apply to the rendered scene.
- [vignettingIntensity](vignettingintensity.md): The magnitude of vignette (darkening around edges) effect to apply to the rendered scene.
