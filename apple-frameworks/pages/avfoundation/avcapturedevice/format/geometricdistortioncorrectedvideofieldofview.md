> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/geometricdistortioncorrectedvideofieldofview](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/geometricdistortioncorrectedvideofieldofview)

# geometricDistortionCorrectedVideoFieldOfView (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A horizontal field of view for the format after correction for geometric distortion.

## Declaration

```swift
var geometricDistortionCorrectedVideoFieldOfView: Float { get }
```

<a id="Discussion"></a>

## Discussion

If the capture device doesn’t support geometric distortion correction (GDC), the value of this property is equal to the value of [videoFieldOfView](videofieldofview.md).

## See Also

### Determining field of view

- [videoFieldOfView](videofieldofview.md): Indicates the format’s horizontal field of view in degrees.

# geometricDistortionCorrectedVideoFieldOfView (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A horizontal field of view for the format after correction for geometric distortion.

## Declaration

```objectivec
@property (nonatomic, readonly) float geometricDistortionCorrectedVideoFieldOfView;
```

<a id="Discussion"></a>

## Discussion

If the capture device doesn’t support geometric distortion correction (GDC), the value of this property is equal to the value of [videoFieldOfView](videofieldofview.md).

## See Also

### Determining field of view

- [videoFieldOfView](videofieldofview.md): Indicates the format’s horizontal field of view in degrees.
