> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_midioutputcallback](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_midioutputcallback)

# kAudioUnitProperty_MIDIOutputCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A write-only AUMIDIOutputCallbackStruct struct, valid on the audio unit global scope.

## Declaration

```swift
var kAudioUnitProperty_MIDIOutputCallback: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

The host sets this property on the audio unit with the callback (and its user data) set appropriately.

Operational Parameters: In the render call, just as is the expected usage of the AUHostCallbacks, the audio unit can call the provided callback to provide MIDI data to the host that it will associate with the current AudioUnitRender call in process.

The audio unit in the callback provides the following:

- the user data provided by the host when the callback was established
- the AudioTimeStamp that was provided to the audio unit for this particular call of AudioUnitRender
- the output number to associate this MIDI data with
- a MIDI Packet List containing MIDI data. The time stamp values contained within the MIDIPackets in this list are \*\*sample offsets\*\*\* from the AudioTimeStamp provided

This allows MIDI data to be time-stamped with a sample offset that is directly associated with the audio data it is generating in the current call to the AudioUnitRender function.

There is no implied or expected association between the number (or position) of an audio unit’s audio or MIDI outputs.

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

# kAudioUnitProperty_MIDIOutputCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A write-only AUMIDIOutputCallbackStruct struct, valid on the audio unit global scope.

## Declaration

```objectivec
kAudioUnitProperty_MIDIOutputCallback
```

<a id="Discussion"></a>

## Discussion

The host sets this property on the audio unit with the callback (and its user data) set appropriately.

Operational Parameters: In the render call, just as is the expected usage of the AUHostCallbacks, the audio unit can call the provided callback to provide MIDI data to the host that it will associate with the current AudioUnitRender call in process.

The audio unit in the callback provides the following:

- the user data provided by the host when the callback was established
- the AudioTimeStamp that was provided to the audio unit for this particular call of AudioUnitRender
- the output number to associate this MIDI data with
- a MIDI Packet List containing MIDI data. The time stamp values contained within the MIDIPackets in this list are \*\*sample offsets\*\*\* from the AudioTimeStamp provided

This allows MIDI data to be time-stamped with a sample offset that is directly associated with the audio data it is generating in the current call to the AudioUnitRender function.

There is no implied or expected association between the number (or position) of an audio unit’s audio or MIDI outputs.

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
