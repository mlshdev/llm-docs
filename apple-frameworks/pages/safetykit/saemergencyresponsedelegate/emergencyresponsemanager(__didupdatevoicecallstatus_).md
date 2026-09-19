> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safetykit/saemergencyresponsedelegate/emergencyresponsemanager(_:didupdatevoicecallstatus:)

# emergencyResponseManager(\_:didUpdateVoiceCallStatus:) (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Provides the voice call status to the delegate.

## Declaration

```swift
optional func emergencyResponseManager(_ emergencyResponseManager: SAEmergencyResponseManager, didUpdateVoiceCallStatus voiceCallStatus: SAEmergencyResponseManager.VoiceCallStatus)
```

## Parameters

- `emergencyResponseManager`: The emergency response object responsible for the status update.
- `voiceCallStatus`: The status of the voice call.

<a id="Discussion"></a>

## Discussion

A voice call to the desired contact can occur when running in the foreground or background within a limited time window of a Crash Detection event. Use this delegate method to monitor the status of the requested voice call.

# emergencyResponseManager:didUpdateVoiceCallStatus: (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Provides the voice call status to the delegate.

## Declaration

```objectivec
- (void) emergencyResponseManager:(SAEmergencyResponseManager *) emergencyResponseManager didUpdateVoiceCallStatus:(SAEmergencyResponseManagerVoiceCallStatus) voiceCallStatus;
```

## Parameters

- `emergencyResponseManager`: The emergency response object responsible for the status update.
- `voiceCallStatus`: The status of the voice call.

<a id="Discussion"></a>

## Discussion

A voice call to the desired contact can occur when running in the foreground or background within a limited time window of a Crash Detection event. Use this delegate method to monitor the status of the requested voice call.
