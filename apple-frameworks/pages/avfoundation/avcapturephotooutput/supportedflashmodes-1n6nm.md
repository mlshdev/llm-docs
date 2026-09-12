> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/supportedflashmodes-1n6nm](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/supportedflashmodes-1n6nm)

# supportedFlashModes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+

A Swift array of flash settings this capture output currently supports.

## Declaration

```swift
@nonobjc var supportedFlashModes: [AVCaptureDevice.FlashMode] { get }
```

<a id="Discussion"></a>

## Discussion

To set the flash mode for a capture, set the [flashMode](../avcapturephotosettings/flashmode.md) property of your photo settings object to one of the [AVCaptureDevice.FlashMode](../avcapturedevice/flashmode-swift.enum.md) values listed in this array.

This property supports Key-Value Observing.

## See Also

### Determining available settings

- [isContentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [isAutoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.
