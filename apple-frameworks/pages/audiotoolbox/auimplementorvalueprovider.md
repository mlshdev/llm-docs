> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auimplementorvalueprovider](https://developer.apple.com/documentation/audiotoolbox/auimplementorvalueprovider)

# AUImplementorValueProvider (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to fetch a parameter’s current value from the audio unit implementation.

## Declaration

```swift
typealias AUImplementorValueProvider = (AUParameter) -> AUValue
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block returns the current value of the parameter.

The block takes the following parameters:

- **param**: The parameter to query.

## See Also

### Related Documentation

- [implementorValueProvider](auparameternode/implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.

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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

# AUImplementorValueProvider (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to fetch a parameter’s current value from the audio unit implementation.

## Declaration

```objectivec
typedef float (^)(AUParameter *) AUImplementorValueProvider;
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block returns the current value of the parameter.

The block takes the following parameters:

- **param**: The parameter to query.

## See Also

### Related Documentation

- [implementorValueProvider](auparameternode/implementorvalueprovider.md): The callback for refreshing known stale values in a parameter tree.

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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
