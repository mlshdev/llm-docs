> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.property)

# systemPressureState (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value that indicates the capture device’s current system pressure state.

## Declaration

```swift
var systemPressureState: AVCaptureDevice.SystemPressureState { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the capture device is currently in an elevated system pressure condition. When system pressure reaches a [shutdown](systempressurestate-swift.class/level-swift.struct/shutdown.md) state, the capture device can’t continue to provide input, and the capture session becomes interrupted until the pressured state abates.

You can effectively mitigate system pressure by lowering the device’s [activeVideoMinFrameDuration](activevideominframeduration.md) in response to changes in the system pressure state. Implement frame rate throttling to bring system pressure down if your capture use case can tolerate a reduced frame rate.

## See Also

### Monitoring system pressure

- [AVCaptureDevice.SystemPressureState](systempressurestate-swift.class.md): An object that provides information about OS and hardware status affecting capture system performance and availability.
- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.

# systemPressureState (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+

A value that indicates the capture device’s current system pressure state.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureSystemPressureState * systemPressureState;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the capture device is currently in an elevated system pressure condition. When system pressure reaches a [AVCaptureSystemPressureLevelShutdown](systempressurestate-swift.class/level-swift.struct/shutdown.md) state, the capture device can’t continue to provide input, and the capture session becomes interrupted until the pressured state abates.

You can effectively mitigate system pressure by lowering the device’s [activeVideoMinFrameDuration](activevideominframeduration.md) in response to changes in the system pressure state. Implement frame rate throttling to bring system pressure down if your capture use case can tolerate a reduced frame rate.

## See Also

### Monitoring system pressure

- [AVCaptureSystemPressureState](systempressurestate-swift.class.md): An object that provides information about OS and hardware status affecting capture system performance and availability.
- [AVCaptureSessionInterruptionSystemPressureStateKey](../avcapturesessioninterruptionsystempressurestatekey.md): A key to retrieve a state value that indicates the system pressure level and contributing factors that caused the interruption.
