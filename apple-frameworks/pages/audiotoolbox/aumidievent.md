> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aumidievent](https://developer.apple.com/documentation/audiotoolbox/aumidievent)

# AUMIDIEvent (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that describes a scheduled MIDI event.

## Declaration

```swift
struct AUMIDIEvent
```

## Topics

### Initializers

- [init()](aumidievent/init%28%29.md)
- [init(next:eventSampleTime:eventType:reserved:length:cable:data:)](aumidievent/init%28next_eventsampletime_eventtype_reserved_length_cable_data_%29.md)

### Instance Properties

- [cable](aumidievent/cable.md): The virtual cable number.
- [data](aumidievent/data.md): The bytes of the MIDI event. Running status is not used.
- [eventSampleTime](aumidievent/eventsampletime.md): The sample time at which the event is scheduled to occur.
- [eventType](aumidievent/eventtype.md): The type of render event. Must be [AURenderEventType.MIDI](aurendereventtype/midi.md) or [AURenderEventType.midiSysEx](aurendereventtype/midisysex.md).
- [length](aumidievent/length.md): The number of valid MIDI bytes in the data field. For most MIDI events this value is usually `1`, `2`, or `3`, but it can be longer for system-exclusive events.
- [next](aumidievent/next.md): The next event in a linked list of events.
- [reserved](aumidievent/reserved.md): Reserved field. Must be `0`.

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

# AUMIDIEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that describes a scheduled MIDI event.

## Declaration

```objectivec
typedef struct AUMIDIEvent { ... } AUMIDIEvent;
```

## Topics

### Instance Properties

- [cable](aumidievent/cable.md): The virtual cable number.
- [data](aumidievent/data.md): The bytes of the MIDI event. Running status is not used.
- [eventSampleTime](aumidievent/eventsampletime.md): The sample time at which the event is scheduled to occur.
- [eventType](aumidievent/eventtype.md): The type of render event. Must be [AURenderEventMIDI](aurendereventtype/midi.md) or [AURenderEventMIDISysEx](aurendereventtype/midisysex.md).
- [length](aumidievent/length.md): The number of valid MIDI bytes in the data field. For most MIDI events this value is usually `1`, `2`, or `3`, but it can be longer for system-exclusive events.
- [next](aumidievent/next.md): The next event in a linked list of events.
- [reserved](aumidievent/reserved.md): Reserved field. Must be `0`.

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
