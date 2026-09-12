> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitiongroup/addtransition(operation:)](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitiongroup/addtransition(operation:))

# addTransition(operation:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Adds a transition to the group, suspending it until all transitions are ready to run together.

## Declaration

```swift
mutating func addTransition(operation: sending @escaping @isolated(any) () async -> ChildTransitionResult)
```

## Parameters

- `operation`: A closure that performs a transition and returns a result.

<a id="discussion"></a>

## Discussion

Call [transition(to:)](../transition%28to_%29.md) on an [AVExperienceController](../../avexperiencecontroller.md) within the operation closure. The transition suspends until all transitions have been added to the group, then perform together with the others.

[withTransitionGroup(body:)](../withtransitiongroup%28body_%29.md) includes the value you return from the closure in the order transitions were added.

```swift
group.addTransition {
    await controller.transition(to: .multiview)
}
```
