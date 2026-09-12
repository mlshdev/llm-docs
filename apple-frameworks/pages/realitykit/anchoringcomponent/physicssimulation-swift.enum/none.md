> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/physicssimulation-swift.enum/none](https://developer.apple.com/documentation/realitykit/anchoringcomponent/physicssimulation-swift.enum/none)

# AnchoringComponent.PhysicsSimulation.none

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Opts out the entity and its descendants from having their own physics space.

## Declaration

```swift
case none
```

<a id="discussion"></a>

## Discussion

`none` implies the anchor entity does not have its own physics simulation.

It will use the regular rules to determine which physics simulation the entity is a part of. For more about the rules, please check [PhysicsSimulationComponent](../../physicssimulationcomponent.md).
