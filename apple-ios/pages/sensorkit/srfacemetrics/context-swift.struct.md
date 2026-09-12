> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfacemetrics/context-swift.struct](https://developer.apple.com/documentation/sensorkit/srfacemetrics/context-swift.struct)

# SRFaceMetrics.Context (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The context of the system during the camera session.

## Declaration

```swift
struct Context
```

## Topics

### Camera contexts

- [deviceUnlock](context-swift.struct/deviceunlock.md): The camera session occurs while the user has the device unlocked.
- [messagingAppUsage](context-swift.struct/messagingappusage.md): The camera session occurs while the user is in the app with messaging capability.

### Creating camera contexts

- [init(rawValue:)](context-swift.struct/init%28rawvalue_%29.md): Creates and returns a new structure with the specified value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the camera session.
- [context](context-swift.property.md): The context of the system during the camera session.
- [version](version.md): The version of the algorithm that the system uses to generate the face metrics and analytics.

# SRFaceMetricsContext (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The context of the system during the camera session.

## Declaration

```objectivec
enum SRFaceMetricsContext : NSUInteger;
```

## Topics

### Camera contexts

- [SRFaceMetricsContextDeviceUnlock](context-swift.struct/deviceunlock.md): The camera session occurs while the user has the device unlocked.
- [SRFaceMetricsContextMessagingAppUsage](context-swift.struct/messagingappusage.md): The camera session occurs while the user is in the app with messaging capability.

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the camera session.
- [context](context-swift.property.md): The context of the system during the camera session.
- [version](version.md): The version of the algorithm that the system uses to generate the face metrics and analytics.
