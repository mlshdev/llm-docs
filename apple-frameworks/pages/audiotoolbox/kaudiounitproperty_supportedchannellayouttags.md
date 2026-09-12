> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_supportedchannellayouttags](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_supportedchannellayouttags)

# kAudioUnitProperty_SupportedChannelLayoutTags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read-only array on `AudioChannelLayoutTag` structures, valid on the audio unit input and output scopes.

## Declaration

```swift
var kAudioUnitProperty_SupportedChannelLayoutTags: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

Used with GetProperty to ascertain what an audio unit understands about laying out of channel orders. This will typically return one or more of the specified layout tags.

When a specific set of layouts are returned, the client then uses the kAudioUnitProperty_AudioChannelLayout property (with one of those layout tags specified) to set the unit to use that layout. In this case the client (and the audio unit when reporting its AudioChannelLayout) is only expected to have set an AudioChannelLayout which only sets the layout tag as the valid field.

Some audio units may return the tag `kAudioChannelLayoutTag_UseChannelDescriptions`. This indicates a custom channel map.

In this case, the host then can look at supported number of channels on that scope (using the kAudioUnitProperty_SupportedNumChannels), and supply an AudioChannelLayout with the kAudioUnitProperty_AudioChannelLayout property to specify the layout, number of channels and location of each of those channels. This custom channel map MUST have a channel valence that is supported by the Audio Unit.

The UseChannelBitmap field is NOT used within the context of the AudioUnit.

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

# kAudioUnitProperty_SupportedChannelLayoutTags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A read-only array on `AudioChannelLayoutTag` structures, valid on the audio unit input and output scopes.

## Declaration

```objectivec
kAudioUnitProperty_SupportedChannelLayoutTags
```

<a id="Discussion"></a>

## Discussion

Used with GetProperty to ascertain what an audio unit understands about laying out of channel orders. This will typically return one or more of the specified layout tags.

When a specific set of layouts are returned, the client then uses the kAudioUnitProperty_AudioChannelLayout property (with one of those layout tags specified) to set the unit to use that layout. In this case the client (and the audio unit when reporting its AudioChannelLayout) is only expected to have set an AudioChannelLayout which only sets the layout tag as the valid field.

Some audio units may return the tag `kAudioChannelLayoutTag_UseChannelDescriptions`. This indicates a custom channel map.

In this case, the host then can look at supported number of channels on that scope (using the kAudioUnitProperty_SupportedNumChannels), and supply an AudioChannelLayout with the kAudioUnitProperty_AudioChannelLayout property to specify the layout, number of channels and location of each of those channels. This custom channel map MUST have a channel valence that is supported by the Audio Unit.

The UseChannelBitmap field is NOT used within the context of the AudioUnit.

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
