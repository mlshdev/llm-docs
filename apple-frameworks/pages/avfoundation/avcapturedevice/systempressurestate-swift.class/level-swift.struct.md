> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct)

# AVCaptureDevice.SystemPressureState.Level (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A structure that defines system pressure state levels.

## Declaration

```swift
struct Level
```

## Topics

### System pressure levels

- [nominal](level-swift.struct/nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [fair](level-swift.struct/fair.md): A level that indicates that system pressure is slightly elevated.
- [serious](level-swift.struct/serious.md): A level that indicates that system pressure is highly elevated.
- [critical](level-swift.struct/critical.md): System pressure is critically elevated.
- [shutdown](level-swift.struct/shutdown.md): System pressure is beyond critical, so the capture system has shut down.

### Initializers

- [init(rawValue:)](level-swift.struct/init%28rawvalue_%29.md): Creates a system pressure level from its raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Overall level

- [level](level-swift.property.md): The overall level of performance constraints on the capture system.

# AVCaptureSystemPressureLevel (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

A structure that defines system pressure state levels.

## Declaration

```objectivec
typedef NSString * AVCaptureSystemPressureLevel;
```

## Topics

### System pressure levels

- [AVCaptureSystemPressureLevelNominal](level-swift.struct/nominal.md): A level that indicates the system pressure is normal and not under pressure.
- [AVCaptureSystemPressureLevelFair](level-swift.struct/fair.md): A level that indicates that system pressure is slightly elevated.
- [AVCaptureSystemPressureLevelSerious](level-swift.struct/serious.md): A level that indicates that system pressure is highly elevated.
- [AVCaptureSystemPressureLevelCritical](level-swift.struct/critical.md): System pressure is critically elevated.
- [AVCaptureSystemPressureLevelShutdown](level-swift.struct/shutdown.md): System pressure is beyond critical, so the capture system has shut down.

## See Also

### Overall level

- [level](level-swift.property.md): The overall level of performance constraints on the capture system.
