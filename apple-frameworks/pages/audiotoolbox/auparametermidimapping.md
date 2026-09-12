> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametermidimapping](https://developer.apple.com/documentation/audiotoolbox/auparametermidimapping)

# AUParameterMIDIMapping (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct AUParameterMIDIMapping
```

## Topics

### Initializers

- [init()](auparametermidimapping/init%28%29.md)
- [init(mScope:mElement:mParameterID:mFlags:mSubRangeMin:mSubRangeMax:mStatus:mData1:reserved1:reserved2:reserved3:)](auparametermidimapping/init%28mscope_melement_mparameterid_mflags_msubrangemin_msubrangemax_mstatus_mdata1_reserved1_reserved2_reserved3_%29.md)

### Instance Properties

- [mData1](auparametermidimapping/mdata1.md)
- [mElement](auparametermidimapping/melement.md)
- [mFlags](auparametermidimapping/mflags.md)
- [mParameterID](auparametermidimapping/mparameterid.md)
- [mScope](auparametermidimapping/mscope.md)
- [mStatus](auparametermidimapping/mstatus.md)
- [mSubRangeMax](auparametermidimapping/msubrangemax.md)
- [mSubRangeMin](auparametermidimapping/msubrangemin.md)
- [reserved1](auparametermidimapping/reserved1.md)
- [reserved2](auparametermidimapping/reserved2.md)
- [reserved3](auparametermidimapping/reserved3.md)

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

# AUParameterMIDIMapping (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```objectivec
struct AUParameterMIDIMapping;
```

## Topics

### Instance Properties

- [mData1](auparametermidimapping/mdata1.md)
- [mElement](auparametermidimapping/melement.md)
- [mFlags](auparametermidimapping/mflags.md)
- [mParameterID](auparametermidimapping/mparameterid.md)
- [mScope](auparametermidimapping/mscope.md)
- [mStatus](auparametermidimapping/mstatus.md)
- [mSubRangeMax](auparametermidimapping/msubrangemax.md)
- [mSubRangeMin](auparametermidimapping/msubrangemin.md)
- [reserved1](auparametermidimapping/reserved1.md)
- [reserved2](auparametermidimapping/reserved2.md)
- [reserved3](auparametermidimapping/reserved3.md)

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
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
