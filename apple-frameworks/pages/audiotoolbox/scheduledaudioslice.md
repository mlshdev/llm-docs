> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/scheduledaudioslice](https://developer.apple.com/documentation/audiotoolbox/scheduledaudioslice)

# ScheduledAudioSlice (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct ScheduledAudioSlice
```

## Topics

### Initializers

- [init(mTimeStamp:mCompletionProc:mCompletionProcUserData:mFlags:mReserved:mReserved2:mNumberFrames:mBufferList:)](scheduledaudioslice/init%28mtimestamp_mcompletionproc_mcompletionprocuserdata_mflags_mreserved_mreserved2_mnumberframes_mbufferlist_%29.md)

### Instance Properties

- [mBufferList](scheduledaudioslice/mbufferlist.md)
- [mCompletionProc](scheduledaudioslice/mcompletionproc.md)
- [mCompletionProcUserData](scheduledaudioslice/mcompletionprocuserdata.md)
- [mFlags](scheduledaudioslice/mflags.md)
- [mNumberFrames](scheduledaudioslice/mnumberframes.md)
- [mReserved](scheduledaudioslice/mreserved.md)
- [mReserved2](scheduledaudioslice/mreserved2.md)
- [mTimeStamp](scheduledaudioslice/mtimestamp.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

# ScheduledAudioSlice (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
struct ScheduledAudioSlice;
```

## Topics

### Instance Properties

- [mBufferList](scheduledaudioslice/mbufferlist.md)
- [mCompletionProc](scheduledaudioslice/mcompletionproc.md)
- [mCompletionProcUserData](scheduledaudioslice/mcompletionprocuserdata.md)
- [mFlags](scheduledaudioslice/mflags.md)
- [mNumberFrames](scheduledaudioslice/mnumberframes.md)
- [mReserved](scheduledaudioslice/mreserved.md)
- [mReserved2](scheduledaudioslice/mreserved2.md)
- [mTimeStamp](scheduledaudioslice/mtimestamp.md)

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
