> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown)

# shutdown (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

System pressure is beyond critical, so the capture system has shut down.

## Declaration

```swift
static let shutdown: AVCaptureDevice.SystemPressureState.Level
```

<a id="Discussion"></a>

## Discussion

When system pressure reaches this level, the capture system automatically shuts down, causing a session interruption. Use the [AVCaptureSessionInterruptionSystemPressureStateKey](../../../avcapturesessioninterruptionsystempressurestatekey.md) in the interruption notification’s [userInfo](../../../../foundation/notification/userinfo.md) dictionary to find details about the system pressure factors causing the interruption.

## See Also

### System pressure levels

- [nominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [fair](fair.md): A level that indicates that system pressure is slightly elevated.
- [serious](serious.md): A level that indicates that system pressure is highly elevated.
- [critical](critical.md): System pressure is critically elevated.

# AVCaptureSystemPressureLevelShutdown (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

System pressure is beyond critical, so the capture system has shut down.

## Declaration

```objectivec
extern AVCaptureSystemPressureLevel const AVCaptureSystemPressureLevelShutdown;
```

<a id="Discussion"></a>

## Discussion

When system pressure reaches this level, the capture system automatically shuts down, causing a session interruption. Use the [AVCaptureSessionInterruptionSystemPressureStateKey](../../../avcapturesessioninterruptionsystempressurestatekey.md) in the interruption notification’s [userInfo](../../../../foundation/notification/userinfo.md) dictionary to find details about the system pressure factors causing the interruption.

## See Also

### System pressure levels

- [AVCaptureSystemPressureLevelNominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [AVCaptureSystemPressureLevelFair](fair.md): A level that indicates that system pressure is slightly elevated.
- [AVCaptureSystemPressureLevelSerious](serious.md): A level that indicates that system pressure is highly elevated.
- [AVCaptureSystemPressureLevelCritical](critical.md): System pressure is critically elevated.
