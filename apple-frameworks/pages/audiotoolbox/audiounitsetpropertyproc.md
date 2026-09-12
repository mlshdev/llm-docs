> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitsetpropertyproc](https://developer.apple.com/documentation/audiotoolbox/audiounitsetpropertyproc)

# AudioUnitSetPropertyProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioUnitSetPropertyProc = (UnsafeMutableRawPointer, AudioUnitPropertyID, AudioUnitScope, AudioUnitElement, UnsafeRawPointer, UInt32) -> OSStatus
```

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

# AudioUnitSetPropertyProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, unsigned int, const void *, unsigned int) AudioUnitSetPropertyProc;
```

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
