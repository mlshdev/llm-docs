> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/behaviortreecomponent/behaviortree](https://developer.apple.com/documentation/realitykit/behaviortreecomponent/behaviortree)

# behaviorTree

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Accesses the current behavior tree. Note that setting the behavior tree to a tree not in `availableBehaviorTrees` will add a uniquely-named entry for the tree in `availableBehaviorTrees`.

## Declaration

```swift
var behaviorTree: BehaviorTreeResource? { get set }
```

## See Also

### Accessing behavior trees

- [availableBehaviorTrees](availablebehaviortrees.md): All the behavior trees that this component can access.
