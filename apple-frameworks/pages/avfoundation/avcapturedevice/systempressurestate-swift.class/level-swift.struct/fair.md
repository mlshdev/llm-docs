> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/fair](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/fair)

# fair (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A level that indicates that system pressure is slightly elevated.

## Declaration

```swift
static let fair: AVCaptureDevice.SystemPressureState.Level
```

## See Also

### System pressure levels

- [nominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [serious](serious.md): A level that indicates that system pressure is highly elevated.
- [critical](critical.md): System pressure is critically elevated.
- [shutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.

# AVCaptureSystemPressureLevelFair (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A level that indicates that system pressure is slightly elevated.

## Declaration

```objectivec
extern AVCaptureSystemPressureLevel const AVCaptureSystemPressureLevelFair;
```

## See Also

### System pressure levels

- [AVCaptureSystemPressureLevelNominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [AVCaptureSystemPressureLevelSerious](serious.md): A level that indicates that system pressure is highly elevated.
- [AVCaptureSystemPressureLevelCritical](critical.md): System pressure is critically elevated.
- [AVCaptureSystemPressureLevelShutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.
