> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitaddrendernotify(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitaddrendernotify(_:_:_:))

# AudioUnitAddRenderNotify(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Registers a callback to receive audio unit render notifications.

## Declaration

```swift
func AudioUnitAddRenderNotify(_ inUnit: AudioUnit, _ inProc: AURenderCallback, _ inProcUserData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to receive render notifications from.
- `inProc`: The callback that you are registering.
- `inProcUserData`: Custom data that you want to be sent to your callback. Use this, for example, to identify the render listener.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The registered callback function is called both before the audio unit performs its render operations (when the render flag’s pre-render bit is set) and after the audio unit has completed its render operation (the render flag’s post-render bit is set).

The `inProc` and `inProcUserData` parameters are treated as a two-part identifier. To remove a render listener, you must pass both these values to the [AudioUnitRemoveRenderNotify(\_:\_:\_:)](audiounitremoverendernotify%28______%29.md) function.

## See Also

### Rendering the Audio

- [AudioUnitRender(\_:\_:\_:\_:\_:\_:)](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitRemoveRenderNotify(\_:\_:\_:)](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.

# AudioUnitAddRenderNotify (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Registers a callback to receive audio unit render notifications.

## Declaration

```objectivec
extern OSStatus AudioUnitAddRenderNotify(AudioUnit inUnit, AURenderCallback inProc, void *inProcUserData);
```

## Parameters

- `inUnit`: The audio unit that you want to receive render notifications from.
- `inProc`: The callback that you are registering.
- `inProcUserData`: Custom data that you want to be sent to your callback. Use this, for example, to identify the render listener.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The registered callback function is called both before the audio unit performs its render operations (when the render flag’s pre-render bit is set) and after the audio unit has completed its render operation (the render flag’s post-render bit is set).

The `inProc` and `inProcUserData` parameters are treated as a two-part identifier. To remove a render listener, you must pass both these values to the [AudioUnitRemoveRenderNotify](audiounitremoverendernotify%28______%29.md) function.

## See Also

### Rendering the Audio

- [AudioUnitRender](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitRemoveRenderNotify](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.
