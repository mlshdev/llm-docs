> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/serious](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/serious)

# serious (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A level that indicates that system pressure is highly elevated.

## Declaration

```swift
static let serious: AVCaptureDevice.SystemPressureState.Level
```

<a id="Discussion"></a>

## Discussion

System pressures may impact capture performance. Consider limiting the frame rate until system pressure state improves.

## See Also

### System pressure levels

- [nominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [fair](fair.md): A level that indicates that system pressure is slightly elevated.
- [critical](critical.md): System pressure is critically elevated.
- [shutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.

# AVCaptureSystemPressureLevelSerious (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A level that indicates that system pressure is highly elevated.

## Declaration

```objectivec
extern AVCaptureSystemPressureLevel const AVCaptureSystemPressureLevelSerious;
```

<a id="Discussion"></a>

## Discussion

System pressures may impact capture performance. Consider limiting the frame rate until system pressure state improves.

## See Also

### System pressure levels

- [AVCaptureSystemPressureLevelNominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [AVCaptureSystemPressureLevelFair](fair.md): A level that indicates that system pressure is slightly elevated.
- [AVCaptureSystemPressureLevelCritical](critical.md): System pressure is critically elevated.
- [AVCaptureSystemPressureLevelShutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.
