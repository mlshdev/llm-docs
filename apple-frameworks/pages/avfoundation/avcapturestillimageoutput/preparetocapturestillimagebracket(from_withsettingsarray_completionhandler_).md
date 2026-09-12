> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/preparetocapturestillimagebracket(from:withsettingsarray:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/preparetocapturestillimagebracket(from:withsettingsarray:completionhandler:))

# prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Allows the receiver to prepare resources in advance of capturing a still image bracket.

> Use AVCapturePhotoOutput setPreparedPhotoSettingsArray:completionHandler: instead.

## Declaration

```swift
func prepareToCaptureStillImageBracket(from connection: AVCaptureConnection, withSettingsArray settings: [AVCaptureBracketedStillImageSettings], completionHandler handler: @escaping (Bool, (any Error)?) -> Void)
```

## Parameters

- `connection`: The connection through which the still image bracket should be captured.
- `settings`: An array of [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) objects. All the array items must be of the same [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) subclass, or an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception is thrown.
- `handler`: A user provided block that will be called asynchronously once resources have successfully been allocated for the specified bracketed capture operation.

  The block has two parameters:

  - **prepared**: If sufficient resources could not be allocated, this parameter is [false](https://developer.apple.com/documentation/swift/false), and the `error` parameter contains a non-`nil` error value.
  - **error**: The value is non-`nil` if an error is encountered.

  If the count of the `settings` parameter exceeds [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md), then `AVErrorMaximumStillImageCaptureRequestsExceeded` is returned.

  You should not assume that the completion handler will be called on a specific thread.

<a id="Discussion"></a>

## Discussion

Before taking a still image bracket, additional resources may need to be allocated. By calling this method first, you are able to know when the receiver is ready to capture the bracket with the specified settings array.

## See Also

### Related Documentation

- [captureStillImageAsynchronously(from:completionHandler:)](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

### Still image bracketed capture

- [captureStillImageBracketAsynchronously(from:withSettingsArray:completionHandler:)](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [isLensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [isLensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

# prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Allows the receiver to prepare resources in advance of capturing a still image bracket.

> Use AVCapturePhotoOutput setPreparedPhotoSettingsArray:completionHandler: instead.

## Declaration

```objectivec
- (void) prepareToCaptureStillImageBracketFromConnection:(AVCaptureConnection *) connection withSettingsArray:(NSArray<__kindof AVCaptureBracketedStillImageSettings *> *) settings completionHandler:(void (^)(BOOL prepared, NSError *error)) handler;
```

## Parameters

- `connection`: The connection through which the still image bracket should be captured.
- `settings`: An array of [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) objects. All the array items must be of the same [AVCaptureBracketedStillImageSettings](../avcapturebracketedstillimagesettings.md) subclass, or an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception is thrown.
- `handler`: A user provided block that will be called asynchronously once resources have successfully been allocated for the specified bracketed capture operation.

  The block has two parameters:

  - **prepared**: If sufficient resources could not be allocated, this parameter is [false](https://developer.apple.com/documentation/swift/false), and the `error` parameter contains a non-`nil` error value.
  - **error**: The value is non-`nil` if an error is encountered.

  If the count of the `settings` parameter exceeds [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md), then `AVErrorMaximumStillImageCaptureRequestsExceeded` is returned.

  You should not assume that the completion handler will be called on a specific thread.

<a id="Discussion"></a>

## Discussion

Before taking a still image bracket, additional resources may need to be allocated. By calling this method first, you are able to know when the receiver is ready to capture the bracket with the specified settings array.

## See Also

### Related Documentation

- [captureStillImageAsynchronouslyFromConnection:completionHandler:](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

### Still image bracketed capture

- [captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:](capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [lensStabilizationDuringBracketedCaptureSupported](islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [lensStabilizationDuringBracketedCaptureEnabled](islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.
