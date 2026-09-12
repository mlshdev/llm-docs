> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videofieldofview](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videofieldofview)

# videoFieldOfView (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Indicates the format’s horizontal field of view in degrees.

## Declaration

```swift
var videoFieldOfView: Float { get }
```

<a id="Discussion"></a>

## Discussion

Returns zero if the format’s field of view is unknown.

## See Also

### Determining field of view

- [geometricDistortionCorrectedVideoFieldOfView](geometricdistortioncorrectedvideofieldofview.md): A horizontal field of view for the format after correction for geometric distortion.

# videoFieldOfView (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Indicates the format’s horizontal field of view in degrees.

## Declaration

```objectivec
@property (nonatomic, readonly) float videoFieldOfView;
```

<a id="Discussion"></a>

## Discussion

Returns zero if the format’s field of view is unknown.

## See Also

### Determining field of view

- [geometricDistortionCorrectedVideoFieldOfView](geometricdistortioncorrectedvideofieldofview.md): A horizontal field of view for the format after correction for geometric distortion.
