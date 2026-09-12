> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aurenderpullinputblock](https://developer.apple.com/documentation/audiotoolbox/aurenderpullinputblock)

# AURenderPullInputBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to supply audio input to a render block.

## Declaration

```swift
typealias AURenderPullInputBlock = (UnsafeMutablePointer<AudioUnitRenderActionFlags>, UnsafePointer<AudioTimeStamp>, AUAudioFrameCount, Int, UnsafeMutablePointer<AudioBufferList>) -> AUAudioUnitStatus
```

<a id="Discussion"></a>

## Discussion

The caller must supply valid buffers in the input data’s `mBuffers'` `mData` and `mDataByteSize` fields (`mDataByteSize` must be consistent with `frameCount`). This block may provide input in those specified buffers, or it may replace the `mData` pointers with pointers to memory which it owns and guarantees will remain valid until the next render cycle.

The block returns an audio unit status result code. If instead an error is returned, the input data should be assumed to be invalid.

The block takes the following parameters:

- **actionFlags**: The pointer to the action flags.
- **timestamp**: The HAL time at which the input data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not be valid.
- **frameCount**: The number of input sample frames requested.
- **inputBusNumber**: The index of the input bus being pulled.
- **inputData**: The input audio data.

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

# AURenderPullInputBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to supply audio input to a render block.

## Declaration

```objectivec
typedef int (^)(enum AudioUnitRenderActionFlags *, const struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *) __attribute__((nonblocking)) AURenderPullInputBlock;
```

<a id="Discussion"></a>

## Discussion

The caller must supply valid buffers in the input data’s `mBuffers'` `mData` and `mDataByteSize` fields (`mDataByteSize` must be consistent with `frameCount`). This block may provide input in those specified buffers, or it may replace the `mData` pointers with pointers to memory which it owns and guarantees will remain valid until the next render cycle.

The block returns an audio unit status result code. If instead an error is returned, the input data should be assumed to be invalid.

The block takes the following parameters:

- **actionFlags**: The pointer to the action flags.
- **timestamp**: The HAL time at which the input data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not be valid.
- **frameCount**: The number of input sample frames requested.
- **inputBusNumber**: The index of the input bus being pulled.
- **inputData**: The input audio data.

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
