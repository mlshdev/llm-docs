> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/capturestillimageasynchronously(from:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/capturestillimageasynchronously(from:completionhandler:))

# captureStillImageAsynchronously(from:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

Initiates a still image capture and returns immediately.

> Use AVCapturePhotoOutput instead.

## Declaration

```swift
func captureStillImageAsynchronously(from connection: AVCaptureConnection, completionHandler handler: @escaping (CMSampleBuffer?, (any Error)?) -> Void)
```

## Parameters

- `connection`: The connection from which to capture the image.
- `handler`: A block to invoke after the image has been captured. The block parameters are as follows:

  - **imageDataSampleBuffer**: The data that was captured.

  The buffer attachments may contain metadata appropriate to the image data format. For example, a buffer containing JPEG data may carry a [kCGImagePropertyExifDictionary](../../imageio/kcgimagepropertyexifdictionary.md) as an attachment. See ImageIO/CGImageProperties.h for a list of keys and value types.

  - **error**: If the request could not be completed, an `NSError` object that describes the problem; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method returns immediately after it is invoked, later calling the provided completion handler block when image data is ready. If the request could not be completed, the error parameter will contain an `NSError` object describing the failure.

You should not assume that the completion handler will be called on a specific thread.

## See Also

### Capturing an image

- [isCapturingStillImage](iscapturingstillimage.md): Deprecated. Indicates whether a still image is being captured.

# captureStillImageAsynchronouslyFromConnection:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

Initiates a still image capture and returns immediately.

> Use AVCapturePhotoOutput instead.

## Declaration

```objectivec
- (void) captureStillImageAsynchronouslyFromConnection:(AVCaptureConnection *) connection completionHandler:(void (^)(CMSampleBufferRef imageDataSampleBuffer, NSError *error)) handler;
```

## Parameters

- `connection`: The connection from which to capture the image.
- `handler`: A block to invoke after the image has been captured. The block parameters are as follows:

  - **imageDataSampleBuffer**: The data that was captured.

  The buffer attachments may contain metadata appropriate to the image data format. For example, a buffer containing JPEG data may carry a [kCGImagePropertyExifDictionary](../../imageio/kcgimagepropertyexifdictionary.md) as an attachment. See ImageIO/CGImageProperties.h for a list of keys and value types.

  - **error**: If the request could not be completed, an `NSError` object that describes the problem; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

This method returns immediately after it is invoked, later calling the provided completion handler block when image data is ready. If the request could not be completed, the error parameter will contain an `NSError` object describing the failure.

You should not assume that the completion handler will be called on a specific thread.

## See Also

### Capturing an image

- [capturingStillImage](iscapturingstillimage.md): Deprecated. Indicates whether a still image is being captured.
