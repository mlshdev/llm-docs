> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isautoredeyereductionsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isautoredeyereductionsupported)

# isAutoRedEyeReductionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the capture output supports automatic red-eye reduction.

## Declaration

```swift
var isAutoRedEyeReductionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

In iOS 12 and later, AVFoundation applies a red-eye reduction effect only when needed. It won’t apply red-eye reduction in the following situations:

- When you force a flash capture in good light
- When only one eye is visible
- When doing a bracketed capture
- When taking a picture with depth on the dual camera

When taking RAW + processed (JPEG or HEIC) still-photo capture with auto red-eye reduction enabled, AVFoundation applies correction to only the processed photo, *not* the RAW photo.

## See Also

### Determining available settings

- [isContentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [supportedFlashModes](supportedflashmodes-1n6nm.md): A Swift array of flash settings this capture output currently supports.

# autoRedEyeReductionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the capture output supports automatic red-eye reduction.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAutoRedEyeReductionSupported) BOOL autoRedEyeReductionSupported;
```

<a id="Discussion"></a>

## Discussion

In iOS 12 and later, AVFoundation applies a red-eye reduction effect only when needed. It won’t apply red-eye reduction in the following situations:

- When you force a flash capture in good light
- When only one eye is visible
- When doing a bracketed capture
- When taking a picture with depth on the dual camera

When taking RAW + processed (JPEG or HEIC) still-photo capture with auto red-eye reduction enabled, AVFoundation applies correction to only the processed photo, *not* the RAW photo.

## See Also

### Determining available settings

- [contentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [supportedFlashModes](supportedflashmodes-4u69s.md): The flash settings this capture output currently supports.
