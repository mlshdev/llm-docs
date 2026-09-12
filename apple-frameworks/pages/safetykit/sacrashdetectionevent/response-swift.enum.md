> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionevent/response-swift.enum](https://developer.apple.com/documentation/safetykit/sacrashdetectionevent/response-swift.enum)

# SACrashDetectionEvent.Response (Swift)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An enumeration that defines possible emergency responses to a Crash Detection event.

## Declaration

```swift
enum Response
```

<a id="Overview"></a>

## Overview

The Crash Detection event response indicates whether the system attempted to dial the Emergency SOS - Call After Severe Crash provider, depending on the setting in the Settings app.

## Topics

### Determining responses

- [SACrashDetectionEvent.Response.attempted](response-swift.enum/attempted.md): The system attempted to dial the Emergency SOS - Call After Severe Crash provider.
- [SACrashDetectionEvent.Response.disabled](response-swift.enum/disabled.md): The system couldn’t contact the Emergency SOS - Call After Severe Crash provider because the feature is off in the Settings app.

### Initializers

- [init(rawValue:)](response-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to a crash

- [SAEmergencyResponseManager](../saemergencyresponsemanager.md): Provides actions in response to a Crash Detection event.
- [SAEmergencyResponseDelegate](../saemergencyresponsedelegate.md): The interface for receiving updates about a requested emergency response action.

# SACrashDetectionEventResponse (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An enumeration that defines possible emergency responses to a Crash Detection event.

## Declaration

```objectivec
enum SACrashDetectionEventResponse : NSInteger;
```

<a id="Overview"></a>

## Overview

The Crash Detection event response indicates whether the system attempted to dial the Emergency SOS - Call After Severe Crash provider, depending on the setting in the Settings app.

## Topics

### Determining responses

- [SACrashDetectionEventResponseAttempted](response-swift.enum/attempted.md): The system attempted to dial the Emergency SOS - Call After Severe Crash provider.
- [SACrashDetectionEventResponseDisabled](response-swift.enum/disabled.md): The system couldn’t contact the Emergency SOS - Call After Severe Crash provider because the feature is off in the Settings app.

## See Also

### Responding to a crash

- [SAEmergencyResponseManager](../saemergencyresponsemanager.md): Provides actions in response to a Crash Detection event.
- [SAEmergencyResponseDelegate](../saemergencyresponsedelegate.md): The interface for receiving updates about a requested emergency response action.
