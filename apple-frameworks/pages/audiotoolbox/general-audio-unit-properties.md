> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/general-audio-unit-properties](https://developer.apple.com/documentation/audiotoolbox/general-audio-unit-properties)

# General Audio Unit Properties (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Properties that apply to any audio unit.

<a id="overview"></a>

## Overview

The integer range for the set of generic audio unit property identifiers is 0 through 999.

## Topics

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
- [kAudioUnitProperty_FrequencyResponse](kaudiounitproperty_frequencyresponse.md)
- [kAudioUnitProperty_GetUIComponentList](kaudiounitproperty_getuicomponentlist.md)
- [kAudioUnitProperty_HostCallbacks](kaudiounitproperty_hostcallbacks.md)
- [kAudioUnitProperty_HostMIDIProtocol](kaudiounitproperty_hostmidiprotocol.md)
- [kAudioUnitProperty_IconLocation](kaudiounitproperty_iconlocation.md)
- [kAudioUnitProperty_InPlaceProcessing](kaudiounitproperty_inplaceprocessing.md): A read/write `UInt32` value, representing a Boolean value, valid on the audio unit global scope.
- [kAudioUnitProperty_InputSamplesInOutput](kaudiounitproperty_inputsamplesinoutput.md): A read/write AUInputSamplesInOutputCallbackStruct struct, valid on the audio unit global scope.
- [kAudioUnitProperty_LastRenderError](kaudiounitproperty_lastrendererror.md): A read-only `OSStatus` value valid on the audio unit global scope.
- [kAudioUnitProperty_LastRenderSampleTime](kaudiounitproperty_lastrendersampletime.md)
- [kAudioUnitProperty_Latency](kaudiounitproperty_latency.md): A read-only `Float64` value valid on the audio unit global scope.
- [kAudioUnitProperty_LoadedOutOfProcess](kaudiounitproperty_loadedoutofprocess.md)
- [kAudioUnitProperty_MakeConnection](kaudiounitproperty_makeconnection.md): A write-only [AudioUnitConnection](audiounitconnection.md) data structure valid on the audio unit input scope.
- [kAudioUnitProperty_MIDIOutputBufferSizeHint](kaudiounitproperty_midioutputbuffersizehint.md)
- [kAudioUnitProperty_MIDIOutputCallback](kaudiounitproperty_midioutputcallback.md): A write-only AUMIDIOutputCallbackStruct struct, valid on the audio unit global scope.
- [kAudioUnitProperty_MIDIOutputCallbackInfo](kaudiounitproperty_midioutputcallbackinfo.md): A read-only CFArray object valid on the audio unit global scope.
- [kAudioUnitProperty_MIDIOutputEventListCallback](kaudiounitproperty_midioutputeventlistcallback.md)
- [kAudioUnitProperty_MaximumFramesPerSlice](kaudiounitproperty_maximumframesperslice.md): Specifies the maximum number of sample frames an audio unit is prepared to supply on one invocation of its [AudioUnitRender(\_:\_:\_:\_:\_:\_:)](audiounitrender%28____________%29.md) function.
- [kAudioUnitProperty_NickName](kaudiounitproperty_nickname.md)
- [kAudioUnitProperty_OfflineRender](kaudiounitproperty_offlinerender.md)
- [kAudioUnitProperty_ParameterClumpName](kaudiounitproperty_parameterclumpname.md): A read-only `AudioUnitParameterNameInfo` struct, valid on any audio unit scope.
- [kAudioUnitProperty_ParameterHistoryInfo](kaudiounitproperty_parameterhistoryinfo.md): For parameters that have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set, getting this property fills out the [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md) struct containing the recommended update rate and history duration.
- [kAudioUnitProperty_ParameterIDName](kaudiounitproperty_parameteridname.md): A shortened version of an audio unit parameter name, suitable for compact display situations.
- [kAudioUnitProperty_ParameterInfo](kaudiounitproperty_parameterinfo.md)
- [kAudioUnitProperty_ParameterList](kaudiounitproperty_parameterlist.md): A list of read-only parameter ID values valid on any audio unit scope.
- [kAudioUnitProperty_ParameterStringFromValue](kaudiounitproperty_parameterstringfromvalue.md): A read-only [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md) struct, valid on any audio unit scope.
- [kAudioUnitProperty_ParameterValueFromString](kaudiounitproperty_parametervaluefromstring.md)
- [kAudioUnitProperty_ParameterValueStrings](kaudiounitproperty_parametervaluestrings.md): An array of names for a named, indexed audio unit parameter. An indexed parameter is one whose unit type is [AudioUnitParameterUnit.indexed](audiounitparameterunit/indexed.md). The array’s strings can be used to build a menu for the parameter.
- [kAudioUnitProperty_ParametersForOverview](kaudiounitproperty_parametersforoverview.md)
- [kAudioUnitProperty_PresentPreset](kaudiounitproperty_presentpreset.md): The active factory preset for an audio unit.
- [kAudioUnitProperty_PresentationLatency](kaudiounitproperty_presentationlatency.md)
- [kAudioUnitProperty_RenderQuality](kaudiounitproperty_renderquality.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioUnitProperty_RequestViewController](kaudiounitproperty_requestviewcontroller.md)
- [kAudioUnitProperty_SampleRate](kaudiounitproperty_samplerate.md)
- [kAudioUnitProperty_SetExternalBuffer](kaudiounitproperty_setexternalbuffer.md)
- [kAudioUnitProperty_SetRenderCallback](kaudiounitproperty_setrendercallback.md)
- [kAudioUnitProperty_StreamFormat](kaudiounitproperty_streamformat.md)
- [kAudioUnitProperty_ShouldAllocateBuffer](kaudiounitproperty_shouldallocatebuffer.md): A read/write `UInt32` value valid on the audio unit input and output scopes, settable individually on each element.
- [kAudioUnitProperty_SupportedChannelLayoutTags](kaudiounitproperty_supportedchannellayouttags.md): A read-only array on `AudioChannelLayoutTag` structures, valid on the audio unit input and output scopes.
- [kAudioUnitProperty_SupportsMPE](kaudiounitproperty_supportsmpe.md)
- [kAudioUnitProperty_TailTime](kaudiounitproperty_tailtime.md): A read-only `Float64` value valid on the audio unit global scope.

## See Also

### General

- [Other Plug-In Formats](1534082-other-plug-in-formats.md)
- [RenderQuality](1534177-renderquality.md): Render quality settings for audio units.
- [HostCallbackInfo](hostcallbackinfo.md): The time- and transport-related callback functions for an audio unit.

# General Audio Unit Properties (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Properties that apply to any audio unit.

<a id="overview"></a>

## Overview

The integer range for the set of generic audio unit property identifiers is 0 through 999.

## Topics

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
- [kAudioUnitProperty_FrequencyResponse](kaudiounitproperty_frequencyresponse.md)
- [kAudioUnitProperty_GetUIComponentList](kaudiounitproperty_getuicomponentlist.md)
- [kAudioUnitProperty_HostCallbacks](kaudiounitproperty_hostcallbacks.md)
- [kAudioUnitProperty_HostMIDIProtocol](kaudiounitproperty_hostmidiprotocol.md)
- [kAudioUnitProperty_IconLocation](kaudiounitproperty_iconlocation.md)
- [kAudioUnitProperty_InPlaceProcessing](kaudiounitproperty_inplaceprocessing.md): A read/write `UInt32` value, representing a Boolean value, valid on the audio unit global scope.
- [kAudioUnitProperty_InputSamplesInOutput](kaudiounitproperty_inputsamplesinoutput.md): A read/write AUInputSamplesInOutputCallbackStruct struct, valid on the audio unit global scope.
- [kAudioUnitProperty_LastRenderError](kaudiounitproperty_lastrendererror.md): A read-only `OSStatus` value valid on the audio unit global scope.
- [kAudioUnitProperty_LastRenderSampleTime](kaudiounitproperty_lastrendersampletime.md)
- [kAudioUnitProperty_Latency](kaudiounitproperty_latency.md): A read-only `Float64` value valid on the audio unit global scope.
- [kAudioUnitProperty_LoadedOutOfProcess](kaudiounitproperty_loadedoutofprocess.md)
- [kAudioUnitProperty_MakeConnection](kaudiounitproperty_makeconnection.md): A write-only [AudioUnitConnection](audiounitconnection.md) data structure valid on the audio unit input scope.
- [kAudioUnitProperty_MIDIOutputBufferSizeHint](kaudiounitproperty_midioutputbuffersizehint.md)
- [kAudioUnitProperty_MIDIOutputCallback](kaudiounitproperty_midioutputcallback.md): A write-only AUMIDIOutputCallbackStruct struct, valid on the audio unit global scope.
- [kAudioUnitProperty_MIDIOutputCallbackInfo](kaudiounitproperty_midioutputcallbackinfo.md): A read-only CFArray object valid on the audio unit global scope.
- [kAudioUnitProperty_MIDIOutputEventListCallback](kaudiounitproperty_midioutputeventlistcallback.md)
- [kAudioUnitProperty_MaximumFramesPerSlice](kaudiounitproperty_maximumframesperslice.md): Specifies the maximum number of sample frames an audio unit is prepared to supply on one invocation of its [AudioUnitRender](audiounitrender%28____________%29.md) function.
- [kAudioUnitProperty_NickName](kaudiounitproperty_nickname.md)
- [kAudioUnitProperty_OfflineRender](kaudiounitproperty_offlinerender.md)
- [kAudioUnitProperty_ParameterClumpName](kaudiounitproperty_parameterclumpname.md): A read-only `AudioUnitParameterNameInfo` struct, valid on any audio unit scope.
- [kAudioUnitProperty_ParameterHistoryInfo](kaudiounitproperty_parameterhistoryinfo.md): For parameters that have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set, getting this property fills out the [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md) struct containing the recommended update rate and history duration.
- [kAudioUnitProperty_ParameterIDName](kaudiounitproperty_parameteridname.md): A shortened version of an audio unit parameter name, suitable for compact display situations.
- [kAudioUnitProperty_ParameterInfo](kaudiounitproperty_parameterinfo.md)
- [kAudioUnitProperty_ParameterList](kaudiounitproperty_parameterlist.md): A list of read-only parameter ID values valid on any audio unit scope.
- [kAudioUnitProperty_ParameterStringFromValue](kaudiounitproperty_parameterstringfromvalue.md): A read-only [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md) struct, valid on any audio unit scope.
- [kAudioUnitProperty_ParameterValueFromString](kaudiounitproperty_parametervaluefromstring.md)
- [kAudioUnitProperty_ParameterValueStrings](kaudiounitproperty_parametervaluestrings.md): An array of names for a named, indexed audio unit parameter. An indexed parameter is one whose unit type is [kAudioUnitParameterUnit_Indexed](audiounitparameterunit/indexed.md). The array’s strings can be used to build a menu for the parameter.
- [kAudioUnitProperty_ParametersForOverview](kaudiounitproperty_parametersforoverview.md)
- [kAudioUnitProperty_PresentPreset](kaudiounitproperty_presentpreset.md): The active factory preset for an audio unit.
- [kAudioUnitProperty_PresentationLatency](kaudiounitproperty_presentationlatency.md)
- [kAudioUnitProperty_RenderContextObserver](kaudiounitproperty_rendercontextobserver.md): The block that the system calls when the rendering context changes.
- [kAudioUnitProperty_RenderQuality](kaudiounitproperty_renderquality.md): A read/write `UInt32` value valid on the audio unit global scope.
- [kAudioUnitProperty_RequestViewController](kaudiounitproperty_requestviewcontroller.md)
- [kAudioUnitProperty_SampleRate](kaudiounitproperty_samplerate.md)
- [kAudioUnitProperty_SetExternalBuffer](kaudiounitproperty_setexternalbuffer.md)
- [kAudioUnitProperty_SetRenderCallback](kaudiounitproperty_setrendercallback.md)
- [kAudioUnitProperty_StreamFormat](kaudiounitproperty_streamformat.md)
- [kAudioUnitProperty_ShouldAllocateBuffer](kaudiounitproperty_shouldallocatebuffer.md): A read/write `UInt32` value valid on the audio unit input and output scopes, settable individually on each element.
- [kAudioUnitProperty_SupportedChannelLayoutTags](kaudiounitproperty_supportedchannellayouttags.md): A read-only array on `AudioChannelLayoutTag` structures, valid on the audio unit input and output scopes.
- [kAudioUnitProperty_SupportsMPE](kaudiounitproperty_supportsmpe.md)
- [kAudioUnitProperty_TailTime](kaudiounitproperty_tailtime.md): A read-only `Float64` value valid on the audio unit global scope.

## See Also

### General

- [Other Plug-In Formats](1534082-other-plug-in-formats.md)
- [RenderQuality](1534177-renderquality.md): Render quality settings for audio units.
- [HostCallbackInfo](hostcallbackinfo.md): The time- and transport-related callback functions for an audio unit.
