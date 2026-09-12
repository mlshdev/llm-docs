> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitscheduleparameters(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitscheduleparameters(_:_:_:))

# AudioUnitScheduleParameters(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Schedules changes to the value of an audio unit parameter.

## Declaration

```swift
func AudioUnitScheduleParameters(_ inUnit: AudioUnit, _ inParameterEvent: UnsafePointer<AudioUnitParameterEvent>, _ inNumParamEvents: UInt32) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to schedule parameter changes for.
- `inParameterEvent`: One or more parameter events that you want to schedule.
- `inNumParamEvents`: The number of audio unit parameter events represented in the `inParameterEvent` parameter.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Use this function to schedule changes to the value of an audio unit parameter.

- A so-called *immediate* audio unit parameter event takes place at a future time and involves an immediate change from one value to another.
- A so-called *ramped* audio unit parameter event begins at a future time and proceeds linearly, over a specified number of audio samples, from a starting value to a final value.

With a single call to this function, you can schedule multiple parameter events. All the events apply only to the current audio unit render call; the events are scheduled as a part of the pre-render notification callback.

When scheduling an immediate parameter event, you provide a new value to be set at the specified sample buffer offset.

When scheduling a ramped parameter, the ramp is scheduled each audio unit render for the duration of the ramp. Each schedule of the the new audio unit render specifies the progress of the ramp.

An audio unit parameter that accepts scheduled events indicates this through its `AudioUnitParameterInfo` structure.

## See Also

### Getting and Setting Parameters

- [AudioUnitGetParameter(\_:\_:\_:\_:\_:)](audiounitgetparameter%28__________%29.md): Gets the value of an audio unit parameter.
- [AudioUnitSetParameter(\_:\_:\_:\_:\_:\_:)](audiounitsetparameter%28____________%29.md): Sets the value of an audio unit parameter.

# AudioUnitScheduleParameters (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Schedules changes to the value of an audio unit parameter.

## Declaration

```objectivec
extern OSStatus AudioUnitScheduleParameters(AudioUnit inUnit, const AudioUnitParameterEvent *inParameterEvent, UInt32 inNumParamEvents);
```

## Parameters

- `inUnit`: The audio unit that you want to schedule parameter changes for.
- `inParameterEvent`: One or more parameter events that you want to schedule.
- `inNumParamEvents`: The number of audio unit parameter events represented in the `inParameterEvent` parameter.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Use this function to schedule changes to the value of an audio unit parameter.

- A so-called *immediate* audio unit parameter event takes place at a future time and involves an immediate change from one value to another.
- A so-called *ramped* audio unit parameter event begins at a future time and proceeds linearly, over a specified number of audio samples, from a starting value to a final value.

With a single call to this function, you can schedule multiple parameter events. All the events apply only to the current audio unit render call; the events are scheduled as a part of the pre-render notification callback.

When scheduling an immediate parameter event, you provide a new value to be set at the specified sample buffer offset.

When scheduling a ramped parameter, the ramp is scheduled each audio unit render for the duration of the ramp. Each schedule of the the new audio unit render specifies the progress of the ramp.

An audio unit parameter that accepts scheduled events indicates this through its `AudioUnitParameterInfo` structure.

## See Also

### Getting and Setting Parameters

- [AudioUnitGetParameter](audiounitgetparameter%28__________%29.md): Gets the value of an audio unit parameter.
- [AudioUnitSetParameter](audiounitsetparameter%28____________%29.md): Sets the value of an audio unit parameter.
