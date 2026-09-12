> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameterinfo](https://developer.apple.com/documentation/audiotoolbox/audiounitparameterinfo)

# AudioUnitParameterInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct AudioUnitParameterInfo
```

## Topics

### Initializers

- [init()](audiounitparameterinfo/init%28%29.md)
- [init(name:unitName:clumpID:cfNameString:unit:minValue:maxValue:defaultValue:flags:)](audiounitparameterinfo/init%28name_unitname_clumpid_cfnamestring_unit_minvalue_maxvalue_defaultvalue_flags_%29.md)

### Instance Properties

- [cfNameString](audiounitparameterinfo/cfnamestring.md): Only valid if `kAudioUnitParameterFlag_HasCFNameString` is set.
- [clumpID](audiounitparameterinfo/clumpid.md): Only valid if `kAudioUnitParameterFlag_HasClump` is set.
- [defaultValue](audiounitparameterinfo/defaultvalue.md)
- [flags](audiounitparameterinfo/flags.md): The host should check for this flag and, if present, release the parameter name when it is finished with it.
- [maxValue](audiounitparameterinfo/maxvalue.md)
- [minValue](audiounitparameterinfo/minvalue.md)
- [name](audiounitparameterinfo/name.md): Must be set to `0`.
- [unit](audiounitparameterinfo/unit.md): If the `unit` field contains a value not in the `AudioUnitParameterUnit` enumeration, then assume the unit type is `kAudioUnitParameterUnit_Generic`.
- [unitName](audiounitparameterinfo/unitname.md): If `kAudioUnitParameterUnit_CustomUnit` is set, this field must contain a valid `CFString` object. Only valid if `kAudioUnitParameterUnit_CustomUnit` is set.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

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
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.

# AudioUnitParameterInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
struct AudioUnitParameterInfo;
```

## Topics

### Instance Properties

- [cfNameString](audiounitparameterinfo/cfnamestring.md): Only valid if `kAudioUnitParameterFlag_HasCFNameString` is set.
- [clumpID](audiounitparameterinfo/clumpid.md): Only valid if `kAudioUnitParameterFlag_HasClump` is set.
- [defaultValue](audiounitparameterinfo/defaultvalue.md)
- [flags](audiounitparameterinfo/flags.md): The host should check for this flag and, if present, release the parameter name when it is finished with it.
- [maxValue](audiounitparameterinfo/maxvalue.md)
- [minValue](audiounitparameterinfo/minvalue.md)
- [name](audiounitparameterinfo/name.md): Must be set to `0`.
- [unit](audiounitparameterinfo/unit.md): If the `unit` field contains a value not in the `AudioUnitParameterUnit` enumeration, then assume the unit type is `kAudioUnitParameterUnit_Generic`.
- [unitName](audiounitparameterinfo/unitname.md): If `kAudioUnitParameterUnit_CustomUnit` is set, this field must contain a valid `CFString` object. Only valid if `kAudioUnitParameterUnit_CustomUnit` is set.

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
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
