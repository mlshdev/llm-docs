> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitinitialize(_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitinitialize(_:))

# AudioUnitInitialize(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Initializes an audio unit

## Declaration

```swift
func AudioUnitInitialize(_ inUnit: AudioUnit) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit to initialize.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

On successful initialization, the audio formats for input and output are valid and the audio unit is ready to render. During initialization, an audio unit allocates memory according to the maximum number of audio frames it can produce in response to a single render call.

Usually, the state of an audio unit (such as its I/O formats and memory allocations) cannot be changed while an audio unit is initialized.

## See Also

### Initializing the Audio Unit

- [AudioUnitUninitialize(\_:)](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess(\_:\_:\_:\_:\_:)](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple(\_:\_:\_:\_:\_:\_:\_:\_:)](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset(\_:\_:\_:)](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.

# AudioUnitInitialize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Initializes an audio unit

## Declaration

```objectivec
extern OSStatus AudioUnitInitialize(AudioUnit inUnit);
```

## Parameters

- `inUnit`: The audio unit to initialize.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

On successful initialization, the audio formats for input and output are valid and the audio unit is ready to render. During initialization, an audio unit allocates memory according to the maximum number of audio frames it can produce in response to a single render call.

Usually, the state of an audio unit (such as its I/O formats and memory allocations) cannot be changed while an audio unit is initialized.

## See Also

### Initializing the Audio Unit

- [AudioUnitUninitialize](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.
