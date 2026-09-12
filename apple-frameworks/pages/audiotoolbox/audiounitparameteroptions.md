> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameteroptions](https://developer.apple.com/documentation/audiotoolbox/audiounitparameteroptions)

# AudioUnitParameterOptions (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Value options for audio unit parameters.

## Declaration

```swift
struct AudioUnitParameterOptions
```

<a id="overview"></a>

## Overview

These constants are relevant only in macOS, and not in iOS.

Audio unit parameter flags, for use in the [AudioUnitParameterInfo](audiounitparameterinfo.md) data structure , serve as a dictionary-like set of information about an audio unit parameter. Parameter flag bit position 19 is reserved.

## Topics

### Constants

- [flag_CFNameRelease](audiounitparameteroptions/flag_cfnamerelease.md): If an audio unit can generate parameter names dynamically, it should set this flag.
- [flag_CanRamp](audiounitparameteroptions/flag_canramp.md)
- [flag_DisplayCubeRoot](audiounitparameteroptions/flag_displaycuberoot.md)
- [flag_DisplayCubed](audiounitparameteroptions/flag_displaycubed.md)
- [flag_DisplayExponential](audiounitparameteroptions/flag_displayexponential.md)
- [flag_DisplayLogarithmic](audiounitparameteroptions/flag_displaylogarithmic.md)
- [flag_DisplayMask](audiounitparameteroptions/flag_displaymask.md)
- [flag_DisplaySquareRoot](audiounitparameteroptions/flag_displaysquareroot.md)
- [flag_DisplaySquared](audiounitparameteroptions/flag_displaysquared.md)
- [flag_ExpertMode](audiounitparameteroptions/flag_expertmode.md)
- [flag_HasCFNameString](audiounitparameteroptions/flag_hascfnamestring.md)
- [flag_HasClump](audiounitparameteroptions/flag_hasclump.md)
- [flag_IsElementMeta](audiounitparameteroptions/flag_iselementmeta.md)
- [flag_IsGlobalMeta](audiounitparameteroptions/flag_isglobalmeta.md)
- [flag_IsHighResolution](audiounitparameteroptions/flag_ishighresolution.md)
- [flag_IsReadable](audiounitparameteroptions/flag_isreadable.md)
- [flag_IsWritable](audiounitparameteroptions/flag_iswritable.md)
- [flag_MeterReadOnly](audiounitparameteroptions/flag_meterreadonly.md)
- [flag_NonRealTime](audiounitparameteroptions/flag_nonrealtime.md)
- [flag_OmitFromPresets](audiounitparameteroptions/flag_omitfrompresets.md)
- [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md): If set, getting the `kAudioUnitProperty_ParameterHistoryInfo` property fills out the [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md) struct containing the recommended update rate and history duration.
- [flag_ValuesHaveStrings](audiounitparameteroptions/flag_valueshavestrings.md)

### Initializers

- [init(rawValue:)](audiounitparameteroptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.

# AudioUnitParameterOptions (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Value options for audio unit parameters.

## Declaration

```objectivec
enum AudioUnitParameterOptions : UInt32;
```

<a id="overview"></a>

## Overview

These constants are relevant only in macOS, and not in iOS.

Audio unit parameter flags, for use in the [AudioUnitParameterInfo](audiounitparameterinfo.md) data structure , serve as a dictionary-like set of information about an audio unit parameter. Parameter flag bit position 19 is reserved.

## Topics

### Constants

- [kAudioUnitParameterFlag_CFNameRelease](audiounitparameteroptions/flag_cfnamerelease.md): If an audio unit can generate parameter names dynamically, it should set this flag.
- [kAudioUnitParameterFlag_CanRamp](audiounitparameteroptions/flag_canramp.md)
- [kAudioUnitParameterFlag_DisplayCubeRoot](audiounitparameteroptions/flag_displaycuberoot.md)
- [kAudioUnitParameterFlag_DisplayCubed](audiounitparameteroptions/flag_displaycubed.md)
- [kAudioUnitParameterFlag_DisplayExponential](audiounitparameteroptions/flag_displayexponential.md)
- [kAudioUnitParameterFlag_DisplayLogarithmic](audiounitparameteroptions/flag_displaylogarithmic.md)
- [kAudioUnitParameterFlag_DisplayMask](audiounitparameteroptions/flag_displaymask.md)
- [kAudioUnitParameterFlag_DisplaySquareRoot](audiounitparameteroptions/flag_displaysquareroot.md)
- [kAudioUnitParameterFlag_DisplaySquared](audiounitparameteroptions/flag_displaysquared.md)
- [kAudioUnitParameterFlag_ExpertMode](audiounitparameteroptions/flag_expertmode.md)
- [kAudioUnitParameterFlag_HasCFNameString](audiounitparameteroptions/flag_hascfnamestring.md)
- [kAudioUnitParameterFlag_HasClump](audiounitparameteroptions/flag_hasclump.md)
- [kAudioUnitParameterFlag_IsElementMeta](audiounitparameteroptions/flag_iselementmeta.md)
- [kAudioUnitParameterFlag_IsGlobalMeta](audiounitparameteroptions/flag_isglobalmeta.md)
- [kAudioUnitParameterFlag_IsHighResolution](audiounitparameteroptions/flag_ishighresolution.md)
- [kAudioUnitParameterFlag_IsReadable](audiounitparameteroptions/flag_isreadable.md)
- [kAudioUnitParameterFlag_IsWritable](audiounitparameteroptions/flag_iswritable.md)
- [kAudioUnitParameterFlag_MeterReadOnly](audiounitparameteroptions/flag_meterreadonly.md)
- [kAudioUnitParameterFlag_NonRealTime](audiounitparameteroptions/flag_nonrealtime.md)
- [kAudioUnitParameterFlag_OmitFromPresets](audiounitparameteroptions/flag_omitfrompresets.md)
- [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md): If set, getting the `kAudioUnitProperty_ParameterHistoryInfo` property fills out the [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md) struct containing the recommended update rate and history duration.
- [kAudioUnitParameterFlag_ValuesHaveStrings](audiounitparameteroptions/flag_valueshavestrings.md)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
