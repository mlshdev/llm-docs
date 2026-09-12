> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/behaviortreeactionhandler](https://developer.apple.com/documentation/realitykit/behaviortreeactionhandler)

# BehaviorTreeActionHandler

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Behavior Tree-specific event handlers that allow an `ActionResult` to be returned from the handler.

## Declaration

```swift
protocol BehaviorTreeActionHandler : ActionHandlerProtocol
```

<a id="overview"></a>

## Overview

Behavior trees send Started, Updated and Ended events. Optionally subscribe directly to any of these events in order to override default event handling in cases when conforming a new, custom event handler type.

Example:

```swift
struct MyAction: BehaviorTreeAction, Codable {
    // ...
}

struct MyActionHandler: BehaviorTreeActionHandler {
    typealias ActionType = MyAction

    //... add some optional state data here.

   // Action updated event handler.
   public mutating func actionUpdatedWithResult(event: EventType) -> ActionResult? {
       // ... handle the 'updated' event.

       // Return the action result.
       return .success
   }
}

// The handler must be registered in order to receive events:
MyActionHandler.register { event in
    return MyActionHandler()
}
```

## Topics

### Responding to action progress

- [actionStartedWithResult(event:)](behaviortreeactionhandler/actionstartedwithresult%28event_%29.md)
- [actionUpdatedWithResult(event:)](behaviortreeactionhandler/actionupdatedwithresult%28event_%29.md)
- [actionPausedWithResult(event:)](behaviortreeactionhandler/actionpausedwithresult%28event_%29.md)
- [actionResumedWithResult(event:)](behaviortreeactionhandler/actionresumedwithresult%28event_%29.md)

### Responding to action completion

- [actionEndedWithResult(event:)](behaviortreeactionhandler/actionendedwithresult%28event_%29.md)
- [actionTerminatedWithResult(event:)](behaviortreeactionhandler/actionterminatedwithresult%28event_%29.md)
- [actionSkippedWithResult(event:)](behaviortreeactionhandler/actionskippedwithresult%28event_%29.md)

## Relationships

### Inherits From

- [ActionHandlerProtocol](actionhandlerprotocol.md)

## See Also

### Behavior trees

- [BehaviorTreeComponent](behaviortreecomponent.md): Manages which behavior tree is active for the component’s entity.
- [BehaviorTreeResource](behaviortreeresource.md): An immutable representation of a behavior tree.
- [BehaviorTreeAction](behaviortreeaction.md): A protocol that defines an action that a behavior tree action node can use.
- [ActionResult](actionresult.md): Status values that an action can report back to the animation system.
