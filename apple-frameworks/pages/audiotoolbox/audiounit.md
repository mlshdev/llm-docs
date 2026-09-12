> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounit](https://developer.apple.com/documentation/audiotoolbox/audiounit)

# AudioUnit (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data type for a plug-in component that provides audio processing or audio data generation.

## Declaration

```swift
typealias AudioUnit = AudioComponentInstance
```

<a id="Discussion"></a>

## Discussion

The various types of audio units are described in the [Audio Unit Types](1584142-audio_unit_types.md) enumeration. The subtypes of audio units provided by Apple are described in [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md), [Effect Audio Unit Subtypes](1584154-effect_audio_unit_subtypes.md), [Mixer Audio Unit Subtypes](1584150-mixer_audio_unit_subtypes.md), and [Input/Output Audio Unit Subtypes](1584139-input_output_audio_unit_subtypes.md).

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize(\_:)](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize(\_:)](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess(\_:\_:\_:\_:\_:)](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple(\_:\_:\_:\_:\_:\_:\_:\_:)](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset(\_:\_:\_:)](audiounitreset%28______%29.md): Resets an audio unit’s render state.

# AudioUnit (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data type for a plug-in component that provides audio processing or audio data generation.

## Declaration

```objectivec
typedef AudioComponentInstance AudioUnit;
```

<a id="Discussion"></a>

## Discussion

The various types of audio units are described in the [Audio Unit Types](1584142-audio_unit_types.md) enumeration. The subtypes of audio units provided by Apple are described in [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md), [Effect Audio Unit Subtypes](1584154-effect_audio_unit_subtypes.md), [Mixer Audio Unit Subtypes](1584150-mixer_audio_unit_subtypes.md), and [Input/Output Audio Unit Subtypes](1584139-input_output_audio_unit_subtypes.md).

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset](audiounitreset%28______%29.md): Resets an audio unit’s render state.
