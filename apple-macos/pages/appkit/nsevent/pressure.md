> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/pressure](https://developer.apple.com/documentation/appkit/nsevent/pressure)

# pressure (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A normalized value that indicates the degree of pressure applied to an appropriate input device.

## Declaration

```swift
var pressure: Float { get }
```

<a id="Discussion"></a>

## Discussion

For input devices that are pressure-sensitive, the value is increased as pressure is applied to the device.

For [NSEvent.EventType.pressure](eventtype/pressure.md) events, pressure value relates to the current [stage](stage.md) of the gesture event. Each stage has its own pressure curve. For example, pressure ranges from `0.0` through `1.0` for a stage 1 event, and `0.0` through `1.0` for a stage 2 event. Pressure readings should be retrieved for a single stage of a gesture only, and should not be combined to achieve a wider range of pressure levels. In most cases, retrieving pressure during stage 1 is sufficient and appropriate for supporting variable input. Stage 1 pressure is the most physically comfortable for the user. Stage 2 pressure should only be used in rare circumstances where additional tactile feedback is necessary prior to retrieving pressure level.

For input devices that aren’t pressure-sensitive, the value is either `0.0` or `1.0`. An [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) exception is raised if this property is accessed on an event other than a mouse-up, mouse-down, mouse-drag, [NSTabletPoint](../nstabletpoint.md), or [NSEvent.EventType.pressure](eventtype/pressure.md) event.

For tablet pointing devices that are in proximity, the pressure value is `0.0` if the user is not actually touching the tablet.

Pressure is not intended to measure weight.

## See Also

### Related Documentation

- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [NSEvent.EventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [NSEvent.EventType.pressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

### Getting pressure information

- [stage](stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](stagetransition.md): The transition value for the stage of a pressure gesture event.
- [pressureBehavior](pressurebehavior-swift.property.md): The behavior and progression for a pressure event.
- [NSEvent.PressureBehavior](pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.

# pressure (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A normalized value that indicates the degree of pressure applied to an appropriate input device.

## Declaration

```objectivec
@property (readonly) float pressure;
```

<a id="Discussion"></a>

## Discussion

For input devices that are pressure-sensitive, the value is increased as pressure is applied to the device.

For [NSEventTypePressure](eventtype/pressure.md) events, pressure value relates to the current [stage](stage.md) of the gesture event. Each stage has its own pressure curve. For example, pressure ranges from `0.0` through `1.0` for a stage 1 event, and `0.0` through `1.0` for a stage 2 event. Pressure readings should be retrieved for a single stage of a gesture only, and should not be combined to achieve a wider range of pressure levels. In most cases, retrieving pressure during stage 1 is sufficient and appropriate for supporting variable input. Stage 1 pressure is the most physically comfortable for the user. Stage 2 pressure should only be used in rare circumstances where additional tactile feedback is necessary prior to retrieving pressure level.

For input devices that aren’t pressure-sensitive, the value is either `0.0` or `1.0`. An [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) exception is raised if this property is accessed on an event other than a mouse-up, mouse-down, mouse-drag, [NSTabletPoint](../nstabletpoint.md), or [NSEventTypePressure](eventtype/pressure.md) event.

For tablet pointing devices that are in proximity, the pressure value is `0.0` if the user is not actually touching the tablet.

Pressure is not intended to measure weight.

## See Also

### Related Documentation

- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.
- [NSEventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [rotation](rotation.md): The rotation in degrees of the tablet pointing device associated with this event.
- [NSEventTypePressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

### Getting pressure information

- [stage](stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](stagetransition.md): The transition value for the stage of a pressure gesture event.
- [pressureBehavior](pressurebehavior-swift.property.md): The behavior and progression for a pressure event.
- [NSPressureBehavior](pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.
