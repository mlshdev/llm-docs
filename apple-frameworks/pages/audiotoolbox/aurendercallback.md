> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aurendercallback](https://developer.apple.com/documentation/audiotoolbox/aurendercallback)

# AURenderCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when an audio unit requires input samples, or before and after a render operation.

## Declaration

```swift
typealias AURenderCallback = (UnsafeMutableRawPointer, UnsafeMutablePointer<AudioUnitRenderActionFlags>, UnsafePointer<AudioTimeStamp>, UInt32, UInt32, UnsafeMutablePointer<AudioBufferList>?) -> OSStatus
```

## Parameters

- `inRefCon`: Custom data that you provided when registering your callback with the audio unit.
- `ioActionFlags`: Flags used to describe more about the context of this call (pre or post in the notify case for instance).
- `inTimeStamp`: The timestamp associated with this call of audio unit render.
- `inBusNumber`: The bus number associated with this call of audio unit render.
- `inNumberFrames`: The number of sample frames that will be represented in the audio data in the provided ioData parameter.
- `ioData`: The AudioBufferList that will be used to contain the rendered or provided audio data.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAURenderCallback`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

You can use this callback function with both the audio unit render notification API (see the [AudioUnitAddRenderNotify(\_:\_:\_:)](audiounitaddrendernotify%28______%29.md) function) and the render input callback (see the `kAudioUnitProperty_SetRenderCallback` property).

As a notification listener, the system invokes this callback before and after an audio unit’s render operations.

As a render operation input callback, it is invoked when an audio unit requires input samples for the input bus that the callback is attached to.

## See Also

### Rendering the Audio

- [AudioUnitRender(\_:\_:\_:\_:\_:\_:)](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitAddRenderNotify(\_:\_:\_:)](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AudioUnitRemoveRenderNotify(\_:\_:\_:)](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.

# AURenderCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when an audio unit requires input samples, or before and after a render operation.

## Declaration

```objectivec
typedef int (*)(void *, enum AudioUnitRenderActionFlags *, const struct AudioTimeStamp *, unsigned int, unsigned int, struct AudioBufferList *) __attribute__((nonblocking)) AURenderCallback;
```

## Parameters

- `inRefCon`: Custom data that you provided when registering your callback with the audio unit.
- `ioActionFlags`: Flags used to describe more about the context of this call (pre or post in the notify case for instance).
- `inTimeStamp`: The timestamp associated with this call of audio unit render.
- `inBusNumber`: The bus number associated with this call of audio unit render.
- `inNumberFrames`: The number of sample frames that will be represented in the audio data in the provided ioData parameter.
- `ioData`: The AudioBufferList that will be used to contain the rendered or provided audio data.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAURenderCallback`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

You can use this callback function with both the audio unit render notification API (see the [AudioUnitAddRenderNotify](audiounitaddrendernotify%28______%29.md) function) and the render input callback (see the `kAudioUnitProperty_SetRenderCallback` property).

As a notification listener, the system invokes this callback before and after an audio unit’s render operations.

As a render operation input callback, it is invoked when an audio unit requires input samples for the input bus that the callback is attached to.

## See Also

### Rendering the Audio

- [AudioUnitRender](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitAddRenderNotify](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AudioUnitRemoveRenderNotify](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.
