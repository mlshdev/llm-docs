> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auinternalrenderblock](https://developer.apple.com/documentation/audiotoolbox/auinternalrenderblock)

# AUInternalRenderBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to render the audio unit.

## Declaration

```swift
typealias AUInternalRenderBlock = (UnsafeMutablePointer<AudioUnitRenderActionFlags>, UnsafePointer<AudioTimeStamp>, AUAudioFrameCount, Int, UnsafeMutablePointer<AudioBufferList>, UnsafePointer<AURenderEvent>?, AURenderPullInputBlock?) -> AUAudioUnitStatus
```

<a id="Discussion"></a>

## Discussion

This block is implemented in subclasses and should not be used by hosts.

The block returns an audio unit status result code. If instead an error is returned, the output data should be assumed to be invalid.

The block takes the following parameters:

- **actionFlags**: The pointer to the action flags.
- **timestamp**: The HAL time at which the input data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not have a defined correlation with the `AudioDevice` sample time.
- **frameCount**: The number of sample frames to render.
- **outputBusNumber**: The index of the output bus to render.
- **outputData**: The output bus’s render buffers and flags. The buffer pointers may be null on entry, in which case the block will render into memory it owns and modify the `mData` pointers to point to that memory. The block is responsible for preserving the validity of that memory until it is next called to render, or until the [deallocateRenderResources()](auaudiounit/deallocaterenderresources%28%29.md) method is called.
- **realtimeEventListHead**: A time-ordered linked list of the events to be rendered during this cycle. A ramp event will only appear in the render cycle during which it starts; the audio unit is responsible for maintaining continued ramping state for any further render cycles.
- **pullInputBlock**: A block that the audio unit will call in order to pull for input data. This value may be `nil` for instrument and audio generator units (which do not have input busses).

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass(\_:as:name:version:)](auaudiounit/registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChange(to:for:)](auaudiounit/shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated(\_:)](auaudiounit/setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](auaudiounit/renderresourcesallocated.md) property.
- [internalRenderBlock](auaudiounit/internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [midiOutputBufferSizeHint](auaudiounit/midioutputbuffersizehint.md)

# AUInternalRenderBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block to render the audio unit.

## Declaration

```objectivec
typedef int (^)(enum AudioUnitRenderActionFlags *, const struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *, const union AURenderEvent *, int (^)(enum AudioUnitRenderActionFlags *, const struct AudioTimeStamp *, unsigned int, long, struct AudioBufferList *) __attribute__((nonblocking))) __attribute__((nonblocking)) AUInternalRenderBlock;
```

<a id="Discussion"></a>

## Discussion

This block is implemented in subclasses and should not be used by hosts.

The block returns an audio unit status result code. If instead an error is returned, the output data should be assumed to be invalid.

The block takes the following parameters:

- **actionFlags**: The pointer to the action flags.
- **timestamp**: The HAL time at which the input data will be rendered. If there is a sample rate conversion or time compression/expansion downstream, the sample time will not have a defined correlation with the `AudioDevice` sample time.
- **frameCount**: The number of sample frames to render.
- **outputBusNumber**: The index of the output bus to render.
- **outputData**: The output bus’s render buffers and flags. The buffer pointers may be null on entry, in which case the block will render into memory it owns and modify the `mData` pointers to point to that memory. The block is responsible for preserving the validity of that memory until it is next called to render, or until the [deallocateRenderResources](auaudiounit/deallocaterenderresources%28%29.md) method is called.
- **realtimeEventListHead**: A time-ordered linked list of the events to be rendered during this cycle. A ramp event will only appear in the render cycle during which it starts; the audio unit is responsible for maintaining continued ramping state for any further render cycles.
- **pullInputBlock**: A block that the audio unit will call in order to pull for input data. This value may be `nil` for instrument and audio generator units (which do not have input busses).

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass:asComponentDescription:name:version:](auaudiounit/registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChangeToFormat:forBus:](auaudiounit/shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated:](auaudiounit/setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](auaudiounit/renderresourcesallocated.md) property.
- [internalRenderBlock](auaudiounit/internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [MIDIOutputBufferSizeHint](auaudiounit/midioutputbuffersizehint.md)
