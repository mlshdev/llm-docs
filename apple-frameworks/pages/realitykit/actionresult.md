> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionresult](https://developer.apple.com/documentation/realitykit/actionresult)

# ActionResult

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Status values that an action can report back to the animation system.

## Declaration

```swift
enum ActionResult
```

<a id="overview"></a>

## Overview

Use these values within action event handlers to communicate the state of your action logic back to the animation system.

## Topics

### Getting the action result

- [ActionResult.success](actionresult/success.md): The action completed successfully.
- [ActionResult.running](actionresult/running.md): The action is currently running.
- [ActionResult.failure](actionresult/failure.md): The action has failed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Behavior trees

- [BehaviorTreeComponent](behaviortreecomponent.md): Manages which behavior tree is active for the component’s entity.
- [BehaviorTreeResource](behaviortreeresource.md): An immutable representation of a behavior tree.
- [BehaviorTreeAction](behaviortreeaction.md): A protocol that defines an action that a behavior tree action node can use.
- [BehaviorTreeActionHandler](behaviortreeactionhandler.md): Behavior Tree-specific event handlers that allow an `ActionResult` to be returned from the handler.
