> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videofieldofview(for:geometricdistortioncorrected:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videofieldofview(for:geometricdistortioncorrected:))

# videoFieldOfView(for:geometricDistortionCorrected:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Indicates the horizontal field of view for an aspect ratio, either uncorrected or corrected for geometric distortion.

## Declaration

```swift
func videoFieldOfView(for aspectRatio: AVCaptureDevice.AspectRatio, geometricDistortionCorrected: Bool) -> Float
```

<a id="discussion"></a>

## Discussion

A float indicating the field of view for the corresponding [AVCaptureDevice.AspectRatio](../aspectratio.md). Set `AVCaptureDevice/geometricDistortionCorrected` to `true` to receive the field of view corrected for geometric distortion. If this device format does not support dynamic aspect ratio, this function returns `0`.

## See Also

### Determining dynamic aspect ratio support

- [supportedDynamicAspectRatios](supporteddynamicaspectratios.md): Indicates the supported aspect ratios for the device format.

# videoFieldOfViewForAspectRatio:geometricDistortionCorrected: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Indicates the horizontal field of view for an aspect ratio, either uncorrected or corrected for geometric distortion.

## Declaration

```objectivec
- (float) videoFieldOfViewForAspectRatio:(AVCaptureAspectRatio) aspectRatio geometricDistortionCorrected:(BOOL) geometricDistortionCorrected;
```

<a id="discussion"></a>

## Discussion

A float indicating the field of view for the corresponding [AVCaptureAspectRatio](../aspectratio.md). Set `AVCaptureDevice/geometricDistortionCorrected` to `true` to receive the field of view corrected for geometric distortion. If this device format does not support dynamic aspect ratio, this function returns `0`.

## See Also

### Determining dynamic aspect ratio support

- [supportedDynamicAspectRatios](supporteddynamicaspectratios.md): Indicates the supported aspect ratios for the device format.
