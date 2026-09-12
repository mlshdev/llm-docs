> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionevent](https://developer.apple.com/documentation/realitykit/actionevent)

# ActionEvent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The structure returned to all action event handlers.

## Declaration

```swift
struct ActionEvent<ActionType> where ActionType : EntityAction
```

<a id="overview"></a>

## Overview

Actions perform their function within one or more custom event handlers associated with an action type.

The event structure contains useful information for an action to perform its function when an action event is raised.

> **Important**

> Do not store [ActionEvent](actionevent.md) instances beyond the event handler’s scope. The event contains references (like `actionStatus`) that are only valid during the callback. Storing the event and accessing it later results in undefined behavior.

## Topics

### Instance Properties

- [action](actionevent/action.md): The action parameter data that remains constant across one or more events intervals defined for the action animation.
- [animationState](actionevent/animationstate.md): The animation state for the action.
- [duration](actionevent/duration.md): The duration of the the event.
- [entity](actionevent/entity.md): Conforms when `ActionType` conforms to `BehaviorTreeAction`. The entity that owns the `BehaviorTreeComponent` and initiated this action.
- [parameter](actionevent/parameter.md): The event parameter data that can vary for each event.
- [playbackController](actionevent/playbackcontroller.md): The animation playback controller that manages the animation executing the action.
- [reversed](actionevent/reversed.md): A Boolean value that indicates reverse playback when true.
- [startTime](actionevent/starttime.md): The start time of the current event.
- [targetEntity](actionevent/targetentity.md): The entity the bind target references.

## See Also

### Action events

- [AnimationState](animationstate.md): The concretely typed animation state structure.
- [ActionEventType](actioneventtype.md): A set of events that an action responds to.
- [ActionEventDefinition](actioneventdefinition.md): Defines an action event interval, and any associated parameters.
- [AnimationStateProtocol](animationstateprotocol.md): The protocol representing the current animation state of an action animation.
