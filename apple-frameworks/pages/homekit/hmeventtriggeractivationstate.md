> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtriggeractivationstate](https://developer.apple.com/documentation/homekit/hmeventtriggeractivationstate)

# HMEventTriggerActivationState (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The activation state of an event trigger.

## Declaration

```swift
enum HMEventTriggerActivationState
```

## Topics

### Inspecting activation state

- [HMEventTriggerActivationState.disabled](hmeventtriggeractivationstate/disabled.md): Trigger is not activated.
- [HMEventTriggerActivationState.disabledNoCompatibleHomeHub](hmeventtriggeractivationstate/disablednocompatiblehomehub.md): Trigger is not active because there is no compatible home hub.
- [HMEventTriggerActivationState.disabledNoHomeHub](hmeventtriggeractivationstate/disablednohomehub.md): Trigger is not active because there is no home hub.
- [HMEventTriggerActivationState.disabledNoLocationServicesAuthorization](hmeventtriggeractivationstate/disablednolocationservicesauthorization.md): Trigger is not active because the user has not authorized use of location services.
- [HMEventTriggerActivationState.enabled](hmeventtriggeractivationstate/enabled.md): The trigger is currently active.

### Initializers

- [init(rawValue:)](hmeventtriggeractivationstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Querying trigger activation state

- [triggerActivationState](hmeventtrigger/triggeractivationstate.md): The current activation state of the trigger.

# HMEventTriggerActivationState (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The activation state of an event trigger.

## Declaration

```objectivec
enum HMEventTriggerActivationState : NSUInteger;
```

## Topics

### Inspecting activation state

- [HMEventTriggerActivationStateDisabled](hmeventtriggeractivationstate/disabled.md): Trigger is not activated.
- [HMEventTriggerActivationStateDisabledNoCompatibleHomeHub](hmeventtriggeractivationstate/disablednocompatiblehomehub.md): Trigger is not active because there is no compatible home hub.
- [HMEventTriggerActivationStateDisabledNoHomeHub](hmeventtriggeractivationstate/disablednohomehub.md): Trigger is not active because there is no home hub.
- [HMEventTriggerActivationStateDisabledNoLocationServicesAuthorization](hmeventtriggeractivationstate/disablednolocationservicesauthorization.md): Trigger is not active because the user has not authorized use of location services.
- [HMEventTriggerActivationStateEnabled](hmeventtriggeractivationstate/enabled.md): The trigger is currently active.

## See Also

### Querying trigger activation state

- [triggerActivationState](hmeventtrigger/triggeractivationstate.md): The current activation state of the trigger.
