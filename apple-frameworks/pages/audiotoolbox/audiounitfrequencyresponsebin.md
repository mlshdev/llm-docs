> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitfrequencyresponsebin](https://developer.apple.com/documentation/audiotoolbox/audiounitfrequencyresponsebin)

# AudioUnitFrequencyResponseBin (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio unit’s audio level at a particular frequency.

## Declaration

```swift
struct AudioUnitFrequencyResponseBin
```

<a id="overview"></a>

## Overview

An array of AudioUnitFrequencyResponseBin are passed in to kAudioUnitProperty_FrequencyResponse with the mFrequency field filled in. The array is returned with the mMagnitude fields filled in. If fewer than kNumberOfResponseFrequencies are needed, then the first unused bin should be marked with a negative frequency.

## Topics

### Initializers

- [init()](audiounitfrequencyresponsebin/init%28%29.md)
- [init(mFrequency:mMagnitude:)](audiounitfrequencyresponsebin/init%28mfrequency_mmagnitude_%29.md)

### Instance Properties

- [mFrequency](audiounitfrequencyresponsebin/mfrequency.md)
- [mMagnitude](audiounitfrequencyresponsebin/mmagnitude.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
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

# AudioUnitFrequencyResponseBin (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio unit’s audio level at a particular frequency.

## Declaration

```objectivec
struct AudioUnitFrequencyResponseBin;
```

<a id="overview"></a>

## Overview

An array of AudioUnitFrequencyResponseBin are passed in to kAudioUnitProperty_FrequencyResponse with the mFrequency field filled in. The array is returned with the mMagnitude fields filled in. If fewer than kNumberOfResponseFrequencies are needed, then the first unused bin should be marked with a negative frequency.

## Topics

### Instance Properties

- [mFrequency](audiounitfrequencyresponsebin/mfrequency.md)
- [mMagnitude](audiounitfrequencyresponsebin/mmagnitude.md)

## See Also

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
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
