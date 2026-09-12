> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/supportedflashmodes-4u69s](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/supportedflashmodes-4u69s)

# supportedFlashModes

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

The flash settings this capture output currently supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * supportedFlashModes;
```

<a id="Discussion"></a>

## Discussion

To set the flash mode for a capture, set the [flashMode](../avcapturephotosettings/flashmode.md) property of your photo settings object to one of the [AVCaptureFlashMode](../avcapturedevice/flashmode-swift.enum.md) values listed in this array.

This property supports key-value observing.

## See Also

### Determining available settings

- [contentAwareDistortionCorrectionSupported](iscontentawaredistortioncorrectionsupported.md): A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.
- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [autoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.
