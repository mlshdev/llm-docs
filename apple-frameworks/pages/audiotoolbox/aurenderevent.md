> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aurenderevent](https://developer.apple.com/documentation/audiotoolbox/aurenderevent)

# AURenderEvent (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A union of the various specific render event types.

## Declaration

```swift
struct AURenderEvent
```

## Topics

### Instance Properties

- [MIDI](aurenderevent/midi.md): Use this field for MIDI events.
- [head](aurenderevent/head.md): Use this field to determine the event type.
- [parameter](aurenderevent/parameter.md): Use this field for parameter events.
- [MIDIEventsList](aurenderevent/midieventslist.md)

### Initializers

- [init()](aurenderevent/init%28%29.md)
- [init(MIDI:)](aurenderevent/init%28midi_%29.md)
- [init(MIDIEventsList:)](aurenderevent/init%28midieventslist_%29.md)
- [init(head:)](aurenderevent/init%28head_%29.md)
- [init(parameter:)](aurenderevent/init%28parameter_%29.md)

## Relationships

### Conforms To

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

# AURenderEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Union  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A union of the various specific render event types.

## Declaration

```objectivec
typedef union AURenderEvent { ... } AURenderEvent;
```

## Topics

### Instance Properties

- [MIDI](aurenderevent/midi.md): Use this field for MIDI events.
- [head](aurenderevent/head.md): Use this field to determine the event type.
- [parameter](aurenderevent/parameter.md): Use this field for parameter events.
- [MIDIEventsList](aurenderevent/midieventslist.md)

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
