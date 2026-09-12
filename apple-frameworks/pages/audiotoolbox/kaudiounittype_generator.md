> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounittype_generator](https://developer.apple.com/documentation/audiotoolbox/kaudiounittype_generator)

# kAudioUnitType_Generator (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A generator unit provides audio output but has no audio input. This audio unit type is appropriate for a tone generator. Unlike an instrument unit, a generator unit does not have a control input.

## Declaration

```swift
var kAudioUnitType_Generator: UInt32 { get }
```

## See Also

### Types

- [kAudioUnitType_Output](kaudiounittype_output.md): An output unit provides input, output, or both input and output simultaneously. It can be used as the head of an audio unit processing graph.
- [kAudioUnitType_MusicDevice](kaudiounittype_musicdevice.md): An instrument unit can be used as a software musical instrument, such as a sampler or synthesizer. It responds to MIDI (Musical Instrument Digital Interface) control signals and can create notes.
- [kAudioUnitType_MusicEffect](kaudiounittype_musiceffect.md): An effect unit that can respond to MIDI control messages, typically through a mapping of MIDI messages to parameters of the audio unit’s DSP algorithm.
- [kAudioUnitType_FormatConverter](kaudiounittype_formatconverter.md)
- [kAudioUnitType_Effect](kaudiounittype_effect.md)
- [kAudioUnitType_Mixer](kaudiounittype_mixer.md): A mixer unit takes a number of input channels and mixes them to provide one or more output channels.
- [kAudioUnitType_Panner](kaudiounittype_panner.md)
- [kAudioUnitType_OfflineEffect](kaudiounittype_offlineeffect.md): An offline effect unit provides digital signal processing of a sort that cannot proceed in realtime. For example, level normalization requires examination of an entire sound, beginning to end, before the normalization factor can be calculated. As such, offline effect units also have a notion of a priming stage that can be performed before the actual rendering/processing phase is executed.
- [kAudioUnitType_MIDIProcessor](kaudiounittype_midiprocessor.md)
- [kAudioUnitType_SpeechSynthesizer](kaudiounittype_speechsynthesizer.md)
- [kAudioUnitType_HeadTrackingBinauralRenderer](kaudiounittype_headtrackingbinauralrenderer.md)

# kAudioUnitType_Generator (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A generator unit provides audio output but has no audio input. This audio unit type is appropriate for a tone generator. Unlike an instrument unit, a generator unit does not have a control input.

## Declaration

```objectivec
kAudioUnitType_Generator
```

## See Also

### Types

- [kAudioUnitType_Output](kaudiounittype_output.md): An output unit provides input, output, or both input and output simultaneously. It can be used as the head of an audio unit processing graph.
- [kAudioUnitType_MusicDevice](kaudiounittype_musicdevice.md): An instrument unit can be used as a software musical instrument, such as a sampler or synthesizer. It responds to MIDI (Musical Instrument Digital Interface) control signals and can create notes.
- [kAudioUnitType_MusicEffect](kaudiounittype_musiceffect.md): An effect unit that can respond to MIDI control messages, typically through a mapping of MIDI messages to parameters of the audio unit’s DSP algorithm.
- [kAudioUnitType_FormatConverter](kaudiounittype_formatconverter.md)
- [kAudioUnitType_Effect](kaudiounittype_effect.md)
- [kAudioUnitType_Mixer](kaudiounittype_mixer.md): A mixer unit takes a number of input channels and mixes them to provide one or more output channels.
- [kAudioUnitType_Panner](kaudiounittype_panner.md)
- [kAudioUnitType_OfflineEffect](kaudiounittype_offlineeffect.md): An offline effect unit provides digital signal processing of a sort that cannot proceed in realtime. For example, level normalization requires examination of an entire sound, beginning to end, before the normalization factor can be calculated. As such, offline effect units also have a notion of a priming stage that can be performed before the actual rendering/processing phase is executed.
- [kAudioUnitType_MIDIProcessor](kaudiounittype_midiprocessor.md)
- [kAudioUnitType_SpeechSynthesizer](kaudiounittype_speechsynthesizer.md)
- [kAudioUnitType_HeadTrackingBinauralRenderer](kaudiounittype_headtrackingbinauralrenderer.md)
