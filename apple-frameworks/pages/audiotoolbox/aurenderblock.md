> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aurenderblock](https://developer.apple.com/documentation/audiotoolbox/aurenderblock)

# AURenderBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to render the audio unit.

## Declaration

```swift
typealias AURenderBlock = (UnsafeMutablePointer<AudioUnitRenderActionFlags>, UnsafePointer<AudioTimeStamp>, AUAudioFrameCount, Int, UnsafeMutablePointer<AudioBufferList>, AURenderPullInputBlock?) -> AUAudioUnitStatus
```

<a id="Discussion"></a>

## Discussion

All realtime operations are implemented using blocks to avoid Objective-C method dispatching and the possibility of blocking.

The block returns an audio unit status result code. If instead an error is returned, the output data should be assumed to be invalid.

The block takes the following parameters:

- **actionFlags**: The pointer to the action flags.
- **timestamp**: The HAL time at which the input data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not have a defined correlation with the `AudioDevice` sample time.
- **frameCount**: The number of sample frames to render.
- **outputBusNumber**: The index of the output bus to render.
- **outputData**: The output bus’s render buffers and flags. The buffer pointers may be null on entry, in which case the block will render into memory it owns and modify the `mData` pointers to point to that memory. The block is responsible for preserving the validity of that memory until it is next called to render, or until the [deallocateRenderResources()](auaudiounit/deallocaterenderresources%28%29.md) method is called.
- **pullInputBlock**: A block that the audio unit will call in order to pull for input data. This value may be `nil` for instrument and audio generator units (which do not have input busses).

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

# AURenderBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to render the audio unit.

## Declaration

```objectivec
typedef int (^)(enum AudioUnitRenderActionFlags *, const struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *, int (^)(enum AudioUnitRenderActionFlags *, const struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *) __attribute__((nonblocking))) __attribute__((nonblocking)) AURenderBlock;
```

<a id="Discussion"></a>

## Discussion

All realtime operations are implemented using blocks to avoid Objective-C method dispatching and the possibility of blocking.

The block returns an audio unit status result code. If instead an error is returned, the output data should be assumed to be invalid.

The block takes the following parameters:

- **actionFlags**: The pointer to the action flags.
- **timestamp**: The HAL time at which the input data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not have a defined correlation with the `AudioDevice` sample time.
- **frameCount**: The number of sample frames to render.
- **outputBusNumber**: The index of the output bus to render.
- **outputData**: The output bus’s render buffers and flags. The buffer pointers may be null on entry, in which case the block will render into memory it owns and modify the `mData` pointers to point to that memory. The block is responsible for preserving the validity of that memory until it is next called to render, or until the [deallocateRenderResources](auaudiounit/deallocaterenderresources%28%29.md) method is called.
- **pullInputBlock**: A block that the audio unit will call in order to pull for input data. This value may be `nil` for instrument and audio generator units (which do not have input busses).

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
