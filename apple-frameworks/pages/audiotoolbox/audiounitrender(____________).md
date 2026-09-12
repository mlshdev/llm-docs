> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitrender(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitrender(_:_:_:_:_:_:))

# AudioUnitRender(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Initiates a rendering cycle for an audio unit.

## Declaration

```swift
func AudioUnitRender(_ inUnit: AudioUnit, _ ioActionFlags: UnsafeMutablePointer<AudioUnitRenderActionFlags>?, _ inTimeStamp: UnsafePointer<AudioTimeStamp>, _ inOutputBusNumber: UInt32, _ inNumberFrames: UInt32, _ ioData: UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you are asking to render.
- `ioActionFlags`: Flags to configure the rendering operation.
- `inTimeStamp`: The audio time stamp for the render operation. Each time stamp must contain a valid sample time that is incremented monotonically from the previous call to this function. That is, the next time stamp is equal to `inTimeStamp` `+` `inNumberFrames`.

  If sample time does not increase like this from one render call to the next, the audio unit interprets that as a discontinuity with the timeline it is rendering for.

  When rendering to multiple output buses, ensure that this value is the same for each bus. Using the same value allows an audio unit to determine that the rendering for each output bus is part of a single render operation.
- `inOutputBusNumber`: The output bus to render for.
- `inNumberFrames`: The number of audio sample frames to render.
- `ioData`: On input, the audio buffer list that the audio unit is to render into. On output, the audio data that was rendered by the audio unit.

  The `AudioBufferList` that you provide on input must match the topology for the current audio format for the given bus. The buffer list can be either of these two variants:

  - If the `mData` pointers are non-null, the audio unit renders its output into those buffers
  - If the `mData` pointers are null, the audio unit can provide pointers to its own buffers. In this case, the audio unit must keep those buffers valid for the duration of the calling thread’s I/O cycle.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

## See Also

### Rendering the Audio

- [AudioUnitAddRenderNotify(\_:\_:\_:)](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AudioUnitRemoveRenderNotify(\_:\_:\_:)](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.

# AudioUnitRender (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Initiates a rendering cycle for an audio unit.

## Declaration

```objectivec
extern OSStatus AudioUnitRender(AudioUnit inUnit, AudioUnitRenderActionFlags *ioActionFlags, const AudioTimeStamp *inTimeStamp, UInt32 inOutputBusNumber, UInt32 inNumberFrames, AudioBufferList *ioData);
```

## Parameters

- `inUnit`: The audio unit that you are asking to render.
- `ioActionFlags`: Flags to configure the rendering operation.
- `inTimeStamp`: The audio time stamp for the render operation. Each time stamp must contain a valid sample time that is incremented monotonically from the previous call to this function. That is, the next time stamp is equal to `inTimeStamp` `+` `inNumberFrames`.

  If sample time does not increase like this from one render call to the next, the audio unit interprets that as a discontinuity with the timeline it is rendering for.

  When rendering to multiple output buses, ensure that this value is the same for each bus. Using the same value allows an audio unit to determine that the rendering for each output bus is part of a single render operation.
- `inOutputBusNumber`: The output bus to render for.
- `inNumberFrames`: The number of audio sample frames to render.
- `ioData`: On input, the audio buffer list that the audio unit is to render into. On output, the audio data that was rendered by the audio unit.

  The `AudioBufferList` that you provide on input must match the topology for the current audio format for the given bus. The buffer list can be either of these two variants:

  - If the `mData` pointers are non-null, the audio unit renders its output into those buffers
  - If the `mData` pointers are null, the audio unit can provide pointers to its own buffers. In this case, the audio unit must keep those buffers valid for the duration of the calling thread’s I/O cycle.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

## See Also

### Rendering the Audio

- [AudioUnitAddRenderNotify](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AudioUnitRemoveRenderNotify](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.
