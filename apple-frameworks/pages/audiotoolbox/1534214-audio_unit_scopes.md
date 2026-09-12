> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1534214-audio_unit_scopes](https://developer.apple.com/documentation/audiotoolbox/1534214-audio_unit_scopes)

# Audio Unit Scopes

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

Programmatic roles and contexts for audio unit properties.

## Topics

### Constants

- [kAudioUnitScope_Global](kaudiounitscope_global.md)
- [kAudioUnitScope_Group](kaudiounitscope_group.md): In macOS, a context specific to the control scope of audio unit parameters.
- [kAudioUnitScope_Input](kaudiounitscope_input.md): The context for audio data coming into an audio unit.
- [kAudioUnitScope_Layer](kaudiounitscope_layer.md)
- [kAudioUnitScope_LayerItem](kaudiounitscope_layeritem.md)
- [kAudioUnitScope_Note](kaudiounitscope_note.md): In macOS, a scope for changes to an individual musical note. The element identifier used with this scope is the unique note identifier returned from a started note (see the `MusicDeviceStartNote` function in `AudioUnit/MusicDevice.h`).
- [kAudioUnitScope_Output](kaudiounitscope_output.md): The context for audio data leaving an audio unit.
- [kAudioUnitScope_Part](kaudiounitscope_part.md)

## See Also

### Enumerations

- [Audio Unit Types](1584142-audio_unit_types.md): The defined types of audio processing plug-ins known as audio units.
- [Inter-App Audio Unit Types](1619501-inter-app-audio-unit-types.md)
- [Audio Unit Manufacturer Identifier](1584143-audio_unit_manufacturer_identifi.md): The Apple audio unit manufacturer code.
- [Audio Unit Output Subtypes](1584148-audio-unit-output-subtypes.md)
- [I/O Audio Unit Subtypes](1619485-i-o-audio-unit-subtypes.md)
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Reserved Audio Unit Clump Identifier](1533986-reserved_audio_unit_clump_identi.md): Reserved for system use.
- [Offline Audio Unit Properties](1534054-offline_audio_unit_properties.md): Properties for audio units that perform offline processing—that is, processing in a nonplayback, nonrealtime mode.
- [MIDI Audio Unit Parameters](1389613-midi_audio_unit_parameters.md): Parameters for instrument units.
- [General Audio Unit Function Selectors](1584140-general_audio_unit_function_sele.md): General audio unit component selectors that correspond to functions in the audio unit API.
- [Generator Audio Unit Subtypes](1619493-generator_audio_unit_subtypes.md): Audio units that serve as sound sources.
- [Input/Output Audio Unit Subtypes](1584139-input_output_audio_unit_subtypes.md): Input/output audio unit subtypes for audio units provided by Apple.
- [Audio Unit Panner Subtypes](1584151-audio-unit-panner-subtypes.md)
- [Audio Unit Player Subtypes](1584155-audio-unit-player-subtypes.md)
- [Audio Unit Pitch Subtypes](1584152-audio-unit-pitch-subtypes.md)
