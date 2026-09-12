> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/init(eventtype:parameters:relativetime:duration:)](https://developer.apple.com/documentation/corehaptics/chhapticevent/init(eventtype:parameters:relativetime:duration:))

# init(eventType:parameters:relativeTime:duration:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Initializes a haptic event of the specified type, parameters, start time, and duration.

## Declaration

```swift
init(eventType type: CHHapticEvent.EventType, parameters eventParams: [CHHapticEventParameter], relativeTime time: TimeInterval, duration: TimeInterval)
```

## Parameters

- `type`: The type of the haptic event: transient or continuous.
- `eventParams`: An array of event parameters to characterize the haptic event.
- `time`: The start time of the haptic event, in seconds.
- `duration`: The duration of the haptic event, in seconds.

## See Also

### Creating Haptic Events

- [init(audioResourceID:parameters:relativeTime:)](init%28audioresourceid_parameters_relativetime_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters and start time.
- [init(audioResourceID:parameters:relativeTime:duration:)](init%28audioresourceid_parameters_relativetime_duration_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters, start time, and duration.
- [init(eventType:parameters:relativeTime:)](init%28eventtype_parameters_relativetime_%29.md): Initializes a haptic event of the specified type, parameters, and start time.

# initWithEventType:parameters:relativeTime:duration: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Initializes a haptic event of the specified type, parameters, start time, and duration.

## Declaration

```objectivec
- (instancetype) initWithEventType:(CHHapticEventType) type parameters:(NSArray<CHHapticEventParameter *> *) eventParams relativeTime:(NSTimeInterval) time duration:(NSTimeInterval) duration;
```

## Parameters

- `type`: The type of the haptic event: transient or continuous.
- `eventParams`: An array of event parameters to characterize the haptic event.
- `time`: The start time of the haptic event, in seconds.
- `duration`: The duration of the haptic event, in seconds.

## See Also

### Creating Haptic Events

- [initWithAudioResourceID:parameters:relativeTime:](init%28audioresourceid_parameters_relativetime_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters and start time.
- [initWithAudioResourceID:parameters:relativeTime:duration:](init%28audioresourceid_parameters_relativetime_duration_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters, start time, and duration.
- [initWithEventType:parameters:relativeTime:](init%28eventtype_parameters_relativetime_%29.md): Initializes a haptic event of the specified type, parameters, and start time.
