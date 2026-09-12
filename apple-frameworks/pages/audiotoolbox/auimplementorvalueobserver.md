> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auimplementorvalueobserver](https://developer.apple.com/documentation/audiotoolbox/auimplementorvalueobserver)

# AUImplementorValueObserver (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to notify the audio unit implementation of changes to a parameter value.

## Declaration

```swift
typealias AUImplementorValueObserver = (AUParameter, AUValue) -> Void
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block takes the following parameters:

- **param**: The parameter that was changed.
- **value**: The current value of the parameter.

## See Also

### Related Documentation

- [implementorValueObserver](auparameternode/implementorvalueobserver.md): The callback for parameter value changes.

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
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

# AUImplementorValueObserver (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block called to notify the audio unit implementation of changes to a parameter value.

## Declaration

```objectivec
typedef void (^)(AUParameter *, float) AUImplementorValueObserver;
```

<a id="Discussion"></a>

## Discussion

This block is only of interest to audio unit subclasses.

The block takes the following parameters:

- **param**: The parameter that was changed.
- **value**: The current value of the parameter.

## See Also

### Related Documentation

- [implementorValueObserver](auparameternode/implementorvalueobserver.md): The callback for parameter value changes.

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
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
