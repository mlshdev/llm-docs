> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saemergencyresponsemanager/voicecallstatus](https://developer.apple.com/documentation/safetykit/saemergencyresponsemanager/voicecallstatus)

# SAEmergencyResponseManager.VoiceCallStatus (Swift)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An enumeration that defines the status of a requested voice call.

## Declaration

```swift
enum VoiceCallStatus
```

## Topics

### Determining call status

- [SAEmergencyResponseManager.VoiceCallStatus.active](voicecallstatus/active.md): The system successfully placed a call to the desired contact and that call is currently active.
- [SAEmergencyResponseManager.VoiceCallStatus.dialing](voicecallstatus/dialing.md): The system is dialing the desired contact.
- [SAEmergencyResponseManager.VoiceCallStatus.disconnected](voicecallstatus/disconnected.md): The voice call to the desired contact disconnected.
- [SAEmergencyResponseManager.VoiceCallStatus.failed](voicecallstatus/failed.md): The voice call failed to connect to the desired contact.

### Initializers

- [init(rawValue:)](voicecallstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Placing a voice call

- [dialVoiceCall(toPhoneNumber:completionHandler:)](dialvoicecall%28tophonenumber_completionhandler_%29.md): Request the system to dial a voice call on behalf of someone involved in a crash.
- [delegate](delegate.md): The object that receives voice call status updates and requested emergency response actions.

# SAEmergencyResponseManagerVoiceCallStatus (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An enumeration that defines the status of a requested voice call.

## Declaration

```objectivec
enum SAEmergencyResponseManagerVoiceCallStatus : NSInteger;
```

## Topics

### Determining call status

- [SAEmergencyResponseManagerVoiceCallStatusActive](voicecallstatus/active.md): The system successfully placed a call to the desired contact and that call is currently active.
- [SAEmergencyResponseManagerVoiceCallStatusDialing](voicecallstatus/dialing.md): The system is dialing the desired contact.
- [SAEmergencyResponseManagerVoiceCallStatusDisconnected](voicecallstatus/disconnected.md): The voice call to the desired contact disconnected.
- [SAEmergencyResponseManagerVoiceCallStatusFailed](voicecallstatus/failed.md): The voice call failed to connect to the desired contact.

## See Also

### Placing a voice call

- [dialVoiceCallToPhoneNumber:completionHandler:](dialvoicecall%28tophonenumber_completionhandler_%29.md): Request the system to dial a voice call on behalf of someone involved in a crash.
- [delegate](delegate.md): The object that receives voice call status updates and requested emergency response actions.
