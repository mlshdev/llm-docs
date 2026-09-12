> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/nominal](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/nominal)

# nominal (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A level that indicates the system pressure is normal and not under pressure.

## Declaration

```swift
static let nominal: AVCaptureDevice.SystemPressureState.Level
```

## See Also

### System pressure levels

- [fair](fair.md): A level that indicates that system pressure is slightly elevated.
- [serious](serious.md): A level that indicates that system pressure is highly elevated.
- [critical](critical.md): System pressure is critically elevated.
- [shutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.

# AVCaptureSystemPressureLevelNominal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A level that indicates the system pressure is normal and not under pressure.

## Declaration

```objectivec
extern AVCaptureSystemPressureLevel const AVCaptureSystemPressureLevelNominal;
```

## See Also

### System pressure levels

- [AVCaptureSystemPressureLevelFair](fair.md): A level that indicates that system pressure is slightly elevated.
- [AVCaptureSystemPressureLevelSerious](serious.md): A level that indicates that system pressure is highly elevated.
- [AVCaptureSystemPressureLevelCritical](critical.md): System pressure is critically elevated.
- [AVCaptureSystemPressureLevelShutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.
