> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/wantshdr](https://developer.apple.com/documentation/scenekit/scncamera/wantshdr)

# wantsHDR (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit applies High Dynamic Range (HDR) postprocessing effects to a scene.

## Declaration

```swift
var wantsHDR: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit performs lighting calculations in a color space whose brightness range is similar to that of the output display. This approach limits the ability to perform realistic rendering of scenes with fine details in brightness levels.

When you enable HDR rendering for a camera, SceneKit calculates lighting in a much deeper color space, preserving fine details in contrast regardless of brightness, then applies a post-processing effect called *tone mapping* to translate luminance values from that space to the narrower range of brightness values that can be shown on a display. SceneKit determines a tone mapping curve (including the exposure level) from the [minimumExposure](minimumexposure.md), [maximumExposure](maximumexposure.md), [exposureOffset](exposureoffset.md), and [whitePoint](whitepoint.md) properties along with a measure of scene luminance. The [wantsExposureAdaptation](wantsexposureadaptation.md) property determines whether tone mapping effects are static or dynamically respond when the luminance visible to the camera changes.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding High Dynamic Range Effects

- [exposureOffset](exposureoffset.md): A logarithmic bias that adjusts the results of SceneKit’s tone mapping operation, brightening or darkening the visible scene.
- [averageGray](averagegray.md): The luminance level to use as the midpoint of a tone mapping curve.
- [whitePoint](whitepoint.md): The luminance level to use as the upper end of a tone mapping curve.
- [minimumExposure](minimumexposure.md): The minimum exposure value to use in tone mapping.
- [maximumExposure](maximumexposure.md): The minimum exposure value to use in tone mapping.

# wantsHDR (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that determines whether SceneKit applies High Dynamic Range (HDR) postprocessing effects to a scene.

## Declaration

```objectivec
@property (nonatomic) BOOL wantsHDR;
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [false](https://developer.apple.com/documentation/swift/false) (the default), SceneKit performs lighting calculations in a color space whose brightness range is similar to that of the output display. This approach limits the ability to perform realistic rendering of scenes with fine details in brightness levels.

When you enable HDR rendering for a camera, SceneKit calculates lighting in a much deeper color space, preserving fine details in contrast regardless of brightness, then applies a post-processing effect called *tone mapping* to translate luminance values from that space to the narrower range of brightness values that can be shown on a display. SceneKit determines a tone mapping curve (including the exposure level) from the [minimumExposure](minimumexposure.md), [maximumExposure](maximumexposure.md), [exposureOffset](exposureoffset.md), and [whitePoint](whitepoint.md) properties along with a measure of scene luminance. The [wantsExposureAdaptation](wantsexposureadaptation.md) property determines whether tone mapping effects are static or dynamically respond when the luminance visible to the camera changes.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding High Dynamic Range Effects

- [exposureOffset](exposureoffset.md): A logarithmic bias that adjusts the results of SceneKit’s tone mapping operation, brightening or darkening the visible scene.
- [averageGray](averagegray.md): The luminance level to use as the midpoint of a tone mapping curve.
- [whitePoint](whitepoint.md): The luminance level to use as the upper end of a tone mapping curve.
- [minimumExposure](minimumexposure.md): The minimum exposure value to use in tone mapping.
- [maximumExposure](maximumexposure.md): The minimum exposure value to use in tone mapping.
