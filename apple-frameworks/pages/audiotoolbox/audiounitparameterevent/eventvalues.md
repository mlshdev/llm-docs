> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameterevent/eventvalues](https://developer.apple.com/documentation/audiotoolbox/audiounitparameterevent/eventvalues)

# eventValues (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The values for this parameter event.

## Declaration

```swift
var eventValues: AudioUnitParameterEvent.__Unnamed_union_eventValues
```

<a id="discussion"></a>

## Discussion

If the parameter event type is [AUParameterEventType.parameterEvent_Immediate](../auparametereventtype/parameterevent_immediate.md), use the `immediate` struct of this union. If the parameter event type is [AUParameterEventType.parameterEvent_Ramped](../auparametereventtype/parameterevent_ramped.md), use the `ramp` struct of this union.

<a id="immediate"></a>

#### immediate

- ****bufferOffset****: A `UInt32` value that indicates the sample time at which to change the parameter value.
- ****value****: An [AudioUnitParameterValue](../audiounitparametervalue.md) that indicates the new parameter value.

<a id="ramp"></a>

#### ramp

- ****startBufferOffset****: An `SInt32` value that indicates the sample time at which to begin the parameter value change.
- ****durationInFrames****: A `UInt32` value that indicates the number of frames over which the parameter value should linearly change from  `startValue` to `endValue`.
- ****startValue****: An [AudioUnitParameterValue](../audiounitparametervalue.md) that indicates the starting parameter value.
- ****endValue****: An [AudioUnitParameterValue](../audiounitparametervalue.md) that indicates the ending parameter value.

## See Also

### Fields

- [scope](scope.md): The scope for this parameter event.
- [element](element.md): The element for this parameter event.
- [parameter](parameter.md): An identifier for this parameter event.
- [eventType](eventtype.md): The type for this parameter event.

# eventValues (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The values for this parameter event.

## Declaration

```objectivec
union { ... } eventValues;
```

<a id="discussion"></a>

## Discussion

If the parameter event type is [kParameterEvent_Immediate](../auparametereventtype/parameterevent_immediate.md), use the `immediate` struct of this union. If the parameter event type is [kParameterEvent_Ramped](../auparametereventtype/parameterevent_ramped.md), use the `ramp` struct of this union.

<a id="immediate"></a>

#### immediate

- ****bufferOffset****: A `UInt32` value that indicates the sample time at which to change the parameter value.
- ****value****: An [AudioUnitParameterValue](../audiounitparametervalue.md) that indicates the new parameter value.

<a id="ramp"></a>

#### ramp

- ****startBufferOffset****: An `SInt32` value that indicates the sample time at which to begin the parameter value change.
- ****durationInFrames****: A `UInt32` value that indicates the number of frames over which the parameter value should linearly change from  `startValue` to `endValue`.
- ****startValue****: An [AudioUnitParameterValue](../audiounitparametervalue.md) that indicates the starting parameter value.
- ****endValue****: An [AudioUnitParameterValue](../audiounitparametervalue.md) that indicates the ending parameter value.

## Topics

### Instance Properties

- [immediate](eventvalues/immediate.md)
- [ramp](eventvalues/ramp.md)

## See Also

### Fields

- [scope](scope.md): The scope for this parameter event.
- [element](element.md): The element for this parameter event.
- [parameter](parameter.md): An identifier for this parameter event.
- [eventType](eventtype.md): The type for this parameter event.
