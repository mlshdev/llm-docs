> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/islensstabilizationduringbracketedcapturesupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/islensstabilizationduringbracketedcapturesupported)

# isLensStabilizationDuringBracketedCaptureSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.

## Declaration

```swift
var isLensStabilizationDuringBracketedCaptureSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

To make use of optical image stabilization across the entire duration of a bracketed capture, set the [isLensStabilizationEnabled](../avcapturephotobracketsettings/islensstabilizationenabled.md) property of your bracketed photo settings object.

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

This property supports key-value observing.

## See Also

### Determining available settings

- [isContentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [supportedFlashModes](supportedflashmodes-1n6nm.md): A Swift array of flash settings this capture output currently supports.
- [isAutoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.

# lensStabilizationDuringBracketedCaptureSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLensStabilizationDuringBracketedCaptureSupported) BOOL lensStabilizationDuringBracketedCaptureSupported;
```

<a id="Discussion"></a>

## Discussion

To make use of optical image stabilization across the entire duration of a bracketed capture, set the [lensStabilizationEnabled](../avcapturephotobracketsettings/islensstabilizationenabled.md) property of your bracketed photo settings object.

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

This property supports key-value observing.

## See Also

### Determining available settings

- [contentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [supportedFlashModes](supportedflashmodes-4u69s.md): The flash settings this capture output currently supports.
- [autoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.
