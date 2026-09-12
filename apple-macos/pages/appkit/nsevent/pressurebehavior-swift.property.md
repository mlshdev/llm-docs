> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/pressurebehavior-swift.property](https://developer.apple.com/documentation/appkit/nsevent/pressurebehavior-swift.property)

# pressureBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The behavior and progression for a pressure event.

## Declaration

```swift
var pressureBehavior: NSEvent.PressureBehavior { get }
```

<a id="Discussion"></a>

## Discussion

This property describes the behavior and progression of an event of type [NSEvent.EventType.pressure](eventtype/pressure.md). The value of this property indicates how the pressure event behaves, including actuations, pressure-level reporting, and stage transitions.

## See Also

### Related Documentation

- [NSPressureConfiguration](../nspressureconfiguration.md): An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.
- [NSEvent.EventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEvent.EventType.pressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
- [init(pressureBehavior:)](../nspressureconfiguration/init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.

### Getting pressure information

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [stage](stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](stagetransition.md): The transition value for the stage of a pressure gesture event.
- [NSEvent.PressureBehavior](pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.

# pressureBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The behavior and progression for a pressure event.

## Declaration

```objectivec
@property (readonly) NSPressureBehavior pressureBehavior;
```

<a id="Discussion"></a>

## Discussion

This property describes the behavior and progression of an event of type [NSEventTypePressure](eventtype/pressure.md). The value of this property indicates how the pressure event behaves, including actuations, pressure-level reporting, and stage transitions.

## See Also

### Related Documentation

- [NSPressureConfiguration](../nspressureconfiguration.md): An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.
- [NSEventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEventTypePressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
- [initWithPressureBehavior:](../nspressureconfiguration/init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.

### Getting pressure information

- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [stage](stage.md): A value that indicates the stage of a pressure gesture event.
- [stageTransition](stagetransition.md): The transition value for the stage of a pressure gesture event.
- [NSPressureBehavior](pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.
