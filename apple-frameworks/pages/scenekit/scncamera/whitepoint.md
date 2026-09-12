> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/whitepoint](https://developer.apple.com/documentation/scenekit/scncamera/whitepoint)

# whitePoint (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The luminance level to use as the upper end of a tone mapping curve.

## Declaration

```swift
var whitePoint: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When using a High Dynamic Range (HDR) camera, SceneKit applies a process called *tone mapping* to translate the wide range of luminance values in the visible scene to the narrower range of brightness values that can be shown on a display. SceneKit determines a tone mapping curve from the [minimumExposure](minimumexposure.md), [maximumExposure](maximumexposure.md), [exposureOffset](exposureoffset.md), and [whitePoint](whitepoint.md) properties, along with a measure of scene luminance.

The default value is `1.0`. By setting this property to a higher or lower value, you can produce more gradual or more abrupt transitions between shadows and highlights.

This property has no effect if the [wantsHDR](wantshdr.md) value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding High Dynamic Range Effects

- [wantsHDR](wantshdr.md): A Boolean value that determines whether SceneKit applies High Dynamic Range (HDR) postprocessing effects to a scene.
- [exposureOffset](exposureoffset.md): A logarithmic bias that adjusts the results of SceneKit’s tone mapping operation, brightening or darkening the visible scene.
- [averageGray](averagegray.md): The luminance level to use as the midpoint of a tone mapping curve.
- [minimumExposure](minimumexposure.md): The minimum exposure value to use in tone mapping.
- [maximumExposure](maximumexposure.md): The minimum exposure value to use in tone mapping.

# whitePoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The luminance level to use as the upper end of a tone mapping curve.

## Declaration

```objectivec
@property (nonatomic) CGFloat whitePoint;
```

<a id="Discussion"></a>

## Discussion

When using a High Dynamic Range (HDR) camera, SceneKit applies a process called *tone mapping* to translate the wide range of luminance values in the visible scene to the narrower range of brightness values that can be shown on a display. SceneKit determines a tone mapping curve from the [minimumExposure](minimumexposure.md), [maximumExposure](maximumexposure.md), [exposureOffset](exposureoffset.md), and [whitePoint](whitepoint.md) properties, along with a measure of scene luminance.

The default value is `1.0`. By setting this property to a higher or lower value, you can produce more gradual or more abrupt transitions between shadows and highlights.

This property has no effect if the [wantsHDR](wantshdr.md) value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding High Dynamic Range Effects

- [wantsHDR](wantshdr.md): A Boolean value that determines whether SceneKit applies High Dynamic Range (HDR) postprocessing effects to a scene.
- [exposureOffset](exposureoffset.md): A logarithmic bias that adjusts the results of SceneKit’s tone mapping operation, brightening or darkening the visible scene.
- [averageGray](averagegray.md): The luminance level to use as the midpoint of a tone mapping curve.
- [minimumExposure](minimumexposure.md): The minimum exposure value to use in tone mapping.
- [maximumExposure](maximumexposure.md): The minimum exposure value to use in tone mapping.
