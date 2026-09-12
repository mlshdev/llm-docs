> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameterevent](https://developer.apple.com/documentation/audiotoolbox/audiounitparameterevent)

# AudioUnitParameterEvent (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A scheduled change to an audio unit parameter’s value.

## Declaration

```swift
struct AudioUnitParameterEvent
```

<a id="overview"></a>

## Overview

If the `eventType` field value is [AUParameterEventType.parameterEvent_Immediate](auparametereventtype/parameterevent_immediate.md), use the `immediate` structure in the `eventValues` union. If the event type is [AUParameterEventType.parameterEvent_Ramped](auparametereventtype/parameterevent_ramped.md), use the `ramp` structure in the `eventValues` union.

Apply one or more [AudioUnitParameterEvent](audiounitparameterevent.md) events to an audio unit using the [AudioUnitScheduleParameters(\_:\_:\_:)](audiounitscheduleparameters%28______%29.md) function.

## Topics

### Fields

- [scope](audiounitparameterevent/scope.md): The scope for this parameter event.
- [element](audiounitparameterevent/element.md): The element for this parameter event.
- [parameter](audiounitparameterevent/parameter.md): An identifier for this parameter event.
- [eventType](audiounitparameterevent/eventtype.md): The type for this parameter event.
- [eventValues](audiounitparameterevent/eventvalues.md): The values for this parameter event.

### Initializers

- [init()](audiounitparameterevent/init%28%29.md)
- [init(scope:element:parameter:eventType:eventValues:)](audiounitparameterevent/init%28scope_element_parameter_eventtype_eventvalues_%29.md)

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
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.

# AudioUnitParameterEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A scheduled change to an audio unit parameter’s value.

## Declaration

```objectivec
struct AudioUnitParameterEvent;
```

<a id="overview"></a>

## Overview

If the `eventType` field value is [kParameterEvent_Immediate](auparametereventtype/parameterevent_immediate.md), use the `immediate` structure in the `eventValues` union. If the event type is [kParameterEvent_Ramped](auparametereventtype/parameterevent_ramped.md), use the `ramp` structure in the `eventValues` union.

Apply one or more [AudioUnitParameterEvent](audiounitparameterevent.md) events to an audio unit using the [AudioUnitScheduleParameters](audiounitscheduleparameters%28______%29.md) function.

## Topics

### Fields

- [scope](audiounitparameterevent/scope.md): The scope for this parameter event.
- [element](audiounitparameterevent/element.md): The element for this parameter event.
- [parameter](audiounitparameterevent/parameter.md): An identifier for this parameter event.
- [eventType](audiounitparameterevent/eventtype.md): The type for this parameter event.
- [eventValues](audiounitparameterevent/eventvalues.md): The values for this parameter event.

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
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
