> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_supportednumchannels](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_supportednumchannels)

# kAudioUnitProperty_SupportedNumChannels (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read-only array of channel information structures valid on the audio unit global scope.

## Declaration

```swift
var kAudioUnitProperty_SupportedNumChannels: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

The size of the array indicates the number of [AUChannelInfo](auchannelinfo.md) structures for an audio unit. Each structure describes the channel configuration for an audio input/output bus. For example, the values (2, 2) indicates a channel configuration of two input channels paired to two output channels on a bus.

A negative value for a field in an [AUChannelInfo](auchannelinfo.md) structure indicates that an input/output bus supports a variable number of channels, as follows:

- {–1, –1} indicates that a bus supports any number of input or output channels provided that the input and output channel counts match each other. This is the default configuration for effect units.
- {–1, –2} or {–2, –1} indicates that a bus supports any number of input and output channels; the channel counts on input and output can differ from each other.
- {–1, –3} indicates that a bus supports any number of input channels and up to three output channels.

A value of 0 for the `inChannels` field means that an audio unit does not have any audio input buses.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
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
- [kAudioUnitProperty_FrequencyResponse](kaudiounitproperty_frequencyresponse.md)

# kAudioUnitProperty_SupportedNumChannels (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read-only array of channel information structures valid on the audio unit global scope.

## Declaration

```objectivec
kAudioUnitProperty_SupportedNumChannels
```

<a id="Discussion"></a>

## Discussion

The size of the array indicates the number of [AUChannelInfo](auchannelinfo.md) structures for an audio unit. Each structure describes the channel configuration for an audio input/output bus. For example, the values (2, 2) indicates a channel configuration of two input channels paired to two output channels on a bus.

A negative value for a field in an [AUChannelInfo](auchannelinfo.md) structure indicates that an input/output bus supports a variable number of channels, as follows:

- {–1, –1} indicates that a bus supports any number of input or output channels provided that the input and output channel counts match each other. This is the default configuration for effect units.
- {–1, –2} or {–2, –1} indicates that a bus supports any number of input and output channels; the channel counts on input and output can differ from each other.
- {–1, –3} indicates that a bus supports any number of input channels and up to three output channels.

A value of 0 for the `inChannels` field means that an audio unit does not have any audio input buses.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
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
- [kAudioUnitProperty_FrequencyResponse](kaudiounitproperty_frequencyresponse.md)
