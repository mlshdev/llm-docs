> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/capturestillimagebracketasynchronously(from:withsettingsarray:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/capturestillimagebracketasynchronously(from:withsettingsarray:completionhandler:))

# captureStillImageBracketAsynchronously(from:withSettingsArray:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Captures a still image bracket.

> Use AVCapturePhotoOutput capturePhotoWithSettings:delegate: instead.

## Declaration

```swift
func captureStillImageBracketAsynchronously(from connection: AVCaptureConnection, withSettingsArray settings: [AVCaptureBracketedStillImageSettings], completionHandler handler: @escaping (CMSampleBuffer?, AVCaptureBracketedStillImageSettings?, (any Error)?) -> Void)
```

## Parameters

- `connection`: The connection through which the still image bracket should be captured.
- `settings`: An array of [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) objects. All the array items must be of the same [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) subclass, or an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception is thrown.
- `handler`: A user provided block that will be called asynchronously as each still image in the bracket is captured.

  The block has three parameters:

  - **sampleBuffer**: If the capture request is successful,  contains a valid CMSampleBuffer.
  - **stillImageSettings**: Contains the [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) object corresponding to this still image.
  - **error**: If the bracketed capture fails, `sampleBuffer` is `NULL` and error is non-`nil`.

  If the count of the `settings` parameter exceeds [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md), then `AVErrorMaximumStillImageCaptureRequestsExceeded` is returned.

  You should not assume that the completion handler will be called on a specific thread.

<a id="Discussion"></a>

## Discussion

If you have not invoked [prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md) for this still image bracket request, the bracket may not be taken immediately, as the receiver may internally need to prepare resources.

## See Also

### Related Documentation

- [captureStillImageAsynchronously(from:completionHandler:)](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

### Still image bracketed capture

- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [isLensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

# captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Captures a still image bracket.

> Use AVCapturePhotoOutput capturePhotoWithSettings:delegate: instead.

## Declaration

```objectivec
- (void) captureStillImageBracketAsynchronouslyFromConnection:(AVCaptureConnection *) connection withSettingsArray:(NSArray<__kindof AVCaptureBracketedStillImageSettings *> *) settings completionHandler:(void (^)(CMSampleBufferRef sampleBuffer, AVCaptureBracketedStillImageSettings *stillImageSettings, NSError *error)) handler;
```

## Parameters

- `connection`: The connection through which the still image bracket should be captured.
- `settings`: An array of [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) objects. All the array items must be of the same [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) subclass, or an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception is thrown.
- `handler`: A user provided block that will be called asynchronously as each still image in the bracket is captured.

  The block has three parameters:

  - **sampleBuffer**: If the capture request is successful,  contains a valid CMSampleBuffer.
  - **stillImageSettings**: Contains the [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) object corresponding to this still image.
  - **error**: If the bracketed capture fails, `sampleBuffer` is `NULL` and error is non-`nil`.

  If the count of the `settings` parameter exceeds [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md), then `AVErrorMaximumStillImageCaptureRequestsExceeded` is returned.

  You should not assume that the completion handler will be called on a specific thread.

<a id="Discussion"></a>

## Discussion

If you have not invoked [prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler:](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md) for this still image bracket request, the bracket may not be taken immediately, as the receiver may internally need to prepare resources.

## See Also

### Related Documentation

- [captureStillImageAsynchronouslyFromConnection:completionHandler:](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

### Still image bracketed capture

- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler:](preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [lensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.
