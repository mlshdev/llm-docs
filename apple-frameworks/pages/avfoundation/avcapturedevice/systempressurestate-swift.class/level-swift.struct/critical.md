> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/critical](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/critical)

# critical (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

System pressure is critically elevated.

## Declaration

```swift
static let critical: AVCaptureDevice.SystemPressureState.Level
```

<a id="Discussion"></a>

## Discussion

Capture quality and performance are significantly impacted. Reduce the frame rate until system pressure state improves.

## See Also

### System pressure levels

- [nominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [fair](fair.md): A level that indicates that system pressure is slightly elevated.
- [serious](serious.md): A level that indicates that system pressure is highly elevated.
- [shutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.

# AVCaptureSystemPressureLevelCritical (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

System pressure is critically elevated.

## Declaration

```objectivec
extern AVCaptureSystemPressureLevel const AVCaptureSystemPressureLevelCritical;
```

<a id="Discussion"></a>

## Discussion

Capture quality and performance are significantly impacted. Reduce the frame rate until system pressure state improves.

## See Also

### System pressure levels

- [AVCaptureSystemPressureLevelNominal](nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [AVCaptureSystemPressureLevelFair](fair.md): A level that indicates that system pressure is slightly elevated.
- [AVCaptureSystemPressureLevelSerious](serious.md): A level that indicates that system pressure is highly elevated.
- [AVCaptureSystemPressureLevelShutdown](shutdown.md): System pressure is beyond critical, so the capture system has shut down.
