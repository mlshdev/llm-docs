> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsjoint/isactive](https://developer.apple.com/documentation/realitykit/physicsjoint/isactive)

# isActive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean that indicates whether the joint is active.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

Inactive joints do not participate in the physics simulation.

One example is a joint that does not reference any [Entity](../entity.md) with [PhysicsBodyMode.dynamic](../physicsbodymode/dynamic.md), or when one or both the referenced entities are not active.
