> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/ismultitaskingcameraaccessenabled](https://developer.apple.com/documentation/avfoundation/avcapturesession/ismultitaskingcameraaccessenabled)

# isMultitaskingCameraAccessEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session enables access to the camera while multitasking.

## Declaration

```swift
var isMultitaskingCameraAccessEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  For apps that have the [com.apple.developer.avfoundation.multitasking-camera-access](../../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement, this property value defaults to [true](https://developer.apple.com/documentation/swift/true) if [isMultitaskingCameraAccessSupported](ismultitaskingcameraaccesssupported.md) is also [true](https://developer.apple.com/documentation/swift/true).

If the value of the [isMultitaskingCameraAccessSupported](ismultitaskingcameraaccesssupported.md) property is [true](https://developer.apple.com/documentation/swift/true), you can enable multitasking camera access by setting this value to [true](https://developer.apple.com/documentation/swift/true) prior to starting the capture session.

This property is key-value observable.

> **Note**

>  If you enable multitasking camera access, the system doesn’t interrupt the capture session with a reason of [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableWithMultipleForegroundApps](interruptionreason/videodevicenotavailablewithmultipleforegroundapps.md).

To learn about best practices for using the camera while multitasking, see [Accessing the camera while multitasking on iPad](../../avkit/accessing-the-camera-while-multitasking-on-ipad.md).

## See Also

### Configuring multitasking

- [isMultitaskingCameraAccessSupported](ismultitaskingcameraaccesssupported.md): A Boolean value that indicates whether the capture session supports using the camera while multitasking.

# multitaskingCameraAccessEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session enables access to the camera while multitasking.

## Declaration

```objectivec
@property (nonatomic, getter=isMultitaskingCameraAccessEnabled) BOOL multitaskingCameraAccessEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  For apps that have the [com.apple.developer.avfoundation.multitasking-camera-access](../../bundleresources/entitlements/com.apple.developer.avfoundation.multitasking-camera-access.md) entitlement, this property value defaults to [true](https://developer.apple.com/documentation/swift/true) if [multitaskingCameraAccessSupported](ismultitaskingcameraaccesssupported.md) is also [true](https://developer.apple.com/documentation/swift/true).

If the value of the [multitaskingCameraAccessSupported](ismultitaskingcameraaccesssupported.md) property is [true](https://developer.apple.com/documentation/swift/true), you can enable multitasking camera access by setting this value to [true](https://developer.apple.com/documentation/swift/true) prior to starting the capture session.

This property is key-value observable.

> **Note**

>  If you enable multitasking camera access, the system doesn’t interrupt the capture session with a reason of [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableWithMultipleForegroundApps](interruptionreason/videodevicenotavailablewithmultipleforegroundapps.md).

To learn about best practices for using the camera while multitasking, see [Accessing the camera while multitasking on iPad](../../avkit/accessing-the-camera-while-multitasking-on-ipad.md).

## See Also

### Configuring multitasking

- [multitaskingCameraAccessSupported](ismultitaskingcameraaccesssupported.md): A Boolean value that indicates whether the capture session supports using the camera while multitasking.
