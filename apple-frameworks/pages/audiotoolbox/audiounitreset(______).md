> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitreset(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitreset(_:_:_:))

# AudioUnitReset(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio unit’s render state.

## Declaration

```swift
func AudioUnitReset(_ inUnit: AudioUnit, _ inScope: AudioUnitScope, _ inElement: AudioUnitElement) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit whose render state you are resetting.
- `inScope`: The audio unit scope, typically set to `kAudioUnitScope_Global`.
- `inElement`: The audio unit element, typically set to `0`.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

This function resets the render state of an audio unit. For example, with a delay or reverb type of audio unit, it clears all of the delay lines maintained within the audio unit. Typically, you call this function when an audio unit was previously rendering and was taken out of the render chain (for example, if the track it is in gets muted) and is now being added back in (for example, unmuted). Your application should reset the audio unit before adding it back to the render chain so that it does not produce audio from its delay lines that is no longer valid.

This function clears memory. It does not allocate or free memory resources.

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize(\_:)](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize(\_:)](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess(\_:\_:\_:\_:\_:)](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple(\_:\_:\_:\_:\_:\_:\_:\_:)](audiounitprocessmultiple%28________________%29.md)
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.

# AudioUnitReset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Resets an audio unit’s render state.

## Declaration

```objectivec
extern OSStatus AudioUnitReset(AudioUnit inUnit, AudioUnitScope inScope, AudioUnitElement inElement);
```

## Parameters

- `inUnit`: The audio unit whose render state you are resetting.
- `inScope`: The audio unit scope, typically set to `kAudioUnitScope_Global`.
- `inElement`: The audio unit element, typically set to `0`.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

This function resets the render state of an audio unit. For example, with a delay or reverb type of audio unit, it clears all of the delay lines maintained within the audio unit. Typically, you call this function when an audio unit was previously rendering and was taken out of the render chain (for example, if the track it is in gets muted) and is now being added back in (for example, unmuted). Your application should reset the audio unit before adding it back to the render chain so that it does not produce audio from its delay lines that is no longer valid.

This function clears memory. It does not allocate or free memory resources.

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple](audiounitprocessmultiple%28________________%29.md)
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.
