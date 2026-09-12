> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/status-swift.enum](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/status-swift.enum)

# GCDualSenseAdaptiveTrigger.Status (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The possible states of an adaptive trigger.

## Declaration

```swift
enum Status
```

## Topics

### Statuses

- [GCDualSenseAdaptiveTrigger.Status.unknown](status-swift.enum/unknown.md): The trigger status is unknown.
- [GCDualSenseAdaptiveTrigger.Status.feedbackNoLoad](status-swift.enum/feedbacknoload.md): The trigger is in feedback mode, but isn’t applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.feedbackLoadApplied](status-swift.enum/feedbackloadapplied.md): The trigger is in feedback mode and is applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.weaponReady](status-swift.enum/weaponready.md): The trigger is in weapon mode and ready to fire, but isn’t applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.weaponFiring](status-swift.enum/weaponfiring.md): The trigger is in weapon mode, firing, and is applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.weaponFired](status-swift.enum/weaponfired.md): The trigger is in weapon mode, has fired, and has stopped applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.vibrationNotVibrating](status-swift.enum/vibrationnotvibrating.md): The trigger is in vibration mode, but isn’t vibrating.
- [GCDualSenseAdaptiveTrigger.Status.vibrationIsVibrating](status-swift.enum/vibrationisvibrating.md): The trigger is in vibration mode and is vibrating.
- [GCDualSenseAdaptiveTrigger.Status.slopeFeedbackReady](status-swift.enum/slopefeedbackready.md): The trigger is in slope mode, but isn’t applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.slopeFeedbackApplyingLoad](status-swift.enum/slopefeedbackapplyingload.md): The trigger is in slope mode, and is applying the resistive load.
- [GCDualSenseAdaptiveTrigger.Status.slopeFeedbackFinished](status-swift.enum/slopefeedbackfinished.md): The trigger is in slope mode, and stopped applying the resistive load.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking the status

- [status](status-swift.property.md): The current status of the adaptive trigger and whether it’s applying effects.

# GCDualSenseAdaptiveTriggerStatus (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The possible states of an adaptive trigger.

## Declaration

```objectivec
enum GCDualSenseAdaptiveTriggerStatus : NSInteger;
```

## Topics

### Statuses

- [GCDualSenseAdaptiveTriggerStatusUnknown](status-swift.enum/unknown.md): The trigger status is unknown.
- [GCDualSenseAdaptiveTriggerStatusFeedbackNoLoad](status-swift.enum/feedbacknoload.md): The trigger is in feedback mode, but isn’t applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusFeedbackLoadApplied](status-swift.enum/feedbackloadapplied.md): The trigger is in feedback mode and is applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusWeaponReady](status-swift.enum/weaponready.md): The trigger is in weapon mode and ready to fire, but isn’t applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusWeaponFiring](status-swift.enum/weaponfiring.md): The trigger is in weapon mode, firing, and is applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusWeaponFired](status-swift.enum/weaponfired.md): The trigger is in weapon mode, has fired, and has stopped applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusVibrationNotVibrating](status-swift.enum/vibrationnotvibrating.md): The trigger is in vibration mode, but isn’t vibrating.
- [GCDualSenseAdaptiveTriggerStatusVibrationIsVibrating](status-swift.enum/vibrationisvibrating.md): The trigger is in vibration mode and is vibrating.
- [GCDualSenseAdaptiveTriggerStatusSlopeFeedbackReady](status-swift.enum/slopefeedbackready.md): The trigger is in slope mode, but isn’t applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusSlopeFeedbackApplyingLoad](status-swift.enum/slopefeedbackapplyingload.md): The trigger is in slope mode, and is applying the resistive load.
- [GCDualSenseAdaptiveTriggerStatusSlopeFeedbackFinished](status-swift.enum/slopefeedbackfinished.md): The trigger is in slope mode, and stopped applying the resistive load.

## See Also

### Checking the status

- [status](status-swift.property.md): The current status of the adaptive trigger and whether it’s applying effects.
