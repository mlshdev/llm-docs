> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/exposureadaptationbrighteningspeedfactor](https://developer.apple.com/documentation/scenekit/scncamera/exposureadaptationbrighteningspeedfactor)

# exposureAdaptationBrighteningSpeedFactor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The relative duration of automatically animated exposure transitions from dark to bright areas.

## Declaration

```swift
var exposureAdaptationBrighteningSpeedFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When using a High Dynamic Range (HDR) camera, SceneKit applies a process called *tone mapping* to translate the wide range of luminance values in the visible scene to the narrower range of brightness values that can be shown on a display. When the [wantsExposureAdaptation](wantsexposureadaptation.md) property is enabled, SceneKit automatically adjusts the tone mapping curve based on the average luminance currently visible to the camera, and creates automatic transitions between exposure levels.

SceneKit automatically determines the overall duration of exposure-level animations based on the values of this property and the [exposureAdaptationDarkeningSpeedFactor](exposureadaptationdarkeningspeedfactor.md) property. The default value is `0.4`, resulting in brightening animations that are slightly faster than darkening animations.

This property has no effect if either of the [wantsHDR](wantshdr.md) or [wantsExposureAdaptation](wantsexposureadaptation.md) values is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding Automatic HDR Exposure Adaptation

- [wantsExposureAdaptation](wantsexposureadaptation.md): A Boolean value that determines whether SceneKit automatically adjusts the exposure level.
- [exposureAdaptationDarkeningSpeedFactor](exposureadaptationdarkeningspeedfactor.md): The relative duration of automatically animated exposure transitions from bright to dark areas.

# exposureAdaptationBrighteningSpeedFactor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The relative duration of automatically animated exposure transitions from dark to bright areas.

## Declaration

```objectivec
@property (nonatomic) CGFloat exposureAdaptationBrighteningSpeedFactor;
```

<a id="Discussion"></a>

## Discussion

When using a High Dynamic Range (HDR) camera, SceneKit applies a process called *tone mapping* to translate the wide range of luminance values in the visible scene to the narrower range of brightness values that can be shown on a display. When the [wantsExposureAdaptation](wantsexposureadaptation.md) property is enabled, SceneKit automatically adjusts the tone mapping curve based on the average luminance currently visible to the camera, and creates automatic transitions between exposure levels.

SceneKit automatically determines the overall duration of exposure-level animations based on the values of this property and the [exposureAdaptationDarkeningSpeedFactor](exposureadaptationdarkeningspeedfactor.md) property. The default value is `0.4`, resulting in brightening animations that are slightly faster than darkening animations.

This property has no effect if either of the [wantsHDR](wantshdr.md) or [wantsExposureAdaptation](wantsexposureadaptation.md) values is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding Automatic HDR Exposure Adaptation

- [wantsExposureAdaptation](wantsexposureadaptation.md): A Boolean value that determines whether SceneKit automatically adjusts the exposure level.
- [exposureAdaptationDarkeningSpeedFactor](exposureadaptationdarkeningspeedfactor.md): The relative duration of automatically animated exposure transitions from bright to dark areas.
