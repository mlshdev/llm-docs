> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/physicsfixedjoint/checksforinternalcollisions

# checksForInternalCollisions

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean that indicates whether the joint checks and reports collisions between the two entity instances.

## Declaration

```swift
let checksForInternalCollisions: Bool
```

<a id="discussion"></a>

## Discussion

The entities that [PhysicsFixedJoint](../physicsfixedjoint.md) references are not checked or reported, so this property only returns `false`.
