> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/islensstabilizationduringbracketedcapturesupported](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/islensstabilizationduringbracketedcapturesupported)

# isLensStabilizationDuringBracketedCaptureSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.

> Use AVCapturePhotoOutput lensStabilizationDuringBracketedCaptureSupported instead.

## Declaration

```swift
var isLensStabilizationDuringBracketedCaptureSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You may set the [isLensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md) property only if this property’s value is [true](https://developer.apple.com/documentation/swift/true). This value may change as the session’s [sessionPreset](../avcapturesession/sessionpreset.md) property or the input device’s [activeFormat](../avcapturedevice/activeformat.md) property changes.

This property supports key-value observing.

## See Also

### Still image bracketed capture

- [captureStillImageBracketAsynchronously(from:withSettingsArray:completionHandler:)](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [isLensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

# lensStabilizationDuringBracketedCaptureSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.

> Use AVCapturePhotoOutput lensStabilizationDuringBracketedCaptureSupported instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLensStabilizationDuringBracketedCaptureSupported) BOOL lensStabilizationDuringBracketedCaptureSupported;
```

<a id="Discussion"></a>

## Discussion

You may set the [lensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md) property only if this property’s value is [true](https://developer.apple.com/documentation/swift/true). This value may change as the session’s [sessionPreset](../avcapturesession/sessionpreset.md) property or the input device’s [activeFormat](../avcapturedevice/activeformat.md) property changes.

This property supports key-value observing.

## See Also

### Still image bracketed capture

- [captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler:](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [lensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.
