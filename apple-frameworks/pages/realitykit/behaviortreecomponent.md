> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/behaviortreecomponent](https://developer.apple.com/documentation/realitykit/behaviortreecomponent)

# BehaviorTreeComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages which behavior tree is active for the component’s entity.

## Declaration

```swift
struct BehaviorTreeComponent
```

## Topics

### Creating a behavior tree component

- [init(behaviorTree:availableBehaviorTrees:)](behaviortreecomponent/init%28behaviortree_availablebehaviortrees_%29.md)

### Accessing behavior trees

- [behaviorTree](behaviortreecomponent/behaviortree.md): Accesses the current behavior tree. Note that setting the behavior tree to a tree not in `availableBehaviorTrees` will add a uniquely-named entry for the tree in `availableBehaviorTrees`.
- [availableBehaviorTrees](behaviortreecomponent/availablebehaviortrees.md): All the behavior trees that this component can access.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Behavior trees

- [BehaviorTreeResource](behaviortreeresource.md): An immutable representation of a behavior tree.
- [BehaviorTreeAction](behaviortreeaction.md): A protocol that defines an action that a behavior tree action node can use.
- [BehaviorTreeActionHandler](behaviortreeactionhandler.md): Behavior Tree-specific event handlers that allow an `ActionResult` to be returned from the handler.
- [ActionResult](actionresult.md): Status values that an action can report back to the animation system.
