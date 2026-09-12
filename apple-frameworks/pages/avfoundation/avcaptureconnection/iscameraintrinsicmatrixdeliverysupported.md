> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/iscameraintrinsicmatrixdeliverysupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/iscameraintrinsicmatrixdeliverysupported)

# isCameraIntrinsicMatrixDeliverySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture connection currently supports delivering camera intrinsics information.

## Declaration

```swift
var isCameraIntrinsicMatrixDeliverySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) means you can set [isCameraIntrinsicMatrixDeliveryEnabled](iscameraintrinsicmatrixdeliveryenabled.md) to [true](https://developer.apple.com/documentation/swift/true). The property is only [true](https://developer.apple.com/documentation/swift/true) if both the connection’s input device format and output type support delivering camera intrinsics. In iOS 11, the [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) class is the only output type that supports camera intrinsics.

## See Also

### Delivering camera calibration settings

- [isCameraIntrinsicMatrixDeliveryEnabled](iscameraintrinsicmatrixdeliveryenabled.md): A Boolean value that indicates whether the connection can configure the capture pipeline to deliver camera intrinsics information.

# cameraIntrinsicMatrixDeliverySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture connection currently supports delivering camera intrinsics information.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCameraIntrinsicMatrixDeliverySupported) BOOL cameraIntrinsicMatrixDeliverySupported;
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) means you can set [cameraIntrinsicMatrixDeliveryEnabled](iscameraintrinsicmatrixdeliveryenabled.md) to [true](https://developer.apple.com/documentation/swift/true). The property is only [true](https://developer.apple.com/documentation/swift/true) if both the connection’s input device format and output type support delivering camera intrinsics. In iOS 11, the [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) class is the only output type that supports camera intrinsics.

## See Also

### Delivering camera calibration settings

- [cameraIntrinsicMatrixDeliveryEnabled](iscameraintrinsicmatrixdeliveryenabled.md): A Boolean value that indicates whether the connection can configure the capture pipeline to deliver camera intrinsics information.
