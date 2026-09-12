> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/maxbracketedcapturephotocount](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/maxbracketedcapturephotocount)

# maxBracketedCapturePhotoCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum number of images that the photo capture output can support in a single bracketed capture.

## Declaration

```swift
var maxBracketedCapturePhotoCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

To perform a bracketed capture of multiple images with varied capture settings, create a [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) instance containing the combination of settings and bracketed variations you want. The maximum number of photos per capture depends on the size and format of images to be captured.

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.
>
> Not all devices and capture formats support bracketed capture. If the current device or active format does not support bracketed capture, this property’s value is zero.

This property supports key-value observing.

## See Also

### Determining available settings

- [isContentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [supportedFlashModes](supportedflashmodes-1n6nm.md): A Swift array of flash settings this capture output currently supports.
- [isAutoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.

# maxBracketedCapturePhotoCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum number of images that the photo capture output can support in a single bracketed capture.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger maxBracketedCapturePhotoCount;
```

<a id="Discussion"></a>

## Discussion

To perform a bracketed capture of multiple images with varied capture settings, create a [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md) instance containing the combination of settings and bracketed variations you want. The maximum number of photos per capture depends on the size and format of images to be captured.

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.
>
> Not all devices and capture formats support bracketed capture. If the current device or active format does not support bracketed capture, this property’s value is zero.

This property supports key-value observing.

## See Also

### Determining available settings

- [contentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [supportedFlashModes](supportedflashmodes-4u69s.md): The flash settings this capture output currently supports.
- [autoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.
