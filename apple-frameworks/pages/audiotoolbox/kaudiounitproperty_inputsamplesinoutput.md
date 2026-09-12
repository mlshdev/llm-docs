> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_inputsamplesinoutput](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_inputsamplesinoutput)

# kAudioUnitProperty_InputSamplesInOutput (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read/write AUInputSamplesInOutputCallbackStruct struct, valid on the audio unit global scope.

## Declaration

```swift
var kAudioUnitProperty_InputSamplesInOutput: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

An audio unit calls this callback at the end of its render call. The audio unit supplies the following information:

- outputTime - The timestamp passed in to the audio unit’s render call. This timestamp represents the time of the first output sample.
- inputSample - The sample number of the first input sample that is present in the output audio.
- numInputSamples - The number of input samples that were used and are present in the output audio.

This property allows a host application to determine which input samples correspond to a sample in the output buffer. It is useful only for audio units that do time-stretching, such as the macOS AUVaripseed and AUTimePitch units, where the relationship between input and output samples is non-trivial. For these units, the range of input samples that correspond to an output buffer typically differs from the range of input samples that were pulled for that render call. This difference arises because of internal buffering, processing latency, and other factors.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
- [kAudioUnitProperty_SupportedNumChannels](kaudiounitproperty_supportednumchannels.md): A read-only array of channel information structures valid on the audio unit global scope.
- [kAudioUnitProperty_AudioChannelLayout](kaudiounitproperty_audiochannellayout.md): A read/write `AudioChannelLayout` data structure valid on the audio unit input and output scopes.
- [kAudioUnitProperty_AudioUnitMIDIProtocol](kaudiounitproperty_audiounitmidiprotocol.md)
- [kAudioUnitProperty_AUHostIdentifier](kaudiounitproperty_auhostidentifier.md)
- [kAudioUnitProperty_BypassEffect](kaudiounitproperty_bypasseffect.md): A read/write `UInt32` value, representing a Boolean value, valid on the audio unit global scope.
- [kAudioUnitProperty_ClassInfo](kaudiounitproperty_classinfo.md): Describes the state of an audio unit.
- [kAudioUnitProperty_ClassInfoFromDocument](kaudiounitproperty_classinfofromdocument.md): A read/write CFDictionary object, valid on the audio unit global scope.
- [kAudioUnitProperty_CocoaUI](kaudiounitproperty_cocoaui.md): A read-only `AudioUnitCocoaViewInfo` data structure valid on the audio unit global scope.
- [kAudioUnitProperty_ContextName](kaudiounitproperty_contextname.md)
- [kAudioUnitProperty_CPULoad](kaudiounitproperty_cpuload.md): A read-only `Float64` value valid on the audio unit global scope.
- [kAudioUnitProperty_DependentParameters](kaudiounitproperty_dependentparameters.md)
- [kAudioUnitProperty_ElementName](kaudiounitproperty_elementname.md): The name of the specified element.
- [kAudioUnitProperty_FactoryPresets](kaudiounitproperty_factorypresets.md): So-called *factory presets* (as opposed to user-configured presets) are ones supplied with an audio unit by the manufacturer. You choose the active preset by setting the `kAudioUnitProperty_PresentPreset` property.
- [kAudioUnitProperty_FastDispatch](kaudiounitproperty_fastdispatch.md): A read-only `void *` value valid on the audio unit global scope.

# kAudioUnitProperty_InputSamplesInOutput (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read/write AUInputSamplesInOutputCallbackStruct struct, valid on the audio unit global scope.

## Declaration

```objectivec
kAudioUnitProperty_InputSamplesInOutput
```

<a id="Discussion"></a>

## Discussion

An audio unit calls this callback at the end of its render call. The audio unit supplies the following information:

- outputTime - The timestamp passed in to the audio unit’s render call. This timestamp represents the time of the first output sample.
- inputSample - The sample number of the first input sample that is present in the output audio.
- numInputSamples - The number of input samples that were used and are present in the output audio.

This property allows a host application to determine which input samples correspond to a sample in the output buffer. It is useful only for audio units that do time-stretching, such as the macOS AUVaripseed and AUTimePitch units, where the relationship between input and output samples is non-trivial. For these units, the range of input samples that correspond to an output buffer typically differs from the range of input samples that were pulled for that render call. This difference arises because of internal buffering, processing latency, and other factors.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
- [kAudioUnitProperty_SupportedNumChannels](kaudiounitproperty_supportednumchannels.md): A read-only array of channel information structures valid on the audio unit global scope.
- [kAudioUnitProperty_AudioChannelLayout](kaudiounitproperty_audiochannellayout.md): A read/write `AudioChannelLayout` data structure valid on the audio unit input and output scopes.
- [kAudioUnitProperty_AudioUnitMIDIProtocol](kaudiounitproperty_audiounitmidiprotocol.md)
- [kAudioUnitProperty_AUHostIdentifier](kaudiounitproperty_auhostidentifier.md)
- [kAudioUnitProperty_BypassEffect](kaudiounitproperty_bypasseffect.md): A read/write `UInt32` value, representing a Boolean value, valid on the audio unit global scope.
- [kAudioUnitProperty_ClassInfo](kaudiounitproperty_classinfo.md): Describes the state of an audio unit.
- [kAudioUnitProperty_ClassInfoFromDocument](kaudiounitproperty_classinfofromdocument.md): A read/write CFDictionary object, valid on the audio unit global scope.
- [kAudioUnitProperty_CocoaUI](kaudiounitproperty_cocoaui.md): A read-only `AudioUnitCocoaViewInfo` data structure valid on the audio unit global scope.
- [kAudioUnitProperty_ContextName](kaudiounitproperty_contextname.md)
- [kAudioUnitProperty_CPULoad](kaudiounitproperty_cpuload.md): A read-only `Float64` value valid on the audio unit global scope.
- [kAudioUnitProperty_DependentParameters](kaudiounitproperty_dependentparameters.md)
- [kAudioUnitProperty_ElementName](kaudiounitproperty_elementname.md): The name of the specified element.
- [kAudioUnitProperty_FactoryPresets](kaudiounitproperty_factorypresets.md): So-called *factory presets* (as opposed to user-configured presets) are ones supplied with an audio unit by the manufacturer. You choose the active preset by setting the `kAudioUnitProperty_PresentPreset` property.
- [kAudioUnitProperty_FastDispatch](kaudiounitproperty_fastdispatch.md): A read-only `void *` value valid on the audio unit global scope.
