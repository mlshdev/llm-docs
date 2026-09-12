> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessioninterruptionsystempressurestatekey](https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionsystempressurestatekey)

# AVCaptureSessionInterruptionSystemPressureStateKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.

## Declaration

```swift
let AVCaptureSessionInterruptionSystemPressureStateKey: String
```

<a id="Discussion"></a>

## Discussion

If an interruption occurs and the value of [AVCaptureSessionInterruptionReasonKey](avcapturesessioninterruptionreasonkey.md) equals [AVCaptureSession.InterruptionReason.videoDeviceNotAvailableDueToSystemPressure](avcapturesession/interruptionreason/videodevicenotavailableduetosystempressure.md), the [userInfo](../foundation/notification/userinfo.md) dictionary for the notification contains this key and a corresponding [AVCaptureDevice.SystemPressureState](avcapturedevice/systempressurestate-swift.class.md) value.

## See Also

### Monitoring system pressure

- [systemPressureState](avcapturedevice/systempressurestate-swift.property.md): A value that indicates the capture device’s current system pressure state.
- [AVCaptureDevice.SystemPressureState](avcapturedevice/systempressurestate-swift.class.md): An object that provides information about OS and hardware status affecting capture system performance and availability.

# AVCaptureSessionInterruptionSystemPressureStateKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.

## Declaration

```objectivec
extern NSString * const AVCaptureSessionInterruptionSystemPressureStateKey;
```

<a id="Discussion"></a>

## Discussion

If an interruption occurs and the value of [AVCaptureSessionInterruptionReasonKey](avcapturesessioninterruptionreasonkey.md) equals [AVCaptureSessionInterruptionReasonVideoDeviceNotAvailableDueToSystemPressure](avcapturesession/interruptionreason/videodevicenotavailableduetosystempressure.md), the [userInfo](../foundation/notification/userinfo.md) dictionary for the notification contains this key and a corresponding [AVCaptureSystemPressureState](avcapturedevice/systempressurestate-swift.class.md) value.

## See Also

### Monitoring system pressure

- [systemPressureState](avcapturedevice/systempressurestate-swift.property.md): A value that indicates the capture device’s current system pressure state.
- [AVCaptureSystemPressureState](avcapturedevice/systempressurestate-swift.class.md): An object that provides information about OS and hardware status affecting capture system performance and availability.
