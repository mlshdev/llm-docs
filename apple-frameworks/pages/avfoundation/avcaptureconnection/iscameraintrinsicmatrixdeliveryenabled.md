> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled)

# isCameraIntrinsicMatrixDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the connection can configure the capture pipeline to deliver camera intrinsics information.

## Declaration

```swift
var isCameraIntrinsicMatrixDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can set this property to [true](https://developer.apple.com/documentation/swift/true) for a video connection if [isCameraIntrinsicMatrixDeliverySupported](iscameraintrinsicmatrixdeliverysupported.md) is [true](https://developer.apple.com/documentation/swift/true), and only before calling the [AVCaptureSession](../avcapturesession.md) [startRunning()](../avcapturesession/startrunning%28%29.md) method. The default value is [false](https://developer.apple.com/documentation/swift/false).

Camera intrinsics describe the current imaging parameters of a capture device in ways that you can use to render overlays or perform computer vision tasks. If [true](https://developer.apple.com/documentation/swift/true), any [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) instance in this connection can include the [kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix](../../coremedia/kcmsamplebufferattachmentkey_cameraintrinsicmatrix.md) attachment for each sample buffer it vends.

## See Also

### Delivering camera calibration settings

- [isCameraIntrinsicMatrixDeliverySupported](iscameraintrinsicmatrixdeliverysupported.md): A Boolean value that indicates whether the capture connection currently supports delivering camera intrinsics information.

# cameraIntrinsicMatrixDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the connection can configure the capture pipeline to deliver camera intrinsics information.

## Declaration

```objectivec
@property (nonatomic, getter=isCameraIntrinsicMatrixDeliveryEnabled) BOOL cameraIntrinsicMatrixDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

You can set this property to [true](https://developer.apple.com/documentation/swift/true) for a video connection if [cameraIntrinsicMatrixDeliverySupported](iscameraintrinsicmatrixdeliverysupported.md) is [true](https://developer.apple.com/documentation/swift/true), and only before calling the [AVCaptureSession](../avcapturesession.md) [startRunning](../avcapturesession/startrunning%28%29.md) method. The default value is [false](https://developer.apple.com/documentation/swift/false).

Camera intrinsics describe the current imaging parameters of a capture device in ways that you can use to render overlays or perform computer vision tasks. If [true](https://developer.apple.com/documentation/swift/true), any [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) instance in this connection can include the [kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix](../../coremedia/kcmsamplebufferattachmentkey_cameraintrinsicmatrix.md) attachment for each sample buffer it vends.

## See Also

### Delivering camera calibration settings

- [cameraIntrinsicMatrixDeliverySupported](iscameraintrinsicmatrixdeliverysupported.md): A Boolean value that indicates whether the capture connection currently supports delivering camera intrinsics information.
