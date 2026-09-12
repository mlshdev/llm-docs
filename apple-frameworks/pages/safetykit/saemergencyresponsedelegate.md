> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saemergencyresponsedelegate](https://developer.apple.com/documentation/safetykit/saemergencyresponsedelegate)

# SAEmergencyResponseDelegate (Swift)

**Framework:** SafetyKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The interface for receiving updates about a requested emergency response action.

## Declaration

```swift
protocol SAEmergencyResponseDelegate : NSObjectProtocol
```

## Topics

### Receiving voice call status

- [emergencyResponseManager(\_:didUpdateVoiceCallStatus:)](saemergencyresponsedelegate/emergencyresponsemanager%28__didupdatevoicecallstatus_%29.md): Provides the voice call status to the delegate.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to a crash

- [SAEmergencyResponseManager](saemergencyresponsemanager.md): Provides actions in response to a Crash Detection event.
- [SACrashDetectionEvent.Response](sacrashdetectionevent/response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.

# SAEmergencyResponseDelegate (Objective-C)

**Framework:** SafetyKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The interface for receiving updates about a requested emergency response action.

## Declaration

```objectivec
@protocol SAEmergencyResponseDelegate <NSObject>
```

## Topics

### Receiving voice call status

- [emergencyResponseManager:didUpdateVoiceCallStatus:](saemergencyresponsedelegate/emergencyresponsemanager%28__didupdatevoicecallstatus_%29.md): Provides the voice call status to the delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to a crash

- [SAEmergencyResponseManager](saemergencyresponsemanager.md): Provides actions in response to a Crash Detection event.
- [SACrashDetectionEventResponse](sacrashdetectionevent/response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
