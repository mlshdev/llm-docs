> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitremoverendernotify(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitremoverendernotify(_:_:_:))

# AudioUnitRemoveRenderNotify(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Unregisters a previously-registered render listener callback function.

## Declaration

```swift
func AudioUnitRemoveRenderNotify(_ inUnit: AudioUnit, _ inProc: AURenderCallback, _ inProcUserData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you no longer want to receive render notifications from.
- `inProc`: The callback function that you previously registered and are now unregistering.
- `inProcUserData`: The custom data that you provided when registering the callback function.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Rendering the Audio

- [AudioUnitRender(\_:\_:\_:\_:\_:\_:)](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitAddRenderNotify(\_:\_:\_:)](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.

# AudioUnitRemoveRenderNotify (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Unregisters a previously-registered render listener callback function.

## Declaration

```objectivec
extern OSStatus AudioUnitRemoveRenderNotify(AudioUnit inUnit, AURenderCallback inProc, void *inProcUserData);
```

## Parameters

- `inUnit`: The audio unit that you no longer want to receive render notifications from.
- `inProc`: The callback function that you previously registered and are now unregistering.
- `inProcUserData`: The custom data that you provided when registering the callback function.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Rendering the Audio

- [AudioUnitRender](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitAddRenderNotify](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.
