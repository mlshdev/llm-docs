> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparametervalue](https://developer.apple.com/documentation/audiotoolbox/audiounitparametervalue)

# AudioUnitParameterValue (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data type for an audio unit parameter value.

## Declaration

```swift
typealias AudioUnitParameterValue = Float32
```

<a id="Discussion"></a>

## Discussion

An audio unit parameter is an adjustable setting, such as gain. The parameters for Apple-supplied audio units are described in `Audio Unit Parameters`.

You can change a parameter value directly by calling the [AudioUnitSetParameter(\_:\_:\_:\_:\_:\_:)](audiounitsetparameter%28____________%29.md) function, or schedule a change by calling [AudioUnitScheduleParameters(\_:\_:\_:)](audiounitscheduleparameters%28______%29.md). See also [AudioUnitParameterID](audiounitparameterid.md), [AudioUnitParameter](audiounitparameter.md).

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

# AudioUnitParameterValue (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data type for an audio unit parameter value.

## Declaration

```objectivec
typedef Float32 AudioUnitParameterValue;
```

<a id="Discussion"></a>

## Discussion

An audio unit parameter is an adjustable setting, such as gain. The parameters for Apple-supplied audio units are described in `Audio Unit Parameters`.

You can change a parameter value directly by calling the [AudioUnitSetParameter](audiounitsetparameter%28____________%29.md) function, or schedule a change by calling [AudioUnitScheduleParameters](audiounitscheduleparameters%28______%29.md). See also [AudioUnitParameterID](audiounitparameterid.md), [AudioUnitParameter](audiounitparameter.md).

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
