> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/supporteddynamicaspectratios](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supporteddynamicaspectratios)

# supportedDynamicAspectRatios (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Indicates the supported aspect ratios for the device format.

## Declaration

```swift
var supportedDynamicAspectRatios: [AVCaptureDevice.AspectRatio] { get }
```

<a id="discussion"></a>

## Discussion

An array that describes the aspect ratios that are supported for this format. If this device format does not support dynamic aspect ratio, this property returns an empty array.

## See Also

### Determining dynamic aspect ratio support

- [videoFieldOfView(for:geometricDistortionCorrected:)](videofieldofview%28for_geometricdistortioncorrected_%29.md): Indicates the horizontal field of view for an aspect ratio, either uncorrected or corrected for geometric distortion.

# supportedDynamicAspectRatios (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Indicates the supported aspect ratios for the device format.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * supportedDynamicAspectRatios;
```

<a id="discussion"></a>

## Discussion

An array that describes the aspect ratios that are supported for this format. If this device format does not support dynamic aspect ratio, this property returns an empty array.

## See Also

### Determining dynamic aspect ratio support

- [videoFieldOfViewForAspectRatio:geometricDistortionCorrected:](videofieldofview%28for_geometricdistortioncorrected_%29.md): Indicates the horizontal field of view for an aspect ratio, either uncorrected or corrected for geometric distortion.
