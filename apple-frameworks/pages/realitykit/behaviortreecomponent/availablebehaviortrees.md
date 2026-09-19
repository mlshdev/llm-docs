> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/behaviortreecomponent/availablebehaviortrees

# availableBehaviorTrees

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

All the behavior trees that this component can access.

## Declaration

```swift
var availableBehaviorTrees: [String : BehaviorTreeResource] { get set }
```

## See Also

### Accessing behavior trees

- [behaviorTree](behaviortree.md): Accesses the current behavior tree. Note that setting the behavior tree to a tree not in `availableBehaviorTrees` will add a uniquely-named entry for the tree in `availableBehaviorTrees`.
