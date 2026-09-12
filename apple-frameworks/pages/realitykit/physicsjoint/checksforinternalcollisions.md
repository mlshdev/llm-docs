> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsjoint/checksforinternalcollisions](https://developer.apple.com/documentation/realitykit/physicsjoint/checksforinternalcollisions)

# checksForInternalCollisions

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean that indicates whether the joint checks and reports collisions between the two entity instances.

## Declaration

```swift
var checksForInternalCollisions: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This does not affect how collisions of the two entities referenced in [pin0](pin0.md) and [pin1](pin1.md) interact with other entities.
