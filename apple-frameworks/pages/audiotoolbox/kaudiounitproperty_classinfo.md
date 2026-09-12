> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_classinfo](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_classinfo)

# kAudioUnitProperty_ClassInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes the state of an audio unit.

## Declaration

```swift
var kAudioUnitProperty_ClassInfo: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

A read/write [CFDictionary](../corefoundation/cfdictionary.md) object valid on the audio unit global scope. A macOS audio unit that supports the part scope may, in addition, support presets on that scope that apply to individual parts.

When assigning a class information dictionary to an audio unit with the [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md) function, you own the reference to the dictionary and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

When obtaining a class information dictionary from an audio unit with the [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md) function, you also own the reference to the dictionary and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
- [kAudioUnitProperty_SupportedNumChannels](kaudiounitproperty_supportednumchannels.md): A read-only array of channel information structures valid on the audio unit global scope.
- [kAudioUnitProperty_AudioChannelLayout](kaudiounitproperty_audiochannellayout.md): A read/write `AudioChannelLayout` data structure valid on the audio unit input and output scopes.
- [kAudioUnitProperty_AudioUnitMIDIProtocol](kaudiounitproperty_audiounitmidiprotocol.md)
- [kAudioUnitProperty_AUHostIdentifier](kaudiounitproperty_auhostidentifier.md)
- [kAudioUnitProperty_BypassEffect](kaudiounitproperty_bypasseffect.md): A read/write `UInt32` value, representing a Boolean value, valid on the audio unit global scope.
- [kAudioUnitProperty_ClassInfoFromDocument](kaudiounitproperty_classinfofromdocument.md): A read/write CFDictionary object, valid on the audio unit global scope.
- [kAudioUnitProperty_CocoaUI](kaudiounitproperty_cocoaui.md): A read-only `AudioUnitCocoaViewInfo` data structure valid on the audio unit global scope.
- [kAudioUnitProperty_ContextName](kaudiounitproperty_contextname.md)
- [kAudioUnitProperty_CPULoad](kaudiounitproperty_cpuload.md): A read-only `Float64` value valid on the audio unit global scope.
- [kAudioUnitProperty_DependentParameters](kaudiounitproperty_dependentparameters.md)
- [kAudioUnitProperty_ElementName](kaudiounitproperty_elementname.md): The name of the specified element.
- [kAudioUnitProperty_FactoryPresets](kaudiounitproperty_factorypresets.md): So-called *factory presets* (as opposed to user-configured presets) are ones supplied with an audio unit by the manufacturer. You choose the active preset by setting the `kAudioUnitProperty_PresentPreset` property.
- [kAudioUnitProperty_FastDispatch](kaudiounitproperty_fastdispatch.md): A read-only `void *` value valid on the audio unit global scope.
- [kAudioUnitProperty_FrequencyResponse](kaudiounitproperty_frequencyresponse.md)

# kAudioUnitProperty_ClassInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes the state of an audio unit.

## Declaration

```objectivec
kAudioUnitProperty_ClassInfo
```

<a id="Discussion"></a>

## Discussion

A read/write [CFDictionaryRef](../corefoundation/cfdictionary.md) object valid on the audio unit global scope. A macOS audio unit that supports the part scope may, in addition, support presets on that scope that apply to individual parts.

When assigning a class information dictionary to an audio unit with the [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md) function, you own the reference to the dictionary and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

When obtaining a class information dictionary from an audio unit with the [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md) function, you also own the reference to the dictionary and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

## See Also

### Properties

- [kAudioUnitProperty_ElementCount](kaudiounitproperty_elementcount.md): A read/write `UInt32` value valid on any audio unit scope. The global audio unit scope always has an element count of 1.
- [kAudioUnitProperty_SupportedNumChannels](kaudiounitproperty_supportednumchannels.md): A read-only array of channel information structures valid on the audio unit global scope.
- [kAudioUnitProperty_AudioChannelLayout](kaudiounitproperty_audiochannellayout.md): A read/write `AudioChannelLayout` data structure valid on the audio unit input and output scopes.
- [kAudioUnitProperty_AudioUnitMIDIProtocol](kaudiounitproperty_audiounitmidiprotocol.md)
- [kAudioUnitProperty_AUHostIdentifier](kaudiounitproperty_auhostidentifier.md)
- [kAudioUnitProperty_BypassEffect](kaudiounitproperty_bypasseffect.md): A read/write `UInt32` value, representing a Boolean value, valid on the audio unit global scope.
- [kAudioUnitProperty_ClassInfoFromDocument](kaudiounitproperty_classinfofromdocument.md): A read/write CFDictionary object, valid on the audio unit global scope.
- [kAudioUnitProperty_CocoaUI](kaudiounitproperty_cocoaui.md): A read-only `AudioUnitCocoaViewInfo` data structure valid on the audio unit global scope.
- [kAudioUnitProperty_ContextName](kaudiounitproperty_contextname.md)
- [kAudioUnitProperty_CPULoad](kaudiounitproperty_cpuload.md): A read-only `Float64` value valid on the audio unit global scope.
- [kAudioUnitProperty_DependentParameters](kaudiounitproperty_dependentparameters.md)
- [kAudioUnitProperty_ElementName](kaudiounitproperty_elementname.md): The name of the specified element.
- [kAudioUnitProperty_FactoryPresets](kaudiounitproperty_factorypresets.md): So-called *factory presets* (as opposed to user-configured presets) are ones supplied with an audio unit by the manufacturer. You choose the active preset by setting the `kAudioUnitProperty_PresentPreset` property.
- [kAudioUnitProperty_FastDispatch](kaudiounitproperty_fastdispatch.md): A read-only `void *` value valid on the audio unit global scope.
- [kAudioUnitProperty_FrequencyResponse](kaudiounitproperty_frequencyresponse.md)
