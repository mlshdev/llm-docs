> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/scheduledaudiofileregion](https://developer.apple.com/documentation/audiotoolbox/scheduledaudiofileregion)

# ScheduledAudioFileRegion (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct ScheduledAudioFileRegion
```

## Topics

### Initializers

- [init(mTimeStamp:mCompletionProc:mCompletionProcUserData:mAudioFile:mLoopCount:mStartFrame:mFramesToPlay:)](scheduledaudiofileregion/init%28mtimestamp_mcompletionproc_mcompletionprocuserdata_maudiofile_mloopcount_mstartframe_mframestoplay_%29.md)

### Instance Properties

- [mAudioFile](scheduledaudiofileregion/maudiofile.md): Must be a valid and already-open audio file object (of type `AudioFileID`), as declared in `AudioToolbox/AudioFile.h`.
- [mCompletionProc](scheduledaudiofileregion/mcompletionproc.md): may be `NULL`
- [mCompletionProcUserData](scheduledaudiofileregion/mcompletionprocuserdata.md)
- [mFramesToPlay](scheduledaudiofileregion/mframestoplay.md): The number of frames to play.
- [mLoopCount](scheduledaudiofileregion/mloopcount.md): `0` = do not loop
- [mStartFrame](scheduledaudiofileregion/mstartframe.md): The frame offset into the file.
- [mTimeStamp](scheduledaudiofileregion/mtimestamp.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Audio Unit Types

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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.

# ScheduledAudioFileRegion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
struct ScheduledAudioFileRegion;
```

## Topics

### Instance Properties

- [mAudioFile](scheduledaudiofileregion/maudiofile.md): Must be a valid and already-open audio file object (of type `AudioFileID`), as declared in `AudioToolbox/AudioFile.h`.
- [mCompletionProc](scheduledaudiofileregion/mcompletionproc.md): may be `NULL`
- [mCompletionProcUserData](scheduledaudiofileregion/mcompletionprocuserdata.md)
- [mFramesToPlay](scheduledaudiofileregion/mframestoplay.md): The number of frames to play.
- [mLoopCount](scheduledaudiofileregion/mloopcount.md): `0` = do not loop
- [mStartFrame](scheduledaudiofileregion/mstartframe.md): The frame offset into the file.
- [mTimeStamp](scheduledaudiofileregion/mtimestamp.md)

## See Also

### Audio Unit Types

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
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
