> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameterobserver](https://developer.apple.com/documentation/audiotoolbox/auparameterobserver)

# AUParameterObserver (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called after the value of a parameter changes.

## Declaration

```swift
typealias AUParameterObserver = (AUParameterAddress, AUValue) -> Void
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **address**: The address of the parameter.
- **value**: The current value of the parameter.

## See Also

### Related Documentation

- [token(byAddingParameterObserver:)](auparameternode/token%28byaddingparameterobserver_%29.md): Adds an observer for a single parameter or all parameters in a group.

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

# AUParameterObserver (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called after the value of a parameter changes.

## Declaration

```objectivec
typedef void (^)(unsigned long long, float) AUParameterObserver;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **address**: The address of the parameter.
- **value**: The current value of the parameter.

## See Also

### Related Documentation

- [tokenByAddingParameterObserver:](auparameternode/token%28byaddingparameterobserver_%29.md): Adds an observer for a single parameter or all parameters in a group.

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
