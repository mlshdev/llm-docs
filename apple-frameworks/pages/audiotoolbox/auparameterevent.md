> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameterevent](https://developer.apple.com/documentation/audiotoolbox/auparameterevent)

# AUParameterEvent (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that describes a scheduled parameter event.

## Declaration

```swift
struct AUParameterEvent
```

## Topics

### Initializers

- [init()](auparameterevent/init%28%29.md)
- [init(next:eventSampleTime:eventType:reserved:rampDurationSampleFrames:parameterAddress:value:)](auparameterevent/init%28next_eventsampletime_eventtype_reserved_rampdurationsampleframes_parameteraddress_value_%29.md)

### Instance Properties

- [eventSampleTime](auparameterevent/eventsampletime.md): The sample time at which the event is scheduled to occur.
- [eventType](auparameterevent/eventtype.md): The type of render event. Must be [AURenderEventType.parameter](aurendereventtype/parameter.md) or [AURenderEventType.parameterRamp](aurendereventtype/parameterramp.md).
- [next](auparameterevent/next.md): The next event in a linked list of events.
- [parameterAddress](auparameterevent/parameteraddress.md): The parameter to change.
- [rampDurationSampleFrames](auparameterevent/rampdurationsampleframes.md): The ramp duration, in sample frames. Must be `0` for a non-ramped event; otherwise, must be greater than `0` for a ramped event.
- [reserved](auparameterevent/reserved.md): Reserved field. Must be `0`.
- [value](auparameterevent/value.md): For a non-ramped event, this is the new parameter value. For a ramped event, this is the parameter value at the end of the ramp.

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
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.

# AUParameterEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that describes a scheduled parameter event.

## Declaration

```objectivec
typedef struct AUParameterEvent { ... } AUParameterEvent;
```

## Topics

### Instance Properties

- [eventSampleTime](auparameterevent/eventsampletime.md): The sample time at which the event is scheduled to occur.
- [eventType](auparameterevent/eventtype.md): The type of render event. Must be [AURenderEventParameter](aurendereventtype/parameter.md) or [AURenderEventParameterRamp](aurendereventtype/parameterramp.md).
- [next](auparameterevent/next.md): The next event in a linked list of events.
- [parameterAddress](auparameterevent/parameteraddress.md): The parameter to change.
- [rampDurationSampleFrames](auparameterevent/rampdurationsampleframes.md): The ramp duration, in sample frames. Must be `0` for a non-ramped event; otherwise, must be greater than `0` for a ramped event.
- [reserved](auparameterevent/reserved.md): Reserved field. Must be `0`.
- [value](auparameterevent/value.md): For a non-ramped event, this is the new parameter value. For a ramped event, this is the parameter value at the end of the ramp.

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
