> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/colorfringestrength](https://developer.apple.com/documentation/scenekit/scncamera/colorfringestrength)

# colorFringeStrength (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The magnitude of color fringing effect to apply to the rendered scene.

## Declaration

```swift
var colorFringeStrength: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Color fringing applies an effect that separately blurs the color components of each rendered pixel, adding subtle rainbow edge effects to the rendered scene that simulate the effects of chromatic aberration in a physical camera. Higher values create a more pronounced color shift, creating wider rainbow fringes; lower values spread colors across shorter distances, creating a subtler effect. The default value of `0.0` disables the color fringing effect entirely.

This property controls the breadth of color fringing. The [colorFringeIntensity](colorfringeintensity.md) property controls the blend factor between the color-fringed and the otherwise-normally-rendered image.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adding Stylistic Visual Effects

- [bloomIntensity](bloomintensity.md): The magnitude of bloom effect to apply to highlights in the rendered scene. Animatable.
- [bloomThreshold](bloomthreshold.md): The brightness threshold at which to apply a bloom effect to highlights in the rendered scene. Animatable.
- [bloomBlurRadius](bloomblurradius.md): The radius, in pixels, for the blurring portion of the bloom effect applied to highlights in the rendered scene. Animatable.
- [colorFringeIntensity](colorfringeintensity.md): The blend factor for fading the color fringing effect applied to the rendered scene.
- [vignettingIntensity](vignettingintensity.md): The magnitude of vignette (darkening around edges) effect to apply to the rendered scene.
- [vignettingPower](vignettingpower.md): The amount of the rendered scene to darken with a vignette effect.

# colorFringeStrength (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The magnitude of color fringing effect to apply to the rendered scene.

## Declaration

```objectivec
@property (nonatomic) CGFloat colorFringeStrength;
```

<a id="Discussion"></a>

## Discussion

Color fringing applies an effect that separately blurs the color components of each rendered pixel, adding subtle rainbow edge effects to the rendered scene that simulate the effects of chromatic aberration in a physical camera. Higher values create a more pronounced color shift, creating wider rainbow fringes; lower values spread colors across shorter distances, creating a subtler effect. The default value of `0.0` disables the color fringing effect entirely.

This property controls the breadth of color fringing. The [colorFringeIntensity](colorfringeintensity.md) property controls the blend factor between the color-fringed and the otherwise-normally-rendered image.

To enable this behavior, you must first enable the [wantsHDR](wantshdr.md) setting.

## See Also

### Adding Stylistic Visual Effects

- [bloomIntensity](bloomintensity.md): The magnitude of bloom effect to apply to highlights in the rendered scene. Animatable.
- [bloomThreshold](bloomthreshold.md): The brightness threshold at which to apply a bloom effect to highlights in the rendered scene. Animatable.
- [bloomBlurRadius](bloomblurradius.md): The radius, in pixels, for the blurring portion of the bloom effect applied to highlights in the rendered scene. Animatable.
- [colorFringeIntensity](colorfringeintensity.md): The blend factor for fading the color fringing effect applied to the rendered scene.
- [vignettingIntensity](vignettingintensity.md): The magnitude of vignette (darkening around edges) effect to apply to the rendered scene.
- [vignettingPower](vignettingpower.md): The amount of the rendered scene to darken with a vignette effect.
