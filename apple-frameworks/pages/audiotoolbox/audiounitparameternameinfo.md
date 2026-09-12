> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameternameinfo](https://developer.apple.com/documentation/audiotoolbox/audiounitparameternameinfo)

# AudioUnitParameterNameInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A short version of the name for an audio unit parameter.

## Declaration

```swift
struct AudioUnitParameterNameInfo
```

<a id="Discussion"></a>

## Discussion

This data structure is used as a value for the [kAudioUnitProperty_ParameterClumpName](kaudiounitproperty_parameterclumpname.md) and [kAudioUnitProperty_ParameterIDName](kaudiounitproperty_parameteridname.md) audio unit properties.

## Topics

### Initializers

- [init()](audiounitparameternameinfo/init%28%29.md)
- [init(inID:inDesiredLength:outName:)](audiounitparameternameinfo/init%28inid_indesiredlength_outname_%29.md)

### Instance Properties

- [inDesiredLength](audiounitparameternameinfo/indesiredlength.md): When setting an audio unit property that uses this data structure for its value, the maximum length that you are specifying for the audio unit parameter name.
- [inID](audiounitparameternameinfo/inid.md): The identifier for the audio unit parameter.
- [outName](audiounitparameternameinfo/outname.md): When getting an audio unit property that uses this data structure for its value, the short version of the parameter name provided by the audio unit. The host application then owns the string and is responsible for releasing it.

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
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.

# AudioUnitParameterNameInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A short version of the name for an audio unit parameter.

## Declaration

```objectivec
struct AudioUnitParameterNameInfo;
```

<a id="Discussion"></a>

## Discussion

This data structure is used as a value for the [kAudioUnitProperty_ParameterClumpName](kaudiounitproperty_parameterclumpname.md) and [kAudioUnitProperty_ParameterIDName](kaudiounitproperty_parameteridname.md) audio unit properties.

## Topics

### Instance Properties

- [inDesiredLength](audiounitparameternameinfo/indesiredlength.md): When setting an audio unit property that uses this data structure for its value, the maximum length that you are specifying for the audio unit parameter name.
- [inID](audiounitparameternameinfo/inid.md): The identifier for the audio unit parameter.
- [outName](audiounitparameternameinfo/outname.md): When getting an audio unit property that uses this data structure for its value, the short version of the parameter name provided by the audio unit. The host application then owns the string and is responsible for releasing it.

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
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
