> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saemergencyresponsemanager](https://developer.apple.com/documentation/safetykit/saemergencyresponsemanager)

# SAEmergencyResponseManager (Swift)

**Framework:** SafetyKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Provides actions in response to a Crash Detection event.

## Declaration

```swift
class SAEmergencyResponseManager
```

<a id="overview"></a>

## Overview

Use the manager to place a voice call to an emergency contact upon receipt of a Crash Detection event. Provide an object that adopts [SAEmergencyResponseDelegate](saemergencyresponsedelegate.md) in order to respond to the status of the voice call.

## Topics

### Placing a voice call

- [SAEmergencyResponseManager.VoiceCallStatus](saemergencyresponsemanager/voicecallstatus.md): An enumeration that defines the status of a requested voice call.
- [dialVoiceCall(toPhoneNumber:completionHandler:)](saemergencyresponsemanager/dialvoicecall%28tophonenumber_completionhandler_%29.md): Request the system to dial a voice call on behalf of someone involved in a crash.
- [delegate](saemergencyresponsemanager/delegate.md): The object that receives voice call status updates and requested emergency response actions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to a crash

- [SAEmergencyResponseDelegate](saemergencyresponsedelegate.md): The interface for receiving updates about a requested emergency response action.
- [SACrashDetectionEvent.Response](sacrashdetectionevent/response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.

# SAEmergencyResponseManager (Objective-C)

**Framework:** SafetyKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Provides actions in response to a Crash Detection event.

## Declaration

```objectivec
@interface SAEmergencyResponseManager : NSObject
```

<a id="overview"></a>

## Overview

Use the manager to place a voice call to an emergency contact upon receipt of a Crash Detection event. Provide an object that adopts [SAEmergencyResponseDelegate](saemergencyresponsedelegate.md) in order to respond to the status of the voice call.

## Topics

### Placing a voice call

- [SAEmergencyResponseManagerVoiceCallStatus](saemergencyresponsemanager/voicecallstatus.md): An enumeration that defines the status of a requested voice call.
- [dialVoiceCallToPhoneNumber:completionHandler:](saemergencyresponsemanager/dialvoicecall%28tophonenumber_completionhandler_%29.md): Request the system to dial a voice call on behalf of someone involved in a crash.
- [delegate](saemergencyresponsemanager/delegate.md): The object that receives voice call status updates and requested emergency response actions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Responding to a crash

- [SAEmergencyResponseDelegate](saemergencyresponsedelegate.md): The interface for receiving updates about a requested emergency response action.
- [SACrashDetectionEventResponse](sacrashdetectionevent/response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
