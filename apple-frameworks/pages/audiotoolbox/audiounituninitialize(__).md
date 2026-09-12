> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounituninitialize(_:)](https://developer.apple.com/documentation/audiotoolbox/audiounituninitialize(_:))

# AudioUnitUninitialize(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Uninitializes an audio unit.

## Declaration

```swift
func AudioUnitUninitialize(_ inUnit: AudioUnit) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to uninitialize.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Before you change an initialize audio unit’s processing characteristics, such as its input or output audio data format or its sample rate, you must first uninitialize it. Calling this function deallocates the audio unit’s resources.

After calling this function, you can reconfigure the audio unit and then call [AudioUnitInitialize(\_:)](audiounitinitialize%28__%29.md) to reinitialize it.

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize(\_:)](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitProcess(\_:\_:\_:\_:\_:)](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple(\_:\_:\_:\_:\_:\_:\_:\_:)](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset(\_:\_:\_:)](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.

# AudioUnitUninitialize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Uninitializes an audio unit.

## Declaration

```objectivec
extern OSStatus AudioUnitUninitialize(AudioUnit inUnit);
```

## Parameters

- `inUnit`: The audio unit that you want to uninitialize.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Before you change an initialize audio unit’s processing characteristics, such as its input or output audio data format or its sample rate, you must first uninitialize it. Calling this function deallocates the audio unit’s resources.

After calling this function, you can reconfigure the audio unit and then call [AudioUnitInitialize](audiounitinitialize%28__%29.md) to reinitialize it.

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitProcess](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.
