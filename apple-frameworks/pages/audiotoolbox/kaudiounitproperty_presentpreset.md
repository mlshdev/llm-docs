> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_presentpreset](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_presentpreset)

# kAudioUnitProperty_PresentPreset (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The active factory preset for an audio unit.

## Declaration

```swift
var kAudioUnitProperty_PresentPreset: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

A read/write [AUPreset](aupreset.md) data structure valid on the audio unit global scope, The `presetName` field in the struct is of type [CFString](../corefoundation/cfstring.md) and follows Core Foundation memory semantics.

When setting the active factory preset on an audio unit with the [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md) function, you own the reference to the preset name and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

When obtaining the active factory preset from an audio unit with the [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md) function, you also own the reference to the preset name and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

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

# kAudioUnitProperty_PresentPreset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The active factory preset for an audio unit.

## Declaration

```objectivec
kAudioUnitProperty_PresentPreset
```

<a id="Discussion"></a>

## Discussion

A read/write [AUPreset](aupreset.md) data structure valid on the audio unit global scope, The `presetName` field in the struct is of type [CFStringRef](../corefoundation/cfstring.md) and follows Core Foundation memory semantics.

When setting the active factory preset on an audio unit with the [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md) function, you own the reference to the preset name and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

When obtaining the active factory preset from an audio unit with the [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md) function, you also own the reference to the preset name and are responsible for later releasing it by calling the [CFRelease](../corefoundation/cfrelease.md) function.

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
