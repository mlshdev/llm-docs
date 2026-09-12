> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/maxbracketedcapturestillimagecount](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/maxbracketedcapturestillimagecount)

# maxBracketedCaptureStillImageCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies the maximum number of still images that may be taken in a single bracket.

> Use AVCapturePhotoOutput maxBracketedCapturePhotoCount instead.

## Declaration

```swift
var maxBracketedCaptureStillImageCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

AVCaptureStillImageOutput can only satisfy a limited number of image requests in a single bracket without exhausting system resources.

The maximum number of still images that may be taken in a single bracket depends on the size of the images being captured, and consequently may vary with AVCaptureSession -sessionPreset and AVCaptureDevice -activeFormat values.

## See Also

### Related Documentation

- [captureStillImageAsynchronously(from:completionHandler:)](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

### Still image bracketed capture

- [captureStillImageBracketAsynchronously(from:withSettingsArray:completionHandler:)](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [isLensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

# maxBracketedCaptureStillImageCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies the maximum number of still images that may be taken in a single bracket.

> Use AVCapturePhotoOutput maxBracketedCapturePhotoCount instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger maxBracketedCaptureStillImageCount;
```

<a id="Discussion"></a>

## Discussion

AVCaptureStillImageOutput can only satisfy a limited number of image requests in a single bracket without exhausting system resources.

The maximum number of still images that may be taken in a single bracket depends on the size of the images being captured, and consequently may vary with AVCaptureSession -sessionPreset and AVCaptureDevice -activeFormat values.

## See Also

### Related Documentation

- [captureStillImageAsynchronouslyFromConnection:completionHandler:](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

### Still image bracketed capture

- [captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler:](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [lensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.
