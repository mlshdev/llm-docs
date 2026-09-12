> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameter](https://developer.apple.com/documentation/audiotoolbox/audiounitparameter)

# AudioUnitParameter (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.

## Declaration

```swift
struct AudioUnitParameter
```

<a id="overview"></a>

## Overview

This data structure is used by functions declared in the `AudioToolbox/AudioUnitUtilities.h` header file in macOS.

An audio unit parameter is uniquely identified by the combination of its scope, element, and ID.

## Topics

### Initializers

- [init(mAudioUnit:mParameterID:mScope:mElement:)](audiounitparameter/init%28maudiounit_mparameterid_mscope_melement_%29-2hcn6.md)
- [init(mAudioUnit:mParameterID:mScope:mElement:)](audiounitparameter/init%28maudiounit_mparameterid_mscope_melement_%29-55k5j.md)

### Instance Properties

- [mAudioUnit](audiounitparameter/maudiounit.md): The audio unit instance that the parameter applies to.
- [mElement](audiounitparameter/melement.md): The audio unit element for the parameter.
- [mParameterID](audiounitparameter/mparameterid.md): The audio unit parameter identifier.
- [mScope](audiounitparameter/mscope.md): The audio unit scope for the parameter.

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
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.

# AudioUnitParameter (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.

## Declaration

```objectivec
struct AudioUnitParameter;
```

<a id="overview"></a>

## Overview

This data structure is used by functions declared in the `AudioToolbox/AudioUnitUtilities.h` header file in macOS.

An audio unit parameter is uniquely identified by the combination of its scope, element, and ID.

## Topics

### Instance Properties

- [mAudioUnit](audiounitparameter/maudiounit.md): The audio unit instance that the parameter applies to.
- [mElement](audiounitparameter/melement.md): The audio unit element for the parameter.
- [mParameterID](audiounitparameter/mparameterid.md): The audio unit parameter identifier.
- [mScope](audiounitparameter/mscope.md): The audio unit scope for the parameter.

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
