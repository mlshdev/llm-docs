> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actioneventdefinition](https://developer.apple.com/documentation/realitykit/actioneventdefinition)

# ActionEventDefinition

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Defines an action event interval, and any associated parameters.

## Declaration

```swift
struct ActionEventDefinition<ActionType> where ActionType : EntityAction
```

<a id="overview"></a>

## Overview

Start, update, end, and skipped events are raised based on one or more event intervals defined by the action animation.

Also see: [ActionEventType](actioneventtype.md)

## Topics

### Initializers

- [init(startTime:duration:parameter:)](actioneventdefinition/init%28starttime_duration_parameter_%29.md): Constructs an event definition.

### Instance Properties

- [duration](actioneventdefinition/duration.md): The event interval’s duration.
- [parameter](actioneventdefinition/parameter.md): Optional parameter data available to the event handler at the time of the event.
- [startTime](actioneventdefinition/starttime.md): The time at which the event interval starts.

### Type Aliases

- [ActionEventDefinition.EventParameterType](actioneventdefinition/eventparametertype.md)

## See Also

### Action events

- [ActionEvent](actionevent.md): The structure returned to all action event handlers.
- [AnimationState](animationstate.md): The concretely typed animation state structure.
- [ActionEventType](actioneventtype.md): A set of events that an action responds to.
- [AnimationStateProtocol](animationstateprotocol.md): The protocol representing the current animation state of an action animation.
