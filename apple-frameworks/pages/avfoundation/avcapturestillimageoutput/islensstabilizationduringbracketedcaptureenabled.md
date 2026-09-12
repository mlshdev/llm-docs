> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/islensstabilizationduringbracketedcaptureenabled](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/islensstabilizationduringbracketedcaptureenabled)

# isLensStabilizationDuringBracketedCaptureEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

> Use AVCapturePhotoOutput with AVCapturePhotoBracketSettings instead.

## Declaration

```swift
var isLensStabilizationDuringBracketedCaptureEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Applying lens stabilization to bracketed capture attempts to keep the lens steady for the entire duration of the bracket, resulting in more consistent images across the bracket. When lens stabilization is enabled, bracketed still image captures incur additional latency. Lens stabilization is more effective with longer-exposure captures, and offers limited or no benefit for exposure durations shorter than 1/30 of a second. It is possible that during the bracket, the lens stabilization module may run out of correction range and therefore will not be active for every frame in the bracket. Each emitted sample buffer from the bracket has an attachment of `kCMSampleBufferAttachmentKey_StillImageLensStabilizationInfo` indicating additional information about stabilization applied to the buffer.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false). You may set this property’s value to [true](https://developer.apple.com/documentation/swift/true) only if the [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md) value is [true](https://developer.apple.com/documentation/swift/true). Otherwise, setting this property raises an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)). If the [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md) property’s value changes to [false](https://developer.apple.com/documentation/swift/false), this property’s value also becomes [false](https://developer.apple.com/documentation/swift/false).

This property supports key-value observing.

## See Also

### Still image bracketed capture

- [captureStillImageBracketAsynchronously(from:withSettingsArray:completionHandler:)](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.

# lensStabilizationDuringBracketedCaptureEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

> Use AVCapturePhotoOutput with AVCapturePhotoBracketSettings instead.

## Declaration

```objectivec
@property (nonatomic, getter=isLensStabilizationDuringBracketedCaptureEnabled) BOOL lensStabilizationDuringBracketedCaptureEnabled;
```

<a id="Discussion"></a>

## Discussion

Applying lens stabilization to bracketed capture attempts to keep the lens steady for the entire duration of the bracket, resulting in more consistent images across the bracket. When lens stabilization is enabled, bracketed still image captures incur additional latency. Lens stabilization is more effective with longer-exposure captures, and offers limited or no benefit for exposure durations shorter than 1/30 of a second. It is possible that during the bracket, the lens stabilization module may run out of correction range and therefore will not be active for every frame in the bracket. Each emitted sample buffer from the bracket has an attachment of `kCMSampleBufferAttachmentKey_StillImageLensStabilizationInfo` indicating additional information about stabilization applied to the buffer.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false). You may set this property’s value to [true](https://developer.apple.com/documentation/swift/true) only if the [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md) value is [true](https://developer.apple.com/documentation/swift/true). Otherwise, setting this property raises an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)). If the [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md) property’s value changes to [false](https://developer.apple.com/documentation/swift/false), this property’s value also becomes [false](https://developer.apple.com/documentation/swift/false).

This property supports key-value observing.

## See Also

### Still image bracketed capture

- [captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler:](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
