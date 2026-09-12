> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/midichannelnumber](https://developer.apple.com/documentation/audiotoolbox/midichannelnumber)

# MIDIChannelNumber (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

MIDI Channel, 0~15 (channels 1 through 16, respectively).

## Declaration

```swift
typealias MIDIChannelNumber = UInt8
```

<a id="discussion"></a>

## Discussion

Per the MIDI-CI specification, this is always a single nibble, 0x0~0xF.

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

# MIDIChannelNumber (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

MIDI Channel, 0~15 (channels 1 through 16, respectively).

## Declaration

```objectivec
typedef uint8_t MIDIChannelNumber;
```

<a id="discussion"></a>

## Discussion

Per the MIDI-CI specification, this is always a single nibble, 0x0~0xF.

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
