> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/behaviortreeaction](https://developer.apple.com/documentation/realitykit/behaviortreeaction)

# BehaviorTreeAction

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A protocol that defines an action that a behavior tree action node can use.

## Declaration

```swift
protocol BehaviorTreeAction : EntityAction
```

<a id="overview"></a>

## Overview

Conform to this protocol as:

```swift
struct CustomBehaviorTreeAction: BehaviorTreeAction, Codable {

    public var isReversible: Bool { false }
    public var isAdditive: Bool { false }
    public var animatedValueType: (any AnimatableData.Type)? { nil }

    // Add your action-specific properties, functions and subscriptions here.
}
```

## Topics

### Subscribing to events

- [subscribe(to:\_:)](behaviortreeaction/subscribe%28to___%29-9mrvx.md): Subscribes to a serializable action event and returns a `ActionResult`.
- [subscribe(to:\_:)](behaviortreeaction/subscribe%28to___%29-3p0pj.md): Shadows the `EntityAction.subscribe(to:_:)` overload that takes a `-> Void` closure.

### Type Methods

- [subscribe(to:\_:)](behaviortreeaction/subscribe%28to___%29.md): Subscribes to a serializable action event and returns a `ActionResult`.

## Relationships

### Inherits From

- [EntityAction](entityaction.md)

## See Also

### Behavior trees

- [BehaviorTreeComponent](behaviortreecomponent.md): Manages which behavior tree is active for the component’s entity.
- [BehaviorTreeResource](behaviortreeresource.md): An immutable representation of a behavior tree.
- [BehaviorTreeActionHandler](behaviortreeactionhandler.md): Behavior Tree-specific event handlers that allow an `ActionResult` to be returned from the handler.
- [ActionResult](actionresult.md): Status values that an action can report back to the animation system.
