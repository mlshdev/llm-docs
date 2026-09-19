> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsjointscomponent/joints

# joints

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The set of joints the physics joints component stores.

## Declaration

```swift
var joints: PhysicsJoints
```

<a id="discussion"></a>

## Discussion

Add a joint to the correct [PhysicsJointsComponent](../physicsjointscomponent.md) instance by calling its `PhysicsJoint/addToSimulation()-886c4` method.
