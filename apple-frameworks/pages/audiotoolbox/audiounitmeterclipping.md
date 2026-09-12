> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitmeterclipping](https://developer.apple.com/documentation/audiotoolbox/audiounitmeterclipping)

# AudioUnitMeterClipping (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Audio clipping that has occurred in a mixer unit.

## Declaration

```swift
struct AudioUnitMeterClipping
```

<a id="overview"></a>

## Overview

This data structure is used by the `kAudioUnitProperty_MeterClipping` property.

## Topics

### Initializers

- [init()](audiounitmeterclipping/init%28%29.md)
- [init(peakValueSinceLastCall:sawInfinity:sawNotANumber:)](audiounitmeterclipping/init%28peakvaluesincelastcall_sawinfinity_sawnotanumber_%29.md)

### Instance Properties

- [peakValueSinceLastCall](audiounitmeterclipping/peakvaluesincelastcall.md): The maximum value seen on the channel since the last time the property was retrieved.
- [sawInfinity](audiounitmeterclipping/sawinfinity.md): `TRUE` if there was an infinite value on this channel since the last time the property was retrieved.
- [sawNotANumber](audiounitmeterclipping/sawnotanumber.md): `TRUE` if there was a floating point “not a number” value on this channel since the last time the property was retrieved.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.

# AudioUnitMeterClipping (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Audio clipping that has occurred in a mixer unit.

## Declaration

```objectivec
struct AudioUnitMeterClipping;
```

<a id="overview"></a>

## Overview

This data structure is used by the `kAudioUnitProperty_MeterClipping` property.

## Topics

### Instance Properties

- [peakValueSinceLastCall](audiounitmeterclipping/peakvaluesincelastcall.md): The maximum value seen on the channel since the last time the property was retrieved.
- [sawInfinity](audiounitmeterclipping/sawinfinity.md): `TRUE` if there was an infinite value on this channel since the last time the property was retrieved.
- [sawNotANumber](audiounitmeterclipping/sawnotanumber.md): `TRUE` if there was a floating point “not a number” value on this channel since the last time the property was retrieved.

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
