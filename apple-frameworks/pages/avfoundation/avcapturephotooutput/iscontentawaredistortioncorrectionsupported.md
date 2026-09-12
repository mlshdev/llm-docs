> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/iscontentawaredistortioncorrectionsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/iscontentawaredistortioncorrectionsupported)

# isContentAwareDistortionCorrectionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · tvOS 17.0+

A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.

## Declaration

```swift
var isContentAwareDistortionCorrectionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Optical design and geometric distortion correction use a rectilinear model that preserves lines but not area, angles, or distance. The wider the field of view of a lens, the greater the areal distortion along the edges of images. Content-aware distortion correction intelligently adjusts its behavior to correct distortions based on the photo’s content. For example, the algorithm may not apply correction to faces in the center of a photo, but may apply it to faces near the photo’s edges.

Switching cameras or formats, or enabling depth data delivery, may result in a change to this property value. When the property changes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md) also reverts to [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Determining available settings

- [isContentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [supportedFlashModes](supportedflashmodes-1n6nm.md): A Swift array of flash settings this capture output currently supports.
- [isAutoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.

# contentAwareDistortionCorrectionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · tvOS 17.0+

A Boolean value that indicates whether the session’s current configuration supports content-aware distortion correction.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isContentAwareDistortionCorrectionSupported) BOOL contentAwareDistortionCorrectionSupported;
```

<a id="Discussion"></a>

## Discussion

Optical design and geometric distortion correction use a rectilinear model that preserves lines but not area, angles, or distance. The wider the field of view of a lens, the greater the areal distortion along the edges of images. Content-aware distortion correction intelligently adjusts its behavior to correct distortions based on the photo’s content. For example, the algorithm may not apply correction to faces in the center of a photo, but may apply it to faces near the photo’s edges.

Switching cameras or formats, or enabling depth data delivery, may result in a change to this property value. When the property changes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md) also reverts to [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Determining available settings

- [contentAwareDistortionCorrectionEnabled](iscontentawaredistortioncorrectionenabled.md): A Boolean value that indicates whether the photo render pipeline can perform content-aware distortion correction.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): A Boolean value indicating whether the capture output currently supports lens stabilization during bracketed image capture.
- [maxBracketedCapturePhotoCount](maxbracketedcapturephotocount.md): The maximum number of images that the photo capture output can support in a single bracketed capture.
- [supportedFlashModes](supportedflashmodes-4u69s.md): The flash settings this capture output currently supports.
- [autoRedEyeReductionSupported](isautoredeyereductionsupported.md): A Boolean value indicating whether the capture output supports automatic red-eye reduction.
