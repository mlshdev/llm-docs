> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_audiochannellayout](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_audiochannellayout)

# kAudioUnitProperty_AudioChannelLayout (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read/write `AudioChannelLayout` data structure valid on the audio unit input and output scopes.

## Declaration

```swift
var kAudioUnitProperty_AudioChannelLayout: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

The channel order, within a given audio stream, for a specified audio unit element and scope. The number of channels in the layout must match the number of channels set for the scope-element. Each input and output bus in an audio unit can have one instance of this property.

Some audio units require this property. For example, the 3DMixer unit must implement this property on its output bus. If a host application attempts to clear the value of this property on a bus that requires a valid value, the audio unit will return a kAudioUnitErr_InvalidPropertyValue error.

Input and output buses can be in one of three states in regard to Audio channel layout:

1. Implemented and set
2. Implemented but not set
3. Unimplemented

Requesting the value of this property when it is implemented but not set results in a [kAudioUnitErr_PropertyNotInUse](kaudiouniterr_propertynotinuse.md) error.

Use the `kAudioUnitProperty_AudioChannelLayout` property whenever channel layout is relevant.

For related information, refer to the descriptions for the `ScheduledAudioFileRegion` and [AudioOutputUnitStartAtTimeParams](audiooutputunitstartattimeparams.md) data structures.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
- [kAudioUnitProperty_SupportedNumChannels](kaudiounitproperty_supportednumchannels.md): A read-only array of channel information structures valid on the audio unit global scope.
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

# kAudioUnitProperty_AudioChannelLayout (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read/write `AudioChannelLayout` data structure valid on the audio unit input and output scopes.

## Declaration

```objectivec
kAudioUnitProperty_AudioChannelLayout
```

<a id="Discussion"></a>

## Discussion

The channel order, within a given audio stream, for a specified audio unit element and scope. The number of channels in the layout must match the number of channels set for the scope-element. Each input and output bus in an audio unit can have one instance of this property.

Some audio units require this property. For example, the 3DMixer unit must implement this property on its output bus. If a host application attempts to clear the value of this property on a bus that requires a valid value, the audio unit will return a kAudioUnitErr_InvalidPropertyValue error.

Input and output buses can be in one of three states in regard to Audio channel layout:

1. Implemented and set
2. Implemented but not set
3. Unimplemented

Requesting the value of this property when it is implemented but not set results in a [kAudioUnitErr_PropertyNotInUse](kaudiouniterr_propertynotinuse.md) error.

Use the `kAudioUnitProperty_AudioChannelLayout` property whenever channel layout is relevant.

For related information, refer to the descriptions for the `ScheduledAudioFileRegion` and [AudioOutputUnitStartAtTimeParams](audiooutputunitstartattimeparams.md) data structures.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
- [kAudioUnitProperty_SupportedNumChannels](kaudiounitproperty_supportednumchannels.md): A read-only array of channel information structures valid on the audio unit global scope.
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
