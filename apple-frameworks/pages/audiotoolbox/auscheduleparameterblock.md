> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auscheduleparameterblock](https://developer.apple.com/documentation/audiotoolbox/auscheduleparameterblock)

# AUScheduleParameterBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to schedule parameter changes.

## Declaration

```swift
typealias AUScheduleParameterBlock = (AUEventSampleTime, AUAudioFrameCount, AUParameterAddress, AUValue) -> Void
```

<a id="Discussion"></a>

## Discussion

Check the parameter’s flags to determine whether the parameter is rampable. If a parameter isn’t rampable, a ramp duration of `0` changes it immediately to the target value, and a nonzero ramp duration leaves it unchanged.

The block takes the following parameters:

- **eventSampleTime**: The sample time at which the parameter begins changing. When you schedule parameters during the render cycle, such as from a render observer you add with [token(byAddingRenderObserver:)](auaudiounit/token%28byaddingrenderobserver_%29.md), pass the `AUEventSampleTimeImmediate` value plus an optional buffer offset of fewer than 4096 sample frames to schedule the event at that position in the current render cycle.
- **rampDurationSampleFrames**: The number of sample frames over which the parameter’s return value is to ramp, or `0` if the parameter change should take effect immediately.
- **parameterAddress**: The parameter’s address.
- **value**: The parameter’s new value if the ramp duration is `0`; otherwise, the value at the end of the scheduled ramp.

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
- [MIDIChannelNumber](midichannelnumber.md): MIDI Channel, 0~15 (channels 1 through 16, respectively).
- [AUAudioObjectID](auaudioobjectid.md)
- [AUMIDICIProfileChangedBlock](aumidiciprofilechangedblock.md)
- [AUAudioChannelCount](auaudiochannelcount.md): A number of audio channels.
- [AUAudioFrameCount](auaudioframecount.md): A number of audio sample frames.
- [AUAudioUnitStatus](auaudiounitstatus.md): A result code returned from an audio unit’s render function.
- [AUEventListenerProc](aueventlistenerproc.md)
- [AUEventListenerRef](aueventlistenerref.md)
- [AUEventSampleTime](aueventsampletime.md): Expresses time as a sample count.
- [AUImplementorValueObserver](auimplementorvalueobserver.md): A block called to notify the audio unit implementation of changes to a parameter value.
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.

# AUScheduleParameterBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to schedule parameter changes.

## Declaration

```objectivec
typedef void (^)(long long, unsigned int, unsigned long long, float) __attribute__((nonblocking)) AUScheduleParameterBlock;
```

<a id="Discussion"></a>

## Discussion

Check the parameter’s flags to determine whether the parameter is rampable. If a parameter isn’t rampable, a ramp duration of `0` changes it immediately to the target value, and a nonzero ramp duration leaves it unchanged.

The block takes the following parameters:

- **eventSampleTime**: The sample time at which the parameter begins changing. When you schedule parameters during the render cycle, such as from a render observer you add with [tokenByAddingRenderObserver:](auaudiounit/token%28byaddingrenderobserver_%29.md), pass the `AUEventSampleTimeImmediate` value plus an optional buffer offset of fewer than 4096 sample frames to schedule the event at that position in the current render cycle.
- **rampDurationSampleFrames**: The number of sample frames over which the parameter’s return value is to ramp, or `0` if the parameter change should take effect immediately.
- **parameterAddress**: The parameter’s address.
- **value**: The parameter’s new value if the ramp duration is `0`; otherwise, the value at the end of the scheduled ramp.

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
- [MIDIChannelNumber](midichannelnumber.md): MIDI Channel, 0~15 (channels 1 through 16, respectively).
- [AUAudioObjectID](auaudioobjectid.md)
- [AUMIDICIProfileChangedBlock](aumidiciprofilechangedblock.md)
- [AUAudioChannelCount](auaudiochannelcount.md): A number of audio channels.
- [AUAudioFrameCount](auaudioframecount.md): A number of audio sample frames.
- [AUAudioUnitStatus](auaudiounitstatus.md): A result code returned from an audio unit’s render function.
- [AUEventListenerProc](aueventlistenerproc.md)
- [AUEventListenerRef](aueventlistenerref.md)
- [AUEventSampleTime](aueventsampletime.md): Expresses time as a sample count.
- [AUImplementorValueObserver](auimplementorvalueobserver.md): A block called to notify the audio unit implementation of changes to a parameter value.
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.
