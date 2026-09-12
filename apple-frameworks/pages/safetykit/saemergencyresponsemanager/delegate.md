> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saemergencyresponsemanager/delegate](https://developer.apple.com/documentation/safetykit/saemergencyresponsemanager/delegate)

# delegate (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The object that receives voice call status updates and requested emergency response actions.

## Declaration

```swift
weak var delegate: (any SAEmergencyResponseDelegate)? { get set }
```

## See Also

### Placing a voice call

- [SAEmergencyResponseManager.VoiceCallStatus](voicecallstatus.md): An enumeration that defines the status of a requested voice call.
- [dialVoiceCall(toPhoneNumber:completionHandler:)](dialvoicecall%28tophonenumber_completionhandler_%29.md): Request the system to dial a voice call on behalf of someone involved in a crash.

# delegate (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The object that receives voice call status updates and requested emergency response actions.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite) id<SAEmergencyResponseDelegate> delegate;
```

## See Also

### Placing a voice call

- [SAEmergencyResponseManagerVoiceCallStatus](voicecallstatus.md): An enumeration that defines the status of a requested voice call.
- [dialVoiceCallToPhoneNumber:completionHandler:](dialvoicecall%28tophonenumber_completionhandler_%29.md): Request the system to dial a voice call on behalf of someone involved in a crash.
