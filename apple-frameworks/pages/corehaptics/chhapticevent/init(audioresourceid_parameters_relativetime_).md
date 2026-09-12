> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/init(audioresourceid:parameters:relativetime:)](https://developer.apple.com/documentation/corehaptics/chhapticevent/init(audioresourceid:parameters:relativetime:))

# init(audioResourceID:parameters:relativeTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Initializes a haptic event from a previously loaded audio resource, specifying event parameters and start time.

## Declaration

```swift
init(audioResourceID resID: CHHapticAudioResourceID, parameters eventParams: [CHHapticEventParameter], relativeTime time: TimeInterval)
```

## Parameters

- `resID`: The resource ID of the accompanying audio signal.
- `eventParams`: An array of event parameters to characterize the audio event.
- `time`: The start time of the audio event, in seconds.

<a id="Discussion"></a>

## Discussion

To register an audio resource, call the [CHHapticEngine](../chhapticengine.md) object’s [registerAudioResource(\_:options:)](../chhapticengine/registeraudioresource%28__options_%29.md) method.

## See Also

### Creating Haptic Events

- [init(audioResourceID:parameters:relativeTime:duration:)](init%28audioresourceid_parameters_relativetime_duration_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters, start time, and duration.
- [init(eventType:parameters:relativeTime:)](init%28eventtype_parameters_relativetime_%29.md): Initializes a haptic event of the specified type, parameters, and start time.
- [init(eventType:parameters:relativeTime:duration:)](init%28eventtype_parameters_relativetime_duration_%29.md): Initializes a haptic event of the specified type, parameters, start time, and duration.

# initWithAudioResourceID:parameters:relativeTime: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Initializes a haptic event from a previously loaded audio resource, specifying event parameters and start time.

## Declaration

```objectivec
- (instancetype) initWithAudioResourceID:(CHHapticAudioResourceID) resID parameters:(NSArray<CHHapticEventParameter *> *) eventParams relativeTime:(NSTimeInterval) time;
```

## Parameters

- `resID`: The resource ID of the accompanying audio signal.
- `eventParams`: An array of event parameters to characterize the audio event.
- `time`: The start time of the audio event, in seconds.

<a id="Discussion"></a>

## Discussion

To register an audio resource, call the [CHHapticEngine](../chhapticengine.md) object’s [registerAudioResource:options:error:](../chhapticengine/registeraudioresource%28__options_%29.md) method.

## See Also

### Creating Haptic Events

- [initWithAudioResourceID:parameters:relativeTime:duration:](init%28audioresourceid_parameters_relativetime_duration_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters, start time, and duration.
- [initWithEventType:parameters:relativeTime:](init%28eventtype_parameters_relativetime_%29.md): Initializes a haptic event of the specified type, parameters, and start time.
- [initWithEventType:parameters:relativeTime:duration:](init%28eventtype_parameters_relativetime_duration_%29.md): Initializes a haptic event of the specified type, parameters, start time, and duration.
